export default function Button({ href, children, variant = "primary", ...props }) {
  const className = `btn ${variant === "ghost" ? "btn-ghost" : "btn-primary"}`;

  if (href) {
    const extra =
      href.endsWith(".pdf") ? { download: true } : {};

    return (
      <a className={className} href={href} {...extra} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
}
