import { PROFILE } from "../data/content";

export default function SocialLinks({ className = "social-row" }) {
  return (
    <div className={className}>
      <a href={PROFILE.github} rel="noreferrer">
        GitHub
      </a>
      <a href={PROFILE.linkedin} rel="noreferrer">
        LinkedIn
      </a>
      <a href={`mailto:${PROFILE.email}`}>Email</a>
    </div>
  );
}
