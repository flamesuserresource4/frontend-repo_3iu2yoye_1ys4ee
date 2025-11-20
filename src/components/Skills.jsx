import React from 'react'
import { Check } from 'lucide-react'

const groups = [
  { title: 'Design', items: ['Systems thinking', 'Product strategy', 'UX writing', 'Design systems'] },
  { title: 'Engineering', items: ['React', 'FastAPI', 'MongoDB', 'TypeScript'] },
  { title: 'Practices', items: ['Accessibility', 'Prototyping', 'Testing', 'Documentation'] },
]

const Skills = () => {
  return (
    <section id="skills" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Capabilities</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups.map(g => (
            <div key={g.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-slate-900 font-medium">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map(i => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <Check className="h-4 w-4 text-rose-400" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
