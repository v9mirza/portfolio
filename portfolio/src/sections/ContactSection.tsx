import { useMemo, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SocialLinks } from '../components/SocialLinks'
import { Button } from '../components/Button'
import { profile, socialLinks } from '../content'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const mailto = useMemo(() => {
    const subject = `Portfolio message from ${name || 'someone'}`
    const body = [
      `From: ${name || '(no name)'} <${email || '(no email)'}>`,
      '',
      message || '(no message)',
    ].join('\n')

    const q = new URLSearchParams({
      subject,
      body,
    })
    return `mailto:${profile.email}?${q.toString()}`
  }, [email, message, name])

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something that lasts."
    >
      <div className="grid gap-8 sm:gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <Reveal className="reveal">
            <div className="rounded-3xl border border-zinc-200/90 bg-white/85 p-5 sm:p-6 shadow-[0_14px_45px_rgba(0,0,0,0.07)] dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:shadow-[0_14px_45px_rgba(0,0,0,0.24)]">
              <div className="mb-5 rounded-2xl border border-sky-200/70 bg-sky-50/70 p-3 text-sm leading-6 text-zinc-700 sm:p-4 dark:border-sky-900/50 dark:bg-sky-950/20 dark:text-zinc-300">
                Open to freelance, contract, and full-time software engineering roles.
              </div>
              <div className="text-xs tracking-widest text-zinc-500/90 dark:text-zinc-400/90">
                Location
              </div>
              <div className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {profile.location}
              </div>

              <div className="mt-5 text-xs tracking-widest text-zinc-500/90 dark:text-zinc-400/90">
                Email
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 inline-flex items-center gap-2 rounded-xl border border-zinc-200/70 bg-white/60 px-4 py-2 text-sm text-zinc-900 transition hover:-translate-y-0.5 hover:bg-zinc-200/20 hover:text-zinc-900 dark:border-zinc-800/70 dark:bg-zinc-900/20 dark:text-zinc-200/95 dark:hover:bg-zinc-800/20 dark:hover:text-zinc-100"
              >
                {profile.email}
              </a>

              <div className="mt-6">
                <div className="mb-3 text-xs tracking-widest text-zinc-500/90 dark:text-zinc-400/90">
                  Social
                </div>
                <SocialLinks links={socialLinks} />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal className="reveal" delayMs={120}>
            <form
              className="rounded-3xl border border-zinc-200/90 bg-white/85 p-5 sm:p-6 shadow-[0_14px_45px_rgba(0,0,0,0.07)] dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:shadow-[0_14px_45px_rgba(0,0,0,0.24)]"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
                // Open user mail client (no backend by design)
                window.location.href = mailto
              }}
            >
              <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Write a message
              </div>
              <div className="mt-1 text-sm text-zinc-500/90 dark:text-zinc-400/90">
                Clear details help me respond faster.
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs text-zinc-500/90 dark:text-zinc-400/90">Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-sky-400/60 dark:border-zinc-800/70 dark:bg-zinc-900/20 dark:text-zinc-100"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs text-zinc-500/90 dark:text-zinc-400/90">Email</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="mt-2 w-full rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-sky-400/60 dark:border-zinc-800/70 dark:bg-zinc-900/20 dark:text-zinc-100"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block mt-4">
                <span className="text-xs text-zinc-500/90 dark:text-zinc-400/90">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-sky-400/60 dark:border-zinc-800/70 dark:bg-zinc-900/20 dark:text-zinc-100"
                  placeholder="What are you building? Any constraints or timelines?"
                  required
                />
              </label>

              <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button variant="primary" type="submit" className="w-full sm:w-auto">
                  Send email
                </Button>
                {submitted ? (
                  <div className="text-xs text-zinc-500/90 dark:text-zinc-400/90">
                    If your mail client didn’t open, use the email link on the
                    left.
                  </div>
                ) : (
                  <div className="text-xs text-zinc-500/90 dark:text-zinc-400/90">
                    No forms stored. No tracking. Just a mailto.
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

