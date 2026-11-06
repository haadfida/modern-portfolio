import { featuredProjects } from '../data/projects'
import ProjectLinks from './ProjectLinks'

export default function FeaturedProjects() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="work-title" className="text-3xl font-bold sm:text-4xl">
            Featured work
          </h2>
          <p className="label">{featuredProjects.length} records</p>
        </div>

        <div className="mt-12 grid gap-20">
          {featuredProjects.map((p, i) => (
            <article key={p.slug} aria-labelledby={`${p.slug}-title`} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className={`min-w-0 lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                {p.image && (
                  <a
                    href={p.live ?? p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg border border-line bg-sunk"
                  >
                    <img
                      src={p.image.src}
                      srcSet={p.image.srcSmall ? `${p.image.srcSmall} 700w, ${p.image.src} ${p.image.width}w` : undefined}
                      sizes="(min-width: 1152px) 640px, (min-width: 1024px) 56vw, calc(100vw - 32px)"
                      alt={p.image.alt}
                      width={p.image.width}
                      height={p.image.height}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="block h-auto w-full transition-transform duration-500 hover:scale-[1.015]"
                    />
                  </a>
                )}
              </div>

              <div className="min-w-0 lg:col-span-5">
                <p className="label">{i === 0 ? 'Flagship' : 'Live'} · github.com/haadfida/{p.repo.split('/').pop()}</p>
                <h3 id={`${p.slug}-title`} className="mt-3 text-3xl font-bold">
                  {p.name}
                </h3>
                <p className="mt-4 text-muted">{p.pitch}</p>
                {p.highlights && (
                  <ul className="mt-6 grid gap-2.5 border-l border-line pl-4 text-[0.95rem]">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                <ul aria-label="Stack" className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ProjectLinks project={p} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
