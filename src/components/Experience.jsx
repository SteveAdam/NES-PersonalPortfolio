import { quests } from '../data/content.js'
import { useSectionProgress } from '../hooks/useSectionProgress.js'

export default function Experience() {
  const [ref, progress] = useSectionProgress()
  const fill = Math.min(1, Math.max(0, (progress - 0.15) / 0.7)) * 100

  return (
    <section id="experience" ref={ref}>
      <p className="section-eyebrow press-start">WORLD 1-4</p>
      <h2 className="section-title press-start">EXPERIENCE</h2>
      <div className="nes-container retro-panel with-title is-rounded">
        <p className="title">Completed</p>
        <div className="quest-list">
          <div className="quest-meter" aria-hidden="true">
            <div className="quest-meter__fill" style={{ height: `${fill}%` }} />
          </div>
          <div className="quest-items">
            {quests.map((quest) => (
              <div className="quest" key={quest.title}>
                <i className="nes-octocat" aria-hidden="true"/>
                <div>
                  <div className="quest__heading">
                    <p className="quest__title press-start">{quest.title}</p>
                    <p className="quest__period">{quest.period}</p>
                  </div>
                  <ul className="quest__objectives">
                    {quest.objectives.map((objective, idx) => (
                      <li key={idx}>{objective}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}