import { PROFILE, COPY } from "../data/content";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal variant="scale">
          <div className="contact-box">
            <span className="contact-glow" aria-hidden="true" />
            <p className="eyebrow">05 / Contact</p>
            <h2>{COPY.contact.title}</h2>
            <p>{COPY.contact.lead}</p>
            <div className="contact-links">
              <Button href={`mailto:${PROFILE.email}`}>Email</Button>
              <Button href={PROFILE.github} variant="ghost">
                GitHub
              </Button>
              <Button href={PROFILE.linkedin} variant="ghost">
                LinkedIn
              </Button>
              <Button href={PROFILE.resume} variant="ghost">
                Resume
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
