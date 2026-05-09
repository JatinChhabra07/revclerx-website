import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { GradientMesh } from '@/components/ui/gradient-mesh'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { SparklesText } from '@/components/ui/sparkles-text'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { NumberTicker } from '@/components/ui/number-ticker'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Marquee } from '@/components/ui/marquee'
import { BarChartAnimated } from '@/components/ui/bar-chart-animated'
import { MagneticButton } from '@/components/ui/magnetic-button'

export const metadata: Metadata = {
  title: 'Case Studies | Enterprise AI Outcomes',
  description:
    'Explore enterprise AI deployments by RevClerx. Real results in fraud reduction, document processing, predictive maintenance, and more.'
}

const filterPills = [
  'All Industries',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Logistics',
]

const clientPills = [
  { name: 'Top-10 US Bank' },
  { name: 'Global Pharma' },
  { name: 'Fortune 500 Manufacturer' },
  { name: 'North American Retailer' },
  { name: 'Tier-1 Logistics Provider' },
  { name: 'Specialty P&C Carrier' },
  { name: 'Regional Health System' },
  { name: 'European Energy Major' },
  { name: 'Global SaaS Platform' },
  { name: 'National Telecom' },
]

const approachSteps = [
  {
    step: '01',
    title: 'Assess',
    body: 'A two-week readiness sprint that maps your data, workflows, and risk constraints into a prioritized opportunity ledger with hard ROI estimates.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    step: '02',
    title: 'Accelerate',
    body: 'A four-week build cycle that delivers a production-grade proof of concept, integrated with your stack and validated against the success metric.',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    step: '03',
    title: 'Sustain',
    body: 'Managed MLOps, evaluation harnesses, and quarterly business reviews that keep models accurate, cost-aware, and aligned to changing strategy.',
    gradient: 'from-fuchsia-500 to-indigo-500',
  },
]

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <ScrollProgress color="linear-gradient(90deg, #4f46e5, #7c3aed, #c026d3)" />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <GradientMesh colorScheme="ai-purple" className="opacity-70" />
        <Reveal as="div" className="relative max-w-7xl mx-auto px-6 pt-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Proof, not promises
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 text-balance">
              <VerticalCutReveal>Outcomes, not just</VerticalCutReveal>{' '}
              <SparklesText
                text="algorithms"
                colors={['#6366f1', '#a855f7', '#d946ef']}
                className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent"
              />
              .
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Every engagement we ship is measured against a business metric the CFO already tracks. Browse selected deployments across financial services, healthcare, manufacturing, retail, logistics, and insurance.
            </p>
          </div>

          {/* Filter pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {filterPills.map((label, i) => (
              <button
                key={label}
                type="button"
                className={
                  i === 0
                    ? 'rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow-md shadow-indigo-500/20'
                    : 'rounded-full border border-slate-200 bg-white/80 backdrop-blur shadow-sm text-slate-600 px-4 py-2 text-sm hover:border-slate-300 hover:text-slate-900 transition'
                }
              >
                {label}
              </button>
            ))}
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-400">Scroll for six deployments</p>
        </Reveal>
      </section>

      {/* CASE STUDIES: alternating layouts */}
      <section className="max-w-7xl mx-auto px-6 mt-24 space-y-20">

        {/* CASE 1: Full-bleed two-column */}
        <Reveal as="article" className="grid md:grid-cols-2 gap-10 items-center rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-white p-8 md:p-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100/60 text-indigo-700 px-3 py-1 text-xs font-semibold">Financial Services</span>
              <span className="text-xs text-slate-400">Case 01</span>
            </div>
            <div className="text-7xl md:text-9xl font-bold tracking-tight bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent leading-none">
              <NumberTicker value={73} />%
            </div>
            <p className="text-sm text-slate-500 mt-4">fewer false-positive fraud alerts</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-balance">Top-10 US Bank reduces false-positive fraud alerts by 73%</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The risk-ops team was drowning in low-quality alerts from a decade-old static rules engine. We replaced it with a hybrid ML system trained on 24 months of transaction data, deployed under the existing risk-ops compliance framework. The result: 73 percent fewer false positives, roughly $14M in analyst hours saved annually, and zero increase in fraud loss.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">ML Modeling</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">MLOps</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Risk Compliance</span>
            </div>
            <Link href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-indigo-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">{'>'}</span></Link>
          </div>
        </Reveal>

        {/* CASE 2: CardSpotlight */}
        <Reveal as="div" className="grid md:grid-cols-2 gap-6">
          <CardSpotlight color="rgba(16, 185, 129, 0.18)" className="bg-white border-slate-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold">Healthcare</span>
              <span className="text-xs text-slate-400">Case 02</span>
            </div>
            <div className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 to-cyan-700 bg-clip-text text-transparent leading-none">
              <NumberTicker value={88} />%
            </div>
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
            <Link href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-emerald-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">{'>'}</span></Link>
          </CardSpotlight>

          <CardSpotlight color="rgba(6, 182, 212, 0.18)" className="bg-white border-slate-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 px-3 py-1 text-xs font-semibold">Retail</span>
              <span className="text-xs text-slate-400">Case 04</span>
            </div>
            <div className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-700 to-emerald-700 bg-clip-text text-transparent leading-none">
              +<NumberTicker value={22} />%
            </div>
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
            <Link href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-cyan-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">{'>'}</span></Link>
          </CardSpotlight>
        </Reveal>

        {/* CASE 3: Full-bleed two-column reversed */}
        <Reveal as="article" className="grid md:grid-cols-2 gap-10 items-center rounded-3xl border border-slate-200 bg-gradient-to-bl from-violet-50 via-white to-white p-8 md:p-14">
          <div className="md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 text-violet-700 px-3 py-1 text-xs font-semibold">Manufacturing</span>
              <span className="text-xs text-slate-400">Case 03</span>
            </div>
            <div className="text-7xl md:text-9xl font-bold tracking-tight bg-gradient-to-br from-violet-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent leading-none">
              <NumberTicker value={2400} />
            </div>
            <p className="text-sm text-slate-500 mt-4">downtime hours prevented annually</p>
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-balance">Industrial manufacturer prevents 2,400 hours of downtime annually</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Unplanned outages were eating into margin across six plants. We deployed predictive maintenance models on 1,800 sensors with edge inference and a centralized dashboard for plant managers. The result: 41 percent reduction in unplanned outages and $9.2M in saved production cost in year one.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Predictive Maintenance</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">IoT</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Edge Inference</span>
            </div>
            <Link href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-violet-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">{'>'}</span></Link>
          </div>
        </Reveal>

        {/* CASE 5: Full-bleed two-column */}
        <Reveal as="article" className="grid md:grid-cols-2 gap-10 items-center rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 via-white to-white p-8 md:p-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 text-amber-700 px-3 py-1 text-xs font-semibold">Logistics</span>
              <span className="text-xs text-slate-400">Case 05</span>
            </div>
            <div className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-amber-600 via-orange-600 to-fuchsia-600 bg-clip-text text-transparent leading-none">
              6 hours to 12 minutes
            </div>
            <p className="text-sm text-slate-500 mt-4">route planning time per region</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-balance">Logistics provider cuts route planning time from 6 hours to 12 minutes</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Dispatchers were rebuilding routes by hand each morning across multiple regions. We delivered an optimization engine paired with an LLM dispatcher copilot that surfaces exceptions in plain language. The result: 97 percent reduction in planning time and an 11 percent fuel savings across the fleet.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Optimization</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">LLM Copilot</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Operations</span>
            </div>
            <Link href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-amber-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">{'>'}</span></Link>
          </div>
        </Reveal>

        {/* CASE 6: CardSpotlight (insurance) */}
        <Reveal as="div" className="grid md:grid-cols-1 gap-6">
          <CardSpotlight color="rgba(217, 70, 239, 0.18)" className="bg-white border-slate-200 p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 text-pink-700 px-3 py-1 text-xs font-semibold">Insurance</span>
              <span className="text-xs text-slate-400">Case 06</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent leading-none">
                <NumberTicker value={65} />%
                <p className="text-sm font-normal text-slate-500 mt-3">claims now straight-through processed</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight text-balance">Insurance carrier automates 65% of claims triage</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Claims handlers were buried in repetitive intake work. We deployed a multi-agent classification system with structured-data extraction across submitted documents, photos, and adjuster notes. The result: 65 percent straight-through processing and a 3.2x faster cycle time on the remaining adjudicated cases.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Multi-Agent</span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Document AI</span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-600 px-3 py-1">Workflow Automation</span>
                </div>
                <Link href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-pink-700 hover:text-slate-900 transition">Read full study <span aria-hidden="true">{'>'}</span></Link>
              </div>
            </div>
          </CardSpotlight>
        </Reveal>
      </section>

      {/* DATA-VIZ: BarChartAnimated comparing case impacts */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-1">
              <p className="text-sm font-semibold tracking-widest uppercase text-violet-700">Comparative impact</p>
              <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">Six engagements, measured the same way.</p>
              <p className="mt-4 text-slate-600 leading-relaxed">Each bar represents the headline metric improvement reported by the client team within the first quarter post-launch.</p>
            </div>
            <div className="md:col-span-2">
              <BarChartAnimated
                data={[73, 88, 41, 22, 65]}
                labels={['Fraud FP', 'Doc Speed', 'Downtime', 'Conversion', 'Claims STP']}
                color="url(#bar-brand)"
                height={260}
              />
              <svg width="0" height="0" className="absolute">
                <defs>
                  <linearGradient id="bar-brand" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="50%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#c026d3" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mt-4 grid grid-cols-5 gap-2 text-center">
                {[73, 88, 41, 22, 65].map((v, i) => (
                  <div key={i} className="text-xs font-semibold text-slate-700">
                    <NumberTicker value={v} />%
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* STATS BAND */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-20">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight">
                <NumberTicker value={50} />+
              </div>
              <p className="mt-2 text-sm text-white/80">enterprise deployments shipped</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight">
                <NumberTicker value={12} />+
              </div>
              <p className="mt-2 text-sm text-white/80">industries served end to end</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight">
                <NumberTicker value={4} /> wks
              </div>
              <p className="mt-2 text-sm text-white/80">typical proof-of-concept delivery</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight">
                <NumberTicker value={94} />%
              </div>
              <p className="mt-2 text-sm text-white/80">client retention after engagement</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* APPROACH: TracingBeam vertical timeline */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-700">Our approach</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">The same playbook in every engagement.</h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">Three phases, sequenced so value arrives early and compounds quarter over quarter.</p>
        </div>

        <div className="mt-16 pl-8 md:pl-24">
          <TracingBeam>
            <div className="space-y-16">
              {approachSteps.map((s) => (
                <div key={s.step} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`w-12 h-12 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center font-bold text-white text-lg shadow-md`}>
                      {s.step}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">{s.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">{s.body}</p>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </Reveal>

      {/* CLIENT LOGO WALL: Marquee */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-emerald-700">Trusted by</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Enterprises that ship serious AI.</h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">Most clients keep names confidential. Here is the kind of company we ship for.</p>
        </div>
        <div className="mt-10">
          <Marquee items={clientPills} duration={40} />
        </div>
      </Reveal>

      {/* BOTTOM CTA: MagneticButton */}
      <Reveal as="section" className="max-w-7xl mx-auto px-6 mt-20 mb-32">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-10 md:p-16 text-white">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
          <div className="relative max-w-3xl">
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Want results like these? Let us scope yours.</p>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">Tell us the metric you need to move. We will come back with a focused plan to move it inside one quarter.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton as="a" href="/contact" className="rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition">
                <span className="inline-flex items-center gap-2">Book a strategy call <span aria-hidden="true">{'>'}</span></span>
              </MagneticButton>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition">See our services</Link>
            </div>
          </div>
        </div>
      </Reveal>
    </PageShell>
  )
}
