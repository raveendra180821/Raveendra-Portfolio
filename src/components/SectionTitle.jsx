import useInView from "../hooks/useInView";

export default function SectionTitle({ eyebrow, title, lead }) {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <div
      className={`section-head reveal-stagger ${inView ? "visible" : ""}`}
      ref={ref}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}
