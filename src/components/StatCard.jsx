import useInView from "../hooks/useInView";
import useCountUp from "../hooks/useCountUp";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const NUMERIC = /^(\d+)(\D*)$/;

export default function StatCard({ stat, index }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const reducedMotion = usePrefersReducedMotion();
  const match = NUMERIC.exec(stat.value);
  const count = useCountUp(match ? Number(match[1]) : 0, inView, !reducedMotion);

  return (
    <article
      className={`stat-card reveal-on reveal-right ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 110}ms` }}
      ref={ref}
    >
      <strong>{match ? `${count}${match[2]}` : stat.value}</strong>
      <span>{stat.label}</span>
    </article>
  );
}
