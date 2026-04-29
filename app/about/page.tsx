import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import StatCounter from '@/components/StatCounter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Enterprise AI Specialists',
  description: 'RevClerx is a senior enterprise AI consultancy. We assess, build, and operate AI systems for regulated, data rich organizations across 12 plus industries.'
}

export default function AboutPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="blob blob-violet w-[420px] h-[420px] top-10 -left-32"></div>
        <div className="blob blob-emerald w-[400px] h-[400px] -top-20 right-0"></div>
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24 relative">
          <span className="text-xs uppercase tracking-[0.25em] text-indigo-700">About RevClerx</span>
          <h1 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight text-slate-900 text-balance leading-[1.05]">
            Senior operators, building AI that <span className="grad-text">ships</span>.
          </h1>
          <p className="mt-7 max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed">
            We are a small, senior team of AI engineers, data scientists, and former enterprise CIOs. We started RevClerx because too many AI programs were stalling between brilliant slideware and production reality. Our job is to close that gap.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-700">Mission</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">Make enterprise AI a P&amp;L line item, not a slide.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">Eighty percent of enterprise AI projects fail. Almost never because of the model. It is integration, governance, change management, and the absence of a roadmap that ties to revenue. We exist to fix all of that, in production, on your stack.</p>
          </Reveal>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-violet-700">Approach</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">Senior people, accountable to outcomes.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">No layered consultancies. Every engagement is led by a partner with at least a decade of enterprise delivery, paired with engineers who have shipped AI in regulated environments. We bill on outcomes wherever the data allows.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-700">Principles</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Five things we will not compromise on.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="text-sm font-mono text-indigo-700">P1</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Outcomes over output.</h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">A model in a notebook is not an outcome. We define the metric on day one and own it through deployment.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="text-sm font-mono text-emerald-700">P2</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Security as default.</h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">Air-gapped, on-premise, hybrid, or cloud. The architecture decision starts with your data residency and compliance posture.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="text-sm font-mono text-violet-700">P3</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Speed without shortcuts.</h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">Four week POCs are the norm. We get there by removing process bloat, not by skipping reviews.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="text-sm font-mono text-cyan-700">P4</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Integration is the product.</h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">If it does not slot into your ERP, your CRM, or your data lake, it does not ship. We treat connectors as first-class work.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="text-sm font-mono text-amber-700">P5</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Stay after launch.</h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">Models drift. Regulations change. We monitor, retrain, and optimize so the value compounds rather than decays.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="text-sm font-mono text-rose-700">P6</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Honest about limits.</h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">If AI is not the right answer, we will tell you on day one. We have walked away from work that was not ready for AI.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-700">By the numbers</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">A track record, not a deck.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 text-center">
              <div className="text-4xl md:text-5xl font-bold stat-number tabular"><StatCounter to={50} suffix="+" /></div>
              <div className="mt-2 text-sm text-slate-500">Enterprise AI deployments</div>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 text-center">
              <div className="text-4xl md:text-5xl font-bold stat-number tabular"><StatCounter to={12} suffix="+" /></div>
              <div className="mt-2 text-sm text-slate-500">Industries served</div>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 text-center">
              <div className="text-4xl md:text-5xl font-bold stat-number tabular"><StatCounter to={94} suffix="%" /></div>
              <div className="mt-2 text-sm text-slate-500">Client retention rate</div>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 text-center">
              <div className="text-4xl md:text-5xl font-bold stat-number tabular"><StatCounter to={4} suffix=" wks" /></div>
              <div className="mt-2 text-sm text-slate-500">Average POC delivery</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-violet-700">Timeline</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">From a thesis to a category leader.</h2>
          </Reveal>
          <div className="mt-12 space-y-6">
            <Reveal className="flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="md:w-32 shrink-0 font-mono text-indigo-700">2022</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Founded.</h3>
                <p className="mt-2 text-sm text-slate-500">Three founders, one thesis. Enterprise AI is bottlenecked by integration and governance, not by models.</p>
              </div>
            </Reveal>
            <Reveal className="flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="md:w-32 shrink-0 font-mono text-emerald-700">2023</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">First production deployments.</h3>
                <p className="mt-2 text-sm text-slate-500">Shipped fraud detection, document processing, and predictive maintenance for early enterprise partners.</p>
              </div>
            </Reveal>
            <Reveal className="flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="md:w-32 shrink-0 font-mono text-violet-700">2024</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Crossed 25 deployments.</h3>
                <p className="mt-2 text-sm text-slate-500">Expanded into healthcare, retail, and logistics. Released the Assess, Accelerate, Sustain methodology.</p>
              </div>
            </Reveal>
            <Reveal className="flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="md:w-32 shrink-0 font-mono text-cyan-700">2025</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">50 plus deployments.</h3>
                <p className="mt-2 text-sm text-slate-500">Launched the Managed AI Operations practice. Strategic partnerships with Nervesparks and Xsparks.ai.</p>
              </div>
            </Reveal>
            <Reveal className="flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="md:w-32 shrink-0 font-mono text-amber-700">2026</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Today.</h3>
                <p className="mt-2 text-sm text-slate-500">Operating across North America, Europe, and APAC. Twelve plus industries served and 94% client retention.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-700">Leadership</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">A senior bench, end to end.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">Our partners have shipped AI in banks, hospitals, factories, and public institutions. Every engagement is led by one of them, full time, until the system is in production.</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400"></div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Co-founder &amp; CEO</h3>
              <p className="mt-1 text-sm text-indigo-700">AI Strategy, Enterprise Delivery</p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">Former CIO at a Fortune 500. Fifteen years architecting AI and data programs in regulated industries.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400"></div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Co-founder &amp; CTO</h3>
              <p className="mt-1 text-sm text-emerald-700">ML Systems, Production AI</p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">Built large-scale ML platforms at two hyperscalers. Open source contributor to retrieval and agent frameworks.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-rose-400"></div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Co-founder &amp; CDO</h3>
              <p className="mt-1 text-sm text-violet-700">Data Governance, Compliance</p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">Former regulator turned operator. Built data governance programs across financial services and healthcare.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="rounded-3xl border border-slate-200 bg-white shadow-sm p-10 md:p-16 relative overflow-hidden">
            <div className="blob blob-indigo w-[360px] h-[360px] -top-20 -right-20 opacity-30"></div>
            <div className="blob blob-emerald w-[300px] h-[300px] -bottom-20 -left-20 opacity-30"></div>
            <div className="relative max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Want to see how we work?</h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">Book a 30 minute call. We will walk you through a recent deployment in your industry and outline what your first 4 weeks with RevClerx would look like.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">Book a Strategy Call <span aria-hidden>{'→'}</span></Link>
                <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">See case studies</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
