import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 px-5 py-3">
          <a href="#top" className="text-sm font-semibold tracking-tight text-slate-100">{/* Brand */}
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-rose-400 align-middle shadow-[0_0_12px_rgba(244,63,94,0.8)]"></span>
            <span>My Portfolio</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <a href="#work" className="hover:text-rose-300 transition-colors">Work</a>
            <a href="#about" className="hover:text-rose-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-rose-300 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-rose-300 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-full bg-rose-100/80 text-rose-900 px-4 py-2 text-sm font-medium hover:bg-rose-200 transition-colors">
              <Mail size={16} /> <span>Get in touch</span>
            </a>
            <a href="#" aria-label="GitHub" className="ml-2 rounded-full p-2 text-slate-200 hover:text-white hover:bg-white/10 transition-colors">
              <Github size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full p-2 text-slate-200 hover:text-white hover:bg-white/10 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
