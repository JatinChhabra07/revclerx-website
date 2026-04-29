'use client'

import { useState } from 'react'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <PageShell>
      {/* HERO */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 pt-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Free 30-minute consultation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 text-balance">
            Let us talk about your <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">AI roadmap</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
            Whether you are scoping your first deployment or reworking a stalled program, we will help you find the highest-leverage move and chart a credible path to production.
          </p>
        </div>
      </Reveal>

      {/* TWO COLUMN: FORM + INFO */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT: FORM */}
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Tell us what you are exploring.</h2>
            <p className="mt-3 text-slate-600">A few quick fields and we will route you to the right specialist.</p>

            <form id="contactForm" onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">Full name <span className="text-rose-700">*</span></label>
                <input id="name" name="name" type="text" required placeholder="Jane Doe" className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none w-full" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">Work email <span className="text-rose-700">*</span></label>
                <input id="email" name="email" type="email" required placeholder="jane@company.com" className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none w-full" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-600 mb-2">Company <span className="text-rose-700">*</span></label>
                <input id="company" name="company" type="text" required placeholder="Acme Corp" className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none w-full" />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-600 mb-2">Role</label>
                  <select id="role" name="role" className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none w-full">
                    <option className="bg-white" value="">Select your role</option>
                    <option className="bg-white" value="CEO">CEO</option>
                    <option className="bg-white" value="CTO">CTO</option>
                    <option className="bg-white" value="CIO">CIO</option>
                    <option className="bg-white" value="VP Engineering">VP Engineering</option>
                    <option className="bg-white" value="Head of Data">Head of Data</option>
                    <option className="bg-white" value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-slate-600 mb-2">Company size</label>
                  <select id="size" name="size" className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none w-full">
                    <option className="bg-white" value="">Select company size</option>
                    <option className="bg-white" value="1-50">1-50</option>
                    <option className="bg-white" value="51-250">51-250</option>
                    <option className="bg-white" value="251-1000">251-1000</option>
                    <option className="bg-white" value="1000+">1000+</option>
                    <option className="bg-white" value="Public">Public</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-2">What are you exploring?</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us about the workflow, metric, or problem you are looking to move." className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none w-full"></textarea>
              </div>

              <div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">
                  Schedule Strategy Call <span aria-hidden="true">→</span>
                </button>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">We respond within 1 business day. All conversations are NDA-ready on request.</p>

              {submitted && (
                <p role="status" aria-live="polite" className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Thanks. A senior consultant will reach out within one business day.
                </p>
              )}
            </form>
          </div>

          {/* RIGHT: INFO */}
          <div className="space-y-6">

            {/* Get in touch */}
            <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900">Get in touch</h3>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0">@</span>
                  <div>
                    <p className="text-slate-500">Email</p>
                    <a href="mailto:hello@revclerx.ai" className="text-slate-900 hover:text-indigo-700 transition">hello@revclerx.ai</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">☎</span>
                  <div>
                    <p className="text-slate-500">Phone</p>
                    <a href="tel:+14155550142" className="text-slate-900 hover:text-emerald-700 transition">+1 (415) 555-0142</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-violet-700 shrink-0">◎</span>
                  <div>
                    <p className="text-slate-500">Headquarters</p>
                    <p className="text-slate-900 font-semibold">Remote-first, with teams across North America, Europe, and APAC.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book directly */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-emerald-500/15 border border-slate-200 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-900 flex items-center justify-center text-white text-xl shrink-0">▦</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Book directly</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Skip the form. Pick a 30-minute slot on our calendar and meet a senior strategist.</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-5 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">Open calendar <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900">What to expect</h3>
              <ol className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-sm font-bold text-white shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-slate-900">Discovery call</p>
                    <p className="text-sm text-slate-500 mt-1">A 30-minute conversation to understand your goal, your stack, and your constraints.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-emerald-500 flex items-center justify-center text-sm font-bold text-white shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-slate-900">Scoping workshop</p>
                    <p className="text-sm text-slate-500 mt-1">A working session with your team to align on outcomes, success metrics, and risks.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-white shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-slate-900">Written proposal</p>
                    <p className="text-sm text-slate-500 mt-1">Plan, milestones, team, fixed-fee budget, and an explicit definition of done.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-sm font-bold text-white shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-slate-900">Kickoff</p>
                    <p className="text-sm text-slate-500 mt-1">Within one week of signoff, we are in your sprint board and shipping.</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Mini cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <a href="mailto:press@revclerx.ai" className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 hover:border-slate-300 transition">
                <p className="text-xs uppercase tracking-widest text-indigo-700 font-semibold">Media</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">press@revclerx.ai</p>
              </a>
              <a href="mailto:partners@revclerx.ai" className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 hover:border-slate-300 transition">
                <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">Partnerships</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">partners@revclerx.ai</p>
              </a>
              <a href="mailto:careers@revclerx.ai" className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 hover:border-slate-300 transition">
                <p className="text-xs uppercase tracking-widest text-violet-700 font-semibold">Careers</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">careers@revclerx.ai</p>
              </a>
            </div>

          </div>
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal as="section" className="max-w-4xl mx-auto px-6 mt-32">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-700">FAQ</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Frequently asked.</h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">Quick answers to the questions we hear most often on first calls.</p>
        </div>

        <div className="mt-12 space-y-4">
          <details className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-6">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-slate-900 font-semibold list-none">
              <span>How long does a typical engagement take?</span>
              <span className="text-indigo-700 group-open:rotate-45 transition text-2xl leading-none">+</span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">Most engagements run between 4 and 16 weeks end to end. A focused proof of concept lands in 4 weeks, a full production deployment in 10 to 12, and an ongoing managed program runs quarter by quarter after that.</p>
          </details>

          <details className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-6">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-slate-900 font-semibold list-none">
              <span>Do you work with our existing data team or replace it?</span>
              <span className="text-indigo-700 group-open:rotate-45 transition text-2xl leading-none">+</span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">We work with you, never around you. Our model is to embed alongside your existing data, ML, and engineering teams, transfer knowledge throughout the engagement, and leave your team strictly more capable than we found them.</p>
          </details>

          <details className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-6">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-slate-900 font-semibold list-none">
              <span>What does the AI Readiness Sprint cover?</span>
              <span className="text-indigo-700 group-open:rotate-45 transition text-2xl leading-none">+</span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">The two-week sprint maps your data landscape, prioritizes use cases against expected ROI, evaluates risk and compliance posture, and outputs a 90-day execution plan with budget and staffing. You walk away with a credible roadmap whether or not you continue with us.</p>
          </details>

          <details className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-6">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-slate-900 font-semibold list-none">
              <span>Can you deploy on-premise or air-gapped?</span>
              <span className="text-indigo-700 group-open:rotate-45 transition text-2xl leading-none">+</span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">Yes. We have shipped into VPC, on-premise, and fully air-gapped environments. We support open-weight model deployment, private inference endpoints, and a model-agnostic architecture so you stay in control of where data lives.</p>
          </details>

          <details className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-6">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-slate-900 font-semibold list-none">
              <span>How do you handle data security and compliance?</span>
              <span className="text-indigo-700 group-open:rotate-45 transition text-2xl leading-none">+</span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">Security is treated as a first-class engineering deliverable, not an afterthought. We follow SOC 2 Type II controls, support GDPR and HIPAA workloads, ship with audit logging by default, and run threat-modeling and red-team exercises before any model touches production data.</p>
          </details>
        </div>
      </Reveal>

      {/* TRUST PILLS */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-32 mb-32">
        <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-emerald-700">Compliance posture</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">Built for regulated enterprises.</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-4 py-2 text-sm font-semibold">SOC 2 ready</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100/50 text-indigo-700 px-4 py-2 text-sm font-semibold">GDPR aligned</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 text-violet-700 px-4 py-2 text-sm font-semibold">HIPAA experienced</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 px-4 py-2 text-sm font-semibold">ISO 27001 in process</span>
            </div>
          </div>
        </div>
      </Reveal>
    </PageShell>
  )
}
