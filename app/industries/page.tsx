import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { GradientMesh } from '@/components/ui/gradient-mesh'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { GradientText } from '@/components/ui/gradient-text'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { NumberTicker } from '@/components/ui/number-ticker'
import { ShineBorder } from '@/components/ui/shine-border'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Marquee } from '@/components/ui/marquee'

export const metadata: Metadata = {
  title: 'Industries | Enterprise AI Solutions',
  description:
    'RevClerx delivers domain-specific AI for financial services, healthcare, manufacturing, retail, logistics, energy, and more.',
}

const industries = [
  {
    name: 'Financial Services',
    span: 2 as const,
    accent: 'from-indigo-100 to-emerald-100 text-indigo-700',
    summary:
      "Decision-grade AI for risk, compliance, and customer growth, deployed inside the bank's perimeter.",
    bullets: ['Fraud detection', 'KYC automation', 'Credit risk modeling'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-3 7 3"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 14v3"/><path d="M12 14v3"/><path d="M16 14v3"/></svg>
    ),
  },
  {
    name: 'Healthcare and Life Sciences',
    span: 2 as const,
    accent: 'from-emerald-100 to-cyan-100 text-emerald-700',
    summary:
      'HIPAA-grade AI that accelerates research and clinical operations without compromising patient trust.',
    bullets: ['Clinical document processing', 'Drug discovery', 'Patient triage'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.5-2.5 2-4 2-6a7 7 0 1 0-14 0c0 2 .5 3.5 2 6"/><path d="M9 14h6"/><path d="M12 11v6"/><path d="M9 22h6"/></svg>
    ),
  },
  {
    name: 'Manufacturing',
    span: 2 as const,
    accent: 'from-violet-50 to-indigo-50 text-violet-700',
    summary:
      'Plant-floor AI that converts sensor data into uptime, quality, and tighter throughput.',
    bullets: ['Predictive maintenance', 'Quality inspection', 'Supply chain optimization'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V9l5-4 5 4v12"/><path d="M13 13h8v8h-8"/><path d="M17 17h.01"/><path d="M7 13h.01"/><path d="M7 17h.01"/></svg>
    ),
  },
  {
    name: 'Retail and E-commerce',
    span: 1 as const,
    accent: 'from-cyan-50 to-indigo-50 text-cyan-700',
    summary:
      'Personalization and forecasting that lift basket size, cut markdowns, and shrink return rates.',
    bullets: ['Personalization engines', 'Demand forecasting', 'Conversational commerce'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18l-2 12H5z"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
    ),
  },
  {
    name: 'Logistics and Supply Chain',
    span: 1 as const,
    accent: 'from-indigo-50 to-violet-50 text-indigo-700',
    summary:
      'Optimization across fleets, warehouses, and customer promises, all the way to the doorstep.',
    bullets: ['Route optimization', 'Warehouse intelligence', 'ETA prediction'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h2l1-3h7l1 3h2"/><path d="M14 17h6v-5l-3-4h-3"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
    ),
  },
  {
    name: 'Energy and Utilities',
    span: 1 as const,
    accent: 'from-emerald-50 to-indigo-50 text-emerald-700',
    summary:
      'AI for grid resilience, renewable integration, and asset performance, ready for regulator scrutiny.',
    bullets: ['Grid optimization', 'Asset monitoring', 'Anomaly detection'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>
    ),
  },
  {
    name: 'Insurance',
    span: 1 as const,
    accent: 'from-violet-50 to-emerald-50 text-violet-700',
    summary:
      'Faster claims, sharper underwriting, and fraud signals that hold up in adjudication.',
    bullets: ['Claims automation', 'Underwriting copilots', 'Fraud analytics'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v7c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
  },
  {
    name: 'Telecommunications',
    span: 1 as const,
    accent: 'from-cyan-50 to-violet-50 text-cyan-700',
    summary:
      'Intelligence layered across the network, the call center, and the customer lifecycle.',
    bullets: ['Network optimization', 'Churn prediction', 'Service automation'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12c2 5 6 8 10 8s8-3 10-8c-2-5-6-8-10-8S4 7 2 12z"/></svg>
    ),
  },
  {
    name: 'Real Estate and PropTech',
    span: 1 as const,
    accent: 'from-indigo-50 to-cyan-50 text-indigo-700',
    summary:
      'Models that price assets, qualify leads, and tame the paperwork between offer and close.',
    bullets: ['Valuation models', 'Lead scoring', 'Document automation'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-7h6v7"/></svg>
    ),
  },
  {
    name: 'Legal and Compliance',
    span: 1 as const,
    accent: 'from-emerald-50 to-violet-50 text-emerald-700',
    summary:
      'AI that reads, redlines, and reasons over contracts and regulations with citations you can defend.',
    bullets: ['Contract review', 'Regulatory monitoring', 'E-discovery'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M5 6h14l-3 6 3 6H5l3-6z"/></svg>
    ),
  },
  {
    name: 'Education and EdTech',
    span: 1 as const,
    accent: 'from-violet-50 to-cyan-50 text-violet-700',
    summary:
      'Adaptive content and integrity tooling for institutions and platforms serving real learners at scale.',
    bullets: ['Adaptive learning', 'Content generation', 'Plagiarism detection'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7l10-5 10 5-10 5z"/><path d="M6 9v5c0 2 3 4 6 4s6-2 6-4V9"/></svg>
    ),
  },
  {
    name: 'Public Sector',
    span: 1 as const,
    accent: 'from-indigo-100 to-emerald-100 text-indigo-700',
    summary:
      'Citizen-grade AI that respects accessibility, transparency, and the public record from day one.',
    bullets: ['Citizen services', 'Document processing', 'Policy analytics'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V8h4v13"/><path d="M15 21V3h4v18"/><path d="M9 14h6"/></svg>
    ),
  },
]

const tailorSteps = [
  {
    n: '01',
    title: 'Regulatory mapping',
    body:
      'We translate sector-specific rules (HIPAA, GLBA, FedRAMP, EU AI Act) into concrete model controls and audit artifacts.',
  },
  {
    n: '02',
    title: 'Data residency',
    body:
      'VPC, on-prem, or sovereign-cloud deployments with private model endpoints, so sensitive data never leaves your perimeter.',
  },
  {
    n: '03',
    title: 'Domain models',
    body:
      'Fine-tuned and retrieval-grounded models on your taxonomies, schemas, and ground-truth examples, not the open internet.',
  },
  {
    n: '04',
    title: 'Change management',
    body:
      'Enablement, role-based training, and feedback loops so the AI lands with the people who actually use it every day.',
  },
]

const partners = [
  { name: 'Top-10 US Bank' },
  { name: 'Global Pharma Leader' },
  { name: 'Fortune 500 Manufacturer' },
  { name: 'Tier-1 Health System' },
  { name: 'National Logistics Carrier' },
  { name: 'European Energy Major' },
  { name: 'Top-5 Insurance Group' },
  { name: 'Pan-Asian Telco' },
  { name: 'Global PropTech Platform' },
  { name: 'Federal Civilian Agency' },
]

export default function IndustriesPage() {
  return (
    <PageShell>
      <Reveal as="section" className="relative overflow-hidden pt-16 md:pt-24 pb-20">
        <GradientMesh colorScheme="ai-purple" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-4 py-1.5 text-xs font-medium text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Trusted in regulated, complex environments.
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900 text-balance">
              <VerticalCutReveal>Domain Expertise Across</VerticalCutReveal>{' '}
              <GradientText variant="animated" className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                12+ Industries
              </GradientText>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              Generic AI breaks the moment it meets a regulator, a legacy ERP, or a customer who knows the rules. Our pods bring the data patterns, compliance reflexes, and field experience your industry actually needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticButton as="div" spotlight={false} className="rounded-full">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">
                  Book a Strategy Call <span aria-hidden="true">{'→'}</span>
                </Link>
              </MagneticButton>
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

          <BentoGrid className="md:auto-rows-[20rem] gap-5">
            {industries.map((ind) => (
              <BentoCard
                key={ind.name}
                span={ind.span}
                className="bg-white border-slate-200 hover:border-slate-300"
                icon={
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${ind.accent} border border-slate-200 flex items-center justify-center`}>
                    {ind.icon}
                  </div>
                }
                title={ind.name}
                description={
                  <div>
                    <p className="text-sm text-slate-600 leading-relaxed">{ind.summary}</p>
                    <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                      {ind.bullets.map((b) => (
                        <li key={b} className="flex gap-2"><span className="text-emerald-600">{'›'}</span> {b}</li>
                      ))}
                    </ul>
                  </div>
                }
              />
            ))}
          </BentoGrid>
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
                  <MagneticButton as="div" spotlight={false} className="rounded-full">
                    <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">
                      Read the Case Study <span aria-hidden="true">{'→'}</span>
                    </Link>
                  </MagneticButton>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition">Talk to a FS Lead</Link>
                </div>
              </div>
              <div className="lg:col-span-2">
                <ShineBorder
                  borderRadius={20}
                  borderWidth={2}
                  duration={10}
                  color="linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef, #6366f1)"
                  className="w-full"
                >
                  <div className="w-full">
                    <p className="text-sm uppercase tracking-widest text-slate-500">Outcome</p>
                    <p className="mt-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                      <NumberTicker value={73} />%
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">Reduction in false-positive fraud alerts.</p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-600">
                      <li className="flex gap-2"><span className="text-emerald-600">{'✓'}</span> 11-week production rollout</li>
                      <li className="flex gap-2"><span className="text-emerald-600">{'✓'}</span> 2.4x analyst throughput</li>
                      <li className="flex gap-2"><span className="text-emerald-600">{'✓'}</span> Zero regulator findings post-launch</li>
                      <li className="flex gap-2"><span className="text-emerald-600">{'✓'}</span> Nightly retraining pipeline</li>
                    </ul>
                  </div>
                </ShineBorder>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Industry partners we have served</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Anonymized to protect their secrets, not their results.</h2>
          </div>
          <div className="mt-10">
            <Marquee
              items={partners}
              duration={42}
              fadeColor="#ffffff"
            />
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

          <div className="mt-16 pl-8 md:pl-24">
            <TracingBeam className="!max-w-3xl !mx-0">
              <div className="space-y-12">
                {tailorSteps.map((step) => (
                  <div key={step.n} className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:border-slate-300 transition">
                    <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center text-sm font-bold text-white">{step.n}</span>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
            </TracingBeam>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-violet-50 to-emerald-50 p-10 md:p-16">
            <div aria-hidden="true" className="absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full bg-emerald-100/60 blur-3xl"></div>
            <div aria-hidden="true" className="absolute -bottom-32 -right-16 w-[420px] h-[420px] rounded-full bg-indigo-100/60 blur-3xl"></div>
            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Do not see your industry?</h2>
              <p className="mt-5 text-slate-600 leading-relaxed">We have delivered for adjacent domains too, from agritech to aerospace MRO to municipal transit. Tell us the problem and we will tell you, honestly, whether we are the right team to solve it.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <MagneticButton as="div" spotlight={false} className="rounded-full">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">
                    Contact Us <span aria-hidden="true">{'→'}</span>
                  </Link>
                </MagneticButton>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition">Browse Services</Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </PageShell>
  )
}
