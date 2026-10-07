import { useEffect, useState } from 'react'

// Counts 0 -> 100, then slides up and tells App it is finished.
export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [leaving, setLeaving] = useState(false)

  // useEffect(() => {
  //   let value = 0

  //   const id = setInterval(() => {
  //     value = Math.min(100, value + Math.random() * 12)
  //     setPct(value)

  //     if (value >= 100) {
  //       clearInterval(id)

  //       setTimeout(() => setLeaving(true), 240)

  //       setTimeout(() => onDone(), 980)
  //     }
  //   }, 90)

  //   return () => clearInterval(id)
  // }, [onDone])

  useEffect(() => {
  const start = Date.now();
  let value = 0;

  const id = setInterval(() => {
    value = Math.min(100, value + Math.random() * 15);
    setPct(value);

    if (value >= 100 && Date.now() - start > 400) {
      clearInterval(id);
      setTimeout(() => setLeaving(true), 200);
      setTimeout(() => onDone(), 700);
    }
  }, 60);

  return () => clearInterval(id);
}, [onDone]);

  return (
    <div id="boot" className={leaving ? 'boot-out' : ''}>

      {/* BRAND LOGO */}
      <img
        className="boot-logo"
        src="/images/logo.png"
        alt="Lavanya Memories"
      />

      {/* LOADING PROGRESS */}
      <div
        className="boot-bar"
        style={{ width: pct + '%' }}
      />

    </div>
  )
}