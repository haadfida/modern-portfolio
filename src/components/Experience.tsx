/** Keep the employer generic here: "asset-management SaaS", never the company or product names. */
const roles: { title: string; dates: string }[] = [
  { title: 'Principal Software Engineer', dates: 'Aug 2026 – present' },
  { title: 'Senior Software Engineer', dates: 'Jul 2024 – Aug 2026' },
  { title: 'Software Engineer II', dates: 'Jan 2023 – Jul 2024' },
  { title: 'Associate Software Engineer', dates: 'Aug 2021 – Jan 2023' },
]

const outcomes: { lead: string; detail: string }[] = [
  {
    lead: 'Led a 10-engineer modernization',
    detail:
      'of a platform more than ten years old into reusable React and TypeScript architecture, and migrated its largest module off legacy jQuery patterns.',
  },
  {
    lead: 'Work orders: about 3 s down to under 500 ms',
    detail: 'for a critical workflow, through the React migration and application and data-flow optimization.',
  },
  {
    lead: 'Bulk checkout of 10,000+ assets: over an hour down to about a minute',
    detail: 'by removing application and database bottlenecks.',
  },
  {
    lead: 'Secure APIs and integrations',
    detail: 'in Rails, using OAuth 2.0, JWT with DPoP, encrypted state, rate limiting and secure S3 uploads.',
  },
  {
    lead: 'React Native releases',
    detail: 'to the App Store and Google Play, including framework upgrades and a SAML SSO login migration.',
  },
]

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
        <h2 id="experience-title" className="text-3xl font-bold sm:text-4xl lg:col-span-4">
          Experience
        </h2>
        <article className="min-w-0 lg:col-span-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-xl font-bold">Asset-management SaaS</h3>
            <p className="label">5+ years · four levels</p>
          </div>
          <p className="mt-4 max-w-[40rem] text-muted">
            I work across the web and mobile apps of a multi-product asset-management SaaS: Ruby on Rails on the
            backend, React on the web and React Native on mobile. I lead technical delivery and still write code
            every day.
          </p>

          <ol className="mt-8 border-t border-line">
            {roles.map((r, i) => (
              <li
                key={r.title}
                className="flex flex-col gap-y-1 border-b border-line py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-6"
              >
                <span className={i === 0 ? 'font-bold' : undefined}>{r.title}</span>
                <span className="label">{r.dates}</span>
              </li>
            ))}
          </ol>

          <ul className="mt-8 max-w-[40rem] space-y-4">
            {outcomes.map((o) => (
              <li key={o.lead} className="text-muted">
                <strong className="font-bold text-ink">{o.lead}</strong> {o.detail}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
