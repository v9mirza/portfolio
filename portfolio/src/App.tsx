import { useCallback, useMemo } from 'react'
import { CommandPalette } from './components/CommandPalette'
import { Navbar } from './components/Navbar'
import { useScrollSpy } from './hooks/useScrollSpy'
import {
  navItems as contentNavItems,
} from './content'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HomeSection } from './sections/HomeSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

export default function App() {
  const sectionIds = useMemo(() => contentNavItems.map((n) => n.id), [])
  const activeId = useScrollSpy(sectionIds, { preferredTop: 110 })

  const onNavigate = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const paletteItems = useMemo(() => {
    const descriptions: Record<string, string> = {
      home: 'Hero and quick actions',
      about: 'Philosophy and background',
      experience: 'Roles and responsibilities',
      skills: 'Languages, APIs, infrastructure',
      projects: 'Selected engineering work',
      contact: 'Email and social links',
    }
    return contentNavItems.map((it) => ({
      key: it.id,
      label: it.label,
      description: descriptions[it.id] ?? undefined,
      sectionId: it.id,
    }))
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar
        activeId={activeId}
        items={contentNavItems}
        onNavigate={onNavigate}
      />

      <CommandPalette
        items={paletteItems}
        onPick={(item) => {
          if (item.sectionId) onNavigate(item.sectionId)
        }}
      />

      <main>
        <HomeSection onNavigate={onNavigate} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="pb-20 pt-12 text-center text-xs text-zinc-500">
        Built for clarity, performance, and real-world constraints.
      </footer>
    </div>
  )
}
