# Kế hoạch thiết kế hoàn chỉnh

## Khám phá Hà Tĩnh → Sơn Trang

> Đây là tài liệu nguồn cho thiết kế UI/UX và prototype. Chưa code trong giai đoạn lập kế hoạch này.

## 1. Định hướng sản phẩm

### Design read

Đây là một nền tảng khám phá điểm đến theo tinh thần **editorial travel journal**, không phải landing page quảng cáo đơn giản. Người dùng phải có cảm giác đang mở một cuốn nhật ký về Hà Tĩnh: nhìn thấy cảnh quan, đọc được câu chuyện, chọn được trải nghiệm và hình dung được chuyến đi tiếp theo.

### Mục tiêu trải nghiệm

1. Gây cảm hứng bằng hình ảnh và câu chuyện địa phương.
2. Giúp người dùng tìm đúng điểm đến theo nhu cầu.
3. Cho phép đi từ nội dung tổng quan đến chi tiết, bản đồ, hành trình và sự kiện.
4. Chuyển tiếp tự nhiên từ khám phá Hà Tĩnh sang Sơn Trang.
5. Tạo cấu trúc nội dung đủ rõ để sau này nối FE, BE, DB, CMS và API thật.

### Không làm trong prototype

- Không backend, database production, API, CMS, GPS hoặc bản đồ thật.
- Không giả vờ có dữ liệu thời gian thực.
- Tìm kiếm, lọc, bản đồ, chỉ đường và chia sẻ chỉ là mock interaction.
- React/Vite chỉ là phương tiện dựng prototype có thể kiểm thử.

## 2. Nguyên tắc thiết kế bắt buộc

- Không xây một landing page gồm các section tĩnh và card sơ sài.
- Mỗi nội dung quan trọng phải có trạng thái: mặc định, hover, selected, loading/mock, empty, error và mobile.
- Mỗi mũi tên, nút và link hiển thị đều phải có hành vi; nếu chỉ trang trí thì không dùng hình thức giống nút.
- Mỗi card phải trả lời được: đây là gì, ở đâu, phù hợp với ai, có gì đáng trải nghiệm và đi tiếp như thế nào.
- Ảnh là nội dung chính, không phải nền trang trí. Không phủ lớp đen tùy tiện lên ảnh.
- Không ép section cao bằng viewport khi nội dung không cần; full viewport chỉ là full chiều ngang.
- Không tạo khoảng trống lớn bằng padding, `min-height` hoặc wrapper hẹp.
- Không dùng text quá nhỏ để lấp khoảng trống; cỡ chữ phải phù hợp với khoảng cách và thiết bị.
- Mọi flow phải có đường quay lại và trạng thái phản hồi sau khi click.

## 3. Kiến trúc thông tin

```text
Trang khám phá Hà Tĩnh
├── Điểm đến
│   ├── Danh sách / tìm kiếm / lọc
│   └── Chi tiết điểm đến
├── Chủ đề và danh mục
│   └── Trang kết quả theo chủ đề
├── Bản đồ điểm đến 2D mock
│   └── Marker → card tóm tắt → chi tiết
├── Hành trình
│   ├── Danh sách hành trình
│   └── Chi tiết hành trình / timeline
├── Sự kiện và theo mùa
│   ├── Danh sách
│   ├── Lịch
│   └── Chi tiết sự kiện
├── Chia sẻ / SEO / accessibility states
└── Sơn Trang
    ├── Landing Sơn Trang mock
    ├── Dịch vụ mock
    └── Hành trình Sơn Trang mock
```

## 4. Danh sách màn hình cần thiết kế

### Nhóm A: Discovery homepage

1. Header desktop.
2. Header mobile với menu mở/đóng.
3. Hero Hà Tĩnh.
4. Story band giới thiệu vùng đất.
5. Điểm đến nổi bật dạng asymmetric feature grid.
6. Chủ đề nổi bật dạng editorial list.
7. Search/filter panel.
8. Hành trình gợi ý dạng visual route cards.
9. Sự kiện theo mùa với list/calendar switch.
10. CTA Sơn Trang có hình ảnh và nội dung chuyển tiếp.
11. Footer tối giản.

### Nhóm B: Chi tiết điểm đến

Mỗi điểm đến phải có một màn hình hoặc modal lớn đủ sâu:

- Breadcrumb: Trang chủ / Điểm đến / Tên điểm đến.
- Cover image và gallery tối thiểu 3 ảnh.
- Tên, khu vực, chủ đề, trạng thái nội dung.
- Mô tả mở đầu 2–3 câu.
- Câu chuyện / giá trị văn hóa / điều đáng nhớ.
- Thông tin nhanh: khu vực, thời lượng tham quan, nhóm phù hợp, mùa nên đi.
- Trải nghiệm đề xuất.
- Lưu ý tham quan.
- Map placeholder với vị trí mock.
- Điểm đến liên quan.
- CTA `Xem trên bản đồ`, `Chia sẻ`, `Xem hành trình liên quan`.
- State loading, empty gallery, thiếu thông tin và lỗi ảnh.

### Nhóm C: Danh mục và chủ đề

- Trang danh mục có hero chủ đề.
- Mô tả chủ đề.
- Bộ lọc phụ.
- Số lượng kết quả.
- Grid kết quả desktop.
- Horizontal rail mobile.
- Empty state khi chủ đề chưa có nội dung.

Danh mục chuẩn: Văn hóa, Sinh thái, Ẩm thực, Tâm linh, Biển, Lịch sử, Nghỉ dưỡng, Trải nghiệm.

Chủ đề chuẩn: Cuối tuần, Gia đình, Có trẻ em, Người lớn tuổi, Check-in, Mùa hè, Mùa lễ hội, Khám phá chậm.

### Nhóm D: Tìm kiếm và bộ lọc

Bộ lọc bắt buộc theo requirement:

- Khu vực.
- Chủ đề.
- Thời gian / mùa.
- Nhóm khách.

State phải có:

- Chưa nhập.
- Đang nhập.
- Có gợi ý.
- Có kết quả.
- Nhiều bộ lọc đã chọn.
- Không có kết quả.
- Xóa từng filter.
- Đặt lại toàn bộ.
- Mobile bottom sheet.

### Nhóm E: Bản đồ 2D mock

- Bản đồ minh họa có lớp địa hình nhẹ, không giả làm bản đồ thật.
- Marker theo chủ đề, có legend.
- Marker mặc định, hover, selected và disabled.
- Panel điểm đến bên desktop.
- Bottom sheet điểm đến trên mobile.
- Card marker gồm ảnh, tên, khu vực, tag và CTA.
- `Xem chi tiết` dẫn đến detail screen.
- `Chỉ đường` mở state external/mock route.
- State bản đồ chưa tải, không có marker và filter không có kết quả.

### Nhóm F: Hành trình

Danh sách hành trình:

- Ảnh cover.
- Tên hành trình.
- Thời lượng.
- Số điểm dừng.
- Nhóm khách.
- Mức độ di chuyển.
- Mùa phù hợp.
- 3 điểm dừng nổi bật.

Chi tiết hành trình:

- Hero cover.
- Tóm tắt thời lượng, số điểm, quãng đường mock.
- Timeline theo giờ.
- Mỗi stop có ảnh, mô tả, thời gian dự kiến và trải nghiệm.
- Route map mock.
- Lưu ý ăn uống, nghỉ ngơi, thời tiết.
- CTA tới detail của từng điểm dừng.

Mock route cần có: Hà Tĩnh 1 ngày, 2 ngày 1 đêm, Theo dấu lịch sử, Hành trình tâm linh, Cung biển Thiên Cầm, Mùa xanh Hà Tĩnh.

### Nhóm G: Sự kiện và nội dung theo mùa

List event:

- Ảnh riêng.
- Ngày, giờ, địa điểm.
- Trạng thái: Sắp diễn ra, Đang diễn ra, Đã kết thúc.
- Chủ đề.
- Mô tả ngắn.
- CTA xem chi tiết.

Calendar:

- Tháng hiện tại mock.
- Ngày có event được đánh dấu bằng pattern + màu, không chỉ dùng màu.
- Click ngày → danh sách event của ngày.
- Không có event → empty state rõ ràng.

Event detail:

- Cover, status, lịch, địa điểm, nội dung, gallery, map placeholder và share.

Season editorial:

- Xuân: lễ hội và văn hóa.
- Hạ: biển và nghỉ dưỡng.
- Thu: thiên nhiên và khám phá chậm.
- Mùa lễ hội: di sản và tâm linh.

### Nhóm H: Sơn Trang

Sơn Trang là luồng chuyển đổi chính, không phải banner cuối trang.

- Landing Sơn Trang mock có hero, lợi thế, không gian, dịch vụ và CTA.
- Mỗi điểm Hà Tĩnh liên quan có module `Đi tiếp cùng Sơn Trang`.
- CTA phải nói rõ người dùng sẽ đi đâu sau khi click.
- Có state chuyển tiếp và nút quay lại khám phá Hà Tĩnh.

## 5. Mock data contract cho tương lai

Prototype vẫn dùng mock data nhưng phải tổ chức như dữ liệu thật.

### Destination

```text
id, slug, name, area, province, coordinates,
categories[], themes[], audience[], seasons[],
summary, story, experiences[], tips[],
visitDuration, gallery[], coverImage, status,
relatedDestinationIds[], relatedJourneyIds[],
seoTitle, seoDescription, source, rights
```

### Journey

```text
id, slug, title, summary, coverImage,
duration, stopCount, audience[], seasons[], difficulty,
stops[{order, destinationId, time, duration, note, experience}],
routeGeometryMock, tips[], status
```

### Event

```text
id, slug, title, summary, description,
startAt, endAt, venue, area, status,
categories[], coverImage, gallery[],
destinationId, source, rights
```

### Category / Theme / Season / Audience

Mỗi taxonomy có `id`, `slug`, `label`, `description`, `image`, `sortOrder`, `status` để sau này nối CMS và API không phải đổi UI contract.

## 6. Visual system

### Art direction

Coastal field journal: ảnh đời thật, nền sáng, typography editorial, nhịp layout bất đối xứng nhẹ, chi tiết địa phương vừa đủ. Không dùng gradient AI, không phủ tối toàn ảnh, không dùng quá nhiều pill/card giống nhau.

### Color tokens

- `--color-ink`: xanh đá biển cho chữ và CTA.
- `--color-forest`: xanh tràm cho story và journey.
- `--color-shell`: nền vỏ sò ấm.
- `--color-mist`: nền xanh sương cho search/filter.
- `--color-clay`: đất nung cho accent, link và trạng thái.
- `--color-sun`: vàng nắng cho emphasis trên nền tối.
- `--color-paper`: nền card sáng.

Chỉ dùng một accent chính trong từng context. Contrast phải được kiểm tra trên nền ảnh, nền sáng và nền tối.

### Typography

- Display: serif có cá tính, tối đa 2–3 dòng.
- Body: sans rõ, 16px desktop, tối thiểu 15px mobile.
- Label: 12–13px, không dùng label quá nhỏ để lấp layout.
- Text column tối đa khoảng 60–70 ký tự mỗi dòng.
- Không dùng tracking âm quá mạnh làm chữ dính.

### Shape and surface

- Radius lớn cho image feature, radius vừa cho card, radius nhỏ cho control.
- Shadow nhẹ có tint xanh, không dùng bóng đen nặng.
- Ảnh có crop có chủ đích, aspect ratio được định nghĩa theo component.
- Không dùng border dày ở mọi component.

## 7. Responsive contract

### Desktop 1440px

- Full-width canvas, gutter khoảng 32–52px.
- Hero 2 cột: copy + visual.
- Feature grid bất đối xứng.
- Journey route grid 1 lớn + 2 nhỏ.
- Map có panel bên phải.
- Header một dòng.

### iPad 1024px

- Gutter 24–32px.
- Hero vẫn ưu tiên hình ảnh nhưng copy không bị ép.
- Feature chuyển thành 1 feature + grid 2 cột.
- Map dùng map + bottom panel.
- Filter có thể cuộn ngang.

### Phone 390px

- Gutter 16px.
- Hero xếp dọc, ảnh có tỷ lệ rõ.
- Card nội dung theo chiều dọc hoặc horizontal rail khi phù hợp.
- Menu mở thành panel rõ ràng, không đè nội dung.
- Bộ lọc dùng bottom sheet.
- Detail/event/journey dùng full-screen sheet hoặc page mock.
- Tap target tối thiểu 44px.
- Không để chữ, CTA hoặc icon bị cắt.

## 8. Motion và interaction

Motion intensity: 5/10, dùng để tạo hierarchy chứ không làm trang phô diễn.

- Hero copy reveal một lần.
- Ảnh feature scale rất nhẹ khi hover.
- Card hover nâng 2–4px và đổi accent.
- Filter chuyển trạng thái rõ bằng background + label.
- Modal/sheet có enter/exit bằng opacity + transform.
- Timeline route reveal theo từng stop.
- Không dùng animation cho nội dung mới render nếu observer không đăng ký lại.
- `prefers-reduced-motion` tắt transform/transition không cần thiết.

## 9. Accessibility và content quality

- Alt text mô tả đúng nội dung ảnh.
- Heading hierarchy không nhảy cấp.
- Focus ring rõ.
- Không biểu thị selected/error chỉ bằng màu.
- Button và link có label cụ thể.
- Empty/error state có hướng xử lý.
- Nội dung mock phải đủ dài để test wrap và responsive, không dùng câu placeholder ngắn.
- Tên, địa điểm, mùa, nhóm khách và thời lượng phải thống nhất giữa card, detail và journey.

## 10. Lộ trình thực hiện

### Phase 0: Content and data foundation

- Chốt taxonomy.
- Chuẩn hóa mock data contract.
- Kiểm tra nguồn và quyền dùng ảnh.
- Viết nội dung mẫu cho 7 điểm đến, 6 hành trình, 6 sự kiện, 4 mùa.

### Phase 1: UX architecture

- Wireflow toàn bộ 8 chức năng.
- Xác định page, modal, sheet, state và back navigation.
- Chốt desktop/iPad/mobile frames.

### Phase 2: Visual design

- Moodboard Hà Tĩnh.
- Color, typography, spacing, radius, icon và image treatment.
- Component states và content rules.

### Phase 3: Prototype implementation

- Dựng homepage hoàn chỉnh.
- Dựng detail destination.
- Dựng search/filter states.
- Dựng map mock.
- Dựng journey detail.
- Dựng event list/calendar/detail.
- Dựng Sơn Trang transition.

### Phase 4: Validation

- Test tất cả link, button, arrow, modal, sheet, filter và tab.
- Test 390px, 1024px, 1440px.
- Test keyboard, focus, reduced motion, contrast, text wrap.
- Test empty, error và content dài.

### Phase 5: FE/BE/DB handoff

- Component inventory.
- Token export.
- Screen-state matrix.
- Mock data JSON bám schema.
- API mapping cho destination, journey, event, category, search và map.
- Xác định field bắt buộc, field tùy chọn, quyền nội dung và trạng thái publish.

## 11. Acceptance criteria trước khi gọi là hoàn chỉnh

- Có đủ 8 chức năng trong requirement, không chỉ có homepage.
- Có ít nhất một flow hoàn chỉnh từ discovery → detail → journey/event → Sơn Trang.
- Detail destination có nội dung sâu, gallery, info, map và related content.
- Journey có timeline và điểm dừng thật trong mock data.
- Event có list, calendar, detail và status.
- Map có marker, selected state, card và navigation.
- Search/filter có đủ success, empty, reset và mobile sheet.
- Không có icon/link nào bấm không có phản hồi.
- Không có ảnh placeholder hoặc section trống không có mục đích.
- Typography đọc được trên cả ba breakpoint.
- Không có padding hoặc min-height tạo khoảng trống vô nghĩa.
- `npm test`, `npm run build`, `git diff --check` đạt.
- Prototype live được kiểm tra bằng browser thật, không chỉ suy luận từ build.

## 12. Kết luận

Lần triển khai tiếp theo chỉ bắt đầu sau khi kế hoạch này được duyệt. Thứ tự ưu tiên là: nội dung và dữ liệu → flow → screen states → visual system → prototype → validation. Không quay lại cách làm chỉ dựng hero, card và vài section tĩnh rồi gọi là hoàn chỉnh.
# DESIGN RESET / V2 - Editorial travel journal

> Cập nhật sau yêu cầu redesign toàn bộ ngày 2026-08-12. Bản V2 thay thế visual system trước đó; không tiếp tục vá layout cũ.

## Art direction

- Định vị: landing/editorial tourism experience cho luồng “Khám phá Hà Tĩnh → Sơn Trang”.
- Cảm giác: tạp chí du hành miền Trung, chân thật, giàu ảnh, có nhịp và có khoảng thở.
- Màu chủ đạo: deep sea green `#102c2b`, paper `#f5f4ef`, surface `#fffdf8`, coral `#ef765c`, sun `#f2c66d`.
- Typography: Manrope cho display/headline, DM Sans cho body/UI; không dùng typography mặc định của Bootstrap.
- Hình khối: card bo 20px, button pill, collage ảnh và layout bất đối xứng có chủ đích.
- Motion: reveal khi vào viewport, hover zoom ảnh, hover arrow, hero drift; luôn có `prefers-reduced-motion`.

## IA và trải nghiệm

1. Hero: manifesto, điểm nhấn Thiên Cầm, CTA “Khám phá điểm đến”.
2. Manifesto: câu định vị cảm xúc, tạo nhịp chuyển từ hero sang nội dung.
3. Điểm đến: feature Chùa Hương Tích, tìm kiếm, filter theo chủ đề và 6 destination cards.
4. Cảm hứng: 4 tuyến chủ đề dẫn ngược về điểm đến.
5. Hành trình: 3 route cards có trạng thái mở modal chi tiết.
6. Lịch mùa: list/calendar toggle, từng event row mở detail modal.
7. Sơn Trang: CTA chuyển tiếp chính, full-bleed image.

## Quy chuẩn responsive

- Desktop: layout full-width theo gutter biến thiên, hero split/collage, destination 4 cột, journey 3 cột.
- Tablet: nav chuyển thành menu panel, hero xếp dọc, destination 2 cột, journey 2 cột.
- Mobile: gutter 16px, không có overflow ngang ngoài filter scroller, destination/route 1 cột, modal và touch target đủ lớn.
- Không sử dụng `h-screen`; hero dùng `100svh`/min-height ổn định.
- Mọi section dùng token spacing chung; không tự tạo padding riêng ngoài component rule.

## Mock-data và ảnh

- Không backend/API/DB thật; dữ liệu mock đặt trong `src/main.jsx`.
- Asset local lấy từ `public/`, mapping nguồn duy trì trong `public/IMAGE_SOURCES.md`.
- Mỗi destination/route/event detail phải có ảnh local hợp lệ, không dùng ảnh trùng nếu đã có asset phù hợp.

## Kiểm thử bắt buộc

- `npm test`
- `npm run build`
- `git diff --check`
- Kiểm tra trực quan desktop, tablet và mobile trước khi deploy.
