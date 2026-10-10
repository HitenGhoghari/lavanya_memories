import { useEffect, useRef } from "react";
import { EDITORIAL_MOSAIC, photoSrc } from "../data";

const COPIES = 3;

export default function Editorial() {
  const containerRef = useRef(null);
  const copyRefs = useRef([]);
  const copyHRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const firstCopy = copyRefs.current[0];
    if (!container || !firstCopy) return;

    const measure = () => {
      copyHRef.current = firstCopy.offsetHeight;
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(firstCopy);

    // Start in the middle copy so the user can scroll both ways immediately
    requestAnimationFrame(() => {
      measure();
      container.scrollTop = copyHRef.current;
    });

    // Silent infinite reset — runs on every scroll event
    const onScroll = () => {
      const h = copyHRef.current;
      if (!h) return;
      const y = container.scrollTop;

      // Passed into the third copy — jump back up one copy (identical content)
      if (y >= h * 2) {
        container.scrollTop = y - h;
      }
      // Passed into the first copy — jump forward one copy
      else if (y < h) {
        container.scrollTop = y + h;
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="ivory-editorial" ref={containerRef}>
      {Array.from({ length: COPIES }).map((_, copy) => (
        <div
          className="ivory-copy"
          key={copy}
          ref={(el) => {
            copyRefs.current[copy] = el;
          }}
        >
          {EDITORIAL_MOSAIC.map((img, i) => (
            <div className="ivory-card" key={`${copy}-${i}`}>
              <img
                src={photoSrc(img)}
                alt=""
                loading={copy === 0 && i < 6 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}