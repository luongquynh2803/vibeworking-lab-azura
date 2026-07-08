# Vibeworking Lab — Agentic Vibe Working Curriculum

Công cụ tự học **Agentic Vibe Working: Từ AI-Native Mindset đến xây dựng và kinh doanh Agent Skills** — 12 module, web tĩnh chạy offline, không cần cài đặt.

📖 **Người học bắt đầu tại đây: [HUONG-DAN.md](HUONG-DAN.md)**

## Cách mở

Mở file `index.html` trực tiếp trong trình duyệt, hoặc chạy server tĩnh:

```bash
python3 -m http.server 8080
```

Sau đó truy cập `http://localhost:8080`.

## Nội dung

- 5 module Cơ bản: mindset, context, prompting, framework 4 bước, AI Assistant.
- 7 module Nâng cao: research to workflow, thiết kế workflow, build Agent Skills, simulation, packaging và thương mại hóa, data layer (second brain), knowledge graph.
- 7 module Master: vận hành engineering kit (ClaudeKit), pipeline plan sâu + TDD + ship, orchestration đa agent và kinh tế context; OpenClaw — trợ lý AI cá nhân tự vận hành qua 4 module (cài đặt & vận hành, trí nhớ & persona, automation & coding harness, security & production).
- Theo dõi tiến độ bằng `localStorage` trên trình duyệt.
- Bộ template thực hành: Context Blueprint, Workflow Canvas, Agent Skill Spec.

## Bài giảng

Mỗi module có tab **Bài giảng** với nội dung tự học đầy đủ (~1300-1800 từ, 11-16 phút đọc): giải thích khái niệm, ví dụ thực tế, prompt mẫu và hướng dẫn thực hành từng bước. Các module Advanced có thêm phần **Setup thực chiến** với Cowork/Claude Code CLI. Nội dung nằm trong `lessons.js`.

## Tính năng học tập chủ động

- **Xưởng thực hành**: mỗi module có ô làm bài tự lưu, kèm nút copy prompt nhờ AI phản biện bài làm theo đúng tiêu chí của module.
- **Checklist kiểm chứng**: phải tick đủ tiêu chí verify mới mở được nút "Đánh dấu hoàn thành".
- **Quiz kiểm tra hiểu bài**: 3 câu/module, phản hồi và giải thích ngay, có làm lại.
- **Template điền được**: 3 template dạng form, copy nội dung đã điền để dán vào AI.
- **Flashcard ôn tập**: ôn khái niệm cốt lõi của các module đã hoàn thành, lật thẻ, xáo thẻ.
- **Gợi ý trình tự học**: nhắc hoàn thành module trước khi học module sau (không khóa cứng).
- **Xuất / nhập dữ liệu**: backup tiến độ dạng JSON, xuất portfolio bài làm dạng Markdown.

## Học theo dự án thật (course-mentor)

Khóa học có thể tự uốn theo một dự án bạn đang build:

1. Mở Claude (Cowork hoặc Claude Code) với quyền truy cập folder khóa học này và folder dự án của bạn.
2. Chạy skill `skills/course-mentor/SKILL.md` (hoặc dán nội dung file làm prompt), kèm đường dẫn folder dự án. Kèm file `avw-tien-do.json` (nút Xuất tiến độ) nếu muốn tính cả tiến độ học.
3. Skill khảo sát dự án → sinh `my-project.js` vào folder khóa học.
4. Mở lại web: sidebar hiện panel dự án + module trọng tâm; danh sách module có badge lộ trình (đang cần / sắp cần); tab Thực hành của các module liên quan hiện bài tập viết riêng theo dự án; prompt phản biện tự kèm bối cảnh dự án.

Dự án tiến triển → chạy lại skill để cập nhật (có thể đặt scheduled task hàng tuần). Đổi dự án khác → chạy skill với folder mới, file được ghi đè. Tiến độ và bài làm của bạn không bị ảnh hưởng.

## Cấu trúc file

- `index.html` — khung trang.
- `data.js` — nội dung giáo trình, checklist, quiz, flashcard, template.
- `lessons.js` — bài giảng chi tiết của 19 module.
- `app.js` — logic tương tác và lưu trạng thái.
- `my-project.js` — (tùy chọn) bản cá nhân hóa theo dự án, sinh bởi skill course-mentor.
- `skills/course-mentor/` — Agent Skill kết nối khóa học với dự án thật.
- `styles.css` — giao diện.
