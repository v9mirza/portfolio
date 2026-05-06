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
      <div className="mb-6 rounded-2xl border border-zinc-200/90 bg-white/80 p-4 text-sm leading-7 text-zinc-600/90 dark:border-zinc-800/70 dark:bg-zinc-900/25 dark:text-zinc-300/85">
        I work across product UI, backend APIs, and deployment workflows. My
        preference is practical stacks that are easy to maintain as complexity grows.
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, idx) => (
          <Reveal key={group.title} className="reveal" delayMs={idx * 110}>
            <div className="rounded-3xl border border-zinc-200/90 bg-white/85 p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:shadow-[0_10px_35px_rgba(0,0,0,0.2)]">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {group.title}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Badge
                    key={s}
                    className="border-zinc-300/90 bg-zinc-50 text-zinc-800 dark:border-zinc-700/80 dark:bg-zinc-900/40 dark:text-zinc-200"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

