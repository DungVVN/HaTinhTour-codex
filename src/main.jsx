import { StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Badge, Button, Card, Col, Container, Form, Modal, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const destinations = [
  { name: 'Biển Thiên Cầm', area: 'Cẩm Xuyên', type: 'Biển', image: '/bien-thien-cam-hoang-hon.jpg', text: 'Một cung biển cong mềm, nơi núi Hồng và mặt nước gặp nhau trong ánh chiều.' },
  { name: 'Ngã ba Đồng Lộc', area: 'Can Lộc', type: 'Lịch sử', image: '/nga-ba-dong-loc-tuong-dai.jpg', text: 'Không gian tưởng niệm trang nghiêm, kể lại một phần ký ức không thể quên.' },
  { name: 'Chùa Hương Tích', area: 'Can Lộc', type: 'Tâm linh', image: '/chua-huong-tich-panorama.jpg', text: 'Hành trình lên núi qua mây, rừng thông và quần thể cổ tự trên Hồng Lĩnh.' },
  { name: 'Hồ sinh thái', area: 'Hà Tĩnh', type: 'Sinh thái', image: '/ho-sinh-thai-ha-tinh.jpg', text: 'Một khoảng xanh chậm rãi cho những ngày muốn rời xa nhịp sống đô thị.' },
];

const categories = [
  ['01', 'Văn hóa', 'Những câu chuyện làm nên bản sắc vùng đất'],
  ['02', 'Sinh thái', 'Rừng, hồ và những lối đi nhiều tầng xanh'],
  ['03', 'Ẩm thực', 'Hương vị địa phương trong từng mùa du lịch'],
  ['04', 'Tâm linh', 'Những điểm đến để lắng lại và kết nối'],
];

const journeys = [
  { title: 'Hà Tĩnh trong một ngày', meta: '4 điểm đến · Khoảng 8 giờ', image: '/bien-thien-cam-hoang-hon.jpg', stops: ['Ngã ba Đồng Lộc', 'Chùa Hương Tích', 'Biển Thiên Cầm'] },
  { title: 'Theo dấu lịch sử', meta: '2 ngày 1 đêm · 5 điểm dừng', image: '/nga-ba-dong-loc-tuong-dai.jpg', stops: ['Ngã ba Đồng Lộc', 'Khu lưu niệm Nguyễn Du', 'Thành Sen'] },
  { title: 'Mùa xanh Hà Tĩnh', meta: 'Cuối tuần · Nhóm gia đình', image: '/sinh-thai-thac-nuoc.jpg', stops: ['Hồ sinh thái', 'Thác nước', 'Bữa cơm địa phương'] },
];

function App() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [selected, setSelected] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [eventMode, setEventMode] = useState('list');

  const filteredDestinations = useMemo(() => destinations.filter((item) => {
    const matchesFilter = activeFilter === 'Tất cả' || item.type === activeFilter;
    const term = query.toLowerCase().trim();
    return matchesFilter && (!term || `${item.name} ${item.area} ${item.type}`.toLowerCase().includes(term));
  }), [activeFilter, query]);

  const copyLink = async () => {
    try { await navigator.clipboard.writeText(window.location.href); } catch { /* mock fallback */ }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return <div className="site-shell">
    <Navbar expand="md" className="topbar" sticky="top">
      <Container className="topbar-inner">
        <Navbar.Brand as="a" href="#top" className="wordmark" aria-label="Khám phá Hà Tĩnh">Sơn Trang <span>/ Explore</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="main-nav mx-auto" aria-label="Điều hướng chính">
            <Nav.Link href="#destinations">Điểm đến</Nav.Link><Nav.Link href="#journeys">Hành trình</Nav.Link><Nav.Link href="#events">Sự kiện</Nav.Link>
          </Nav>
          <Button as="a" href="#son-trang" variant="outline-dark" className="outline-link">Về Sơn Trang <span>↗</span></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <main id="top">
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">Hà Tĩnh, một nhịp điệu khác</p>
          <h1>Đi xa để<br /><em>gần hơn</em> với một vùng đất.</h1>
          <p className="hero-intro">Từ những cung biển đầy nắng đến triền núi phủ mây, hãy bắt đầu hành trình khám phá Hà Tĩnh theo cách của riêng bạn.</p>
          <div className="hero-actions"><Button as="a" className="button button-dark" href="#destinations">Khám phá điểm đến <span>↘</span></Button><a className="text-link" href="#journeys">Xem hành trình gợi ý</a></div>
        </div>
        <div className="hero-visual"><img src="/bien-thien-cam-hoang-hon.jpg" alt="Biển Thiên Cầm lúc hoàng hôn" /><div className="hero-caption"><span>01 / 04</span><span>Thiên Cầm, Cẩm Xuyên</span></div><div className="hero-stamp">HÀ<br />TĨNH</div></div>
      </section>

      <section className="intro-strip section-pad"><p className="eyebrow">Bắt đầu từ đây</p><div><h2>Mỗi điểm đến<br />là một <span>câu chuyện.</span></h2><p>Không chỉ là nơi để ghé qua. Hà Tĩnh mở ra bằng những lớp trải nghiệm nối tiếp nhau: di sản, thiên nhiên, vị biển và lòng hiếu khách.</p></div></section>

      <section id="destinations" className="section-pad destinations-section">
        <div className="section-heading"><div><p className="eyebrow">Những nơi đáng nhớ</p><h2>Điểm đến nổi bật</h2></div><a className="text-link" href="#search">Xem tất cả <span>↗</span></a></div>
        <div className="destination-layout">
          <div className="destination-feature"><img src="/chua-huong-tich-panorama.jpg" alt="Chùa trên núi trong mây" /><div className="feature-label"><span>Điểm đến của tháng</span><strong>Chùa Hương Tích</strong><small>Can Lộc · Tâm linh</small></div></div>
          <Row className="destination-grid g-3">{filteredDestinations.slice(0, 3).map((item) => <Col key={item.name} xs={12} sm={6}><Card className="destination-card h-100" onClick={() => setSelected(item)}><Card.Img variant="top" src={item.image} alt={item.name} /><Card.Body className="card-body"><div className="card-meta"><Badge bg="light" text="dark">{item.type}</Badge><span>{item.area}</span></div><Card.Title as="h3">{item.name}</Card.Title><Card.Text>{item.text}</Card.Text><Button variant="light" className="icon-button" aria-label={`Xem chi tiết ${item.name}`}>↗</Button></Card.Body></Card></Col>)}</Row>
        </div>
      </section>

      <section id="search" className="search-section section-pad"><div className="search-header"><div><p className="eyebrow">Tìm theo cảm hứng</p><h2>Bạn muốn đi đâu?</h2></div><p>Chọn một chủ đề, hoặc nhập tên địa danh để bắt đầu.</p></div><div className="search-controls"><Form.Label className="search-box"><span>⌕</span><Form.Control value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Tìm kiếm điểm đến, sự kiện, địa danh..." /></Form.Label><div className="filter-row">{['Tất cả', 'Biển', 'Lịch sử', 'Tâm linh', 'Sinh thái'].map((filter) => <Button variant={activeFilter === filter ? 'dark' : 'outline-secondary'} className="filter" key={filter} onClick={() => setActiveFilter(filter)}>{filter}</Button>)}</div></div><p className="result-note">{filteredDestinations.length} điểm đến phù hợp <span>{query || activeFilter !== 'Tất cả' ? `với “${query || activeFilter}”` : 'trong gợi ý hôm nay'}</span></p></section>

      <section className="category-section section-pad"><div className="section-heading"><div><p className="eyebrow">Chọn một hướng đi</p><h2>Khám phá theo chủ đề</h2></div><span className="section-count">04 / 08 danh mục</span></div><div className="category-list">{categories.map(([number, title, description]) => <a href="#destinations" className="category-row" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><strong>↗</strong></a>)}</div></section>

      <section id="journeys" className="journey-section section-pad"><div className="journey-heading"><p className="eyebrow">Đã sắp xếp cho bạn</p><h2>Một ngày, hai ngày,<br /><em>hay cả một mùa.</em></h2><p>Những hành trình gợi ý để bạn có thể lên đường ngay từ lần đầu tiên.</p></div><div className="journey-grid">{journeys.map((journey, index) => <article className={`journey-card journey-${index + 1}`} key={journey.title}><img src={journey.image} alt={journey.title} /><div className="journey-overlay"><span>{journey.meta}</span><h3>{journey.title}</h3><p>{journey.stops.join('  →  ')}</p><button className="light-link" onClick={() => setSelected({ name: journey.title, area: journey.meta, type: 'Hành trình', image: journey.image, text: journey.stops.join(' → ') })}>Xem hành trình ↗</button></div></article>)}</div></section>

      <section id="events" className="events-section section-pad"><div className="section-heading"><div><p className="eyebrow">Lưu lại ngày hẹn</p><h2>Sự kiện & theo mùa</h2></div><div className="mode-switch"><button className={eventMode === 'list' ? 'active' : ''} onClick={() => setEventMode('list')}>Danh sách</button><button className={eventMode === 'calendar' ? 'active' : ''} onClick={() => setEventMode('calendar')}>Lịch</button></div></div>{eventMode === 'list' ? <div className="event-list"><article><span className="event-date">18<br /><small>THÁNG 8</small></span><div><span className="event-status">Sắp diễn ra</span><h3>Lễ hội biển Thiên Cầm</h3><p>Quảng trường biển Thiên Cầm · 19:00</p></div><span>↗</span></article><article><span className="event-date">24<br /><small>THÁNG 8</small></span><div><span className="event-status muted">Đang diễn ra</span><h3>Tuần văn hóa Nguyễn Du</h3><p>Khu lưu niệm Đại thi hào Nguyễn Du</p></div><span>↗</span></article></div> : <div className="calendar"><div className="calendar-top"><strong>Tháng 8 / 2026</strong><span>← &nbsp; →</span></div><div className="calendar-days">{['T2','T3','T4','T5','T6','T7','CN'].map((day) => <span key={day}>{day}</span>)}{Array.from({ length: 31 }, (_, i) => <button className={i + 1 === 18 || i + 1 === 24 ? 'has-event' : ''} key={i}>{i + 1}</button>)}</div></div>}</section>

      <section id="son-trang" className="son-trang"><div className="son-image"><img src="/ha-tinh-scenery.jpg" alt="Cảnh quan Hà Tĩnh" /></div><div className="son-copy"><p className="eyebrow">Khám phá thêm</p><h2>Sơn Trang</h2><p>Một điểm dừng để nghỉ ngơi, kết nối và tiếp tục những hành trình đẹp hơn tại Hà Tĩnh.</p><a className="button button-light" href="#top">Khám phá Sơn Trang <span>↗</span></a></div></section>
    </main>

    <footer className="footer section-pad"><div className="wordmark">Sơn Trang <span>/ Explore</span></div><p>Khám phá Hà Tĩnh theo nhịp của riêng bạn.</p><span>© 2026 Sơn Trang</span></footer>

    <Modal show={Boolean(selected)} onHide={() => setSelected(null)} centered className="detail-modal-bootstrap">
      <Modal.Header closeButton><Modal.Title>{selected?.name}</Modal.Title></Modal.Header>
      {selected && <><Modal.Body><img className="modal-image" src={selected.image} alt={selected.name} /><div className="card-meta mt-3"><Badge bg="light" text="dark">{selected.type}</Badge><span>{selected.area}</span></div><p className="mt-3 mb-0">{selected.text}</p></Modal.Body><Modal.Footer><Button variant="dark" onClick={() => setShareOpen(true)}>Chia sẻ ↗</Button><Button variant="outline-dark" onClick={() => setSelected(null)}>Xem trên bản đồ</Button></Modal.Footer></>}
    </Modal>
    {shareOpen && <div className="share-popover"><button onClick={() => setShareOpen(false)} aria-label="Đóng">×</button><strong>Chia sẻ</strong><a href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noreferrer">Facebook</a><a href="#top">Zalo</a><button onClick={copyLink}>{copied ? '✓ Đã sao chép liên kết' : 'Sao chép liên kết'}</button></div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
