import { useEffect, useMemo, useState } from "react";
import { PHOTOS, photoSrc } from "../data";

const AUTO_DELAY = 2000;   // 2 seconds

export default function Gallery() {
  const [cat, setCat]           = useState("All");
  const [start, setStart]       = useState(0);
  const [noTransition, setNoTransition] = useState(false);

  const shown = useMemo(
    () => (cat === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat)),
    [cat],
  );

  // Always carousel as long as there is at least one photo.
  const hasCarousel = shown.length >= 1;

  // Whenever the category changes, snap back to the middle copy
  // without animating, then re-enable the transition on the next frame.
  useEffect(() => {
    setNoTransition(true);
    setStart(shown.length);
    const id = requestAnimationFrame(() => setNoTransition(false));
    return () => cancelAnimationFrame(id);
  }, [cat, shown.length]);

  // Advance one card every 2 seconds. No pause-on-hover.
  useEffect(() => {
    if (!hasCarousel) return;
    const timer = window.setInterval(() => {
      setStart((current) => current + 1);
    }, AUTO_DELAY);
    return () => window.clearInterval(timer);
  }, [hasCarousel]);

  // Silently jump back when we reach the start of the third copy.
  const handleTrackTransitionEnd = (event) => {
    if (event.propertyName !== "transform" || !hasCarousel) return;
    if (start >= shown.length * 2) {
      setNoTransition(true);
      setStart(shown.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoTransition(false));
      });
    }
  };

  // Three copies of the list — enough to loop forward forever.
  const carouselPhotos = hasCarousel
    ? [...shown, ...shown, ...shown]
    : shown;

  return (
    <section className="work" id="work">
      <div className="work-head rv">
        <h2>A Legacy of Love</h2>
        <p className="work-paragraph">
          Having had the privilege of documenting celebrations in various
          cities, cultures, and traditions, our path has been deeply inspiring.
          Each couple has shared a unique rhythm with us, offering a fresh
          perspective on how love expresses itself. Whether standing quietly in
          the serenity of ancient rituals or capturing the electric energy of
          modern festivities, we have seen love shine in all its forms. Our
          cameras have followed joyous processions through vibrant streets,
          caught the magical glow of evening celebrations, and crossed oceans
          for seaside vows. These experiences have done far more than refine our
          artistry—they have grounded us in human connection. We’ve come to see
          that while traditions, locations, and colors shift, the feeling of
          true devotion remains identical everywhere. That truth keeps us
          approaching every wedding with wonder and a fresh spirit. We show up
          with empathy, intuition, and a quiet promise to honor your day with
          complete heart and authenticity. At Lavanya Memories, we don't count
          our journey in milestones, but in the unforgettable moments that stay
          with us forever.
        </p>
      </div>

      <div className="wrap">
        <div className="work-carousel">
          <div
            className="work-track"
            style={{
              "--work-start": start,
              transition: noTransition
                ? "none"
                : "transform .85s cubic-bezier(.22, 1, .36, 1)",
            }}
            onTransitionEnd={handleTrackTransitionEnd}
          >
            {carouselPhotos.map((photo, index) => (
              <div className="work-card" key={`${photo.img}-${index}`}>
                <span className="work-card-image">
                  <img src={photoSrc(photo.img)} alt={photo.title} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}