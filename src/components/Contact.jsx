import { useState } from "react";
import { SITE } from "../data";

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  couple: "",
  dates: "",
  details: "",
  location: "",
  guests: "",
  service: "",
};

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICES = [
  "Photography Only",
  "Films Only",
  "Photography + Films",
  "Pre-Wedding Shoot",
  "Editorial / Brand",
  "Not sure yet",
];

const Icon = {
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export default function Enquiry() {
  const [form, setForm] = useState(EMPTY);
  const [bad, setBad]   = useState([]);
  const [note, setNote] = useState("");

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const send = () => {
    const missing = [];
    if (!form.firstName.trim()) missing.push("firstName");
    if (!EMAIL_OK.test(form.email.trim())) missing.push("email");
    if (!form.phone.trim()) missing.push("phone");
    if (!form.dates.trim()) missing.push("dates");
    if (!form.details.trim()) missing.push("details");
    if (!form.location.trim()) missing.push("location");
    if (!form.guests.trim()) missing.push("guests");
    setBad(missing);

    if (missing.length) {
      setNote("Please fill in all fields marked required.");
      return;
    }

    const subject = "Enquiry from " + form.firstName + " " + form.lastName;
    const body =
      "Name: " + form.firstName + " " + form.lastName + "\n" +
      "Email: " + form.email + "\n" +
      "Phone: " + form.phone + "\n" +
      "Couple: " + (form.couple || "—") + "\n" +
      "Dates: " + form.dates + "\n" +
      "Location: " + form.location + "\n" +
      "Guests: " + form.guests + "\n" +
      "Service: " + (form.service || "—") + "\n\n" +
      form.details;

    window.location.href =
      "mailto:" + SITE.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    setNote("Your mail app should open with the message ready.");
    setForm(EMPTY);
  };

  const cls = (k) => "enq-field" + (bad.includes(k) ? " bad" : "");

  return (
    <section className="enquiry" id="enquiry">
      <div className="wrap">

        {/* ---------- CONTACT BLOCK ---------- */}
        <ul className="enq-contact">
          <li>
            <span className="enq-icon"><Icon.Mail /></span>
            <div>
              <strong>Email:</strong>
              <a href={"mailto:" + SITE.email}>{SITE.email}</a>
            </div>
          </li>
          <li>
            <span className="enq-icon"><Icon.Phone /></span>
            <div>
              <strong>Phone Number:</strong>
              <a href={"tel:" + SITE.phone.replace(/\s/g, "")}>{SITE.phone}</a>
            </div>
          </li>
          {/* <li>
            <span className="enq-icon"><Icon.Pin /></span>
            <div>
              <strong>Address:</strong>
              <p>{SITE.city}, {SITE.region}</p>
            </div>
          </li> */}
        </ul>

        {/* ---------- INTRO ---------- */}
        <p className="enq-tagline">
          We’d Love to Tell Your Story — Fill in the Details Below!
        </p>

        {/* ---------- FORM ---------- */}
        <form className="enq-form" onSubmit={(e) => { e.preventDefault(); send(); }} noValidate>

          {/* Row 1: first / last name */}
          <div className="enq-row-2">
            <label className={cls("firstName")}>
              <span>Name <em>(required)</em></span>
              <input
                type="text"
                value={form.firstName}
                onChange={update("firstName")}
                placeholder="First Name"
              />
            </label>
            <label className="enq-field">
              <span>&nbsp;</span>
              <input
                type="text"
                value={form.lastName}
                onChange={update("lastName")}
                placeholder="Last Name"
              />
            </label>
          </div>

          {/* Row 2: email / phone */}
          <div className="enq-row-2">
            <label className={cls("email")}>
              <span>Email Address <em>(required)</em></span>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder=""
              />
            </label>
            <label className={cls("phone")}>
              <span>Contact No <em>(required)</em></span>
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder=""
              />
            </label>
          </div>

          {/* Couple's name */}
          <label className="enq-field">
            <span>Couple's Name</span>
            <input
              type="text"
              value={form.couple}
              onChange={update("couple")}
              placeholder=""
            />
          </label>

          {/* Dates */}
          <label className={cls("dates")}>
            <span>Dates of Events <em>(required)</em></span>
            <input
              type="text"
              value={form.dates}
              onChange={update("dates")}
              placeholder=""
            />
          </label>

          {/* Event details */}
          <label className={cls("details")}>
            <span>Event Details <em>(required)</em></span>
            <textarea
              rows={6}
              value={form.details}
              onChange={update("details")}
              placeholder="Please provide as much details as possible to prepare an accurate quote."
            />
          </label>

          {/* Location */}
          <label className={cls("location")}>
            <span>Event Location <em>(required)</em></span>
            <input
              type="text"
              value={form.location}
              onChange={update("location")}
              placeholder=""
            />
          </label>

          {/* Guests */}
          <label className={cls("guests")}>
            <span>Approx Guest Count <em>(required)</em></span>
            <input
              type="text"
              value={form.guests}
              onChange={update("guests")}
              placeholder=""
            />
          </label>

          {/* Service + Submit */}
          <div className="enq-footer">
            <label className="enq-field enq-select">
              <span>What services are you looking for?</span>
              <select value={form.service} onChange={update("service")}>
                <option value="">—Please choose an option—</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>

            <button type="submit" className="enq-submit">Submit</button>
          </div>

          {note && (
            <p className={"enq-note" + (bad.length ? " err" : "")} role="status">
              {note}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}