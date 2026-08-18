import { profile, contact } from '../data/content.js'
import { useScrollY } from '../hooks/useScrollProgress.js'

export default function Hero() {
  const scrollY = useScrollY()
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Parallax: drifts up and fades out as the user scrolls past it, instead
  // of sitting static while everything else scrolls underneath it.
  const offset = prefersReducedMotion ? 0 : Math.min(scrollY * 0.35, 160)
  const opacity = prefersReducedMotion ? 1 : Math.max(1 - scrollY / 420, 0)

  return (
    <section
      className="hero"
      id="hero"
      style={{ transform: `translateY(${offset}px)`, opacity }}
    >
      <p className="section-eyebrow press-start">PLAYER 1</p>
      <h1 className="hero__title">{profile.name}</h1>
      <p className="hero__subtitle">{profile.tagline}</p>
      <div className="hero__actions">
        <button
          type="button"
          className="nes-btn is-success press-start"
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          PRESS START
        </button>
        <a
          className="nes-btn is-error press-start"
          href={`${import.meta.env.BASE_URL}${contact.cvFile}`}
          download
        >
          GET CV
        </a>
      </div>
      <p style={{ marginTop: 18, fontSize: 14, opacity: 0.6 }}>
        <span className="hero__cursor">▮</span> scroll to explore
      </p>
    </section>
  )
}