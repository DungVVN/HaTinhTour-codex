import { useMemo, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import PageShell from '../layouts/PageShell';
import SectionIntro from '../components/SectionIntro';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/mockData';

export default function DestinationsPage({ onSelect }) {
  const [query, setQuery] = useState(''); const [filter, setFilter] = useState('Tất cả');
  const filtered = useMemo(() => destinations.filter(item => (filter === 'Tất cả' || item.type === filter) && `${item.name} ${item.area} ${item.type}`.toLowerCase().includes(query.toLowerCase().trim())), [query, filter]);
  return <PageShell active="destinations"><section className="site-section inner-page-hero"><Container fluid><SectionIntro eyebrow="01 / Những nơi đáng nhớ" title={<>Điểm đến có <em>nhịp riêng.</em></>}><span>Chọn một vùng đất để bắt đầu câu chuyện của bạn tại Hà Tĩnh.</span></SectionIntro><div className="explore-tools"><div className="search-field"><span>⌕</span><Form.Control aria-label="Tìm kiếm điểm đến" value={query} onChange={event => setQuery(event.target.value)} placeholder="Tìm điểm đến, vùng đất, chủ đề..." /></div><div className="filter-pills">{['Tất cả', 'Biển', 'Lịch sử', 'Tâm linh', 'Sinh thái', 'Ẩm thực'].map(item => <button key={item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="result-count">{filtered.length} câu chuyện</span></div><div className="destination-grid">{filtered.map((item, index) => <DestinationCard key={item.id} item={item} index={index} onSelect={onSelect} />)}</div></Container></section></PageShell>;
}
