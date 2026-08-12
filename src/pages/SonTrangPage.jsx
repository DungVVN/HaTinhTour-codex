import { Container } from 'react-bootstrap';
import PageShell from '../layouts/PageShell';

export default function SonTrangPage() {
  return <PageShell active="son-trang"><section className="son-trang-section son-trang-page"><div className="son-trang-image"><img src="/ha-tinh-scenery.jpg" alt="Cảnh quan Hà Tĩnh" /><span>04 / Câu chuyện tiếp theo</span></div><div className="son-trang-copy"><div className="eyebrow"><span className="eyebrow-line" />Sau những chuyến đi</div><h2>Sơn Trang<br /><em>đang đợi bạn.</em></h2><p>Một điểm dừng để nghỉ ngơi, kết nối và tiếp tục những hành trình đẹp hơn tại Hà Tĩnh.</p><a className="btn-coral" href="#/">Về trang chủ <span>↗</span></a></div></section><section className="site-section"><Container fluid><h2 className="page-statement">Nghỉ lại một chút.<br /><em>Rồi đi tiếp.</em></h2></Container></section></PageShell>;
}
