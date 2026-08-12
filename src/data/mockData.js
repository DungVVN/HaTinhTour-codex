export const destinations = [
  { id: 'thien-cam', name: 'Biển Thiên Cầm', area: 'Cẩm Xuyên', type: 'Biển', image: '/bien-thien-cam-hoang-hon.jpg', tone: 'gold', note: 'Gió biển và một đường chân trời rất rộng.', text: 'Một cung biển cong mềm, nơi núi Hồng và mặt nước gặp nhau trong ánh chiều.' },
  { id: 'dong-loc', name: 'Ngã ba Đồng Lộc', area: 'Can Lộc', type: 'Lịch sử', image: '/nga-ba-dong-loc-tuong-dai.jpg', tone: 'rust', note: 'Một điểm dừng để lắng nghe ký ức.', text: 'Không gian tưởng niệm trang nghiêm, kể lại một phần ký ức không thể quên.' },
  { id: 'huong-tich', name: 'Chùa Hương Tích', area: 'Can Lộc', type: 'Tâm linh', image: '/chua-huong-tich-commons-wide.jpg', tone: 'violet', note: 'Mây núi, rừng thông và một khoảng tĩnh.', text: 'Hành trình lên núi qua mây, rừng thông và quần thể cổ tự trên Hồng Lĩnh.' },
  { id: 'hong-linh', name: 'Núi Hồng Lĩnh', area: 'Hồng Lĩnh', type: 'Sinh thái', image: '/nui-hong-linh-commons.jpg', tone: 'green', note: 'Những lớp núi mở ra phía trước.', text: 'Dãy núi biểu tượng mở ra những cung đường xanh và nhịp sống chậm.' },
  { id: 'song-pho', name: 'Sông Ngàn Phố', area: 'Hương Sơn', type: 'Sinh thái', image: '/song-ngan-pho.jpg', tone: 'blue', note: 'Một buổi chiều trôi thật chậm.', text: 'Dòng sông hiền hòa đi qua những miền quê, hợp cho một buổi dạo thong thả.' },
  { id: 'co-dam', name: 'Chợ Tết Cổ Đạm', area: 'Nghi Xuân', type: 'Ẩm thực', image: '/cho-tet-co-dam.jpg', tone: 'coral', note: 'Màu chợ quê và vị thân tình.', text: 'Mỗi món ăn là một cách người Hà Tĩnh kể chuyện về quê hương.' },
];

export const journeys = [
  { id: 'sea-day', title: 'Một ngày bên biển', meta: '4 điểm dừng · 8 giờ', image: '/bien-thien-cam-hoang-hon.jpg', stops: ['Đồng Lộc', 'Hương Tích', 'Thiên Cầm'] },
  { id: 'memory-trail', title: 'Theo dấu ký ức', meta: '2 ngày 1 đêm · 5 điểm dừng', image: '/dai-tuong-niem-thuan-loc.jpg', stops: ['Đồng Lộc', 'Nguyễn Du', 'Thành Sen'] },
  { id: 'green-season', title: 'Mùa xanh miền núi', meta: 'Cuối tuần · Nhóm gia đình', image: '/tram-may-hoang-hon.jpg', stops: ['Hồng Lĩnh', 'Ngàn Phố', 'Bữa cơm quê'] },
];

export const events = [
  { id: 'nguyen-du-night', date: '18', month: '08', title: 'Đêm thơ Nguyễn Du', place: 'Khu lưu niệm Nguyễn Du · Nghi Xuân', image: '/cho-tet-co-dam.jpg' },
  { id: 'thien-cam-season', date: '24', month: '08', title: 'Mùa biển Thiên Cầm', place: 'Quảng trường biển · Cẩm Xuyên', image: '/bien-thien-cam-hoang-hon.jpg' },
  { id: 'thanh-sen-day', date: '02', month: '09', title: 'Ngày hội Thành Sen', place: 'Trung tâm thành phố Hà Tĩnh', image: '/ha-tinh-scenery.jpg' },
];

export const categories = [
  ['01', 'Biển & gió', 'Những khoảng xanh để thở sâu.'],
  ['02', 'Dấu xưa', 'Di sản, ký ức và người kể chuyện.'],
  ['03', 'Màu xanh', 'Núi, sông và những ngày đi chậm.'],
  ['04', 'Vị quê', 'Món ngon giản dị, nhớ lâu.'],
];
