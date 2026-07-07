// ===== Dữ liệu giáo trình Agentic Vibe Working =====
// Mỗi module gồm: nội dung gốc + checklist kiểm chứng + quiz + flashcards.

const curriculum = [
  {
    id: "m1",
    level: "foundation",
    number: 1,
    title: "Mindset AI-Native Worker",
    duration: "Buổi 1",
    focus: "Tư duy làm việc cùng AI như cộng sự",
    description:
      "Học viên hiểu Agentic AI là gì, khác gì chatbot thông thường và biết chọn đúng công việc nên giao cho AI Agent.",
    objectives: [
      "Hiểu sự thay đổi từ dùng AI như công cụ sang thiết kế hệ thống làm việc với AI.",
      "Nhận diện việc AI Agent làm tốt, việc cần con người kiểm soát và việc không nên giao cho AI.",
      "Nắm các rủi ro chính: ảo giác, sai ngữ cảnh, mất kiểm soát đầu ra."
    ],
    topics: [
      "Sự phát triển của AI, LLM và Agentic AI.",
      "AI-first workforce và vai trò của người lao động tri thức.",
      "Agentic AI làm được gì và không làm được gì.",
      "Tư duy người dùng là người thiết kế hệ thống làm việc cho AI."
    ],
    practice:
      "Phân tích 5 công việc cá nhân, phân loại việc có thể dùng AI, việc cần human-in-the-loop và việc không nên tự động hóa.",
    output: "Bản đồ công việc cá nhân có thể ứng dụng Agentic AI.",
    checklist: [
      "Đã liệt kê đủ 5 công việc thật của bản thân.",
      "Mỗi công việc được phân loại rõ: giao AI / human-in-the-loop / không tự động hóa, kèm lý do.",
      "Nêu được ít nhất 2 rủi ro cụ thể (ảo giác, sai ngữ cảnh...) cho các việc định giao AI."
    ],
    quiz: [
      {
        q: "Điểm khác biệt cốt lõi giữa Agentic AI và chatbot hỏi đáp thông thường là gì?",
        options: [
          "Agentic AI trả lời nhanh hơn và ít tốn token hơn.",
          "Agentic AI có thể tự lập kế hoạch, thực hiện chuỗi hành động và tự kiểm tra kết quả.",
          "Agentic AI không bao giờ bị ảo giác.",
          "Agentic AI chỉ dùng được cho lập trình viên."
        ],
        answer: 1,
        explain:
          "Agentic AI khác ở khả năng lập kế hoạch và thực hiện chuỗi hành động hướng mục tiêu — không phải ở tốc độ, và nó vẫn có thể ảo giác."
      },
      {
        q: "Việc nào sau đây NÊN giữ human-in-the-loop thay vì giao toàn quyền cho AI?",
        options: [
          "Tóm tắt biên bản họp nội bộ.",
          "Gửi email báo giá chính thức cho khách hàng lớn.",
          "Đặt tên file theo quy tắc có sẵn.",
          "Chuyển định dạng bảng dữ liệu."
        ],
        answer: 1,
        explain:
          "Đầu ra có hậu quả kinh doanh trực tiếp (báo giá gửi khách) cần con người duyệt trước khi phát hành."
      },
      {
        q: "Tư duy 'AI-native worker' nghĩa là gì?",
        options: [
          "Dùng AI để trả lời mọi câu hỏi thay vì tự suy nghĩ.",
          "Thiết kế hệ thống làm việc trong đó AI đảm nhận phần phù hợp, con người kiểm soát chất lượng.",
          "Thay toàn bộ quy trình bằng automation.",
          "Chỉ dùng AI khi được công ty yêu cầu."
        ],
        answer: 1,
        explain:
          "AI-native không phải là phụ thuộc AI, mà là chủ động thiết kế cách phối hợp người–AI với điểm kiểm soát rõ ràng."
      }
    ],
    flashcards: [
      { front: "Agentic AI", back: "AI có khả năng tự lập kế hoạch, thực hiện chuỗi hành động hướng mục tiêu và tự kiểm tra kết quả — khác chatbot hỏi đáp." },
      { front: "Human-in-the-loop", back: "Thiết kế quy trình có điểm con người duyệt/kiểm tra trước khi đầu ra của AI được sử dụng thật." },
      { front: "Ảo giác (hallucination)", back: "Hiện tượng AI tạo ra thông tin nghe hợp lý nhưng sai sự thật — lý do chính khiến đầu ra AI luôn cần kiểm chứng." }
    ]
  },
  {
    id: "m2",
    level: "foundation",
    number: 2,
    title: "Context Design Cho Agentic AI",
    duration: "Buổi 1-2",
    focus: "Thiết kế bối cảnh để AI làm đúng việc",
    description:
      "Học viên biết cung cấp vai trò, mục tiêu, dữ liệu, ràng buộc và tiêu chuẩn kiểm tra để AI tạo đầu ra ổn định hơn.",
    objectives: [
      "Hiểu context là nền tảng của chất lượng đầu ra.",
      "Biết viết bối cảnh đủ rõ để giảm sai lệch và ảo giác.",
      "Dùng được cấu trúc context chuẩn cho công việc tri thức."
    ],
    topics: [
      "Cơ chế hoạt động cơ bản của LLM.",
      "Vai trò, mục tiêu, dữ liệu đầu vào, quy trình, đầu ra và constraint.",
      "Cách đặt tiêu chí đánh giá trước khi yêu cầu AI thực hiện.",
      "Framework Role → Goal → Context → Input → Process → Output → Constraints → Verification."
    ],
    practice:
      "Viết context cho một việc thật như nghiên cứu thị trường, viết content, lập kế hoạch hoặc phân tích đối thủ.",
    output: "Một bản context hoàn chỉnh có thể dùng với AI Agent.",
    checklist: [
      "Bản context có đủ 8 thành phần: Role, Goal, Context, Input, Process, Output, Constraints, Verification.",
      "Tiêu chí kiểm tra (Verification) được viết TRƯỚC khi chạy AI, đo được, không chung chung.",
      "Đã thử chạy context với AI ít nhất 1 lần và ghi nhận đầu ra."
    ],
    quiz: [
      {
        q: "Vì sao nên viết tiêu chí đánh giá TRƯỚC khi yêu cầu AI thực hiện?",
        options: [
          "Để prompt trông chuyên nghiệp hơn.",
          "Để có chuẩn khách quan kiểm tra đầu ra, tránh bị đầu ra 'nghe hay' đánh lừa.",
          "Vì AI yêu cầu bắt buộc phải có.",
          "Để tiết kiệm token."
        ],
        answer: 1,
        explain:
          "Đặt chuẩn trước giúp bạn đánh giá đầu ra theo tiêu chí đã cam kết, thay vì bị ấn tượng chủ quan chi phối."
      },
      {
        q: "Thành phần nào trong framework context giúp AI KHÔNG làm những điều ngoài phạm vi?",
        options: ["Role", "Constraints", "Input", "Process"],
        answer: 1,
        explain: "Constraints (ràng buộc) xác định giới hạn: điều không được làm, định dạng bắt buộc, phạm vi dữ liệu..."
      },
      {
        q: "Context thiếu điều gì thường gây ảo giác nhiều nhất?",
        options: [
          "Thiếu lời chào lịch sự.",
          "Thiếu dữ liệu đầu vào cụ thể — AI phải tự 'bịa' thông tin để lấp chỗ trống.",
          "Thiếu emoji minh họa.",
          "Thiếu tên người dùng."
        ],
        answer: 1,
        explain:
          "Khi không có dữ liệu thật, AI dựa vào kiến thức nội tại và dễ tạo thông tin sai. Cấp đủ input là cách giảm ảo giác hiệu quả nhất."
      }
    ],
    flashcards: [
      { front: "Context Design", back: "Cung cấp vai trò, mục tiêu, dữ liệu, quy trình, ràng buộc và tiêu chí kiểm tra để AI tạo đầu ra ổn định, đúng ý." },
      { front: "Framework 8 thành phần", back: "Role → Goal → Context → Input → Process → Output → Constraints → Verification." },
      { front: "Verification-first", back: "Đặt tiêu chí đánh giá trước khi chạy AI để có chuẩn khách quan, tránh bị đầu ra 'nghe hay' đánh lừa." }
    ]
  },
  {
    id: "m3",
    level: "foundation",
    number: 3,
    title: "Prompting Cho Agentic AI",
    duration: "Buổi 2",
    focus: "Prompt để AI biết lập kế hoạch và tự kiểm tra",
    description:
      "Học viên chuyển từ prompt hỏi đáp sang prompt giao nhiệm vụ, nghiên cứu, phản biện, kiểm chứng và cải tiến đầu ra.",
    objectives: [
      "Phân biệt prompt thường và prompt cho Agentic Workflow.",
      "Biết yêu cầu AI hỏi lại khi thiếu thông tin quan trọng.",
      "Tạo được bộ prompt mẫu cho công việc cá nhân."
    ],
    topics: [
      "Prompt giao nhiệm vụ, prompt nghiên cứu và prompt lập kế hoạch.",
      "Prompt phản biện, prompt kiểm chứng và prompt cải tiến.",
      "Cách chia nhỏ nhiệm vụ để tiết kiệm token.",
      "Cách thiết kế tiêu chí đầu ra trước khi tạo nội dung."
    ],
    practice:
      "Viết cùng một nhiệm vụ theo 3 mức: đơn giản, có context và có quy trình kiểm tra.",
    output: "Bộ 5 prompt mẫu phục vụ công việc cá nhân.",
    checklist: [
      "Đã viết cùng 1 nhiệm vụ ở 3 mức (đơn giản / có context / có quy trình kiểm tra) và so sánh đầu ra.",
      "Bộ 5 prompt mẫu phủ đủ: giao nhiệm vụ, nghiên cứu, lập kế hoạch, phản biện, kiểm chứng.",
      "Ít nhất 1 prompt có yêu cầu AI hỏi lại khi thiếu thông tin quan trọng."
    ],
    quiz: [
      {
        q: "Prompt cho Agentic Workflow khác prompt hỏi đáp thường ở điểm nào?",
        options: [
          "Dài hơn là đủ.",
          "Giao nhiệm vụ có mục tiêu, quy trình và tiêu chí kiểm tra — không chỉ hỏi một câu.",
          "Luôn viết bằng tiếng Anh.",
          "Phải dùng đúng một template duy nhất."
        ],
        answer: 1,
        explain: "Điểm khác là cấu trúc nhiệm vụ (mục tiêu, quy trình, tiêu chí), không phải độ dài hay ngôn ngữ."
      },
      {
        q: "Khi nhiệm vụ lớn và phức tạp, cách xử lý tốt nhất là gì?",
        options: [
          "Viết một prompt thật dài chứa mọi thứ.",
          "Chia nhỏ thành các bước, chạy tuần tự và kiểm tra giữa các bước.",
          "Để AI tự quyết định toàn bộ.",
          "Chạy lại nhiều lần đến khi ra kết quả ưng ý."
        ],
        answer: 1,
        explain:
          "Task decomposition giúp AI ổn định hơn, tiết kiệm token và cho bạn điểm kiểm soát giữa các bước."
      },
      {
        q: "Vì sao nên yêu cầu AI 'hỏi lại nếu thiếu thông tin quan trọng'?",
        options: [
          "Để cuộc hội thoại dài hơn.",
          "Để tránh AI tự giả định sai rồi tạo đầu ra lệch hướng.",
          "Vì AI không thể trả lời nếu không hỏi lại.",
          "Để kiểm tra AI có đọc prompt không."
        ],
        answer: 1,
        explain: "Giả định ngầm là nguồn sai lệch phổ biến. Cho phép AI hỏi lại biến giả định ngầm thành trao đổi rõ ràng."
      }
    ],
    flashcards: [
      { front: "Task decomposition", back: "Chia nhiệm vụ lớn thành các bước nhỏ, chạy tuần tự với điểm kiểm tra — giúp AI ổn định và tiết kiệm token." },
      { front: "Prompt phản biện", back: "Yêu cầu AI đóng vai người phản biện, chỉ ra điểm yếu, lỗ hổng, giả định sai trong đầu ra trước khi hoàn thiện." },
      { front: "Clarify-first", back: "Yêu cầu AI hỏi lại khi thiếu thông tin quan trọng, thay vì tự giả định rồi làm lệch hướng." }
    ]
  },
  {
    id: "m4",
    level: "foundation",
    number: 4,
    title: "Framework 4 Bước Agentic Vibe Working",
    duration: "Buổi 3",
    focus: "Research, Plan, Execute, Verify",
    description:
      "Học viên áp dụng quy trình làm việc chuẩn với AI Agent để kiểm soát chất lượng thay vì phụ thuộc hoàn toàn vào AI.",
    objectives: [
      "Dùng AI để nghiên cứu, lập kế hoạch, tạo bản nháp và kiểm chứng.",
      "Biết đặt vòng phản biện để cải thiện đầu ra.",
      "Hoàn thành một mini-project bằng quy trình 4 bước."
    ],
    topics: [
      "Research: tìm hiểu, phân tích, tổng hợp thông tin.",
      "Plan: lập kế hoạch hành động và chia nhỏ nhiệm vụ.",
      "Execute: tạo bản nháp, tài liệu, workflow, code hoặc nội dung.",
      "Verify: kiểm tra, phản biện, tối ưu cùng AI và con người."
    ],
    practice:
      "Chọn một task thật như landing page, kế hoạch marketing, nghiên cứu khách hàng hoặc quy trình CSKH và chạy đủ 4 bước.",
    output: "Một mini-project hoàn chỉnh theo quy trình 4 bước.",
    checklist: [
      "Mini-project chạy đủ 4 bước, mỗi bước có ghi chú đầu vào và đầu ra.",
      "Bước Verify có ít nhất 1 vòng phản biện với AI và 1 lần con người kiểm tra.",
      "Ghi lại được điểm khác biệt giữa bản nháp đầu và bản sau khi Verify."
    ],
    quiz: [
      {
        q: "Bước nào trong framework 4 bước thường bị bỏ qua nhất nhưng quyết định chất lượng cuối?",
        options: ["Research", "Plan", "Execute", "Verify"],
        answer: 3,
        explain:
          "Đa số người dùng dừng ở Execute và lấy bản nháp đầu tiên. Verify (kiểm tra, phản biện, tối ưu) mới là bước tạo khác biệt chất lượng."
      },
      {
        q: "Trong bước Plan, việc quan trọng nhất là gì?",
        options: [
          "Chọn công cụ AI đắt nhất.",
          "Chia mục tiêu thành các nhiệm vụ nhỏ có thứ tự và tiêu chí hoàn thành.",
          "Viết prompt dài nhất có thể.",
          "Bỏ qua để tiết kiệm thời gian."
        ],
        answer: 1,
        explain: "Plan tốt = mục tiêu được chia thành các bước nhỏ, rõ thứ tự, rõ tiêu chí — nền cho Execute ổn định."
      },
      {
        q: "Một vòng phản biện (critique loop) hiệu quả trông như thế nào?",
        options: [
          "Hỏi AI 'bản này ổn chưa?' và tin câu trả lời.",
          "Yêu cầu AI phản biện theo tiêu chí cụ thể, rồi bản thân đối chiếu và quyết định sửa gì.",
          "Chạy lại prompt gốc nhiều lần.",
          "Nhờ AI khen bản nháp để có động lực."
        ],
        answer: 1,
        explain:
          "Phản biện cần tiêu chí cụ thể và con người là người quyết định cuối. Hỏi 'ổn chưa' thường nhận câu trả lời xuôi chiều."
      }
    ],
    flashcards: [
      { front: "Research → Plan → Execute → Verify", back: "Quy trình 4 bước làm việc với AI Agent: nghiên cứu, lập kế hoạch, thực thi, kiểm chứng — lặp lại vòng khi cần." },
      { front: "Critique loop", back: "Vòng phản biện: yêu cầu AI đánh giá đầu ra theo tiêu chí cụ thể, con người đối chiếu và quyết định cải tiến." },
      { front: "Verify", back: "Bước kiểm tra đầu ra bằng checklist + phản biện + con người duyệt. Bước hay bị bỏ qua nhất nhưng quyết định chất lượng." }
    ]
  },
  {
    id: "m5",
    level: "foundation",
    number: 5,
    title: "AI Coding Assistant & AI Assistant",
    duration: "Buổi 4",
    focus: "Giao việc cho assistant kỹ thuật và assistant tổng quát",
    description:
      "Học viên hiểu cách dùng các công cụ như Antigravity, Claude Code, OpenClaw hoặc công cụ tương tự để tạo prototype và automation logic.",
    objectives: [
      "Biết mô tả sản phẩm, yêu cầu đầu ra và tiêu chí kiểm thử cho AI.",
      "Hiểu khi nào nên dùng AI coding, no-code hoặc chuyển cho developer.",
      "Biết tối ưu token, tránh lặp context và chia nhỏ nhiệm vụ."
    ],
    topics: [
      "AI Coding Assistant và AI Assistant tổng quát.",
      "Cách giao việc bằng mô tả sản phẩm, dữ liệu, constraint và test.",
      "Tối ưu token khi làm việc trong dự án dài.",
      "Ranh giới giữa prototype, automation và sản phẩm thật."
    ],
    practice:
      "Yêu cầu AI tạo một prototype đơn giản như landing page, form khảo sát, dashboard mini hoặc automation logic.",
    output: "Một prototype hoặc bản mô tả sản phẩm có thể chuyển cho AI/developer thực hiện.",
    checklist: [
      "Bản mô tả sản phẩm có: mục tiêu, người dùng, tính năng chính, constraint và tiêu chí kiểm thử.",
      "Prototype chạy được hoặc mô tả đủ chi tiết để người khác thực hiện không cần hỏi lại.",
      "Đã tự kiểm thử prototype với ít nhất 2 tình huống sử dụng."
    ],
    quiz: [
      {
        q: "Khi giao việc cho AI coding assistant, điều nào quan trọng nhất?",
        options: [
          "Yêu cầu code thật dài để đủ tính năng.",
          "Mô tả rõ sản phẩm, đầu ra mong muốn và tiêu chí kiểm thử.",
          "Chọn ngôn ngữ lập trình mới nhất.",
          "Yêu cầu AI làm mọi thứ trong một lần chạy."
        ],
        answer: 1,
        explain: "Chất lượng mô tả quyết định chất lượng code. Tiêu chí kiểm thử giúp bạn biết khi nào 'xong'."
      },
      {
        q: "Ranh giới giữa prototype và sản phẩm thật là gì?",
        options: [
          "Prototype dùng để kiểm chứng ý tưởng nhanh; sản phẩm thật cần bảo mật, hiệu năng, bảo trì.",
          "Không có khác biệt, prototype chạy được là bán được.",
          "Prototype luôn phải viết lại từ đầu bằng tay.",
          "Sản phẩm thật không được dùng AI để xây."
        ],
        answer: 0,
        explain:
          "Prototype để học và kiểm chứng nhanh. Đưa vào sử dụng thật cần thêm bảo mật, xử lý lỗi, hiệu năng, bảo trì."
      },
      {
        q: "Cách nào giúp tối ưu token trong dự án dài?",
        options: [
          "Dán lại toàn bộ lịch sử hội thoại mỗi lần hỏi.",
          "Chia nhỏ nhiệm vụ, chỉ cung cấp context liên quan đến bước hiện tại.",
          "Viết prompt bằng chữ viết tắt.",
          "Tránh dùng file, chỉ chat."
        ],
        answer: 1,
        explain: "Context đúng và đủ cho từng bước hiệu quả hơn nhiều so với lặp lại toàn bộ lịch sử."
      }
    ],
    flashcards: [
      { front: "AI Coding Assistant", back: "Công cụ AI tạo/sửa code theo mô tả (Claude Code, Antigravity...). Giao việc bằng mô tả sản phẩm + constraint + tiêu chí test." },
      { front: "Prototype vs sản phẩm thật", back: "Prototype kiểm chứng ý tưởng nhanh; sản phẩm thật cần thêm bảo mật, xử lý lỗi, hiệu năng và bảo trì." },
      { front: "Tối ưu token", back: "Chia nhỏ nhiệm vụ, chỉ cấp context liên quan cho từng bước — thay vì lặp lại toàn bộ lịch sử hội thoại." }
    ]
  },
  {
    id: "m6",
    level: "advanced",
    number: 6,
    title: "Agentic Research To Workflow",
    duration: "Tuần 1",
    focus: "Chuyển tri thức rời rạc thành quy trình",
    description:
      "Học viên dùng AI để nghiên cứu sâu một lĩnh vực và chắt lọc kiến thức thành workflow có thể lặp lại.",
    objectives: [
      "Phân biệt LLM internal knowledge và external knowledge.",
      "Biết nghiên cứu tài liệu, website, báo cáo và dữ liệu khách hàng với AI.",
      "Biến chuyên môn cá nhân thành workflow có cấu trúc."
    ],
    topics: [
      "Workflow là gì và vì sao workflow quyết định chất lượng AI.",
      "Agentic Research với nguồn tri thức bên ngoài.",
      "Distill knowledge: chắt lọc tri thức thành quy trình.",
      "Input, process, output, checklist và tiêu chí kiểm tra."
    ],
    practice:
      "Chọn một lĩnh vực như marketing, sales, HR, research, vận hành hoặc tài chính rồi tạo workflow chuẩn cho một tác vụ cụ thể.",
    output: "Một workflow hoàn chỉnh gồm input, process, output, checklist và tiêu chí kiểm tra.",
    checklist: [
      "Workflow có đủ 5 phần: input, process, output, checklist, tiêu chí kiểm tra.",
      "Quy trình được chắt lọc từ ít nhất 2 nguồn tri thức (tài liệu, chuyên gia, kinh nghiệm bản thân...).",
      "Một người khác đọc workflow có thể thực hiện mà không cần hỏi thêm.",
      "Kết quả nghiên cứu và workflow được lưu thành file trong cấu trúc thư mục dự án (có CLAUDE.md/project instructions), không nằm trôi trong hội thoại."
    ],
    quiz: [
      {
        q: "Vì sao cần cấp external knowledge (tài liệu, dữ liệu thật) thay vì chỉ dựa vào kiến thức nội tại của LLM?",
        options: [
          "Vì LLM không biết gì cả.",
          "Vì kiến thức nội tại có thể lỗi thời, chung chung hoặc sai với ngữ cảnh cụ thể của bạn.",
          "Vì external knowledge miễn phí.",
          "Để prompt dài hơn."
        ],
        answer: 1,
        explain:
          "LLM biết nhiều nhưng không biết ngữ cảnh riêng của bạn và có thể lỗi thời. Dữ liệu thật neo đầu ra vào thực tế."
      },
      {
        q: "'Distill knowledge' trong module này nghĩa là gì?",
        options: [
          "Tóm tắt sách thành 1 trang.",
          "Chắt lọc tri thức rời rạc (kinh nghiệm, tài liệu) thành quy trình có cấu trúc, lặp lại được.",
          "Dịch tài liệu sang tiếng Việt.",
          "Lưu tất cả tài liệu vào một thư mục."
        ],
        answer: 1,
        explain: "Giá trị nằm ở việc biến tri thức ngầm thành quy trình rõ ràng mà AI và người khác thực hiện được."
      },
      {
        q: "Dấu hiệu của một workflow tốt là gì?",
        options: [
          "Càng nhiều bước càng tốt.",
          "Người khác (hoặc AI) thực hiện được mà không cần hỏi thêm, và có tiêu chí kiểm tra rõ.",
          "Chỉ tác giả hiểu được.",
          "Không bao giờ cần cập nhật."
        ],
        answer: 1,
        explain: "Tính lặp lại được và tiêu chí kiểm tra rõ ràng là hai thước đo quan trọng nhất của workflow."
      }
    ],
    flashcards: [
      { front: "Internal vs External knowledge", back: "Internal: kiến thức có sẵn trong LLM (có thể lỗi thời, chung chung). External: tài liệu, dữ liệu thật bạn cấp vào — neo đầu ra vào thực tế." },
      { front: "Distill knowledge", back: "Chắt lọc tri thức rời rạc (kinh nghiệm, tài liệu, phỏng vấn chuyên gia) thành quy trình có cấu trúc, lặp lại được." },
      { front: "Workflow chuẩn", back: "Gồm 5 phần: Input → Process → Output → Checklist → Tiêu chí kiểm tra. Người khác đọc là làm được." }
    ]
  },
  {
    id: "m7",
    level: "advanced",
    number: 7,
    title: "Thiết Kế Workflow Chuyên Nghiệp",
    duration: "Tuần 2",
    focus: "Workflow tái sử dụng và có điểm kiểm soát",
    description:
      "Học viên biết chia nhỏ quy trình, thiết kế human-in-the-loop, error handling và verification loop.",
    objectives: [
      "Xây workflow có tính tái sử dụng cho cá nhân hoặc doanh nghiệp.",
      "Chia việc lớn thành việc nhỏ để AI thực hiện ổn định.",
      "Thiết kế điểm duyệt, xử lý lỗi và vòng cải tiến."
    ],
    topics: [
      "Cấu trúc workflow tốt.",
      "Task decomposition và trigger.",
      "Human Review, Quality Check và Improvement.",
      "Mẫu Trigger → Input → Context → AI Task → Human Review → Output → Quality Check → Improvement."
    ],
    practice:
      "Thiết kế workflow cho một tác vụ có giá trị kinh doanh và xác định nơi con người cần duyệt.",
    output: "Workflow có thể dùng lại trong công việc hoặc doanh nghiệp.",
    checklist: [
      "Workflow xác định rõ trigger (khi nào chạy) và các bước AI Task được chia đủ nhỏ.",
      "Có ít nhất 1 điểm Human Review đặt đúng chỗ có rủi ro cao nhất.",
      "Có phương án xử lý khi AI trả kết quả sai/thiếu (error handling).",
      "Có vòng Improvement: cách ghi nhận lỗi và cập nhật workflow.",
      "Workflow được triển khai thật trong một môi trường (slash command Claude Code, hoặc Cowork với trigger/connector) và chạy đầu-cuối ít nhất 1 lần."
    ],
    quiz: [
      {
        q: "Điểm Human Review nên đặt ở đâu trong workflow?",
        options: [
          "Sau mọi bước, càng nhiều càng tốt.",
          "Trước các đầu ra có rủi ro/hậu quả cao (gửi khách, phát hành, quyết định tiền bạc).",
          "Chỉ ở bước cuối cùng.",
          "Không cần nếu AI đủ tốt."
        ],
        answer: 1,
        explain:
          "Duyệt mọi bước gây tắc nghẽn; không duyệt gì thì rủi ro. Đặt điểm duyệt ở nơi hậu quả sai lầm lớn nhất."
      },
      {
        q: "Error handling trong workflow AI nghĩa là gì?",
        options: [
          "Xóa lỗi khỏi báo cáo.",
          "Định nghĩa trước: khi AI trả kết quả sai/thiếu thì làm gì (chạy lại, chuyển người xử lý, dừng...).",
          "Đổ lỗi cho AI.",
          "Chạy lại đến khi hết lỗi."
        ],
        answer: 1,
        explain: "Workflow chuyên nghiệp lường trước thất bại và có đường xử lý rõ, thay vì ứng biến mỗi lần lỗi."
      },
      {
        q: "Vì sao cần vòng Improvement trong workflow?",
        options: [
          "Để workflow trông đầy đủ hơn.",
          "Vì lỗi lặp lại là dữ liệu quý để cập nhật context/instruction, giúp workflow tốt dần theo thời gian.",
          "Vì khách hàng yêu cầu.",
          "Không cần nếu thiết kế ban đầu tốt."
        ],
        answer: 1,
        explain: "Không workflow nào hoàn hảo từ đầu. Ghi nhận lỗi có hệ thống → cập nhật → chất lượng tăng dần."
      }
    ],
    flashcards: [
      { front: "Mẫu workflow 8 bước", back: "Trigger → Input → Context → AI Task → Human Review → Output → Quality Check → Improvement." },
      { front: "Đặt điểm Human Review", back: "Đặt trước các đầu ra rủi ro cao (gửi khách, phát hành, tiền bạc) — không phải sau mọi bước." },
      { front: "Error handling", back: "Định nghĩa trước hành động khi AI trả kết quả sai/thiếu: chạy lại, chuyển người, hay dừng workflow." }
    ]
  },
  {
    id: "m8",
    level: "advanced",
    number: 8,
    title: "Build Agent Skills",
    duration: "Tuần 3-4",
    focus: "Chuyển workflow thành Agent Skill",
    description:
      "Học viên hiểu Agent Skill là gì, khác prompt và workflow ra sao, rồi đóng gói workflow thành skill bản đầu tiên.",
    objectives: [
      "Nắm cấu trúc một Agent Skill có thể tái sử dụng.",
      "Chuyển workflow thành instruction, input, process và tiêu chuẩn đầu ra.",
      "Tạo phiên bản Agent Skill đầu tiên từ workflow đã thiết kế."
    ],
    topics: [
      "Khác biệt giữa prompt, workflow và skill.",
      "Tên skill, mục đích, đối tượng dùng và input yêu cầu.",
      "Quy trình xử lý, tiêu chuẩn đầu ra, quy tắc kiểm tra chất lượng.",
      "Research → Convert to Agent Skill → Simulating → Finetuning."
    ],
    practice:
      "Chuyển workflow ở module trước thành một Agent Skill có mục đích rõ, input rõ và output có tiêu chuẩn.",
    output: "Một Agent Skill bản đầu tiên.",
    checklist: [
      "Skill có tên rõ, mục đích một câu, đối tượng dùng và input bắt buộc.",
      "Instruction mô tả quy trình xử lý theo bước, kèm tiêu chuẩn đầu ra đo được.",
      "Có quy tắc kiểm tra chất lượng và giới hạn đã biết (known limits).",
      "Skill được lưu đúng chuẩn thư mục SKILL.md và vượt qua phép thử kích hoạt (tự được gọi khi giao việc bằng ngôn ngữ tự nhiên)."
    ],
    quiz: [
      {
        q: "Agent Skill khác prompt đơn lẻ ở điểm nào?",
        options: [
          "Skill dài hơn prompt.",
          "Skill là gói tái sử dụng: mục đích, input yêu cầu, quy trình, tiêu chuẩn đầu ra và giới hạn — dùng lại nhiều lần, nhiều người.",
          "Skill chỉ dành cho lập trình viên.",
          "Không khác gì, chỉ là tên gọi."
        ],
        answer: 1,
        explain:
          "Prompt là một lần dùng; skill được đóng gói có cấu trúc để tái sử dụng ổn định bởi nhiều người, nhiều tình huống."
      },
      {
        q: "Thành phần nào KHÔNG thể thiếu trong một Agent Skill tốt?",
        options: [
          "Logo và bộ nhận diện.",
          "Tiêu chuẩn đầu ra và quy tắc kiểm tra chất lượng.",
          "Video giới thiệu.",
          "Tối thiểu 10 trang tài liệu."
        ],
        answer: 1,
        explain: "Không có tiêu chuẩn đầu ra thì không thể biết skill chạy đúng hay sai — đây là phần cốt lõi."
      },
      {
        q: "Quy trình xây skill chuẩn theo giáo trình là gì?",
        options: [
          "Viết một lần rồi bán ngay.",
          "Research → Convert to Agent Skill → Simulating → Finetuning.",
          "Copy skill người khác và đổi tên.",
          "Execute → Verify → Research → Plan."
        ],
        answer: 1,
        explain: "Skill cần được mô phỏng (simulate) với người dùng giả lập và tinh chỉnh trước khi phát hành."
      }
    ],
    flashcards: [
      { front: "Prompt vs Workflow vs Skill", back: "Prompt: một lần dùng. Workflow: quy trình lặp lại được. Skill: workflow đóng gói có input chuẩn, tiêu chuẩn đầu ra, giới hạn — tái sử dụng bởi nhiều người." },
      { front: "Cấu trúc Agent Skill", back: "Tên, mục đích, đối tượng dùng, input yêu cầu, quy trình xử lý, tiêu chuẩn đầu ra, quy tắc kiểm tra, known limits." },
      { front: "Quy trình build skill", back: "Research → Convert to Agent Skill → Simulating → Finetuning." }
    ]
  },
  {
    id: "m9",
    level: "advanced",
    number: 9,
    title: "Simulation & Fine-tuning Agent Skills",
    duration: "Tuần 5",
    focus: "Kiểm thử và tinh chỉnh skill",
    description:
      "Học viên giả lập người dùng thật, test với input tốt, thiếu, sai và tinh chỉnh instruction để skill ổn định hơn.",
    objectives: [
      "Tạo bộ test case cho Agent Skill.",
      "Đánh giá chất lượng output bằng tiêu chí rõ ràng.",
      "Tối ưu instruction, context, constraint và ví dụ."
    ],
    topics: [
      "Giả lập người dùng thật.",
      "Test với input tốt, input thiếu và input sai.",
      "Ghi nhận lỗi và cải tiến.",
      "Xây bộ test case kiểm thử skill."
    ],
    practice:
      "Chạy thử Agent Skill với ít nhất 5 tình huống khác nhau, ghi nhận lỗi và cập nhật skill.",
    output: "Agent Skill phiên bản đã fine-tune và bộ test case kiểm thử.",
    checklist: [
      "Bộ test case có đủ 3 loại input: tốt, thiếu, sai — tối thiểu 5 tình huống.",
      "Mỗi test case có kết quả mong đợi và kết quả thực tế được ghi lại.",
      "Skill đã được cập nhật ít nhất 1 lần dựa trên lỗi ghi nhận, và chạy lại test để xác nhận.",
      "Bộ test lưu thành file trong thư mục skill (tests/) và mỗi case được chạy trong phiên sạch (hội thoại mới hoặc subagent)."
    ],
    quiz: [
      {
        q: "Vì sao phải test skill với input THIẾU và SAI, không chỉ input tốt?",
        options: [
          "Để tốn thêm thời gian kiểm thử.",
          "Vì người dùng thật thường nhập thiếu/sai — skill tốt phải xử lý được các tình huống đó một cách an toàn.",
          "Vì input tốt không tồn tại.",
          "Để skill trông chuyên nghiệp."
        ],
        answer: 1,
        explain: "Skill chỉ chạy tốt với input hoàn hảo là skill chưa sẵn sàng cho người dùng thật."
      },
      {
        q: "Một test case hoàn chỉnh gồm những gì?",
        options: [
          "Chỉ cần input.",
          "Input + kết quả mong đợi + kết quả thực tế + ghi chú lỗi (nếu có).",
          "Screenshot kết quả.",
          "Đánh giá cảm tính 'ổn' hoặc 'chưa ổn'."
        ],
        answer: 1,
        explain: "So sánh mong đợi và thực tế là cách duy nhất đánh giá khách quan và biết cần sửa gì."
      },
      {
        q: "Khi skill trả kết quả sai lặp lại ở một loại tình huống, nên làm gì trước tiên?",
        options: [
          "Bỏ tình huống đó khỏi bộ test.",
          "Phân tích nguyên nhân rồi tinh chỉnh instruction/context/ví dụ, sau đó chạy lại toàn bộ test.",
          "Đổi sang model AI khác ngay.",
          "Chấp nhận vì AI không hoàn hảo."
        ],
        answer: 1,
        explain:
          "Fine-tune instruction theo nguyên nhân gốc, rồi chạy lại toàn bộ test để chắc chắn không phá vỡ tình huống khác."
      }
    ],
    flashcards: [
      { front: "3 loại input kiểm thử", back: "Input tốt (happy path), input thiếu (missing) và input sai (invalid) — skill tốt phải xử lý an toàn cả ba." },
      { front: "Test case hoàn chỉnh", back: "Input + kết quả mong đợi + kết quả thực tế + ghi chú lỗi. So sánh mong đợi/thực tế là cách đánh giá khách quan." },
      { front: "Fine-tuning skill", back: "Phân tích nguyên nhân lỗi → tinh chỉnh instruction/context/ví dụ → chạy lại toàn bộ test để tránh phá tình huống khác." }
    ]
  },
  {
    id: "m10",
    level: "advanced",
    number: 10,
    title: "Package, Sharing, Selling Agent Skills",
    duration: "Tuần 6",
    focus: "Đóng gói và thương mại hóa Agent Skill",
    description:
      "Học viên chuẩn hóa Agent Skill thành sản phẩm có thể chia sẻ hoặc bán, kèm tài liệu hướng dẫn và offer đơn giản.",
    objectives: [
      "Biết đóng gói skill để tái sử dụng.",
      "Thiết kế kênh chia sẻ cho team, cộng đồng hoặc khách hàng.",
      "Xây mô hình thương mại hóa và định vị theo ngành hoặc vấn đề cụ thể."
    ],
    topics: [
      "Packaging: chuẩn hóa skill.",
      "Sharing: chia sẻ cho team, cộng đồng, khách hàng.",
      "Selling: bán skill như sản phẩm số.",
      "Landing page, hướng dẫn sử dụng, pricing cơ bản và offer."
    ],
    practice:
      "Đóng gói Agent Skill thành sản phẩm có thể chia sẻ hoặc bán, kèm trang mô tả và hướng dẫn sử dụng.",
    output: "Một Agent Skill hoàn chỉnh, trang mô tả sản phẩm, hướng dẫn sử dụng và mô hình thương mại hóa.",
    checklist: [
      "Skill được đóng gói kèm hướng dẫn sử dụng mà người mới đọc là dùng được.",
      "Trang mô tả nêu rõ: vấn đề giải quyết, đối tượng, kết quả kỳ vọng và giới hạn.",
      "Có mô hình giá/offer đơn giản và kênh chia sẻ được xác định.",
      "Đã cho ít nhất 1 người ngoài dùng thử và ghi nhận phản hồi.",
      "Sản phẩm cuối ở dạng gói cài được (file .skill hoặc thư mục skill chuẩn) kèm README và bộ dữ liệu mẫu."
    ],
    quiz: [
      {
        q: "Yếu tố quan trọng nhất khi định vị một Agent Skill để bán là gì?",
        options: [
          "Dùng công nghệ AI mới nhất.",
          "Giải quyết một vấn đề cụ thể cho một nhóm người dùng cụ thể, với kết quả đo được.",
          "Giá rẻ nhất thị trường.",
          "Tên skill nghe kêu."
        ],
        answer: 1,
        explain: "Người mua trả tiền cho vấn đề được giải quyết, không phải cho công nghệ. Định vị theo ngành/vấn đề cụ thể."
      },
      {
        q: "Tài liệu hướng dẫn sử dụng skill nên đạt chuẩn nào?",
        options: [
          "Càng dài càng chuyên nghiệp.",
          "Người chưa từng dùng đọc xong là chạy được skill lần đầu thành công.",
          "Chỉ cần link video.",
          "Viết cho người đã hiểu kỹ thuật."
        ],
        answer: 1,
        explain: "Thước đo duy nhất của tài liệu hướng dẫn là: người mới có tự dùng được không."
      },
      {
        q: "Vì sao nên cho người ngoài dùng thử trước khi bán?",
        options: [
          "Để có lời khen đăng landing page.",
          "Vì tác giả bị 'mù' với lỗi của chính mình — người ngoài lộ ra khoảng trống trong hướng dẫn và tình huống chưa lường.",
          "Vì luật yêu cầu.",
          "Không cần thiết nếu đã test kỹ."
        ],
        answer: 1,
        explain: "Người ngoài không có ngữ cảnh ngầm của tác giả — chính họ phát hiện những gì tài liệu còn thiếu."
      }
    ],
    flashcards: [
      { front: "Packaging skill", back: "Chuẩn hóa skill + hướng dẫn sử dụng đạt chuẩn: người mới đọc xong là chạy được lần đầu thành công." },
      { front: "Định vị skill để bán", back: "Giải quyết vấn đề cụ thể, cho nhóm người dùng cụ thể, kết quả đo được — người mua trả tiền cho vấn đề được giải quyết." },
      { front: "Beta test với người ngoài", back: "Tác giả bị 'mù' với lỗi của mình. Người ngoài dùng thử sẽ lộ ra khoảng trống trong hướng dẫn và tình huống chưa lường." }
    ]
  },
  {
    id: "m11",
    level: "advanced",
    number: 11,
    title: "Data Layer: Từ File Đến Second Brain",
    duration: "Tuần 7",
    focus: "Thiết kế nơi tri thức và dữ liệu sống lâu dài",
    description:
      "Học viên biết chọn và dựng tầng dữ liệu cho workflow/skill — từ thư mục markdown, bảng tính, database đến tầm nhìn second brain mà AI truy cập được.",
    objectives: [
      "Hiểu bậc thang lưu trữ: file → bảng tính → database → database có API/MCP → semantic search.",
      "Thiết kế được schema đơn giản, đúng nhu cầu cho dữ liệu công việc.",
      "Nắm tầm nhìn second brain: capture, organize, distill, express — và vai trò của AI ở từng bước."
    ],
    topics: [
      "Vì sao dữ liệu vụn là nút thắt của mọi workflow trưởng thành.",
      "Bậc thang 5 cấp lưu trữ và tiêu chí khi nào nâng cấp.",
      "Thiết kế schema: thực thể, thuộc tính, ID, quan hệ cơ bản.",
      "Second brain vận hành cùng AI: từ ghi chú đến hệ thống trả lời được câu hỏi."
    ],
    practice:
      "Thiết kế và dựng tầng dữ liệu cho workflow/skill của bạn: chọn đúng bậc, định nghĩa schema, nạp dữ liệu thật và chạy 3 truy vấn có ý nghĩa.",
    output: "Một data layer hoạt động được kèm bản thiết kế schema và quy ước nạp dữ liệu.",
    checklist: [
      "Đã chọn bậc lưu trữ có lý do rõ (vì sao không thấp hơn, không cao hơn).",
      "Schema định nghĩa được: các thực thể chính, thuộc tính bắt buộc, ID và quy ước đặt tên.",
      "Đã nạp dữ liệu thật và chạy ít nhất 3 truy vấn trả lời câu hỏi công việc thực tế.",
      "AI truy cập được data layer này (đọc file/thư mục, chạy query, hoặc qua connector MCP)."
    ],
    quiz: [
      {
        q: "Nguyên tắc đúng khi chọn bậc lưu trữ là gì?",
        options: [
          "Dùng ngay database chuyên nghiệp để khỏi phải nâng cấp về sau.",
          "Chọn bậc thấp nhất còn đáp ứng được nhu cầu hiện tại, nâng cấp khi có tín hiệu rõ.",
          "Luôn dùng bảng tính vì dễ nhất.",
          "Chọn theo công nghệ đang thịnh hành."
        ],
        answer: 1,
        explain:
          "Mỗi bậc cao hơn thêm chi phí duy trì. File markdown đủ dùng thì database là gánh nặng; tín hiệu quá tải (trùng lặp, tìm không ra, đếm sai) mới là lúc nâng cấp."
      },
      {
        q: "Dấu hiệu nào cho thấy đã đến lúc chuyển từ bảng tính sang database?",
        options: [
          "Bảng tính có hơn 100 dòng.",
          "Cùng một thông tin phải sửa ở nhiều nơi, và các bảng cần tham chiếu lẫn nhau bằng copy-paste.",
          "Muốn giao diện đẹp hơn.",
          "Có tiền mua công cụ mới."
        ],
        answer: 1,
        explain:
          "Trùng lặp dữ liệu và quan hệ giữa các bảng phải duy trì bằng tay là đúng vấn đề database quan hệ sinh ra để giải."
      },
      {
        q: "Trong tầm nhìn second brain, vai trò phù hợp nhất của AI là gì?",
        options: [
          "Thay bạn ghi nhớ mọi thứ nên không cần tổ chức dữ liệu.",
          "Hỗ trợ cả bốn bước: capture nhanh hơn, organize theo quy ước, distill thành tri thức, express thành sản phẩm — trên nền dữ liệu bạn sở hữu.",
          "Chỉ dùng để tìm kiếm.",
          "Tạo dữ liệu mới thay dữ liệu thật."
        ],
        answer: 1,
        explain:
          "AI khuếch đại giá trị của second brain ở mọi bước, nhưng nền tảng vẫn là dữ liệu có cấu trúc mà bạn sở hữu và kiểm soát."
      }
    ],
    flashcards: [
      { front: "Bậc thang lưu trữ 5 cấp", back: "File/markdown → bảng tính → database quan hệ → database có API/MCP → semantic search (vector). Chọn bậc thấp nhất còn đáp ứng nhu cầu." },
      { front: "Schema", back: "Bản thiết kế dữ liệu: thực thể chính, thuộc tính bắt buộc, ID định danh và quan hệ. Schema rõ giúp cả người và AI nhập/truy vấn nhất quán." },
      { front: "Second brain", back: "Hệ thống tri thức cá nhân: Capture → Organize → Distill → Express. AI khuếch đại từng bước, nhưng dữ liệu phải do bạn sở hữu và có cấu trúc." }
    ]
  },
  {
    id: "m12",
    level: "advanced",
    number: 12,
    title: "Knowledge Graph: Tri Thức Có Quan Hệ",
    duration: "Tuần 8",
    focus: "Biểu diễn tri thức bằng thực thể và quan hệ",
    description:
      "Học viên hiểu knowledge graph là gì, khi nào cần đến nó, và xây được mini knowledge graph từ dữ liệu của chính mình để AI trả lời câu hỏi quan hệ.",
    objectives: [
      "Hiểu mô hình node–edge và triple (chủ thể – quan hệ – đối tượng).",
      "Phân biệt khi nào ghi chú/bảng là đủ và khi nào cần knowledge graph.",
      "Dùng AI trích xuất thực thể–quan hệ từ tài liệu và truy vấn đồ thị."
    ],
    topics: [
      "Giới hạn của lưu trữ phẳng: tìm được 'cái gì', không thấy 'liên quan thế nào'.",
      "Node, edge, property và triple — ngôn ngữ của knowledge graph.",
      "Bậc thang triển khai: wiki-link ghi chú → bảng quan hệ → graph database.",
      "Knowledge graph + AI: trích xuất tự động, entity resolution, truy vấn đa bước."
    ],
    practice:
      "Xây mini knowledge graph từ 10-20 ghi chú/tài liệu thật của bạn: trích xuất thực thể và quan hệ bằng AI, visualize, và trả lời 3 câu hỏi quan hệ đa bước.",
    output: "Một mini knowledge graph (bảng triple + sơ đồ) và 3 câu hỏi quan hệ được trả lời từ đồ thị.",
    checklist: [
      "Đã trích xuất được bảng triple (chủ thể – quan hệ – đối tượng) từ tài liệu thật, có chuẩn hóa tên thực thể.",
      "Bộ loại quan hệ (edge types) được định nghĩa trước và dùng nhất quán (5-10 loại).",
      "Có sơ đồ visualize đồ thị (Mermaid hoặc công cụ khác) đọc được.",
      "Trả lời đúng ít nhất 3 câu hỏi quan hệ đa bước mà tìm kiếm từ khóa thông thường không trả lời được."
    ],
    quiz: [
      {
        q: "Một 'triple' trong knowledge graph gồm những gì?",
        options: [
          "Ba tài liệu liên quan đến nhau.",
          "Chủ thể – quan hệ – đối tượng, ví dụ: [Khách A] –[đang dùng]→ [Gói dịch vụ X].",
          "Ba thuộc tính của một thực thể.",
          "Ba bản sao lưu của dữ liệu."
        ],
        answer: 1,
        explain:
          "Triple là đơn vị nhỏ nhất của knowledge graph: hai node (chủ thể, đối tượng) nối bằng một edge có tên (quan hệ)."
      },
      {
        q: "Tình huống nào knowledge graph vượt trội so với bảng/ghi chú thường?",
        options: [
          "Lưu danh sách việc cần làm hàng ngày.",
          "Trả lời câu hỏi đa bước qua nhiều quan hệ: 'khách nào đang dùng sản phẩm bị ảnh hưởng bởi lỗi mà đối tác X gây ra?'",
          "Lưu file PDF gốc.",
          "Đếm số dòng dữ liệu."
        ],
        answer: 1,
        explain:
          "Câu hỏi cần 'đi' qua nhiều quan hệ nối tiếp (multi-hop) là đúng thế mạnh của đồ thị — bảng phẳng phải join thủ công rất vất vả."
      },
      {
        q: "Vì sao 'entity resolution' (hợp nhất thực thể) quan trọng khi AI trích xuất đồ thị?",
        options: [
          "Để đồ thị có nhiều node hơn.",
          "Vì 'Cty ABC', 'ABC Corp' và 'ABC' phải là MỘT node — không hợp nhất thì quan hệ bị xé lẻ và truy vấn ra thiếu.",
          "Để tiết kiệm dung lượng.",
          "Vì luật yêu cầu."
        ],
        answer: 1,
        explain:
          "Cùng một thực thể xuất hiện dưới nhiều tên là chuyện thường trong tài liệu thật. Không chuẩn hóa thì đồ thị phân mảnh và câu trả lời sai vì thiếu cạnh."
      }
    ],
    flashcards: [
      { front: "Triple", back: "Đơn vị cơ bản của knowledge graph: Chủ thể –[quan hệ]→ Đối tượng. VD: [Khách A] –[đang dùng]→ [Gói X]." },
      { front: "Multi-hop query", back: "Câu hỏi phải đi qua nhiều quan hệ nối tiếp mới trả lời được — thế mạnh đặc trưng của knowledge graph so với bảng phẳng." },
      { front: "Entity resolution", back: "Hợp nhất các tên khác nhau của cùng một thực thể ('Cty ABC' = 'ABC Corp') thành một node — không làm thì đồ thị phân mảnh, truy vấn thiếu." }
    ]
  },
  {
    id: "m13",
    level: "master",
    number: 13,
    title: "Vận Hành Engineering Kit: Ask → Plan → Cook",
    duration: "Tuần 9",
    focus: "Điều khiển cả một đội agent thay vì một trợ lý",
    description:
      "Học viên cài và vận hành một engineering kit (ClaudeKit Engineer / OpenClaw-style) trên Claude Code: hiểu skill–agent–hook, đi vòng lặp Ask → Plan → Cook → Test → Review → Ship an toàn.",
    objectives: [
      "Hiểu kiến trúc kit: skills, agents, hooks, slash commands — và vì sao nó không phải nút 'tự code hết'.",
      "Thuộc vòng lặp chuẩn và bảng routing 10 lệnh cốt lõi theo mức rủi ro.",
      "Hoàn thành lộ trình 7 ngày làm quen trên project tập luyện, đúng quy tắc an toàn."
    ],
    topics: [
      "Skill (hộp kỹ năng), Agent (vai trò chuyên môn), Hook (lan can an toàn).",
      "Cài đặt: ck new/init, project tập luyện, output-style theo trình độ.",
      "Vòng lặp Ask → Plan → Cook → Test → Review → Git/Ship.",
      "Quy tắc an toàn: không YOLO mode, không paste secret, luôn đọc plan trước khi cook."
    ],
    practice:
      "Dựng project tập luyện, cài kit, đi hết lộ trình 7 ngày (ask, scout, plan, cook, test, review, fix, git) và ship một sản phẩm nhỏ đầu tiên.",
    output: "Nhật ký 7 ngày + một sản phẩm nhỏ (landing page/tính năng) đã qua đủ vòng lặp plan → cook → test → review.",
    checklist: [
      "Kit chạy trong project tập luyện riêng (không phải sản phẩm thật), lệnh /ck: hoạt động.",
      "Đã đi đủ vòng: ask/scout → plan → cook theo plan → test → code-review → git commit.",
      "Chưa từng bật YOLO mode; mọi lần AI xin quyền đều đọc trước khi cho phép.",
      "Nhật ký ghi lại: mỗi ngày làm gì, AI làm gì tốt, chỗ nào phải can thiệp."
    ],
    quiz: [
      {
        q: "Cách hiểu đúng về một engineering kit (ClaudeKit/OpenClaw-style) là gì?",
        options: [
          "Nút bấm 'tự code hết' — mô tả app là xong.",
          "Bộ khung quy trình + đội agent chuyên môn giúp bạn điều khiển AI coding có trật tự: bạn vẫn là người duyệt.",
          "Một model AI mạnh hơn Claude thường.",
          "Công cụ chỉ dành cho lập trình viên chuyên nghiệp."
        ],
        answer: 1,
        explain:
          "Kit không thay bạn suy nghĩ sản phẩm — nó biến ý tưởng thành các bước rõ ràng (plan) và có lan can an toàn (hook), quyền duyệt vẫn ở bạn."
      },
      {
        q: "Quy tắc 'việc to thì Plan trước, việc nhỏ thì Cook luôn' phản ánh điều gì?",
        options: [
          "Plan chỉ để cho đẹp hồ sơ.",
          "Chi phí lập kế hoạch phải tương xứng độ phức tạp: việc mơ hồ/lớn cần plan để duyệt trước, việc rõ scope thì cook --fast đỡ tốn token.",
          "Cook luôn luôn tốt hơn Plan.",
          "Người mới không được dùng Cook."
        ],
        answer: 1,
        explain: "Đây chính là tư duy 'chọn bậc thấp nhất đủ dùng' áp vào quy trình: plan sâu khi rủi ro/độ mơ hồ xứng đáng."
      },
      {
        q: "Vì sao người mới KHÔNG nên dùng YOLO mode (--dangerously-skip-permissions)?",
        options: [
          "Vì nó chạy chậm hơn.",
          "Vì các câu hỏi xin quyền chính là điểm human-in-the-loop cuối cùng — bỏ qua nghĩa là AI sửa file, chạy lệnh mạnh, đụng secrets mà không ai duyệt.",
          "Vì tốn token hơn.",
          "Vì lệnh này không tồn tại."
        ],
        answer: 1,
        explain:
          "Permission prompt là lan can an toàn. Người có kinh nghiệm chỉ bỏ qua trong worktree/branch cô lập không có credentials thật."
      }
    ],
    flashcards: [
      { front: "Skill / Agent / Hook", back: "Skill: hộp kỹ năng theo việc. Agent: nhân viên AI chuyên môn (planner, tester, reviewer...). Hook: lan can an toàn tự động (chặn file nhạy cảm, nhắc quy tắc)." },
      { front: "Vòng lặp kit chuẩn", back: "Ask/Scout (hiểu, không sửa file) → Plan (chia việc, duyệt) → Cook (làm theo plan) → Test → Review → Git/Ship." },
      { front: "Quy tắc an toàn số 1", back: "Không hiểu AI sắp làm gì = chưa approve. Không YOLO mode khi chưa quen; không paste secret; luôn đọc plan trước khi cook." }
    ]
  },
  {
    id: "m14",
    level: "master",
    number: 14,
    title: "Pipeline Chất Lượng: Plan Sâu, TDD, Fix, Ship",
    duration: "Tuần 10",
    focus: "Ép agent đi qua quy trình có kiểm chứng máy",
    description:
      "Học viên dùng thành thạo các chế độ plan nâng cao (--deep, --two, red-team), cook TDD, fix phân cấp và nghi thức ship — chất lượng đến từ quy trình, không từ prompt hay.",
    objectives: [
      "Chọn đúng flag plan theo độ phức tạp và biết red-team chính plan của mình.",
      "Hiểu khi nào bắt buộc cook --tdd và cách fix phân cấp (fix / --parallel / debug).",
      "Vận hành nghi thức ship: test → security-scan → review → ship, với 3 cổng kiểm trước khi tin kết quả."
    ],
    topics: [
      "Plan flags: --fast, --deep/--hard, --two, --parallel, --tdd; plan red-team/validate.",
      "Cook TDD: red-green-refactor — bắt buộc khi đụng code có người dùng thật.",
      "Fix phân cấp: fix có log, fix --parallel cho lỗi độc lập, debug khi chưa reproduce.",
      "Nghi thức ship và 3 cổng: plan rõ chưa / đã test chưa / có secrets không."
    ],
    practice:
      "Chạy một tính năng thật qua pipeline đầy đủ: plan --two (chọn 1 trong 2 phương án) → red-team plan → cook --tdd → test → code-review → ship.",
    output: "Một tính năng đã ship qua pipeline đầy đủ + bản plan có red-team + ghi chú so sánh 2 phương án.",
    checklist: [
      "Plan tạo bằng --two và có ghi chú vì sao chọn phương án A thay vì B.",
      "Plan đã qua red-team/validate và được sửa ít nhất 1 điểm trước khi cook.",
      "Cook chạy chế độ --tdd: có test viết trước, xem được test fail rồi mới pass.",
      "Trước ship: test xanh + code-review xong + không có secret trong commit (3 cổng đều qua)."
    ],
    quiz: [
      {
        q: "Khi nào flag --two của plan đáng dùng nhất?",
        options: [
          "Mọi task, để chắc chắn.",
          "Các quyết định kiến trúc/hướng đi quan trọng — hai phương án cạnh tranh giúp bạn thấy trade-off thay vì nuốt phương án đầu tiên AI đưa.",
          "Task sửa text nhỏ.",
          "Khi muốn tiết kiệm token."
        ],
        answer: 1,
        explain: "--two tốn gấp đôi công plan nên chỉ đáng cho quyết định lớn — đúng tinh thần 'chọn flag theo giá'."
      },
      {
        q: "Cook --tdd chậm hơn ~30%. Khi nào vẫn bắt buộc dùng?",
        options: [
          "Không bao giờ, chậm là xấu.",
          "Khi đụng vào code đang có người dùng thật (production) — test viết trước là bảo hiểm chống hồi quy.",
          "Chỉ khi viết code mới hoàn toàn.",
          "Khi muốn code đẹp hơn."
        ],
        answer: 1,
        explain: "Chi phí 30% thời gian đổi lấy việc không phá thứ đang chạy cho user thật — giao dịch luôn hời."
      },
      {
        q: "Red-team một plan nghĩa là gì và vì sao làm TRƯỚC khi cook?",
        options: [
          "Tô màu đỏ các phần quan trọng.",
          "Cho agent tấn công chính plan của mình để tìm lỗ hổng — sửa lỗ hổng trên giấy rẻ hơn nhiều lần sửa trong code.",
          "Xóa plan và làm lại.",
          "Chạy plan hai lần."
        ],
        answer: 1,
        explain: "Đây là Verify (module 4) áp vào tầng kế hoạch: phản biện có chủ đích trước khi tốn công thực thi."
      }
    ],
    flashcards: [
      { front: "Chọn flag plan theo giá", back: "--fast: scope rõ. --deep/--hard: nhiều unknowns, đổi kiến trúc. --two: quyết định lớn cần 2 phương án. --tdd: đụng code production. red-team: tấn công plan trước khi cook." },
      { front: "Fix phân cấp", back: "/ck:fix kèm log (mặc định) → --parallel khi nhiều lỗi độc lập → /ck:debug khi chưa reproduce được, cần truy vết trước khi sửa." },
      { front: "3 cổng trước khi tin kết quả", back: "Trước code: plan rõ chưa (mục tiêu, file, tiêu chí, rollback)? Sau code: đã test chưa? Trước push: có secrets trong commit không?" }
    ]
  },
  {
    id: "m15",
    level: "master",
    number: 15,
    title: "Orchestration, Mở Rộng Kit & Kinh Tế Context",
    duration: "Tuần 11-12",
    focus: "Nhiều agent song song, kit tùy biến theo bạn, chi phí tối ưu",
    description:
      "Học viên điều phối agent teams, chạy song song bằng worktree, để agent tự tối ưu qua đêm bằng loop, tự tạo skill/hook riêng và làm chủ kinh tế context — đỉnh của lộ trình vibeworking.",
    objectives: [
      "Biết khi nào dùng agent team / worktree song song — và khi nào chúng chỉ tốn token.",
      "Dùng được loop tối ưu theo metric cơ học và tự tạo skill/hook riêng cho convention của team.",
      "Nắm 5 nguyên tắc kinh tế context: session ngắn, docs là bộ nhớ, flag theo giá, plan là tài sản, verify bằng máy."
    ],
    topics: [
      "Agent teams (/ck:team) và điều kiện dùng: task chia được thành mảnh ít giao nhau.",
      "Git worktree: mỗi worktree một session một feature, chạy song song thật sự.",
      "/ck:loop với metric khách quan (bundle size, coverage, Lighthouse) — không dùng metric cảm tính.",
      "Customize: skill riêng từ code-standards, hooks/guards, MCP servers, output styles."
    ],
    practice:
      "Một ngày làm việc kiểu master: sáng plan --parallel chia 2 nhánh độc lập → 2 worktree chạy song song → chiều review chéo và merge; kèm tạo 1 skill riêng đóng gói convention của bạn/team.",
    output: "Hai nhánh việc hoàn thành song song trong một ngày + một skill riêng nằm trong .claude/skills/ của project.",
    checklist: [
      "Hai worktree chạy 2 việc độc lập thật sự (không đụng file nhau), review chéo trước khi merge.",
      "Skill riêng tạo bằng skill-creator từ tài liệu convention thật, đặt trong project (không sửa global).",
      "Đã thử 1 loop với metric cơ học chạy được bằng một lệnh, ghi lại kết quả keep/discard.",
      "Áp dụng ít nhất 3/5 nguyên tắc kinh tế context và ghi nhận khác biệt chi phí/chất lượng."
    ],
    quiz: [
      {
        q: "Khi nào KHÔNG nên dùng agent team?",
        options: [
          "Khi task chia được thành các module độc lập.",
          "Task nhỏ dưới 1 giờ hoặc task cần một dòng suy luận liền mạch — team lúc này chỉ tốn token và gây conflict.",
          "Khi có nhiều hơn 2 việc.",
          "Không bao giờ nên dùng."
        ],
        answer: 1,
        explain: "Orchestration có 'thuế token'. Task dính chùm hoặc quá nhỏ thì một agent làm liền mạch tốt hơn."
      },
      {
        q: "Metric nào phù hợp cho /ck:loop tự tối ưu qua đêm?",
        options: [
          "'Code đẹp hơn' và 'UX tốt hơn'.",
          "Metric cơ học đo được bằng một lệnh: bundle size, coverage %, thời gian build, Lighthouse score.",
          "Cảm nhận của agent về chất lượng.",
          "Số dòng code viết được."
        ],
        answer: 1,
        explain: "Loop đo → thử → đo lại → keep/discard. Metric chủ quan khiến loop tự lừa chính nó — agent tự chấm điểm mình là anti-pattern."
      },
      {
        q: "Nguyên tắc 'docs là bộ nhớ dài hạn' nghĩa là gì trong kinh tế context?",
        options: [
          "Viết docs cho đẹp hồ sơ.",
          "codebase-summary/architecture docs cập nhật tốt giúp mọi session sau khởi động rẻ hơn nhiều lần so với để agent tự khám phá lại repo.",
          "Docs thay thế hoàn toàn code.",
          "Chỉ dự án lớn mới cần docs."
        ],
        answer: 1,
        explain: "Đây là second brain (m11) áp vào codebase: tri thức nằm trong file bền vững, không nằm trong session sẽ trôi."
      }
    ],
    flashcards: [
      { front: "Điều kiện dùng agent team", back: "Task chia được thành mảnh ít giao nhau, mỗi teammate một module rõ + tiêu chí đo được. Task <1 giờ hoặc suy luận liền mạch → một agent tốt hơn." },
      { front: "Worktree song song", back: "Mỗi git worktree một session một feature — hai luồng không đụng nhau. Sáng chia việc, chiều review chéo rồi merge lần lượt." },
      { front: "5 nguyên tắc kinh tế context", back: "Session ngắn mục tiêu đơn · docs là bộ nhớ dài hạn · chọn flag theo giá · plan là tài sản tái sử dụng · verify bằng máy, không bằng niềm tin." }
    ]
  },
  {
    id: "m16",
    level: "master",
    number: 16,
    title: "OpenClaw: Trợ Lý AI Cá Nhân Tự Vận Hành",
    duration: "Tuần 13",
    focus: "Trợ lý sống trên máy bạn, trả lời qua app chat bạn dùng",
    description:
      "Học viên tự cài và vận hành OpenClaw — trợ lý AI cá nhân chạy local, nhắn qua Telegram/Slack/WhatsApp, nhớ bằng file minh bạch — và nắm bản đồ 4 khu tài liệu để tự đi tiếp.",
    objectives: [
      "Hiểu kiến trúc Gateway – Channel – Model và vì sao 'gateway chỉ là control plane, sản phẩm chính là trợ lý'.",
      "Cài đặt, onboard, kết nối kênh chat đầu tiên và chẩn đoán sự cố bằng doctor.",
      "Nắm nguyên lý trí nhớ minh bạch (nhớ bằng file Markdown, không state ẩn) và 5 nguyên tắc an toàn vàng."
    ],
    topics: [
      "Gateway (tổng đài chạy nền), Channel (app chat), Model (bộ não AI).",
      "Cài đặt: npm install -g openclaw, onboard, chat/gateway/dashboard, kết nối Telegram.",
      "Trí nhớ bằng file: MEMORY.md, USER.md, SOUL.md — mở ra là thấy, sửa được.",
      "Bản đồ 4 khu docs: concepts, automation, plugins, security — đọc theo read_when."
    ],
    practice:
      "Cài OpenClaw, onboard, kết nối 1 kênh chat (gợi ý Telegram), chỉnh SOUL.md để đổi tính cách trợ lý, và dùng doctor xử lý ít nhất 1 trục trặc.",
    output: "Trợ lý OpenClaw chạy thật trên máy, trả lời qua kênh chat của bạn, kèm nhật ký thiết lập và bản SOUL.md đã tùy chỉnh.",
    checklist: [
      "Gateway chạy được, nhắn tin qua kênh chat thật (không chỉ openclaw chat trong terminal) và nhận trả lời.",
      "Đã mở và hiểu các file trí nhớ (MEMORY.md/USER.md/SOUL.md); SOUL.md được chỉnh và thấy tính cách đổi thật.",
      "5 lá chắn an toàn đã bật: chạy localhost, token gateway, API key bí mật, command owner chỉ là bạn, có đặt spending limit.",
      "Biết dùng doctor/status/logs — đã tự chẩn đoán và sửa ít nhất 1 vấn đề."
    ],
    quiz: [
      {
        q: "Trong kiến trúc OpenClaw, phát biểu nào đúng?",
        options: [
          "Gateway là sản phẩm chính, trợ lý là phụ.",
          "Gateway chỉ là 'tổng đài' điều phối chạy nền — cài một lần rồi cắm kênh chat và bộ não AI tùy ý; sản phẩm chính là trợ lý.",
          "Mỗi kênh chat cần một Gateway riêng.",
          "Model phải là model local, không dùng được API."
        ],
        answer: 1,
        explain: "Gateway = control plane nhận tin, định tuyến, quản lý token. Channel và Model đều cắm-rút được quanh nó."
      },
      {
        q: "Trí nhớ của OpenClaw 'minh bạch' nghĩa là gì?",
        options: [
          "Nó nhớ mọi thứ vĩnh viễn.",
          "Nó ghi nhớ bằng các file Markdown trên đĩa (MEMORY.md, USER.md...) — không có trí nhớ ẩn; bạn mở file là thấy nó nhớ gì và sửa được.",
          "Ai cũng đọc được trí nhớ của bạn qua mạng.",
          "Nó không nhớ gì cả."
        ],
        answer: 1,
        explain:
          "Model chỉ nhớ những gì được lưu vào file — điểm khiến trợ lý kiểm soát được: review được, sửa được, backup được."
      },
      {
        q: "Khi trợ lý trục trặc (kênh không trả lời, config sai), lệnh nên chạy đầu tiên là gì?",
        options: [
          "Gỡ ra cài lại toàn bộ.",
          "openclaw doctor (hoặc doctor --fix) — tự quét cấu hình, chỉ ra chính xác thiếu/sai gì và gợi ý lệnh sửa.",
          "Xóa thư mục ~/.openclaw.",
          "Đổi sang model khác."
        ],
        answer: 1,
        explain: "doctor là 'bác sĩ' của hệ thống — chẩn đoán trước, sửa có chủ đích sau, thay vì đập đi làm lại."
      }
    ],
    flashcards: [
      { front: "Gateway / Channel / Model", back: "Gateway: tổng đài chạy nền, cài một lần. Channel: app chat bạn dùng để nói chuyện (Telegram, Slack...). Model: bộ não AI (Claude, GPT...). Sản phẩm chính là trợ lý, gateway chỉ là control plane." },
      { front: "Trí nhớ minh bạch", back: "OpenClaw nhớ bằng file Markdown trên đĩa (MEMORY.md, USER.md, SOUL.md) — không state ẩn. Mở file là thấy, sửa được, version-control được." },
      { front: "5 lá chắn an toàn cơ bản", back: "Chạy localhost trước · đặt token gateway · giữ API key bí mật · command owner chỉ là bạn · không hiểu lệnh thì hỏi/--help trước khi chạy." }
    ]
  },
  {
    id: "m17",
    level: "master",
    number: 17,
    title: "OpenClaw Nâng Cao: Hệ Điều Hành Cá Nhân",
    duration: "Tuần 14",
    focus: "Multi-agent, bộ nhớ tự lớn, automation, điều phối coding harness",
    description:
      "Học viên nâng OpenClaw từ chatbot thành runtime: nhiều persona cô lập, bộ nhớ 4 tầng tự củng cố, tự chạy nền theo lịch/sự kiện, và điều phối Claude Code/Codex như worker nền từ chính app chat.",
    objectives: [
      "Thiết kế multi-agent: persona cô lập theo ngữ cảnh với binding kênh và quyền riêng.",
      "Bật và đo bộ nhớ 4 tầng (compaction, active memory, dreaming, commitments) theo nguyên tắc 'bật từng tầng một'.",
      "Dựng automation (cron, standing orders, hooks) và nối coding harness qua ACP; vận hành an toàn với capability profiles + sandbox."
    ],
    topics: [
      "Multi-agent: một Gateway nhiều bộ não, binding kênh → agent, auth per-agent.",
      "Memory 4 tầng: compaction, active memory, dreaming (DREAMS.md → MEMORY.md), commitments.",
      "Automation: cron, on-exit, standing orders, hooks, webhook; heartbeat vs cron.",
      "Coding harness: CLI backend (fallback text) vs ACP (session bền, worker nền); security: capability profiles, sandbox, net-policy, threat model."
    ],
    practice:
      "Dựng 2 trong 3 workflow mẫu: (A) trợ lý sáng — cron 7h tóm tắt email/lịch gửi Telegram; (B) worker coding nền — bind hội thoại với session ACP Claude Code; (C) bộ nhớ tự lớn — active memory + dreaming, kiểm chứng qua DREAMS.md/MEMORY.md.",
    output: "Hai workflow OpenClaw chạy thật + ghi chú đo chi phí token từng tầng đã bật + cấu hình an toàn (owner, profile, sandbox) được kiểm bằng security audit.",
    checklist: [
      "Có ít nhất 2 agent cô lập (VD: work / personal) với binding kênh riêng, SOUL.md riêng.",
      "Các tầng memory được bật TỪNG TẦNG và có ghi chú token/chi phí trước-sau mỗi lần bật.",
      "2 workflow mẫu chạy thật, trong đó ít nhất 1 automation chạy đúng lịch mà không cần bạn đụng máy.",
      "An toàn kiểm chứng được: command owner chỉ là bạn, capability profile hẹp, đã chạy security audit và backup trước thử nghiệm lớn."
    ],
    quiz: [
      {
        q: "Vì sao nên tách nhiều agent (work/personal) thay vì dùng một agent cho tất cả?",
        options: [
          "Để trông chuyên nghiệp hơn.",
          "Mỗi agent là một 'bộ não' cô lập — workspace, bộ nhớ, giọng điệu, auth riêng; rò rỉ một agent không kéo theo cái khác.",
          "Vì một agent chỉ nối được một kênh.",
          "Để tốn nhiều token hơn."
        ],
        answer: 1,
        explain: "Cô lập theo ngữ cảnh vừa là trải nghiệm (khác giọng, khác bộ nhớ) vừa là an ninh (auth per-agent)."
      },
      {
        q: "Nguyên tắc đúng khi bật các tầng memory nâng cao (active, dreaming, commitments)?",
        options: [
          "Bật hết cùng lúc cho đủ tính năng.",
          "Bật từng tầng một và đo token/chi phí sau mỗi lần — mỗi tầng đều có giá; compaction mặc định là đủ cho đa số.",
          "Không bao giờ bật vì nguy hiểm.",
          "Chỉ bật khi hết dung lượng đĩa."
        ],
        answer: 1,
        explain: "Đây là 'chọn bậc thấp nhất đủ dùng' (m11) + kinh tế context (m15) áp vào bộ nhớ trợ lý."
      },
      {
        q: "Khác biệt giữa CLI backend và ACP agent khi nối Claude Code vào OpenClaw?",
        options: [
          "Không có khác biệt.",
          "CLI backend là lưới an toàn text-only (fallback khi API sập); ACP là harness đầy đủ với session bền — giao việc coding thật (đọc repo, sửa file, chạy test) như worker nền.",
          "ACP chỉ dành cho Codex.",
          "CLI backend mạnh hơn ACP."
        ],
        answer: 1,
        explain: "Chọn theo nhu cầu: chỉ cần text ổn định → CLI backend; giao việc coding thật và theo dõi như task nền → ACP."
      }
    ],
    flashcards: [
      { front: "Memory 4 tầng của OpenClaw", back: "Compaction (mặc định, tóm hội thoại dài) → Active memory (sub-agent nhớ ra trước khi trả lời) → Dreaming (nền 3 pha, DREAMS.md → MEMORY.md) → Commitments (nhớ vòng lặp mở, heartbeat mang lại đúng lúc). Bật từng tầng, đo chi phí." },
      { front: "Heartbeat vs Cron", back: "Cron: lịch xác định (7h sáng mỗi ngày). Heartbeat: nhịp nền để giao commitments/kiểm tra linh hoạt. Hai cơ chế khác nhau — đừng dùng lẫn." },
      { front: "Kỷ luật khi lên cấp OpenClaw", back: "Bật từng tầng + đo chi phí · doctor --fix sau thay đổi config lớn · backup trước thử nghiệm · quyền tối thiểu (owner, profile hẹp, sandbox) · đọc threat model trước khi phơi ra mạng · version-control persona (SOUL.md, AGENTS.md)." }
    ]
  }
];

// ===== Template tương tác =====
const tools = [
  {
    id: "context-blueprint",
    title: "Context Blueprint",
    description: "Mẫu tạo context cho mọi nhiệm vụ tri thức trước khi yêu cầu AI thực hiện.",
    fields: [
      { key: "role", label: "Vai trò", placeholder: "VD: Bạn là chuyên gia marketing B2B 10 năm kinh nghiệm..." },
      { key: "goal", label: "Mục tiêu", placeholder: "Kết quả cuối cùng cần đạt là gì?" },
      { key: "context", label: "Bối cảnh", placeholder: "Tình huống, công ty, thị trường, đối tượng..." },
      { key: "input", label: "Dữ liệu đầu vào", placeholder: "Tài liệu, số liệu, link... AI được dùng" },
      { key: "process", label: "Quy trình mong muốn", placeholder: "Các bước AI nên thực hiện theo thứ tự" },
      { key: "output", label: "Đầu ra", placeholder: "Định dạng, độ dài, cấu trúc mong muốn" },
      { key: "constraints", label: "Ràng buộc", placeholder: "Điều không được làm, giới hạn phạm vi..." },
      { key: "verification", label: "Tiêu chí kiểm tra", placeholder: "Làm sao biết đầu ra đạt yêu cầu?" }
    ]
  },
  {
    id: "workflow-canvas",
    title: "Workflow Canvas",
    description: "Khung chuyển một công việc thành quy trình AI có thể lặp lại.",
    fields: [
      { key: "trigger", label: "Trigger", placeholder: "Khi nào workflow chạy?" },
      { key: "input", label: "Input", placeholder: "Đầu vào cần có" },
      { key: "task1", label: "AI Task 1", placeholder: "Nhiệm vụ AI đầu tiên" },
      { key: "review", label: "Human Review", placeholder: "Con người duyệt gì, ở đâu?" },
      { key: "task2", label: "AI Task 2", placeholder: "Nhiệm vụ AI tiếp theo" },
      { key: "output", label: "Output", placeholder: "Đầu ra cuối cùng" },
      { key: "quality", label: "Quality Check", placeholder: "Kiểm tra chất lượng bằng tiêu chí nào?" },
      { key: "improvement", label: "Improvement", placeholder: "Ghi nhận lỗi và cải tiến ra sao?" }
    ]
  },
  {
    id: "skill-spec",
    title: "Agent Skill Spec",
    description: "Mẫu đóng gói workflow thành Agent Skill có hướng dẫn và giới hạn rõ.",
    fields: [
      { key: "name", label: "Skill name", placeholder: "Tên skill ngắn gọn, rõ mục đích" },
      { key: "usecase", label: "Use case", placeholder: "Skill giải quyết vấn đề gì?" },
      { key: "target", label: "Target user", placeholder: "Ai sẽ dùng skill này?" },
      { key: "input", label: "Required input", placeholder: "Input bắt buộc người dùng phải cấp" },
      { key: "steps", label: "Steps", placeholder: "Các bước xử lý của skill" },
      { key: "standard", label: "Output standard", placeholder: "Tiêu chuẩn đầu ra đo được" },
      { key: "tests", label: "Test cases", placeholder: "Các tình huống kiểm thử: tốt / thiếu / sai" },
      { key: "limits", label: "Known limits", placeholder: "Giới hạn đã biết của skill" }
    ]
  }
];

const capstoneItems = [
  "Mô tả vấn đề thật trong công việc hoặc thị trường.",
  "Xác định đối tượng sử dụng và tình huống dùng skill.",
  "Thiết kế workflow xử lý có điểm kiểm tra chất lượng.",
  "Viết Agent Skill hoàn chỉnh.",
  "Tạo bộ prompt/context mẫu và bộ test case.",
  "Hoàn thiện hướng dẫn sử dụng và kế hoạch chia sẻ."
];
