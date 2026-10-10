import { useState } from "react";
import { YOUTUBE_VIDEOS } from "../data";

export default function Films() {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section className="films-page-new">

      {/* ============================================================
          HERO
          ============================================================ */}
      <header className="films-hero">
  <video
  className="films-hero-video"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  poster="https://res.cloudinary.com/p4bs69b5/video/upload/so_0,c_fill,ar_1920:600,w_1920,q_auto:best/cinamatic_back.jpg"
>
  <source
    src="https://res.cloudinary.com/p4bs69b5/video/upload/c_fill,ar_1920:600,w_1920,q_auto:best,br_8m,vc_h264/cinamatic_back.mp4"
    type="video/mp4"
  />
</video>

  <div className="films-hero-overlay" aria-hidden="true" />

  <div className="films-hero-text">
    <span className="films-hero-line">Cinematic</span>
    <span className="films-hero-line films-hero-line-2">Memories</span>
  </div>
</header>

      {/* ============================================================
          INTRO PARAGRAPH
          ============================================================ */}
      <div className="films-intro-block">
        <p>
          Our wedding films are designed to be a living, breathing reflection of your unique journey. From the quiet morning anticipation to the vibrant energy of your reception, we craft films that feel as authentic and alive as the day itself. Whether we are producing a short, impactful teaser or a sweeping full-length feature, every single frame is intentionally captured to highlight your genuine connection. We go far beyond merely hitting record; we weave a rich visual narrative that allows you to step right back into the shared laughter, the unspoken glances, and the overwhelming joy. Our deepest hope is to preserve your celebration so vividly that every time you press play, the magic rushes back. This is your story, captured beautifully in motion.
          in motion.
        </p>
      </div>

      {/* ============================================================
          FILM GRID (no filter bar)
          ============================================================ */}
      <div className="films-grid-new">
        {YOUTUBE_VIDEOS.map((video, index) => (
          <article className="film-card-new" key={`${video.id}-${index}`}>
            <div className="film-thumb-new">
              {playingId === index ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="film-iframe-new"
                />
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                    alt={video.title}
                    loading="lazy"
                  />
                  <button
                    type="button"
                    className="film-play-new"
                    aria-label={`Play ${video.title}`}
                    onClick={() => setPlayingId(index)}
                  >
                    <span className="sr-only">Play</span>
                  </button>
                </>
              )}
            </div>

            <h3 className="film-title-new">{video.title}</h3>
          </article>
        ))}
      </div>

    </section>
  );
}