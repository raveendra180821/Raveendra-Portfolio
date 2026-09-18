import { PROFILE, STATS, COPY } from "../data/content";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle eyebrow="01 / About" title={COPY.about.title} lead={COPY.about.lead} />
        <div className="about-grid">
          <Reveal className="about-copy" variant="left" stagger>
            {PROFILE.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <div className="stat-grid">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
