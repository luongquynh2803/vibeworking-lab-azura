# Hướng dẫn sử dụng Vibeworking Lab

Công cụ tự học **Agentic Vibe Working** — từ tư duy làm việc với AI đến xây dựng, kiểm thử, thương mại hóa Agent Skills và điều phối cả đội agent. 19 module (3 cấp độ: Cơ bản, Nâng cao, Master), học bằng cách làm trên chính dự án của bạn.

---

## 1. Cài đặt (2 phút)

**Cách 1 — Tải ZIP:** vào trang GitHub của repo → nút **Code** → **Download ZIP** → giải nén.

**Cách 2 — Git:**
```bash
git clone <link-repo>
```

**Mở khóa học:** nhấp đúp file `index.html` là chạy (không cần cài gì thêm). Nếu muốn chạy qua server:
```bash
cd vibeworking-lab
python3 -m http.server 8080
# rồi mở http://localhost:8080
```

> Toàn bộ tiến độ, bài làm lưu trong **trình duyệt trên máy bạn** (localStorage). Không có server, không ai xem được bài của bạn.

## 2. Lộ trình học đề xuất

| Chặng | Module | Thời lượng gợi ý |
|---|---|---|
| **Cơ bản** | M1-M5: mindset, context, prompting, framework 4 bước, AI assistant | 4 buổi |
| **Nâng cao — quy trình** | M6-M7: chưng cất tri thức thành workflow, workflow chuyên nghiệp | 2 tuần |
| **Nâng cao — skill** | M8-M10: build skill, kiểm thử, đóng gói & bán | 3-4 tuần |
| **Nâng cao — dữ liệu** | M11-M12: data layer / second brain, knowledge graph | 2 tuần |
| **Master — engineering kit** | M13-M15: vận hành ClaudeKit, pipeline TDD/red-team, orchestration đa agent | 3-4 tuần |
| **Master — OpenClaw** | M16-M19: trợ lý AI cá nhân tự vận hành — cài đặt, trí nhớ & persona, automation & coding harness, security & production | 4 tuần |

Học tuần tự — module sau xây trên sản phẩm của module trước (workflow M6 → skill M8 → test M9 → đóng gói M10). Track **Master** dành cho người đã đi hết 12 module: điều kiện thực tế là bạn đã ship ít nhất một sản phẩm và quen nhịp plan → làm → kiểm chứng.

## 3. Cách học một module (vòng chuẩn ~1-2 giờ)

1. **Tab "Bài giảng"** — đọc bài giảng (11-16 phút). Các prompt mẫu trong khung đen copy dùng được ngay.
2. **Tab "Thực hành & kiểm tra"** — làm bài vào ô **Xưởng thực hành** (tự lưu khi gõ).
3. Bấm **"Copy prompt nhờ AI phản biện"** → dán vào Claude/ChatGPT → nhận phản biện theo đúng tiêu chí của module → sửa bài.
4. Tick **checklist kiểm chứng** (tự đối chiếu trung thực — checklist là "Verify" của chính bạn).
5. Làm **quiz** 3 câu (có giải thích ngay, sai làm lại được).
6. Nút **"Đánh dấu hoàn thành"** chỉ mở khi checklist đủ — đó là chủ đích, đừng tick khống.

Cuối trang có **flashcard ôn tập** — vài thẻ mỗi ngày cho các module đã học, và **3 template điền được** (Context Blueprint, Workflow Canvas, Agent Skill Spec) dùng xuyên suốt khóa.

## 4. Kết nối khóa học với dự án của bạn (khuyên dùng)

Đây là tính năng đáng giá nhất: khóa học **tự uốn theo dự án bạn đang làm** — bài thực hành viết lại bằng ngữ cảnh thật, module được gắn nhãn "đang cần cho dự án".

**Yêu cầu:** Claude Cowork (desktop) hoặc Claude Code CLI.

**Các bước:**
1. Mở Claude với quyền truy cập **2 folder**: folder khóa học này + folder dự án của bạn.
2. Nói: *"Chạy skill course-mentor trong skills/course-mentor/SKILL.md với dự án ở [đường dẫn folder dự án]"*. Muốn tính cả tiến độ học thì kèm file export (mục 5).
3. Skill khảo sát dự án và sinh file `my-project.js` vào folder khóa học.
4. Refresh trình duyệt (**Ctrl+Shift+R**) — sidebar hiện panel dự án + module trọng tâm; các module liên quan có badge và bài tập riêng cho dự án.

Dự án tiến triển → nói *"cập nhật course mentor"* để chạy lại. Đổi dự án khác → chạy với folder mới, file ghi đè.

> `my-project.js` là **file cá nhân** — đã nằm trong `.gitignore`, đừng commit/chia sẻ (nó chứa thông tin dự án của bạn).

## 5. Sao lưu & chuyển máy

- **Xuất tiến độ (JSON)** — sidebar trái: backup toàn bộ tiến độ + bài làm + template. Nên xuất mỗi tuần.
- **Nhập tiến độ từ file** — khôi phục trên máy/trình duyệt khác.
- **Xuất portfolio (Markdown)** — toàn bộ bài làm thành 1 file .md: dùng để nộp cho quản lý, đưa AI tổng kết, hoặc làm hồ sơ năng lực.

⚠️ Xóa dữ liệu trình duyệt = mất tiến độ (nếu chưa export). Mỗi trình duyệt/profile là một bộ tiến độ riêng.

## 6. Cam kết đầu ra

Học nghiêm túc hết 12 module, bạn có: bản đồ công việc cá nhân dùng AI (M1), bộ context + prompt cá nhân (M2-M3), một mini-project chạy bằng quy trình 4 bước (M4), một prototype (M5), một workflow vận hành được (M6-M7), một Agent Skill đã kiểm thử (M8-M9), một gói sản phẩm chia sẻ/bán được (M10), và một hệ thống dữ liệu + tri thức bạn sở hữu (M11-M12).

## 7. Câu hỏi thường gặp

**Dùng AI nào để học?** Bất kỳ: Claude, ChatGPT, Gemini... Riêng mục 4 (course-mentor) và các phần "Setup thực chiến" dùng Cowork/Claude Code.

**Không có dự án riêng thì sao?** Vẫn học được — bài thực hành gốc cho phép chọn việc thật bất kỳ trong công việc của bạn. Nhưng nên chọn sớm một "dự án xương sống" (kể cả nhỏ) vì các module Advanced nối nhau trên cùng một dự án.

**Làm bài trong ô Xưởng thực hành hay file riêng?** Cả hai: sản phẩm thật (skill, workflow, code) nằm trong folder dự án của bạn; ô xưởng thực hành ghi tóm tắt + link/đường dẫn + bài học rút ra.

**Hai người dùng chung một máy?** Dùng 2 profile trình duyệt khác nhau, hoặc mỗi người tự export/import JSON của mình.

**Muốn góp ý nội dung khóa học?** Mở issue trên GitHub repo hoặc gửi cho người quản lý repo.
