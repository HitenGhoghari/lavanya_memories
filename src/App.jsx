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
import { useState, useCallback, useEffect } from "react";
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

// Everything that used to be the whole site is now "the home page" -
// the section you land on at "/".
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

// Which component to show for each hero-tag link.
// To add another page later: build the page, then add one line here.
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

  // Re-run the fade-in-on-scroll watcher every time the page changes,
  // otherwise elements on a newly opened page never get the "in" class.
  useReveal([path]);

  // Scroll to top every time the route changes. behaviour: 'auto' means
  // instant — no smooth animation competing with the page swap. This
  // runs after React has committed the new page to the DOM, so it
  // always lands at the top of the new page, never in the middle.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);

  // "/project/<anything>" is not a fixed key in ROUTES, so it is
  // checked separately. Anything unrecognised falls back to Home.
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