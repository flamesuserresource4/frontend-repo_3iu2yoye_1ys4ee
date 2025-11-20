import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Insight Dashboard',
    desc: 'A pastel, data-forward executive dashboard with rich accessibility and motion states.',
    tags: ['React', 'Tailwind', 'D3'],
    link: '#'
  },
  {
    title: 'Wellness Companion',
    desc: 'Holistic habit-tracking app blending behavioral design with calm UI patterns.',
    tags: ['React Native', 'Expo'],
    link: '#'
  },
  {
    title: 'Ops Automations',
    desc: 'Workflow bots that reduce manual toil via clean APIs and resilient queues.',
    tags: ['FastAPI', 'MongoDB', 'Celery'],
    link: '#'
  },
]

const Work = () => {
  return (
    <section id="work" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Selected work</h2>
            <p className="mt-2 text-slate-600">A few projects that reflect a blend of systems thinking and craft.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              key={p.title}
              href={p.link}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-black/0 transition hover:shadow-md"
            >
              <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-rose-50 via-white to-sky-50 ring-1 ring-inset ring-slate-200"></div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-slate-900 font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 text-slate-400 transition group-hover:text-rose-400" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
