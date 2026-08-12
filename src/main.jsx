import { useEffect, useMemo, useState } from 'react';
import { Badge, Button, Card, Container, Form, Modal } from 'react-bootstrap';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const destinations = [
  { id: 'thien-cam', name: 'Biển Thiên Cầm', area: 'Cẩm Xuyên', type: 'Biển', image: '/bien-thien-cam-hoang-hon.jpg', tone: 'gold', note: 'Gió biển và một đường chân trời rất rộng.', text: 'Một cung biển cong mềm, nơi núi Hồng và mặt nước gặp nhau trong ánh chiều.' },
  { id: 'dong-loc', name: 'Ngã ba Đồng Lộc', area: 'Can Lộc', type: 'Lịch sử', image: '/nga-ba-dong-loc-tuong-dai.jpg', tone: 'rust', note: 'Một điểm dừng để lắng nghe ký ức.', text: 'Không gian tưởng niệm trang nghiêm, kể lại một phần ký ức không thể quên.' },
  { id: 'huong-tich', name: 'Chùa Hương Tích', area: 'Can Lộc', type: 'Tâm linh', image: '/chua-huong-tich-commons-wide.jpg', tone: 'violet', note: 'Mây núi, rừng thông và một khoảng tĩnh.', text: 'Hành trình lên núi qua mây, rừng thông và quần thể cổ tự trên Hồng Lĩnh.' },
  { id: 'hong-linh', name: 'Núi Hồng Lĩnh', area: 'Hồng Lĩnh', type: 'Sinh thái', image: '/nui-hong-linh-commons.jpg', tone: 'green', note: 'Những lớp núi mở ra phía trước.', text: 'Dãy núi biểu tượng mở ra những cung đường xanh và nhịp sống chậm.' },
  { id: 'song-pho', name: 'Sông Ngàn Phố', area: 'Hương Sơn', type: 'Sinh thái', image: '/song-ngan-pho.jpg', tone: 'blue', note: 'Một buổi chiều trôi thật chậm.', text: 'Dòng sông hiền hòa đi qua những miền quê, hợp cho một buổi dạo thong thả.' },
  { id: 'co-dam', name: 'Chợ Tết Cổ Đạm', area: 'Nghi Xuân', type: 'Ẩm thực', image: '/cho-tet-co-dam.jpg', tone: 'coral', note: 'Màu chợ quê và vị thân tình.', text: 'Mỗi món ăn là một cách người Hà Tĩnh kể chuyện về quê hương.' },
];

const journeys = [
  { title: 'Một ngày bên biển', meta: '4 điểm dừng · 8 giờ', image: '/bien-thien-cam-hoang-hon.jpg', stops: ['Đồng Lộc', 'Hương Tích', 'Thiên Cầm'] },
  { title: 'Theo dấu ký ức', meta: '2 ngày 1 đêm · 5 điểm dừng', image: '/dai-tuong-niem-thuan-loc.jpg', stops: ['Đồng Lộc', 'Nguyễn Du', 'Thành Sen'] },
  { title: 'Mùa xanh miền núi', meta: 'Cuối tuần · Nhóm gia đình', image: '/tram-may-hoang-hon.jpg', stops: ['Hồng Lĩnh', 'Ngàn Phố', 'Bữa cơm quê'] },
];

const events = [
  { date: '18', month: '08', title: 'Đêm thơ Nguyễn Du', place: 'Khu lưu niệm Nguyễn Du · Nghi Xuân' },
  { date: '24', month: '08', title: 'Mùa biển Thiên Cầm', place: 'Quảng trường biển · Cẩm Xuyên' },
  { date: '02', month: '09', title: 'Ngày hội Thành Sen', place: 'Trung tâm thành phố Hà Tĩnh' },
];

const categories = [
  ['01', 'Biển & gió', 'Những khoảng xanh để thở sâu.'],
  ['02', 'Dấu xưa', 'Di sản, ký ức và người kể chuyện.'],
  ['03', 'Màu xanh', 'Núi, sông và những ngày đi chậm.'],
  ['04', 'Vị quê', 'Món ngon giản dị, nhớ lâu.'],
];

function useReveal() {
  useEffect(() => {
    const nodes = [...document.querySelectorAll('[data-reveal]')];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Header({ active, open, setOpen }) {
  return <header className="site-header"><Container fluid className="header-inner"><a className="brand" href="#top" onClick={() => setOpen(false)}><span className="brand-symbol">ST</span><span><strong>Sơn Trang</strong><small>Hà Tĩnh / journal</small></span></a><button className="mobile-menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Đóng' : 'Menu'} <i>{open ? '×' : '☰'}</i></button><nav className={`site-nav mobile-nav ${open ? 'is-open' : ''}`}><a className={active === 'destinations' ? 'active' : ''} href="#destinations" onClick={() => setOpen(false)}>Điểm đến</a><a className={active === 'journeys' ? 'active' : ''} href="#journeys" onClick={() => setOpen(false)}>Hành trình</a><a className={active === 'events' ? 'active' : ''} href="#events" onClick={() => setOpen(false)}>Lịch mùa</a><a className="header-link" href="#son-trang" onClick={() => setOpen(false)}>Sơn Trang <span>↗</span></a></nav></Container></header>;
}

function Hero({ onExplore }) {
  return <section className="hero-stage" id="top"><Container fluid className="hero-grid"><div className="hero-copy" data-reveal><div className="eyebrow"><span className="eyebrow-line" /> Nhật ký miền gió biển</div><h1>Đi về phía<br /><em>một Hà Tĩnh</em><br />rất riêng.</h1><p>Biển xanh, núi Hồng, những câu chuyện cũ và vị quê ở lại rất lâu.</p><div className="hero-actions"><Button className="btn-coral" onClick={onExplore}>Khám phá điểm đến <span>↘</span></Button><a className="text-action" href="#journeys">Xem lộ trình <span>↗</span></a></div></div><div className="hero-collage" data-reveal><figure className="hero-main-image"><img src="/bien-thien-cam-hoang-hon.jpg" alt="Biển Thiên Cầm lúc hoàng hôn" /><figcaption><strong>01</strong><span>Biển Thiên Cầm<br /><small>Cẩm Xuyên, Hà Tĩnh</small></span></figcaption></figure><figure className="hero-small-image"><img src="/nui-hong-linh-commons.jpg" alt="Núi Hồng Lĩnh" /><span>Núi Hồng Lĩnh<br /><small>nhìn từ Can Lộc</small></span></figure><div className="hero-stamp">HÀ<br />TĨNH<br /><span>✳</span></div></div></Container><div className="hero-bottom"><span>Đất & nước / 2026</span><span>Cuộn để khám phá <b>↓</b></span><span>18°32'N · 105°54'E</span></div></section>;
}

function SectionIntro({ eyebrow, title, children, action }) { return <div className="section-intro" data-reveal><div><div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div><h2>{title}</h2></div>{children && <p>{children}</p>}{action}</div>; }

function DestinationCard({ item, onSelect, featured = false }) {
  return <Card className={`destination-card tone-${item.tone} ${featured ? 'destination-card-featured' : ''}`} onClick={() => onSelect(item)}><div className="card-image-wrap"><Card.Img variant="top" src={item.image} alt={item.name} /><Badge>{item.type}</Badge><span className="image-index">0{destinations.indexOf(item) + 1}</span></div><Card.Body><div className="card-location">{item.area}<span>·</span>{item.note}</div><Card.Title as="h3">{item.name}</Card.Title><Card.Text>{item.text}</Card.Text><button className="round-arrow" aria-label={`Mở ${item.name}`}>↗</button></Card.Body></Card>;
}

function ExploreSection({ query, setQuery, filter, setFilter, onSelect }) {
  const filtered = useMemo(() => destinations.filter(item => (filter === 'Tất cả' || item.type === filter) && `${item.name} ${item.area} ${item.type}`.toLowerCase().includes(query.toLowerCase().trim())), [query, filter]);
  return <section id="destinations" className="explore-section site-section"><Container fluid><SectionIntro eyebrow="01 / Những nơi đáng nhớ" title={<>Điểm đến có <em>nhịp riêng.</em></>} action={<a className="text-action" href="#search">Mở bản đồ nội dung <span>↗</span></a>}>Không phải danh sách phải đến. Đây là những nơi bạn có thể ở lại lâu hơn một chút.</SectionIntro><div className="featured-destination" data-reveal><div className="featured-copy"><span className="feature-number">01</span><div><div className="eyebrow">Điểm đến của tháng</div><h3>Chùa Hương Tích</h3><p>Trên dãy Hồng Lĩnh, con đường lên chùa đi qua những tầng mây và một khoảng lặng hiếm có.</p><button className="text-action" onClick={() => onSelect(destinations[2])}>Xem câu chuyện <span>↗</span></button></div></div><img src="/chua-huong-tich-commons-wide.jpg" alt="Chùa Hương Tích trên núi" /></div><div id="search" className="explore-tools" data-reveal><div className="search-field"><span>⌕</span><Form.Control aria-label="Tìm kiếm điểm đến" value={query} onChange={event => setQuery(event.target.value)} placeholder="Tìm điểm đến, vùng đất, chủ đề..." /></div><div className="filter-pills">{['Tất cả', 'Biển', 'Lịch sử', 'Tâm linh', 'Sinh thái', 'Ẩm thực'].map(item => <button key={item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="result-count">{filtered.length} câu chuyện</span></div><div className="destination-grid" data-reveal>{filtered.map(item => <DestinationCard key={item.id} item={item} onSelect={onSelect} />)}</div></Container></section>;
}

function Categories() { return <section className="category-section site-section"><Container fluid><SectionIntro eyebrow="02 / Đi theo cảm hứng" title={<>Một vùng đất,<br /><em>nhiều cách chạm.</em></>} /><div className="category-grid">{categories.map(([number, title, description]) => <a href="#destinations" className="category-row" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>↗</b></a>)}</div></Container></section>; }

function Journeys({ onSelect }) { return <section id="journeys" className="journeys-section site-section"><Container fluid><SectionIntro eyebrow="03 / Đã sắp xếp cho bạn" title={<>Lên đường theo<br /><em>một nhịp khác.</em></>} action={<p>Những lộ trình gợi ý để bạn không phải bắt đầu từ một trang trắng.</p>} /><div className="journey-grid">{journeys.map((journey, index) => <article className={`journey-item journey-item-${index + 1}`} key={journey.title} data-reveal><img src={journey.image} alt={journey.title} /><div className="journey-overlay"><span>{journey.meta}</span><h3>{journey.title}</h3><p>{journey.stops.join('  ·  ')}</p><button onClick={() => onSelect({ ...journey, name: journey.title, area: journey.meta, type: 'Hành trình', text: journey.stops.join(' · ') })}>Mở hành trình <b>↗</b></button></div></article>)}</div></Container></section>; }

function Events({ onSelect }) { const [mode, setMode] = useState('list'); return <section id="events" className="events-section site-section"><Container fluid><SectionIntro eyebrow="04 / Lưu lại ngày hẹn" title={<>Lịch mùa<br /><em>ở Hà Tĩnh.</em></>} action={<div className="view-switch"><button className={mode === 'list' ? 'selected' : ''} onClick={() => setMode('list')}>Danh sách</button><button className={mode === 'calendar' ? 'selected' : ''} onClick={() => setMode('calendar')}>Lịch tháng</button></div>} />{mode === 'list' ? <div className="event-list" data-reveal>{events.map(event => <button className="event-row" key={event.title} onClick={() => onSelect({ ...event, name: event.title, area: event.place, type: 'Sự kiện', image: '/cho-tet-co-dam.jpg', text: 'Một gợi ý theo mùa để hành trình Hà Tĩnh có thêm lý do quay lại.' })}><strong>{event.date}<small>THÁNG {event.month}</small></strong><span className="event-line" /><span className="event-copy"><small>Sắp diễn ra</small><b>{event.title}</b><span>{event.place}</span></span><i>↗</i></button>)}</div> : <div className="calendar-panel" data-reveal><div className="calendar-heading"><strong>Tháng 08 / 2026</strong><span>Hà Tĩnh / mùa hẹn</span></div><div className="calendar-grid">{['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN', ...Array.from({ length: 31 }, (_, index) => index + 1)].map((day, index) => <button className={day === 18 || day === 24 ? 'has-event' : ''} key={`${day}-${index}`}>{day}</button>)}</div></div>}</Container></section>; }

function SonTrang() { return <section id="son-trang" className="son-trang-section"><div className="son-trang-image"><img src="/ha-tinh-scenery.jpg" alt="Cảnh quan Hà Tĩnh" /><span>05 / Câu chuyện tiếp theo</span></div><div className="son-trang-copy"><div className="eyebrow"><span className="eyebrow-line" />Sau những chuyến đi</div><h2>Sơn Trang<br /><em>đang đợi bạn.</em></h2><p>Một điểm dừng để nghỉ ngơi, kết nối và tiếp tục những hành trình đẹp hơn tại Hà Tĩnh.</p><a className="btn-coral" href="#top">Khám phá Sơn Trang <span>↗</span></a></div></section>; }

function App() {
  const [open, setOpen] = useState(false); const [active, setActive] = useState('top'); const [query, setQuery] = useState(''); const [filter, setFilter] = useState('Tất cả'); const [selected, setSelected] = useState(null);
  useReveal();
  useEffect(() => { const ids = ['top', 'destinations', 'journeys', 'events', 'son-trang']; const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-25% 0px -65% 0px' }); ids.map(id => document.getElementById(id)).filter(Boolean).forEach(node => observer.observe(node)); return () => observer.disconnect(); }, []);
  return <div className="app-shell"><Header active={active} open={open} setOpen={setOpen} /><main><Hero onExplore={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })} /><section className="manifesto site-section"><Container fluid><div className="manifesto-mark">✳</div><p>Hà Tĩnh không ồn ào để gây ấn tượng.<br /><em>Nó ở lại bằng những điều rất thật.</em></p><span>Đất / nước / ký ức / vị quê</span></Container></section><ExploreSection query={query} setQuery={setQuery} filter={filter} setFilter={setFilter} onSelect={setSelected} /><Categories /><Journeys onSelect={setSelected} /><Events onSelect={setSelected} /><SonTrang /></main><footer className="site-footer"><Container fluid><a className="brand" href="#top"><span className="brand-symbol">ST</span><span><strong>Sơn Trang</strong><small>Hà Tĩnh / journal</small></span></a><p>Khám phá Hà Tĩnh theo nhịp của riêng bạn.</p><small>© 2026 Sơn Trang Explore</small></Container></footer><Modal show={Boolean(selected)} onHide={() => setSelected(null)} centered className="detail-modal"><Modal.Header closeButton><Modal.Title>{selected?.name}</Modal.Title></Modal.Header>{selected && <><Modal.Body><img src={selected.image} alt={selected.name} /><div className="modal-meta"><Badge>{selected.type}</Badge><span>{selected.area}</span></div><p>{selected.text}</p></Modal.Body><Modal.Footer><Button variant="dark" onClick={() => setSelected(null)}>Đóng câu chuyện</Button></Modal.Footer></>}</Modal></div>;
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
