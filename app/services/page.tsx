import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { GradientMesh } from '@/components/ui/gradient-mesh'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { GradientText } from '@/components/ui/gradient-text'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { NumberTicker } from '@/components/ui/number-ticker'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { ShineBorder } from '@/components/ui/shine-border'
import { Marquee } from '@/components/ui/marquee'
import { DrawSVG } from '@/components/ui/draw-svg'
import { AnimatedCircles } from '@/components/ui/animated-circles'
import { CTABand } from '@/components/ui/cta-band'

export const metadata: Metadata = {
  title: 'Services | Enterprise AI Consulting',
  description:
    'End-to-end enterprise AI services: process automation, intelligent agents, conversational AI, data insights, integration, and strategic consulting.',
}

const ProcessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg>
)
const AgentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="3"/><path d="M9 12h.01M15 12h.01"/><path d="M12 2v4"/><path d="M2 14h2M20 14h2"/></svg>
)
const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
)
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>
)
const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>
)
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
)

function ServiceCardBody({
  heading,
  description,
  bullets,
}: {
  heading: string
  description: string
  bullets: string[]
}) {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-xl font-semibold text-slate-900 leading-tight">{heading}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
      <ul className="mt-3 space-y-1.5 text-sm text-slate-500">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2"><span className="text-emerald-600">›</span> {b}</li>
        ))}
      </ul>
      <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-emerald-700 transition">
        Learn more <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}

const inclusions: { title: string; description: string; kind: 'svg' | 'circles'; svg?: string }[] = [
  { title: 'Security review', description: 'Threat modeling, secret hygiene, and red team checks before go-live.', kind: 'svg', svg: 'M40 100 L80 140 L160 60' },
  { title: 'Dedicated team', description: 'Senior engineers and ML leads, never a rotating bench.', kind: 'circles' },
  { title: 'Weekly progress reviews', description: 'Demo, metrics, blockers, and decisions captured every Friday.', kind: 'svg', svg: 'M30 100 Q100 30 170 100 T30 100' },
  { title: 'Model monitoring', description: 'Latency, cost, accuracy, and drift dashboards from day one.', kind: 'circles' },
  { title: 'Compliance documentation', description: 'SOC 2, HIPAA, GDPR, and EU AI Act artifacts ready for audit.', kind: 'svg', svg: 'M50 50 H150 V150 H50 Z M50 100 H150 M100 50 V150' },
  { title: 'Production SLA', description: 'Uptime, response time, and incident commitments in writing.', kind: 'circles' },
  { title: 'Team training', description: 'Hands-on sessions for engineers, ops, and business owners.', kind: 'svg', svg: 'M40 60 L100 30 L160 60 L100 90 Z M60 80 V130 Q100 150 140 130 V80' },
  { title: 'Post-launch support', description: '90 days of co-piloted operations after every release.', kind: 'circles' },
]

const techItems = [
  { name: 'OpenAI' },
  { name: 'Anthropic' },
  { name: 'AWS' },
  { name: 'Azure' },
  { name: 'Google Cloud' },
  { name: 'LangChain' },
  { name: 'Pinecone' },
  { name: 'Snowflake' },
  { name: 'Databricks' },
  { name: 'Kubernetes' },
]

const techItemsRow2 = [
  { name: 'Vercel' },
  { name: 'PostgreSQL' },
  { name: 'Redis' },
  { name: 'Hugging Face' },
  { name: 'Llama' },
  { name: 'Mistral' },
  { name: 'Weaviate' },
  { name: 'Kafka' },
  { name: 'Airflow' },
  { name: 'Terraform' },
]

const processSteps = [
  {
    num: '01',
    phase: 'Phase one',
    title: 'Assess',
    description:
      'We map your data, systems, and workflows, score opportunities by feasibility and ROI, and pick the few use cases that actually deserve to be built first.',
    deliverables: ['Data & readiness audit', 'Use-case prioritization', 'Risk & compliance review'],
  },
  {
    num: '02',
    phase: 'Phase two',
    title: 'Accelerate',
    description:
      'Senior pods build a working POC in four weeks, then harden it for production with the same team, on the same code, with the same standards.',
    deliverables: ['4-week proof of concept', 'Production hardening', 'Stakeholder enablement'],
  },
  {
    num: '03',
    phase: 'Phase three',
    title: 'Sustain',
    description:
      'We run model monitoring, drift response, and quarterly upgrades so your AI keeps earning its place on the P&L long after launch.',
    deliverables: ['Model monitoring & drift', 'SLA-backed operations', 'Continuous improvement'],
  },
]

export default function ServicesPage() {
  return (
    <PageShell>
      <Reveal as="section" className="relative overflow-hidden pt-16 md:pt-24 pb-20">
        <GradientMesh colorScheme="navy-emerald" className="opacity-70" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-4 py-1.5 text-xs font-medium text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              AI That Works. Results That Matter.
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900 text-balance">
              <VerticalCutReveal staggerDuration={0.08}>
                Services Built for Enterprise
              </VerticalCutReveal>{' '}
              <GradientText className="text-4xl md:text-6xl font-bold tracking-tight">
                Outcomes
              </GradientText>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              We design, build, and operate AI systems that integrate with your stack, scale safely across teams, and produce measurable ROI within a quarter, not a fiscal year. Every engagement starts with outcomes and ends with operational AI you can trust.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticButton as="div" spotlight={false}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition"
                >
                  Book a Strategy Call <span aria-hidden="true">→</span>
                </Link>
              </MagneticButton>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition"
              >
                See Case Studies
              </Link>
            </div>
            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">POC delivery</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">
                  <NumberTicker value={4} /> weeks
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Client retention</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">
                  <NumberTicker value={94} />%
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Industries served</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">
                  <NumberTicker value={12} />+
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Production models</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">
                  <NumberTicker value={200} />+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Our Service Categories</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Six capabilities, one operating model.</h2>
            </div>
            <p className="text-slate-500 max-w-md leading-relaxed">From discovery to deployment, our teams plug into your stack with shared standards, shared telemetry, and shared accountability for results.</p>
          </div>

          <BentoGrid className="md:auto-rows-auto">
            <BentoCard
              span={2}
              className="bg-white border-slate-200 hover:shadow-xl"
              header={
                <div id="process-automation" className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-emerald-100 border border-slate-200 flex items-center justify-center text-indigo-700">
                    <ProcessIcon />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-slate-500">Flagship capability</span>
                </div>
              }
              title=""
              description={
                <ServiceCardBody
                  heading="Process Automation"
                  description="Replace brittle scripts and manual queues with AI workflows that read, route, decide, and audit themselves end to end."
                  bullets={['Document processing & extraction', 'RPA modernization', 'Workflow orchestration']}
                />
              }
            />

            <BentoCard
              span={1}
              className="bg-white border-slate-200 hover:shadow-xl"
              header={
                <div id="conversational-ai" className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-indigo-50 border border-slate-200 flex items-center justify-center text-emerald-700">
                  <ChatIcon />
                </div>
              }
              title=""
              description={
                <ServiceCardBody
                  heading="Conversational AI"
                  description="Voice and chat experiences that handle real workflows, escalate gracefully, and ship with full transcript analytics from day one."
                  bullets={['Enterprise chat assistants', 'Voice AI & IVR replacement', 'Customer support copilots']}
                />
              }
            />

            <BentoCard
              span={1}
              className="bg-white border-slate-200 hover:shadow-xl"
              header={
                <div id="data-insights" className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-50 border border-slate-200 flex items-center justify-center text-cyan-700">
                  <ChartIcon />
                </div>
              }
              title=""
              description={
                <ServiceCardBody
                  heading="Data Insights"
                  description="Predictive and prescriptive models that turn historical data into next-best-action recommendations your operators actually trust."
                  bullets={['Predictive analytics', 'Anomaly detection', 'Decision intelligence']}
                />
              }
            />

            <BentoCard
              span={2}
              className="bg-white border-slate-200 hover:shadow-xl"
              header={
                <div id="ai-agents" className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-50 to-cyan-50 border border-slate-200 flex items-center justify-center text-violet-700">
                    <AgentIcon />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-slate-500">Flagship capability</span>
                </div>
              }
              title=""
              description={
                <ServiceCardBody
                  heading="AI Agents"
                  description="Goal-driven systems that plan, call tools, and finish work across systems while staying inside your guardrails and audit trails."
                  bullets={['Autonomous task agents', 'Multi-agent systems', 'Agentic RAG']}
                />
              }
            />

            <BentoCard
              span={1}
              className="bg-white border-slate-200 hover:shadow-xl"
              header={
                <div id="integration" className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-slate-200 flex items-center justify-center text-indigo-700">
                  <LinkIcon />
                </div>
              }
              title=""
              description={
                <ServiceCardBody
                  heading="Integration"
                  description="Bridge AI to the systems that run your business, from SAP and Salesforce to twenty-year-old mainframes, without ripping anything out."
                  bullets={['API & ERP connectors', 'Legacy system bridges', 'Data pipelines']}
                />
              }
            />

            <BentoCard
              span={1}
              className="bg-white border-slate-200 hover:shadow-xl"
              header={
                <div id="consulting" className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 border border-slate-200 flex items-center justify-center text-emerald-700">
                  <StarIcon />
                </div>
              }
              title=""
              description={
                <ServiceCardBody
                  heading="Strategy & Consulting"
                  description="A clear-eyed view of where AI will move the needle, with portfolio prioritization, governance, and a roadmap your board can sign off on."
                  bullets={['AI readiness audits', 'Roadmap planning', 'Governance frameworks']}
                />
              }
            />
          </BentoGrid>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Our Process</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Assess. Accelerate. Sustain.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">A repeatable operating model that turns AI ambition into shipped, governed, and measurable systems. No theater, no abandoned pilots.</p>
          </div>

          <div className="mt-14">
            <TracingBeam className="px-4 md:px-8">
              <div className="space-y-12">
                {processSteps.map((step) => (
                  <div key={step.num} className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center text-sm font-bold text-white">{step.num}</span>
                      <span className="text-xs uppercase tracking-widest text-slate-500">{step.phase}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    <ul className="mt-5 grid sm:grid-cols-3 gap-2 text-sm text-slate-500">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex gap-2"><span className="text-emerald-600">✓</span> {d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TracingBeam>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ShineBorder borderRadius={28} borderWidth={2} duration={16} color="linear-gradient(90deg, #6366f1, #a855f7, #d946ef, #6366f1)" className="w-full">
            <div className="grid lg:grid-cols-3 gap-10 p-4 md:p-8">
              <div className="lg:col-span-1">
                <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Standard inclusions</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">What is included in every engagement.</h2>
                <p className="mt-5 text-slate-600 leading-relaxed">No surprise add-ons. No partial deliverables. Every RevClerx project ships with the same enterprise rigor by default.</p>
              </div>
              <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {inclusions.map((item, i) => (
                  <li key={item.title} className={`flex items-start gap-4 ${i % 2 === 1 ? 'sm:mt-6' : ''}`}>
                    <div className="shrink-0 w-12 h-12 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center justify-center text-indigo-600">
                      {item.kind === 'svg' && item.svg ? (
                        <DrawSVG path={item.svg} stroke="#6366f1" strokeWidth={4} duration={1.6} className="w-8 h-8" />
                      ) : (
                        <AnimatedCircles count={3} color="#10b981" className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ShineBorder>
        </div>
      </Reveal>

      <Reveal as="section" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Tech we build with</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">A best-in-class stack, picked for your problem.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">We are model and cloud agnostic. We pick the boring, reliable tools when boring wins, and the bleeding-edge tools when they unlock real differentiation.</p>
          </div>
          <div className="mt-12 space-y-2">
            <Marquee
              items={techItems.map((t) => ({
                name: t.name,
                width: 160,
                logo: (
                  <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700">
                    {t.name}
                  </span>
                ),
              }))}
              duration={36}
              fadeColor="white"
            />
            <Marquee
              items={techItemsRow2.map((t) => ({
                name: t.name,
                width: 160,
                logo: (
                  <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700">
                    {t.name}
                  </span>
                ),
              }))}
              duration={36}
              reverse
              fadeColor="white"
            />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Engagement Models</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Pick the lane that fits where you are.</h2>
            </div>
            <p className="text-slate-500 max-w-md leading-relaxed">All engagements use the same delivery DNA. Pricing scales with scope, not seat count.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <ShineBorder borderRadius={20} borderWidth={1} duration={24} color="linear-gradient(90deg, #cbd5e1, #94a3b8, #cbd5e1)" className="h-full">
              <article className="flex flex-col h-full">
                <span className="inline-block text-xs uppercase tracking-widest text-slate-500">Sprint</span>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">AI Readiness Sprint</h3>
                <p className="mt-2 text-sm text-slate-500">2 weeks, fixed scope</p>
                <p className="mt-5 text-sm text-slate-600 leading-relaxed">A focused diagnostic for leaders who need clarity before they spend. Walk away with a prioritized portfolio, gaps mapped, and a 90-day plan.</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600 flex-1">
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Data &amp; tech audit</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Opportunity portfolio</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Executive readout</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> 90-day roadmap</li>
                </ul>
                <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition">Start a Sprint <span aria-hidden="true">→</span></Link>
              </article>
            </ShineBorder>

            <ShineBorder borderRadius={20} borderWidth={3} duration={8} color="linear-gradient(90deg, #6366f1, #a855f7, #d946ef, #6366f1)" className="h-full">
              <article className="flex flex-col h-full relative">
                <span className="absolute -top-2 right-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-3 py-1 text-xs font-semibold text-white shadow-md">Most popular</span>
                <span className="inline-block text-xs uppercase tracking-widest text-indigo-700">Build</span>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">Custom Build</h3>
                <p className="mt-2 text-sm text-slate-500">8 to 12 weeks, end to end</p>
                <p className="mt-5 text-sm text-slate-600 leading-relaxed">Our flagship engagement. A dedicated pod takes one priority use case from POC to production with full integration, monitoring, and handover.</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600 flex-1">
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Production-grade build</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Full integration &amp; security</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Monitoring &amp; SLA</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> 90-day post-launch support</li>
                </ul>
                <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">Scope a Build <span aria-hidden="true">→</span></Link>
              </article>
            </ShineBorder>

            <ShineBorder borderRadius={20} borderWidth={1} duration={24} color="linear-gradient(90deg, #cbd5e1, #94a3b8, #cbd5e1)" className="h-full">
              <article className="flex flex-col h-full">
                <span className="inline-block text-xs uppercase tracking-widest text-slate-500">Operate</span>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">Managed AI Operations</h3>
                <p className="mt-2 text-sm text-slate-500">Ongoing, quarterly reviews</p>
                <p className="mt-5 text-sm text-slate-600 leading-relaxed">A long-term partnership for enterprises running AI in production. We monitor, retrain, and evolve your systems while your team stays focused on the business.</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600 flex-1">
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> 24x7 monitoring</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Quarterly model upgrades</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Cost &amp; latency tuning</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Roadmap stewardship</li>
                </ul>
                <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition">Talk to Operations <span aria-hidden="true">→</span></Link>
              </article>
            </ShineBorder>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <CTABand
            heading="Ready to deploy AI that ships?"
            subheading="Skip the slide deck. Spend 30 minutes with a senior engineer and walk out with a concrete next step, whether that is a sprint, a build, or a polite not yet."
            primaryCta={{ label: 'Book a Strategy Call', href: '/contact' }}
            gradient="linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #c026d3 100%)"
          />
        </div>
      </Reveal>
    </PageShell>
  )
}
