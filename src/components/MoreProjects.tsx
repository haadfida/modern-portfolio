import { ArrowUpRight } from 'lucide-react'
import { moreProjects, type Project } from '../data/projects'

function Glyph({ kind }: { kind: NonNullable<Project['glyph']> }) {
  if (kind === 'graph') {
    const nodes = [
      [40, 50], [110, 28], [110, 78], [185, 50], [250, 24], [250, 82],
    ]
    const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5]]
    return (
      <svg viewBox="0 0 290 110" className="h-full w-full" aria-hidden="true">
        {edges.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="var(--muted)" strokeWidth="1.5" />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 3 ? 9 : 6} fill={i === 3 ? 'var(--accent)' : 'var(--surface)'} stroke="var(--ink)" strokeWidth="1.5" />
        ))}
      </svg>
    )
  }
  const rows = [
    { w: 70, t: ' ' }, { w: 120, t: '-' }, { w: 150, t: '+' }, { w: 96, t: '+' }, { w: 130, t: ' ' }, { w: 60, t: ' ' },
  ]
  return (
    <svg viewBox="0 0 290 110" className="h-full w-full" aria-hidden="true">
      {rows.map((r, i) => {
        const y = 14 + i * 15
        const fill = r.t === '+' ? 'var(--accent-soft)' : r.t === '-' ? 'var(--line)' : 'transparent'
        return (
          <g key={i}>
            <rect x="24" y={y - 6} width="242" height="13" fill={fill} />
            <text x="30" y={y + 4} fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)">{r.t}</text>
            <rect x="46" y={y - 2} width={r.w} height="5" rx="2" fill={r.t === '+' ? 'var(--accent)' : 'var(--muted)'} />
          </g>
        )
      })}
    </svg>
  )
}

export default function MoreProjects() {
  return (
    <section aria-labelledby="more-title" className="mx-auto max-w-page px-4 pb-16 sm:px-6 sm:pb-24">
      <h2 id="more-title" className="text-2xl font-bold">
        More projects
      </h2>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {moreProjects.map((p) => (
          <li key={p.slug} className="min-w-0">
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-accent"
            >
              <div className="aspect-[29/11] overflow-hidden border-b border-line bg-sunk">
                {p.image ? (
                  <img
                    src={p.image.srcSmall ?? p.image.src}
                    alt={p.image.alt}
                    width={p.image.width}
                    height={p.image.height}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: p.image.position }}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  p.glyph && <Glyph kind={p.glyph} />
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="flex items-start justify-between gap-2 text-lg font-bold">
                  {p.name}
                  <ArrowUpRight size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-muted transition-colors group-hover:text-accent" />
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.pitch}</p>
                <p className="mt-4 font-mono text-xs text-muted">{p.stack.join(' · ')}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
