import useInView from "../hooks/useInView";

export default function ExperienceCard({ experience }) {
  const [timelineRef, timelineInView] = useInView({ threshold: 0.2 });

  return (
    <article className="exp-card">
      <div className="exp-top">
        <div>
          <h3 className="exp-role">{experience.role}</h3>
          <p className="exp-meta">
            {experience.company} · {experience.location}
          </p>
        </div>
        <span className="exp-badge">{experience.duration}</span>
      </div>
      <div className="exp-body">
        <div
          className={`timeline reveal-stagger ${timelineInView ? "visible" : ""}`}
          ref={timelineRef}
        >
          {experience.highlights.map((item) => (
            <div className="tl-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="exp-side">
          <p>{experience.summary}</p>
          <div className="tag-wrap">
            {experience.tools.map((tool, i) => (
              <span
                className="tag"
                key={tool}
                style={{ transitionDelay: `${i * 35}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
