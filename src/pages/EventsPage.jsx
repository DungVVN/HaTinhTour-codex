import { useState } from 'react';
import { Container } from 'react-bootstrap';
import PageShell from '../layouts/PageShell';
import SectionIntro from '../components/SectionIntro';
import { events } from '../data/mockData';

export default function EventsPage({ onSelect }) {
  const [mode, setMode] = useState('list');
  return <PageShell active="events"><section className="site-section inner-page-hero"><Container fluid><SectionIntro eyebrow="03 / Lưu lại ngày hẹn" title={<>Lịch mùa<br /><em>ở Hà Tĩnh.</em></>} action={<div className="view-switch"><button className={mode === 'list' ? 'selected' : ''} onClick={() => setMode('list')}>Danh sách</button><button className={mode === 'calendar' ? 'selected' : ''} onClick={() => setMode('calendar')}>Lịch tháng</button></div>} />{mode === 'list' ? <div className="event-list">{events.map(event => <button className="event-row" key={event.id} onClick={() => onSelect({ ...event, name: event.title, area: event.place, type: 'Sự kiện', text: 'Một gợi ý theo mùa để hành trình Hà Tĩnh có thêm lý do quay lại.' })}><strong>{event.date}<small>THÁNG {event.month}</small></strong><span className="event-line" /><span className="event-copy"><small>Sắp diễn ra</small><b>{event.title}</b><span>{event.place}</span></span><i>↗</i></button>)}</div> : <div className="calendar-panel"><div className="calendar-heading"><strong>Tháng 08 / 2026</strong><span>Hà Tĩnh / mùa hẹn</span></div><div className="calendar-grid">{['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN', ...Array.from({ length: 31 }, (_, index) => index + 1)].map((day, index) => <button className={day === 18 || day === 24 ? 'has-event' : ''} key={`${day}-${index}`}>{day}</button>)}</div></div>}</Container></section></PageShell>;
}
