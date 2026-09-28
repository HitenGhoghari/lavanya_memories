import { TESTIMONIALS, photoSrc } from "../data";
import { AppLink } from "../router";

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      {/* HEADER (stays inside a wrap) */}
      <div className="wrap">
        <div className="testimonials-head rv">
          <h2>Love in Their Words</h2>
          <p className="testimonials-sub">
            We have had the incredible honor of documenting the most meaningful chapters of so many beautiful love stories. The kind words shared by our couples reflect the deep trust and genuine connection we build together. Every heartfelt message mirrors the joy, raw emotion, and unforgettable memories we have had the privilege to frame. We are endlessly grateful to every couple who has invited us in, trusted our vision, and allowed us to preserve their unique journey.
          </p>
        </div>
      </div>

      {/* ROWS (each row is a full-width stripe) */}
      <div className="testimonials-list">
        {TESTIMONIALS.map((t, index) => (
          <div
            key={index}
            className={`testimonial-row ${t.image ? "has-image" : ""}`}
          >
            <div className="wrap testimonial-row-inner rv">
              <div className="testimonial-content">
                <h3>{t.name}</h3>
                <p className="testimonial-text">{t.text}</p>
                {t.signature && (
                  <div className="testimonial-signature">{t.signature}</div>
                )}
              </div>

              {t.image && (
                <div className="testimonial-image">
                  {t.projectSlug ? (
                    <AppLink
                      to={`/project/${t.projectSlug}`}
                      className="testimonial-image-link"
                      aria-label={`View ${t.name}'s full story`}
                    >
                      <img
                        src={photoSrc(t.image)}
                        alt={`${t.name} testimonial`}
                        loading="lazy"
                      />
                    </AppLink>
                  ) : (
                    <img
                      src={photoSrc(t.image)}
                      alt={`${t.name} testimonial`}
                      loading="lazy"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}