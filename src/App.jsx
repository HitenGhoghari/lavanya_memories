// import { lazy, Suspense } from "react";
// import { useState, useCallback } from "react";
// import useReveal from "./hooks/useReveal";
// import Preloader from "./components/Preloader";
// import Nav from "./components/Nav";
// import Hero from "./components/Hero";
// import Gallery from "./components/Gallery";
// import FilmsSection from "./components/FilmsSection";
// import Testimonials from "./components/Testimonials";
// import InstagramSection from "./components/InstagramSection";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import { usePath } from "./router";
// import Photography from "./pages/Photography";
// import Editorial from "./pages/Editorial";
// import Films from "./pages/Films";
// import FAQ from "./pages/FAQ";
// import Enquiry from "./pages/Enquiry";
// import Project from "./pages/Project";

// // Everything that used to be the whole site is now "the home page" -
// // the section you land on at "/".
// function Home() {
//   return (
//     <>
//       <Hero />
//       <Gallery />
//       <FilmsSection />
//       <Testimonials />
//       <InstagramSection />
//     </>
//   );
// }

// // Which component to show for each hero-tag link.
// // To add another page later: build the page, then add one line here.
// const ROUTES = {
//   "/": Home,
//   "/photography": Photography,
//   "/editorial": Editorial,
//   "/films": Films,
//   "/faq": FAQ,
//   "/enquiry": Enquiry, 
// };

// export default function App() {
//   const [booted, setBooted] = useState(false);
//   const finish = useCallback(() => setBooted(true), []);
//   const path = usePath();

//   // Re-run the fade-in-on-scroll watcher every time the page changes,
//   // otherwise elements on a newly opened page never get the "in" class.
//   useReveal([path]);

//   // "/project/<anything>" is not a fixed key in ROUTES, so it is
//   // checked separately. Anything unrecognised falls back to Home.
//   const Page = path.startsWith("/project/") ? Project : ROUTES[path] || Home;

//   return (
//     <>
//       {!booted && <Preloader onDone={finish} />}
//       <Nav />
//       <Page />
//       <Footer />
//     </>
//   );
// }


import { lazy, Suspense } from "react";
import { useState, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import useReveal from "./hooks/useReveal";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import FilmsSection from "./components/FilmsSection";
import Testimonials from "./components/Testimonials";
import InstagramSection from "./components/InstagramSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { usePath } from "./router";
import Photography from "./pages/Photography";
import Editorial from "./pages/Editorial";
import Films from "./pages/Films";
import FAQ from "./pages/FAQ";
import Enquiry from "./pages/Enquiry";
import Project from "./pages/Project";

function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <FilmsSection />
      <Testimonials />
      <InstagramSection />
    </>
  );
}

const ROUTES = {
  "/": Home,
  "/photography": Photography,
  "/editorial": Editorial,
  "/films": Films,
  "/faq": FAQ,
  "/enquiry": Enquiry,
};

export default function App() {
  const [booted, setBooted] = useState(false);
  const finish = useCallback(() => setBooted(true), []);
  const path = usePath();
  const prevPathRef = useRef(path);
  const homeScrollRef = useRef(0);

  useReveal([path]);

  // ── Track the home page scroll position on every scroll ─────────
  // Because this runs continuously while the user is on `/`, the ref
  // always holds the latest value — no timing games needed.
  // useEffect(() => {
  //   if (path !== "/") return;
  //   const onScroll = () => {
  //     homeScrollRef.current = window.scrollY;
  //   };
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [path]);

  // // ── Route change: decide where to scroll ────────────────────────
  // useEffect(() => {
  //   const prevPath = prevPathRef.current;
  //   prevPathRef.current = path;

  //   // Coming back to home → restore where the user left off
  //   if (path === "/" && prevPath !== "/") {
  //     const target = homeScrollRef.current;
  //     if (!target) return;

  //     // Home has lazy-loaded images; keep re-applying the target
  //     // until the page is tall enough to actually reach it.
  //     let attempts = 0;
  //     const tryRestore = () => {
  //       window.scrollTo({ top: target, behavior: "auto" });
  //       if (window.scrollY < target - 2 && attempts < 15) {
  //         attempts++;
  //         setTimeout(tryRestore, 80);
  //       }
  //     };
  //     requestAnimationFrame(() => requestAnimationFrame(tryRestore));
  //     return;
  //   }

  //   // Every other route (photography, films, faq, project, …) → top
  //   if (path !== "/") {
  //     const id = requestAnimationFrame(() => {
  //       requestAnimationFrame(() => {
  //         window.scrollTo({ top: 0, behavior: "auto" });
  //       });
  //     });
  //     return () => cancelAnimationFrame(id);
  //   }
  // }, [path]);

  // Keep a live reference to the home page's scroll position.
useEffect(() => {
  if (path !== "/") return;
  const onScroll = () => {
    homeScrollRef.current = window.scrollY;
  };
  onScroll(); // capture the current position immediately
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, [path]);

// Decide scroll position on every route change.
useLayoutEffect(() => {
  const prevPath = prevPathRef.current;
  prevPathRef.current = path;

  // ---- Returning to home: restore silently, then reveal ----
  if (path === "/" && prevPath !== "/") {
    const target = homeScrollRef.current;

    // No saved position → nothing to restore
    if (!target) return;

    // Hide the whole app while we line up the scroll position.
    // The user sees the page already scrolled — no visible motion.
    document.documentElement.classList.add("restoring-scroll");

    let attempts = 0;
    const tryRestore = () => {
      window.scrollTo({ top: target, behavior: "auto" });

      const reached = Math.abs(window.scrollY - target) < 2;
      const done = reached || attempts >= 30;

      if (done) {
        document.documentElement.classList.remove("restoring-scroll");
        return;
      }
      attempts++;
      requestAnimationFrame(tryRestore);
    };
    tryRestore();
    return;
  }

  // ---- All other routes: jump to top instantly, before paint ----
  if (path !== "/") {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}, [path]);

  const Page = path.startsWith("/project/") ? Project : ROUTES[path] || Home;

  return (
    <>
      {!booted && <Preloader onDone={finish} />}
      <Nav />
      <Page />
      <Footer />
    </>
  );
}