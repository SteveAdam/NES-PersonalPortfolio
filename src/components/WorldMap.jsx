import { useEffect, useRef, useState } from 'react'
import { levels, contact } from '../data/content.js'

export default function WorldMap() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [playerX, setPlayerX] = useState(0)
  const trackRef = useRef(null)
  const nodeRefs = useRef([])

  // Which section is active, via scroll position.
  useEffect(() => {
    const sections = levels
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = levels.findIndex((l) => l.id === entry.target.id)
            if (idx !== -1) setActiveIndex(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Where the player marker sits, measured from the *actual* rendered
  // position/width of the active node — not assumed even spacing — so it
  // (e.g. the pixel font swapping in after load).
  useEffect(() => {
    function updatePlayerPosition() {
      const node = nodeRefs.current[activeIndex]
      const track = trackRef.current
      if (!node || !track) return
      const nodeRect = node.getBoundingClientRect()
      const trackRect = track.getBoundingClientRect()
      setPlayerX(nodeRect.left - trackRect.left + nodeRect.width / 2)
    }

    updatePlayerPosition()

    const track = trackRef.current
    const resizeObserver = new ResizeObserver(updatePlayerPosition)
    if (track) resizeObserver.observe(track)
    window.addEventListener('resize', updatePlayerPosition)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updatePlayerPosition)
    }
  }, [activeIndex])

  return (
    <nav className="world-map" aria-label="Section progress">
      <div className="world-map__row">
        <div className="world-map__track" ref={trackRef}>
          <div className="world-map__line" />
          <div className="world-map__player" style={{ left: `${playerX}px` }} aria-hidden="true">
            🍄
          </div>
          {levels.map((level, idx) => (
            <button
              key={level.id}
              ref={(el) => (nodeRefs.current[idx] = el)}
              className={`world-map__node${idx === activeIndex ? ' is-active' : ''}`}
              onClick={() =>
                document.getElementById(level.id)?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span className="world-map__flag">{level.label}</span>
              <span className="world-map__label">{level.name}</span>
            </button>
          ))}
        </div>

        <div className="world-map__links">
          <a
            className="world-map__link"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i className="nes-icon linkedin is-medium"></i>
          </a>

          <a
            className="world-map__link"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <i className="nes-icon github is-medium"></i>
          </a>

          <a
            className="world-map__link"
            href={`mailto:${contact.email}`}
            aria-label="Email"
            title="Email"
          >
            <i className="nes-icon gmail is-medium"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}