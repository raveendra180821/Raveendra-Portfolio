import { useState } from "react";
import { PROJECTS, COPY } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle
          eyebrow="04 / Projects"
          title={COPY.projects.title}
          lead={COPY.projects.lead}
        />
        <Reveal className="project-grid" stagger>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActive} />
          ))}
        </Reveal>
      </div>

      {active ? (
        <Modal title={active.name} onClose={() => setActive(null)}>
          <div className="modal-block">
            <h3>Overview</h3>
            <p>{active.overview}</p>
          </div>
          <div className="modal-block">
            <h3>Why I built it</h3>
            <p>{active.why}</p>
          </div>
          <div className="modal-block">
            <h3>How I built it</h3>
            <p>{active.how}</p>
          </div>
          {active.realtime ? (
            <div className="modal-block">
              <h3>Chat</h3>
              <p>{active.realtime}</p>
            </div>
          ) : null}
          <div className="modal-block">
            <h3>What was hard</h3>
            <p>{active.hard}</p>
          </div>
          <div className="modal-block">
            <h3>Stack</h3>
            <div className="tag-wrap">
              {active.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="modal-block">
            <h3>What it does</h3>
            <ul>
              {active.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="btn-row">
            <Button href={active.github}>GitHub</Button>
            {active.live ? (
              <Button href={active.live} variant="ghost">
                Live Demo
              </Button>
            ) : (
              <span className="placeholder-note">Live demo coming later.</span>
            )}
          </div>
        </Modal>
      ) : null}
    </section>
  );
}
