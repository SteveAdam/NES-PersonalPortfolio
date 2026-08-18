import { projects, contact } from '../data/content.js'
import { useSectionProgress } from '../hooks/useSectionProgress.js'

// Rotating gradient palette for the cards — echoes the reference screenshot's
// orange / teal / purple treatment rather than one flat panel color.
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
              <div
                className="project-card"
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
                <a

                  className="project-card__github"
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                >
                  <img
                    className="project-card__github-icon"
                    src="https://skillicons.dev/icons?i=github&theme=dark"
                    alt=""
                  />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}