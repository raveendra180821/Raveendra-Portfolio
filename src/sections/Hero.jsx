import { PROFILE, ROLES } from "../data/content";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import useTypewriter from "../hooks/useTypewriter";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const typed = useTypewriter(ROLES, !reducedMotion);

  return (
    <section className="hero" id="top">
      <div className="hero-aura" aria-hidden="true">
        <span className="aura aura-gold" />
        <span className="aura aura-teal" />
        <span className="aura aura-deep" />
      </div>

      <div className="container hero-inner">
        <div className="kicker reveal">
          <span className="kicker-dot" aria-hidden="true" />
            {PROFILE.kicker}
        </div>

        <h1 className="hero-name" aria-label={PROFILE.name}>
          {[...PROFILE.name].map((char, i) => (
            <span
              className="hero-letter"
              key={`${char}-${i}`}
              style={{ animationDelay: `${0.12 + i * 0.05}s` }}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </h1>

        <h2 className="hero-role reveal reveal-d2" aria-label={PROFILE.title}>
          <span aria-hidden="true">{typed}</span>
          <span className="caret" aria-hidden="true" />
        </h2>

        <p className="hero-copy reveal reveal-d2">{PROFILE.headline}</p>

        <div
          className="stack-pills reveal reveal-d3"
          aria-label="Core technologies"
        >
          {PROFILE.stack.map((item, i) => (
            <span
              className="pill pill-pop"
              key={item}
              style={{ animationDelay: `${0.5 + i * 0.08}s` }}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="btn-row reveal reveal-d3">
          <Button href="#projects">View Projects</Button>
          <Button href={PROFILE.resume} variant="ghost">
            Download Resume
          </Button>
          <Button href="#contact" variant="ghost">
            Contact Me
          </Button>
        </div>

        <SocialLinks />

        <a className="scroll-cue reveal reveal-d3" href="#about">
          <span className="scroll-cue-track" aria-hidden="true">
            <span className="scroll-cue-dot" />
          </span>
          Scroll
        </a>
      </div>
    </section>
  );
}
