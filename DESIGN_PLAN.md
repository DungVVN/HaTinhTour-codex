# Kế hoạch thiết kế và triển khai

## 1. Mục tiêu

Xây dựng một prototype tương tác theo tinh thần dự án Figma cho luồng **Khám phá Hà Tĩnh → Sơn Trang**, sử dụng mock database data và hình ảnh trong thư mục `public`.

Đây không phải một dự án backend và cũng không hoàn toàn định vị là một sản phẩm frontend. React/Vite chỉ là phương tiện dựng prototype có thể chạy được, nhằm mô phỏng màn hình, dữ liệu, trạng thái và các luồng trải nghiệm.

Không triển khai backend thật, database production, API, GPS, bản đồ thật, tìm kiếm thật hoặc filter thật.

## 2. Hướng thiết kế

- Phong cách: editorial travel, giàu hình ảnh và có cảm giác khám phá.
- Đối tượng: khách du lịch, nhóm gia đình, nhóm bạn và người muốn tìm trải nghiệm Hà Tĩnh.
- Bảng màu:
  - Xanh than: nội dung chính và CTA.
  - Xanh rừng: section giới thiệu vùng đất.
  - Cam san hô: accent, trạng thái và điểm nhấn.
  - Nền trắng ngà: tạo cảm giác nhẹ, gần gũi với du lịch và thiên nhiên.
- Typography:
  - Heading: Manrope.
  - Body: DM Sans.
- Hệ thống hình dáng:
  - Card và ảnh dùng bo góc đồng nhất.
  - Button dạng pill.
  - Bố cục có khoảng thở, không dồn quá nhiều thông tin.
- Motion:
  - Hover nhẹ trên card và button.
  - Transition cho filter, modal và các trạng thái tương tác.
  - Có hỗ trợ `prefers-reduced-motion`.

## 3. Cấu trúc trang

### Header

- Wordmark `Sơn Trang / Explore`.
- Điều hướng đến:
  - Điểm đến.
  - Hành trình.
  - Sự kiện.
- CTA `Về Sơn Trang`.

### Hero

- Tiêu đề chính: `Đi xa để gần hơn với một vùng đất.`
- Mô tả ngắn về Hà Tĩnh.
- CTA `Khám phá điểm đến`.
- Link `Xem hành trình gợi ý`.
- Ảnh hero sử dụng biển Thiên Cầm.

### Giới thiệu Hà Tĩnh

- Thông điệp về di sản, thiên nhiên, ẩm thực và lòng hiếu khách.
- Section nền xanh rừng để tạo nhịp thị giác khác với hero.

### Điểm đến nổi bật

- Một điểm đến lớn dạng feature.
- Các card điểm đến liên quan.
- Mỗi card gồm:
  - Ảnh.
  - Tên điểm đến.
  - Khu vực.
  - Loại hình.
  - Mô tả ngắn.
  - Tương tác mở chi tiết.

### Tìm kiếm và bộ lọc

- Thanh tìm kiếm với placeholder:
  - `Tìm kiếm điểm đến, sự kiện, địa danh...`
- Bộ lọc mock:
  - Tất cả.
  - Biển.
  - Lịch sử.
  - Tâm linh.
  - Sinh thái.
- Hiển thị số lượng kết quả phù hợp.
- Không kết nối dữ liệu hoặc tìm kiếm backend.

### Danh mục và chủ đề

- Văn hóa.
- Sinh thái.
- Ẩm thực.
- Tâm linh.
- Mỗi danh mục có mô tả ngắn và link về khu vực điểm đến.
- Trên mobile chuyển thành danh sách dọc dễ đọc.

### Hành trình gợi ý

- Hà Tĩnh trong một ngày.
- Theo dấu lịch sử.
- Mùa xanh Hà Tĩnh.
- Card hành trình gồm:
  - Ảnh.
  - Tên hành trình.
  - Thời lượng.
  - Số điểm dừng.
  - Các điểm nổi bật.
  - CTA `Xem hành trình`.

### Sự kiện và nội dung theo mùa

- Hai chế độ:
  - Danh sách.
  - Lịch.
- Trạng thái sự kiện:
  - Sắp diễn ra.
  - Đang diễn ra.
  - Đã kết thúc.
- Calendar mock tháng 8/2026.
- Click tab để chuyển giữa danh sách và lịch.

### CTA Sơn Trang

- Section chuyển tiếp riêng, không chỉ là banner phụ.
- Nội dung:
  - `Khám phá thêm`.
  - `Sơn Trang`.
  - Mô tả không gian, dịch vụ và hành trình.
  - CTA `Khám phá Sơn Trang`.

### Footer

- Wordmark.
- Mô tả ngắn.
- Năm bản quyền.

## 4. Luồng prototype

```text
Khám phá Hà Tĩnh
        ↓
Điểm đến / Tìm kiếm / Danh mục / Bản đồ mock
        ↓
Chi tiết điểm đến
        ↓
Hành trình / Sự kiện / Nội dung theo mùa
        ↓
Sơn Trang
```

Các tương tác mock cần có:

- Click card điểm đến → mở modal chi tiết.
- Click filter → cập nhật danh sách card.
- Nhập từ khóa → lọc mock theo tên, khu vực và loại hình.
- Click hành trình → mở modal nội dung hành trình.
- Chuyển `Danh sách / Lịch` → đổi view sự kiện.
- Click `Chia sẻ` → mở popup Facebook, Zalo và sao chép liên kết.
- Click CTA Sơn Trang → chuyển đến section Sơn Trang.

## 5. Mapping ảnh trong `public`

| File | Sử dụng |
| --- | --- |
| `bien-thien-cam-hoang-hon.jpg` | Hero và hành trình biển |
| `thien-cam-beach.jpg` | Ảnh biển Thiên Cầm bổ sung |
| `nga-ba-dong-loc-tuong-dai.jpg` | Điểm đến lịch sử |
| `nga-ba-dong-loc.jpg` | Ảnh Ngã ba Đồng Lộc bổ sung |
| `chua-huong-tich-panorama.jpg` | Feature điểm đến tâm linh |
| `chua-huong-tich.jpg` | Ảnh Chùa Hương Tích bổ sung |
| `ho-sinh-thai-ha-tinh.jpg` | Điểm đến sinh thái |
| `sinh-thai-thac-nuoc.jpg` | Hành trình thiên nhiên |
| `hai-san-bien-ha-tinh.jpg` | Nội dung ẩm thực biển |
| `am-thuc-dac-san-ha-tinh.jpg` | Nội dung đặc sản Hà Tĩnh |
| `ha-tinh-scenery.jpg` | CTA Sơn Trang và cảnh quan tổng quát |

Nguồn ảnh đã tải được ghi trong [public/IMAGE_SOURCES.md](public/IMAGE_SOURCES.md).

## 6. Responsive

### Desktop

- Hero chia hai cột.
- Navigation đầy đủ.
- Bộ lọc hiển thị trên một hàng.
- Grid điểm đến và hành trình có bố cục bất đối xứng.

### Tablet

- Hero chuyển thành layout dọc.
- Grid card giảm số cột.
- Bộ lọc vẫn giữ dạng chip có thể cuộn ngang.

### Mobile

- Navigation rút gọn.
- Hero và ảnh xếp dọc.
- Card điểm đến thành một cột.
- Bộ lọc cuộn ngang, giữ vùng chạm đủ lớn.
- Hành trình xếp dọc.
- Modal chi tiết co theo chiều rộng màn hình.

## 7. Kiểm tra trước khi release

- Chạy `npm run build`.
- Kiểm tra đường dẫn ảnh trong `public`.
- Kiểm tra responsive desktop, tablet và mobile.
- Kiểm tra filter, modal, tab lịch và popup chia sẻ.
- Kiểm tra contrast CTA và trạng thái selected.
- Kiểm tra trang production trả HTTP 200.
- Kiểm tra ít nhất một asset ảnh production trả HTTP 200.

## 8. Triển khai Vercel

- Framework: Vite.
- Build command: `vite build`.
- Output directory: `dist`.
- Project name: `ha-tinh-tour-explore-codex`.
- Production URL:
  - https://ha-tinh-tour-explore-codex.vercel.app

Trạng thái hiện tại: build production thành công, deployment Vercel ở trạng thái `READY`, trang và asset ảnh đã kiểm tra HTTP 200.
