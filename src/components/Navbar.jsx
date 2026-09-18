import { useEffect, useState } from "react";
import { PROFILE } from "../data/content";
import Button from "./Button";

const BRAND_WORDS = ["page", "pixel", "poem"];

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [brandWord, setBrandWord] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const scrollable = document.body.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);

      const ids = LINKS.map((link) => link.href.slice(1));
      let current = "";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setBrandWord((i) => (i + 1) % BRAND_WORDS.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={close} aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-spark" />
            <span className="brand-ring" />
          </span>
          <span className="brand-copy">
            <span className="brand-prompt">prompt →</span>
            <span className="brand-word" key={brandWord}>
              {BRAND_WORDS[brandWord]}
            </span>
            <span className="brand-cursor" />
          </span>
        </a>

        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? "active" : ""}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <Button href={PROFILE.resume} variant="ghost">
            Resume
          </Button>
        </nav>
      </div>

      <span
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
}
