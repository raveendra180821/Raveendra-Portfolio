import { useEffect, useState } from "react";
import useInView from "../hooks/useInView";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const LINES = [
  "I should tell you something.",
  "This whole website was completely designed and coded by AI.",
];

const TYPE_MS = 78;
const LINE_PAUSE_MS = 900;
const FIRST_PAUSE_MS = 500;

function markLine(text) {
  return text.split(/(AI)/g).map((part, i) =>
    part === "AI" ? (
      <em className="ai-mark" key={`${part}-${i}`}>
        {part}
      </em>
    ) : (
      part
    )
  );
}

export default function AiCredit() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const reducedMotion = usePrefersReducedMotion();
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    if (reducedMotion) {
      setLine(LINES.length - 1);
      setChars(LINES[LINES.length - 1].length);
      return undefined;
    }

    const full = LINES[line];
    if (!full) return undefined;

    if (chars < full.length) {
      const wait = chars === 0 && line === 0 ? FIRST_PAUSE_MS : TYPE_MS;
      const step = setTimeout(() => setChars((n) => n + 1), wait);
      return () => clearTimeout(step);
    }

    if (line < LINES.length - 1) {
      const pause = setTimeout(() => {
        setLine((n) => n + 1);
        setChars(0);
      }, LINE_PAUSE_MS);
      return () => clearTimeout(pause);
    }

    return undefined;
  }, [inView, reducedMotion, line, chars]);

  const finished = line === LINES.length - 1 && chars >= LINES[line].length;

  return (
    <section
      className={`ai-voice ${inView ? "visible" : ""} ${finished ? "done" : ""}`}
      ref={ref}
      aria-live="polite"
    >
      <p className="sr-only">
        This website was completely designed and coded by AI.
      </p>

      <div className="ai-voice-lines">
        {LINES.map((full, i) => {
          if (i > line) return null;

          const text = i < line || reducedMotion ? full : full.slice(0, chars);
          const isActive = i === line && !finished;

          return (
            <p
              className={`ai-voice-line ${i === 0 ? "lead" : "main"} ${isActive ? "live" : "said"}`}
              key={full}
            >
              {markLine(text)}
              {isActive || (finished && i === line) ? (
                <span
                  className={`ai-voice-caret ${finished ? "rest" : ""}`}
                  aria-hidden="true"
                />
              ) : null}
            </p>
          );
        })}
      </div>
    </section>
  );
}
