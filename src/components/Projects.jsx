import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { projects, contact } from '../data/content.js'
import { useSectionProgress } from '../hooks/useSectionProgress.js'

const PALETTE = [
  { from: '#c2410c', to: '#7c2d12' }, // orange
  { from: '#0f766e', to: '#134e4a' }, // teal
  { from: '#6d28d9', to: '#4c1d95' }, // purple
  { from: '#be185d', to: '#831843' }, // rose
  { from: '#1d4ed8', to: '#1e3a8a' }, // blue
  { from: '#65a30d', to: '#3f6212' }, // green
  { from: '#ca8a04', to: '#854d0e' }, // gold
]

const screenshotUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

export default function Projects() {
  const [ref, progress] = useSectionProgress()
  const drift = (progress - 0.5) * 2

  const [activeId, setActiveId] = useState(null)
  const activeIndex = projects.findIndex((p) => p.id === activeId)
  const active = projects[activeIndex]

  useEffect(() => {
    if (!activeId) return
    const onKey = (e) => { if (e.key === 'Escape') setActiveId(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeId])

  const goPrev = () => {
    const i = (activeIndex - 1 + projects.length) % projects.length
    setActiveId(projects[i].id)
  }
  const goNext = () => {
    const i = (activeIndex + 1) % projects.length
    setActiveId(projects[i].id)
  }

  return (
    <section id="projects" ref={ref}>
      <p className="section-eyebrow press-start">WORLD 1-3</p>
      <h2 className="section-title press-start">PROJECTS</h2>
      <div className="project-grid">
        {projects.map((project, i) => {
          const floatOffset = drift * (i % 2 === 0 ? -16 : 16)
          const colors = PALETTE[i % PALETTE.length]
          const photoSrc = project.photo ?? (project.siteUrl && screenshotUrl(project.siteUrl))

          return (
            <div className="project-card-wrap" key={project.id}>
              <button
                type="button"
                className="project-card"
                onClick={() => setActiveId(project.id)}
                style={{
                  '--float-offset': `${floatOffset}px`,
                  '--card-from': colors.from,
                  '--card-to': colors.to,
                  background: `linear-gradient(160deg, ${colors.from}, ${colors.to})`,
                }}
              >
                <p className="project-card__title press-start">{project.title}</p>

                {photoSrc && (
                  <div className="project-card__photo-frame">
                    <img
                      className="project-card__photo"
                      src={photoSrc}
                      alt={`${project.title} preview`}
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="project-card__summary-box">
                  <p className="project-card__summary">{project.summary}</p>
                </div>

                <span
                  className="project-card__github"
                  role="link"
                  aria-label={`${project.title} on GitHub`}
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.links?.repo ?? contact.github, '_blank', 'noreferrer')
                  }}
                >
                  <img
                    className="project-card__github-icon"
                    src="https://skillicons.dev/icons?i=github&theme=dark"
                    alt=""
                  />
                </span>
              </button>
            </div>
          )
        })}
      </div>

      {active && createPortal(
        <div className="skill-modal-backdrop" onClick={() => setActiveId(null)}>
          <div className="skill-modal-frame" onClick={(e) => e.stopPropagation()}>
            <div className="skill-modal-frame__label press-start">
              <span className="skill-modal-frame__bracket">⌐</span> PROJECTS
            </div>
            <button
              type="button"
              className="nes-btn is-error skill-modal-frame__close"
              aria-label="Close"
              onClick={() => setActiveId(null)}
            >
              <i className="nes-icon close is-small"></i>
            </button>

            <div className="skill-modal" role="dialog" aria-modal="true" aria-label={active.title}>
              <div className="skill-modal__titlebar">
                <span className="skill-modal__label press-start">
                  &gt; {active.title}
                </span>
                <div className="skill-modal__nav-group">
                  <button type="button" className="nes-btn is-warning skill-modal__nav" aria-label="Previous project" onClick={goPrev}>‹</button>
                  <button type="button" className="nes-btn is-warning skill-modal__nav" aria-label="Next project" onClick={goNext}>›</button>
                </div>
              </div>

              <div className="skill-modal__body">
                <div className="skill-modal__main">
                  <div className="skill-modal__nav-group skill-modal__nav-group--mobile">
                    <button type="button" className="nes-btn is-warning skill-modal__nav" aria-label="Previous project" onClick={goPrev}>‹</button>
                    <button type="button" className="nes-btn is-warning skill-modal__nav" aria-label="Next project" onClick={goNext}>›</button>
                  </div>

                  {active.tags?.length > 0 && (
                    <p className="project-modal__field">
                      <span className="project-modal__field-label press-start">Tags:</span>{' '}
                      {active.tags.join(' | ')}
                    </p>
                  )}

                  {active.techStack?.length > 0 && (
                    <p className="project-modal__field">
                      <span className="project-modal__field-label press-start">Tech Stack:</span>{' '}
                      {active.techStack.join(' | ')}
                    </p>
                  )}

                  <div className="project-modal__links">
                    <a
                        className="nes-btn is-success project-modal__link-btn project-modal__link-btn--repo"
                      href={active.links?.repo ?? contact.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repo
                    </a>
                    {active.links?.demo && (
                      <a
                        className="nes-btn is-success project-modal__link-btn"
                        href={active.links.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Product Demo
                      </a>
                    )}
                    {active.links?.linkedin && (
                      <a
                        className="nes-btn is-success project-modal__link-btn"
                        href={active.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn Post
                      </a>
                    )}
                  </div>

                  {active.objectives?.length > 0 && (
                    <div className="skill-loadout-panel project-modal__objectives">
                      {active.objectives.map((line, idx) => (
                        <p key={idx} className="project-modal__objective">
                          <span className="project-modal__objective-marker">&lt;&gt;</span> {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="skill-modal__side">
                  {projects.map((project, i) => {
                    const colors = PALETTE[i % PALETTE.length]
                    return (
                      <button
                        key={project.id}
                        type="button"
                        className={`nes-btn skill-tab${project.id === activeId ? ' is-primary is-active' : ''}`}
                        aria-pressed={project.id === activeId}
                        onClick={() => setActiveId(project.id)}
                      >
                        {project.icon ? (
                          <img
                            className="skill-tab__avatar project-tab__avatar"
                            style={{ background: colors.from }}
                            src={`https://skillicons.dev/icons?i=${project.icon}`}
                            alt=""
                          />
                        ) : (
                          <span
                            className="skill-tab__avatar project-tab__avatar project-tab__avatar--monogram"
                            style={{ background: colors.from }}
                          >
                            {project.title.charAt(0)}
                          </span>
                        )}
                        <span className="skill-tab__text">
                          <span className="skill-tab__title">{project.title}</span>
                          <span className="skill-tab__count">{project.tags?.join(', ')}</span>
                        </span>
                      </button>
                    )
                  })}
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
