import React from 'react'
import HeroTerminal from '../components/HeroTerminal'
import MultiModalIndicator from '../components/MultiModalIndicator'
import APIBadge from '../components/APIBadge'
import ProjectCard from '../components/ProjectCard'
import ContactTerminal from '../components/ContactTerminal'
import fs from 'fs'
import path from 'path'

async function getData() {
  const p = path.join(process.cwd(), 'data', 'portfolio.json')
  const raw = await fs.promises.readFile(p, 'utf-8')
  return JSON.parse(raw)
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="space-y-8">
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-semibold">{data.site.title}</h1>
          <p className="text-slate-400 mt-1">{data.site.subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          <APIBadge />
          <MultiModalIndicator />
        </div>
      </header>

      <HeroTerminal />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((p: any) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact / Command Prompt</h2>
        <ContactTerminal />
      </section>
    </div>
  )
}
