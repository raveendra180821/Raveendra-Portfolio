import useTilt from "../hooks/useTilt";

export default function SkillCard({ group }) {
  const { ref, onPointerMove, onPointerLeave } = useTilt(7);

  return (
    <article
      className="skill-card tilt"
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <h3>{group.label}</h3>
      <ul className="skill-list">
        {group.items.map((item, i) => (
          <li key={item} style={{ transitionDelay: `${i * 45}ms` }}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
