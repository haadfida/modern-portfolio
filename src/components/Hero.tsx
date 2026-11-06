import { m } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { links } from '../data/projects'

const tag: [string, string][] = [
  ['Role', 'Principal software engineer'],
  ['Stack', 'Rails · React · React Native'],
  ['Focus', 'AI-native tools'],
  ['Day job', 'Asset-management SaaS'],
]

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-page px-4 pb-16 pt-12 sm:px-6 sm:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <m.div initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="min-w-0">
          <p className="label">Principal software engineer · Rails, React, React Native</p>
          <h1 id="hero-title" className="mt-4 text-[clamp(3rem,9vw,6rem)] font-extrabold tracking-[-0.035em]">
            Haad Fida
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg text-muted sm:text-xl">
            I build AI-native tools on Rails and React. By day I work on an asset-management SaaS; on my own time I
            build agents that can answer questions about that kind of data and act on it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              <ArrowDown size={16} aria-hidden="true" />
              See the work
            </a>
            <a href={links.github} className="btn-ghost" target="_blank" rel="noopener noreferrer">
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a href={links.linkedin} className="btn-ghost" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={`mailto:${links.email}`} className="btn-ghost">
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
          </div>
        </m.div>

        <m.figure
          initial={{ y: 16, rotate: 0 }}
          animate={{ y: 0, rotate: -1.5 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          aria-label="Profile summary"
          className="mx-auto w-full max-w-sm rounded-lg border border-line bg-surface p-5 shadow-[0_1px_0_var(--line),0_18px_40px_-24px_rgba(0,0,0,0.35)]"
        >
          <div className="flex items-center justify-between">
            <span className="label">Property of</span>
            <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
          </div>
          <p className="mt-1 font-display text-2xl font-bold">Haad Fida</p>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {tag.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[5.5rem_1fr] gap-3 py-2">
                <dt className="label pt-0.5">{k}</dt>
                <dd className="text-sm">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex items-end justify-between gap-4">
            <div className="barcode h-10 flex-1" aria-hidden="true" />
            <span className="font-mono text-xs text-muted">@haadfida</span>
          </div>
        </m.figure>
      </div>
    </section>
  )
}
