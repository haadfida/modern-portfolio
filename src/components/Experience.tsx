export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
        <h2 id="experience-title" className="text-3xl font-bold sm:text-4xl lg:col-span-4">
          Experience
        </h2>
        <article className="min-w-0 lg:col-span-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-xl font-bold">Principal Software Engineer · Asset-management SaaS</h3>
            <p className="label">5+ years</p>
          </div>
          <p className="mt-4 max-w-[40rem] text-muted">
            I work across the web and mobile apps of a multi-product asset-management SaaS: Ruby on Rails on the
            backend, React on the web and React Native on mobile.
          </p>
        </article>
      </div>
    </section>
  )
}
