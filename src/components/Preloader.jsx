import { useEffect, useState } from 'react'
import { assetSrc } from '../data'

// Counts 0 -> 100, then slides up and tells App it is finished.
export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // Check if current user is a search engine crawler or automated test
    const isBot =
      typeof navigator !== 'undefined' &&
      /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(
        navigator.userAgent || ''
      );

    if (isBot) {
      onDone();
      return;
    }

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
      <img className="boot-logo" src={assetSrc('logo.png')} alt="Lavanya Memories" />

      {/* LOADING PROGRESS */}
      <div className="boot-bar" style={{ width: pct + '%' }} />
    </div>
  )
}
