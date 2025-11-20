import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">About</h2>
          </div>
          <div className="md:col-span-2">
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700">
                I combine a systems mindset with practical engineering to create tools that feel effortless. My approach balances research, rapid prototyping, and thoughtful visual design.
              </p>
              <p className="text-slate-700">
                Outside of work I enjoy sound design, tea, and long walks that turn into product ideas. I believe calm software helps people do their best work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
