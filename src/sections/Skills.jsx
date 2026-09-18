import { SKILL_GROUPS, COPY } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="03 / Skills"
          title={COPY.skills.title}
          lead={COPY.skills.lead}
        />
        <Reveal className="skill-grid" stagger>
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
