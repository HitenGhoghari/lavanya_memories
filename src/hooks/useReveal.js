import { useEffect } from 'react'

export default function useReveal(deps = []) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.rv').forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    )

    const scan = () => {
      document
        .querySelectorAll('.rv:not(.in)')
        .forEach((el) => io.observe(el))
    }

    scan()

    // Re-scan whenever React adds new nodes (Instagram posts, filtered
    // lists, page changes — anything asynchronous).
    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, deps)
}