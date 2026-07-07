// VÍ DỤ output của skill course-mentor (dự án giả định: shop đồ da online).
// Dùng làm tham chiếu định dạng — không copy nội dung.
const myProject = {
  version: 1,
  generatedAt: "2026-07-07",
  project: {
    name: "LeatherCraft Store",
    goal: "Tự động hóa CSKH và phân tích phản hồi cho shop đồ da online",
    stage: "S4 Đóng gói — skill phân tích phản hồi đã có bản nháp, chưa kiểm thử",
    stack: "Cowork + thư mục markdown + SQLite",
    evidence: [
      "skills/phan-tich-phan-hoi/SKILL.md tồn tại, chưa có thư mục tests/",
      "git log: 8 commit gần nhất đều sửa instruction của skill"
    ]
  },
  focus: {
    moduleId: "m9",
    reason: "Skill đã có bản nháp nhưng chưa có test case nào — kiểm thử là việc chặn phát hành."
  },
  roadmap: [
    { moduleId: "m1", status: "done", note: "Đã phân loại việc CSKH giao AI" },
    { moduleId: "m2", status: "done", note: "Context chuẩn đã nằm trong CLAUDE.md" },
    { moduleId: "m3", status: "done", note: "" },
    { moduleId: "m4", status: "done", note: "" },
    { moduleId: "m5", status: "done", note: "Landing page shop đã dựng" },
    { moduleId: "m6", status: "done", note: "Workflow phân tích phản hồi v1.2" },
    { moduleId: "m7", status: "done", note: "Đã có human review trước khi gửi khách" },
    { moduleId: "m8", status: "done", note: "SKILL.md bản nháp tồn tại" },
    { moduleId: "m9", status: "now", note: "Chưa có tests/ — việc chặn phát hành" },
    { moduleId: "m10", status: "next", note: "Định chia sẻ cho 2 shop bạn sau khi test" },
    { moduleId: "m11", status: "next", note: "Phản hồi đang rải 4 file export khác cột" },
    { moduleId: "m12", status: "later", note: "Chưa có nhu cầu câu hỏi đa bước" },
    { moduleId: "m13", status: "later", note: "Sản phẩm chưa có thành phần code lớn — học khi mở rộng" },
    { moduleId: "m14", status: "later", note: "" },
    { moduleId: "m15", status: "later", note: "" }
  ],
  modules: {
    m9: {
      relevance: "high",
      customPractice:
        "Xây bộ test cho skill phan-tich-phan-hoi: 2 case input tốt (một lô phản hồi đa số khen tháng 5, một lô đa số chê giao hàng tháng 6 — cả hai lấy từ data/exports/), 2 case thiếu (file thiếu cột ngày; lô chỉ có 6 phản hồi), 1 case sai (dán nhầm file đơn hàng don-hang-thang6.csv).",
      customOutput: "Thư mục skills/phan-tich-phan-hoi/tests/ với test-cases.md và kết quả 5 case, commit vào repo dự án.",
      projectChecklist: [
        "Case 'lô 6 phản hồi' khiến skill DỪNG và báo thiếu, không phân tích.",
        "Case dán nhầm file đơn hàng bị từ chối kèm mô tả input đúng.",
        "Cả 5 case chạy trong hội thoại mới, kết quả ghi vào tests/ket-qua/."
      ],
      suggestions: [
        "Chạy case 5 đầu tiên — instruction hiện tại chưa có bước kiểm tra loại dữ liệu.",
        "Commit trước khi vá instruction để git diff bắt được regression."
      ]
    },
    m10: {
      relevance: "medium",
      customPractice:
        "Soạn gói chia sẻ cho 2 shop bạn (beta): nén skill + README viết cho chủ shop không rành kỹ thuật + bộ phản hồi mẫu 20 dòng đã ẩn danh.",
      customOutput: "File .skill kèm README, gửi được ngay khi m9 hoàn thành.",
      projectChecklist: ["Chủ shop bạn tự chạy được với dữ liệu mẫu, không cần nhắn hỏi."],
      suggestions: ["Ẩn danh dữ liệu mẫu trước khi đưa ra ngoài (KH-001 thay tên thật)."]
    },
    m11: {
      relevance: "medium",
      customPractice:
        "Gom 4 file export phản hồi (đang khác tên cột) về một bảng feedback trong data/work.db theo schema thống nhất; định nghĩa danh sách nhãn vấn đề đóng.",
      customOutput: "data/work.db + quy ước nhập liệu ghi trong CLAUDE.md của dự án.",
      projectChecklist: ["3 truy vấn chạy được: phản hồi tiêu cực theo tháng, theo nhóm vấn đề, khách có >2 phản hồi xấu."],
      suggestions: ["Làm sau m9 — dữ liệu sạch sẽ khiến test case tốt hơn nhưng không chặn việc test."]
    }
  }
};
