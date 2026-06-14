// Đóng / mở thanh menu trên giao diện di động
const menuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });

// Xử lý gửi Form liên hệ nâng cấp
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('fullname').value;
    alert(`Cảm ơn bạn ${name}! Hệ thống thông tin Du lịch Bắc Giang đã ghi nhận dữ liệu tư vấn lộ trình thành công. Đội ngũ tư vấn viên sẽ liên hệ lại qua Số điện thoại/Email trong vòng 1 giờ làm việc.`);
    document.getElementById('contactForm').reset();
    return true;
}

// Dữ liệu chi tiết cho liên kết Giới thiệu địa điểm & đặc sản
const detailData = {
    'tay-yen-tu': {
        title: 'Khu Di Tích Tâm Linh Sinh Thái Tây Yên Tử',
        img: 'https://zoomtravel.vn/upload/images/tay-yen-tu-2.jpg',
        desc: '<p>Tây Yên Tử nằm trên địa bàn các huyện Sơn Động, Lục Nam. Đây là nơi lưu giữ những dấu tích kiến trúc cổ của Thiền phái Trúc Lâm độc đáo, gắn liền với con đường hoằng dương phật pháp của Phật hoàng Trần Nhân Tông.</p><p>Hệ thống cáp treo hiện đại sẽ đưa du khách xuyên qua mây ngàn, ngắm toàn cảnh rừng nguyên sinh Khe Rỗ tráng lệ trước khi đặt chân tới Chùa Thượng cổ kính tọa lạc trên đỉnh mây phủ bốn mùa.</p>'
    },
    'dong-cao': {
        title: 'Cao Nguyên Đồng Cao - Thảo Nguyên Xanh Đông Bắc',
        img: 'https://ik.imagekit.io/tvlk/blog/2023/09/cao-nguyen-dong-cao-2-1024x682.png?tr=q-70,c-at_max,w-1000,h-600',
        desc: '<p>Nằm ở độ cao gần 1.000m so với mực nước biển, cao nguyên Đồng Cao (Thạch Sơn, Sơn Động) mang vẻ đẹp hoang sơ, tách biệt hoàn toàn khỏi khói bụi đô thị. Nơi đây lôi cuốn các phượt thủ bởi những thảm cỏ xanh mênh mông, bãi đá cổ xếp chồng tự nhiên kỳ thú.</p><p>Thời điểm lý tưởng nhất để trải nghiệm là cắm trại qua đêm, đốt lửa trại dưới bầu trời đầy sao và đón ánh bình minh len lỏi qua làn sương mù tuyệt mỹ vào sáng sớm.</p>'
    },
    'vinh-nghiem': {
        title: 'Chùa Cổ Vĩnh Nghiêm - Danh Cổ Đệ Nhất Kinh Bắc',
        img: 'https://images.vietnamtourism.gov.vn/vn/images/2021/CNMN/Thang5/29.5._Bac_Giang_Chua_Vinh_Nghiem%3B_danh_lam_co_tu.jpg',
        desc: '<p>Chùa Vĩnh Nghiêm (Đức La, Yên Dũng) được coi là chốn tổ của Thiền phái Trúc Lâm Yên Tử, ngôi trường đại học Phật giáo đầu tiên của nước Nam ta. Chùa được xây dựng từ thời Lý - Trần với kiến trúc gỗ cổ vô cùng tôn nghiêm.</p><p>Báu vật linh thiêng nhất tại đây là kho tàng hơn 3.000 Mộc bản kinh Phật cổ bằng gỗ thị được chạm khắc tinh xảo, đã được tổ chức UNESCO ghi danh là Di sản tư liệu thuộc Chương trình Ký ức thế giới khu vực châu Á - Thái Bình Dương.</p>'
    },
    'vai-thieu': {
        title: 'Vải Thiều Lục Ngạn - Tinh Hoa Trái Cây Đất Việt',
        img: 'https://cdn-images.vtv.vn/2021/6/12/vai-thieu-bac-giang-1-16234666395321865179195.jpg',
        desc: '<p>Vải thiều Lục Ngạn nổi danh toàn thế giới nhờ thổ nhưỡng đồi núi đặc thù mang lại chất lượng trái quả vượt trội. Trái chín có màu đỏ tươi như lửa, cùi dày mọng nước màu sữa, hạt nhỏ xíu và vị ngọt sắc lịm dịu dàng.</p><p>Sản phẩm đã đạt các tiêu chuẩn xuất khẩu khắt khe sang các thị trường Nhật Bản, Mỹ, Châu Âu. Du lịch Bắc Giang vào tháng 6, du khách sẽ choáng ngợp trước những đồi vải nhuộm sắc đỏ rực bao la dọc các triền đồi.</p>'
    },
    'my-chu': {
        title: 'Mỳ Chũ Thủ Công - Hương Vị Từ Gạo Bao Thai Hồng',
        img: 'https://tuyhoafoods.vn/wp-content/uploads/2024/03/image-23.png',
        desc: '<p>Mỳ Chũ trứ danh làng nghề Nam Dương, Lục Ngạn được làm hoàn toàn bằng phương pháp thủ công truyền thống. Sợi mỳ được chế biến từ loại gạo đặc sản "Bao Thai Hồng" trồng trên đất đồi, cho ra sợi mỳ trắng ngần tự nhiên.</p><p>Quy trình phơi sương, phơi nắng bí truyền giúp sợi mỳ khi nấu chín đạt độ dẻo dai cao, nước súp trong vắt, không bị nát hay bở dù có để nguội, mang lại bữa ăn đậm vị quê nhà.</p>'
    },
    'banh-da-ke': {
        title: 'Bánh Đa Kế - Thức Quà Giòn Rụm Đậm Vị Quê',
        img: 'https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/07_2020/banh-da-ke.jpg',
        desc: '<p>Bánh Đa Kế là món ăn dân dã gắn liền với làng Kế cổ cổ kính thuộc thành phố Bắc Giang. Chiếc bánh đa to tròn, mặt bánh phủ vàng óng ánh lớp mè đen, lạc rang thái giỏ nhỏ đập dập cùng chút cơm nguội tạo độ xốp xêu.</p><p>Bánh được nướng chín kỹ thủ công trên than củi hồng xèo xèo. Khi bẻ nghe tiếng rắc giòn giã, nhai kỹ thấy vị bùi bùi, thơm nồng của lạc vừng và mằn mặn đặc trưng khó trộn lẫn.</p>'
    },
    'ruou-lang-van': {
        title: 'Rượu Làng Vân - Vân Hương Mỹ Tửu Danh Bất Hư Truyền',
        img: 'https://ruoutruyenthong.vn/upload/ruou-lang-van-bac-giang-3.jpg',
        desc: '<p>Rượu Làng Vân (Vân Hà, Việt Yên) là loại mỹ tửu xưa kia chuyên dùng để tiến vua. Rượu được chưng cất tỉ mỉ từ nếp cái hoa vàng hạt mẩy kết hợp với bài men thuốc bắc bí truyền gồm 36 vị thảo dược quý hiếm.</p><p>Rượu Làng Vân trong vắt như nước mưa, khi rót sủi tăm tăm đều tăm tắp, hương thơm nồng nàn thảo mộc. Dù có nồng độ cao nhưng khi uống lại cực kỳ êm dịu, không đau đầu, để lại dư vị ngọt thơm kéo dài hậu vị.</p>'
    }
};

// Hàm điều khiển Pop-up Modal
function openModal(key) {
    const data = detailData[key];
    if (!data) return;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-img').alt = data.title;
    document.getElementById('modal-desc').innerHTML = data.desc;
    document.getElementById('info-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Khóa cuộn trang nền
}
function closeModal() {
    document.getElementById('info-modal').classList.add('hidden');
    document.body.style.overflow = ''; // Mở lại cuộn trang nền
}

// Hộp Chat AI Hướng dẫn viên ảo
const aiToggle = document.getElementById('ai-chat-toggle');
const aiBox = document.getElementById('ai-chat-box');
const aiClose = document.getElementById('ai-chat-close');
const aiMessages = document.getElementById('ai-messages');
const aiInput = document.getElementById('ai-input');

aiToggle.addEventListener('click', () => { aiBox.classList.toggle('hidden'); });
aiClose.addEventListener('click', (e) => { e.stopPropagation(); aiBox.classList.add('hidden'); });

// Hàm mô phỏng phản hồi tự động từ Chatbot AI du lịch Bắc Giang
function askAI(question) {
    aiBox.classList.remove('hidden');
    
    // Thêm tin nhắn của User
    aiMessages.innerHTML += `
        <div class="flex gap-2 justify-end">
            <div class="bg-emerald-700 text-white p-3 rounded-2xl rounded-tr-none text-xs shadow-xs max-w-[85%]">
                ${question}
            </div>
        </div>
    `;
    aiMessages.scrollTop = aiMessages.scrollHeight;

    // Câu trả lời giả lập tương ứng câu hỏi
    let reply = "Tôi đã ghi nhận câu hỏi của bạn. Để thiết kế lộ trình hoặc đặt phòng chi tiết, vui lòng để lại số điện thoại tại Form liên hệ phía dưới nhé!";
    if (question.includes('Tây Yên Tử')) {
        reply = "Tây Yên Tử đi vào mùa xuân (tháng 1 - tháng 3 âm lịch) là đẹp nhất vì có nhiều không khí lễ hội đầu năm nhộn nhịp, hoặc mùa thu khí hậu mát mẻ, ít mưa thuận lợi đi cáp treo!";
    } else if (question.includes('đặc sản')) {
        reply = "Đặc sản Bắc Giang xuất sắc nhất làm quà gồm: Vải thiều Lục Ngạn (nếu đi tháng 6), Mỳ Chũ dẻo dai, Rượu Làng Vân trứ danh và Bánh đa Kế giòn rụm thơm ngon.";
    } else if (question.includes('lễ hội')) {
        reply = "Bắc Giang nổi tiếng nhất với Lễ hội chiến thắng Xương Giang (mùng 6-7 tháng Giêng) và Lễ hội chùa Vĩnh Nghiêm (12-14 tháng Hai âm lịch) thu hút đông đảo phật tử thập phương.";
    }

    // Hiệu ứng tải tin nhắn giả lập của AI
    setTimeout(() => {
        aiMessages.innerHTML += `
            <div class="flex gap-2">
                <div class="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i class="fa-solid fa-robot"></i></div>
                <div class="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 text-xs shadow-xs text-justify">
                    ${reply}
                </div>
            </div>
        `;
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }, 600);
}

function handleAiChat(event) {
    event.preventDefault();
    const text = aiInput.value.trim();
    if (!text) return;
    askAI(text);
    aiInput.value = '';
}