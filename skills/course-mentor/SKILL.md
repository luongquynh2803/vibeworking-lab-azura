---
name: course-mentor
description: Kết nối khóa học Agentic Vibe Working với một dự án thật bất kỳ. Dùng khi người dùng muốn cá nhân hóa khóa học theo dự án đang build, cập nhật kế hoạch học theo tiến độ dự án, hoặc nói "học theo dự án X", "gán dự án vào khóa học", "cập nhật course mentor". Khảo sát folder dự án, đối chiếu tiến độ học, và sinh file my-project.js cho web khóa học.
---

# Course Mentor — cầu nối khóa học ↔ dự án thật

## Nhiệm vụ

Nhận một folder dự án bất kỳ, khảo sát trạng thái build, đối chiếu với tiến độ học của người dùng, rồi sinh file `my-project.js` đặt vào folder khóa học. Web khóa học tự đọc file này để: hiển thị panel dự án, gắn badge lộ trình lên module, và thay bài thực hành chung bằng nhiệm vụ viết riêng cho dự án.

## Input bắt buộc

1. **Đường dẫn folder dự án** — nếu người dùng chưa cung cấp, HỎI và DỪNG. Không tự đoán.
2. **Đường dẫn folder khóa học** (chứa `index.html`, `data.js`) — mặc định là folder chứa skill này (`../..`); xác nhận nếu không chắc.
3. **Tiến độ học** (tùy chọn): file `avw-tien-do.json` do người dùng export từ web, hoặc đọc trực tiếp câu trả lời của người dùng. Không có → coi như chưa học module nào, ghi rõ điều này trong báo cáo.

## Quy trình

### Bước 1 — Khảo sát dự án (chỉ đọc, không sửa gì trong folder dự án)

Thu thập bằng chứng theo thứ tự ưu tiên:
- `README.md`, tài liệu trong `docs/`, file kế hoạch/TODO nếu có.
- Cấu trúc thư mục (2 cấp) và các file manifest (`package.json`, `requirements.txt`, `CLAUDE.md`...).
- `git log --oneline -30` và ngày của các commit gần nhất (nếu là git repo).
- Bất kỳ file dữ liệu, schema, skill, workflow nào đã tồn tại.

Tổng hợp thành hồ sơ dự án: **tên, mục tiêu, stack/hình thái, giai đoạn hiện tại**. Mỗi nhận định về giai đoạn phải kèm bằng chứng cụ thể (file nào, commit nào). Không suy diễn từ tên folder. Nếu folder gần như trống → giai đoạn là "khởi đầu", vẫn hợp lệ.

### Bước 2 — Xác định giai đoạn theo thang chuẩn

Xếp dự án vào một trong các giai đoạn (chọn gần đúng nhất, ghi rõ căn cứ):

| Giai đoạn | Dấu hiệu điển hình |
|---|---|
| S0 Ý tưởng | Folder trống/chỉ có ghi chú ý tưởng |
| S1 Nghiên cứu | Có tài liệu nghiên cứu, phân tích, chưa có sản phẩm |
| S2 Prototype | Có bản chạy được đầu tiên, code/tài liệu còn thô |
| S3 Quy trình hóa | Đã có workflow/quy ước lặp lại, bắt đầu có cấu trúc |
| S4 Đóng gói | Có skill/module/tài liệu hướng dẫn đang hình thành |
| S5 Vận hành & dữ liệu | Sản phẩm chạy thật, phát sinh dữ liệu cần quản lý |
| S6 Phân phối | Chuẩn bị chia sẻ/bán, cần landing, pricing, feedback |

### Bước 3 — Mapping giai đoạn → module

Bảng tham chiếu 12 module (tóm tắt để mapping, nội dung đầy đủ trong `data.js` của khóa học):

| Module | Chủ đề | Thường "now" ở giai đoạn |
|---|---|---|
| m1 Mindset | Phân loại việc giao AI / human-in-loop / không | S0-S1 |
| m2 Context Design | Framework 8 thành phần | S0-S2 |
| m3 Prompting | 6 loại prompt, clarify-first, decomposition | S1-S2 |
| m4 Framework 4 bước | Research-Plan-Execute-Verify | S1-S3 |
| m5 AI Assistant | Product brief, prototype, chọn công cụ | S2 |
| m6 Research→Workflow | Chưng cất tri thức, cấu trúc dự án, CLAUDE.md | S1-S3 |
| m7 Workflow chuyên nghiệp | Human review, error handling, slash command, trigger | S3 |
| m8 Build Agent Skills | SKILL.md, instruction, phép thử kích hoạt | S3-S4 |
| m9 Simulation | Test case 3 loại input, fine-tuning | S4 |
| m10 Package & Sell | .skill, plugin, landing, pricing, beta test | S6 |
| m11 Data Layer | Bậc thang lưu trữ, schema, second brain | S5 |
| m12 Knowledge Graph | Triple, trích xuất quan hệ, multi-hop | S5 (khi quan hệ dữ liệu phức tạp) |

Quy tắc gán roadmap status cho từng module:
- `done`: người dùng đã hoàn thành module VÀ dự án đã có bằng chứng áp dụng.
- `now`: khớp giai đoạn hiện tại hoặc là lỗ hổng đang cản dự án (ưu tiên tối đa 2 module "now").
- `next`: giai đoạn kế tiếp (tối đa 3).
- `later`: còn lại.
- **Gap override:** nếu dự án đã ở giai đoạn sau nhưng thiếu nền của module trước (VD: đang S4 mà chưa từng viết context chuẩn m2), module nền đó thành `now` kèm lý do.

Chọn `focus` = module "now" quan trọng nhất, với `reason` ngắn nêu rõ vì sao *đối với dự án này lúc này*.

### Bước 4 — Cá nhân hóa nội dung module

Với mỗi module có relevance `high` hoặc `medium` (tối thiểu: mọi module now/next), viết:
- `customPractice`: bài thực hành gốc viết lại bằng ngữ cảnh thật của dự án — dùng tên thật, dữ liệu thật, vấn đề thật đang tồn tại trong folder. CẤM chung chung kiểu "áp dụng vào dự án của bạn".
- `customOutput`: sản phẩm đầu ra phải là thứ **đóng góp trực tiếp vào dự án** (một file sẽ nằm trong folder dự án, một quyết định dự án đang cần).
- `projectChecklist`: 2-4 tiêu chí nghiệm thu đo được, gắn với dự án.
- `suggestions`: 1-3 gợi ý hành động cụ thể (kèm tên file/đường dẫn trong dự án nếu liên quan).

### Bước 5 — Sinh my-project.js đúng schema

Ghi file `my-project.js` vào folder khóa học theo đúng schema:

```js
// Sinh tự động bởi skill course-mentor — chạy lại skill để cập nhật.
const myProject = {
  version: 1,
  generatedAt: "YYYY-MM-DD",
  project: {
    name: "Tên dự án",
    goal: "Một câu mục tiêu",
    stage: "Mô tả giai đoạn hiện tại, dễ hiểu (kèm mã S0-S6)",
    stack: "Hình thái/công nghệ chính",
    evidence: ["Căn cứ 1 (file/commit)", "Căn cứ 2"]
  },
  focus: { moduleId: "m8", reason: "Vì sao module này là trọng tâm lúc này" },
  roadmap: [
    { moduleId: "m1", status: "done", note: "..." },
    { moduleId: "m8", status: "now", note: "..." }
    // đủ 12 module, status: done | now | next | later
  ],
  modules: {
    m8: {
      relevance: "high", // high | medium | low
      customPractice: "...",
      customOutput: "...",
      projectChecklist: ["...", "..."],
      suggestions: ["..."]
    }
    // mọi module now/next bắt buộc có mục ở đây
  }
};
```

**Kiểm tra trước khi ghi (bắt buộc, tự rà từng mục):**
1. File là JavaScript hợp lệ (chạy thử parse).
2. Mọi `moduleId` thuộc m1-m12; roadmap đủ 12 module, có đúng 1-2 "now".
3. `focus.moduleId` có mặt trong `modules` với relevance high.
4. Không có chuỗi nào chứa placeholder chưa điền ("...", "TODO", "[tên dự án]").
5. customPractice không trùng nguyên văn bài thực hành gốc trong `data.js`.

### Bước 6 — Báo cáo

Trả về cho người dùng (ngắn gọn): hồ sơ dự án + giai đoạn (kèm bằng chứng), module focus và lý do, 2-3 gợi ý hành động tuần này, và nhắc mở lại web khóa học để thấy bản cá nhân hóa. Đề xuất đặt scheduled task hàng tuần chạy lại skill nếu người dùng chưa có.

## Giới hạn đã biết

- Đánh giá giai đoạn dựa trên bằng chứng trong folder — dự án có phần nằm ngoài folder (Notion, Figma...) cần người dùng bổ sung thông tin.
- Không đọc được tiến độ học từ localStorage của trình duyệt — cần file export `avw-tien-do.json` hoặc người dùng tự khai.
- Chạy lại skill sẽ GHI ĐÈ my-project.js; bài làm và tiến độ của người học không bị ảnh hưởng (nằm ở localStorage/export riêng).
