import { EXPERIENCE, COPY } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import Reveal from "../components/Reveal";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="02 / Experience"
          title={COPY.experience.title}
          lead={COPY.experience.lead}
        />
        <Reveal>
          <ExperienceCard experience={EXPERIENCE} />
        </Reveal>
      </div>
    </section>
  );
}
