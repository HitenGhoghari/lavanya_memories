const FILMS = [
  { title: 'The Beginning', year: '2026', video: '/videos/starter.mp4' },
  { title: 'A Moving Story', year: '2026', video: '/videos/title.mp4' },
]

export default function Films() {
  return (
    <section className="films-page">
      <header className="archive-head films-head">
        <div className="archive-title-row">
          <span className="archive-label">03 / Films</span>
          <p className="eyebrow">Moving images</p>
        </div>
        <div className="archive-title-content">
          <h1>Films</h1>
          <p className="archive-intro">
            Short films and moving stories built around atmosphere, people and place.
          </p>
        </div>
      </header>

      <div className="films-grid">
        {FILMS.map((film, index) => (
          <article className={`film-card film-card-${index + 1}`} key={film.title}>
            <div className="film-frame">
              <span className="film-index">{String(index + 1).padStart(2, '0')}</span>
              <video
                src={film.video}
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />
            </div>
            <div className="film-info">
              <div>
                <h2>{film.title}</h2>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
