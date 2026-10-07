import { SITE } from "../data";

const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8Z" />
    <path d="m10 15 5-3-5-3Z" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">

        {/* ---------- TOP ROW ---------- */}
        <div className="foot-top">

          {/* LOGO */}
          <a className="foot-logo" href="/">
            <span className="foot-logo-main">LAVANYA</span>
            <span className="foot-logo-sub">MEMORIES</span>
          </a>

          {/* SOCIAL ICONS */}
          <div className="foot-social">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <YoutubeIcon />
            </a>
          </div>

          {/* CONTACT DETAILS */}
          <div className="foot-contact">
            <a href={"mailto:" + SITE.email}>{SITE.email}</a>
            <a href={"tel:" + SITE.phone.replace(/\s/g, "")}>
              Phone : {SITE.phone.replace(/\s/g, "")}
            </a>
            <span className="foot-location">
              Based in {SITE.city}, {SITE.region}
            </span>
          </div>

        </div>

        {/* ---------- SEO / COPYRIGHT LINE ---------- */}
        <p className="foot-note">
          All photographs and films featured on this site are protected by copyright. We are passionate destination wedding photographers and cinematographers specializing in fine-art wedding photography and cinematic films. Whether you are planning a celebration in Mumbai, Delhi, Bangalore, Goa, London, or anywhere across the globe, we are here to beautifully document your day.
        </p>

      </div>
    </footer>
  );
}