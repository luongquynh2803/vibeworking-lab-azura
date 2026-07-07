// ===== Bài giảng chi tiết cho từng module =====
// Mỗi bài giảng gồm nhiều section; body là HTML.

const lessons = {
  m1: {
    readingTime: "14 phút đọc",
    sections: [
      {
        title: "1. Từ AI trả lời câu hỏi đến AI làm việc thay bạn",
        body: `
<p>Trong vài năm, cách chúng ta dùng AI đã đi qua ba giai đoạn rất khác nhau. Giai đoạn đầu, AI là <strong>công cụ hỏi đáp</strong>: bạn hỏi một câu, nó trả lời một câu, xong. Giai đoạn hai, AI trở thành <strong>trợ lý soạn thảo</strong>: viết email, tóm tắt tài liệu, dịch thuật — vẫn là "một yêu cầu, một kết quả". Giai đoạn ba — nơi chúng ta đang đứng — là <strong>Agentic AI</strong>: AI nhận một mục tiêu, tự lập kế hoạch, thực hiện chuỗi hành động (tìm kiếm, đọc tài liệu, viết, chạy code, kiểm tra lại), rồi trả về kết quả hoàn chỉnh.</p>
<p>Sự khác biệt không nằm ở "model thông minh hơn" mà ở <strong>cách làm việc</strong>. Chatbot giống một người bạn hiểu biết trả lời qua tin nhắn. Agent giống một cộng sự được giao việc: nó cần biết mục tiêu, phạm vi, tiêu chuẩn nghiệm thu — và bạn cần biết cách nghiệm thu công việc của nó.</p>
<div class="callout"><strong>Ví dụ cụ thể.</strong> Yêu cầu "Viết cho tôi 5 tiêu đề quảng cáo" là dùng chatbot. Yêu cầu "Nghiên cứu 3 đối thủ trong ngành mỹ phẩm thiên nhiên, xác định thông điệp họ đang dùng, đề xuất góc truyền thông khác biệt, rồi viết 5 tiêu đề theo góc đó — cuối cùng tự kiểm tra xem tiêu đề nào trùng ý đối thủ" là giao việc cho agent. Cùng một model, chất lượng đầu ra khác nhau hoàn toàn.</div>`
      },
      {
        title: "2. Agentic AI làm tốt gì — và không làm được gì",
        body: `
<p>Muốn giao việc đúng, phải hiểu năng lực thật. Agentic AI làm <strong>rất tốt</strong> các việc: tổng hợp và cấu trúc lại thông tin từ nhiều nguồn; tạo bản nháp nhanh (văn bản, kế hoạch, code, bảng tính); thực hiện quy trình lặp lại có hướng dẫn rõ; phản biện và rà soát theo tiêu chí cho trước; làm việc bền bỉ với khối lượng lớn mà con người sẽ chán.</p>
<p>AI làm <strong>kém hoặc rủi ro</strong> ở các việc: phán đoán cần bối cảnh ngầm mà bạn chưa nói ra (quan hệ nội bộ, lịch sử khách hàng); quyết định có hậu quả lớn không đảo ngược được; số liệu chính xác tuyệt đối nếu không được cấp nguồn; và đặc biệt — <strong>nó không biết là nó đang sai</strong>. Đầu ra sai của AI trông tự tin y hệt đầu ra đúng.</p>
<p>Ba rủi ro bạn sẽ gặp thường xuyên:</p>
<ul>
<li><strong>Ảo giác (hallucination):</strong> AI tạo ra thông tin nghe hợp lý nhưng không có thật — số liệu, tên nghiên cứu, tính năng sản phẩm. Xảy ra nhiều nhất khi bạn không cấp dữ liệu và AI phải "lấp chỗ trống".</li>
<li><strong>Sai ngữ cảnh:</strong> AI trả lời đúng cho một câu hỏi chung, nhưng sai cho tình huống cụ thể của bạn — vì bạn chưa mô tả tình huống đó.</li>
<li><strong>Mất kiểm soát đầu ra:</strong> giao việc dài, không đặt điểm kiểm tra giữa chừng, đến cuối nhận về thứ lệch hẳn ý định ban đầu.</li>
</ul>
<div class="callout callout-warning"><strong>Nguyên tắc vàng:</strong> mức độ kiểm tra phải tỉ lệ thuận với hậu quả nếu sai. Bản nháp nội bộ — kiểm tra nhanh. Email gửi khách, số liệu ra quyết định — con người duyệt từng dòng.</div>`
      },
      {
        title: "3. Ba nhóm công việc: giao AI, giữ người trong vòng, không tự động hóa",
        body: `
<p>Khung phân loại quan trọng nhất của module này gồm ba nhóm:</p>
<ul>
<li><strong>Nhóm 1 — Giao cho AI (con người kiểm tra cuối):</strong> việc lặp lại, có tiêu chuẩn rõ, sai thì sửa được rẻ. Ví dụ: tóm tắt họp, phân loại phản hồi khách hàng, tạo bản nháp nội dung, chuyển đổi định dạng dữ liệu, nghiên cứu sơ bộ.</li>
<li><strong>Nhóm 2 — Human-in-the-loop (AI làm, người duyệt tại các điểm then chốt):</strong> việc có hậu quả với người khác hoặc với tiền bạc. Ví dụ: email gửi khách hàng, báo giá, nội dung đăng công khai, phân tích làm căn cứ ra quyết định. AI tạo bản nháp và đề xuất — con người quyết định phát hành.</li>
<li><strong>Nhóm 3 — Không tự động hóa:</strong> việc mà giá trị nằm chính ở con người: đàm phán quan hệ quan trọng, quyết định nhân sự, cam kết pháp lý, xử lý khủng hoảng, và các quyết định chiến lược ít lặp lại. AI có thể <em>tham mưu</em>, nhưng không thay mặt.</li>
</ul>
<p>Cách phân loại nhanh một công việc bất kỳ — hỏi 3 câu: <strong>(1)</strong> Việc này có lặp lại và có tiêu chuẩn "thế nào là đạt" rõ ràng không? <strong>(2)</strong> Nếu AI làm sai mà không ai phát hiện, hậu quả tệ nhất là gì? <strong>(3)</strong> Giá trị của việc này nằm ở kết quả hay ở chính con người thực hiện nó?</p>`
      },
      {
        title: "4. Tư duy AI-native: bạn là người thiết kế hệ thống làm việc",
        body: `
<p>Người dùng AI thông thường hỏi: "AI có làm được việc này không?". Người AI-native hỏi khác: <strong>"Tôi thiết kế quy trình thế nào để AI làm phần của nó thật tốt, còn tôi kiểm soát được chất lượng?"</strong></p>
<p>Sự dịch chuyển này đổi vai của bạn từ <em>người thực thi</em> sang <em>người thiết kế và nghiệm thu</em>. Kỹ năng giá trị nhất không còn là tự tay làm nhanh, mà là: mô tả công việc rõ ràng (context design — module 2), giao việc đúng cách (prompting — module 3), và kiểm chứng có hệ thống (framework 4 bước — module 4). Toàn bộ khóa học này xây trên nền tư duy đó.</p>
<div class="callout"><strong>Một hình dung hữu ích:</strong> hãy coi AI agent như một nhân viên mới cực kỳ chăm chỉ, đọc nhanh, viết nhanh — nhưng mới vào công ty hôm nay, không biết gì về khách hàng của bạn, và không bao giờ tự nhận mình không chắc chắn. Bạn sẽ giao việc cho nhân viên đó thế nào? Chắc chắn không phải bằng một câu nhắn hai dòng.</div>`
      },
      {
        title: "5. Một tuần làm việc AI-native trông như thế nào",
        body: `
<p>Để cụ thể hóa, hãy theo chân Lan — trưởng nhóm marketing 5 người — trong một tuần sau khi áp dụng tư duy module này.</p>
<p><strong>Thứ 2:</strong> thay vì tự đọc 200 phản hồi khách hàng tháng trước, Lan giao AI phân loại và tóm tắt theo chủ đề (nhóm 1), rồi dành 30 phút đọc bản tóm tắt và <em>tự kiểm tra xác suất 20 phản hồi gốc</em> xem phân loại có đáng tin không. Phát hiện AI gộp nhầm "giao hàng chậm" với "thiếu hàng" — ghi chú lại để lần sau định nghĩa rõ hơn.</p>
<p><strong>Thứ 3:</strong> viết email xin lỗi một khách hàng lớn đang giận. Đây là nhóm 2: Lan cho AI thông tin vụ việc và yêu cầu 3 phương án giọng điệu, nhưng tự tay chỉnh bản cuối và tự quyết định gửi. AI đề xuất một câu hứa đền bù mà công ty chưa duyệt — đúng loại lỗi "sai bối cảnh" mà chỉ người trong cuộc bắt được.</p>
<p><strong>Thứ 5:</strong> đánh giá giữa kỳ cho một nhân viên. Nhóm 3 — Lan không đưa dữ liệu đánh giá cá nhân vào AI. Cô chỉ dùng AI ở mức khung: "gợi ý cấu trúc một buổi đánh giá cân bằng giữa ghi nhận và góp ý".</p>
<p><strong>Thứ 6:</strong> Lan nhìn lại tuần: việc nào giao AI mà phải sửa nhiều — vì sao? Việc nào chưa giao mà lẽ ra nên giao? Chính vòng nhìn lại hàng tuần này, chứ không phải công cụ nào, tạo ra khoảng cách giữa người dùng AI hiệu quả và người dùng cho vui.</p>
<div class="callout"><strong>Để ý:</strong> Lan không "dùng AI nhiều nhất có thể" — cô phân loại trước, kiểm tra sau, và có chỗ cố tình không dùng. AI-native là chọn đúng chỗ, không phải dùng mọi chỗ.</div>`
      },
      {
        title: "6. Hướng dẫn thực hành: Bản đồ công việc cá nhân",
        body: `
<p>Bây giờ áp dụng ngay. Mở <strong>Xưởng thực hành</strong> bên dưới và làm theo các bước:</p>
<ul>
<li><strong>Bước 1.</strong> Liệt kê 5 công việc bạn thực sự làm tuần này (càng cụ thể càng tốt: "viết báo cáo tuần cho sếp" thay vì "làm báo cáo").</li>
<li><strong>Bước 2.</strong> Với từng việc, trả lời 3 câu hỏi phân loại ở mục 3, rồi xếp vào nhóm 1, 2 hoặc 3.</li>
<li><strong>Bước 3.</strong> Với việc thuộc nhóm 1 và 2, ghi rõ: rủi ro chính nếu AI làm sai là gì (ảo giác? sai ngữ cảnh?) và bạn sẽ kiểm tra đầu ra bằng cách nào.</li>
<li><strong>Bước 4.</strong> Tick checklist kiểm chứng, rồi bấm "Copy prompt nhờ AI phản biện" — dán vào Claude/ChatGPT để nhận phản biện về bản phân loại của bạn.</li>
</ul>
<pre><code>Mẫu gợi ý cho mỗi công việc:
- Công việc: ...
- Nhóm: 1 / 2 / 3
- Lý do: ...
- Rủi ro chính nếu dùng AI: ...
- Cách kiểm tra đầu ra: ...</code></pre>`
      }
    ]
  },

  m2: {
    readingTime: "14 phút đọc",
    sections: [
      {
        title: "1. Vì sao cùng một yêu cầu, người ra kết quả tốt, người ra rác?",
        body: `
<p>Hai người cùng yêu cầu AI "viết kế hoạch marketing". Một người nhận về bản kế hoạch chung chung như chép từ sách giáo khoa. Người kia nhận về bản kế hoạch dùng được gần như ngay. Khác biệt không nằm ở "biết prompt hay" theo nghĩa câu chữ — mà nằm ở <strong>lượng và chất của bối cảnh (context)</strong> mà mỗi người cung cấp.</p>
<p>Để hiểu tại sao, cần biết một điều cơ bản về cách LLM hoạt động: model sinh văn bản bằng cách dự đoán phần tiếp theo dựa trên <em>toàn bộ những gì có trong cửa sổ ngữ cảnh</em> (context window). Nó không đọc được suy nghĩ của bạn, không biết công ty bạn, không biết chuyện gì xảy ra hôm qua. <strong>Mọi thứ không có trong context coi như không tồn tại</strong> — và khi thiếu thông tin, model sẽ điền vào bằng phương án "trung bình của internet": đúng một cách chung chung, sai với tình huống của bạn.</p>
<div class="callout"><strong>Hệ quả thực tiễn:</strong> ảo giác và đầu ra chung chung phần lớn không phải lỗi của model — mà là triệu chứng của context nghèo. Cấp đủ bối cảnh là đòn bẩy chất lượng lớn nhất mà bạn kiểm soát được 100%.</div>`
      },
      {
        title: "2. Giải phẫu một context hoàn chỉnh: 8 thành phần",
        body: `
<p>Framework của khóa học: <strong>Role → Goal → Context → Input → Process → Output → Constraints → Verification</strong>. Đi từng phần:</p>
<ul>
<li><strong>Role (vai trò):</strong> AI nên đứng ở góc nhìn nào? "Chuyên gia định giá SaaS B2B" cho đầu ra khác hẳn "trợ lý viết bài". Vai trò định hình giọng điệu, độ sâu và loại kiến thức được ưu tiên.</li>
<li><strong>Goal (mục tiêu):</strong> kết quả cuối cùng phục vụ điều gì? Không phải "viết bài blog" mà là "viết bài blog để người đọc đăng ký demo". Mục tiêu giúp AI tự ra hàng trăm quyết định nhỏ đúng hướng.</li>
<li><strong>Context (bối cảnh):</strong> tình huống xung quanh — công ty bạn là ai, thị trường thế nào, chuyện gì đã thử và thất bại, ai sẽ đọc kết quả này.</li>
<li><strong>Input (dữ liệu đầu vào):</strong> tài liệu, số liệu, ví dụ thật mà AI <em>được phép và nên</em> dựa vào. Đây là vũ khí chống ảo giác mạnh nhất: có dữ liệu thật, AI không phải bịa.</li>
<li><strong>Process (quy trình):</strong> các bước bạn muốn AI đi qua. "Phân tích trước, đề xuất sau" cho kết quả khác "đề xuất luôn".</li>
<li><strong>Output (đầu ra):</strong> định dạng, độ dài, cấu trúc, ngôn ngữ. Càng cụ thể càng đỡ mất công sửa.</li>
<li><strong>Constraints (ràng buộc):</strong> điều KHÔNG được làm — không bịa số liệu, không hứa tính năng chưa có, không dùng từ ngữ đao to búa lớn, chỉ dùng dữ liệu được cấp.</li>
<li><strong>Verification (tiêu chí kiểm tra):</strong> "thế nào là đạt?" — viết TRƯỚC khi chạy. Ví dụ: "mỗi luận điểm phải có dẫn chứng từ dữ liệu được cấp; không có câu nào dài quá 30 từ; có đúng 3 phương án kèm ưu nhược điểm".</li>
</ul>
<p>Không phải nhiệm vụ nào cũng cần đủ 8 phần — nhiệm vụ nhỏ có thể gộp còn 4-5. Nhưng <strong>Goal, Input và Verification gần như không bao giờ được bỏ</strong>.</p>`
      },
      {
        title: "3. Ví dụ trọn vẹn: context nghiên cứu đối thủ",
        body: `
<p>Dưới đây là một context hoàn chỉnh cho nhiệm vụ thật — bạn có thể dùng làm mẫu:</p>
<pre><code>ROLE: Bạn là chuyên gia phân tích cạnh tranh ngành F&B,
10 năm kinh nghiệm thị trường Việt Nam.

GOAL: Giúp tôi quyết định có nên mở dòng trà sữa ít đường
nhắm vào dân văn phòng 25-35 tuổi hay không.

CONTEXT: Tôi có 2 quán cà phê ở quận 3, TP.HCM, doanh thu
ổn định nhưng tăng trưởng chậm. Khách chủ yếu là dân văn
phòng. Ngân sách thử nghiệm tối đa 150 triệu.

INPUT: (đính kèm) menu + giá của 4 đối thủ trong bán kính
2km; số liệu bán hàng 6 tháng của quán tôi.

PROCESS: (1) Phân tích định vị 4 đối thủ từ dữ liệu được cấp.
(2) Xác định khoảng trống thị trường. (3) Đánh giá ý tưởng
trà sữa ít đường theo khoảng trống đó. (4) Đề xuất đi/không đi
kèm điều kiện.

OUTPUT: Báo cáo tối đa 800 từ, tiếng Việt, có bảng so sánh
đối thủ, kết luận rõ ràng ở đầu.

CONSTRAINTS: Chỉ dùng dữ liệu tôi cấp; chỗ nào thiếu dữ liệu
hãy ghi rõ "cần kiểm chứng thêm" thay vì suy đoán; không dùng
số liệu thị trường chung chung nếu không có nguồn.

VERIFICATION: Mỗi nhận định về đối thủ phải trích được từ
dữ liệu đính kèm; kết luận phải nêu rõ 2 rủi ro lớn nhất;
đề xuất phải nằm trong ngân sách 150 triệu.</code></pre>
<p>Chú ý điểm hay bị bỏ sót: dòng constraints <em>"chỗ nào thiếu dữ liệu hãy ghi rõ thay vì suy đoán"</em> — một câu này chặn được phần lớn ảo giác.</p>`
      },
      {
        title: "4. Bốn lỗi context phổ biến nhất",
        body: `
<ul>
<li><strong>Lỗi 1 — Mục tiêu ngầm định:</strong> bạn biết mình cần gì nhưng không viết ra. "Viết bài về sản phẩm X" — để làm gì? Bán? Giáo dục thị trường? SEO? Mỗi mục tiêu ra một bài khác nhau.</li>
<li><strong>Lỗi 2 — Không cấp dữ liệu rồi trách AI bịa:</strong> hỏi về thị trường của bạn, khách hàng của bạn mà không đưa số liệu nào — AI buộc phải dùng kiến thức chung, thường lỗi thời hoặc sai khu vực.</li>
<li><strong>Lỗi 3 — Tiêu chí kiểm tra viết sau khi thấy kết quả:</strong> lúc đó bạn dễ bị đầu ra "nghe hay" thuyết phục. Chuẩn phải có trước, như đề thi phải có đáp án trước khi chấm.</li>
<li><strong>Lỗi 4 — Context một lần cho mọi việc:</strong> dán nguyên khối context khổng lồ vào mọi nhiệm vụ. Context thừa cũng hại như thiếu: loãng trọng tâm, tốn token, model dễ bám vào chi tiết không liên quan. Mỗi nhiệm vụ cần đúng phần bối cảnh của nó.</li>
</ul>`
      },
      {
        title: "5. Bài tập nhanh: chấm điểm hai context",
        body: `
<p>Trước khi tự viết, hãy luyện mắt bằng cách chấm hai context cùng một nhiệm vụ — "viết bài giới thiệu dịch vụ kế toán cho doanh nghiệp nhỏ":</p>
<pre><code>CONTEXT A:
"Bạn là copywriter giỏi. Viết bài giới thiệu dịch vụ kế toán
của công ty tôi, khoảng 500 từ, hấp dẫn, chuyên nghiệp,
thu hút khách hàng."</code></pre>
<pre><code>CONTEXT B:
"Bạn là copywriter chuyên viết cho dịch vụ B2B.
GOAL: chủ doanh nghiệp nhỏ đọc xong đặt lịch tư vấn miễn phí.
CONTEXT: khách của tôi là chủ quán ăn, shop online 1-10 nhân
viên; nỗi đau lớn nhất là sợ sai thuế và mất thời gian giấy tờ;
họ KHÔNG hiểu thuật ngữ kế toán.
INPUT: (đính kèm) bảng giá 3 gói dịch vụ + 2 câu chuyện khách
hàng thật.
OUTPUT: 500 từ, mở đầu bằng nỗi đau, một CTA duy nhất.
CONSTRAINTS: không thuật ngữ chuyên môn; không hứa 'tiết kiệm
X%' vì chưa có số liệu; chỉ dùng câu chuyện khách được cấp.
VERIFICATION: người không biết gì về kế toán đọc hiểu 100%;
có đúng 1 CTA; mọi con số đều lấy từ bảng giá đính kèm."</code></pre>
<p>Context A trông "đầy đủ" — có vai trò, độ dài, tính từ. Nhưng thử soi bằng 8 thành phần: không mục tiêu hành vi (hấp dẫn để làm gì?), không dữ liệu (AI sẽ bịa tên gói, bịa giá), không ràng buộc (sẽ có "giải pháp tối ưu hóa dòng tiền toàn diện"), không tiêu chí kiểm tra. Đầu ra của A đọc mượt và <em>vô dụng</em>: không dùng được vì mọi chi tiết đều phải thay.</p>
<p>Context B chưa chắc hoàn hảo, nhưng mọi lỗi của nó sẽ <em>nhìn thấy được</em> khi đối chiếu Verification — và đó chính là điểm khác biệt: context tốt không đảm bảo đầu ra hoàn hảo, nó đảm bảo bạn <strong>biết đầu ra đạt hay không và vì sao</strong>.</p>`
      },
      {
        title: "6. Hướng dẫn thực hành: viết context đầu tiên của bạn",
        body: `
<p>Chọn một việc thật bạn định làm tuần này (nghiên cứu thị trường, viết content, lập kế hoạch, phân tích đối thủ...). Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Dùng template <strong>Context Blueprint</strong> ở cuối trang — điền đủ 8 trường. Viết Verification trước khi viết Process (nghe ngược nhưng hiệu quả: biết "thế nào là đạt" giúp bạn mô tả quy trình sắc hơn).</li>
<li><strong>Bước 2.</strong> Tự rà bằng 4 lỗi ở mục 4 — bạn có đang mắc lỗi nào không?</li>
<li><strong>Bước 3.</strong> Chạy thử context với AI. So sánh đầu ra với tiêu chí Verification bạn đã viết. Ghi lại: đạt mấy phần, lệch chỗ nào, cần bổ sung context gì.</li>
<li><strong>Bước 4.</strong> Dán bản context + nhận xét vào ô bài làm, tick checklist, và copy prompt phản biện để AI chấm lại bản context của bạn.</li>
</ul>
<div class="callout"><strong>Mẹo:</strong> giữ lại context tốt như tài sản. Một context được mài qua 2-3 lần chạy thật chính là phôi của workflow (module 6) và Agent Skill (module 8) sau này.</div>`
      }
    ]
  },

  m3: {
    readingTime: "12 phút đọc",
    sections: [
      {
        title: "1. Từ câu hỏi sang nhiệm vụ",
        body: `
<p>Prompt hỏi đáp: <em>"Cách tăng đơn hàng online?"</em> — bạn nhận về danh sách 10 ý ai cũng biết. Prompt giao nhiệm vụ: <em>"Dựa trên số liệu bán hàng đính kèm, xác định 2 điểm rơi lớn nhất trong phễu, đề xuất 3 thử nghiệm cho từng điểm, mỗi thử nghiệm kèm cách đo và chi phí ước tính"</em> — bạn nhận về thứ làm việc được.</p>
<p>Khác biệt nằm ở chỗ prompt thứ hai có: <strong>động từ hành động cụ thể</strong> (xác định, đề xuất), <strong>căn cứ</strong> (số liệu đính kèm), <strong>cấu trúc đầu ra</strong> (2 điểm × 3 thử nghiệm), và <strong>tiêu chuẩn ngầm</strong> (kèm cách đo, chi phí). Với Agentic AI, prompt tốt là một <em>bản giao việc thu nhỏ</em> — nó thừa hưởng toàn bộ tư duy context ở module 2.</p>`
      },
      {
        title: "2. Sáu loại prompt trong Agentic Workflow",
        body: `
<p>Mỗi giai đoạn làm việc với AI cần một loại prompt khác nhau. Đây là bộ sáu loại kèm mẫu rút gọn:</p>
<ul>
<li><strong>Prompt giao nhiệm vụ:</strong> mô tả việc + tiêu chuẩn nghiệm thu. <em>"Hãy [việc] dựa trên [dữ liệu], đầu ra gồm [cấu trúc], đạt khi [tiêu chí]."</em></li>
<li><strong>Prompt nghiên cứu:</strong> yêu cầu tìm hiểu trước khi làm. <em>"Trước khi đề xuất, hãy phân tích [dữ liệu/tài liệu] và tóm tắt 5 phát hiện quan trọng nhất kèm dẫn chứng. Chưa cần giải pháp."</em> — tách nghiên cứu khỏi thực thi giúp bạn kiểm tra hiểu biết của AI trước khi nó xây trên nền đó.</li>
<li><strong>Prompt lập kế hoạch:</strong> <em>"Chia mục tiêu [X] thành các bước nhỏ. Với mỗi bước: đầu vào cần gì, đầu ra là gì, rủi ro gì. Trình kế hoạch trước, chưa thực hiện."</em> — chữ "chưa thực hiện" quan trọng: bạn duyệt kế hoạch trước khi tốn công chạy.</li>
<li><strong>Prompt phản biện:</strong> <em>"Đóng vai người phản biện khó tính. Chỉ ra 3 điểm yếu lớn nhất của [bản nháp] theo tiêu chí [Y]. Không khen. Với mỗi điểm yếu, đề xuất cách sửa cụ thể."</em></li>
<li><strong>Prompt kiểm chứng:</strong> <em>"Rà từng nhận định trong văn bản sau. Nhận định nào có dẫn chứng từ dữ liệu được cấp — đánh dấu ✓. Nhận định nào không có nguồn — đánh dấu ⚠ và ghi rõ cần kiểm tra gì."</em></li>
<li><strong>Prompt cải tiến:</strong> <em>"Dựa trên các phản biện đã thống nhất, viết lại bản nháp. Liệt kê ở cuối: đã thay đổi gì và vì sao."</em> — yêu cầu liệt kê thay đổi giúp bạn kiểm soát việc sửa, tránh AI viết lại tung cả những phần đang tốt.</li>
</ul>`
      },
      {
        title: "3. Hai kỹ thuật nhân đôi chất lượng",
        body: `
<p><strong>Kỹ thuật 1 — Bắt AI hỏi lại (clarify-first).</strong> Thêm vào cuối prompt giao việc: <em>"Trước khi bắt đầu, nếu thiếu thông tin quan trọng để làm tốt nhiệm vụ này, hãy hỏi tôi tối đa 5 câu. Chỉ bắt đầu khi đã đủ thông tin."</em> Câu này biến giả định ngầm — nguồn sai lệch số một — thành trao đổi tường minh. Bạn sẽ ngạc nhiên vì AI thường hỏi trúng những điều bạn quên nói.</p>
<p><strong>Kỹ thuật 2 — Chia nhỏ nhiệm vụ (task decomposition).</strong> Nhiệm vụ càng dài, chất lượng càng giảm dần về cuối và token càng lãng phí. Thay vì "viết ebook 30 trang", hãy chạy chuỗi: dàn ý → duyệt → viết chương 1 → duyệt → viết chương 2... Mỗi bước ngắn, có điểm kiểm tra, và bạn chỉ cấp context liên quan cho bước đó. Nguyên tắc: <strong>một prompt, một sản phẩm kiểm tra được</strong>.</p>
<div class="callout"><strong>Về tiết kiệm token:</strong> lãng phí lớn nhất không phải prompt dài, mà là vòng lặp "làm lại từ đầu" do giao việc mơ hồ, và việc dán lại toàn bộ lịch sử hội thoại vào mỗi lượt. Giao việc rõ ngay từ đầu + chia nhỏ + chỉ cấp context của bước hiện tại = rẻ hơn và tốt hơn.</div>`
      },
      {
        title: "4. Thí nghiệm ba mức: nhìn thấy khác biệt bằng mắt",
        body: `
<p>Bài thực hành của module này là một thí nghiệm so sánh. Lấy cùng một nhiệm vụ thật của bạn và viết 3 phiên bản prompt:</p>
<ul>
<li><strong>Mức 1 — Đơn giản:</strong> một câu yêu cầu trần. <em>"Viết email mời khách hàng dự webinar."</em></li>
<li><strong>Mức 2 — Có context:</strong> thêm vai trò, mục tiêu, bối cảnh, dữ liệu. <em>"Bạn là chuyên viên CSKH của [công ty]. Mục tiêu: 30% người nhận đăng ký. Khách là [mô tả]. Webinar về [chủ đề, giá trị]. Giọng điệu [X]..."</em></li>
<li><strong>Mức 3 — Có quy trình kiểm tra:</strong> mức 2 + yêu cầu AI hỏi lại nếu thiếu thông tin + tiêu chí đạt + bước tự rà soát: <em>"...Sau khi viết, tự kiểm tra theo 3 tiêu chí: (1) lợi ích người nhận nằm trong 2 câu đầu, (2) một CTA duy nhất, (3) dưới 150 từ. Ghi rõ kết quả tự kiểm tra."</em></li>
</ul>
<p>Chạy cả ba, đặt ba đầu ra cạnh nhau. Khoảng cách giữa mức 1 và mức 3 chính là <em>giá trị nghề nghiệp</em> của kỹ năng bạn đang học.</p>`
      },
      {
        title: "5. Xem một vòng phản biện thật diễn ra",
        body: `
<p>Vòng phản biện là kỹ thuật dễ mô tả, khó hình dung. Đây là bản rút gọn một phiên thật — nhiệm vụ: bài đăng LinkedIn tuyển dụng developer.</p>
<p><strong>Lượt 1 — Execute:</strong> AI viết bản nháp 200 từ, đọc khá ổn: "cơ hội phát triển", "môi trường năng động", "đãi ngộ cạnh tranh".</p>
<p><strong>Lượt 2 — Phản biện có tiêu chí:</strong> <em>"Đóng vai một senior developer đang có việc tốt, lướt LinkedIn. Chỉ ra 3 lý do bạn sẽ lướt qua bài này không dừng lại. Không khen."</em> AI trả lời sắc bén bất ngờ: (1) "môi trường năng động, đãi ngộ cạnh tranh" xuất hiện trong 9/10 bài tuyển dụng — không có thông tin; (2) không nói làm sản phẩm gì, stack gì — thứ developer quan tâm đầu tiên; (3) không có mức lương — bài không lương bị mặc định là "lương thấp".</p>
<p><strong>Lượt 3 — Người quyết định:</strong> bạn đồng ý điểm 1 và 2; điểm 3 công ty chưa cho công khai lương — thay bằng khoảng lương. Đây là vai của con người: <em>phản biện của AI là đầu vào, không phải phán quyết</em>.</p>
<p><strong>Lượt 4 — Cải tiến có kiểm soát:</strong> <em>"Viết lại theo 2 điểm đã thống nhất + thêm khoảng lương 25-40 triệu. Giữ nguyên phần mô tả team vì đã đạt. Liệt kê cuối bài: đã đổi gì."</em></p>
<p>Tổng chi phí: 4 lượt, chưa đến 10 phút. So với "viết lại đi, chưa hay" lặp 6 lần không rõ vì sao — nhanh hơn, và quan trọng là <em>lặp lại được</em> cho mọi bài sau.</p>
<div class="callout"><strong>Điểm rút ra:</strong> chất lượng phản biện phụ thuộc vào vai bạn giao ("senior developer đang có việc tốt" — không phải "hãy phản biện") và lệnh cấm khen. Persona cụ thể + tiêu chí cụ thể = phản biện dùng được.</div>`
      },
      {
        title: "6. Hướng dẫn thực hành: bộ 5 prompt cá nhân",
        body: `
<p>Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Chạy thí nghiệm 3 mức ở trên với một nhiệm vụ thật. Ghi ngắn gọn nhận xét khác biệt giữa các mức.</li>
<li><strong>Bước 2.</strong> Chọn 5 việc lặp lại nhiều nhất trong công việc của bạn. Với mỗi việc, viết một prompt hoàn chỉnh theo cấu trúc phù hợp (dùng 6 loại ở mục 2 làm khung — tối thiểu phủ được: giao nhiệm vụ, nghiên cứu, lập kế hoạch, phản biện, kiểm chứng).</li>
<li><strong>Bước 3.</strong> Đảm bảo ít nhất 1 prompt có kỹ thuật clarify-first.</li>
<li><strong>Bước 4.</strong> Dán bộ 5 prompt vào ô bài làm, tick checklist, copy prompt phản biện để AI rà lại bộ prompt của bạn.</li>
</ul>
<div class="callout"><strong>Mẹo:</strong> đặt tên cho từng prompt (VD: "Prompt phân tích phản hồi KH v1") và lưu vào một file riêng. Đây là phôi thô cho thư viện skill của bạn ở phần Advanced.</div>`
      }
    ]
  },

  m4: {
    readingTime: "12 phút đọc",
    sections: [
      {
        title: "1. Vì sao cần một quy trình — thay vì cứ chat cho đến khi ra",
        body: `
<p>Cách dùng AI phổ biến nhất: gõ yêu cầu, nhận kết quả, thấy chưa ưng, gõ "sửa lại đi", lặp cho đến khi mệt rồi chấp nhận bản "tạm được". Cách này có ba vấn đề: chất lượng cuối phụ thuộc may rủi, không lặp lại được, và bạn không biết vì sao lần này tốt lần kia tệ.</p>
<p>Framework 4 bước <strong>Research → Plan → Execute → Verify</strong> thay may rủi bằng quy trình. Nó không phải phát minh mới — đây là cách mọi người làm việc chuyên nghiệp đã vận hành: tìm hiểu trước khi làm, lập kế hoạch trước khi thực thi, kiểm tra trước khi giao. Điều mới là: giờ đây <em>mỗi bước đều có AI tham gia</em>, và người kiểm soát các điểm chuyển bước là bạn.</p>`
      },
      {
        title: "2. Bước 1 — Research: hiểu trước khi làm",
        body: `
<p>Mục tiêu của Research là <strong>xây nền hiểu biết chung giữa bạn và AI</strong> trước khi tạo ra bất cứ thứ gì. Các việc điển hình: phân tích dữ liệu hiện có, tổng hợp tài liệu, nghiên cứu đối thủ/thị trường, làm rõ yêu cầu của các bên liên quan.</p>
<pre><code>Prompt mẫu — Research:
"Trước khi làm [nhiệm vụ], hãy nghiên cứu các tài liệu đính kèm
và trả lời: (1) 5 phát hiện quan trọng nhất, kèm trích dẫn.
(2) Những gì tài liệu KHÔNG cho biết mà nhiệm vụ cần.
(3) 3 câu hỏi bạn cần tôi trả lời để làm tốt.
Chưa đề xuất giải pháp ở bước này."</code></pre>
<p><strong>Điểm kiểm soát của bạn:</strong> đọc phát hiện của AI. Nó hiểu sai chỗ nào — sửa ngay bây giờ, khi chi phí sửa gần bằng 0. Đừng để hiểu sai đi vào bước Plan.</p>`
      },
      {
        title: "3. Bước 2 — Plan: chia để trị",
        body: `
<p>Plan biến mục tiêu thành <strong>chuỗi nhiệm vụ nhỏ, mỗi nhiệm vụ có đầu vào, đầu ra và tiêu chí hoàn thành</strong>. Đây là bước quyết định Execute có ổn định hay không — nhiệm vụ chia đủ nhỏ thì AI gần như không trượt.</p>
<pre><code>Prompt mẫu — Plan:
"Dựa trên phần nghiên cứu đã thống nhất, hãy lập kế hoạch
thực hiện [mục tiêu]. Chia thành các bước, mỗi bước ghi rõ:
đầu vào cần gì, đầu ra là gì, tiêu chí hoàn thành, và bước đó
cần tôi duyệt hay AI tự chạy tiếp. Trình kế hoạch để tôi duyệt
trước, chưa thực hiện."</code></pre>
<p><strong>Điểm kiểm soát:</strong> duyệt kế hoạch — cắt bước thừa, thêm bước thiếu, và quan trọng nhất: <em>đánh dấu những điểm bạn muốn dừng lại duyệt</em> trước khi AI đi tiếp.</p>`
      },
      {
        title: "4. Bước 3 — Execute: tạo bản nháp có chủ đích",
        body: `
<p>Giờ mới đến lúc tạo sản phẩm — và vì đã có nghiên cứu + kế hoạch, prompt Execute thường rất ngắn: <em>"Thực hiện bước 1 của kế hoạch"</em>. Ba nguyên tắc khi Execute:</p>
<ul>
<li><strong>Một lần chạy, một bước kế hoạch.</strong> Đừng gộp "làm luôn bước 1-4" — bạn mất các điểm kiểm tra đã thiết kế.</li>
<li><strong>Gọi tên nó là bản nháp.</strong> Tâm lý quan trọng: đầu ra của Execute là nguyên liệu cho Verify, không phải thành phẩm. Điều này giải phóng bạn khỏi việc cầu toàn từng câu chữ ở bước này.</li>
<li><strong>Khi kết quả lệch, sửa kế hoạch chứ đừng chỉ sửa kết quả.</strong> Lệch một lần là ngẫu nhiên; lệch kiểu giống nhau hai lần nghĩa là kế hoạch hoặc context có lỗ hổng.</li>
</ul>`
      },
      {
        title: "5. Bước 4 — Verify: nơi chất lượng thật sự được tạo ra",
        body: `
<p>Đây là bước bị bỏ qua nhiều nhất và cũng là bước phân biệt người dùng AI nghiêm túc với người dùng chơi chơi. Verify gồm ba lớp:</p>
<ul>
<li><strong>Lớp 1 — Đối chiếu tiêu chí:</strong> so đầu ra với Verification đã viết từ đầu (module 2). Cái gì đo được thì đo: độ dài, cấu trúc, có dẫn chứng chưa, có mục nào thiếu.</li>
<li><strong>Lớp 2 — Vòng phản biện với AI:</strong> dùng prompt phản biện và prompt kiểm chứng (module 3). Mẹo hiệu quả: mở <em>cuộc hội thoại mới</em> để phản biện — AI đang ở trong mạch hội thoại cũ có xu hướng bênh sản phẩm của chính nó.</li>
<li><strong>Lớp 3 — Con người duyệt:</strong> với đầu ra nhóm 2 (human-in-the-loop, module 1), lớp này bắt buộc. Kiểm tra thứ AI kiểm kém nhất: sự thật (số liệu, tên, cam kết), sự phù hợp bối cảnh, và những gì <em>không được viết ra</em> nhưng người đọc sẽ suy ra.</li>
</ul>
<p>Sau Verify, quay lại Execute để cải tiến (dùng prompt cải tiến). Thường 1-2 vòng là đầu ra đạt — nhiều vòng hơn nghĩa là vấn đề nằm ở Research hoặc Plan, hãy quay hẳn về đó.</p>
<div class="callout callout-warning"><strong>Bẫy phổ biến:</strong> hỏi AI "bản này ổn chưa?" và nhận câu "rất tốt, chỉ cần chỉnh nhỏ...". Câu hỏi xuôi chiều sinh câu trả lời xuôi chiều. Luôn phản biện bằng tiêu chí cụ thể và yêu cầu chỉ ra điểm yếu, không khen.</div>`
      },
      {
        title: "6. Ví dụ đầu-cuối: kế hoạch content tháng bằng 4 bước",
        body: `
<p>Minh — chủ một thương hiệu đồ da nhỏ — cần kế hoạch content tháng tới. Cách cũ: "gợi ý 30 ý tưởng content cho shop đồ da" → nhận danh sách chung chung, dùng được 3-4 ý. Cách 4 bước:</p>
<p><strong>Research (20 phút):</strong> Minh cấp cho AI: số liệu tương tác 3 tháng của fanpage, 5 bài bán tốt nhất, 5 bài tệ nhất. Prompt nghiên cứu: "phân tích và cho biết: kiểu bài nào ra đơn, kiểu nào tương tác cao nhưng không ra đơn, đăng khung giờ nào hiệu quả". Phát hiện đắt nhất: video quy trình làm ví ra đơn gấp 3 ảnh sản phẩm — điều Minh cảm thấy mơ hồ nhưng chưa từng nhìn thấy bằng số.</p>
<p><strong>Plan (10 phút):</strong> "Dựa trên phát hiện, lập khung content tháng: tỷ lệ các kiểu bài, tần suất, khung giờ. Trình khung trước, chưa viết nội dung." AI đề xuất 60% video quy trình — Minh chỉnh xuống 40% vì mỗi video tốn một buổi quay, thêm điểm duyệt: "duyệt kịch bản video trước khi viết caption". Kế hoạch giờ vừa dựa trên dữ liệu, vừa vừa sức làm.</p>
<p><strong>Execute (theo tuần):</strong> mỗi tuần một lượt "viết kịch bản + caption cho tuần này theo khung" — không sinh cả tháng một lần, vì phản ứng thật của khách tuần 1 sẽ điều chỉnh tuần 2.</p>
<p><strong>Verify:</strong> lớp 1 — đối chiếu khung (đúng tỷ lệ kiểu bài? đúng giọng thương hiệu?); lớp 2 — hội thoại mới: "đóng vai khách nữ 28 tuổi lần đầu thấy shop, bài nào khiến bạn dừng lại, bài nào lướt qua, vì sao?"; lớp 3 — Minh tự duyệt các bài có giá và cam kết (nhóm human-in-the-loop).</p>
<p>Kết quả không phải "content hay hơn" một cách mơ hồ — mà là một <em>hệ thống</em>: tháng sau Minh chạy lại đúng quy trình với dữ liệu mới, và mỗi tháng khung lại chính xác hơn. Đó là khác biệt giữa dùng AI như máy phát ý tưởng và dùng AI như cộng sự có quy trình.</p>`
      },
      {
        title: "7. Hướng dẫn thực hành: mini-project 4 bước",
        body: `
<p>Chọn một task thật, gọn (làm được trong 1-2 giờ): landing page, kế hoạch marketing cho 1 chiến dịch, nghiên cứu chân dung khách hàng, hoặc quy trình CSKH. Trong <strong>Xưởng thực hành</strong>, ghi nhật ký theo khung:</p>
<pre><code>MINI-PROJECT: [tên]
1. RESEARCH — prompt đã dùng / 3 phát hiện chính / điều tôi
   đã sửa trong hiểu biết của AI: ...
2. PLAN — các bước / điểm tôi đặt duyệt: ...
3. EXECUTE — số vòng chạy / lần lệch và nguyên nhân: ...
4. VERIFY — kết quả đối chiếu tiêu chí / 3 phản biện đắt nhất
   của AI / thay đổi giữa nháp đầu và bản cuối: ...
BÀI HỌC: điều tôi sẽ làm khác ở dự án sau: ...</code></pre>
<p>Phần "thay đổi giữa nháp đầu và bản cuối" là bằng chứng quan trọng nhất — nếu bản cuối không khác nháp đầu bao nhiêu, bạn chưa thực sự Verify.</p>`
      }
    ]
  },

  m5: {
    readingTime: "11 phút đọc",
    sections: [
      {
        title: "1. Bức tranh công cụ: hai loại assistant",
        body: `
<p>Có hai loại công cụ bạn cần phân biệt. <strong>AI Assistant tổng quát</strong> (Claude, ChatGPT, Gemini...) — làm việc qua hội thoại, mạnh về suy nghĩ, viết, phân tích, và ngày càng thao tác được file, web. <strong>AI Coding Assistant</strong> (Claude Code, Cursor, Antigravity, Copilot...) — sống trong môi trường lập trình, đọc và sửa cả dự án code, chạy lệnh, kiểm thử, tự sửa lỗi theo vòng lặp.</p>
<p>Điều thú vị cho người <em>không phải</em> lập trình viên: AI coding assistant đã hạ rào cản tạo sản phẩm số xuống mức "mô tả được là làm được". Landing page, form khảo sát, dashboard, công cụ tính toán nội bộ — những thứ trước đây phải thuê ngoài — giờ là một buổi chiều làm việc với AI, <em>nếu bạn biết giao việc đúng cách</em>. Và cách giao việc đúng chính là những gì bạn học ở module 2-4, áp vào ngữ cảnh kỹ thuật.</p>`
      },
      {
        title: "2. Product brief: bản giao việc cho sản phẩm số",
        body: `
<p>Sai lầm phổ biến: mô tả tính năng thay vì mô tả sản phẩm. "Làm cho tôi trang web có nút đăng ký" — AI sẽ làm đúng thứ đó và bạn sẽ thất vọng. Bản giao việc tốt (product brief) gồm 6 phần:</p>
<ul>
<li><strong>Sản phẩm là gì, cho ai:</strong> "Landing page cho khóa học yoga online, khách là phụ nữ 30-45 bận rộn, truy cập chủ yếu bằng điện thoại."</li>
<li><strong>Hành động mục tiêu:</strong> người dùng vào trang xong phải làm gì? "Để lại email nhận buổi học thử."</li>
<li><strong>Nội dung và dữ liệu:</strong> cấp nội dung thật — tên khóa, giá, lịch, ảnh, lời chứng thực. Không cấp thì AI điền chữ giả (lorem ipsum phiên bản tiếng Việt).</li>
<li><strong>Constraint:</strong> "một trang duy nhất, không cần đăng nhập, tải nhanh trên 4G, không dùng dịch vụ trả phí."</li>
<li><strong>Tiêu chí kiểm thử:</strong> "mở tốt trên màn hình điện thoại; form gửi được và báo thành công; mọi nút đều hoạt động; không có chữ giả."</li>
<li><strong>Điều KHÔNG cần:</strong> chống phình to. "Không cần thanh toán, không cần đa ngôn ngữ, không cần blog."</li>
</ul>
<div class="callout"><strong>Quy tắc thử nhanh:</strong> đưa brief cho một người bạn đọc — nếu họ hình dung được sản phẩm và biết khi nào gọi là "xong", brief đạt. Nếu họ hỏi lại 5 câu, AI cũng sẽ đoán mò 5 chỗ đó.</div>`
      },
      {
        title: "3. Chọn đường: AI coding, no-code, hay thuê developer?",
        body: `
<p>Ba câu hỏi định tuyến:</p>
<ul>
<li><strong>Ai dùng và bao lâu?</strong> Mình bạn dùng, hoặc demo ý tưởng → AI coding thoải mái. Cả team dùng hàng ngày → cần thêm cân nhắc. Khách hàng trả tiền để dùng → cần chuẩn sản phẩm thật.</li>
<li><strong>Có dữ liệu nhạy cảm không?</strong> Sản phẩm chứa thông tin khách hàng, thanh toán, đăng nhập → đây là ranh giới cứng: cần người có chuyên môn bảo mật rà soát, đừng tự tin vì "chạy được".</li>
<li><strong>Việc này giống mẫu có sẵn không?</strong> Form khảo sát, đặt lịch, bảng tính tự động — no-code (Google Forms, Airtable, Zapier/Make...) có thể nhanh và bền hơn code tự viết. AI coding thắng khi bạn cần thứ <em>đúng ý mình</em> mà mẫu có sẵn không chiều được.</li>
</ul>
<p>Ranh giới prototype → sản phẩm thật: prototype để <em>kiểm chứng ý tưởng</em> — chạy được, trông ổn, đủ demo. Sản phẩm thật cần: bảo mật, xử lý lỗi khi người dùng nhập bậy, sao lưu dữ liệu, hiệu năng khi đông người dùng, và ai đó bảo trì khi hỏng. Chuyển giao cho developer? Chính bản product brief + prototype của bạn là tài liệu bàn giao tốt nhất họ từng nhận.</p>`
      },
      {
        title: "4. Làm việc hiệu quả trong dự án dài",
        body: `
<ul>
<li><strong>Chia phiên theo tính năng:</strong> mỗi phiên làm việc một tính năng trọn vẹn. Đầu phiên mới, tóm tắt trạng thái dự án trong 5-7 dòng thay vì dán lại toàn bộ lịch sử.</li>
<li><strong>Yêu cầu AI kiểm thử sau mỗi thay đổi:</strong> "sau khi sửa, hãy tự kiểm tra lại các tiêu chí kiểm thử và báo cáo kết quả từng mục" — bắt lỗi sớm rẻ hơn bắt lỗi muộn.</li>
<li><strong>Một thay đổi mỗi lần:</strong> "sửa nút đăng ký + đổi màu nền + thêm phần FAQ" trong một yêu cầu = khó biết cái gì gây lỗi. Nhỏ, tuần tự, kiểm tra.</li>
<li><strong>Lưu phiên bản chạy được:</strong> trước khi yêu cầu thay đổi lớn, nhờ AI lưu bản hiện tại (hoặc dùng git nếu có). "Quay về bản trước" là câu thần chú cứu nhiều buổi chiều.</li>
</ul>`
      },
      {
        title: "5. Một product brief hoàn chỉnh để tham khảo",
        body: `
<pre><code>PRODUCT BRIEF — Form khảo sát sau workshop
SẢN PHẨM & NGƯỜI DÙNG: Trang khảo sát một trang cho học viên
điền sau mỗi buổi workshop (20-40 người/buổi, đa số dùng
điện thoại, điền trong lúc nghỉ — phải xong dưới 2 phút).

HÀNH ĐỘNG MỤC TIÊU: Học viên gửi được khảo sát; tôi nhận
kết quả dạng bảng để so sánh giữa các buổi.

NỘI DUNG & DỮ LIỆU: 5 câu hỏi (đính kèm nguyên văn):
2 câu chấm điểm 1-5 (sao), 2 câu chọn một, 1 câu góp ý
tự do (không bắt buộc). Logo và màu thương hiệu đính kèm.

CONSTRAINT: một file HTML duy nhất, không cần server;
kết quả tải về được dạng CSV; không thu thập tên/email
(khảo sát ẩn danh); chạy tốt trên màn hình 5-6 inch.

TIÊU CHÍ KIỂM THỬ: điền và gửi được trên điện thoại;
bỏ trống câu bắt buộc → báo lỗi rõ ràng bằng tiếng Việt;
gửi xong hiện lời cảm ơn; CSV mở được trong Excel không
lỗi font tiếng Việt.

KHÔNG CẦN: đăng nhập, lưu bản nháp, đa ngôn ngữ, thống kê
real-time, gửi email tự động.</code></pre>
<p>Vài điểm đáng học từ brief này: <strong>ràng buộc hoàn cảnh sử dụng</strong> ("điền lúc nghỉ, dưới 2 phút") định hình mọi quyết định thiết kế mà bạn không phải liệt kê từng cái; <strong>tiêu chí kiểm thử viết như kịch bản hành vi</strong> ("bỏ trống → báo lỗi tiếng Việt") — AI kiểm được, bạn cũng kiểm được; và mục <strong>KHÔNG CẦN dài gần bằng mục cần</strong> — chính nó giữ cho sản phẩm xong trong một buổi thay vì phình ra cả tuần.</p>
<p>Lỗi font CSV tiếng Việt trong Excel là chi tiết rất "đời": người viết brief này rõ ràng đã từng đau. Kinh nghiệm sử dụng thật của bạn — thứ AI không có — chính là nguyên liệu quý nhất của một brief tốt.</p>`
      },
      {
        title: "6. Hướng dẫn thực hành: prototype đầu tiên",
        body: `
<p>Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Chọn một sản phẩm nhỏ có ích thật cho bạn: landing page, form khảo sát kèm trang cảm ơn, dashboard mini đọc từ file dữ liệu, hoặc một automation logic (VD: phân loại email theo quy tắc).</li>
<li><strong>Bước 2.</strong> Viết product brief đủ 6 phần (mục 2). Đây là sản phẩm chính của module — kể cả khi prototype hỏng, brief tốt vẫn chuyển cho AI khác/developer làm được.</li>
<li><strong>Bước 3.</strong> Giao cho AI coding assistant (hoặc AI assistant tổng quát nếu sản phẩm là 1 file HTML). Chạy theo nhịp: một tính năng → kiểm thử → tính năng tiếp.</li>
<li><strong>Bước 4.</strong> Tự kiểm thử với 2 tình huống: người dùng ngoan (làm đúng hướng dẫn) và người dùng ẩu (bấm lung tung, nhập sai, bỏ trống). Ghi lại lỗi tìm được.</li>
<li><strong>Bước 5.</strong> Dán brief + nhật ký kiểm thử vào ô bài làm, tick checklist, copy prompt phản biện.</li>
</ul>`
      }
    ]
  },

  m6: {
    readingTime: "15 phút đọc",
    sections: [
      {
        title: "1. Bước vào Advanced: từ dùng AI giỏi đến sở hữu quy trình",
        body: `
<p>Năm module Foundation dạy bạn <em>làm việc với AI cho từng nhiệm vụ</em>. Phần Advanced trả lời câu hỏi lớn hơn: <strong>làm sao biến năng lực đó thành tài sản</strong> — thứ dùng lại được, chia sẻ được, thậm chí bán được. Chuỗi giá trị của phần này: tri thức → workflow (module 6-7) → Agent Skill (module 8-9) → sản phẩm (module 10).</p>
<p>Mắt xích đầu tiên là workflow. Một sự thật ít người nhận ra: khi hai người cùng dùng một AI, cùng model, cùng công cụ — người thắng là người có <strong>quy trình tốt hơn</strong>, không phải người gõ prompt khéo hơn. Prompt hay có thể bắt chước trong 5 phút; quy trình chưng cất từ kinh nghiệm thật thì không.</p>`
      },
      {
        title: "2. Internal vs External knowledge: AI biết gì và không biết gì",
        body: `
<p><strong>Internal knowledge</strong> là những gì model học được từ dữ liệu huấn luyện: kiến thức nền rộng, khái niệm, phương pháp phổ biến. Điểm mạnh: luôn sẵn, miễn phí. Điểm yếu: có ngày cắt (không biết chuyện mới), chung chung (trung bình của internet), và không biết gì về <em>thế giới riêng của bạn</em>.</p>
<p><strong>External knowledge</strong> là những gì bạn cấp vào: tài liệu nội bộ, dữ liệu khách hàng, báo cáo ngành, website, và — quý nhất — <em>kinh nghiệm chưa từng được viết ra của chính bạn</em>. Quy tắc phối hợp: dùng internal knowledge cho khung và phương pháp, dùng external knowledge cho mọi kết luận cụ thể. Nhận định nào cần đúng với thực tế của bạn mà không có external knowledge chống lưng — nhận định đó là ứng viên ảo giác.</p>
<pre><code>Prompt mẫu — Agentic Research với nguồn ngoài:
"Nghiên cứu [chủ đề] dựa trên các tài liệu đính kèm.
Với mỗi phát hiện, ghi rõ nguồn (tài liệu nào, phần nào).
Tách riêng: (A) điều tài liệu nói trực tiếp, (B) suy luận
của bạn từ tài liệu, (C) kiến thức nền bạn tự bổ sung.
Mục C phải đánh dấu 'cần kiểm chứng'."</code></pre>
<p>Cấu trúc A/B/C này cho bạn thấy rõ đâu là sự thật, đâu là suy luận, đâu là thứ cần kiểm tra — thay vì nhận một khối văn bản trộn lẫn cả ba.</p>`
      },
      {
        title: "3. Distill knowledge: chưng cất tri thức thành quy trình",
        body: `
<p>Chuyên gia làm tốt nhưng thường không nói được <em>vì sao</em> — tri thức của họ ở dạng ngầm (tacit). Distill knowledge là quá trình ép tri thức ngầm đó thành các bước tường minh. Cách làm hiệu quả nhất: <strong>để AI phỏng vấn bạn</strong>.</p>
<pre><code>Prompt mẫu — AI phỏng vấn chuyên gia:
"Tôi làm [việc X] rất tốt nhưng chưa từng viết ra quy trình.
Hãy phỏng vấn tôi từng câu một để trích xuất quy trình:
tôi bắt đầu từ đâu, quyết định gì ở mỗi bước, dấu hiệu nào
cho biết đang đi đúng/sai, lỗi người mới hay mắc là gì.
Sau 8-10 câu, tổng hợp thành quy trình từng bước."</code></pre>
<p>Kết hợp ba nguồn khi chưng cất: kinh nghiệm của bạn (qua phỏng vấn), tài liệu/dữ liệu thật (external), và phương pháp chuẩn của ngành (internal — nhờ AI đề xuất rồi bạn lọc). Quy trình tốt nhất thường là kinh nghiệm cá nhân được <em>đối chiếu</em> với chuẩn ngành: chỗ giống là nền, chỗ khác chính là bí quyết của bạn.</p>`
      },
      {
        title: "4. Giải phẫu workflow 5 phần",
        body: `
<p>Workflow chuẩn của khóa học gồm 5 phần. Ví dụ với workflow "Viết bài SEO chuẩn ngành":</p>
<ul>
<li><strong>Input:</strong> đầu vào bắt buộc, càng cụ thể càng tốt. <em>Từ khóa chính; 3 bài top Google của từ khóa đó; chân dung độc giả; 2 bài viết cũ tốt nhất của bạn (làm mẫu giọng văn).</em></li>
<li><strong>Process:</strong> các bước xử lý. <em>(1) Phân tích 3 bài top: cấu trúc, độ dài, ý bao phủ. (2) Xác định góc khác biệt. (3) Lập dàn ý, người duyệt. (4) Viết từng phần. (5) Tự rà theo checklist.</em></li>
<li><strong>Output:</strong> sản phẩm cuối. <em>Bài 1500-2000 từ, có H2/H3, meta description, 3 tiêu đề đề xuất.</em></li>
<li><strong>Checklist:</strong> danh sách rà nhanh. <em>Từ khóa trong tiêu đề và đoạn đầu? Mỗi H2 trả lời một câu hỏi thật của độc giả? Không có nhận định thiếu nguồn?</em></li>
<li><strong>Tiêu chí kiểm tra:</strong> chuẩn chất lượng đo được. <em>Người trong ngành đọc không thấy lỗi kiến thức; góc bài không trùng 3 bài top; giọng văn khớp 2 bài mẫu.</em></li>
</ul>
<div class="callout"><strong>Thước đo workflow tốt:</strong> đưa cho một người chưa từng làm việc này (hoặc một AI trong hội thoại mới) — họ chạy được mà không phải hỏi lại bạn. Mỗi câu họ phải hỏi là một lỗ hổng cần vá.</div>`
      },
      {
        title: "5. Bên trong một phiên chưng cất: trích đoạn phỏng vấn",
        body: `
<p>Phần khó nhất của distill knowledge là bạn không biết mình biết gì. Trích đoạn dưới đây (rút gọn từ một phiên thật) cho thấy AI phỏng vấn moi tri thức ngầm ra ánh sáng thế nào. Nhân vật: Hà, 8 năm làm tuyển dụng, muốn chưng cất quy trình sàng lọc CV.</p>
<p><strong>AI:</strong> Khi mở một CV, chị nhìn gì đầu tiên?<br/>
<strong>Hà:</strong> Lướt tổng thể xem có "sạch" không đã.<br/>
<strong>AI:</strong> "Sạch" cụ thể là gì? Nếu phải dạy người mới nhận biết CV "không sạch", chị chỉ cho họ 3 dấu hiệu nào?<br/>
<strong>Hà:</strong> À… nhảy việc dưới 1 năm liên tục không có lý do; mô tả công việc chỉ chép JD chứ không có kết quả cụ thể; và khoảng trống thời gian không giải thích.<br/>
<strong>AI:</strong> Có ngoại lệ nào khiến chị bỏ qua các dấu hiệu đó không?<br/>
<strong>Hà:</strong> Có — ngành agency nhảy việc nhanh là bình thường. Và người mới ra trường thì không tính khoảng trống.</p>
<p>Chú ý điều vừa xảy ra: "sạch" — một cảm giác nghề nghiệp — vừa biến thành <em>3 quy tắc kiểm tra được + 2 ngoại lệ theo ngữ cảnh</em>. Đó chính xác là dạng tri thức mà workflow cần và AI thực thi được. Câu hỏi ngoại lệ đặc biệt giá trị: quy tắc thì người mới nào cũng học được, còn ngoại lệ là thứ chỉ 8 năm kinh nghiệm mới có.</p>
<div class="callout"><strong>Ba câu hỏi tự phỏng vấn hiệu quả nhất:</strong> "Nếu phải dạy người mới, tôi chỉ cho họ dấu hiệu nào?", "Tôi từng sai ở việc này thế nào — và giờ tôi tránh nó ra sao?", "Trường hợp nào tôi cố tình phá quy tắc của chính mình?". Đưa cả ba vào phiên phỏng vấn của bạn ở phần thực hành.</div>`
      },
      {
        title: "6. Setup thực chiến: dựng môi trường nghiên cứu với Cowork / Claude Code",
        body: `
<p>Từ module này trở đi, mỗi bài học kèm một phần setup công cụ thật — vì workflow sống trong môi trường làm việc, không sống trong file Word. Hai môi trường tiêu biểu: <strong>Cowork</strong> (Claude desktop, cho người không code) và <strong>Claude Code CLI</strong> (terminal, mạnh hơn cho ai chịu gõ lệnh). Nguyên tắc setup giống nhau, khác giao diện.</p>
<p><strong>Bước 1 — Một dự án, một thư mục.</strong> Tạo thư mục dự án và cho AI truy cập (Cowork: chọn folder khi bắt đầu phiên; Claude Code: <code>cd</code> vào thư mục rồi chạy <code>claude</code>). Cấu trúc gợi ý:</p>
<pre><code>du-an-workflow/
├── 01-sources/      ← tài liệu gốc: PDF, báo cáo, data export
├── 02-research/     ← kết quả nghiên cứu AI tạo ra (markdown)
├── 03-workflow/     ← bản workflow các phiên bản
└── CLAUDE.md        ← bối cảnh cố định của dự án</code></pre>
<p><strong>Bước 2 — Viết CLAUDE.md (hoặc project instructions).</strong> Đây là chỗ đặt context dùng chung mọi phiên: bạn là ai, dự án làm gì, quy ước đặt tên file, điều AI luôn phải tuân thủ ("mọi kết quả nghiên cứu ghi vào 02-research/, có ghi nguồn"). Claude Code tự đọc CLAUDE.md mỗi phiên — bạn không phải dán lại context, đúng tinh thần chống lặp token của module 5.</p>
<p><strong>Bước 3 — Nghiên cứu ra file, không ra hội thoại.</strong> Thói quen quan trọng nhất: cuối mỗi phiên research, yêu cầu AI <em>"tổng hợp các phát hiện hôm nay vào file 02-research/ten-chu-de.md theo cấu trúc A/B/C"</em>. Hội thoại sẽ trôi mất; file ở lại thành tài sản — và phiên sau, AI đọc lại file đó để tiếp tục, thay vì bắt đầu từ số 0.</p>
<div class="callout"><strong>Áp dụng vào bài thực hành:</strong> làm bước 1-3 trước khi chạy phiên phỏng vấn chưng cất. Bản ghi phỏng vấn và workflow 5 phần đều lưu thành file trong cấu trúc trên — module 7 và 8 sẽ xây tiếp trên đúng thư mục này.</div>`
      },
      {
        title: "7. Hướng dẫn thực hành: workflow đầu tiên từ chuyên môn của bạn",
        body: `
<p>Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Chọn một tác vụ bạn làm giỏi hơn mặt bằng chung, thuộc lĩnh vực của bạn (marketing, sales, HR, vận hành, tài chính...). Tiêu chí chọn: lặp lại ít nhất hàng tháng, có đầu ra rõ.</li>
<li><strong>Bước 2.</strong> Chạy phiên AI phỏng vấn bạn (prompt mục 3). Đừng trả lời qua loa — chi tiết bạn coi là "hiển nhiên" chính là phần giá trị nhất.</li>
<li><strong>Bước 3.</strong> Thu thập external knowledge: 2-3 tài liệu/ví dụ thật liên quan. Nhờ AI đối chiếu quy trình của bạn với chuẩn ngành, đánh dấu chỗ khác biệt.</li>
<li><strong>Bước 4.</strong> Viết workflow đủ 5 phần (dùng khung ở mục 4). Dán vào ô bài làm.</li>
<li><strong>Bước 5.</strong> Kiểm tra "người lạ chạy được": mở hội thoại AI mới, đưa nguyên workflow + input mẫu, xem AI có chạy đúng ý không. Ghi lại chỗ nó hiểu sai — đó là chỗ cần viết rõ hơn. Tick checklist, copy prompt phản biện.</li>
</ul>`
      }
    ]
  },

  m7: {
    readingTime: "15 phút đọc",
    sections: [
      {
        title: "1. Từ workflow chạy được đến workflow đáng tin",
        body: `
<p>Workflow module 6 của bạn chạy được — khi mọi thứ suôn sẻ. Module này xử lý câu hỏi khó hơn: chuyện gì xảy ra khi input xấu, khi AI trả kết quả sai, khi người vận hành không phải bạn? Một workflow <em>chuyên nghiệp</em> khác workflow cá nhân ở chỗ nó <strong>lường trước thất bại</strong> và có thiết kế cho thất bại đó.</p>
<p>Khung đầy đủ 8 bước: <strong>Trigger → Input → Context → AI Task → Human Review → Output → Quality Check → Improvement</strong>. So với workflow 5 phần, khung này thêm đúng những thứ biến quy trình cá nhân thành quy trình vận hành được trong tổ chức: điểm kích hoạt, điểm duyệt của con người, và vòng cải tiến.</p>
<ul>
<li><strong>Trigger:</strong> khi nào workflow chạy? Theo lịch (sáng thứ 2 hàng tuần), theo sự kiện (có phản hồi khách hàng mới), hay theo yêu cầu (ai đó cần báo giá). Trigger rõ = không ai phải nhớ.</li>
<li><strong>Context:</strong> khối bối cảnh chuẩn được soạn sẵn (module 2) — người vận hành không phải tự viết lại mỗi lần.</li>
<li><strong>AI Task:</strong> các nhiệm vụ AI đã chia nhỏ — mỗi task một sản phẩm kiểm tra được.</li>
</ul>`
      },
      {
        title: "2. Đặt Human Review đúng chỗ: nghệ thuật của sự vừa đủ",
        body: `
<p>Sai cả hai phía đều đắt: duyệt mọi bước → người thành nút cổ chai, workflow chậm hơn làm tay; không duyệt gì → một lỗi lọt qua có thể đốt sạch lòng tin vào cả quy trình. Nguyên tắc đặt điểm duyệt:</p>
<ul>
<li><strong>Duyệt tại cổng không đảo ngược:</strong> ngay trước những hành động không rút lại được — gửi cho khách, đăng công khai, cam kết giá, xóa dữ liệu.</li>
<li><strong>Duyệt tại điểm rẽ nhánh đắt:</strong> nơi quyết định sai kéo theo cả chuỗi sau sai (VD: duyệt dàn ý trước khi viết 3000 từ, duyệt danh sách khách trước khi gửi 500 email).</li>
<li><strong>Không duyệt việc máy kiểm được:</strong> định dạng, độ dài, thiếu trường thông tin — để Quality Check tự động lo, người chỉ nhìn thứ cần phán đoán.</li>
</ul>
<p>Mỗi điểm duyệt cần định nghĩa rõ: <em>người duyệt nhìn gì</em> (checklist 3-5 mục, không phải "xem qua"), <em>duyệt trong bao lâu</em>, và <em>hành động khi không đạt</em> (trả về bước nào, kèm ghi chú gì).</p>`
      },
      {
        title: "3. Error handling: thiết kế cho ngày xấu trời",
        body: `
<p>Bốn kiểu lỗi phổ biến và cách xử lý nên định nghĩa trước:</p>
<ul>
<li><strong>Input xấu:</strong> thiếu trường, sai định dạng, dữ liệu cũ. → Chặn ngay ở cổng vào: bước 1 của AI Task luôn là "kiểm tra input đủ và hợp lệ chưa; nếu chưa, liệt kê thứ còn thiếu và DỪNG".</li>
<li><strong>AI trả kết quả sai/lệch:</strong> → Quy tắc hai nhịp: chạy lại 1 lần với ghi chú lỗi cụ thể; vẫn sai → chuyển người xử lý, kèm cả hai bản sai để người chẩn đoán nhanh. Đừng để vòng "thử lại" chạy vô hạn.</li>
<li><strong>Kết quả đúng nhưng không hợp bối cảnh:</strong> (đúng kỹ thuật, sai tình huống — khách này đang có khiếu nại mà email lại mời mua thêm) → đây là loại lỗi chỉ Human Review bắt được; ghi nó vào checklist của người duyệt.</li>
<li><strong>Lỗi hệ thống:</strong> công cụ sập, hết hạn mức. → Quy định đường lui thủ công tối thiểu: việc gì làm tay được trong lúc chờ, ai cần được báo.</li>
</ul>
<div class="callout callout-warning"><strong>Câu hỏi kiểm tra thiết kế:</strong> với mỗi bước trong workflow, hỏi "nếu bước này trả về rác thì ai phát hiện, bằng cách nào, và chuyện gì xảy ra tiếp theo?" — không trả lời được là chưa xong thiết kế.</div>`
      },
      {
        title: "4. Vòng Improvement: workflow là sinh vật sống",
        body: `
<p>Không workflow nào đúng ngay từ bản đầu — giá trị thật đến từ vòng cải tiến. Cách vận hành tối giản mà hiệu quả:</p>
<ul>
<li><strong>Nhật ký lỗi một dòng:</strong> mỗi khi kết quả phải sửa tay hoặc bị trả về, ghi một dòng: ngày / bước nào / lỗi gì / sửa thế nào. Không cần biểu mẫu phức tạp — cần thói quen ghi.</li>
<li><strong>Rà định kỳ:</strong> mỗi 2-4 tuần, nhờ chính AI phân tích nhật ký: "lỗi nào lặp lại? Gốc rễ nằm ở context, instruction, hay input? Đề xuất 3 thay đổi cụ thể cho workflow."</li>
<li><strong>Cập nhật có phiên bản:</strong> workflow v1.1, v1.2... kèm ghi chú đổi gì. Khi lỗi mới xuất hiện sau bản cập nhật, bạn biết nghi phạm ở đâu.</li>
</ul>
<p>Vòng lặp này chính là "fine-tuning bằng quy trình" — và là bản nháp sống của kỹ năng bạn sẽ dùng ở module 9.</p>`
      },
      {
        title: "5. Ví dụ hoàn chỉnh: workflow trả lời yêu cầu báo giá",
        body: `
<pre><code>WORKFLOW: Trả lời yêu cầu báo giá dịch vụ thiết kế — v1.3
TRIGGER: Email/tin nhắn chứa yêu cầu báo giá (kiểm hộp thư
2 lần/ngày: 9h, 15h).
INPUT: Nội dung yêu cầu của khách + bảng giá hiện hành
+ lịch sử giao dịch (nếu khách cũ).
CONTEXT: [khối context chuẩn: mô tả dịch vụ, chính sách giá,
giọng thương hiệu — soạn sẵn, đánh số phiên bản]
AI TASK 1: Trích xuất: khách cần gì, số lượng, deadline,
ngân sách (nếu nêu). Thiếu thông tin nào để báo giá chính
xác → soạn email hỏi lại thay vì báo giá — DỪNG chờ.
AI TASK 2: Đối chiếu bảng giá, soạn báo giá nháp gồm:
hạng mục, đơn giá, thời gian thực hiện, 2 lựa chọn gói.
HUMAN REVIEW (bắt buộc — cổng không đảo ngược):
checklist người duyệt: (1) đơn giá khớp bảng giá hiện hành?
(2) deadline hứa có khả thi với lịch xưởng tuần này?
(3) khách cũ — có ưu đãi/công nợ cần tính? (4) không hứa
hạng mục ngoài năng lực? Duyệt trong 4 giờ làm việc.
OUTPUT: Email báo giá gửi khách + bản ghi vào sổ báo giá.
QUALITY CHECK (tự động, AI tự rà trước khi trình duyệt):
đủ 2 gói? có ngày hết hạn báo giá? tổng tiền tính đúng?
IMPROVEMENT: Mỗi báo giá không chốt được — ghi 1 dòng lý do
(giá cao / chậm trả lời / sai nhu cầu...). Rà cuối tháng,
cập nhật context hoặc bảng giá.</code></pre>
<p>Ba chi tiết đáng học: <strong>AI Task 1 có quyền DỪNG</strong> — báo giá dựa trên đoán mò nguy hiểm hơn báo giá chậm; <strong>checklist người duyệt toàn câu hỏi cần phán đoán con người</strong> (lịch xưởng, quan hệ khách cũ) — còn phép tính và định dạng đã có Quality Check tự động lo; và <strong>Improvement đo bằng kết quả kinh doanh</strong> (tỷ lệ chốt) chứ không phải "chạy không lỗi" — workflow chạy mượt mà không ra đơn vẫn là workflow tồi.</p>`
      },
      {
        title: "6. Setup thực chiến: từ file workflow thành lệnh chạy được",
        body: `
<p>Workflow nằm trong file .md là tài liệu; workflow gọi được bằng một lệnh mới là công cụ. Cách nâng cấp trong từng môi trường:</p>
<p><strong>Claude Code CLI — slash command tùy chỉnh.</strong> Lưu workflow thành file trong thư mục <code>.claude/commands/</code> của dự án (VD: <code>.claude/commands/bao-gia.md</code> chứa toàn bộ instruction của workflow báo giá). Từ đó, gõ <code>/bao-gia</code> trong phiên là workflow chạy — người trong team không cần biết nội dung file, chỉ cần biết tên lệnh. Đây chính là bước đệm tự nhiên lên Agent Skill ở module 8.</p>
<p><strong>Cowork — ba mảnh ghép:</strong></p>
<ul>
<li><strong>Trigger theo lịch:</strong> dùng scheduled tasks ("chạy mỗi sáng thứ 2 lúc 9h...") cho các workflow định kỳ — báo cáo tuần, tổng hợp phản hồi. Trigger trong thiết kế module này giờ thành cấu hình thật.</li>
<li><strong>Input tự chảy vào:</strong> kết nối connector (MCP) tới nơi dữ liệu sống — Gmail, Slack, Drive, Lark... — thay vì tay dán dữ liệu vào mỗi lần. Bước Input của workflow nên ghi rõ "đọc từ connector nào, lọc điều kiện gì".</li>
<li><strong>Human Review đúng nghĩa:</strong> thiết kế để AI <em>dừng và hỏi</em> tại điểm duyệt ("soạn xong báo giá thì trình tôi duyệt, chưa được gửi") — đừng để nó chạy một mạch qua cổng không đảo ngược.</li>
</ul>
<p><strong>Cả hai môi trường — versioning bằng git.</strong> Chạy <code>git init</code> trong thư mục dự án (nhờ AI làm nếu bạn chưa quen). Mỗi lần cập nhật workflow: commit kèm một dòng mô tả. Vòng Improvement của bạn giờ có lịch sử thật: <code>git log</code> cho biết bản nào đổi gì, <code>git diff</code> cho biết chính xác câu chữ nào thay đổi giữa v1.2 và v1.3 — trả lời ngay câu hỏi "lỗi mới xuất hiện sau thay đổi nào".</p>
<div class="callout"><strong>Áp dụng vào bài thực hành:</strong> chọn một trong hai: (a) biến workflow của bạn thành slash command trong Claude Code, hoặc (b) dựng nó trong Cowork với ít nhất 1 trigger hoặc connector thật. Ghi vào bài làm: môi trường đã chọn, cấu hình đã làm, và một lần chạy thật đầu-cuối.</div>`
      },
      {
        title: "7. Hướng dẫn thực hành: nâng cấp workflow lên chuẩn vận hành",
        body: `
<p>Lấy workflow module 6 (hoặc thiết kế workflow mới có giá trị kinh doanh rõ). Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Vẽ lại theo khung 8 bước — dùng template <strong>Workflow Canvas</strong> cuối trang. Xác định trigger cụ thể.</li>
<li><strong>Bước 2.</strong> Đặt điểm Human Review theo nguyên tắc mục 2: chỉ ra chỗ rủi ro cao nhất và viết checklist 3-5 mục cho người duyệt tại đó.</li>
<li><strong>Bước 3.</strong> Viết kịch bản error handling cho tối thiểu 2 kiểu lỗi: input xấu và AI trả sai.</li>
<li><strong>Bước 4.</strong> Thiết kế vòng Improvement: nhật ký lỗi để đâu, ai rà, bao lâu một lần.</li>
<li><strong>Bước 5.</strong> Nghiệm thu khắc nghiệt: tưởng tượng bàn giao workflow cho đồng nghiệp và nghỉ phép 2 tuần — họ có vận hành được không, kể cả tuần có sự cố? Chỗ nào bạn chột dạ, viết rõ thêm chỗ đó. Dán toàn bộ vào ô bài làm, tick checklist, copy prompt phản biện.</li>
</ul>`
      }
    ]
  },

  m8: {
    readingTime: "16 phút đọc",
    sections: [
      {
        title: "1. Prompt → Workflow → Skill: nấc thang đóng gói",
        body: `
<p>Ba khái niệm hay bị dùng lẫn, phân định như sau. <strong>Prompt</strong>: một lần giao việc — bạn viết, dùng, xong. <strong>Workflow</strong>: quy trình nhiều bước được viết ra để lặp lại — nhưng vẫn cần người hiểu quy trình để vận hành. <strong>Agent Skill</strong>: workflow được đóng gói thành một "gói năng lực" hoàn chỉnh — có tên, mục đích, input chuẩn, quy trình, tiêu chuẩn đầu ra và giới hạn — mà <em>một AI (hoặc người) chưa từng gặp bạn vẫn dùng đúng được</em>.</p>
<p>Phép thử phân biệt: prompt trả lời "nói gì với AI <em>lần này</em>?", workflow trả lời "các bước làm việc này là gì?", skill trả lời "làm sao để <em>bất kỳ ai</em> cũng nhận được kết quả chuẩn mà không cần tôi ở đó?". Chính yêu cầu "không cần tôi ở đó" tạo ra mọi khác biệt trong cách viết.</p>`
      },
      {
        title: "2. Cấu trúc một Agent Skill hoàn chỉnh",
        body: `
<p>Tám thành phần, khớp với template <strong>Agent Skill Spec</strong> cuối trang:</p>
<ul>
<li><strong>Skill name:</strong> gọi tên theo việc, không theo công nghệ — "Phân tích phản hồi khách hàng" tốt hơn "GPT feedback tool".</li>
<li><strong>Use case:</strong> một câu: skill giải quyết vấn đề gì, khi nào dùng — và khi nào KHÔNG dùng.</li>
<li><strong>Target user:</strong> ai dùng — quyết định giọng hướng dẫn, mức giải thích thuật ngữ.</li>
<li><strong>Required input:</strong> danh sách input bắt buộc + định dạng + ví dụ mẫu cho từng input. Thiếu ví dụ mẫu là lỗi số một khiến skill chạy phập phù.</li>
<li><strong>Steps (instruction):</strong> quy trình xử lý viết cho AI đọc — mệnh lệnh, từng bước, có điều kiện rẽ nhánh ("nếu dữ liệu dưới 10 phản hồi, dừng và báo không đủ mẫu").</li>
<li><strong>Output standard:</strong> mô tả + <em>ví dụ output đạt chuẩn</em>. Một ví dụ tốt đáng giá hơn mười dòng mô tả.</li>
<li><strong>Test cases:</strong> các tình huống kiểm thử (dùng ở module 9).</li>
<li><strong>Known limits:</strong> giới hạn thành thật — "chưa xử lý tốt phản hồi mỉa mai", "chỉ tin cậy với tiếng Việt". Limits rõ ràng làm tăng, không giảm, độ tin cậy của skill.</li>
</ul>`
      },
      {
        title: "3. Convert: bốn bước chuyển workflow thành skill",
        body: `
<p><strong>Bước 1 — Đóng băng phạm vi.</strong> Workflow của bạn có thể xử lý nhiều biến thể; skill bản đầu chỉ nên làm MỘT việc thật chuẩn. Cắt hết nhánh phụ — "phân tích phản hồi khảo sát sau mua hàng" thay vì "phân tích mọi loại phản hồi".</p>
<p><strong>Bước 2 — Chuẩn hóa input.</strong> Trong workflow, bạn linh hoạt vì bạn hiểu ngầm. Skill thì không: định nghĩa chính xác từng input, định dạng, và ví dụ. Viết luôn quy tắc từ chối: "nếu thiếu X, yêu cầu bổ sung, không tự suy đoán".</p>
<p><strong>Bước 3 — Viết lại process thành instruction cho AI.</strong> Khác biệt lớn nhất: workflow viết cho người (được phép mơ hồ chỗ người tự hiểu), instruction viết cho AI (mọi quyết định phải có quy tắc). Chỗ nào workflow ghi "đánh giá xem có ổn không" — instruction phải ghi "ổn" nghĩa là gì, đo bằng gì.</p>
<p><strong>Bước 4 — Nhét tiêu chuẩn vào trong skill.</strong> Bước cuối của instruction luôn là tự kiểm: "trước khi trả kết quả, đối chiếu với output standard; mục nào chưa đạt, sửa rồi mới trả". Skill tốt tự Verify — người dùng không phải nhớ.</p>
<pre><code>Khung instruction rút gọn:
BẠN LÀ: [vai trò]. NHIỆM VỤ: [một câu].
INPUT: nhận [danh sách]. Nếu thiếu/sai định dạng → yêu cầu
bổ sung và DỪNG.
CÁC BƯỚC: 1... 2... 3... [kèm điều kiện rẽ nhánh]
OUTPUT: theo mẫu [ví dụ]. TRƯỚC KHI TRẢ: tự đối chiếu
checklist [liệt kê]; chưa đạt thì sửa.
KHÔNG ĐƯỢC: [các cấm kỵ quan trọng nhất]</code></pre>`
      },
      {
        title: "4. Ví dụ thu nhỏ: skill \"Phân tích phản hồi khách hàng\"",
        body: `
<pre><code>SKILL: Phân tích phản hồi sau mua hàng
USE CASE: Biến phản hồi thô thành báo cáo hành động được.
Không dùng cho: dưới 10 phản hồi, phản hồi không phải sau mua.
TARGET USER: Trưởng nhóm CSKH, không cần biết kỹ thuật.
INPUT: File phản hồi (mỗi dòng một phản hồi, có cột ngày);
khoảng thời gian cần phân tích.
STEPS:
1. Kiểm input: đủ 2 input? ≥10 phản hồi? Không → báo thiếu, dừng.
2. Phân loại từng phản hồi: sản phẩm / giao hàng / dịch vụ /
   giá / khác. Gắn cảm xúc: tích cực / tiêu cực / trung tính.
3. Với mỗi nhóm tiêu cực ≥15%: trích 3 phản hồi tiêu biểu
   (nguyên văn), tóm tắt vấn đề gốc.
4. Đề xuất tối đa 3 hành động, xếp theo ảnh hưởng.
OUTPUT: Báo cáo ≤600 từ: bảng tỷ lệ, vấn đề nổi bật kèm
trích dẫn nguyên văn, hành động đề xuất.
TỰ KIỂM TRƯỚC KHI TRẢ: mọi con số cộng lại đúng 100%?
Mọi vấn đề nêu ra có trích dẫn nguyên văn? Hành động có
khả thi với đội CSKH (không đề xuất việc của đội sản phẩm)?
KHÔNG ĐƯỢC: bịa phản hồi; suy đoán nguyên nhân không có
trong dữ liệu; đưa ra hơn 3 hành động.
KNOWN LIMITS: chưa xử lý tốt mỉa mai; phản hồi đa ngôn ngữ
cần dịch trước.</code></pre>
<p>Để ý mật độ quy tắc: ngưỡng 15%, tối đa 3 hành động, trích nguyên văn, cộng đúng 100%. Chính các con số này làm skill chạy ổn định giữa các lần, các người dùng khác nhau.</p>`
      },
      {
        title: "5. Năm lỗi khiến skill chạy phập phù",
        body: `
<p>Trước khi viết skill của bạn, hãy biết trước các bẫy — đây là 5 lỗi gặp nhiều nhất ở skill bản đầu:</p>
<ul>
<li><strong>Từ định tính không có thước đo:</strong> "viết chuyên nghiệp", "phân tích kỹ", "đủ chi tiết" — mỗi lần chạy AI sẽ diễn giải một kiểu. Sửa: đổi thành con số hoặc ví dụ ("mỗi vấn đề kèm ít nhất 1 trích dẫn", "như ví dụ mẫu đính kèm").</li>
<li><strong>Instruction viết cho mình đọc:</strong> "phân loại như thường lệ", "theo format quen thuộc" — người viết hiểu, AI mới toanh thì không. Phép thử: xóa hết ký ức về dự án, chỉ đọc instruction — có làm được không?</li>
<li><strong>Không có quy tắc từ chối:</strong> skill không được dạy nói "không" sẽ cố xử lý mọi input — kể cả input vô nghĩa — và tạo ra kết quả trông hợp lệ từ dữ liệu rác. Mọi skill cần ít nhất một điều kiện DỪNG.</li>
<li><strong>Ví dụ mâu thuẫn với quy tắc:</strong> quy tắc ghi "tối đa 3 đề xuất" nhưng ví dụ mẫu có 5 — AI thường tin ví dụ hơn tin quy tắc. Mỗi lần sửa quy tắc, rà lại ví dụ.</li>
<li><strong>Nhồi mọi thứ vào một skill:</strong> "phân tích phản hồi VÀ viết email trả lời VÀ đề xuất chiến lược" — ba việc, ba loại người dùng, ba tiêu chuẩn đầu ra. Dấu hiệu nhận biết: mục output standard của bạn phải viết chữ "nếu... thì..." quá 3 lần. Sửa: tách thành các skill nhỏ gọi nối tiếp nhau.</li>
</ul>
<div class="callout"><strong>Quy tắc ngón tay cái:</strong> mỗi lần bạn muốn viết một tính từ vào instruction, dừng lại và hỏi "AI đo điều này bằng gì?". Không trả lời được — thay tính từ bằng con số, checklist, hoặc ví dụ.</div>`
      },
      {
        title: "6. Setup thực chiến: viết skill đúng chuẩn SKILL.md",
        body: `
<p>Agent Skill không chỉ là khái niệm của khóa học — nó là một định dạng thật trong hệ sinh thái Claude (Claude Code, Cowork) và các nền tảng tương tự. Chuẩn phổ biến: <strong>một thư mục, trong đó có file SKILL.md</strong>, kèm tài nguyên phụ nếu cần:</p>
<pre><code>phan-tich-phan-hoi/
├── SKILL.md            ← trái tim của skill
├── templates/
│   └── bao-cao-mau.md  ← ví dụ output đạt chuẩn
└── examples/
    └── input-mau.csv   ← bộ dữ liệu mẫu để chạy thử</code></pre>
<p>File SKILL.md gồm hai phần. <strong>Phần đầu (frontmatter)</strong> — vài dòng khai báo giữa hai dấu <code>---</code>:</p>
<pre><code>---
name: phan-tich-phan-hoi
description: Phân tích phản hồi khách hàng sau mua hàng
  thành báo cáo hành động được. Dùng khi người dùng cần
  phân tích/tổng hợp feedback, khảo sát sau bán.
---</code></pre>
<p>Dòng <code>description</code> quan trọng hơn vẻ ngoài của nó: đây là căn cứ để AI <em>tự quyết định khi nào kích hoạt skill</em>. Description mơ hồ = skill không bao giờ được gọi, hoặc bị gọi nhầm việc. Hãy viết theo công thức: skill làm gì + "dùng khi" các tình huống cụ thể.</p>
<p><strong>Phần thân</strong> — chính là khối instruction bạn viết ở mục 3-4: các bước xử lý, quy tắc, output standard, điều cấm. Map từ Agent Skill Spec sang: name/use case → frontmatter; steps, output standard, known limits → thân file; ví dụ mẫu → thư mục templates/, examples/.</p>
<p><strong>Cài và chạy thử:</strong></p>
<ul>
<li><strong>Claude Code:</strong> đặt thư mục skill vào <code>.claude/skills/</code> của dự án (dùng riêng) hoặc <code>~/.claude/skills/</code> (dùng mọi dự án). Mở phiên mới, giao một việc khớp description — quan sát skill có được tự kích hoạt không.</li>
<li><strong>Cowork:</strong> thêm skill trong Settings → Capabilities (đóng thư mục thành file .skill nếu cần). Sau đó thử bằng một câu giao việc tự nhiên, không nhắc tên skill.</li>
</ul>
<div class="callout"><strong>Phép thử kích hoạt</strong> — nghiệm thu quan trọng ngang chất lượng output: nhờ một người (hoặc chính bạn ở phiên mới) giao việc bằng ngôn ngữ đời thường "phân tích giúp mình đống feedback này". Skill tự bật = description đạt. Phải gọi đích danh mới chạy = viết lại description.</div>`
      },
      {
        title: "7. Hướng dẫn thực hành: skill bản v1 của bạn",
        body: `
<p>Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Lấy workflow module 6-7, chạy 4 bước convert (mục 3). Điền vào template <strong>Agent Skill Spec</strong> cuối trang — đủ 8 thành phần, đặc biệt đừng bỏ known limits.</li>
<li><strong>Bước 2.</strong> Viết khối instruction hoàn chỉnh theo khung rút gọn (mục 3), có bước tự kiểm cuối.</li>
<li><strong>Bước 3.</strong> Chạy thử "một phát ăn ngay": mở hội thoại AI hoàn toàn mới, dán nguyên skill + một bộ input mẫu. Không giải thích gì thêm. Đầu ra có đạt output standard không?</li>
<li><strong>Bước 4.</strong> Ghi lại mọi chỗ AI hiểu sai hoặc tự suy đoán — mỗi chỗ là một quy tắc còn thiếu trong instruction. Sửa và chạy lại.</li>
<li><strong>Bước 5.</strong> Dán skill v1 + ghi chú chạy thử vào ô bài làm, tick checklist, copy prompt phản biện.</li>
</ul>
<div class="callout"><strong>Chuẩn "xong" của module này:</strong> skill chạy đúng trong hội thoại mới mà bạn không phải nói thêm câu nào. Module 9 sẽ kiểm thử nó một cách có hệ thống.</div>`
      }
    ]
  },

  m9: {
    readingTime: "15 phút đọc",
    sections: [
      {
        title: "1. Skill chưa qua kiểm thử là skill chưa tồn tại",
        body: `
<p>Skill v1 của bạn chạy tốt — với bạn, với input bạn chọn, trong ngày bạn viết nó. Đó là một mẫu thử duy nhất và nó thiên vị: bạn vô thức nhập input "ngoan" đúng kiểu skill mong đợi. Người dùng thật thì khác: họ dán nhầm định dạng, bỏ trống trường, nhập dữ liệu của việc khác, và hiểu hướng dẫn theo cách bạn không ngờ tới.</p>
<p>Simulation là trả lời câu hỏi: <strong>"skill này hành xử thế nào với người dùng mà tôi không kiểm soát?"</strong> — trước khi người đó là khách hàng thật. Nguyên tắc của module: một skill được tin cậy không phải vì nó chạy đúng khi mọi thứ đúng, mà vì nó <em>thất bại một cách an toàn</em> khi mọi thứ sai.</p>`
      },
      {
        title: "2. Thiết kế bộ test case: ba loại input",
        body: `
<p>Bộ test tối thiểu 5 tình huống, phủ ba loại:</p>
<ul>
<li><strong>Input tốt (happy path) — 2 case:</strong> input chuẩn nhưng khác nhau về nội dung (VD: một bộ phản hồi đa số khen, một bộ đa số chê). Kiểm tra: output có đạt chuẩn ổn định với các nội dung khác nhau không, hay chỉ tốt với đúng kiểu dữ liệu bạn hay dùng?</li>
<li><strong>Input thiếu — 2 case:</strong> thiếu một trường bắt buộc; dữ liệu quá ít so với ngưỡng. Hành vi đúng: skill phát hiện, nêu rõ thiếu gì, và DỪNG — không tự chế dữ liệu để làm tiếp. Skill lặng lẽ suy đoán khi thiếu input là skill nguy hiểm nhất.</li>
<li><strong>Input sai — 1+ case:</strong> sai định dạng, dữ liệu của việc khác hẳn (đưa danh sách đơn hàng cho skill phân tích phản hồi), hoặc input mâu thuẫn nội tại. Hành vi đúng: nhận diện và từ chối lịch sự kèm hướng dẫn sửa.</li>
</ul>
<p>Mỗi test case ghi theo mẫu bốn cột:</p>
<pre><code>TEST CASE #n
- Input: [mô tả hoặc dữ liệu cụ thể]
- Kỳ vọng: [output/hành vi đúng phải như thế nào]
- Thực tế: [điều đã xảy ra — điền sau khi chạy]
- Kết luận: ĐẠT / LỖI — [ghi chú lỗi nếu có]</code></pre>
<div class="callout"><strong>Mẹo tạo test nhanh:</strong> nhờ chính AI đóng vai người dùng khó: "Đây là skill của tôi. Hãy đóng vai 5 người dùng khác nhau — một người vội, một người cẩn thận, một người hiểu sai mục đích skill, một người nhập thiếu, một người nhập dữ liệu sai loại — và tạo input mà mỗi người đó sẽ nhập."</div>`
      },
      {
        title: "3. Chạy simulation cho nghiêm",
        body: `
<p>Ba quy tắc khi chạy test để kết quả đáng tin:</p>
<ul>
<li><strong>Hội thoại mới cho mỗi case.</strong> Chạy 5 case trong một hội thoại thì từ case 2 trở đi AI đã "học" từ các case trước — không còn mô phỏng đúng người dùng mới.</li>
<li><strong>Không cứu skill giữa chừng.</strong> Khi thấy AI hiểu sai, đừng nhảy vào giải thích thêm — người dùng thật không có bạn ngồi cạnh. Ghi nhận lỗi, để case chạy đến hết.</li>
<li><strong>Chấm bằng kỳ vọng đã viết, không chấm bằng cảm giác.</strong> So sánh đúng cột "Kỳ vọng" với cột "Thực tế". "Nhìn chung cũng ổn" không phải một kết quả kiểm thử.</li>
</ul>`
      },
      {
        title: "4. Fine-tuning: từ lỗi đến bản vá đúng chỗ",
        body: `
<p>Có kết quả test rồi — sửa thế nào cho đúng? Quy trình bốn nhịp:</p>
<ul>
<li><strong>Gom và tìm mẫu số:</strong> các lỗi có điểm chung không? 3 lỗi khác nhau đôi khi cùng một gốc (VD: output standard mô tả mơ hồ).</li>
<li><strong>Chẩn đoán đúng tầng:</strong> lỗi nằm ở đâu? <em>Instruction</em> (quy tắc thiếu/mơ hồ) → thêm quy tắc, thêm điều kiện rẽ nhánh. <em>Context</em> (AI thiếu kiến thức nền để phán đoán) → bổ sung bối cảnh, thuật ngữ. <em>Ví dụ</em> (mô tả đúng nhưng AI vẫn làm sai kiểu) → thêm ví dụ input-output chuẩn, đặc biệt ví dụ cho ca khó. <em>Constraint</em> (AI làm thừa) → thêm mục KHÔNG ĐƯỢC.</li>
<li><strong>Vá nhỏ nhất có thể:</strong> sửa đúng chỗ chẩn đoán, đừng viết lại cả skill — viết lại lớn làm bạn mất dấu nguyên nhân và có thể phá chỗ đang tốt.</li>
<li><strong>Chạy lại TOÀN BỘ test, không chỉ case lỗi:</strong> bản vá cho case 4 hoàn toàn có thể làm hỏng case 1 (regression). Bộ test vì thế là tài sản dùng lại — mỗi phiên bản skill đều chấm qua cùng một bộ.</li>
</ul>
<p>Lặp đến khi cả bộ test ĐẠT. Đánh số phiên bản (v1.1, v1.2...) kèm một dòng ghi chú đổi gì — thói quen nhỏ, giá trị lớn khi skill sống lâu.</p>`
      },
      {
        title: "5. Ví dụ: bộ test hoàn chỉnh cho skill phân tích phản hồi",
        body: `
<p>Áp vào skill "Phân tích phản hồi sau mua hàng" ở module 8, một bộ test 5 case đạt chuẩn trông thế này:</p>
<pre><code>CASE 1 (tốt): 40 phản hồi, đa số khen, 12% chê giao hàng.
Kỳ vọng: báo cáo đúng format; nhóm giao hàng KHÔNG vào mục
"vấn đề nổi bật" (dưới ngưỡng 15%); tỷ lệ cộng đúng 100%.

CASE 2 (tốt, nội dung ngược): 35 phản hồi, 60% tiêu cực
trải đều 3 nhóm. Kỳ vọng: cả 3 nhóm được nêu kèm trích dẫn
nguyên văn; vẫn chỉ tối đa 3 hành động đề xuất.

CASE 3 (thiếu): chỉ có 7 phản hồi.
Kỳ vọng: báo "không đủ mẫu (cần ≥10)" và DỪNG — không phân
tích, không đề xuất gì từ 7 phản hồi đó.

CASE 4 (thiếu): có file phản hồi, không có khoảng thời gian.
Kỳ vọng: hỏi lại khoảng thời gian, không tự giả định
"toàn bộ file".

CASE 5 (sai): dán nhầm file danh sách đơn hàng.
Kỳ vọng: nhận ra dữ liệu không phải phản hồi khách hàng,
từ chối lịch sự, mô tả đúng định dạng input cần có.</code></pre>
<p>Kết quả chạy thật (minh họa): case 1, 2, 4 ĐẠT; case 3 LỖI — skill phân tích luôn 7 phản hồi (ngưỡng nằm trong mô tả nhưng không nằm trong bước kiểm tra đầu); case 5 LỖI — skill "phân loại cảm xúc" các đơn hàng một cách vô nghĩa. Chẩn đoán: cả hai lỗi cùng tầng instruction — bước 1 kiểm tra input viết quá sơ sài. Bản vá: viết lại bước 1 thành 3 kiểm tra tường minh (đúng loại dữ liệu? ≥10 dòng? có khoảng thời gian?), mỗi kiểm tra fail → thông báo cụ thể + DỪNG. Chạy lại cả 5 case: ĐẠT.</p>
<p>Để ý case 5: người mới thiết kế test hầu như không bao giờ nghĩ đến "dán nhầm file" — nhưng đây là lỗi người dùng thật mắc hàng tuần. Nguồn test case tốt nhất sau khi skill ra đời chính là nhật ký lỗi thật (module 7): mỗi lỗi thật một test case mới, bộ test lớn dần cùng skill.</p>`
      },
      {
        title: "6. Setup thực chiến: chạy simulation có kỷ luật bằng công cụ",
        body: `
<p>Ba quy tắc simulation (mục 3) dễ vi phạm khi làm tay — công cụ giúp bạn giữ kỷ luật:</p>
<p><strong>Bộ test là file, sống cạnh skill.</strong> Thêm vào thư mục skill:</p>
<pre><code>phan-tich-phan-hoi/
├── SKILL.md
├── tests/
│   ├── test-cases.md    ← 5+ case: input, kỳ vọng
│   ├── inputs/          ← dữ liệu test thật (case1.csv...)
│   └── ket-qua/         ← kết quả từng vòng chạy, theo ngày
</code></pre>
<p>Test nằm cạnh skill thì mỗi lần sửa skill, bạn không phải đi tìm bộ test — và ai nhận skill của bạn cũng nhận luôn "phiếu bảo hành".</p>
<p><strong>Mỗi case một phiên sạch:</strong> Claude Code — thoát và mở phiên <code>claude</code> mới cho từng case (hoặc dùng subagent: "với mỗi test case trong tests/test-cases.md, dùng một agent độc lập chạy skill với input tương ứng, không cho các agent thấy kết quả của nhau"). Cowork — mỗi case một cuộc hội thoại mới. Đừng tiếc 2 phút mở phiên: một phiên "nhiễm" context làm sai lệch cả bộ kết quả.</p>
<p><strong>Để AI chấm vòng đầu, bạn chấm vòng cuối.</strong> Sau khi chạy xong, giao cho một phiên mới: <em>"So sánh từng kết quả trong tests/ket-qua/ với cột kỳ vọng trong test-cases.md. Kết luận ĐẠT/LỖI từng case, kèm dẫn chứng."</em> AI chấm khách quan hơn bạn (không thiên vị sản phẩm của phiên trước), nhưng phán quyết cuối và chẩn đoán nguyên nhân vẫn là việc của bạn.</p>
<p><strong>Git biến fine-tuning thành khoa học.</strong> Commit trước mỗi bản vá. Khi case 1 bỗng LỖI sau bản vá cho case 4 (regression), <code>git diff</code> chỉ ra chính xác thay đổi nào là thủ phạm — và <code>git revert</code> đưa bạn về bản trước trong một lệnh. Không có version control, fine-tuning là đi trong sương mù.</p>
<div class="callout"><strong>Áp dụng vào bài thực hành:</strong> dựng cấu trúc tests/ như trên cho skill của bạn, chạy 5 case theo đúng kỷ luật phiên-sạch, và dùng AI chấm vòng đầu. Dán bảng kết quả + git log (hoặc lịch sử phiên bản) vào bài làm.</div>`
      },
      {
        title: "7. Hướng dẫn thực hành: kiểm thử skill của bạn",
        body: `
<p>Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Thiết kế bộ test ≥5 case theo cơ cấu 2 tốt / 2 thiếu / 1 sai, viết đủ cột Kỳ vọng trước khi chạy bất cứ case nào.</li>
<li><strong>Bước 2.</strong> Chạy simulation đúng 3 quy tắc (mục 3) — mỗi case một hội thoại mới, không cứu giữa chừng.</li>
<li><strong>Bước 3.</strong> Điền cột Thực tế và Kết luận. Chẩn đoán lỗi theo 4 tầng và vá.</li>
<li><strong>Bước 4.</strong> Chạy lại toàn bộ. Ghi lại: skill v1 đạt mấy /5, phiên bản cuối đạt mấy /5, và thay đổi quan trọng nhất là gì.</li>
<li><strong>Bước 5.</strong> Dán bộ test + nhật ký fine-tune vào ô bài làm, tick checklist, copy prompt phản biện.</li>
</ul>
<div class="callout"><strong>Chuẩn "xong":</strong> skill + bộ test đi cùng nhau như sản phẩm + phiếu bảo hành. Module 10 sẽ đóng gói cả hai thành thứ chia sẻ/bán được.</div>`
      }
    ]
  },

  m10: {
    readingTime: "16 phút đọc",
    sections: [
      {
        title: "1. Từ skill chạy tốt đến sản phẩm có người dùng",
        body: `
<p>Bạn đang có: một skill đã kiểm thử + bộ test + hiểu biết sâu về vấn đề nó giải quyết. Khoảng cách còn lại đến "sản phẩm" không phải kỹ thuật — mà là ba thứ: <strong>người khác tự dùng được</strong> (packaging), <strong>người cần nó tìm thấy nó</strong> (sharing), và <strong>giá trị được định giá</strong> (selling). Ba tầng này xây lần lượt — đừng nghĩ giá khi chưa ai ngoài bạn dùng nổi skill.</p>
<p>Một cách nhìn giúp định hướng mọi quyết định của module: người mua không mua "skill AI" — họ mua <em>kết quả</em>: báo cáo phân tích xong trong 10 phút thay vì 3 giờ, quy trình onboarding không sót bước. Công nghệ là chi tiết triển khai; hãy nói ngôn ngữ kết quả trong mọi tài liệu bạn viết ở module này.</p>`
      },
      {
        title: "2. Packaging: gói sản phẩm hoàn chỉnh",
        body: `
<p>Một Agent Skill đóng gói chuẩn gồm 4 món:</p>
<ul>
<li><strong>Skill (bản đã fine-tune)</strong> — kèm số phiên bản.</li>
<li><strong>Hướng dẫn sử dụng</strong> — viết cho người chưa từng gặp bạn: cần chuẩn bị gì, các bước dùng lần đầu (kèm ảnh/ví dụ từng bước), input mẫu để chạy thử ngay, và mục "khi gặp lỗi thường gặp". Chuẩn duy nhất: <em>người mới đọc xong, chạy thành công lần đầu, không cần nhắn hỏi bạn</em>.</li>
<li><strong>Ví dụ input-output thật</strong> — một bộ dữ liệu mẫu và kết quả chuẩn từ chính bộ đó. Người dùng mới luôn chạy thử bằng dữ liệu mẫu trước khi tin skill với dữ liệu của họ.</li>
<li><strong>Trang mô tả (một trang):</strong> vấn đề gì — cho ai — kết quả nhận được — giới hạn. Ghi giới hạn công khai không làm sản phẩm yếu đi; nó lọc đúng người dùng và chặn thất vọng sai kỳ vọng — nguồn phàn nàn số một của sản phẩm số.</li>
</ul>
<div class="callout"><strong>Kiểm thử packaging giống kiểm thử skill:</strong> đưa nguyên gói cho một người ngoài (không phải bạn thân dễ tính), im lặng quan sát họ dùng. Mỗi lần họ phải hỏi bạn = một lỗ hổng của tài liệu. Đây chính là simulation của module 9, áp cho trải nghiệm người dùng.</div>`
      },
      {
        title: "3. Sharing: chọn kênh theo mục tiêu",
        body: `
<p>Ba đường chia sẻ, mỗi đường phục vụ một mục tiêu khác nhau:</p>
<ul>
<li><strong>Cho team nội bộ:</strong> mục tiêu là năng suất tập thể + uy tín cá nhân. Đưa skill vào kho chung của đội, kèm buổi hướng dẫn 30 phút. Giá trị thu về: phản hồi từ người dùng thật hàng ngày — dữ liệu cải tiến quý nhất mà bạn có miễn phí.</li>
<li><strong>Cho cộng đồng:</strong> mục tiêu là danh tiếng và phản hồi diện rộng. Chia sẻ miễn phí một phiên bản tốt (đừng chia bản làm dở) trong nhóm ngành, kèm câu chuyện "vấn đề → cách giải". Người chia sẻ skill tốt được nhớ đến như chuyên gia của vấn đề đó — đây là marketing tự nhiên cho tầng bán.</li>
<li><strong>Cho khách hàng:</strong> mục tiêu là doanh thu — sang mục 4.</li>
</ul>
<p>Trình tự khôn ngoan cho người mới: nội bộ trước (vá lỗi tài liệu), cộng đồng sau (tạo uy tín + tìm đúng chân dung người cần), bán cuối cùng (khi đã có bằng chứng người khác dùng được và khen thật).</p>`
      },
      {
        title: "4. Selling: định vị, giá, và offer đầu tiên",
        body: `
<p><strong>Định vị theo hình chữ T:</strong> "skill phân tích phản hồi khách hàng" là hàng chợ; "skill phân tích phản hồi cho chuỗi F&B 5-20 chi nhánh" là hàng chuyên — người trong ngành thấy mình trong đó, sẵn sàng trả cao hơn, và bạn ít đối thủ hơn. Chọn ngách bạn thật sự hiểu (thường chính là ngành bạn đang làm).</p>
<p><strong>Ba mô hình giá đơn giản cho người bắt đầu:</strong></p>
<ul>
<li><strong>Bán gói một lần:</strong> khách trả một lần, nhận trọn gói. Dễ bán, dễ hiểu — hợp bản đầu tiên.</li>
<li><strong>Skill + dịch vụ triển khai:</strong> gói skill kèm 1-2 buổi cài đặt theo ngữ cảnh khách. Giá cao hơn nhiều lần vì bạn bán kết quả, không bán file. Thường là mô hình lãi nhất cho người có chuyên môn ngành.</li>
<li><strong>Đăng ký theo kỳ:</strong> phí định kỳ đổi lấy cập nhật + hỗ trợ. Chỉ hứa khi bạn chắc mình duy trì được nhịp cập nhật.</li>
</ul>
<p><strong>Neo giá vào giá trị, không vào công sức:</strong> skill tiết kiệm cho khách 5 giờ/tuần của nhân viên lương X — làm phép nhân ra con số một năm, và định giá là một phần nhỏ của con số đó. Đừng định giá theo "mình làm mất mấy buổi tối".</p>
<p><strong>Offer đầu tiên nên đơn giản:</strong> một câu định vị (cho ai — được gì — trong bao lâu), một mức giá, một cam kết giảm rủi ro (dùng thử với dữ liệu mẫu / hoàn tiền 7 ngày), một lời kêu gọi hành động. Landing page một trang theo đúng cấu trúc trang mô tả ở mục 2 là đủ cho 10 khách đầu tiên — và bạn đã học cách làm nó ở module 5.</p>`
      },
      {
        title: "5. Lộ trình 30 ngày đầu tiên",
        body: `
<p>Đóng gói xong không có nghĩa là chờ khách đến. Một lộ trình 30 ngày thực tế cho skill đầu tiên:</p>
<ul>
<li><strong>Tuần 1 — Nội bộ & beta:</strong> đưa skill cho 2-3 người trong team hoặc bạn cùng ngành dùng thật. Mục tiêu duy nhất: quan sát và vá tài liệu. Đầu ra: gói v1.1 mà người lạ tự chạy được + 2-3 câu nhận xét thật (xin phép dùng làm chứng thực).</li>
<li><strong>Tuần 2 — Ra cộng đồng:</strong> viết một bài chia sẻ theo công thức "vấn đề tôi gặp → cách tôi giải bằng skill → kết quả cụ thể + cho dùng thử". Đăng vào 1-2 nhóm ngành bạn hoạt động thật (không rải link 10 nhóm lạ). Mục tiêu: 10-20 người dùng thử và phản hồi.</li>
<li><strong>Tuần 3 — Lắng nghe tín hiệu bán:</strong> theo dõi ai hỏi sâu nhất, hỏi gì. Câu "có làm được cho ngành X không?", "công ty tôi dùng được không?" chính là tín hiệu nhu cầu trả phí. Nói chuyện trực tiếp với 3-5 người đó — không bán vội, hỏi về quy trình hiện tại và cái giá của vấn đề.</li>
<li><strong>Tuần 4 — Offer đầu tiên:</strong> từ các cuộc nói chuyện, chọn ngách hẹp nhất có nhu cầu rõ nhất, soạn offer 4 phần (mục 4) và chào cho chính những người đã nói chuyện. Mục tiêu tháng đầu không phải doanh thu lớn — là <strong>1-3 khách trả tiền đầu tiên</strong> và hiểu sâu vì sao họ trả.</li>
</ul>
<div class="callout"><strong>Cái bẫy tháng đầu:</strong> dành 30 ngày "hoàn thiện thêm" trước khi cho ai xem. Skill v1.1 được 20 người dùng thật dạy cho bạn nhiều hơn skill v3.0 hoàn hảo trong ổ cứng. Xấu hổ một chút ở tuần 1 rẻ hơn nhiều so với xây 3 tháng một thứ không ai cần.</div>`
      },
      {
        title: "6. Setup thực chiến: đóng gói .skill, plugin và kênh phân phối",
        body: `
<p>Phần packaging (mục 2) giờ ánh xạ sang định dạng phân phối thật:</p>
<p><strong>Gói .skill — đơn vị chia sẻ nhỏ nhất.</strong> Thư mục skill (SKILL.md + templates + examples + tests) nén lại thành một file <code>.skill</code> là chia sẻ được: người nhận cài vào Cowork (Settings → Capabilities) hoặc giải nén vào <code>.claude/skills/</code> của Claude Code. Lưu ý gói đủ 4 món của mục 2 — đặc biệt <code>examples/</code> với dữ liệu mẫu, vì "chạy thử ngay được" quyết định ấn tượng 5 phút đầu của người nhận.</p>
<p><strong>Plugin — khi bạn có nhiều hơn một skill.</strong> Plugin là gói lớn hơn: nhiều skill liên quan + cấu hình connector + lệnh tùy chỉnh, cài một lần được cả bộ. Ví dụ định vị theo ngách của mục 4 thành hình hài thật: plugin "Bộ kỹ năng CSKH cho chuỗi F&B" gồm skill phân tích phản hồi + skill soạn phản hồi khiếu nại + connector tới kênh chat. Plugin có thể đưa vào <em>marketplace</em> nội bộ của công ty hoặc chia sẻ công khai — đây chính là "kênh chia sẻ cho team" của mục 3 ở dạng sản phẩm hóa.</p>
<p><strong>Tài liệu hướng dẫn: video 3 phút + README.</strong> Chuẩn "người mới chạy được lần đầu" dễ đạt nhất bằng cặp đôi: một video quay màn hình 3 phút (cài → chạy với dữ liệu mẫu → đọc kết quả) + README từng bước có ảnh chụp. Cả hai đều làm được bằng chính AI: nhờ nó viết kịch bản video từ README.</p>
<p><strong>Landing page — dùng lại module 5.</strong> Trang mô tả sản phẩm chính là một product brief đem thi công: viết brief theo 6 phần, giao AI dựng trang một file HTML, và tiêu chí kiểm thử là 4 câu hỏi của trang mô tả (vấn đề gì — cho ai — kết quả gì — giới hạn gì) phải trả lời được trong 30 giây đọc.</p>
<div class="callout"><strong>Áp dụng vào bài thực hành + Capstone:</strong> sản phẩm cuối của khóa nên nộp ở dạng: file .skill (hoặc thư mục skill chuẩn) + README + bộ dữ liệu mẫu + trang mô tả. Đó không phải "bài tập" nữa — đó là phiên bản 1.0 của một sản phẩm số mang tên bạn.</div>`
      },
      {
        title: "7. Hướng dẫn thực hành + Capstone",
        body: `
<p>Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Đóng gói đủ 4 món (mục 2) cho skill của bạn. Viết hướng dẫn sử dụng trước, trang mô tả sau.</li>
<li><strong>Bước 2.</strong> Beta test: nhờ 1 người ngoài dùng nguyên gói, im lặng quan sát, ghi lại mọi chỗ họ vấp. Sửa tài liệu theo đó.</li>
<li><strong>Bước 3.</strong> Viết định vị chữ T + chọn 1 mô hình giá + soạn offer 4 phần (mục 4).</li>
<li><strong>Bước 4.</strong> Dán toàn bộ (link/tóm tắt gói + ghi chú beta test + offer) vào ô bài làm, tick checklist, copy prompt phản biện.</li>
</ul>
<p><strong>Capstone toàn khóa</strong> — đối chiếu với danh sách Capstone ở panel bên phải: đến đây bạn đã có đủ nguyên liệu cho mọi mục. Nếu mục nào chưa tick được, module tương ứng cho bạn biết cần quay lại đâu: vấn đề thật (m1), workflow có điểm kiểm soát (m6-7), skill hoàn chỉnh (m8), test case (m9), hướng dẫn + kế hoạch chia sẻ (m10).</p>
<div class="callout"><strong>Lời kết:</strong> tài sản lớn nhất sau khóa học không phải một skill — mà là <em>vòng lặp bạn đã nội hóa</em>: gặp việc lặp lại → chưng cất thành workflow → đóng gói thành skill → kiểm thử → chia sẻ. Chạy vòng này đủ nhiều, bạn có một danh mục tài sản tri thức — thứ mà thời AI không làm mất giá, mà làm tăng giá.</div>`
      }
    ]
  },

  m11: {
    readingTime: "15 phút đọc",
    sections: [
      {
        title: "1. Nút thắt tiếp theo: skill giỏi đến đâu cũng đói dữ liệu",
        body: `
<p>Đến module này, bạn đã có skill chạy tốt và workflow có kiểm soát. Nhưng chạy chúng vài tuần, một vấn đề mới lộ ra: <strong>dữ liệu vào skill mỗi lần một kiểu, và kết quả skill tạo ra rơi vãi khắp nơi</strong>. Phản hồi khách nằm trong 5 file export khác tên cột; báo cáo phân tích tháng trước không tìm lại được; nhật ký lỗi ghi ở ba chỗ. Skill là động cơ tốt — nhưng bạn đang đổ xăng bằng cốc giấy.</p>
<p>Đây là quy luật chung: <em>khi quy trình trưởng thành, nút thắt dịch chuyển từ xử lý sang dữ liệu</em>. Câu hỏi của module này: dữ liệu và tri thức của bạn nên <strong>sống ở đâu</strong>, có <strong>hình dạng gì</strong>, để cả bạn và AI cùng dùng được lâu dài? Trả lời đúng, bạn không chỉ nuôi skill — bạn đang xây nền cho một <em>second brain</em>: bộ nhớ ngoài có tổ chức, lớn dần theo năm tháng, và trả lời được câu hỏi thay vì chỉ lưu trữ.</p>`
      },
      {
        title: "2. Bậc thang lưu trữ 5 cấp — và nguyên tắc chọn bậc",
        body: `
<p>Đừng hỏi "công cụ nào tốt nhất" — hãy hỏi "nhu cầu của tôi đang ở bậc nào". Năm bậc, từ đơn giản đến phức tạp:</p>
<ul>
<li><strong>Bậc 1 — File & thư mục (markdown):</strong> ghi chú, tài liệu, kết quả nghiên cứu dạng file .md trong cấu trúc thư mục rõ (bạn đã bắt đầu từ module 6). Đủ cho: tri thức dạng văn bản, đọc tuần tự. Giới hạn: không đếm, không lọc, không tổng hợp được theo điều kiện.</li>
<li><strong>Bậc 2 — Bảng tính (CSV/Sheets):</strong> dữ liệu thành hàng và cột — đếm được, lọc được, vẽ biểu đồ được. Đủ cho: một loại dữ liệu, một người nhập. Giới hạn lộ ra khi: cùng thông tin phải sửa nhiều nơi, các bảng tham chiếu nhau bằng copy-paste.</li>
<li><strong>Bậc 3 — Database quan hệ:</strong> nhiều bảng nối với nhau bằng ID. Hai ngả: <em>ngả không code</em> — Notion database, Airtable, Lark Base (dễ nhìn, dễ chia sẻ team); <em>ngả nhẹ mà mạnh</em> — SQLite: cả database là một file duy nhất nằm ngay trong thư mục dự án, và AI viết truy vấn SQL thay bạn.</li>
<li><strong>Bậc 4 — Database có API/MCP:</strong> như bậc 3 nhưng AI và automation truy cập trực tiếp qua connector — dữ liệu tự chảy vào workflow (Cowork nối Notion/Lark/PostgreSQL qua MCP). Đây là lúc data layer và workflow module 7 gặp nhau.</li>
<li><strong>Bậc 5 — Semantic search (vector):</strong> tìm theo <em>ý nghĩa</em> thay vì từ khóa — hỏi "khách phàn nàn về thái độ nhân viên" tìm ra cả phản hồi không chứa chữ "thái độ". Cần khi kho văn bản lớn đến mức đọc không xuể và từ khóa bắt đầu bỏ sót.</li>
</ul>
<div class="callout"><strong>Nguyên tắc vàng:</strong> chọn bậc thấp nhất còn đáp ứng nhu cầu, và chỉ nâng khi có <em>tín hiệu quá tải cụ thể</em>: tìm không ra (1→2 hoặc 5), đếm/lọc sai (1→2), sửa một thông tin ở nhiều chỗ (2→3), tay dán dữ liệu vào workflow mỗi lần (3→4). Mỗi bậc cao hơn là một khoản nợ bảo trì — đừng vay khi chưa cần.</div>`
      },
      {
        title: "3. Thiết kế schema: kỹ năng 30 phút, dùng cả đời",
        body: `
<p>Dù ở bậc nào, dữ liệu tốt bắt đầu từ schema — bản thiết kế trả lời ba câu hỏi:</p>
<ul>
<li><strong>Thực thể nào?</strong> Danh từ chính của công việc: Khách hàng, Phản hồi, Dự án, Báo cáo. Mỗi thực thể một bảng (hoặc một thư mục). Quy tắc: nếu một thứ cần theo dõi theo thời gian hoặc được nhắc đến từ nhiều nơi — nó xứng đáng là thực thể riêng.</li>
<li><strong>Thuộc tính nào bắt buộc?</strong> Với mỗi thực thể, 3-7 trường phải có: Phản hồi cần ngày, nguồn, nội dung nguyên văn, nhóm vấn đề, cảm xúc. Ít trường bắt buộc + nhập nhất quán thắng nhiều trường + nhập tùy hứng.</li>
<li><strong>Định danh và quan hệ thế nào?</strong> Mỗi bản ghi một ID không đổi (KH-0042); bảng khác nhắc đến nó bằng ID chứ không bằng tên (tên đổi, ID không). Quan hệ ghi tường minh: Phản hồi có cột <code>khach_id</code>.</li>
</ul>
<p>Ba lỗi schema kinh điển: <strong>một cột nhồi nhiều nghĩa</strong> ("Ghi chú" chứa cả số điện thoại, cả trạng thái đơn — tách ra); <strong>ngày tháng tự do</strong> ("5/6", "hôm qua", "T6 tuần trước" — chuẩn một định dạng YYYY-MM-DD); <strong>phân loại tùy hứng</strong> ("giao hàng", "ship", "vận chuyển" là ba nhãn khác nhau trong máy — chốt danh sách nhãn đóng, chọn chứ không gõ).</p>
<p>Và một mẹo rất module-3: <em>đưa schema cho AI phản biện trước khi dùng</em> — "đây là schema của tôi, hãy thử nhập 5 tình huống dữ liệu thật này vào và chỉ ra chỗ nào lúng túng".</p>`
      },
      {
        title: "4. Tầm nhìn second brain: bốn bước, AI ở từng bước",
        body: `
<p>Second brain không phải một app — nó là <strong>vòng chảy tri thức</strong> qua bốn bước, và AI khuếch đại từng bước:</p>
<ul>
<li><strong>Capture (thu nhận):</strong> mọi thứ đáng giữ — ghi chú họp, bài hay, phản hồi khách, bài học sau dự án — được đưa vào hệ thống <em>ngay lúc gặp</em>, không "để sau". AI giúp: chuyển giọng nói/ảnh chụp/email thành ghi chú đúng schema. Quy tắc: capture phải dưới 30 giây, không thì bạn sẽ bỏ.</li>
<li><strong>Organize (tổ chức):</strong> đưa về đúng chỗ theo cấu trúc đã thiết kế. AI giúp: phân loại tự động theo quy ước trong CLAUDE.md — "mọi ghi chú mới, gắn nhãn theo danh sách chuẩn và lưu đúng thư mục".</li>
<li><strong>Distill (chưng cất):</strong> định kỳ nén dữ liệu thô thành tri thức: 50 phản hồi → 3 bài học; 10 ghi chú họp → 1 trang quyết định-và-lý-do. Đây chính là distill knowledge của module 6, giờ chạy định kỳ trên kho của bạn — một scheduled task mỗi tuần.</li>
<li><strong>Express (tạo ra):</strong> tri thức đã chưng cất trở thành nguyên liệu cho mọi thứ bạn làm: input cho skill, dẫn chứng cho báo cáo, chất liệu cho content. Vòng khép kín: sản phẩm tạo ra lại được capture về kho.</li>
</ul>
<p>Ghép với những gì bạn đã có: nhật ký lỗi (m7), kết quả test (m9), phản hồi người dùng (m10) — tất cả đã là hạt giống second brain. Module này cho chúng một mái nhà chung. Và một điểm chiến lược: <strong>kho tri thức này nằm trong file và database bạn sở hữu</strong> — công cụ AI có thể đổi, kho của bạn ở lại.</p>`
      },
      {
        title: "5. Setup thực chiến: SQLite + markdown với Claude Code / Cowork",
        body: `
<p>Combo khởi điểm được khuyên dùng: <strong>markdown cho tri thức, SQLite cho dữ liệu có cấu trúc</strong> — cả hai đều là file trong thư mục dự án, AI đọc-ghi trực tiếp, không phụ thuộc dịch vụ ngoài.</p>
<pre><code>second-brain/
├── CLAUDE.md            ← quy ước: schema, nhãn chuẩn, quy tắc nhập
├── notes/               ← tri thức dạng văn bản (bậc 1)
│   ├── hop/  du-an/  bai-hoc/
├── data/
│   └── work.db          ← SQLite: khách hàng, phản hồi... (bậc 3)
└── distilled/           ← kết quả chưng cất định kỳ</code></pre>
<p><strong>Với Claude Code:</strong> bạn không cần biết SQL. Ra lệnh tự nhiên: <em>"Tạo database SQLite tại data/work.db theo schema trong CLAUDE.md"</em>, rồi <em>"nhập file phản hồi tháng 6 này vào bảng feedback, báo cáo dòng nào không hợp lệ"</em>, rồi <em>"khách nào có trên 2 phản hồi tiêu cực trong 90 ngày?"</em> — AI viết và chạy query, bạn nhận câu trả lời. Ghi các query hay dùng vào CLAUDE.md để phiên sau AI dùng lại đúng cách.</p>
<p><strong>Với Cowork:</strong> cùng cấu trúc thư mục (Cowork đọc-ghi file và chạy được SQLite trong sandbox); hoặc ngả không code — dựng bậc 3 trên Notion/Lark Base rồi nối connector MCP, thành luôn bậc 4: workflow module 7 đọc dữ liệu trực tiếp không cần dán tay.</p>
<p><strong>Nâng cấp có kỷ luật:</strong> chỉ lên bậc 5 (semantic search) khi notes/ vượt vài trăm file và tìm từ khóa bắt đầu bỏ sót — lúc đó cân nhắc công cụ có sẵn tính năng này trước khi tự dựng.</p>
<div class="callout callout-warning"><strong>Dữ liệu nhạy cảm:</strong> thông tin khách hàng định danh được, lương thưởng, hợp đồng — cân nhắc kỹ trước khi đưa vào bất kỳ công cụ AI nào; ẩn danh hóa được thì làm (KH-0042 thay vì tên thật), và tuân thủ chính sách dữ liệu của công ty bạn.</div>`
      },
      {
        title: "6. Hướng dẫn thực hành: dựng data layer cho skill của bạn",
        body: `
<p>Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Kiểm kê: liệt kê mọi loại dữ liệu skill/workflow của bạn <em>ăn vào</em> và <em>nhả ra</em>. Mỗi loại đang sống ở đâu, dạng gì?</li>
<li><strong>Bước 2.</strong> Chọn bậc cho từng loại theo nguyên tắc mục 2, ghi rõ lý do (vì sao không thấp hơn/cao hơn).</li>
<li><strong>Bước 3.</strong> Thiết kế schema (mục 3): thực thể, thuộc tính bắt buộc, ID, nhãn chuẩn. Cho AI phản biện schema bằng 5 tình huống dữ liệu thật.</li>
<li><strong>Bước 4.</strong> Dựng thật theo setup mục 5: tạo cấu trúc thư mục + database, ghi quy ước vào CLAUDE.md, nạp một lô dữ liệu thật.</li>
<li><strong>Bước 5.</strong> Nghiệm thu bằng 3 truy vấn có ý nghĩa công việc (không phải "đếm số dòng" — mà là câu hỏi bạn thật sự cần đáp án). Dán schema + 3 truy vấn + kết quả vào ô bài làm, tick checklist, copy prompt phản biện.</li>
</ul>
<div class="callout"><strong>Nhìn về module 12:</strong> data layer của bạn giờ trả lời tốt câu hỏi "cái gì" và "bao nhiêu". Còn loại câu hỏi thứ ba — "những thứ này <em>liên quan với nhau thế nào</em>" — cần thêm một lớp nữa: knowledge graph.</div>`
      }
    ]
  },

  m12: {
    readingTime: "15 phút đọc",
    sections: [
      {
        title: "1. Câu hỏi mà kho dữ liệu phẳng không trả lời được",
        body: `
<p>Second brain của bạn (module 11) đã tìm được "cái gì" và đếm được "bao nhiêu". Nhưng thử hỏi nó: <em>"Khách hàng nào đang dùng dịch vụ bị ảnh hưởng bởi việc đối tác X thay đổi chính sách?"</em> — và bạn thấy giới hạn. Trả lời câu này phải <strong>đi qua một chuỗi quan hệ</strong>: đối tác X → cung cấp cho dịch vụ nào → dịch vụ đó có khách nào. Thông tin nằm rải ở ba chỗ, và thứ kết nối chúng — các mối quan hệ — không được lưu ở đâu cả, chỉ nằm trong đầu bạn.</p>
<p><strong>Knowledge graph</strong> (đồ thị tri thức) sinh ra để lưu chính thứ đó: thế giới được biểu diễn thành các <strong>node</strong> (thực thể: người, công ty, sản phẩm, tài liệu, khái niệm) nối với nhau bằng các <strong>edge có tên</strong> (quan hệ: cung cấp cho, đang dùng, phụ trách, phụ thuộc vào). Khi quan hệ trở thành dữ liệu, câu hỏi đa bước trở thành một đường đi trên đồ thị — máy dò được, thay vì bạn phải nhớ.</p>
<p>Đơn vị nhỏ nhất của đồ thị là <strong>triple</strong>: chủ thể –[quan hệ]→ đối tượng. <em>[Đối tác X] –[cung cấp cho]→ [Dịch vụ Y]. [Khách A] –[đang dùng]→ [Dịch vụ Y].</em> Hai triple đó là đủ để máy suy ra câu trả lời ở trên — đó là toàn bộ ý tưởng, phần còn lại là quy mô và công cụ.</p>`
      },
      {
        title: "2. Khi nào cần đồ thị — và khi nào đừng",
        body: `
<p>Knowledge graph nghe hấp dẫn đến mức dễ dùng sai chỗ. Phép thử trung thực: <strong>bạn có thường xuyên hỏi câu hỏi đa bước (multi-hop) không?</strong></p>
<ul>
<li><strong>Đáng dùng khi:</strong> mạng lưới quan hệ là tài sản cốt lõi của công việc — quan hệ khách hàng-dự án-người liên hệ-referral trong sales B2B; phụ thuộc giữa hệ thống-dịch vụ-đối tác trong vận hành; ai-biết-gì-đã-làm-dự-án-nào trong quản lý tri thức team; nội dung nào-dẫn-đến-nội dung nào trong content strategy.</li>
<li><strong>Không đáng khi:</strong> câu hỏi của bạn chủ yếu là lọc và đếm một loại thực thể ("phản hồi tiêu cực tháng này") — bảng làm tốt hơn; hoặc quan hệ ít và ổn định đến mức một cột <code>khach_id</code> trong bảng (module 11) là đủ. Đồ thị không thay thế database — nó là <em>một lớp quan hệ</em> đặt cạnh kho dữ liệu hiện có.</li>
</ul>
<p>Tin tốt: cũng như lưu trữ, đồ thị có bậc thang riêng — và bậc đầu tiên gần như miễn phí:</p>
<ul>
<li><strong>Bậc A — Wiki-link trong ghi chú:</strong> viết ghi chú markdown với liên kết <code>[[Khach A]]</code>, <code>[[Du an X]]</code> (kiểu Obsidian). Mỗi link là một edge thô (chưa có tên quan hệ). Obsidian vẽ graph view miễn phí — đủ để <em>nhìn thấy</em> cụm tri thức và lỗ hổng liên kết.</li>
<li><strong>Bậc B — Bảng triple trong SQLite:</strong> một bảng <code>edges(chu_the, quan_he, doi_tuong)</code> ngay trong work.db của module 11. Quan hệ giờ có tên và truy vấn được — đây là "knowledge graph của người thực dụng", đi xa bất ngờ.</li>
<li><strong>Bậc C — Graph database chuyên dụng</strong> (Neo4j và tương tự): khi đồ thị hàng chục nghìn cạnh và câu hỏi 3-4 bước trở thành hàng ngày. Đa số cá nhân và team nhỏ không bao giờ cần đến bậc này — và điều đó hoàn toàn ổn.</li>
</ul>`
      },
      {
        title: "3. AI làm việc nặng: trích xuất triple từ tài liệu",
        body: `
<p>Rào cản thật của knowledge graph xưa nay không phải công nghệ — mà là <em>công nhập liệu</em>: ai ngồi gõ hàng nghìn triple? Đây chính là chỗ AI thay đổi cuộc chơi: LLM trích xuất thực thể và quan hệ từ văn bản tự do rất tốt, <strong>nếu bạn ràng buộc nó đúng cách</strong>:</p>
<pre><code>Prompt mẫu — trích xuất triple:
"Đọc các ghi chú đính kèm và trích xuất triple theo quy tắc:
1. CHỈ dùng các quan hệ trong danh sách: [đang dùng],
   [phụ trách], [cung cấp cho], [thuộc về], [đã gặp],
   [đề cập đến]. Không tự chế quan hệ mới.
2. Tên thực thể lấy theo danh sách chuẩn đính kèm
   (entities.md); gặp tên lạ → đưa vào mục 'CẦN XÁC NHẬN'
   thay vì tự thêm.
3. Mỗi triple kèm nguồn: file nào, dòng/đoạn nào.
4. Không suy diễn quan hệ không được viết tường minh.
Xuất dạng bảng: chu_the | quan_he | doi_tuong | nguon"</code></pre>
<p>Bốn quy tắc trên xử lý bốn rủi ro kinh điển: <strong>quan hệ nở vô hạn</strong> (danh sách đóng — như nhãn chuẩn module 11), <strong>thực thể phân mảnh</strong> ("Cty ABC" / "ABC Corp" / "ABC" phải là một node — gọi là <em>entity resolution</em>, lỗi số một của mọi đồ thị), <strong>không truy được nguồn</strong> (mỗi cạnh phải chỉ về bằng chứng), và <strong>ảo giác quan hệ</strong> (AI "đoán" hai thứ liên quan — cấm suy diễn, đúng tinh thần constraints module 2).</p>
<p>Quy trình chuẩn: AI trích → bạn duyệt mục CẦN XÁC NHẬN (human-in-the-loop đặt đúng cổng chất lượng — module 7) → nhập vào bảng edges. Với 10-20 tài liệu, cả vòng mất một buổi tối.</p>`
      },
      {
        title: "4. Truy vấn và nhìn: đồ thị bắt đầu trả công",
        body: `
<p><strong>Truy vấn đa bước bằng ngôn ngữ tự nhiên.</strong> Có bảng edges rồi, bạn hỏi AI: <em>"Từ bảng edges, tìm mọi khách hàng cách [Đối tác X] đúng 2 bước quan hệ, cho biết đường đi từng trường hợp"</em> — AI viết SQL tự nối bảng (hoặc dò đệ quy) và trả về: <em>Khách A ← đang dùng ← Dịch vụ Y ← cung cấp cho ← Đối tác X</em>. Chuỗi đường đi này chính là <strong>câu trả lời kèm chứng cứ</strong> — bạn kiểm được từng mắt xích, khác hẳn câu trả lời "tin tôi đi" của AI không có đồ thị chống lưng.</p>
<p><strong>Nhìn thấy đồ thị.</strong> Trực quan hóa không phải trang trí — nó là công cụ phát hiện: cụm node cô lập (tri thức chưa kết nối), node trung tâm bất ngờ (một người/hệ thống mà mọi thứ phụ thuộc — rủi ro tập trung), cạnh đáng lẽ phải có mà không có. Cách rẻ nhất: nhờ AI xuất bảng edges thành sơ đồ <strong>Mermaid</strong> — dạng văn bản, render được ngay trong nhiều công cụ, kèm được vào README của skill:</p>
<pre><code>graph LR
  DoiTacX -->|cung cấp cho| DichVuY
  KhachA -->|đang dùng| DichVuY
  KhachB -->|đang dùng| DichVuY
  NguyenC -->|phụ trách| KhachA</code></pre>
<p><strong>Và vòng khép với AI:</strong> khi giao việc cho skill/workflow, đính kèm phần đồ thị liên quan làm context — "trước khi soạn email cho Khách A, đây là mọi quan hệ của Khách A trong hệ thống" — AI ra quyết định với bức tranh quan hệ đầy đủ thay vì thông tin cô lập. Đây là dạng thô sơ nhưng thực dụng của hướng đi mà ngành gọi là GraphRAG.</p>`
      },
      {
        title: "5. Setup thực chiến: đồ thị tối giản trong dự án của bạn",
        body: `
<p>Mở rộng đúng thư mục second-brain của module 11 — không dựng gì mới:</p>
<pre><code>second-brain/
├── CLAUDE.md            ← thêm: danh sách quan_he chuẩn,
│                           quy tắc entity resolution
├── notes/               ← ghi chú (thêm [[wiki-link]] khi viết)
├── data/
│   └── work.db          ← thêm bảng edges + bảng entities
├── graph/
│   ├── entities.md      ← danh sách tên thực thể chuẩn
│   └── graph.mmd        ← sơ đồ Mermaid sinh tự động
└── distilled/</code></pre>
<p><strong>Claude Code:</strong> (1) <em>"Thêm vào work.db bảng entities(id, ten_chuan, ten_khac) và edges(chu_the_id, quan_he, doi_tuong_id, nguon)"</em>; (2) chạy prompt trích xuất (mục 3) trên notes/, duyệt mục CẦN XÁC NHẬN, cho AI nhập; (3) <em>"Sinh graph/graph.mmd từ bảng edges"</em>; (4) lưu cả quy trình này thành slash command <code>/cap-nhat-graph</code> (module 7) — từ nay cập nhật đồ thị là một lệnh.</p>
<p><strong>Cowork:</strong> cùng các bước qua hội thoại với thư mục dự án; hoặc bậc A thuần túy — dùng Obsidian trỏ vào notes/, thêm wiki-link khi viết, graph view tự hiện. Đặt scheduled task hàng tuần: "trích xuất triple từ ghi chú mới trong tuần, trình tôi duyệt mục cần xác nhận".</p>
<div class="callout"><strong>Kỷ luật quan trọng nhất</strong> — đồ thị chết vì rác nhanh hơn vì thiếu: thà 200 cạnh đã duyệt còn hơn 2000 cạnh AI tự đổ vào. Giữ danh sách quan hệ đóng (5-10 loại), mọi cạnh có nguồn, và mọi thực thể mới qua tay bạn xác nhận. Chất lượng đồ thị là chất lượng câu trả lời.</div>`
      },
      {
        title: "6. Hướng dẫn thực hành: mini knowledge graph đầu tiên",
        body: `
<p>Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Chọn 10-20 tài liệu/ghi chú thật có mật độ quan hệ cao (ghi chú họp, hồ sơ khách, mô tả dự án). Định nghĩa trước: 5-10 loại quan hệ chuẩn + danh sách thực thể ban đầu (entities.md).</li>
<li><strong>Bước 2.</strong> Chạy trích xuất bằng prompt mục 3. Duyệt mục CẦN XÁC NHẬN — để ý các ca entity resolution (một thực thể nhiều tên).</li>
<li><strong>Bước 3.</strong> Nạp vào bảng edges (hoặc wiki-link nếu chọn bậc A), sinh sơ đồ Mermaid. Nhìn sơ đồ 5 phút: cụm cô lập nào, node trung tâm nào làm bạn ngạc nhiên?</li>
<li><strong>Bước 4.</strong> Nghiệm thu bằng 3 câu hỏi đa bước mà tìm từ khóa thường không trả lời được — ghi cả câu hỏi, đường đi trên đồ thị, và câu trả lời.</li>
<li><strong>Bước 5.</strong> Dán bảng triple (rút gọn) + sơ đồ + 3 câu hỏi-đáp vào ô bài làm, tick checklist, copy prompt phản biện.</li>
</ul>
<div class="callout"><strong>Lời kết cho chặng dữ liệu (M11-M12):</strong> giờ bạn có đủ ba tầng của một hệ thống làm việc AI-native hoàn chỉnh — <em>quy trình</em> (workflow, skill), <em>dữ liệu</em> (data layer, second brain) và <em>quan hệ</em> (knowledge graph). Skill làm việc, second brain ghi nhớ, đồ thị kết nối. Cả ba lớn dần theo thời gian — và khác với công cụ AI bạn thuê, cả ba là tài sản bạn sở hữu.</div>`
      }
    ]
  },

  m13: {
    readingTime: "14 phút đọc",
    sections: [
      {
        title: "1. Bước vào Master: từ một trợ lý sang cả một đội",
        body: `
<p>Chào mừng đến track Master. Điều kiện vào: bạn đã đi hết 12 module — biết thiết kế context, xây workflow, đóng gói skill, và có hệ thống dữ liệu riêng. Track này trả lời câu hỏi tiếp theo: <strong>chuyện gì xảy ra khi không phải một AI, mà cả một đội agent làm việc cho bạn?</strong></p>
<p>Công cụ của chặng này là <strong>engineering kit</strong> — bộ quy trình + agent + skill + hook cài vào Claude Code (tiêu biểu: ClaudeKit Engineer; các kit kiểu OpenClaw tương tự về nguyên lý). Nếu Claude Code là một nhân viên giỏi, kit biến nó thành cả một đội: planner nghĩ kiến trúc, developer code, tester kiểm thử, reviewer soi lỗi, docs-manager cập nhật tài liệu. Một kit điển hình có 13 agents, 88 skills và các slash command như <code>/ck:plan</code>, <code>/ck:cook</code> chạy cả quy trình bằng một dòng.</p>
<p>Ba khối lego của kit — và bạn sẽ nhận ra chúng là phiên bản công nghiệp hóa của những gì bạn đã học:</p>
<ul>
<li><strong>Skill</strong> — hộp kỹ năng theo việc (lập plan, fix bug, thiết kế UI, tích hợp payment...) — chính là Agent Skill của module 8, viết bởi người khác, ở quy mô 88 cái.</li>
<li><strong>Agent</strong> — vai trò chuyên môn được điều phối tự động — là human-in-the-loop workflow của module 7, nhưng "human" ở các chốt trung gian được thay bằng agent chuyên trách, còn bạn giữ chốt cuối.</li>
<li><strong>Hook</strong> — lan can an toàn tự động: chặn file nhạy cảm, nhắc quy tắc, cảnh báo — là error handling của module 7 viết thành code, không phải dặn miệng.</li>
</ul>
<div class="callout callout-warning"><strong>Định vị đúng ngay từ đầu:</strong> đừng xem kit như nút "tự code hết". Nó không thay bạn suy nghĩ sản phẩm — nó biến ý tưởng mơ hồ thành các bước rõ ràng để bạn duyệt. Người dùng kit giỏi không phải người gõ ít nhất, mà là người <em>không cho phép quy trình đi tắt</em>.</div>`
      },
      {
        title: "2. Chuẩn bị an toàn: sân tập trước, sản phẩm thật sau",
        body: `
<p>Quy tắc số một của tuần đầu: <strong>tập trong project thử, không cài thẳng vào sản phẩm thật</strong> khi chưa quen cách kit tạo plan, sửa file và hỏi duyệt.</p>
<pre><code># 1. Tạo sân tập
mkdir claudekit-practice && cd claudekit-practice && git init

# 2. Cài kit CLI (một lần) và init kit vào project
npm install -g claudekit-cli
ck init --kit engineer      # hoặc: ck new --dir du-an --kit engineer

# 3. Mở Claude Code trong thư mục đó
claude
# thử: /ck:ask "Giải thích project này và tôi có thể dùng lệnh nào?"</code></pre>
<p>Hai thiết lập nên làm ngay:</p>
<ul>
<li><strong>Chỉnh mức giải thích:</strong> kit có 6 output styles từ <code>coding-level-0-eli5</code> (giải thích như cho trẻ 5 tuổi) đến <code>level-5</code> (gần như chỉ diff và quyết định). Mới bắt đầu → <code>/output-style coding-level-0-eli5</code>; tăng dần khi quen. Đây là núm chỉnh "AI nói chuyện vừa trình mình" — dùng nó thay vì chịu đựng.</li>
<li><strong>Giữ permission prompt bật:</strong> bạn sẽ thấy trên mạng lệnh <code>--dangerously-skip-permissions</code> (YOLO mode). Đừng dùng khi chưa quen — mỗi câu hỏi xin quyền chính là điểm human-in-the-loop cuối cùng trước khi AI sửa file, chạy lệnh mạnh hay đụng secrets. Dân kinh nghiệm chỉ bật trong worktree cô lập không có credentials thật (module 15).</li>
</ul>
<p>Và ba luật an toàn bất di bất dịch: <strong>không paste secret vào chat</strong> (API key, password để trong file env); <strong>luôn đọc plan trước khi cook</strong> (không hiểu thì bắt giải thích bằng ngôn ngữ đơn giản); <strong>commit nhỏ, thường xuyên</strong> — mỗi bước ổn định một lần "lưu game", hỏng còn đường quay về. AI làm sai ý? Đừng xóa tay — nói "hoàn tác thay đổi vừa rồi", nó dùng git khôi phục an toàn.</p>`
      },
      {
        title: "3. Vòng lặp chuẩn và bảng routing 10 lệnh",
        body: `
<p>Sai cách kinh điển: "làm cho tôi app này" rồi để AI đoán toàn bộ — ra code trông chạy nhưng sai nhu cầu, khó sửa. Đúng cách là vòng lặp nhỏ: <strong>Ask để hiểu → Plan để chia việc → Cook để làm → Test để kiểm → Review để soi → Git/Ship khi ổn</strong>. Nhận ra chưa? Đây chính là Research-Plan-Execute-Verify của module 4, được kit đóng thành lệnh.</p>
<p>Không cần nhớ 88 skills — 10 lệnh này phủ 80% công việc:</p>
<pre><code>Lệnh              Dùng khi                          Rủi ro
/ck:ask           Hỏi kiến trúc, so sánh phương án   Thấp (không sửa file)
/ck:scout         Tìm hiểu codebase, file liên quan  Thấp
/ck:plan          Lập kế hoạch trước tính năng       Thấp
/ck:cook          Implement theo yêu cầu/plan        Trung bình
/ck:fix           Sửa bug, lỗi test, lỗi build       Trung bình
/ck:test          Chạy test, kiểm tra UI, build      Thấp
/ck:code-review   Soi code trước commit/PR           Thấp
/ck:docs          Tạo/cập nhật tài liệu dự án        Thấp
/ck:git           Commit, push, tạo PR               Cao nếu push
/ck:ship          Pipeline chốt: test+review+PR      Cao</code></pre>
<p>Quy tắc chọn nhanh: <strong>việc to thì Plan trước, việc nhỏ thì Cook luôn</strong> (<code>/ck:cook --fast</code> cho việc rõ scope). Ngoài lệnh, chat thường vẫn hoạt động: "file này để làm gì?", "giải thích phần vừa làm", "hoàn tác thay đổi vừa rồi". Và <code>/ck:watzup</code> — "dạo này dự án tới đâu rồi?" — chạy cuối mỗi buổi để hôm sau vào không mất mạch.</p>`
      },
      {
        title: "4. Lộ trình 7 ngày làm quen",
        body: `
<p>Mỗi ngày 30-60 phút, mục tiêu là nắm workflow chứ không phải học hết kit:</p>
<ul>
<li><strong>Ngày 1 — Làm quen không sửa file:</strong> <code>/ck:ask "Giải thích project này cho người không biết code"</code>. Chỉ hỏi, chưa đụng gì.</li>
<li><strong>Ngày 2 — Scout:</strong> <code>/ck:scout "project này có những phần chính nào?"</code> — thói quen tìm hiểu trước khi nhờ sửa (Research trước Execute).</li>
<li><strong>Ngày 3 — Plan nhỏ:</strong> <code>/ck:plan --fast "thêm trang giới thiệu đơn giản"</code>. Đọc kỹ plan nó viết ra file trong <code>plans/</code>.</li>
<li><strong>Ngày 4 — Cook từ plan:</strong> <code>/ck:cook plans/.../plan.md</code>. Nó hỏi duyệt gì, đọc rồi mới đồng ý.</li>
<li><strong>Ngày 5 — Test và review:</strong> <code>/ck:test</code> + <code>/ck:code-review --pending</code>. Không cần hiểu hết output — cần biết pass/fail và lỗi nằm đâu.</li>
<li><strong>Ngày 6 — Tập fix:</strong> tạo/chọn một lỗi nhỏ, <code>/ck:fix "nút gửi form không hoạt động"</code> — để thấy quy trình bắt buộc tìm nguyên nhân trước khi vá.</li>
<li><strong>Ngày 7 — Git và tổng kết:</strong> <code>/ck:git cm</code> tạo commit sạch + <code>/ck:journal</code> tổng kết tuần.</li>
</ul>
<p>Mẹo prompt xuyên suốt (đúc từ guide non-tech): <strong>mô tả kết quả, đừng mô tả cách làm</strong> ("khách bấm nút là nhận email xác nhận" thay vì đoán thuật ngữ); <strong>một lần một việc</strong>; <strong>cho ví dụ tham khảo</strong> ("giống trang abc.com nhưng màu khác" đáng giá hơn 10 dòng mô tả); <strong>nghiệm thu bằng mắt</strong> — mở sản phẩm xem thật (<code>/ck:preview</code>), đừng chỉ tin báo cáo.</p>`
      },
      {
        title: "5. Xử lý sự cố thường gặp và checklist tin kết quả",
        body: `
<p>Các tình huống tuần đầu hay gặp:</p>
<ul>
<li><strong>Không thấy lệnh /ck:</strong> → chưa <code>ck init --kit engineer</code> trong đúng project, hoặc chưa mở lại Claude Code.</li>
<li><strong>AI hỏi quá nhiều</strong> → prompt thiếu acceptance criteria: bổ sung muốn output gì, không đụng phần nào, tiêu chí pass.</li>
<li><strong>AI sửa quá rộng</strong> → dừng và ra lệnh: "chỉ sửa các file trong plan, không refactor ngoài scope".</li>
<li><strong>Hội thoại dài, AI 'lú'</strong> → <code>/compact</code> nén hội thoại, hoặc <code>/ck:watzup</code> ghi trạng thái rồi mở phiên mới (kinh tế context — học sâu ở m15).</li>
<li><strong>Plan quá dài không đọc nổi</strong> → yêu cầu bản tóm tắt: mục tiêu, file sẽ sửa, rủi ro, thứ cần approve.</li>
</ul>
<p>Và checklist 3 cổng trước khi tin bất kỳ kết quả nào — dán lên màn hình được:</p>
<ul>
<li><strong>Trước khi code:</strong> plan có mục tiêu, file liên quan, tiêu chí xong, rủi ro và đường rollback chưa?</li>
<li><strong>Sau khi code:</strong> đã chạy test/build chưa? Nếu skip test, rủi ro có được ghi rõ không?</li>
<li><strong>Trước khi push:</strong> có secrets trong commit không (.env, key, token)?</li>
</ul>
<div class="callout"><strong>Nguyên tắc vàng:</strong> nếu bạn không hiểu AI sắp làm gì — chưa approve. Bắt nó giải thích bằng ngôn ngữ sản phẩm trước, rồi mới cho làm.</div>`
      },
      {
        title: "6. Hướng dẫn thực hành: 7 ngày đầu tiên với kit",
        body: `
<p>Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Dựng sân tập theo mục 2 (project riêng + git + kit + output-style phù hợp trình độ của bạn).</li>
<li><strong>Bước 2.</strong> Đi lộ trình 7 ngày (mục 4). Sản phẩm cụ thể gợi ý: landing page cho chính Agent Skill bạn làm ở module 10 — vừa tập kit vừa được tài sản thật.</li>
<li><strong>Bước 3.</strong> Mỗi ngày ghi nhật ký 3 dòng: hôm nay làm gì / AI làm tốt gì / chỗ nào mình phải can thiệp và vì sao.</li>
<li><strong>Bước 4.</strong> Ngày 7, tự chấm bằng checklist 3 cổng cho sản phẩm cuối. Dán nhật ký + link sản phẩm vào ô bài làm, tick checklist, copy prompt phản biện.</li>
</ul>
<div class="callout"><strong>Nhìn về m14:</strong> tuần này bạn học lái xe trong sân. Module sau học lái trên đường thật: plan sâu nhiều phương án, TDD trên code có người dùng, và nghi thức ship không cho phép đi tắt.</div>`
      }
    ]
  },

  m14: {
    readingTime: "9 phút đọc",
    sections: [
      {
        title: "1. Ở trình độ này, đòn bẩy nằm ở quy trình",
        body: `
<p>Câu chốt của cả guide advanced đáng đóng khung: <em>"Đòn bẩy không còn ở prompt hay — mà ở quy trình bạn ép agent đi qua: plan có red-team, cook có TDD, ship có review + security-scan. Kit đã dựng sẵn đường ray; việc của bạn là không cho phép đi tắt."</em></p>
<p>Trước hết, thuộc <strong>routing map</strong> — biết kit sẽ tự đi đường nào để đoán được nó làm gì:</p>
<pre><code>Ý định                    → Chuỗi lệnh
Feature mới               → plan → cook → test → code-review
Chạy plan có sẵn          → cook &lt;plan-path&gt;
Việc nhỏ, rõ scope        → cook --fast
Bug / CI đỏ               → fix (nhiều lỗi độc lập: fix --parallel)
Chưa rõ vấn đề            → scout → debug → brainstorm → plan
Ship branch đã xong       → ship
Cập nhật tài liệu         → docs update</code></pre>
<p>Một quy tắc handoff quan trọng: <strong>domain skill trước, workflow skill sau</strong>. Làm feature React thì kit load <code>frontend-development</code> lấy pattern đúng, rồi mới execute qua plan/cook. Đừng ép cook làm việc của domain skill — giống như đừng bắt thợ mộc tự nghĩ ra bản vẽ kiến trúc.</p>`
      },
      {
        title: "2. Plan chuyên sâu: flags quyết định chất lượng",
        body: `
<p>Plan không phải một lệnh — nó là một họ chế độ, chọn theo độ phức tạp và cái giá của sai lầm:</p>
<ul>
<li><strong>--fast:</strong> scope rõ, plan mỏng, đỡ tốn token. Mặc định cho việc thường ngày.</li>
<li><strong>--deep / --hard:</strong> refactor lớn, thay đổi kiến trúc, nhiều unknowns — nghiên cứu kỹ trước khi chốt.</li>
<li><strong>--two:</strong> ra <em>hai phương án cạnh tranh</em> để bạn chọn. Rất đáng dùng cho quyết định kiến trúc — nó chống lại thói quen nguy hiểm nhất: nuốt luôn phương án đầu tiên AI đưa ra.</li>
<li><strong>--tdd:</strong> plan theo red-green-refactor, test viết trước, mỗi phase gắn với test.</li>
<li><strong>--parallel:</strong> chia phase cho nhiều agent/worktree chạy song song (dùng ở m15).</li>
</ul>
<p>Và vũ khí ít người dùng nhất mà đáng nhất: <strong><code>/ck:plan red-team</code></strong> — cho agent tấn công chính plan của nó để tìm lỗ hổng trước khi cook. Đây là Verify của module 4 áp vào tầng kế hoạch: sửa lỗ hổng trên giấy rẻ hơn hàng chục lần sửa trong code.</p>
<pre><code># Nhịp chuẩn cho quyết định lớn:
/ck:plan --deep --two "tách notification pipeline khỏi monolith,
giữ nguyên contract với mobile app"
# đọc 2 phương án → chọn → /ck:plan red-team → duyệt → /ck:cook plans/&lt;plan&gt;/plan.md</code></pre>
<p>Plan artifacts nằm trong <code>plans/</code> theo template chuẩn (feature/bugfix/refactor); skill <code>plans-kanban</code> render toàn bộ thành bảng kanban để track. Lưu ý kỹ thuật: kit dùng CLI để quản lý trạng thái plan — đừng sửa tay cấu trúc file plan.</p>`
      },
      {
        title: "3. Cook TDD và Fix phân cấp",
        body: `
<p><strong>Cook TDD</strong> (<code>/ck:cook "..." --tdd</code>) ép thứ tự: viết test fail → implement cho pass → refactor. Chậm hơn ~30% — và là <em>chế độ duy nhất nên dùng khi đụng vào code có người dùng thật</em>. Logic của giao dịch: 30% thời gian đổi lấy bảo hiểm chống hồi quy trên thứ đang nuôi khách hàng của bạn. Với code nháp, prototype — cook thường là đủ.</p>
<p><strong>Fix có ba cấp</strong>, chọn theo độ hiểu vấn đề:</p>
<ul>
<li><code>/ck:fix "lỗi..."</code> — mặc định. Quy tắc vàng khi dùng: <strong>dán nguyên văn lỗi/log/stacktrace</strong>, đừng chỉ nói "nó không chạy". Kit bắt buộc tìm root cause trước khi vá — đừng giục nó "sửa nhanh đi".</li>
<li><code>/ck:fix --parallel</code> — nhiều lỗi <em>độc lập</em> (VD: 3 test suite đỏ sau merge): mỗi agent một lỗi, chạy song song.</li>
<li><code>/ck:debug</code> — chưa reproduce được, cần truy vết trước khi nói chuyện sửa.</li>
</ul>
<div class="callout"><strong>Mẫu prompt fix chuẩn:</strong> <code>/ck:fix "Khi bấm nút checkout thì lỗi: [dán nguyên văn]. Hãy tìm root cause trước, không sửa đoán."</code> — nửa sau câu quan trọng ngang nửa đầu.</div>`
      },
      {
        title: "4. Nghi thức ship: không cho phép đi tắt",
        body: `
<p><code>/ck:ship</code> gom: verify, changelog, commit message chuẩn, chuẩn bị PR — và chỉ được chạy khi implementation + test + review đã xong. Nghi thức đầy đủ cho một feature quan trọng:</p>
<pre><code>/ck:plan --tdd "thêm subscription tier Pro: gate feature,
trang upgrade, webhook Stripe"
# duyệt plan → /ck:plan red-team → duyệt lại
/ck:cook plans/&lt;plan&gt;/plan.md
/ck:test
/ck:security-scan      # chạm auth/payment/input → BẮT BUỘC
/ck:code-review
/ck:ship</code></pre>
<p>Trong đó <code>/ck:security-scan</code> là bước người tự học hay bỏ nhất — quy tắc đơn giản: thay đổi chạm <strong>auth, payment, hoặc input người dùng</strong> thì scan là bắt buộc, không phải tùy chọn.</p>
<p>Hai use case khẩn cấp đáng thuộc lòng: <strong>CI đỏ trước deadline</strong> → <code>/ck:fix --parallel</code> với log đính kèm, mỗi suite một agent, xong <code>/ck:test</code> xác nhận toàn bộ xanh. <strong>Nhận codebase lạ</strong> (freelance/OSS) → <code>/ck:scout</code> map kiến trúc + nợ kỹ thuật, rồi <code>/ck:docs</code> sinh codebase-summary làm nền cho mọi session sau — đầu tư 30 phút đầu tiết kiệm hàng giờ mỗi phiên về sau.</p>`
      },
      {
        title: "5. Hướng dẫn thực hành: một feature qua pipeline đầy đủ",
        body: `
<p>Trong <strong>Xưởng thực hành</strong> — chọn một tính năng thật, đủ quan trọng để xứng pipeline (nếu có dự án kết nối course-mentor, lấy việc "đang cần" của dự án đó):</p>
<ul>
<li><strong>Bước 1.</strong> <code>/ck:plan --two</code> — đọc cả hai phương án, ghi lại 3 dòng: khác nhau chỗ nào, chọn cái nào, vì sao.</li>
<li><strong>Bước 2.</strong> <code>/ck:plan red-team</code> trên phương án đã chọn — ghi lại lỗ hổng nó tìm ra và bạn sửa gì trong plan.</li>
<li><strong>Bước 3.</strong> <code>/ck:cook --tdd</code> theo plan. Chụp/ghi lại khoảnh khắc test đỏ trước, xanh sau — đó là bằng chứng TDD thật.</li>
<li><strong>Bước 4.</strong> Chạy đủ nghi thức: test → (security-scan nếu chạm auth/payment/input) → code-review → ship.</li>
<li><strong>Bước 5.</strong> Dán vào ô bài làm: so sánh 2 phương án, kết quả red-team, và nhật ký pipeline. Tick checklist, copy prompt phản biện.</li>
</ul>
<div class="callout"><strong>Thước đo thành công của module:</strong> không phải feature chạy được — mà là bạn đã đi hết đường ray không rẽ tắt lần nào, và biết chính xác vì sao từng trạm tồn tại.</div>`
      }
    ]
  },

  m15: {
    readingTime: "10 phút đọc",
    sections: [
      {
        title: "1. Đỉnh của lộ trình: bạn là người điều phối",
        body: `
<p>Module cuối cùng của cả chương trình. Ở m13 bạn học lái một đội qua đường ray có sẵn; ở đây bạn học ba việc chỉ người điều phối mới làm: <strong>chạy nhiều luồng song song</strong>, <strong>dạy kit theo cách của mình</strong>, và <strong>quản trị chi phí context như quản trị ngân sách</strong>.</p>
<p>Trước tiên, biết đội hình trong tay: kit có 13 subagents — planner, fullstack-developer, tester, code-reviewer, code-simplifier, debugger, git-manager, docs-manager, researcher, project-manager, brainstormer, ui-ux-designer, journal-writer. Bình thường kit tự điều phối; trình master là bạn <em>chỉ định</em> đội hình khi cần:</p>
<pre><code>/ck:team implement "migrate REST sang tRPC cho module billing" --devs 3 --reviewers 1</code></pre>
<p>Điều kiện dùng team — thuộc lòng vì sai là đốt token: <strong>nên</strong> khi task chia được thành mảnh ít giao nhau, mỗi teammate một module/boundary rõ với tiêu chí hoàn thành đo được. <strong>Không nên</strong> với task dưới 1 giờ hoặc task cần một dòng suy luận liền mạch — team lúc đó chỉ tốn token và sinh conflict. Orchestration luôn có "thuế": nhiều agent = nhiều context trùng lặp = chi phí nhân lên, chỉ đáng khi độ song song thật sự tồn tại trong bản chất công việc.</p>`
      },
      {
        title: "2. Worktree: song song thật sự cho solo-builder",
        body: `
<p>Git worktree = nhiều bản working copy của cùng một repo. Ghép với kit: <strong>mỗi worktree một session Claude, mỗi session một feature</strong> — hai luồng không đụng nhau về file, về context, về lịch sử.</p>
<pre><code>/ck:worktree "feature-payment-momo"
# mở terminal mới → cd vào worktree → claude
# → /ck:cook plans/payment-momo/plan.md
# terminal cũ vẫn đang cook feature khác — không đụng nhau</code></pre>
<p>Một ngày làm việc kiểu master cho solo-builder: <strong>sáng</strong> <code>/ck:plan --parallel</code> chia việc thành 2-3 phase độc lập → tạo worktree tương ứng → chạy song song. <strong>Chiều</strong> merge từng branch, <code>/ck:review-pr</code> chéo trước khi merge (luồng A review luồng B — reviewer không chấm bài của chính mình, đúng bài học module 9). Đây cũng là nơi duy nhất YOLO mode chấp nhận được: worktree cô lập, không credentials thật, hỏng thì xóa worktree làm lại.</p>
<p><strong>Và /ck:loop — để agent tự tối ưu qua đêm:</strong> loop chạy N vòng chống lại một <em>metric cơ học</em>: đo → thử thay đổi → đo lại → keep/discard dựa trên git.</p>
<pre><code>/ck:loop "giảm bundle size của web app, metric: npm run build
&& du -sk dist, chạy 10 iterations, không được làm fail test suite"</code></pre>
<p>Metric phù hợp: coverage %, bundle size, thời gian build, Lighthouse score, số lỗi type. Metric KHÔNG phù hợp: "code đẹp hơn", "UX tốt hơn" — loop với metric cảm tính sẽ tự lừa chính nó, y hệt bài học "AI tự chấm điểm mình là anti-pattern" của module 9. Chạy loop trong worktree riêng; sáng dậy đọc journal (agent journal-writer ghi lại quá trình) và cherry-pick những thay đổi được keep.</p>`
      },
      {
        title: "3. Dạy kit theo cách của bạn: skill riêng, hook, MCP",
        body: `
<p>Kit mạnh nhất khi nó nói giọng của team bạn. Bốn tầng tùy biến, từ dễ đến sâu:</p>
<ul>
<li><strong>Skill riêng</strong> — đây là lúc kỹ năng module 8 gặp quy mô công nghiệp: <code>/ck:skill-creator "tạo skill 'convention-cua-team' từ file docs/code-standards.md: quy tắc đặt tên, cấu trúc folder, format commit"</code>. Skill riêng đặt trong <code>.claude/skills/</code> của <em>project</em> — quy tắc của kit: không sửa global (~/.claude/skills) trừ khi chủ đích, giữ kit portable theo repo.</li>
<li><strong>Hook/guard riêng</strong> — muốn chặn commit thẳng vào main, cảnh báo khi sửa file config? Thêm hook trong settings, <em>đừng dặn miệng trong prompt</em> — quy tắc dặn miệng bị quên, hook thì không. (Error handling m7 dạng code.)</li>
<li><strong>MCP servers</strong> — <code>cp claude/.mcp.json.example .mcp.json</code> rồi khai báo database, browser, API nội bộ. Đây là chỗ nối kit với data layer m11 của bạn: agent đọc thẳng SQLite/second brain khi làm việc.</li>
<li><strong>Output style</strong> — nâng dần lên <code>coding-level-3-senior</code>/<code>4-lead</code>: bớt giải thích, nhiều trade-off, review thẳng tay.</li>
</ul>
<p>Chi tiết kỹ thuật đáng nhớ: script Python của skill chạy bằng venv của kit (<code>.claude/skills/.venv/bin/python3</code>), không phải python hệ thống. Và trước khi tùy biến bất cứ gì, đọc 3 file theo thứ tự: <code>rules/CLAUDE.md</code> → <code>workflow-routing.md</code> → <code>SKILLS.md</code> — hiểu routing rồi mới override, không thì kit sẽ "đánh nhau" với instruction của bạn.</p>`
      },
      {
        title: "4. Kinh tế context: 5 nguyên tắc quản trị chi phí",
        body: `
<p>Ở quy mô nhiều agent + session dài, token là ngân sách thật. Năm nguyên tắc — mỗi cái đều là bài học cũ của khóa mặc áo mới:</p>
<ul>
<li><strong>Session ngắn, mục tiêu đơn.</strong> Xong một mạch việc → <code>/ck:watzup</code> ghi trạng thái → phiên mới. Đừng nuôi session 200k token — AI 'lú' và bạn trả tiền cho sự lú đó.</li>
<li><strong>Docs là bộ nhớ dài hạn.</strong> <code>docs/codebase-summary.md</code> cập nhật tốt giúp mọi session sau khởi động rẻ hơn nhiều lần so với để agent tự khám phá lại repo. (Second brain m11 áp vào codebase.)</li>
<li><strong>Chọn flag theo giá.</strong> --fast cho việc rõ; --deep/team/parallel chỉ khi độ phức tạp xứng đáng.</li>
<li><strong>Plan là tài sản tái sử dụng.</strong> Plan tốt chạy lại được ở session khác (<code>/ck:cook &lt;plan-path&gt;</code>); đầu tư vào plan lời hơn đầu tư vào prompt dài. (Prompt → workflow → skill của m8, thêm nấc: plan.)</li>
<li><strong>Verify bằng máy, không bằng niềm tin.</strong> Mọi claim "done" phải qua <code>/ck:test</code> hoặc web-testing; agent tự chấm điểm mình là anti-pattern.</li>
</ul>`
      },
      {
        title: "5. Hướng dẫn thực hành: một ngày ship kiểu master",
        body: `
<p>Bài thực hành tốt nghiệp của cả chương trình. Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Chọn 2 việc độc lập thật sự trong dự án của bạn (không đụng file nhau). Sáng: <code>/ck:plan --parallel</code> → tạo 2 worktree → mỗi worktree một session cook.</li>
<li><strong>Bước 2.</strong> Chiều: <code>/ck:review-pr</code> chéo (luồng A review luồng B) → merge lần lượt → test toàn bộ.</li>
<li><strong>Bước 3.</strong> Tạo 1 skill riêng bằng skill-creator từ convention/tài liệu thật của bạn, đặt trong project. Chạy phép thử kích hoạt (m8).</li>
<li><strong>Bước 4.</strong> Thử 1 loop với metric cơ học (bundle size, coverage...) trong worktree riêng, 5-10 iterations. Ghi lại: keep gì, discard gì.</li>
<li><strong>Bước 5.</strong> Dán vào ô bài làm: nhật ký ngày song song, skill riêng, kết quả loop, và 3 nguyên tắc kinh tế context bạn đã áp dụng kèm khác biệt nhận thấy. Tick checklist, copy prompt phản biện.</li>
</ul>
<div class="callout"><strong>Lời kết chặng engineering kit:</strong> nhìn lại quãng đường — m1 bạn học phân loại việc cho MỘT trợ lý; m15 bạn điều phối một ĐỘI agent chạy song song qua đêm, với skill riêng mang convention của bạn và hệ dữ liệu bạn sở hữu. Hai module cuối (m16-m17) đưa mọi thứ về "nhà": một trợ lý cá nhân sống trên máy bạn, trực chiến 24/7 trong chính app chat bạn dùng hằng ngày.</div>`
      }
    ]
  },

  m16: {
    readingTime: "12 phút đọc",
    sections: [
      {
        title: "1. OpenClaw là gì — và khác gì mọi thứ bạn đã học",
        body: `
<p>Đến giờ, mọi AI bạn làm việc cùng đều sống trong <em>cửa sổ của nó</em>: trang chat, Cowork, terminal. OpenClaw đảo ngược quan hệ đó: <strong>trợ lý sống ngay trên máy của bạn, và bạn nhắn cho nó qua app chat bạn vẫn dùng hằng ngày</strong> — Telegram, Slack, WhatsApp, iMessage — như nhắn cho một người bạn. Nó trả lời, và quan trọng hơn: nó làm được việc thật — tìm thông tin, đọc/ghi ghi chú, lên lịch nhắc, chạy các kỹ năng bạn cài (54 skill sẵn, 20+ kênh chat, mã nguồn mở MIT).</p>
<p>Ba khối lego duy nhất cần nhớ ngày đầu:</p>
<ul>
<li><strong>Gateway</strong> — "tổng đài" chạy nền trên máy bạn: nhận tin, định tuyến, quản lý token/bảo mật. Bật một lần rồi để đó.</li>
<li><strong>Channel</strong> — app chat bạn dùng để nói chuyện với trợ lý.</li>
<li><strong>Model</strong> — "bộ não" AI (Claude, GPT, Gemini, model local...). Cần một cái, cắm-rút được.</li>
</ul>
<p>Ý tưởng cốt lõi đáng khắc ghi: <em>"Gateway chỉ là control plane — sản phẩm chính là trợ lý."</em> Mọi thứ khác (skill, plugin, multi-agent) là chi tiết của module sau.</p>
<div class="callout"><strong>Vị trí trong bức tranh lớn:</strong> engineering kit (m13-m15) là <em>xưởng</em> — nơi bạn đến làm việc. OpenClaw là <em>trợ lý riêng</em> — nó ở cạnh bạn mọi lúc, và (spoiler m17) có thể điều phối cả cái xưởng kia thay bạn.</div>`
      },
      {
        title: "2. Cài đặt và chạy lần đầu (~15 phút)",
        body: `
<p><strong>Chuẩn bị 3 thứ:</strong> Node.js 18+ (kiểm tra <code>node --version</code>); một API key cho bộ não (nhớ đặt <strong>spending limit</strong> trong tài khoản nhà cung cấp — API tính phí theo lượng dùng); và một app chat — dễ nhất là Telegram.</p>
<pre><code># Cài (1 lệnh, bản dựng sẵn)
npm install -g openclaw@latest
openclaw --version        # hiện version là thành công

# Thiết lập lần đầu — để nó hỏi bạn từng bước
openclaw onboard</code></pre>
<p><strong>Ba cách nói chuyện</strong>, chọn theo tình huống: <code>openclaw chat</code> — chat ngay trong terminal (thử nhanh nhất); <code>openclaw gateway run</code> + <code>openclaw dashboard</code> ở cửa sổ khác — tổng đài + giao diện web tại 127.0.0.1:18789; hoặc qua kênh chat thật:</p>
<pre><code># Kết nối Telegram: tìm @BotFather → /newbot → nhận token
openclaw channels add telegram    # dán token khi được hỏi
# Mở Telegram, nhắn cho bot — lần đầu cần pairing xác nhận đúng là bạn</code></pre>
<p><strong>Và lệnh quan trọng nhất cần thuộc:</strong> <code>openclaw doctor</code> — "bác sĩ" tự quét toàn bộ cấu hình, chỉ ra chính xác thiếu/sai gì và gợi ý lệnh sửa; <code>doctor --fix</code> để nó tự sửa luôn. Kèm theo: <code>status</code> (tổng quan gateway/kênh/model) và <code>logs --follow</code> (nhật ký trực tiếp). Ba lệnh này giải quyết 90% trục trặc của người mới — trước khi nghĩ đến gỡ ra cài lại.</p>`
      },
      {
        title: "3. Trí nhớ minh bạch: nó nhớ bằng file, không phép thuật",
        body: `
<p>Điều quan trọng nhất người mới cần "ngộ" ra về OpenClaw: <strong>trợ lý ghi nhớ bằng cách viết ra các file Markdown trên đĩa — không có trí nhớ ẩn</strong>. Model chỉ nhớ những gì được lưu vào file. Mở file ra là thấy nó nhớ gì, và sửa được:</p>
<ul>
<li><strong>MEMORY.md / USER.md</strong> — sự thật dài hạn về công việc và về bạn.</li>
<li><strong>SOUL.md</strong> — "bản tính cách": giọng điệu, cách cư xử. Trợ lý nói nhạt? Sửa file này, cảm nhận thay đổi ngay.</li>
<li><strong>AGENTS.md</strong> — định hình hành vi agent, tương tự CLAUDE.md bạn đã quen ở m6.</li>
<li><strong>Workspace</strong> — "bàn làm việc" riêng: thư mục nơi nó thao tác file.</li>
</ul>
<p>Bạn nhận ra mô hình này chứ? Đây chính là <strong>second brain của m11 áp cho chính trợ lý</strong>: tri thức nằm trong file bạn sở hữu — review được, sửa được, backup được, version-control được. Một hệ quả thực dụng: hãy coi persona như code — đưa SOUL.md, AGENTS.md (đã lọc secret) vào git.</p>
<p>Khi hội thoại dài và trợ lý bắt đầu "quên": <code>/compact</code> tóm gọn các lượt cũ (toàn bộ lịch sử vẫn trên đĩa — compaction chỉ đổi <em>thứ model nhìn thấy</em>), và <code>openclaw sessions</code> để quản lý phiên. Đúng bài kinh tế context của m15.</p>`
      },
      {
        title: "4. Bản đồ 4 khu tài liệu: để nhu cầu dẫn đường",
        body: `
<p>OpenClaw kèm một "cuốn sách" trong <code>docs/</code> chia 4 khu — mỗi khu trả lời một câu hỏi lớn. Đừng đọc tuần tự; mỗi file có dòng <code>read_when</code> nói rõ khi nào nên đọc. Bản đồ:</p>
<ul>
<li><strong>concepts — "Nó nghĩ thế nào?"</strong>: agent, workspace, soul, memory, context/compaction. Lộ trình 30 phút: <code>agent.md</code> (một agent = một bộ não có bàn làm việc riêng) → <code>memory.md</code> (nhớ bằng file, không phép thuật) → <code>soul.md</code> (thử sửa tính cách).</li>
<li><strong>automation — "Làm sao nó tự chạy?"</strong>: cron, heartbeat, standing orders, hooks, webhook. File <code>index.md</code> có sẵn bảng quyết định nhanh — đọc nó đầu tiên. (Chi tiết ở m17.)</li>
<li><strong>plugins — "Làm sao thêm khả năng?"</strong>: hai nhóm người đọc — người <em>cài</em> (manage-plugins.md) và người <em>viết</em> (building-plugins.md + SDK). Cảnh báo in đậm: cài plugin từ ClawHub là chạy code người khác trên máy bạn — đọc permission requests trước khi bật.</li>
<li><strong>security — "Làm sao cho an toàn?"</strong>: THREAT-MODEL-ATLAS (bản đồ các lối tấn công), incident-response, network-proxy. Đọc tối thiểu 15 phút: lướt threat model phần đầu + nhớ incident-response ở đâu + <strong>chỉ mở gateway ra Internet sau khi đã đọc kỹ khu này</strong>.</li>
</ul>
<p>Rủi ro lớn nhất người mới hay bỏ qua — ghi lòng: <strong>prompt injection qua kênh chat</strong>. Ai đó gửi cho trợ lý một tin nhắn chứa "lệnh ẩn" để lừa nó làm điều xấu (gửi dữ liệu của bạn ra ngoài). Vì trợ lý có quyền thật (chạy lệnh, mở web, đọc chat), đây là mối nguy có thật — không phải lý thuyết.</p>`
      },
      {
        title: "5. Năm lá chắn an toàn — bật trước khi làm gì khác",
        body: `
<ul>
<li><strong>Chạy cục bộ trước</strong> (chỉ localhost). Đừng vội "phơi" gateway ra Internet — đó là việc của người đã đọc kỹ khu security.</li>
<li><strong>Luôn đặt token cho gateway</strong>, đừng để trống — OpenClaw sẽ nhắc bạn.</li>
<li><strong>Giữ API key bí mật:</strong> không chia sẻ file .env, không đưa lên GitHub (bạn đã có .gitignore từ m10 — áp dụng y hệt).</li>
<li><strong>Command owner chỉ là chính bạn:</strong> tách "được nhắn cho bot" khỏi "được chạy lệnh nguy hiểm".</li>
<li><strong>Không hiểu một lệnh sẽ làm gì → chưa chạy.</strong> Đọc --help hoặc hỏi chính trợ lý trước. (Nguyên tắc vàng của m13, trở lại lần thứ ba — vì nó đáng.)</li>
</ul>
<div class="callout callout-warning"><strong>Về chi phí:</strong> trợ lý chạy 24/7 qua API là chi phí thật chạy 24/7. Đặt spending limit ngay từ ngày đầu, và xem thói quen đo token ở m17 trước khi bật các tính năng nền.</div>`
      },
      {
        title: "6. Hướng dẫn thực hành: trợ lý đầu tiên của riêng bạn",
        body: `
<p>Trong <strong>Xưởng thực hành</strong>:</p>
<ul>
<li><strong>Bước 1.</strong> Chuẩn bị đủ 3 thứ (Node 18+, API key có spending limit, Telegram) rồi cài + <code>openclaw onboard</code>.</li>
<li><strong>Bước 2.</strong> Nói chuyện thử cả 3 cách: terminal chat → gateway + dashboard → kênh Telegram thật (kèm pairing).</li>
<li><strong>Bước 3.</strong> Mở các file trí nhớ, đọc hiểu, rồi chỉnh <code>SOUL.md</code>: đặt giọng điệu bạn muốn (VD: ngắn gọn, tiếng Việt, xưng hô theo ý bạn). Xác nhận tính cách đổi thật.</li>
<li><strong>Bước 4.</strong> Bật đủ 5 lá chắn an toàn (mục 5). Cố tình gây 1 trục trặc nhỏ (VD: sai config) rồi dùng <code>doctor</code> chẩn đoán và sửa — tập phản xạ "bác sĩ trước, cài lại sau".</li>
<li><strong>Bước 5.</strong> Dán vào ô bài làm: nhật ký thiết lập, SOUL.md đã chỉnh, và một đoạn hội thoại thật với trợ lý qua kênh chat. Tick checklist, copy prompt phản biện.</li>
</ul>
<div class="callout"><strong>Nhìn về m17:</strong> trợ lý của bạn giờ biết nói chuyện. Module cuối dạy nó: nhiều nhân cách cho nhiều ngữ cảnh, trí nhớ tự lớn khi "ngủ", tự làm việc lúc bạn vắng — và điều phối cả Claude Code từ trong Telegram.</div>`
      }
    ]
  },

  m17: {
    readingTime: "14 phút đọc",
    sections: [
      {
        title: "1. Từ chatbot lên hệ điều hành cá nhân",
        body: `
<p>Người mới dùng OpenClaw để hỏi-đáp. Dân vibeworking dùng nó như một <strong>runtime</strong>: nhiều agent chạy song song, bộ nhớ tự củng cố, tự chạy nền theo lịch/sự kiện, và điều phối cả các coding harness khác. Sáu trụ cột của module này: multi-agent, memory, automation, coding harness, mở rộng, security — tất cả xoay quanh một file cấu hình trung tâm <code>~/.openclaw/openclaw.json</code> (chỉnh trực tiếp hoặc qua <code>openclaw config set</code>).</p>
<p><strong>Multi-agent — một Gateway, nhiều persona.</strong> Một agent = một "bộ não đầy đủ": workspace, auth, model registry, session store <em>riêng</em>, nằm ở <code>~/.openclaw/agents/&lt;id&gt;/</code>. Một <em>binding</em> ánh xạ một tài khoản kênh (workspace Slack, số WhatsApp) tới một agent:</p>
<pre><code>openclaw agents add work
openclaw agents bind --agent work --channel slack:&lt;account-id&gt;
openclaw agents list</code></pre>
<p>Vì sao cần: tách bạch <strong>Work vs Personal</strong> (khác giọng, khác bộ nhớ, khác quyền — mỗi agent có SOUL.md/USER.md riêng); chạy 2 WhatsApp/2 Slack trong cùng một tiến trình; và an ninh — auth là per-agent, <em>rò rỉ một agent không kéo theo cái khác</em>. Chiến lược khuyên dùng: giữ agent <code>main</code> cho cá nhân, tạo agent chuyên biệt cho từng ngữ cảnh.</p>`
      },
      {
        title: "2. Memory 4 tầng: trí nhớ biết tự lớn",
        body: `
<p>Phần "ma thuật" khiến OpenClaw khác chatbot thường — bốn cơ chế phối hợp, xếp theo thứ tự nên bật:</p>
<ul>
<li><strong>Compaction (bật sẵn):</strong> hội thoại gần chạm giới hạn context → tự tóm tắt lượt cũ, giữ nguyên lượt gần. Lịch sử vẫn nguyên trên đĩa — chỉ đổi thứ model <em>nhìn thấy</em>.</li>
<li><strong>Active memory (opt-in):</strong> một sub-agent bộ nhớ chạy <em>trước</em> khi tạo câu trả lời — có một cơ hội giới hạn để "nhớ ra" thông tin liên quan, thay vì chờ bạn nói "nhớ giùm tôi". Bật với phạm vi hẹp (scope "dm") để tiết kiệm token.</li>
<li><strong>Dreaming (opt-in):</strong> chạy nền ba pha (light/deep/REM) khi trợ lý "ngủ" — đẩy tín hiệu ngắn hạn mạnh vào bộ nhớ dài hạn: ghi nhật ký đọc được ra <code>DREAMS.md</code> và chỉ thăng cấp sự thật bền vào <code>MEMORY.md</code>. Trí nhớ tự lớn mà vẫn <em>giải thích được và review được</em> — đây chính là bước Distill của second brain (m11) chạy tự động.</li>
<li><strong>Commitments (opt-in):</strong> nằm giữa bộ nhớ và automation — hội thoại tạo dịp check-in tương lai ("mai tôi phỏng vấn") → ghi một commitment, heartbeat mang nó trở lại đúng lúc.</li>
</ul>
<pre><code>openclaw memory search "&lt;từ khóa&gt;"
openclaw memory reindex
openclaw commitments list</code></pre>
<div class="callout callout-warning"><strong>Nguyên tắc bật:</strong> từ từ, từng tầng, đo token sau mỗi lần. Compaction mặc định đủ cho đa số; thêm active memory khi cần "nhớ ngữ cảnh"; dreaming/commitments khi dùng dài hạn. Mỗi tầng đều có giá.</div>`
      },
      {
        title: "3. Automation: làm việc khi bạn không nhìn",
        body: `
<p>Năm cơ chế, chọn theo bảng quyết định (file <code>automation/index.md</code> của docs có sẵn bảng này — đọc nó đầu tiên):</p>
<pre><code>Muốn gì                                  → Dùng
Việc lặp theo lịch (sáng tóm tắt inbox)  → Cron job
Đánh thức khi một lệnh kết thúc          → Cron on-exit
"Nội quy" áp mọi câu trả lời             → Standing orders
Chèn logic vào vòng đời agent            → Hooks
Kích hoạt từ hệ thống ngoài              → Webhook / tasks</code></pre>
<pre><code>openclaw cron add --schedule "0 7 * * *" \\
  --prompt "Tóm tắt email chưa đọc và lịch hôm nay, gửi cho tôi qua Telegram"</code></pre>
<p>Phân biệt quan trọng hay bị lẫn: <strong>cron là lịch xác định</strong> (đúng 7h chạy); <strong>heartbeat là nhịp nền linh hoạt</strong> để giao commitments và kiểm tra — hai cơ chế khác nhau, docs có riêng file <code>cron-vs-heartbeat.md</code> vì quá nhiều người nhầm.</p>
<p>Đây là scheduled tasks của m7 tiến hóa: trigger giờ không chỉ theo lịch mà theo sự kiện (on-exit, webhook), và "nội quy" (standing orders) chính là constraints của m2 được áp thường trực thay vì lặp lại mỗi prompt.</p>`
      },
      {
        title: "4. Coding harness: điều phối Claude Code từ trong app chat",
        body: `
<p>Đây là mảnh ghép nối OpenClaw với toàn bộ chặng m13-m15 — có HAI con đường, đừng nhầm:</p>
<ul>
<li><strong>CLI backends — lưới an toàn text-only:</strong> chạy AI CLI cục bộ làm <em>fallback</em> khi API sập/rate-limit. Bảo thủ có chủ đích: tool của OpenClaw không tiêm thẳng vào (trừ khi bật bundleMcp). Set model <code>claude-cli/&lt;model&gt;</code> để đi qua Claude Code CLI với OAuth sẵn có.</li>
<li><strong>ACP agents — harness đầy đủ, session bền:</strong> dùng Agent Client Protocol chạy harness ngoài (Claude Code, Cursor, Codex, Gemini CLI...) với điều khiển session, task nền, và — điểm ăn tiền — <strong>bind một hội thoại kênh với một session ACP bền</strong>. Mỗi việc giao đi là một background task theo dõi được.</li>
</ul>
<p>Nghĩa là workflow mẫu B thành hiện thực: nhắn qua Telegram <em>"sửa bug #123, mở PR"</em> → harness Claude Code chạy nền trong sandbox → báo kết quả về chat; theo dõi bằng <code>openclaw tasks</code>. Bạn điều phối cái "xưởng" m13-m15 từ túi quần.</p>
<p>Quy tắc chọn: chỉ cần text ổn định → CLI backend; giao việc coding thật (đọc repo, sửa file, chạy test) và theo dõi như worker nền → ACP.</p>
<p><strong>Mở rộng thêm năng lực</strong> mà không đụng lõi: <em>skill</em> = gói năng lực đóng sẵn (Apple Notes, GitHub, diagram-maker — <code>openclaw skills list/install</code>); <em>plugin</em> = mở rộng lõi (thêm kênh, provider, tool, hook). ClawHub là chợ — và cảnh báo quen thuộc: <strong>cài từ ClawHub là chạy code bên thứ ba trên máy bạn</strong>, OpenClaw có bước "risk acknowledgement", đọc kỹ nguồn trước khi bật. Chi tiết thú vị cho dân m8: plugin dùng typed contracts + doctor contract — bạn có thể để một ACP agent <em>tự sinh plugin nhỏ theo contract</em> — vibeworking gặp vibe-coding.</p>`
      },
      {
        title: "5. Security & vận hành như dân chuyên",
        body: `
<p>Trợ lý có quyền thật = kỷ luật thật. Năm lớp phòng thủ của OpenClaw:</p>
<ul>
<li><strong>Capability profiles</strong> — ranh giới tool/quyền theo từng hội thoại, không làm yếu profile mặc định.</li>
<li><strong>Command owner</strong> — tách "được nhắn cho bot" với "được chạy lệnh nguy hiểm": <code>openclaw config set commands.ownerAllowFrom '["telegram:&lt;your-id&gt;"]'</code>.</li>
<li><strong>Sandbox</strong> — cô lập agent trong container khi chạy exec/browse trên nội dung không tin cậy.</li>
<li><strong>net-policy + SSRF guard</strong> — chặn agent bị lừa gọi tới địa chỉ nội bộ.</li>
<li><strong>Threat model</strong> — THREAT-MODEL-ATLAS.md mô tả các lối tấn công (prompt injection qua kênh, exfil). Đọc trước khi phơi bất cứ gì ra mạng. Kiểm tra định kỳ: <code>openclaw security audit</code>.</li>
</ul>
<p><strong>Vận hành:</strong> <code>status --deep</code> + <code>logs --follow</code> để quan sát; model failover (chuỗi fallback khi provider chính lỗi); <code>openclaw backup create</code> trước mọi thử nghiệm lớn; nodes để dùng camera/mic/voice từ thiết bị khác qua Gateway.</p>
<p>Và bộ <strong>nguyên tắc vàng khi lên cấp</strong> — tổng hợp cả module: bật từng tầng một và đo chi phí · <code>doctor --fix</code> sau mỗi thay đổi config lớn · backup trước thử nghiệm · quyền tối thiểu (owner, profile hẹp, sandbox cho nội dung lạ) · đọc threat model trước khi phơi ra mạng · version-control persona (SOUL.md, AGENTS.md, config đã lọc secret) — <em>coi persona như code</em>.</p>`
      },
      {
        title: "6. Hướng dẫn thực hành: dựng 2 trong 3 workflow mẫu",
        body: `
<p>Bài thực hành cuối cùng của toàn bộ chương trình. Trong <strong>Xưởng thực hành</strong>, chọn 2 trong 3:</p>
<ul>
<li><strong>A — Trợ lý sáng mỗi ngày:</strong> cron 7h → đọc email + lịch (skill) → tóm tắt → gửi Telegram. Bật commitments để nó tự check-in việc bạn hứa.</li>
<li><strong>B — Worker coding nền:</strong> bind một hội thoại Telegram với session ACP Claude Code. Giao một việc thật trong dự án của bạn ("sửa bug X, chạy test, báo kết quả") → theo dõi bằng <code>openclaw tasks</code>. Nếu bạn có dự án kết nối course-mentor — lấy đúng việc "đang cần" của nó.</li>
<li><strong>C — Bộ nhớ dài hạn tự lớn:</strong> bật active memory (scope dm) + dreaming. Sau 1-2 tuần, kiểm chứng bằng DREAMS.md và MEMORY.md: nó "nhớ" gì về dự án, về bạn — chỉnh tay chỗ sai.</li>
</ul>
<p>Với mỗi workflow: trước khi bật, ghi baseline token/chi phí; sau khi chạy vài ngày, ghi lại con số mới + đánh giá đáng/không đáng. Dán vào ô bài làm: cấu hình 2 workflow, số liệu chi phí, kết quả security audit, và một đoạn hội thoại thật chứng minh nó chạy. Tick checklist, copy prompt phản biện.</p>
<div class="callout"><strong>Lời kết toàn khóa (thật sự):</strong> 17 module trước, bạn hỏi AI từng câu một. Giờ bạn có: quy trình 4 bước đã nội hóa, thư viện skill mang chuyên môn của bạn, second brain + knowledge graph bạn sở hữu, một xưởng engineering kit chạy song song, và một trợ lý cá nhân trực 24/7 trong app chat — điều phối tất cả những thứ trên. Câu của guide nâng cao xứng đáng là câu cuối giáo trình: <em>"Giới hạn không còn là công cụ làm được gì — mà là bạn thiết kế hệ thống của mình khéo tới đâu."</em></div>`
      }
    ]
  }
};
