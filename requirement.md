# Requirement UI/UX – Khám phá Hà Tĩnh → Sơn Trang

## Phạm vi

Tài liệu này chỉ mô tả **8 chức năng UI/UX** thuộc lớp **Khám phá Hà Tĩnh**.

### Hình thức thực hiện
- Thiết kế giao diện trên **Figma**.
- Sử dụng **mock data** để thể hiện nội dung.
- Có thể làm **Figma Prototype** để mô phỏng các thao tác chính.
- Không triển khai Frontend, Backend, Database hoặc API.
- Các chức năng như tìm kiếm, lọc, bản đồ, chỉ đường, chia sẻ... chỉ cần thể hiện giao diện và luồng prototype.

---

# 1. Nội dung điểm đến Hà Tĩnh

**Người dùng có thể:**  
Xem bài giới thiệu, hình ảnh và thông tin điểm đến.

**Trạng thái / phạm vi:** Đã xác nhận định hướng  
**Giai đoạn:** Landing/demo  
**Giá trị chính:** Tạo traffic khám phá  
**Ghi chú:** Nguồn và quyền sử dụng nội dung cần xác nhận.

## UI/UX cần thiết kế

Thiết kế trang **Khám phá Hà Tĩnh / Điểm đến Hà Tĩnh** làm trang tổng hợp nội dung du lịch.

### Thành phần giao diện
- Banner / Hero giới thiệu Hà Tĩnh.
- Tiêu đề và mô tả ngắn.
- Điểm đến nổi bật.
- Danh mục / chủ đề nổi bật.
- Hành trình gợi ý.
- Sự kiện nổi bật.
- Nội dung theo mùa.
- CTA dẫn sang nội dung Sơn Trang.

### Card điểm đến
Mỗi card có thể gồm:
- Ảnh đại diện.
- Tên điểm đến.
- Khu vực.
- Tag / loại hình du lịch.
- Mô tả ngắn.
- Nút `Xem chi tiết`.

### Màn hình chi tiết điểm đến
Thiết kế:
- Ảnh cover.
- Gallery ảnh.
- Tên địa điểm.
- Địa chỉ.
- Tag / chủ đề.
- Nội dung giới thiệu.
- Thông tin tham quan.
- Khu vực bản đồ minh họa.
- Điểm đến liên quan.
- Nút `Xem trên bản đồ`.
- Nút `Chia sẻ`.

### Mock data gợi ý
- Biển Thiên Cầm.
- Ngã ba Đồng Lộc.
- Chùa Hương Tích.
- Một số điểm văn hóa, sinh thái, ẩm thực và tâm linh khác tại Hà Tĩnh.

---

# 2. Danh mục và chủ đề du lịch

**Người dùng có thể:**  
Duyệt nội dung theo **văn hóa, sinh thái, ẩm thực, tâm linh và mùa**.

**Trạng thái / phạm vi:** MVP đề xuất  
**Giai đoạn:** Sau demo  
**Giá trị chính:** Tìm nội dung nhanh hơn  
**Ghi chú:** Danh mục chuẩn cần thống nhất.

## UI/UX cần thiết kế

Thiết kế khu vực cho phép người dùng khám phá nội dung theo danh mục và chủ đề.

### Danh mục mock
- Văn hóa.
- Sinh thái.
- Ẩm thực.
- Tâm linh.
- Biển.
- Lịch sử.
- Nghỉ dưỡng.
- Vui chơi / trải nghiệm.

### Chủ đề mock
- Du lịch cuối tuần.
- Check-in Hà Tĩnh.
- Du lịch gia đình.
- Khám phá lịch sử.
- Du lịch tâm linh.
- Du lịch mùa hè.
- Ẩm thực Hà Tĩnh.
- Du lịch theo mùa.

### Hình thức hiển thị
Có thể sử dụng:
- Card hình ảnh.
- Icon + tên danh mục.
- Grid.
- Horizontal scroll trên mobile.

### Prototype
Luồng mô phỏng:

`Danh mục / Chủ đề → Danh sách nội dung tương ứng → Chi tiết điểm đến`

---

# 3. Tìm kiếm và bộ lọc

**Người dùng có thể:**  
Tìm nội dung theo **khu vực, chủ đề, thời gian và nhóm khách**.

**Trạng thái / phạm vi:** MVP đề xuất  
**Giai đoạn:** Sau demo  
**Giá trị chính:** Dẫn đúng nhu cầu  
**Ghi chú:** Phụ thuộc chất lượng dữ liệu.

## UI/UX cần thiết kế

### Thanh tìm kiếm
Placeholder gợi ý:

> Tìm kiếm điểm đến, sự kiện, địa danh...

Có:
- Icon Search.
- Trạng thái mặc định.
- Trạng thái đang nhập.
- Trạng thái có kết quả.
- Trạng thái không có kết quả.

### Bộ lọc chính

Bám đúng requirement:

- **Khu vực**.
- **Chủ đề**.
- **Thời gian**.
- **Nhóm khách**.

Desktop có thể hiển thị:

```text
[Khu vực ▼] [Chủ đề ▼] [Thời gian ▼] [Nhóm khách ▼]
```

Mobile có thể dùng nút:

```text
[☰ Bộ lọc]
```

Sau đó mở Bottom Sheet / Modal.

### Ví dụ lựa chọn filter

**Khu vực**
- Tất cả.
- TP Hà Tĩnh.
- Cẩm Xuyên.
- Can Lộc.
- Các khu vực khác.

**Chủ đề**
- Văn hóa.
- Sinh thái.
- Ẩm thực.
- Tâm linh.
- Biển.
- Theo mùa.

**Thời gian**
- Hôm nay.
- Cuối tuần.
- Tháng này.
- Mùa hè.
- Theo mùa.

**Nhóm khách**
- Cá nhân.
- Gia đình.
- Nhóm bạn.
- Có trẻ em.
- Người lớn tuổi.

### Trạng thái cần mock
- Chưa chọn bộ lọc.
- Đã chọn một filter.
- Đã chọn nhiều filter.
- Có kết quả.
- Không có kết quả.
- Đặt lại bộ lọc.

Không cần tìm kiếm hoặc lọc thật; chỉ cần thể hiện giao diện và prototype.

---

# 4. Bản đồ điểm đến 2D

**Người dùng có thể:**  
Xem **vị trí, thông tin tóm tắt và liên kết chỉ đường**.

**Trạng thái / phạm vi:** Cần dữ liệu bản đồ  
**Giai đoạn:** Theo phạm vi duyệt  
**Giá trị chính:** Hiểu không gian điểm đến  
**Ghi chú:** Không mặc định có dữ liệu toàn tỉnh.

## UI/UX cần thiết kế

Thiết kế màn hình bản đồ 2D dạng mock, không cần tích hợp Google Maps / Mapbox thật.

### Thành phần giao diện
- Khu vực bản đồ.
- Marker điểm đến.
- Thanh tìm kiếm.
- Filter nhanh.
- Card thông tin địa điểm khi chọn marker.

Ví dụ:

```text
┌──────────────────────────────┐
│ Tìm kiếm địa điểm...     🔍  │
│ [Khu vực] [Chủ đề] [Lọc]    │
├──────────────────────────────┤
│                              │
│            MAP               │
│                              │
│    📍                        │
│                    📍        │
│          📍                  │
│                              │
└──────────────────────────────┘
```

### Khi chọn marker

```text
┌──────────────────────────────┐
│ [Ảnh điểm đến]               │
│ Biển Thiên Cầm               │
│ Cẩm Xuyên, Hà Tĩnh           │
│ Biển • Check-in              │
│                              │
│ [Xem chi tiết] [Chỉ đường]   │
└──────────────────────────────┘
```

### Các state cần thiết kế
- Map mặc định.
- Marker chưa chọn.
- Marker đang chọn.
- Popup / card địa điểm.
- Filter trên map.
- Mobile map.

### Prototype
- Click marker → mở card.
- Click `Xem chi tiết` → sang chi tiết điểm đến.
- Click `Chỉ đường` → có thể mở frame giả lập hoặc thể hiện CTA external.

### Không cần
- GPS thật.
- Route thật.
- Tính khoảng cách thật.
- Zoom bản đồ thật.
- API bản đồ.

---

# 5. Tuyến và hành trình gợi ý

**Người dùng có thể:**  
Xem **tuyến, thời lượng, điểm dừng và trải nghiệm liên quan**.

**Trạng thái / phạm vi:** MVP đề xuất  
**Giai đoạn:** Sau demo  
**Giá trị chính:** Hỗ trợ lên kế hoạch  
**Ghi chú:** Cần người biên tập hành trình.

## UI/UX cần thiết kế

### Danh sách hành trình
Mock một số hành trình:
- Hà Tĩnh 1 ngày.
- Hà Tĩnh 2 ngày 1 đêm.
- Hành trình lịch sử.
- Hành trình tâm linh.
- Hành trình biển.
- Hành trình check-in.

### Card hành trình
Có thể gồm:
- Ảnh.
- Tên hành trình.
- Thời lượng.
- Số điểm dừng.
- Chủ đề.
- Một số điểm nổi bật.
- Nút `Xem hành trình`.

Ví dụ:

```text
[IMAGE]

Khám phá Hà Tĩnh trong 1 ngày

4 điểm đến • Khoảng 8 giờ

Ngã ba Đồng Lộc
→ Chùa Hương Tích
→ ...
→ Biển Thiên Cầm

[Xem hành trình]
```

### Màn hình chi tiết hành trình
Thiết kế:
- Ảnh cover.
- Tên hành trình.
- Tổng thời lượng.
- Số điểm dừng.
- Timeline.
- Thời gian dự kiến tại từng điểm.
- Mô tả trải nghiệm.
- Bản đồ tuyến giả lập.
- Các lưu ý.
- CTA `Xem địa điểm`.

Ví dụ:

```text
08:00
① Điểm đến A
   Nội dung mô tả...

   │
   │ 15 km
   ↓

10:30
② Điểm đến B

   │
   ↓

14:00
③ Điểm đến C
```

### Prototype

`Danh sách hành trình → Chi tiết hành trình → Chi tiết điểm đến`

---

# 6. Lịch sự kiện và nội dung theo mùa

**Người dùng có thể:**  
Xem **sự kiện, chương trình và gợi ý theo thời điểm**.

**Trạng thái / phạm vi:** Cần nguồn cập nhật  
**Giai đoạn:** Theo phạm vi duyệt  
**Giá trị chính:** Tăng lý do quay lại  
**Ghi chú:** Cần đầu mối duy trì dữ liệu.

## UI/UX cần thiết kế

### Màn hình sự kiện
Có thể thiết kế 2 chế độ:

```text
[Danh sách] [Lịch]
```

### View danh sách
Card sự kiện gồm:
- Ảnh.
- Tên sự kiện.
- Ngày / thời gian.
- Địa điểm.
- Trạng thái.
- Nút `Xem chi tiết`.

Mock trạng thái:
- `Sắp diễn ra`.
- `Đang diễn ra`.
- `Đã kết thúc`.

### View Calendar

```text
       Tháng 8 / 2026

T2  T3  T4  T5  T6  T7  CN

10  11  12  13  14  15  16
        ●       ●
```

Click ngày có sự kiện trong prototype → hiển thị danh sách sự kiện tương ứng.

### Chi tiết sự kiện
Thiết kế:
- Banner.
- Tên sự kiện.
- Trạng thái.
- Ngày.
- Giờ.
- Địa điểm.
- Nội dung.
- Gallery / ảnh.
- Map placeholder nếu cần.
- Nút chia sẻ.

## Nội dung theo mùa

Thiết kế section:

> **Khám phá Hà Tĩnh theo mùa**

Ví dụ:
- Mùa xuân – Lễ hội & văn hóa.
- Mùa hè – Biển & nghỉ dưỡng.
- Mùa thu – Khám phá thiên nhiên.
- Mùa lễ hội – Di sản & tâm linh.

Prototype:

`Nội dung theo mùa → Landing chủ đề → Điểm đến / Sự kiện / Hành trình liên quan`

---

# 7. Chuyển tiếp vào Sơn Trang

**Người dùng có thể:**  
Từ nội dung Hà Tĩnh đi sâu vào **trang, dịch vụ và hành trình Sơn Trang**.

**Trạng thái / phạm vi:** Đã xác nhận định hướng  
**Giai đoạn:** Landing/demo  
**Giá trị chính:** Chuyển traffic thành nhu cầu  
**Ghi chú:** Đây là luồng chính của một website.

## UI/UX cần thiết kế

Đây là **luồng chuyển tiếp quan trọng**, không chỉ là một banner phụ.

### CTA Sơn Trang
Có thể đặt tại:
- Trang Khám phá Hà Tĩnh.
- Chi tiết điểm đến liên quan.
- Hành trình.
- Nội dung theo mùa.
- Các vị trí CTA phù hợp khác.

Ví dụ:

```text
─────────────────────────────
Khám phá thêm

SƠN TRANG

Khám phá không gian, dịch vụ
và các hành trình tại Sơn Trang.

[Khám phá Sơn Trang →]
─────────────────────────────
```

### Luồng prototype chính

```text
Khám phá Hà Tĩnh
       ↓
Nội dung liên quan Sơn Trang
       ↓
Sơn Trang
       ↓
┌──────────────┬──────────────┬──────────────┐
↓              ↓              ↓
Trang          Dịch vụ        Hành trình
Sơn Trang      Sơn Trang      Sơn Trang
```

### Phạm vi prototype
- Click CTA → chuyển sang frame Sơn Trang.
- Có thể mock Landing Sơn Trang để thể hiện điểm đến của luồng.
- Không cần redirect hoặc kết nối hệ thống thật.

---

# 8. SEO, chia sẻ và khả năng tiếp cận

**Người dùng có thể:**  
Tìm thấy nội dung qua web, chia sẻ và sử dụng trên thiết bị hỗ trợ.

**Trạng thái / phạm vi:** Yêu cầu nền tảng  
**Giai đoạn:** Lõi  
**Giá trị chính:** Mở rộng khả năng tiếp cận  
**Ghi chú:** Ngôn ngữ ưu tiên cần chốt.

## UI/UX cần thiết kế

Do scope chỉ là Figma, không triển khai SEO kỹ thuật.

### Cấu trúc nội dung hỗ trợ SEO ở mức UI
Designer nên thể hiện:
- Tiêu đề chính rõ ràng.
- Heading / subheading có phân cấp.
- Description.
- Ảnh cover.
- Breadcrumb nếu phù hợp.
- Nội dung dễ quét và dễ đọc.

Ví dụ:

```text
Trang chủ / Điểm đến / Biển Thiên Cầm
```

### Chia sẻ
Các trang:
- Điểm đến.
- Hành trình.
- Sự kiện.

Có thể có nút:

`↗ Chia sẻ`

Click → mở mock popup:

```text
Chia sẻ

[Facebook]
[Zalo]
[Sao chép liên kết]

[Đóng]
```

Có thêm state:

> ✓ Đã sao chép liên kết

### Accessibility ở mức UI/UX
- Font dễ đọc.
- Cỡ chữ không quá nhỏ.
- Contrast chữ / nền đủ rõ.
- Button có vùng bấm đủ lớn.
- Selected / disabled / error state dễ phân biệt.
- Không chỉ dùng màu sắc để biểu thị trạng thái.
- Icon quan trọng nên có label.
- Giao diện cần sử dụng tốt trên desktop và mobile.
- Ngôn ngữ hiển thị cần được thống nhất trước khi chốt thiết kế.

---

# Luồng prototype tổng quát

```text
Khám phá Hà Tĩnh
       ↓
┌───────────────┬─────────────────┬───────────────┐
↓               ↓                 ↓
Điểm đến        Tìm kiếm          Bản đồ 2D
↓               ↓                 ↓
Chi tiết     Kết quả lọc      Marker / Popup
       \         |               /
        \        |              /
         └──── Chi tiết điểm đến
                    ↓
            Hành trình / Sự kiện
                    ↓
                 Sơn Trang
```

---

# Kết luận phạm vi

> **Phạm vi thực hiện:** Thiết kế UI/UX cho 8 chức năng “Khám phá Hà Tĩnh → Sơn Trang” trên Figma, sử dụng mock data và prototype để mô phỏng các luồng chính.

> **Không bao gồm:** Frontend, Backend, Database, API, GPS thực tế, bản đồ thật, tìm kiếm thật, filter thật, SEO technical, CMS hoặc kết nối dữ liệu thật.
