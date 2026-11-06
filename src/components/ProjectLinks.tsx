import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../data/projects'

export default function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.live && (
        <a href={project.live} className="btn-primary" target="_blank" rel="noopener noreferrer">
          <ExternalLink size={16} aria-hidden="true" />
          Live demo<span className="sr-only"> of {project.name}</span>
        </a>
      )}
      <a href={project.repo} className="btn-ghost" target="_blank" rel="noopener noreferrer">
        <Github size={16} aria-hidden="true" />
        Code<span className="sr-only"> for {project.name} on GitHub</span>
      </a>
    </div>
  )
}
