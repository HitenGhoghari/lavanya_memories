import { useEffect, useState } from "react";
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
          <p>
            Some souls just seem to recognize each other the moment they meet.
            Vishal and Trupti's romance isn’t about being the loudest in the
            room; it’s a beautifully quiet, tender love that radiates genuine
            comfort. Out in the vast, breathing landscape of the outdoors, their
            unspoken chemistry takes center stage. You can feel the calm,
            infinite depth of their relationship in every look he gives her, and
            every time she reaches for him.
          </p>
          <p>
            Their timeless style reflects their partnership perfectly—her soft,
            radiant grace weaving seamlessly into his calm, quiet strength.
            Unposed and completely authentic, their presence together feels like
            a scene pulled from a classic film. Through the warmth they share
            and their easy togetherness.
          </p>
          <p>
            Vishal and Trupti prove that true love is found in the stillness,
            the unspoken trust, and the simple beauty of two hearts finding home
            in one another.
          </p>
        </div>
      </header>

      <figure className="story-cover">
        <img src={photoSrc(project.cover)} alt={`${project.title} cover`} />
      </figure>

      <div className="story-intro">
        <p>{project.description}</p>
      </div>

      {/* <div className="story-gallery">
        {project.photos.map((photo, index) => (
          <figure className="story-photo" key={`${project.slug}-${photo}`}>
            <img src={photoSrc(photo)} alt={`${project.title} frame ${index + 1}`} loading={index > 1 ? 'lazy' : undefined} />
          </figure>
        ))}
      </div> */}

      <div className="story-gallery">
        {(() => {
          const portraits = [];
          const landscapes = [];

          // Separate all photos by orientation
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

          // Build:
          // Portrait + Portrait
          // Landscape
          // Portrait + Portrait
          // Landscape
          // ...
          while (
            portraitIndex < portraits.length ||
            landscapeIndex < landscapes.length
          ) {
            // Two portraits
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

            // One landscape
            if (landscapeIndex < landscapes.length) {
              rows.push({
                type: "landscape",
                photos: [landscapes[landscapeIndex]],
              });

              landscapeIndex += 1;
            }
          }

          return rows.map((row, rowIndex) => {
            // =========================
            // LANDSCAPE
            // =========================
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

            // =========================
            // PORTRAITS
            // =========================
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
        {/* PREVIOUS */}
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

        {/* BACK TO PHOTOGRAPHY */}
        <div className="story-nav story-nav-center">
          <AppLink to={back} className="story-home-link">
            Back to{" "}
            {project.type === "Photography" ? "photography" : "editorial"}
          </AppLink>
        </div>

        {/* NEXT */}
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
