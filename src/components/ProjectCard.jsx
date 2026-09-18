import Button from "./Button";
import useTilt from "../hooks/useTilt";

export default function ProjectCard({ project, onOpen }) {
  const { ref, onPointerMove, onPointerLeave } = useTilt(4);

  return (
    <article
      className="project-card tilt"
      id={`project-${project.id}`}
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="project-preview" aria-hidden="true">
        <div className="preview-window">
          <span className="preview-line">POST /auth/login</span>
          <span className="preview-line">GET /profiles/:id</span>
          <span className="preview-line">WS /chat · socket.io</span>
          <span className="preview-line">Authorization: Bearer jwt</span>
        </div>
        <span className="pill">{project.tag}</span>
      </div>
      <div className="project-body">
        <p className="project-tag">{project.stack.slice(0, 4).join(" · ")}</p>
        <h3>{project.name}</h3>
        <p>{project.blurb}</p>
        <div className="feature-chips">
          {project.features.slice(0, 4).map((feature, i) => (
            <span key={feature} style={{ transitionDelay: `${i * 50}ms` }}>
              {feature}
            </span>
          ))}
        </div>
        <div className="card-actions">
          <Button onClick={() => onOpen(project)}>View case study</Button>
          <Button href={project.github} variant="ghost">
            GitHub
          </Button>
          {project.live ? (
            <Button href={project.live} variant="ghost">
              Live Demo
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
