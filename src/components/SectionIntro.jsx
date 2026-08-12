export default function SectionIntro({ eyebrow, title, children, action }) {
  return <div className="section-intro" data-reveal><div><div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div><h2>{title}</h2></div>{children && <p>{children}</p>}{action}</div>;
}
