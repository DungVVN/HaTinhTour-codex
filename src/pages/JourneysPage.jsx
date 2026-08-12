import { Container } from 'react-bootstrap';
import PageShell from '../layouts/PageShell';
import SectionIntro from '../components/SectionIntro';
import { journeys } from '../data/mockData';

export default function JourneysPage({ onSelect }) {
  return <PageShell active="journeys"><section className="journeys-section site-section inner-page-hero"><Container fluid><SectionIntro eyebrow="02 / Đã sắp xếp cho bạn" title={<>Lên đường theo<br /><em>một nhịp khác.</em></>}><span>Những lộ trình gợi ý để bạn không phải bắt đầu từ một trang trắng.</span></SectionIntro><div className="journey-grid">{journeys.map((journey, index) => <article className={`journey-item journey-item-${index + 1}`} key={journey.id} onClick={() => onSelect({ ...journey, name: journey.title, area: journey.meta, type: 'Hành trình', text: journey.stops.join(' · ') })}><img src={journey.image} alt={journey.title} /><div className="journey-overlay"><span>{journey.meta}</span><h3>{journey.title}</h3><p>{journey.stops.join(' · ')}</p><button>Mở hành trình <b>↗</b></button></div></article>)}</div></Container></section></PageShell>;
}
