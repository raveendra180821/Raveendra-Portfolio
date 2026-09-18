import { PROFILE, COPY } from "../data/content";
import AiCredit from "./AiCredit";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <AiCredit />

        <div className="footer-grid">
          <div className="footer-brand-block">
            <a className="footer-logo" href="#top">
              {PROFILE.name}
            </a>
            <p>{COPY.footer}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <p className="footer-label">On this page</p>
            {LINKS.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-nav">
            <p className="footer-label">Elsewhere</p>
            <a href={PROFILE.github} rel="noreferrer">
              GitHub
            </a>
            <a href={PROFILE.linkedin} rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${PROFILE.email}`}>Email</a>
            <a href={PROFILE.resume}>Resume</a>
          </div>
        </div>

        <div className="footer-bar">
          <span>© 2026 {PROFILE.name}</span>
          <span>{PROFILE.location}</span>
        </div>
      </div>
    </footer>
  );
}
