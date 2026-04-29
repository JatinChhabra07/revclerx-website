import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries | Enterprise AI Solutions',
  description:
    'RevClerx delivers domain-specific AI for financial services, healthcare, manufacturing, retail, logistics, energy, and more.',
}

export default function IndustriesPage() {
  return (
    <PageShell>
      <Reveal as="section" className="relative overflow-hidden pt-16 md:pt-24 pb-20">
        <div aria-hidden="true" className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-emerald-100/60 blur-3xl opacity-60"></div>
        <div aria-hidden="true" className="absolute top-32 -left-24 w-[460px] h-[460px] rounded-full bg-indigo-100/60 blur-3xl opacity-60"></div>
        <div aria-hidden="true" className="absolute bottom-0 left-1/2 w-[360px] h-[360px] rounded-full bg-cyan-100/60 blur-3xl opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-4 py-1.5 text-xs font-medium text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Trusted in regulated, complex environments.
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900 text-balance">
              Domain Expertise Across{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                12+ Industries
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              Generic AI breaks the moment it meets a regulator, a legacy ERP, or a customer who knows the rules. Our pods bring the data patterns, compliance reflexes, and field experience your industry actually needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">Book a Strategy Call <span aria-hidden="true">→</span></Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition">Explore Services</Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Industries We Serve</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Where we help, with proof.</h2>
            </div>
            <p className="text-slate-500 max-w-md leading-relaxed">Twelve sectors. One delivery model. Each engagement led by people who have already shipped in your domain.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-100 to-emerald-100 border border-slate-200 flex items-center justify-center text-indigo-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-3 7 3"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 14v3"/><path d="M12 14v3"/><path d="M16 14v3"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Financial Services</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Decision-grade AI for risk, compliance, and customer growth, deployed inside the bank's perimeter.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Fraud detection</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> KYC automation</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Credit risk modeling</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 border border-slate-200 flex items-center justify-center text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.5-2.5 2-4 2-6a7 7 0 1 0-14 0c0 2 .5 3.5 2 6"/><path d="M9 14h6"/><path d="M12 11v6"/><path d="M9 22h6"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Healthcare &amp; Life Sciences</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">HIPAA-grade AI that accelerates research and clinical operations without compromising patient trust.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Clinical document processing</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Drug discovery</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Patient triage</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-slate-200 flex items-center justify-center text-violet-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V9l5-4 5 4v12"/><path d="M13 13h8v8h-8"/><path d="M17 17h.01"/><path d="M7 13h.01"/><path d="M7 17h.01"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Manufacturing</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Plant-floor AI that converts sensor data into uptime, quality, and tighter throughput.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Predictive maintenance</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Quality inspection</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Supply chain optimization</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-50 border border-slate-200 flex items-center justify-center text-cyan-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18l-2 12H5z"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Retail &amp; E-commerce</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Personalization and forecasting that lift basket size, cut markdowns, and shrink return rates.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Personalization engines</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Demand forecasting</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Conversational commerce</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-slate-200 flex items-center justify-center text-indigo-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h2l1-3h7l1 3h2"/><path d="M14 17h6v-5l-3-4h-3"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Logistics &amp; Supply Chain</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Optimization across fleets, warehouses, and customer promises, all the way to the doorstep.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Route optimization</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Warehouse intelligence</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> ETA prediction</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-indigo-50 border border-slate-200 flex items-center justify-center text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Energy &amp; Utilities</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">AI for grid resilience, renewable integration, and asset performance, ready for regulator scrutiny.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Grid optimization</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Asset monitoring</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Anomaly detection</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-50 to-emerald-50 border border-slate-200 flex items-center justify-center text-violet-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v7c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Insurance</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Faster claims, sharper underwriting, and fraud signals that hold up in adjudication.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Claims automation</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Underwriting copilots</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Fraud analytics</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-50 to-violet-50 border border-slate-200 flex items-center justify-center text-cyan-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12c2 5 6 8 10 8s8-3 10-8c-2-5-6-8-10-8S4 7 2 12z"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Telecommunications</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Intelligence layered across the network, the call center, and the customer lifecycle.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Network optimization</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Churn prediction</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Service automation</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-50 to-cyan-50 border border-slate-200 flex items-center justify-center text-indigo-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-7h6v7"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Real Estate &amp; PropTech</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Models that price assets, qualify leads, and tame the paperwork between offer and close.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Valuation models</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Lead scoring</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Document automation</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-violet-50 border border-slate-200 flex items-center justify-center text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M5 6h14l-3 6 3 6H5l3-6z"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Legal &amp; Compliance</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">AI that reads, redlines, and reasons over contracts and regulations with citations you can defend.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Contract review</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Regulatory monitoring</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> E-discovery</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-50 to-cyan-50 border border-slate-200 flex items-center justify-center text-violet-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7l10-5 10 5-10 5z"/><path d="M6 9v5c0 2 3 4 6 4s6-2 6-4V9"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Education &amp; EdTech</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Adaptive content and integrity tooling for institutions and platforms serving real learners at scale.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Adaptive learning</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Content generation</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Plagiarism detection</li>
              </ul>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-100 to-emerald-100 border border-slate-200 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V8h4v13"/><path d="M15 21V3h4v18"/><path d="M9 14h6"/></svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Public Sector</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Citizen-grade AI that respects accessibility, transparency, and the public record from day one.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Citizen services</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Document processing</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Policy analytics</li>
              </ul>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-violet-50 to-emerald-50 p-8 md:p-14">
            <div aria-hidden="true" className="absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full bg-indigo-100/60 blur-3xl"></div>
            <div aria-hidden="true" className="absolute -bottom-24 -left-16 w-[420px] h-[420px] rounded-full bg-emerald-100/60 blur-3xl"></div>
            <div className="relative grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Featured Industry Deep-dive</p>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Financial Services, rebuilt around real-time risk.</h2>
                <p className="mt-5 text-slate-600 leading-relaxed">A top-10 North American bank brought us in to rethink fraud detection that was burying analysts in false positives. We rebuilt the scoring stack on a hybrid graph and gradient-boosted ensemble, wired it into the existing case management tool, and shipped to production in 11 weeks.</p>
                <p className="mt-4 text-slate-600 leading-relaxed">The model now runs on every card-not-present transaction, audits its own decisions, and feeds analyst feedback back into nightly retraining.</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">Read the Case Study <span aria-hidden="true">→</span></Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-white/[0.08] hover:border-slate-300 transition">Talk to a FS Lead</Link>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-slate-200 bg-white/[0.04] p-8">
                  <p className="text-sm uppercase tracking-widest text-slate-500">Outcome</p>
                  <p className="mt-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">73%</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Reduction in false-positive fraud alerts.</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    <li className="flex gap-2"><span className="text-emerald-600">✓</span> 11-week production rollout</li>
                    <li className="flex gap-2"><span className="text-emerald-600">✓</span> 2.4x analyst throughput</li>
                    <li className="flex gap-2"><span className="text-emerald-600">✓</span> Zero regulator findings post-launch</li>
                    <li className="flex gap-2"><span className="text-emerald-600">✓</span> Nightly retraining pipeline</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">How we tailor AI per industry</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Same delivery model. Domain-specific muscle.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">A cookie-cutter LLM does not survive a regulator, a unionized workforce, or a 30-year-old data warehouse. We adapt four levers on every engagement.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:border-slate-300 transition">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center text-sm font-bold text-white">01</span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Regulatory mapping</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">We translate sector-specific rules (HIPAA, GLBA, FedRAMP, EU AI Act) into concrete model controls and audit artifacts.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:border-slate-300 transition">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center text-sm font-bold text-white">02</span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Data residency</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">VPC, on-prem, or sovereign-cloud deployments with private model endpoints, so sensitive data never leaves your perimeter.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:border-slate-300 transition">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center text-sm font-bold text-white">03</span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Domain models</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">Fine-tuned and retrieval-grounded models on your taxonomies, schemas, and ground-truth examples, not the open internet.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:border-slate-300 transition">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center text-sm font-bold text-white">04</span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Change management</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">Enablement, role-based training, and feedback loops so the AI lands with the people who actually use it every day.</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-violet-50 to-emerald-50 p-10 md:p-16">
            <div aria-hidden="true" className="absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full bg-emerald-100/60 blur-3xl"></div>
            <div aria-hidden="true" className="absolute -bottom-32 -right-16 w-[420px] h-[420px] rounded-full bg-indigo-100/60 blur-3xl"></div>
            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Don't see your industry?</h2>
              <p className="mt-5 text-slate-600 leading-relaxed">We've delivered for adjacent domains too, from agritech to aerospace MRO to municipal transit. Tell us the problem and we'll tell you, honestly, whether we're the right team to solve it.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">Contact Us <span aria-hidden="true">→</span></Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-white/[0.08] hover:border-slate-300 transition">Browse Services</Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </PageShell>
  )
}
