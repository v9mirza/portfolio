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
      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <Reveal key={exp.company} className="reveal" delayMs={idx * 120}>
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white/85 p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.07)] dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:shadow-[0_12px_40px_rgba(0,0,0,0.26)]">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-500/70 to-indigo-500/60" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.role}
                  </div>
                  <div className="mt-1 text-sm text-zinc-500/90 dark:text-zinc-400/90">
                    {exp.company} · {exp.location}
                  </div>
                </div>
                <div className="rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-xs text-zinc-500/95 dark:border-zinc-800/80 dark:bg-zinc-900/35 dark:text-zinc-400/95">
                  {exp.start} - {exp.end}
                </div>
              </div>

              <ul className="mt-5 space-y-2">
                {exp.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-sm leading-6 text-zinc-600/90 dark:text-zinc-300/90"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400/80" />
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

