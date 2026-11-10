const groups: { name: string; items: string[] }[] = [
  { name: 'Backend', items: ['Ruby on Rails', 'MySQL', 'REST APIs', 'GraphQL', 'Node.js', 'Python'] },
  { name: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'] },
  { name: 'Mobile', items: ['React Native', 'Expo', 'SQLite'] },
  { name: 'AI', items: ['Claude API and tool use', 'MCP servers', 'LangGraph', 'Graph RAG with Neo4j', 'Agent evals'] },
]

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
        <h2 id="skills-title" className="text-3xl font-bold sm:text-4xl lg:col-span-4">
          Skills
        </h2>
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
          {groups.map((g) => (
            <div key={g.name} className="min-w-0 border-t border-line pt-4">
              <dt className="label">{g.name}</dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded bg-sunk px-2.5 py-1 text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
