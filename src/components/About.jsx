import { profile, timeline } from '../data/content.js'
import { useSectionProgress } from '../hooks/useSectionProgress.js'

export default function About() {
  const [ref, progress] = useSectionProgress()
  const drift = (progress - 0.5) * 2 // -1 .. 1 across the section's transit
  const profileOffset = drift * -14

  return (
    <section id="about" ref={ref}>
      <p className="section-eyebrow press-start">WORLD 1-1</p>
      <h2 className="section-title press-start">ABOUT</h2>

      <div
        className="nes-container retro-panel with-title is-rounded"
        style={{ transform: `translateY(${profileOffset}px)` }}
      >
        <p className="title">{profile.role}</p>
        <p>{profile.about}</p>
      </div>

      <p className="timeline-heading press-start">MY PATH</p>
      <div className="timeline">
        {timeline.map((item, i) => {
          const side = i % 2 === 0 ? 'left' : 'right'
          // Alternating sides drift opposite directions as you scroll, in
          // step with the alternating layout itself.
          const sway = drift * (i % 2 === 0 ? -10 : 10)

          return (
            <div
              className={`timeline-item timeline-item--${side}`}
              key={`${item.title}-${item.period}`}
              style={{ transform: `translateX(${sway}px)` }}
            >
              <div className="timeline-node" aria-hidden="true">
                <span>&#10003;</span>
              </div>
              <div className={`timeline-card timeline-card--${item.type}`}>
                <p className="timeline-card__period">{item.period}</p>
                <p className="timeline-card__title press-start">{item.title}</p>
                <p className="timeline-card__detail">{item.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}