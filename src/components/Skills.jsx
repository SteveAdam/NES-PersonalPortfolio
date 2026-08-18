import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { skillCategories } from '../data/content.js'

export default function Skills() {
  const [activeId, setActiveId] = useState(null)
  const activeIndex = skillCategories.findIndex((c) => c.id === activeId)
  const active = skillCategories[activeIndex]

  useEffect(() => {
    if (!activeId) return
    const onKey = (e) => { if (e.key === 'Escape') setActiveId(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeId])

  const goPrev = () => {
    const i = (activeIndex - 1 + skillCategories.length) % skillCategories.length
    setActiveId(skillCategories[i].id)
  }
  const goNext = () => {
    const i = (activeIndex + 1) % skillCategories.length
    setActiveId(skillCategories[i].id)
  }

  return (
    <section id="skills">
      <p className="section-eyebrow press-start">WORLD 1-2</p>
      <h2 className="section-title press-start">SKILLS</h2>

      <div className="skills-tabs">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`skills-pill${activeId === cat.id ? ' is-active' : ''}`}
            onClick={() => setActiveId(cat.id)}
          >
            <span className="skills-pill__label">{cat.title}</span>
            <span className="skills-pill__count">{cat.items.length}</span>
          </button>
        ))}
      </div>

      {active && createPortal(
        <div className="skill-modal-backdrop" onClick={() => setActiveId(null)}>
          <div className="skill-modal-frame" onClick={(e) => e.stopPropagation()}>
            <div className="skill-modal-frame__label press-start">
              <span className="skill-modal-frame__bracket">⌐</span> SKILLS
            </div>
            <button
              type="button"
              className="skill-modal-frame__close"
              aria-label="Close"
              onClick={() => setActiveId(null)}
            >
              ✕
            </button>

            <div className="skill-modal" role="dialog" aria-modal="true" aria-label={active.title}>
              <div className="skill-modal__titlebar">
                <span className="skill-modal__label press-start">
                  &gt; {active.title}
                </span>
                <div className="skill-modal__nav-group">
                  <button type="button" className="skill-modal__nav" aria-label="Previous category" onClick={goPrev}>‹</button>
                  <button type="button" className="skill-modal__nav" aria-label="Next category" onClick={goNext}>›</button>
                </div>
              </div>

              <div className="skill-modal__body">
                <div className="skill-modal__main">
                  <p className="skill-modal__meta press-start">
                    LOADOUT // {active.items.length} EQUIPPED
                  </p>
                  <div className="skill-modal__nav-group skill-modal__nav-group--mobile">
                    <button type="button" className="skill-modal__nav" aria-label="Previous category" onClick={goPrev}>‹</button>
                    <button type="button" className="skill-modal__nav" aria-label="Next category" onClick={goNext}>›</button>
                  </div>
                  <div className="skill-loadout-panel">
                    <div className="skill-modal__grid">
                      {active.items.map((item) => (
                        <div className="skill-tile" key={item.name}>
                          <img
                            className="skill-tile__icon"
                            src={`https://skillicons.dev/icons?i=${item.icon}&theme=dark`}
                            alt={item.name}
                            loading="lazy"
                          />
                          <span className="skill-tile__name">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="skill-modal__side">
                  {skillCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className={`skill-tab${cat.id === activeId ? ' is-active' : ''}`}
                      onClick={() => setActiveId(cat.id)}
                    >
                      <img
                        className="skill-tab__avatar"
                        src={`https://skillicons.dev/icons?i=${cat.items[0].icon}`}
                        alt=""
                      />
                      <span className="skill-tab__text">
                        <span className="skill-tab__title">{cat.title}</span>
                        <span className="skill-tab__count">{cat.items.length} skills</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}