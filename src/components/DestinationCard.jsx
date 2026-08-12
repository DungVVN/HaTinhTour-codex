import { Badge, Card } from 'react-bootstrap';

export default function DestinationCard({ item, index, onSelect }) {
  return <Card className={`destination-card tone-${item.tone}`} onClick={() => onSelect?.(item)}><div className="card-image-wrap"><Card.Img variant="top" src={item.image} alt={item.name} /><Badge>{item.type}</Badge><span className="image-index">0{index + 1}</span></div><Card.Body><div className="card-location">{item.area}<span>·</span>{item.note}</div><Card.Title as="h3">{item.name}</Card.Title><Card.Text>{item.text}</Card.Text><button className="round-arrow" aria-label={`Mở ${item.name}`}>↗</button></Card.Body></Card>;
}
