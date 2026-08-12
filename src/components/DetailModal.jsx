import { Badge, Button, Modal } from 'react-bootstrap';

export default function DetailModal({ item, onClose }) {
  return <Modal show={Boolean(item)} onHide={onClose} centered className="detail-modal"><Modal.Header closeButton><Modal.Title>{item?.name}</Modal.Title></Modal.Header>{item && <><Modal.Body><img src={item.image} alt={item.name} /><div className="modal-meta"><Badge>{item.type}</Badge><span>{item.area}</span></div><p>{item.text || item.stops?.join(' · ')}</p></Modal.Body><Modal.Footer><Button variant="dark" onClick={onClose}>Đóng câu chuyện</Button></Modal.Footer></>}</Modal>;
}
