import { useState } from "react";
import { SITE, WEB3FORMS_KEY } from "../data";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  guests: "",
  story: "",
  location: "",
  dates: "",
  services: [],
};

const SERVICE_OPTIONS = [
  "Photography",
  "Films",
  "Both Photography and Films",
];

// Validation rules — each returns an error string, or "" if OK.
const RULES = {
  name: (v) =>
    !v.trim()            ? "Please enter your name."
    : v.trim().length < 2 ? "Name looks too short."
    : "",

  email: (v) =>
    !v.trim()                          ? "Please enter your email."
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "That email doesn't look right."
    : "",

  phone: (v) => {
    const digits = v.replace(/\D/g, "");
    if (!v.trim())          return "Please enter your phone number.";
    if (digits.length < 10) return "Phone number looks too short.";
    if (digits.length > 15) return "Phone number looks too long.";
    return "";
  },

  guests: (v) =>
    !v.trim()              ? "Please estimate your guest count."
    : !/^\d+$/.test(v.trim()) ? "Use numbers only (e.g. 250)."
    : Number(v) < 1        ? "Guest count must be at least 1."
    : Number(v) > 50000     ? "Please email us directly for events over 50,000 guests."
    : "",

  story: (v) =>
    !v.trim()              ? "Please tell us a little about your event."
    : v.trim().length < 20 ? "A bit more detail helps us quote accurately (20+ characters)."
    : "",

  location: (v) =>
    !v.trim() ? "Please tell us where the event is." : "",

  dates: (v) =>
    !v.trim() ? "Please give us the event date(s)." : "",
};

function validateAll(form) {
  const errors = {};
  for (const key of Object.keys(RULES)) {
    const msg = RULES[key](form[key] || "");
    if (msg) errors[key] = msg;
  }
  return errors;
}

export default function Enquiry() {
  const [form, setForm]         = useState(EMPTY);
  const [errors, setErrors]     = useState({});
  const [touched, setTouched]   = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [note, setNote]         = useState("");
  const [noteKind, setNoteKind] = useState(""); // "", "ok", "err"

  const update = (key) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    // Re-validate this field live, only if it has already been touched.
    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [key]: RULES[key](value) }));
    }
  };

  const blur = (key) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: RULES[key](form[key] || "") }));
  };

  const toggleService = (value) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(value)
        ? f.services.filter((s) => s !== value)
        : [...f.services, value],
    }));
  };

  const send = async (e) => {
    e.preventDefault();
    setNote("");

    // Mark everything touched so all errors become visible at once.
    const allTouched = Object.keys(RULES).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {}
    );
    setTouched(allTouched);

    const found = validateAll(form);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setNoteKind("err");
      setNote("Please fix the highlighted fields before sending.");
      // Scroll to the first bad field for convenience
      const firstKey = Object.keys(found)[0];
      document
        .querySelector(`[data-field="${firstKey}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // If Web3Forms key is missing, fall back to mailto so nothing is lost.
    if (!WEB3FORMS_KEY) {
      const subject = "Enquiry from " + form.name;
      const body =
        "Name: " + form.name + "\n" +
        "Email: " + form.email + "\n" +
        "Phone: " + form.phone + "\n" +
        "Estimated Guest Count: " + form.guests + "\n" +
        "Location: " + form.location + "\n" +
        "Event Dates: " + form.dates + "\n" +
        "Services: " + (form.services.join(", ") || "—") + "\n\n" +
        form.story;

      window.location.href =
        "mailto:" + SITE.email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      setNoteKind("ok");
      setNote("Your mail app should open with the message ready.");
      return;
    }

    setSubmitting(true);
    setNoteKind("");
    setNote("Sending…");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Enquiry from " + form.name,
          from_name: "Lavanya Memories website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          guests: form.guests,
          location: form.location,
          dates: form.dates,
          services: form.services.join(", ") || "—",
          message: form.story,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setNoteKind("ok");
        setNote("Thank you — your enquiry has been sent. We'll reply within 48 hours.");
        setForm(EMPTY);
        setErrors({});
        setTouched({});
      } else {
        setNoteKind("err");
        setNote("Something went wrong. Please email us directly at " + SITE.email);
      }
    } catch {
      setNoteKind("err");
      setNote("Network error. Please email us directly at " + SITE.email);
    } finally {
      setSubmitting(false);
    }
  };

  // Helpers to render a field cleanly
  const showError = (key) => touched[key] && errors[key];
  const fieldCls = (key) =>
    "enq-page-field" + (showError(key) ? " bad" : "");

  return (
    <section className="enq-page">
      <div className="enq-page-inner">

        <div className="enq-hero">
          <span className="enq-hero-script">Let&rsquo;s Capture Your</span>
          <h1 className="enq-hero-title">Love</h1>
        </div>

        <div className="enq-style">
          <h2 className="enq-style-title">Our Style</h2>
          <p>
            At Lavanya Memories, our style is all about capturing realness, the
            genuine emotions, and the true essence of who you are as a couple.
            We don&rsquo;t stage moments, we document them as they naturally
            unfold.
          </p>
          <p>
            From the first meeting to the last delivery, we immerse ourselves in
            your world, ensuring that every frame — whether a photograph or a
            scene in your film — resonates with your vibe.
          </p>
        </div>

        <div className="enq-page-intro">
          <p>
            Please fill in the form below and provide as much detail as
            possible to help us create an accurate quote.
          </p>
          <p>
            We will try to get back within 48hrs — give us a call on the number
            below if you don&rsquo;t hear from us or if it&rsquo;s a last-minute
            enquiry.
          </p>
          <p>
            Please go through our{" "}
            <a href="/faq" className="enq-page-link">FAQ</a>{" "}
            section to find answers to some common questions.
          </p>

          <div className="enq-page-contact">
            <a href={"mailto:" + SITE.email}>{SITE.email}</a>
            <a href={"tel:" + SITE.phone.replace(/\s/g, "")}>
              {SITE.phone.replace(/\s/g, "")}
            </a>
          </div>

          <address className="enq-page-address">
            {SITE.name} Private Limited<br />
            {SITE.city}, {SITE.region}
          </address>
        </div>

        <form
          className="enq-page-card"
          onSubmit={send}
          noValidate
        >
          {/* ---------- NAME ---------- */}
          <label className={fieldCls("name")} data-field="name">
            <span>Name <em>(required)</em></span>
            <input
              type="text"
              value={form.name}
              onChange={update("name")}
              onBlur={blur("name")}
              autoComplete="name"
              aria-invalid={Boolean(showError("name"))}
            />
            {showError("name") && (
              <small className="enq-err">{errors.name}</small>
            )}
          </label>

          {/* ---------- EMAIL ---------- */}
          <label className={fieldCls("email")} data-field="email">
            <span>Email <em>(required)</em></span>
            <input
              type="email"
              value={form.email}
              onChange={update("email")}
              onBlur={blur("email")}
              autoComplete="email"
              aria-invalid={Boolean(showError("email"))}
            />
            {showError("email") && (
              <small className="enq-err">{errors.email}</small>
            )}
          </label>

          {/* ---------- PHONE ---------- */}
          <label className={fieldCls("phone")} data-field="phone">
            <span>Phone <em>(required)</em></span>
            <input
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              onBlur={blur("phone")}
              autoComplete="tel"
              placeholder="+91 98xxx xxxxx"
              aria-invalid={Boolean(showError("phone"))}
            />
            {showError("phone") && (
              <small className="enq-err">{errors.phone}</small>
            )}
          </label>

          {/* ---------- GUESTS ---------- */}
          <label className={fieldCls("guests")} data-field="guests">
            <span>Estimated Guest Count <em>(required)</em></span>
            <input
              type="text"
              inputMode="numeric"
              value={form.guests}
              onChange={update("guests")}
              onBlur={blur("guests")}
              placeholder="e.g. 250"
              aria-invalid={Boolean(showError("guests"))}
            />
            {showError("guests") && (
              <small className="enq-err">{errors.guests}</small>
            )}
          </label>

          {/* ---------- STORY ---------- */}
          <label className={fieldCls("story")} data-field="story">
            <span>
              Tell us more about your wedding — event flow, venues.{" "}
              <em>(required)</em>
            </span>
            <textarea
              rows={5}
              value={form.story}
              onChange={update("story")}
              onBlur={blur("story")}
              aria-invalid={Boolean(showError("story"))}
            />
            {showError("story") && (
              <small className="enq-err">{errors.story}</small>
            )}
          </label>

          {/* ---------- LOCATION ---------- */}
          <label className={fieldCls("location")} data-field="location">
            <span>Location of the wedding <em>(required)</em></span>
            <input
              type="text"
              value={form.location}
              onChange={update("location")}
              onBlur={blur("location")}
              placeholder="City, venue, or country"
              aria-invalid={Boolean(showError("location"))}
            />
            {showError("location") && (
              <small className="enq-err">{errors.location}</small>
            )}
          </label>

          {/* ---------- DATES ---------- */}
          <label className={fieldCls("dates")} data-field="dates">
            <span>Event Dates <em>(required)</em></span>
            <input
              type="text"
              value={form.dates}
              onChange={update("dates")}
              onBlur={blur("dates")}
              placeholder="e.g. 12–14 Feb 2026"
              aria-invalid={Boolean(showError("dates"))}
            />
            {showError("dates") && (
              <small className="enq-err">{errors.dates}</small>
            )}
          </label>

          {/* ---------- SERVICES ---------- */}
          <fieldset className="enq-page-services">
            <legend>What services are you looking for ?</legend>
            {SERVICE_OPTIONS.map((opt) => (
              <label key={opt} className="enq-page-check">
                <input
                  type="checkbox"
                  checked={form.services.includes(opt)}
                  onChange={() => toggleService(opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          <button
            type="submit"
            className="enq-page-submit"
            disabled={submitting}
          >
            {submitting ? "Sending…" : "Submit"}
          </button>

          {note && (
            <p
              className={
                "enq-page-note" + (noteKind === "err" ? " err" : "")
              }
              role="status"
            >
              {note}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}