import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SocialLinks } from '../components/SocialLinks'
import { Badge } from '../components/Badge'
import { profile, socialLinks } from '../content'

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="Developer + technical writing"
      title="About"
    >
      <div className="grid gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-7">
          <Reveal className="reveal">
            <p className="text-base leading-7 text-zinc-600/90 dark:text-zinc-300/90">
              I build boring software—predictable, maintainable systems with
              clear boundaries and explicit data flow. Performance matters, but
              so does correctness under real constraints: latency budgets,
              pagination, authentication, and the operational reality of
              production.
            </p>
          </Reveal>

          <Reveal className="reveal" delayMs={120}>
            <p className="mt-5 text-base leading-7 text-zinc-600/85 dark:text-zinc-300/85">
              My approach is architectural: define API contracts early, keep
              models honest, document assumptions, and iterate with measurable
              feedback. Components are the surface; systems are the work.
            </p>
          </Reveal>

          <div className="mt-7 flex flex-wrap gap-2">
            <Reveal className="reveal" delayMs={200}>
              <Badge>Clear API boundaries</Badge>
            </Reveal>
            <Reveal className="reveal" delayMs={240}>
              <Badge>Predictable data flows</Badge>
            </Reveal>
            <Reveal className="reveal" delayMs={280}>
              <Badge>Practical over theoretical</Badge>
            </Reveal>
          </div>
        </div>

        <div className="md:col-span-5">
          <Reveal className="reveal">
            <div className="rounded-2xl border border-zinc-200/90 bg-white/85 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:border-zinc-800/70 dark:bg-zinc-950/20 dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="text-xs tracking-widest text-zinc-500/90 dark:text-zinc-400/90">
                Current education
              </div>
              <div className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {profile.education}
              </div>
              <div className="mt-2 text-sm text-zinc-500/90 dark:text-zinc-400/90">
                I prefer documentation that explains trade-offs—not just outcomes.
              </div>
            </div>
          </Reveal>

          <Reveal className="reveal" delayMs={120}>
            <div className="mt-4">
              <div className="mb-3 text-xs tracking-widest text-zinc-500/90 dark:text-zinc-400/90">
                Social
              </div>
              <SocialLinks links={socialLinks} />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

