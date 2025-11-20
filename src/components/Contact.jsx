import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending…')
    try {
      // Placeholder: wire to backend later if desired
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! I will reply soon.')
    } catch {
      setStatus('Something went wrong. Please email me directly.')
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Let’s collaborate</h2>
        <p className="mt-2 text-slate-600">Tell me about your project and I’ll get back within 1–2 days.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="jane@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea rows="5" required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="A short brief…" />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition">Send message</button>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
