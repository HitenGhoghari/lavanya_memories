import { useState } from 'react'
import { FAQS } from '../data'

// This file used to be a copy-paste of Films.jsx (wrong page under the
// FAQ link). It now renders a real accordion using the .faq-page /
// .faq-item / .faq-answer styles that were already sitting unused in
// styles.css.
export default function FAQ() {
  const [open, setOpen] = useState(0) // which question is open; -1 = none

  return (
    <section className="faq-page">
      <div className="archive-head">
        <h1>FAQ</h1>
      </div>

      <div className="faq-list">
        {FAQS.map((f, i) => (
          <div key={f.q} className={'faq-item' + (open === i ? ' active' : '')}>
            <button
              aria-expanded={open === i}
              aria-controls={'faq-' + i}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              <strong>{f.q}</strong>
              <b aria-hidden="true">{open === i ? '\u2013' : '+'}</b>
            </button>
            <div className="faq-answer" id={'faq-' + i}>
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
