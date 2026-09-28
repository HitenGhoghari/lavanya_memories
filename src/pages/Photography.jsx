import { PROJECTS, photoSrc } from "../data";
import { AppLink } from "../router";

export default function Photography() {
  const projects = PROJECTS.filter((project) => project.type === "Photography");

  return (
    <section className="photography-page">
      <header className="photography-head">
        <div className="photography-title-block">
          <h2 className="photography-title">
            Captured
            <br />
            <span>Memories</span>
          </h2>
        </div>
        <div className="photography-paragraph-block">
          <p>
            Your wedding day is a living, breathing story, and our focus is on capturing its true heartbeat. Rather than simply taking photographs, we preserve the genuine movement, unscripted emotions, and sweeping energy that make your celebration entirely your own. From the nervous, quiet anticipation just before the vows to the roaring joy of the reception, every detail is documented with deep, thoughtful intention. We look for the raw beauty of your day as it naturally unfolds—the stolen glances, the sudden laughter, and the grand milestones. When you look back at this collection years from now, our hope is that you don't just remember how the day looked, but that you instantly feel the exact warmth, love, and magic of those moments all over again.
          </p>
        </div>
      </header>

      <div className="client-grid">
        {projects.map((project, index) => (
          <AppLink
            to={`/project/${project.slug}`}
            className={`client-card client-card-${index + 1}`}
            key={project.slug}
          >
            <div className="client-image-wrap">
              <img
                src={photoSrc(project.cover)}
                alt={`${project.title} wedding cover`}
                className="client-image"
              />
              <div className="client-overlay">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>Open Photos ↗</span>
              </div>
            </div>
            <div className="client-caption">
              <div>
                <h2>{project.title}</h2>
                <p>{project.location}</p>
              </div>
              <span>{project.year}</span>
            </div>
          </AppLink>
        ))}
      </div>
    </section>
  );
}
