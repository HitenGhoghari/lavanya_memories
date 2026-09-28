import { useState } from 'react'
import { SITE } from '../data'

const EMPTY = { name: '', email: '', when: '', msg: '' }
const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [note, setNote] = useState('')
  const [bad, setBad] = useState([])

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const send = () => {
    // 1. check the fields
    const missing = []
    if (!form.name.trim()) missing.push('name')
    if (!EMAIL_OK.test(form.email.trim())) missing.push('email')
    if (!form.msg.trim()) missing.push('msg')
    setBad(missing)

    if (missing.length) {
      setNote('Fill in your name, a valid email, and what you need.')
      return
    }

    // 2. build an email and hand it to the visitor's mail app.
    //    This works with no server at all.
    //    To collect enquiries automatically instead, sign up at web3forms.com,
    //    get an access key, and replace this block with a fetch() POST.
    const subject = 'Enquiry from ' + form.name
    const body =
      'Name: ' + form.name + '\n' +
      'Email: ' + form.email + '\n' +
      'When: ' + (form.when || 'not given') + '\n\n' +
      form.msg
    window.location.href =
      'mailto:' + SITE.email +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body)

    setNote('Your mail app should open with the message ready. Press send there.')
    setForm(EMPTY)
  }

  const cls = (k) => 'field' + (bad.includes(k) ? ' bad' : '')

  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <h2 className="rv">Tell me where <b>you are going.</b></h2>

        <div className="cta-grid">
          <div className="rv">
            <div className={cls('name')}>
              <label htmlFor="f-name">Your name</label>
              <input id="f-name" value={form.name} onChange={update('name')} placeholder="Ishita Rao" />
            </div>
            <div className={cls('email')}>
              <label htmlFor="f-email">Email</label>
              <input id="f-email" type="email" value={form.email} onChange={update('email')}
                     placeholder="you@email.com" />
            </div>
            <div className="field">
              <label htmlFor="f-when">Dates or month</label>
              <input id="f-when" value={form.when} onChange={update('when')} placeholder="May 2026" />
            </div>
            <div className={cls('msg')}>
              <label htmlFor="f-msg">What are we shooting?</label>
              <textarea id="f-msg" rows="3" value={form.msg} onChange={update('msg')}
                        placeholder="Four days on the Valley of Flowers trek, two of us." />
            </div>

            <button className="send" onClick={send}>Send enquiry</button>
            <p className={'note' + (bad.length ? ' err' : '')} role="status">{note}</p>
          </div>

          <div className="rv">
            <div className="detail">
              <span>Email</span>
              <p><a href={'mailto:' + SITE.email}>{SITE.email}</a></p>
            </div>
            <div className="detail">
              <span>Phone</span>
              <p>{SITE.phone}</p>
            </div>
            <div className="detail">
              <span>Based in</span>
              <p>{SITE.city}<br />{SITE.region}</p>
            </div>
            <div className="detail">
              <span>Travel</span>
              <p>Anywhere in India. Himalayan routes are what I know best.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
