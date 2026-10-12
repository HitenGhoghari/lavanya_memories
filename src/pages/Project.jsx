import { useEffect, useRef, useState } from "react";
import { PROJECTS, photoSrc } from "../data";
import { AppLink, usePath } from "../router";

export default function Project() {
  const path = usePath();
  const slug = decodeURIComponent(path.split("/project/")[1] || "");
  const project = PROJECTS.find((item) => item.slug === slug);

  const photographyProjects = PROJECTS.filter(
    (item) => item.type === project?.type,
  );

  const currentIndex = photographyProjects.findIndex(
    (item) => item.slug === slug,
  );

  const previousProject =
    currentIndex > 0 ? photographyProjects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < photographyProjects.length - 1
      ? photographyProjects[currentIndex + 1]
      : null;

  const [widePhotos, setWidePhotos] = useState(new Set());

  // Reference to the <audio> element so we can stop playback
  // when the user navigates away from this project page.
  const audioRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    let cancelled = false;

    const detectOrientations = async () => {
      const wide = new Set();

      await Promise.all(
        project.photos.map(
          (photo, index) =>
            new Promise((resolve) => {
              const image = new Image();

              image.onload = () => {
                if (image.naturalWidth > image.naturalHeight) {
                  wide.add(index);
                }
                resolve();
              };

              image.onerror = resolve;
              image.src = photoSrc(photo);
            }),
        ),
      );

      if (!cancelled) {
        setWidePhotos(wide);
      }
    };

    detectOrientations();

    return () => {
      cancelled = true;
    };
  }, [project]);

  // Stop the audio when leaving the project page.
  // Without this, a playing song would keep playing in the
  // background after the user navigates to another page.
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  if (!project)
    return (
      <section className="not-found">
        <div>
          <h1>Photos not found.</h1>
          <AppLink to="/">Return home</AppLink>
        </div>
      </section>
    );

  const back = project.type === "Photography" ? "/photography" : "/editorial";

  return (
    <article className="story-page">
      <header className="story-header">
        <h2>{project.title}</h2>
        <div className="story-header-p">
          {Array.isArray(project.story) && project.story.length > 0 ? (
            project.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))
          ) : (
            <p>{project.description}</p>
          )}
        </div>
      </header>

      {/* ---------- SONG PLAYER (only if this project has one) ---------- */}
      {project.song && (
        <div className="story-song">
          <h3 className="story-song-title">Play Song</h3>
          <audio
            ref={audioRef}
            controls
            preload="metadata"
            src={project.song}
            className="story-song-player"
          >
            Your browser does not support audio playback.
          </audio>
        </div>
      )}

      <figure className="story-cover">
        <img src={photoSrc(project.cover)} alt={`${project.title} cover`} />
      </figure>

      <div className="story-intro">
        <p>{project.description}</p>
      </div>

      <div className="story-gallery">
        {(() => {
          const portraits = [];
          const landscapes = [];

          project.photos.forEach((photo, index) => {
            if (widePhotos.has(index)) {
              landscapes.push({ photo, index });
            } else {
              portraits.push({ photo, index });
            }
          });

          const rows = [];
          let portraitIndex = 0;
          let landscapeIndex = 0;

          while (
            portraitIndex < portraits.length ||
            landscapeIndex < landscapes.length
          ) {
            if (portraitIndex < portraits.length) {
              const portraitPair = portraits.slice(
                portraitIndex,
                portraitIndex + 2,
              );

              rows.push({
                type: "portraits",
                photos: portraitPair,
              });

              portraitIndex += 2;
            }

            if (landscapeIndex < landscapes.length) {
              rows.push({
                type: "landscape",
                photos: [landscapes[landscapeIndex]],
              });

              landscapeIndex += 1;
            }
          }

          return rows.map((row, rowIndex) => {
            if (row.type === "landscape") {
              const { photo, index } = row.photos[0];

              return (
                <figure
                  className="story-photo story-photo-wide"
                  key={`${project.slug}-landscape-${rowIndex}`}
                >
                  <img
                    src={photoSrc(photo)}
                    alt={`${project.title} frame ${index + 1}`}
                    loading={index > 1 ? "lazy" : undefined}
                  />
                </figure>
              );
            }

            return (
              <div
                className="story-photo-row"
                key={`${project.slug}-portrait-row-${rowIndex}`}
              >
                {row.photos.map(({ photo, index }) => (
                  <figure
                    className="story-photo"
                    key={`${project.slug}-${photo}-${index}`}
                  >
                    <img
                      src={photoSrc(photo)}
                      alt={`${project.title} frame ${index + 1}`}
                      loading={index > 1 ? "lazy" : undefined}
                    />
                  </figure>
                ))}
              </div>
            );
          });
        })()}
      </div>

      <footer className="story-footer">
        <div className="story-nav story-nav-prev">
          {previousProject ? (
            <AppLink
              to={`/project/${previousProject.slug}`}
              className="story-nav-link"
            >
              <span className="story-nav-arrow">←</span>
              <span>
                Previous <strong>{previousProject.title}</strong>
              </span>
            </AppLink>
          ) : null}
        </div>

        <div className="story-nav story-nav-center">
          <AppLink to={back} className="story-home-link">
            Back to{" "}
            {project.type === "Photography" ? "photography" : "editorial"}
          </AppLink>
        </div>

        <div className="story-nav story-nav-next">
          {nextProject ? (
            <AppLink
              to={`/project/${nextProject.slug}`}
              className="story-nav-link"
            >
              <span>
                Next <strong>{nextProject.title}</strong>
              </span>
              <span className="story-nav-arrow">→</span>
            </AppLink>
          ) : null}
        </div>
      </footer>
    </article>
  );
}