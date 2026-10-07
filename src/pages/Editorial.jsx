// import { useEffect, useRef } from 'react'
// import { EDITORIAL_MOSAIC, photoSrc } from '../data'

// const COPIES = 3

// export default function Editorial() {
//   const trackRef = useRef(null)
//   const copyRef  = useRef(null)

//   const offsetRef = useRef(0)
//   const targetRef = useRef(0)
//   const copyHRef  = useRef(0)
//   const rafRef    = useRef(0)

//   useEffect(() => {
//     const track = trackRef.current
//     const firstCopy = copyRef.current
//     if (!track || !firstCopy) return

//     const measure = () => {
//       copyHRef.current = firstCopy.offsetHeight
//     }

//     measure()
//     const ro = new ResizeObserver(measure)
//     ro.observe(firstCopy)

//     // Start in the MIDDLE copy so you can scroll both ways right away.
//     requestAnimationFrame(() => {
//       measure()
//       offsetRef.current = -copyHRef.current
//       targetRef.current = offsetRef.current
//     })

//     // --- Input: mouse wheel ---
//     const onWheel = (e) => {
//       e.preventDefault()
//       targetRef.current -= e.deltaY * 1.3
//     }
//     window.addEventListener('wheel', onWheel, { passive: false })

//     // --- Input: touch drag ---
//     let touchY = 0
//     const onTouchStart = (e) => { touchY = e.touches[0].clientY }
//     const onTouchMove = (e) => {
//       const y = e.touches[0].clientY
//       targetRef.current += y - touchY
//       touchY = y
//     }
//     window.addEventListener('touchstart', onTouchStart, { passive: true })
//     window.addEventListener('touchmove',  onTouchMove,  { passive: true })

//     // --- Animation loop ---
//     const tick = () => {
//       offsetRef.current += (targetRef.current - offsetRef.current) * 0.11

//       const h = copyHRef.current
//       if (h > 0) {
//         while (offsetRef.current < -2 * h) {
//           offsetRef.current += h
//           targetRef.current += h
//         }
//         while (offsetRef.current > 0) {
//           offsetRef.current -= h
//           targetRef.current -= h
//         }
//       }

//       track.style.transform = `translate3d(0, ${offsetRef.current}px, 0)`
//       rafRef.current = requestAnimationFrame(tick)
//     }
//     rafRef.current = requestAnimationFrame(tick)

//     return () => {
//       window.removeEventListener('wheel', onWheel)
//       window.removeEventListener('touchstart', onTouchStart)
//       window.removeEventListener('touchmove',  onTouchMove)
//       cancelAnimationFrame(rafRef.current)
//       ro.disconnect()
//     }
//   }, [])

//   return (
//     <section className="ivory-editorial">
//       <div className="ivory-track" ref={trackRef}>
//         {Array.from({ length: COPIES }).map((_, copy) => (
//           <div
//             className="ivory-copy"
//             key={copy}
//             ref={copy === 0 ? copyRef : null}
//           >
//             {EDITORIAL_MOSAIC.map((img, i) => (
//               <div className="ivory-card" key={`${copy}-${i}`}>
//                 <img
//                   src={photoSrc(img)}
//                   alt=""
//                   loading={copy === 0 && i < 6 ? 'eager' : 'lazy'}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }



import { useEffect, useRef } from "react";
import { EDITORIAL_MOSAIC, photoSrc } from "../data";

const COPIES = 3;

export default function Editorial() {
  const copyRefs = useRef([]);
  const offsetRef = useRef(0);
  const targetRef = useRef(0);
  const copyHRef = useRef(0);
  const rafRef = useRef(0);
  const lastYRef = useRef(null);

  useEffect(() => {
    const firstCopy = copyRefs.current[0];
    if (!firstCopy) return;

    const measure = () => {
      copyHRef.current = firstCopy.offsetHeight;
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(firstCopy);

    requestAnimationFrame(() => {
      measure();
      offsetRef.current = -copyHRef.current;
      targetRef.current = offsetRef.current;
    });

    // --- Wheel ---
    const onWheel = (e) => {
      e.preventDefault();
      targetRef.current -= e.deltaY * 1.3;
    };
    window.addEventListener("wheel", onWheel, { passive: false });

    // --- Touch drag ---
    let touchY = 0;
    const onTouchStart = (e) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      const y = e.touches[0].clientY;
      targetRef.current += y - touchY;
      touchY = y;
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // --- Animation loop ---
    const tick = () => {
      const delta = targetRef.current - offsetRef.current;
      offsetRef.current += delta * 0.18;

      const h = copyHRef.current;
      if (h > 0) {
        while (offsetRef.current < -2 * h) {
          offsetRef.current += h;
          targetRef.current += h;
        }
        while (offsetRef.current > 0) {
          offsetRef.current -= h;
          targetRef.current -= h;
        }
      }

      // Skip DOM writes if nothing moved meaningfully
      const y = Math.round(offsetRef.current * 10) / 10;
      if (y !== lastYRef.current) {
        lastYRef.current = y;
        const total = copyRefs.current.length;
        for (let i = 0; i < total; i++) {
          const el = copyRefs.current[i];
          if (el) {
            el.style.transform = `translate3d(0, ${y + i * h}px, 0)`;
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="ivory-editorial">
      <div className="ivory-track">
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
      </div>
    </section>
  );
}