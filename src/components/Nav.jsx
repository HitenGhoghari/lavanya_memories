import { useState, useEffect } from "react";
import { SITE } from "../data";
import { AppLink } from "../router";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Stop the page behind the drawer from scrolling while it is open.
  useEffect(() => {
    document.body.classList.toggle("lock", open);
    return () => document.body.classList.remove("lock");
  }, [open]);

  // Escape closes the drawer.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="nav">
        <a className="mark" href="/" onClick={() => setOpen(false)}>
          <img src="/images/logo1.png" alt={SITE.name} id="home_logo" />
        </a>

        <AppLink className="nav-mail" to="/enquiry">Enquire</AppLink>

        <button
          className={"burger" + (open ? " on" : "")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={"drawer" + (open ? " open" : "")} aria-hidden={!open}>
        {[
          { to: "/photography", label: "Photography" },
          { to: "/editorial", label: "Editorial" },
          { to: "/films", label: "Films" },
          { to: "/faq", label: "FAQ" },
          { to: '/enquiry', label: 'Enquire'},
        ].map((l) => (
          <AppLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
            {l.label}
          </AppLink>
        ))}

        <small>
          {SITE.city}, {SITE.region}
        </small>
      </div>
    </>
  );
}
