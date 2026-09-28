import { useState } from "react";
import { YOUTUBE_VIDEOS } from "../data";

export default function FilmsSection() {
  // Track which video is currently playing inline
  const [playingId, setPlayingId] = useState(null);

  return (
    <section className="home-films" id="films">
      <div className="wrap">
        <div className="home-films-head rv">
          <h2>Cinematic Memories</h2>
          <p className="home-films-sub">
            Every sequence we film is a vibrant tribute to the energy, emotion,
            and unforgettable memories of your celebration. From the soft,
            nervous anticipation right before the ceremony to the full-hearted
            momentum of your reception, our films are tailored to be deeply
            moving and entirely yours. Whether we are crafting a brief,
            impactful teaser or a sweeping cinematic feature, every edit is
            driven by rhythm, purpose, and genuine soul. We go far beyond merely
            recording the day's timeline; our goal is to build an immersive
            visual experience that pulls you right back into the laughter, the
            quick glances, and the overwhelming joy whenever you press play.
            This is your unique legacy, captured in beautiful, living motion.
          </p>
        </div>

        <div className="home-films-grid">
          {YOUTUBE_VIDEOS.map((video, index) => (
            <div key={index} className="home-film-card rv">
              <div className="home-film-thumb">
                {playingId === video.id ? (
                  // If playing, show the YouTube iframe
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="home-film-iframe"
                  />
                ) : (
                  // Otherwise, show the thumbnail and play button
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
                      alt={video.title}
                      loading="lazy"
                    />
                    <button
                      className="home-film-play"
                      onClick={() => setPlayingId(video.id)}
                      aria-label={`Play ${video.title}`}
                    >
                      <span className="sr-only">Play</span>
                    </button>
                  </>
                )}
              </div>
              <div className="home-film-info">
                <h3>{video.title}</h3>
                {video.desc && <p>{video.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
