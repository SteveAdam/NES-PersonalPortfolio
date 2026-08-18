import { useEffect, useState } from 'react'

// Returns the current window.scrollY, updated via requestAnimationFrame so
// it never fires more than once per frame no matter how fast scroll events
// come in.
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    function update() {
      setScrollY(window.scrollY)
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollY
}