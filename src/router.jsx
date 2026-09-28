import { useEffect, useState } from 'react'

export function navigate(to) {
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  const hash = window.location.hash
  if (hash) {
    setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50)
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export function usePath() {
  const [path, setPath] = useState(window.location.pathname)

  // useEffect(() => {
  //   const onPop = () => setPath(window.location.pathname)
  //   window.addEventListener('popstate', onPop)
  //   return () => window.removeEventListener('popstate', onPop)
  // }, [])
  useEffect(() => {
  const onPop = () => {
    setPath(window.location.pathname)
    window.scrollTo({ top: 0 })          // ← add this
  }
  window.addEventListener('popstate', onPop)
  return () => window.removeEventListener('popstate', onPop)
}, [])

  return path
}

export function AppLink({ to, children, className, onClick, ...props }) {
  const handleClick = (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    onClick?.(e)
    navigate(to)
  }

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
