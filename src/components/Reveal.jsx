import useInView from "../hooks/useInView";

export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  stagger = false,
}) {
  const [ref, inView] = useInView();

  const classes = [
    "reveal-on",
    `reveal-${variant}`,
    stagger ? "reveal-stagger" : "",
    inView ? "visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
