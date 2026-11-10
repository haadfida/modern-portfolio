import { useState } from 'react'
import { Check, Copy, FileText, Github, Linkedin } from 'lucide-react'
import { links } from '../data/projects'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.getElementById('contact-email')
      if (el) window.getSelection()?.selectAllChildren(el)
    }
  }

  return (
    <footer id="contact" aria-labelledby="contact-title" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 sm:py-24">
        <h2 id="contact-title" className="text-3xl font-bold sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-[36rem] text-muted">
          Email is the fastest way to reach me, whether it is about a role, a project, or one of the repos above.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            id="contact-email"
            href={`mailto:${links.email}`}
            className="break-all font-display text-2xl font-bold text-accent underline decoration-line underline-offset-4 hover:decoration-accent sm:text-3xl"
          >
            {links.email}
          </a>
          <button type="button" onClick={copy} className="btn-ghost" aria-live="polite">
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>
        <ul className="mt-8 flex flex-wrap gap-3">
          <li>
            <a href={links.github} className="btn-ghost" target="_blank" rel="noopener noreferrer">
              <Github size={16} aria-hidden="true" />
              github.com/haadfida
            </a>
          </li>
          <li>
            <a href={links.linkedin} className="btn-ghost" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} aria-hidden="true" />
              linkedin.com/in/haadfida
            </a>
          </li>
          <li>
            <a href={links.cv} className="btn-ghost" target="_blank" rel="noopener noreferrer">
              <FileText size={16} aria-hidden="true" />
              CV (PDF)
            </a>
          </li>
        </ul>
        <p className="mt-16 font-mono text-xs text-muted">© {new Date().getFullYear()} Haad Fida · Built with React, Vite and Tailwind CSS</p>
      </div>
    </footer>
  )
}
