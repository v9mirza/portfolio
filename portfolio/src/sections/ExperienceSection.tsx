import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { experience } from '../content'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Execution + systems thinking"
      title="Experience"
    >
      <div className="space-y-4">
        {experience.map((exp, idx) => (
          <Reveal key={exp.company} className="reveal" delayMs={idx * 120}>
            <div className="rounded-2xl border border-zinc-200/90 bg-white/85 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:border-zinc-800/70 dark:bg-zinc-950/20 dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {exp.role}
                  </div>
                  <div className="mt-1 text-sm text-zinc-500/90 dark:text-zinc-400/90">
                    {exp.company}
                  </div>
                </div>
                <div className="text-sm text-zinc-500/90 dark:text-zinc-400/90">
                  {exp.start} - {exp.end}
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-sm leading-6 text-zinc-600/90 dark:text-zinc-300/90"
                  >
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-sky-400/70" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

