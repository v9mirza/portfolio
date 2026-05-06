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

