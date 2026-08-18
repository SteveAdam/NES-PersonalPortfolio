import { contact } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact">
      <p className="section-eyebrow press-start">WORLD 1-5</p>
      <h2 className="section-title press-start">CONTINUE?</h2>
      <div className="nes-balloon from-left retro-panel">
        <p>Enjoyed the run? Let&rsquo;s team up on the next level.</p>
      </div>
      <div className="contact-links">
        <a
          className="nes-btn is-error"
          href={`${import.meta.env.BASE_URL}${contact.cvFile}`}
          download
        >
          Download CV
        </a>
        <a className="nes-btn is-primary" href={`mailto:${contact.email}`}>
          Email
        </a>
        <a
          className="nes-btn is-success"
          href={contact.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="nes-btn is-warning"
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
