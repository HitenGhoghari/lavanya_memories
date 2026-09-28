import { SITE } from '../data'

export default function Footer() {
  return (
    <footer className="foot">
      <span>&copy;{SITE.year} {SITE.name}</span>
      <span>
        <a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a>
        {' \u00B7 '}
        <a href={SITE.youtube} target="_blank" rel="noreferrer">YouTube</a>
      </span>
      <span>{SITE.city}, India</span>
    </footer>
  )
}
