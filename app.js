// ===== State =====
const STORAGE_KEYS = {
  level: "avw-level",
  active: "avw-active-module",
  done: "avw-done",
  capstone: "avw-capstone",
  work: "avw-work",
  checklist: "avw-checklist",
  quiz: "avw-quiz",
  templates: "avw-templates"
};

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

const state = {
  level: localStorage.getItem(STORAGE_KEYS.level) || "foundation",
  activeModule: localStorage.getItem(STORAGE_KEYS.active) || "m1",
  done: new Set(readJSON(STORAGE_KEYS.done, [])),
  capstone: new Set(readJSON(STORAGE_KEYS.capstone, [])),
  work: readJSON(STORAGE_KEYS.work, {}),
  checklist: readJSON(STORAGE_KEYS.checklist, {}),
  quiz: readJSON(STORAGE_KEYS.quiz, {}),
  templates: readJSON(STORAGE_KEYS.templates, {}),
  flashIndex: 0,
  flashFlipped: false,
  flashDeck: "done",
  detailTab: "lesson"
};

function saveState() {
  localStorage.setItem(STORAGE_KEYS.level, state.level);
  localStorage.setItem(STORAGE_KEYS.active, state.activeModule);
  localStorage.setItem(STORAGE_KEYS.done, JSON.stringify([...state.done]));
  localStorage.setItem(STORAGE_KEYS.capstone, JSON.stringify([...state.capstone]));
  localStorage.setItem(STORAGE_KEYS.work, JSON.stringify(state.work));
  localStorage.setItem(STORAGE_KEYS.checklist, JSON.stringify(state.checklist));
  localStorage.setItem(STORAGE_KEYS.quiz, JSON.stringify(state.quiz));
  localStorage.setItem(STORAGE_KEYS.templates, JSON.stringify(state.templates));
}

// ===== Helpers =====
function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function modulesByLevel() {
  return curriculum.filter((m) => m.level === state.level);
}

function getActiveModule() {
  return curriculum.find((m) => m.id === state.activeModule) || modulesByLevel()[0];
}

function getModuleByNumber(number) {
  return curriculum.find((m) => m.number === number);
}

function checklistDone(module) {
  const checked = state.checklist[module.id] || [];
  return checked.length >= module.checklist.length;
}

function quizScore(module) {
  const record = state.quiz[module.id];
  if (!record) return null;
  const answered = Object.keys(record).length;
  if (answered < module.quiz.length) return null;
  const correct = module.quiz.filter((q, i) => record[i] === q.answer).length;
  return { correct, total: module.quiz.length };
}

function copyToClipboard(text, button) {
  const flash = (ok) => {
    const original = button.dataset.label || button.textContent;
    button.dataset.label = original;
    button.textContent = ok ? "Đã copy ✓" : "Không copy được";
    setTimeout(() => (button.textContent = original), 1600);
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => flash(true), () => flash(false));
  } else {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    flash(ok);
  }
}

function download(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

// ===== Project bridge (my-project.js — sinh bởi skill course-mentor) =====
function getProject() {
  return typeof myProject !== "undefined" && myProject && myProject.project ? myProject : null;
}

function projectModule(moduleId) {
  const p = getProject();
  return p && p.modules ? p.modules[moduleId] : null;
}

function roadmapStatus(moduleId) {
  const p = getProject();
  if (!p || !Array.isArray(p.roadmap)) return null;
  const entry = p.roadmap.find((r) => r.moduleId === moduleId);
  return entry ? entry.status : null;
}

const ROADMAP_LABELS = { now: "đang cần cho dự án", next: "sắp cần", later: "để sau", done: "đã dùng" };

function renderProjectPanel() {
  const container = document.getElementById("projectPanel");
  const p = getProject();
  if (!p) {
    container.innerHTML = `
      <p class="eyebrow">Học theo dự án</p>
      <p class="project-empty">Chưa kết nối dự án nào. Chạy skill <strong>course-mentor</strong> với folder dự án của bạn để sinh file <code>my-project.js</code> — khóa học sẽ tự uốn theo dự án đó.</p>
    `;
    return;
  }
  const focus = p.focus && curriculum.find((m) => m.id === p.focus.moduleId);
  container.innerHTML = `
    <p class="eyebrow">Học theo dự án</p>
    <h3 class="project-name">${escapeHTML(p.project.name)}</h3>
    <p class="project-stage">${escapeHTML(p.project.stage)}</p>
    ${
      focus
        ? `<div class="project-focus">
            <span>Trọng tâm hiện tại</span>
            <strong>Module ${focus.number} · ${focus.title}</strong>
            ${p.focus.reason ? `<p>${escapeHTML(p.focus.reason)}</p>` : ""}
            <button class="ghost-button" type="button" id="goFocus">Đến module này</button>
          </div>`
        : ""
    }
    ${p.generatedAt ? `<p class="project-updated">Cập nhật: ${escapeHTML(p.generatedAt)}</p>` : ""}
  `;
  const goFocus = document.getElementById("goFocus");
  if (goFocus && focus) {
    goFocus.onclick = () => {
      state.level = focus.level;
      state.activeModule = focus.id;
      saveState();
      render();
    };
  }
}

// ===== Navigation & progress =====
function setLevel(level) {
  state.level = level;
  state.activeModule = modulesByLevel()[0].id;
  saveState();
  render();
}

function setActiveModule(moduleId) {
  state.activeModule = moduleId;
  saveState();
  render();
}

function toggleModule(moduleId) {
  if (state.done.has(moduleId)) {
    state.done.delete(moduleId);
  } else {
    state.done.add(moduleId);
  }
  saveState();
  render();
}

function renderLevelTabs() {
  document.querySelectorAll(".level-tab").forEach((button) => {
    const active = button.dataset.level === state.level;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
    button.onclick = () => setLevel(button.dataset.level);
  });
}

function renderProgress() {
  const total = curriculum.length;
  const done = state.done.size;
  document.getElementById("progressLabel").textContent = `${done}/${total}`;
  document.getElementById("progressBar").style.width = `${Math.round((done / total) * 100)}%`;
}

function renderMetrics() {
  const byLevel = (level) => curriculum.filter((m) => m.level === level);
  const doneIn = (mods) => mods.filter((m) => state.done.has(m.id)).length;
  const foundationAll = byLevel("foundation");
  const advancedAll = byLevel("advanced");
  const masterAll = byLevel("master");
  const quizzesPassed = curriculum.filter((m) => {
    const score = quizScore(m);
    return score && score.correct === score.total;
  }).length;
  const metrics = [
    { value: `${doneIn(foundationAll)}/${foundationAll.length}`, label: "module Foundation hoàn thành" },
    { value: `${doneIn(advancedAll)}/${advancedAll.length}`, label: "module Advanced hoàn thành" },
    { value: `${doneIn(masterAll)}/${masterAll.length}`, label: "module Master hoàn thành" },
    { value: `${quizzesPassed}/${curriculum.length}`, label: "quiz đạt điểm tuyệt đối" }
  ];
  document.getElementById("metricRow").innerHTML = metrics
    .map((m) => `<div class="metric"><strong>${m.value}</strong><span>${m.label}</span></div>`)
    .join("");
}

function renderModuleNav() {
  const nav = document.getElementById("moduleNav");
  nav.innerHTML = modulesByLevel()
    .map((module) => {
      const isActive = module.id === state.activeModule;
      const isDone = state.done.has(module.id);
      const previous = getModuleByNumber(module.number - 1);
      const suggested = previous && !state.done.has(previous.id);
      const rStatus = roadmapStatus(module.id);
      const badge = rStatus && ROADMAP_LABELS[rStatus] ? `<span class="roadmap-badge is-${rStatus}">${ROADMAP_LABELS[rStatus]}</span>` : "";
      return `
        <button class="module-link ${isActive ? "is-active" : ""} ${isDone ? "is-done" : ""}" type="button" data-module="${module.id}">
          <span class="module-number">${module.number}</span>
          <span>
            <span class="module-name">${module.title}</span>
            <span class="module-duration">${module.duration}${suggested ? " · nên học sau module " + previous.number : ""}</span>
            ${badge}
          </span>
          <span class="check-dot" aria-hidden="true"></span>
        </button>
      `;
    })
    .join("");

  nav.querySelectorAll(".module-link").forEach((button) => {
    button.onclick = () => setActiveModule(button.dataset.module);
  });
}

// ===== Module detail =====
function buildCritiquePrompt(module) {
  const work = (state.work[module.id] || "").trim();
  const rubric = typeof moduleRubrics !== "undefined" ? moduleRubrics[module.id] || [] : [];
  const pm = projectModule(module.id);
  const p = getProject();
  const projectContext =
    pm && p
      ? [
          ``,
          `## Bối cảnh dự án thật của tôi`,
          `Dự án: ${p.project.name} — ${p.project.goal || ""}`,
          `Giai đoạn: ${p.project.stage}`,
          pm.customPractice ? `Bài thực hành đã được cá nhân hóa: ${pm.customPractice}` : "",
          `Hãy phản biện bài làm trong bối cảnh dự án này, không phản biện chung chung.`
        ].filter(Boolean)
      : [];
  return [
    `Bạn là người hướng dẫn khóa "Agentic Vibe Working". Hãy phản biện bài thực hành của tôi một cách thẳng thắn, cụ thể.`,
    ``,
    `## Module ${module.number}: ${module.title}`,
    `Bài thực hành: ${module.practice}`,
    `Sản phẩm yêu cầu: ${module.output}`,
    ``,
    `## Tiêu chí kiểm chứng`,
    ...module.checklist.map((item, i) => `${i + 1}. ${item}`),
    ...(rubric.length
      ? [
          ``,
          `## Rubric chấm đầu ra`,
          ...rubric.map((item, i) => `${i + 1}. ${item.criterion} — Đạt: ${item.pass} — Xuất sắc: ${item.excellent}`)
        ]
      : []),
    ``,
    ...projectContext,
    ``,
    `## Bài làm của tôi`,
    work || "(chưa có nội dung)",
    ``,
    `## Yêu cầu`,
    `1. Chấm từng tiêu chí: đạt / chưa đạt, kèm dẫn chứng từ bài làm.`,
    `2. Chỉ ra 3 điểm yếu lớn nhất và cách sửa cụ thể.`,
    `3. Đặt 2 câu hỏi buộc tôi suy nghĩ sâu hơn về bài làm.`,
    `Không khen xã giao. Nếu bài làm chưa đủ thông tin để đánh giá, hãy nói rõ thiếu gì.`
  ].join("\n");
}

function renderWorkspaceSection(module) {
  const work = state.work[module.id] || "";
  return `
    <div class="content-block workspace-block">
      <h3>Xưởng thực hành</h3>
      <p class="block-hint">Làm bài ngay tại đây. Nội dung tự lưu trên trình duyệt.</p>
      <textarea id="workArea" rows="8" placeholder="Viết bài thực hành của bạn: ${escapeHTML(module.output)}"></textarea>
      <div class="workspace-actions">
        <span class="save-hint" id="saveHint">${work ? "Đã lưu" : "Chưa có nội dung"}</span>
        <button class="ghost-button" type="button" id="critiqueButton">Copy prompt nhờ AI phản biện</button>
      </div>
    </div>
  `;
}

function renderChecklistSection(module) {
  const checked = new Set(state.checklist[module.id] || []);
  return `
    <div class="content-block checklist-block">
      <h3>Kiểm chứng trước khi hoàn thành</h3>
      <p class="block-hint">Đúng tinh thần Verify: tự đối chiếu bài làm với từng tiêu chí.</p>
      <ul class="verify-list">
        ${module.checklist
          .map(
            (item, i) => `
              <li>
                <label>
                  <input type="checkbox" data-check="${i}" ${checked.has(i) ? "checked" : ""} />
                  <span>${item}</span>
                </label>
              </li>
            `
          )
          .join("")}
      </ul>
    </div>
  `;
}

function renderQuizSection(module) {
  const record = state.quiz[module.id] || {};
  const score = quizScore(module);
  return `
    <div class="content-block quiz-block">
      <div class="quiz-heading">
        <h3>Quiz kiểm tra hiểu bài</h3>
        ${
          score
            ? `<span class="quiz-score ${score.correct === score.total ? "is-perfect" : ""}">${score.correct}/${score.total} đúng</span>`
            : `<span class="quiz-score">${Object.keys(record).length}/${module.quiz.length} câu</span>`
        }
      </div>
      ${module.quiz
        .map((question, qi) => {
          const picked = record[qi];
          const answered = picked !== undefined;
          return `
            <div class="quiz-question">
              <p class="quiz-q">${qi + 1}. ${question.q}</p>
              <div class="quiz-options">
                ${question.options
                  .map((option, oi) => {
                    let cls = "quiz-option";
                    if (answered) {
                      if (oi === question.answer) cls += " is-correct";
                      else if (oi === picked) cls += " is-wrong";
                      cls += " is-locked";
                    }
                    return `<button type="button" class="${cls}" data-q="${qi}" data-o="${oi}" ${answered ? "disabled" : ""}>${option}</button>`;
                  })
                  .join("")}
              </div>
              ${answered ? `<p class="quiz-explain">${picked === question.answer ? "Chính xác." : "Chưa đúng."} ${question.explain}</p>` : ""}
            </div>
          `;
        })
        .join("")}
      ${Object.keys(record).length ? `<button class="ghost-button" type="button" id="quizReset">Làm lại quiz</button>` : ""}
    </div>
  `;
}

function renderLessonTab(module) {
  const lesson = typeof lessons !== "undefined" ? lessons[module.id] : null;
  const intro = `
    <div class="content-block">
      <h3>Mục tiêu học tập</h3>
      <ul>${module.objectives.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
  if (!lesson) {
    return `${intro}<p class="block-hint">Bài giảng cho module này đang được biên soạn.</p>`;
  }
  return `
    ${intro}
    <div class="lesson-meta">
      <span class="pill pill-soft">${lesson.readingTime}</span>
      <span class="pill pill-soft">${lesson.sections.length} phần</span>
    </div>
    ${lesson.sections
      .map(
        (section) => `
          <section class="lesson-section">
            <h3>${section.title}</h3>
            ${section.body}
          </section>
        `
      )
      .join("")}
    <div class="lesson-next">
      <p>Đọc xong bài giảng? Chuyển sang tab <strong>Thực hành &amp; kiểm tra</strong> để làm bài, tự kiểm chứng và làm quiz.</p>
      <button class="ghost-button" type="button" id="goPractice">Sang phần thực hành →</button>
    </div>
  `;
}

function renderProjectBlock(module) {
  const pm = projectModule(module.id);
  const p = getProject();
  if (!pm || !p) return "";
  return `
    <div class="content-block project-block">
      <div class="project-block-head">
        <h3>Nhiệm vụ theo dự án: ${escapeHTML(p.project.name)}</h3>
        ${pm.relevance ? `<span class="pill pill-soft">liên quan: ${escapeHTML(pm.relevance)}</span>` : ""}
      </div>
      ${pm.customPractice ? `<p><strong>Bài thực hành phiên bản dự án:</strong> ${escapeHTML(pm.customPractice)}</p>` : ""}
      ${pm.customOutput ? `<p><strong>Sản phẩm đóng góp vào dự án:</strong> ${escapeHTML(pm.customOutput)}</p>` : ""}
      ${
        Array.isArray(pm.projectChecklist) && pm.projectChecklist.length
          ? `<p class="block-hint">Tiêu chí gắn với dự án:</p><ul>${pm.projectChecklist.map((c) => `<li>${escapeHTML(c)}</li>`).join("")}</ul>`
          : ""
      }
      ${
        Array.isArray(pm.suggestions) && pm.suggestions.length
          ? `<p class="block-hint">Gợi ý từ mentor:</p><ul>${pm.suggestions.map((s) => `<li>${escapeHTML(s)}</li>`).join("")}</ul>`
          : ""
      }
    </div>
  `;
}

function renderRubricSection(module) {
  const rubric = typeof moduleRubrics !== "undefined" ? moduleRubrics[module.id] || [] : [];
  if (!rubric.length) return "";
  return `
    <div class="content-block rubric-block">
      <h3>Rubric chấm đầu ra</h3>
      <p class="block-hint">Dùng phần này để tự chấm trước khi tick checklist hoặc nhờ AI phản biện.</p>
      <div class="rubric-grid">
        ${rubric
          .map(
            (item) => `
              <article class="rubric-card">
                <h4>${escapeHTML(item.criterion)}</h4>
                <p><strong>Đạt:</strong> ${escapeHTML(item.pass)}</p>
                <p><strong>Xuất sắc:</strong> ${escapeHTML(item.excellent)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderPracticeTab(module) {
  return `
    ${renderProjectBlock(module)}
    <div class="practice-grid">
      <div class="practice-item">
        <h4>Bài thực hành</h4>
        <p>${module.practice}</p>
      </div>
      <div class="practice-item">
        <h4>Sản phẩm đầu ra</h4>
        <p>${module.output}</p>
      </div>
    </div>
    ${renderRubricSection(module)}
    ${renderWorkspaceSection(module)}
    ${renderChecklistSection(module)}
    ${renderQuizSection(module)}
  `;
}

function renderModuleDetail() {
  const module = getActiveModule();
  const isDone = state.done.has(module.id);
  const canComplete = checklistDone(module);
  const previous = getModuleByNumber(module.number - 1);
  const gatingNote =
    previous && !state.done.has(previous.id)
      ? `<div class="gating-note">Gợi ý: hoàn thành <strong>Module ${previous.number} · ${previous.title}</strong> trước để học theo đúng trình tự.</div>`
      : "";
  const isLesson = state.detailTab === "lesson";

  document.getElementById("moduleDetail").innerHTML = `
    <div class="module-hero">
      <div class="module-meta">
        <span class="pill">Module ${module.number}</span>
        <span class="pill">${{ foundation: "Cơ bản", advanced: "Nâng cao", master: "Master" }[module.level] || module.level}</span>
        <span class="pill">${module.duration}</span>
      </div>
      <div class="module-title">
        <h2>${module.title}</h2>
        <p>${module.description}</p>
      </div>
      <button class="complete-button" type="button" id="completeButton" ${!isDone && !canComplete ? "disabled" : ""}>
        <span aria-hidden="true">${isDone ? "✓" : "+"}</span>
        ${isDone ? "Đã hoàn thành" : "Đánh dấu hoàn thành"}
      </button>
      ${!isDone && !canComplete ? `<p class="complete-hint">Tick đủ checklist trong tab Thực hành &amp; kiểm tra để mở nút hoàn thành.</p>` : ""}
    </div>

    <div class="detail-tabs" role="tablist" aria-label="Nội dung module">
      <button class="detail-tab ${isLesson ? "is-active" : ""}" type="button" data-tab="lesson" role="tab" aria-selected="${isLesson}">Bài giảng</button>
      <button class="detail-tab ${!isLesson ? "is-active" : ""}" type="button" data-tab="practice" role="tab" aria-selected="${!isLesson}">Thực hành &amp; kiểm tra</button>
    </div>

    <div class="module-body">
      ${gatingNote}
      ${isLesson ? renderLessonTab(module) : renderPracticeTab(module)}
    </div>
  `;

  // Tabs
  document.querySelectorAll(".detail-tab").forEach((button) => {
    button.onclick = () => {
      state.detailTab = button.dataset.tab;
      renderModuleDetail();
    };
  });

  // Complete
  document.getElementById("completeButton").onclick = () => toggleModule(module.id);

  if (isLesson) {
    const goPractice = document.getElementById("goPractice");
    if (goPractice) {
      goPractice.onclick = () => {
        state.detailTab = "practice";
        renderModuleDetail();
        document.getElementById("moduleDetail").scrollIntoView({ behavior: "smooth" });
      };
    }
    return;
  }

  // Workspace
  const workArea = document.getElementById("workArea");
  workArea.value = state.work[module.id] || "";
  let saveTimer;
  workArea.addEventListener("input", () => {
    clearTimeout(saveTimer);
    document.getElementById("saveHint").textContent = "Đang lưu…";
    saveTimer = setTimeout(() => {
      state.work[module.id] = workArea.value;
      saveState();
      document.getElementById("saveHint").textContent = "Đã lưu";
    }, 400);
  });
  document.getElementById("critiqueButton").onclick = (event) =>
    copyToClipboard(buildCritiquePrompt(module), event.currentTarget);

  // Checklist
  document.querySelectorAll("[data-check]").forEach((input) => {
    input.onchange = () => {
      const checked = new Set(state.checklist[module.id] || []);
      const index = Number(input.dataset.check);
      input.checked ? checked.add(index) : checked.delete(index);
      state.checklist[module.id] = [...checked];
      saveState();
      renderModuleDetail();
      renderModuleNav();
    };
  });

  // Quiz
  document.querySelectorAll(".quiz-option:not(.is-locked)").forEach((button) => {
    button.onclick = () => {
      const record = state.quiz[module.id] || {};
      record[button.dataset.q] = Number(button.dataset.o);
      state.quiz[module.id] = record;
      saveState();
      renderModuleDetail();
      renderMetrics();
    };
  });
  const quizReset = document.getElementById("quizReset");
  if (quizReset) {
    quizReset.onclick = () => {
      delete state.quiz[module.id];
      saveState();
      renderModuleDetail();
      renderMetrics();
    };
  }
}

// ===== Capstone =====
function renderCapstone() {
  document.getElementById("capstoneList").innerHTML = capstoneItems
    .map((item, index) => {
      const checked = state.capstone.has(index);
      return `
        <li>
          <label>
            <input type="checkbox" data-capstone="${index}" ${checked ? "checked" : ""} />
            <span>${item}</span>
          </label>
        </li>
      `;
    })
    .join("");

  document.querySelectorAll("[data-capstone]").forEach((input) => {
    input.onchange = () => {
      const index = Number(input.dataset.capstone);
      input.checked ? state.capstone.add(index) : state.capstone.delete(index);
      saveState();
    };
  });
}

function renderLevelGuide() {
  const container = document.getElementById("levelGuide");
  if (!container || typeof levelGuides === "undefined") return;
  const guide = levelGuides[state.level];
  if (!guide) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `
    <h3>${escapeHTML(guide.title)}</h3>
    <p>${escapeHTML(guide.promise)}</p>
    <p class="resource-label">Cần có trước khi học</p>
    <ul class="resource-list">${guide.prerequisites.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    <p class="resource-label">Đầu ra khi qua chặng</p>
    <ul class="resource-list">${guide.exitCriteria.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
  `;
}

// ===== Templates tương tác =====
function templateText(tool) {
  const values = state.templates[tool.id] || {};
  return tool.fields.map((field) => `${field.label}: ${values[field.key] || ""}`).join("\n");
}

function renderTools() {
  document.getElementById("toolGrid").innerHTML = tools
    .map(
      (tool) => `
        <article class="tool-card">
          <div>
            <p class="eyebrow">Template điền được</p>
            <h3>${tool.title}</h3>
          </div>
          <p>${tool.description}</p>
          <div class="tool-fields">
            ${tool.fields
              .map(
                (field) => `
                  <label class="tool-field">
                    <span>${field.label}</span>
                    <input type="text" data-tool="${tool.id}" data-field="${field.key}" placeholder="${escapeHTML(field.placeholder)}" />
                  </label>
                `
              )
              .join("")}
          </div>
          <button class="ghost-button" type="button" data-copy-tool="${tool.id}">Copy để dán vào AI</button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-tool]").forEach((input) => {
    const values = state.templates[input.dataset.tool] || {};
    input.value = values[input.dataset.field] || "";
    input.addEventListener("input", () => {
      const toolValues = state.templates[input.dataset.tool] || {};
      toolValues[input.dataset.field] = input.value;
      state.templates[input.dataset.tool] = toolValues;
      saveState();
    });
  });

  document.querySelectorAll("[data-copy-tool]").forEach((button) => {
    button.onclick = () => {
      const tool = tools.find((t) => t.id === button.dataset.copyTool);
      copyToClipboard(templateText(tool), button);
    };
  });
}

function renderSamples() {
  const container = document.getElementById("sampleArtifactGrid");
  if (!container || typeof sampleArtifacts === "undefined") return;
  container.innerHTML = sampleArtifacts
    .map(
      (artifact) => `
        <article class="sample-card">
          <div>
            <p class="eyebrow">${escapeHTML(artifact.module)} · Artifact mẫu</p>
            <h3>${escapeHTML(artifact.title)}</h3>
          </div>
          <p>${escapeHTML(artifact.description)}</p>
          <pre><code>${escapeHTML(artifact.body)}</code></pre>
          <button class="ghost-button" type="button" data-copy-sample="${escapeHTML(artifact.id)}">Copy mẫu</button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-copy-sample]").forEach((button) => {
    button.onclick = () => {
      const artifact = sampleArtifacts.find((item) => item.id === button.dataset.copySample);
      copyToClipboard(artifact.body, button);
    };
  });
}

// ===== Flashcards =====
function flashDeckCards() {
  const source =
    state.flashDeck === "done" && state.done.size
      ? curriculum.filter((m) => state.done.has(m.id))
      : curriculum;
  return source.flatMap((m) =>
    m.flashcards.map((card) => ({ ...card, module: `Module ${m.number}` }))
  );
}

function renderFlashcards() {
  const cards = flashDeckCards();
  const container = document.getElementById("flashcardZone");
  if (!cards.length) {
    container.innerHTML = `<p class="block-hint">Chưa có thẻ nào.</p>`;
    return;
  }
  state.flashIndex = ((state.flashIndex % cards.length) + cards.length) % cards.length;
  const card = cards[state.flashIndex];
  const usingAll = !(state.flashDeck === "done" && state.done.size);

  container.innerHTML = `
    <div class="flash-controls">
      <div class="flash-deck-switch">
        <button type="button" class="deck-tab ${state.flashDeck === "done" ? "is-active" : ""}" data-deck="done">Module đã học</button>
        <button type="button" class="deck-tab ${state.flashDeck === "all" ? "is-active" : ""}" data-deck="all">Tất cả</button>
      </div>
      <span class="flash-counter">${state.flashIndex + 1}/${cards.length}${usingAll && state.flashDeck === "done" ? " · chưa hoàn thành module nào, hiển thị tất cả" : ""}</span>
    </div>
    <button type="button" class="flashcard ${state.flashFlipped ? "is-flipped" : ""}" id="flashcard" aria-label="Lật thẻ">
      <span class="flash-module">${card.module}</span>
      <span class="flash-text">${state.flashFlipped ? card.back : card.front}</span>
      <span class="flash-hint">${state.flashFlipped ? "Bấm để xem mặt trước" : "Bấm để lật thẻ"}</span>
    </button>
    <div class="flash-nav">
      <button type="button" class="ghost-button" id="flashPrev">← Trước</button>
      <button type="button" class="ghost-button" id="flashShuffle">Xáo thẻ</button>
      <button type="button" class="ghost-button" id="flashNext">Sau →</button>
    </div>
  `;

  document.getElementById("flashcard").onclick = () => {
    state.flashFlipped = !state.flashFlipped;
    renderFlashcards();
  };
  document.getElementById("flashPrev").onclick = () => {
    state.flashIndex -= 1;
    state.flashFlipped = false;
    renderFlashcards();
  };
  document.getElementById("flashNext").onclick = () => {
    state.flashIndex += 1;
    state.flashFlipped = false;
    renderFlashcards();
  };
  document.getElementById("flashShuffle").onclick = () => {
    state.flashIndex = Math.floor(Math.random() * cards.length);
    state.flashFlipped = false;
    renderFlashcards();
  };
  container.querySelectorAll(".deck-tab").forEach((button) => {
    button.onclick = () => {
      state.flashDeck = button.dataset.deck;
      state.flashIndex = 0;
      state.flashFlipped = false;
      renderFlashcards();
    };
  });
}

// ===== Export / Import =====
function exportJSON() {
  const payload = {
    exportedAt: new Date().toISOString(),
    level: state.level,
    activeModule: state.activeModule,
    done: [...state.done],
    capstone: [...state.capstone],
    work: state.work,
    checklist: state.checklist,
    quiz: state.quiz,
    templates: state.templates
  };
  download("avw-tien-do.json", JSON.stringify(payload, null, 2), "application/json");
}

function exportMarkdown() {
  const lines = ["# Portfolio khóa Agentic Vibe Working", "", `Xuất ngày: ${new Date().toLocaleDateString("vi-VN")}`, ""];
  curriculum.forEach((module) => {
    const score = quizScore(module);
    lines.push(`## Module ${module.number}: ${module.title}`);
    lines.push(`- Trạng thái: ${state.done.has(module.id) ? "Hoàn thành" : "Chưa hoàn thành"}`);
    lines.push(`- Checklist kiểm chứng: ${(state.checklist[module.id] || []).length}/${module.checklist.length}`);
    lines.push(`- Quiz: ${score ? `${score.correct}/${score.total} đúng` : "chưa làm"}`);
    const work = (state.work[module.id] || "").trim();
    if (work) {
      lines.push("", "### Bài làm", "", work);
    }
    lines.push("");
  });
  tools.forEach((tool) => {
    const values = state.templates[tool.id] || {};
    if (Object.values(values).some((v) => v && v.trim())) {
      lines.push(`## Template: ${tool.title}`, "", "```", templateText(tool), "```", "");
    }
  });
  download("avw-portfolio.md", lines.join("\n"), "text/markdown");
}

function importJSON(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      state.level = data.level || state.level;
      state.activeModule = data.activeModule || state.activeModule;
      state.done = new Set(data.done || []);
      state.capstone = new Set(data.capstone || []);
      state.work = data.work || {};
      state.checklist = data.checklist || {};
      state.quiz = data.quiz || {};
      state.templates = data.templates || {};
      saveState();
      render();
    } catch {
      alert("File không hợp lệ. Hãy chọn file JSON đã xuất từ trang này.");
    }
  };
  reader.readAsText(file);
}

function bindDataActions() {
  document.getElementById("exportJson").onclick = exportJSON;
  document.getElementById("exportMd").onclick = exportMarkdown;
  const importInput = document.getElementById("importFile");
  document.getElementById("importJson").onclick = () => importInput.click();
  importInput.onchange = () => {
    if (importInput.files[0]) importJSON(importInput.files[0]);
    importInput.value = "";
  };
}

// ===== Render =====
function render() {
  renderLevelTabs();
  renderProgress();
  renderMetrics();
  renderProjectPanel();
  renderModuleNav();
  renderModuleDetail();
  renderCapstone();
  renderLevelGuide();
  renderTools();
  renderSamples();
  renderFlashcards();
}

bindDataActions();
render();
