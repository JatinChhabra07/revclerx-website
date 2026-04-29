import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import StatCounter from '@/components/StatCounter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Enterprise AI Outcomes',
  description:
    'Explore enterprise AI deployments by RevClerx. Real results in fraud reduction, document processing, predictive maintenance, and more.'
}

export default function CaseStudiesPage() {
  return (
    <PageShell>
      {/* HERO */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 pt-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Proof, not promises
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 text-balance">
            Outcomes, not just <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">algorithms</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
            Every engagement we ship is measured against a business metric the CFO already tracks. Browse selected deployments across financial services, healthcare, manufacturing, retail, logistics, and insurance.
          </p>
        </div>

        {/* Filter pills (visual only) */}
        <div className="mt-10 flex flex-wrap gap-2">
          <button type="button" className="rounded-full border border-slate-900 bg-slate-900 text-white px-4 py-2 text-sm font-medium">All Industries</button>
          <button type="button" className="rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 px-4 py-2 text-sm hover:border-slate-300 hover:text-slate-900 transition">Financial Services</button>
          <button type="button" className="rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 px-4 py-2 text-sm hover:border-slate-300 hover:text-slate-900 transition">Healthcare</button>
          <button type="button" className="rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 px-4 py-2 text-sm hover:border-slate-300 hover:text-slate-900 transition">Manufacturing</button>
          <button type="button" className="rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 px-4 py-2 text-sm hover:border-slate-300 hover:text-slate-900 transition">Retail</button>
          <button type="button" className="rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 px-4 py-2 text-sm hover:border-slate-300 hover:text-slate-900 transition">Logistics</button>
        </div>
      </Reveal>

      {/* CASE STUDY GRID */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Case 1 */}
          <article className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-8 hover:border-slate-300 transition relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-100/50 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100/50 text-indigo-700 px-3 py-1 text-xs font-semibold">Financial Services</span>
                <span className="text-xs text-slate-400">Case 01</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-700 to-emerald-700 bg-clip-text text-transparent">73%</div>
              <p className="text-sm text-slate-500 mt-2 mb-6">fewer false-positive fraud alerts</p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight text-balance">Top-10 US Bank reduces false-positive fraud alerts by 73%</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The risk-ops team was drowning in low-quality alerts from a decade-old static rules engine. We replaced it with a hybrid ML system trained on 24 months of transaction data, deployed under the existing risk-ops compliance framework. The result: 73 percent fewer false positives, roughly $14M in analyst hours saved annually, and zero increase in fraud loss.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">ML Modeling</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">MLOps</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Risk Compliance</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-indigo-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">→</span></a>
            </div>
          </article>

          {/* Case 2 */}
          <article className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-8 hover:border-slate-300 transition relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-50 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold">Healthcare</span>
                <span className="text-xs text-slate-400">Case 02</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 to-cyan-700 bg-clip-text text-transparent">88%</div>
              <p className="text-sm text-slate-500 mt-2 mb-6">faster clinical document processing</p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight text-balance">Global pharma cuts clinical document processing time by 88%</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Medical reviewers were spending weeks indexing trial records by hand. We built a retrieval-augmented pipeline plus an agentic review workflow over 200,000 plus trial documents. The result: 88 percent faster turnaround, 4x reviewer throughput, and a complete audit trail mapped to GxP requirements.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">RAG</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Agentic Workflow</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">GxP Compliance</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-emerald-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">→</span></a>
            </div>
          </article>

          {/* Case 3 */}
          <article className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-8 hover:border-slate-300 transition relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-violet-50 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 text-violet-700 px-3 py-1 text-xs font-semibold">Manufacturing</span>
                <span className="text-xs text-slate-400">Case 03</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">2,400</div>
              <p className="text-sm text-slate-500 mt-2 mb-6">downtime hours prevented annually</p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight text-balance">Industrial manufacturer prevents 2,400 hours of downtime annually</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Unplanned outages were eating into margin across six plants. We deployed predictive maintenance models on 1,800 sensors with edge inference and a centralized dashboard for plant managers. The result: 41 percent reduction in unplanned outages and $9.2M in saved production cost in year one.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Predictive Maintenance</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">IoT</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Edge Inference</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-violet-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">→</span></a>
            </div>
          </article>

          {/* Case 4 */}
          <article className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-8 hover:border-slate-300 transition relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-50 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 px-3 py-1 text-xs font-semibold">Retail</span>
                <span className="text-xs text-slate-400">Case 04</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-700 to-emerald-700 bg-clip-text text-transparent">+22%</div>
              <p className="text-sm text-slate-500 mt-2 mb-6">conversion lift, +18% AOV</p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight text-balance">Retail chain lifts conversion by 22% with personalization</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                A mid-market retailer needed to compete with category-leading personalization. We built a real-time recommendation engine integrated with Shopify Plus and the customer data platform, with online experiments running weekly. The result: a 22 percent conversion lift and 18 percent higher average order value within one quarter.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Recommendations</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">CDP Integration</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Experimentation</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-cyan-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">→</span></a>
            </div>
          </article>

          {/* Case 5 */}
          <article className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-8 hover:border-slate-300 transition relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-50 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 text-amber-700 px-3 py-1 text-xs font-semibold">Logistics</span>
                <span className="text-xs text-slate-400">Case 05</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-amber-700 to-emerald-700 bg-clip-text text-transparent">6h to 12m</div>
              <p className="text-sm text-slate-500 mt-2 mb-6">route planning time per region</p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight text-balance">Logistics provider cuts route planning time from 6 hours to 12 minutes</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Dispatchers were rebuilding routes by hand each morning across multiple regions. We delivered an optimization engine paired with an LLM dispatcher copilot that surfaces exceptions in plain language. The result: 97 percent reduction in planning time and an 11 percent fuel savings across the fleet.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Optimization</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">LLM Copilot</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Operations</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-amber-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">→</span></a>
            </div>
          </article>

          {/* Case 6 */}
          <article className="group rounded-2xl bg-white shadow-sm border border-slate-200 p-8 hover:border-slate-300 transition relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-50 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 text-pink-700 px-3 py-1 text-xs font-semibold">Insurance</span>
                <span className="text-xs text-slate-400">Case 06</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-pink-700 to-violet-700 bg-clip-text text-transparent">65%</div>
              <p className="text-sm text-slate-500 mt-2 mb-6">claims now straight-through processed</p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight text-balance">Insurance carrier automates 65% of claims triage</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Claims handlers were buried in repetitive intake work. We deployed a multi-agent classification system with structured-data extraction across submitted documents, photos, and adjuster notes. The result: 65 percent straight-through processing and a 3.2x faster cycle time on the remaining adjudicated cases.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Multi-Agent</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Document AI</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Workflow Automation</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-pink-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">→</span></a>
            </div>
          </article>

        </div>
      </Reveal>

      {/* STATS BAND */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-700 to-emerald-700 bg-clip-text text-transparent">
                <StatCounter to={50} suffix="+" />
              </div>
              <p className="mt-2 text-sm text-slate-500">enterprise deployments shipped</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-700 to-emerald-700 bg-clip-text text-transparent">
                <StatCounter to={12} suffix="+" />
              </div>
              <p className="mt-2 text-sm text-slate-500">industries served end to end</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-700 to-emerald-700 bg-clip-text text-transparent">
                <StatCounter to={4} suffix=" wks" />
              </div>
              <p className="mt-2 text-sm text-slate-500">typical proof-of-concept delivery</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-700 to-emerald-700 bg-clip-text text-transparent">
                <StatCounter to={94} suffix="%" />
              </div>
              <p className="mt-2 text-sm text-slate-500">client retention after engagement</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* APPROACH 3-STEP */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-700">Our approach</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">The same playbook in every engagement.</h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">Three phases, sequenced so value arrives early and compounds quarter over quarter.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white">1</span>
              <h3 className="text-xl font-bold text-slate-900">Assess</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">A two-week readiness sprint that maps your data, workflows, and risk constraints into a prioritized opportunity ledger with hard ROI estimates.</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-emerald-500 flex items-center justify-center font-bold text-white">2</span>
              <h3 className="text-xl font-bold text-slate-900">Accelerate</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">A four-week build cycle that delivers a production-grade proof of concept, integrated with your stack and validated against the success metric.</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-white">3</span>
              <h3 className="text-xl font-bold text-slate-900">Sustain</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">Managed MLOps, evaluation harnesses, and quarterly business reviews that keep models accurate, cost-aware, and aligned to changing strategy.</p>
          </div>
        </div>
      </Reveal>

      {/* LOGO WALL (anonymized industry pills) */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-emerald-700">Trusted by</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Enterprises that ship serious AI.</h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">Most clients keep names confidential. Here is the kind of company we ship for.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 text-center hover:border-slate-300 transition">
            <p className="text-sm font-semibold text-slate-900">Top-10 US Bank</p>
            <p className="text-xs text-slate-400 mt-1">Financial Services</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 text-center hover:border-slate-300 transition">
            <p className="text-sm font-semibold text-slate-900">Global Pharma</p>
            <p className="text-xs text-slate-400 mt-1">Healthcare</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 text-center hover:border-slate-300 transition">
            <p className="text-sm font-semibold text-slate-900">Fortune 500 Manufacturer</p>
            <p className="text-xs text-slate-400 mt-1">Industrial</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 text-center hover:border-slate-300 transition">
            <p className="text-sm font-semibold text-slate-900">North American Retailer</p>
            <p className="text-xs text-slate-400 mt-1">Retail</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 text-center hover:border-slate-300 transition">
            <p className="text-sm font-semibold text-slate-900">Tier-1 Logistics Provider</p>
            <p className="text-xs text-slate-400 mt-1">Logistics</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 text-center hover:border-slate-300 transition">
            <p className="text-sm font-semibold text-slate-900">Specialty P&amp;C Carrier</p>
            <p className="text-xs text-slate-400 mt-1">Insurance</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 text-center hover:border-slate-300 transition">
            <p className="text-sm font-semibold text-slate-900">Regional Health System</p>
            <p className="text-xs text-slate-400 mt-1">Healthcare</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 text-center hover:border-slate-300 transition">
            <p className="text-sm font-semibold text-slate-900">European Energy Major</p>
            <p className="text-xs text-slate-400 mt-1">Energy</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 text-center hover:border-slate-300 transition">
            <p className="text-sm font-semibold text-slate-900">Global SaaS Platform</p>
            <p className="text-xs text-slate-400 mt-1">Technology</p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 text-center hover:border-slate-300 transition">
            <p className="text-sm font-semibold text-slate-900">National Telecom</p>
            <p className="text-xs text-slate-400 mt-1">Telecommunications</p>
          </div>
        </div>
      </Reveal>

      {/* BOTTOM CTA */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-32 mb-32">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-emerald-500/20 p-10 md:p-16">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-100/60 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-50 blur-3xl pointer-events-none"></div>
          <div className="relative max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Want results like these? Let us scope yours.</h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">Tell us the metric you need to move. We will come back with a focused plan to move it inside one quarter.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">Book a strategy call <span aria-hidden="true">→</span></Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-900 hover:border-slate-300 transition">See our services</Link>
            </div>
          </div>
        </div>
      </Reveal>
    </PageShell>
  )
}
