import { useEffect, useRef, useState } from 'react'

// Tracks how far `ref`'s element has scrolled through the viewport, as a
// value from 0 (top of section just entering the bottom of the viewport)
// to 1 (bottom of section has passed the top of the viewport). Unlike
// Reveal (which fires once via IntersectionObserver), this updates
// continuously on every scroll frame so effects can track scroll position
// the whole time a section is on screen.
export function useSectionProgress() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0.5)
  const progressRef = useRef(0.5)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Keep it at the neutral midpoint (zero drift) and skip the listener
      // entirely — no continuous scroll-driven motion for this user.
      return
    }

    let ticking = false

    function update() {
      const node = ref.current
      if (node) {
        const rect = node.getBoundingClientRect()
        const vh = window.innerHeight || 1
        const total = rect.height + vh * 0.8
        const raw = (vh - rect.top) / total
        const clamped = Math.min(1, Math.max(0, raw))

        progressRef.current = clamped
        setProgress((current) => current + (clamped - current) * 0.12)
      }
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return [ref, progress]
}