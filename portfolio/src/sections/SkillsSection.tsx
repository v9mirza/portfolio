import { Badge } from '../components/Badge'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { skills } from '../content'

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Languages, APIs, and infrastructure"
      title="Skills"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, idx) => (
          <Reveal key={group.title} className="reveal" delayMs={idx * 110}>
            <div className="rounded-2xl border border-zinc-200/90 bg-white/85 p-6 dark:border-zinc-800/70 dark:bg-zinc-950/20">
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {group.title}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

