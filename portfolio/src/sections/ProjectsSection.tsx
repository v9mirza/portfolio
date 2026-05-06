import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { projects } from '../content'
import { ProjectCard } from '../components/ProjectCard'

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work with real-world engineering constraints"
      title="Projects"
    >
      <Reveal className="reveal">
        <p className="mb-6 max-w-2xl text-sm leading-7 text-zinc-600/90 dark:text-zinc-300/85">
          A mix of product-facing and systems-focused work. Each project balances
          user experience with reliability, clean API contracts, and maintainable
          architecture.
        </p>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, idx) => (
          <Reveal key={p.title} className="reveal" delayMs={idx * 120}>
            <ProjectCard
              title={p.title}
              description={p.description}
              stack={[...p.stack]}
              links={{
                github: p.links.github,
                live: p.links.live,
              }}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

