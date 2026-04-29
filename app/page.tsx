import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { GradientMesh } from '@/components/ui/gradient-mesh'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { FlipWords } from '@/components/ui/flip-words'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { NumberTicker } from '@/components/ui/number-ticker'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { Marquee } from '@/components/ui/marquee'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

export const metadata: Metadata = {
  title: 'Enterprise AI That Delivers Outcomes',
  description: 'RevClerx partners with enterprises to design, deploy, and operationalize AI that drives measurable business value. 50+ deployments, 12+ industries, 4 week POC delivery.'
}

const stackItems = [
  { name: 'OpenAI' },
  { name: 'Anthropic' },
  { name: 'AWS' },
  { name: 'Azure' },
  { name: 'Google Cloud' },
  { name: 'LangChain' },
  { name: 'LlamaIndex' },
  { name: 'Pinecone' },
  { name: 'Snowflake' },
  { name: 'Databricks' },
  { name: 'Kubernetes' },
  { name: 'PostgreSQL' },
]

const testimonials = [
  {
    quote: 'RevClerx took us from a stalled pilot to a production AI capability in under three months. They cared about our compliance constraints as much as our model accuracy.',
    name: 'Chief Data Officer',
    title: 'Top-10 US Bank',
  },
  {
    quote: 'Their team integrated agentic workflows into our trial-document review without disrupting validated processes. Reviewer throughput jumped four-fold and the audit trail is airtight.',
    name: 'VP Clinical Operations',
    title: 'Global Pharmaceutical',
  },
  {
    quote: 'We had been evaluating vendors for nine months. RevClerx shipped a working prototype in four weeks and a production rollout the same quarter. Outcomes-first, no theatrics.',
    name: 'Chief Information Officer',
    title: 'Fortune 500 Manufacturer',
  },
]

export default function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <GradientMesh colorScheme="ai-purple" />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs text-slate-600 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Enterprise AI Solutions and Consulting
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-slate-900 text-balance leading-[1.05]">
            <VerticalCutReveal>Enterprise AI that delivers</VerticalCutReveal>{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              <FlipWords words={['outcomes', 'efficiency', 'value', 'ROI']} />
            </span>
            <span>, not overhead.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
            RevClerx partners with forward-thinking enterprises to design, deploy, and operationalize AI that drives measurable business value, with the speed, security, and precision your organization demands.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <MagneticButton as="div" spotlight={false} className="rounded-full">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">
                Book a Free Strategy Call <span aria-hidden="true">→</span>
              </Link>
            </MagneticButton>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">Explore Services</Link>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            <div>
              <div className="text-3xl md:text-4xl font-bold stat-number tabular">
                <NumberTicker value={50} />
                <span>+</span>
              </div>
              <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Enterprise Deployments</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold stat-number tabular">
                <NumberTicker value={12} />
                <span>+</span>
              </div>
              <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold stat-number tabular">
                <NumberTicker value={4} />
                <span> wks</span>
              </div>
              <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Average POC Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold stat-number tabular">
                <NumberTicker value={94} />
                <span>%</span>
              </div>
              <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-slate-400 mb-6">Trusted across regulated, data-rich industries</p>
          <div className="overflow-hidden">
            <div className="marquee text-slate-500 text-sm">
              <span className="px-6 py-2 rounded-full border border-slate-200">Top-10 US Bank</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Global Pharma</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Fortune 500 Manufacturer</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">National Health System</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">European Insurer</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Global Logistics Network</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Tier-1 Telecom</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Public Sector Agency</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Top-10 US Bank</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Global Pharma</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Fortune 500 Manufacturer</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">National Health System</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">European Insurer</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Global Logistics Network</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Tier-1 Telecom</span>
              <span className="px-6 py-2 rounded-full border border-slate-200">Public Sector Agency</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE GAP */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-700">The enterprise AI gap</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">87% of enterprises started AI. Fewer than 1 in 10 see real ROI.</h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">Most AI programs stall in the pilot phase. The blockers are rarely the models. They are integration, data quality, governance, and a roadmap that ties to revenue. RevClerx exists to close that gap.</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="text-4xl font-bold grad-text">$2.5T</div>
              <p className="mt-2 text-sm text-slate-500">Enterprise value projected from AI automation by 2030.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="text-4xl font-bold grad-text">80%</div>
              <p className="mt-2 text-sm text-slate-500">AI projects fail, mostly due to poor integration, not technology.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover">
              <div className="text-4xl font-bold grad-text">70%</div>
              <p className="mt-2 text-sm text-slate-500">Of CIOs cite data security as the top barrier to AI adoption.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-emerald-700">What we do</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">A full-stack enterprise AI partner.</h2>
              <p className="mt-5 text-slate-600 leading-relaxed">Six service lines, one accountable team. From the first readiness assessment to managed operations on day 365, we own the outcome.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-slate-900 transition self-start">View all services <span aria-hidden="true">→</span></Link>
          </Reveal>
          <BentoGrid className="md:auto-rows-[16rem]">
            <BentoCard
              span={1}
              icon={<div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 text-lg">⚙</div>}
              title="Process Automation"
              description={
                <div>
                  <p className="text-sm text-slate-500 leading-relaxed">Document processing, RPA modernization, and workflow orchestration that cuts manual cycle times.</p>
                  <Link href="/services#process-automation" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-indigo-700 hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></Link>
                </div>
              }
            />
            <BentoCard
              span={2}
              className="bg-gradient-to-br from-emerald-50 via-white to-indigo-50"
              icon={<div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 text-lg">◈</div>}
              title="AI Agents"
              description={
                <div>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xl">Autonomous task agents and multi-agent systems that take action inside your stack, not just chat. From triage bots to multi-step research operators, deployed with full observability and human-in-the-loop guardrails.</p>
                  <Link href="/services#ai-agents" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-emerald-700 hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></Link>
                </div>
              }
            />
            <BentoCard
              span={1}
              icon={<div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-violet-700 text-lg">◉</div>}
              title="Conversational AI"
              description={
                <div>
                  <p className="text-sm text-slate-500 leading-relaxed">Enterprise chat, voice AI, and customer copilots grounded in your data, with full guardrails.</p>
                  <Link href="/services#conversational-ai" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-violet-700 hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></Link>
                </div>
              }
            />
            <BentoCard
              span={1}
              icon={<div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 text-lg">▲</div>}
              title="Data Insights"
              description={
                <div>
                  <p className="text-sm text-slate-500 leading-relaxed">Predictive analytics, anomaly detection, and decision intelligence that move metrics, not dashboards.</p>
                  <Link href="/services#data-insights" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-cyan-700 hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></Link>
                </div>
              }
            />
            <BentoCard
              span={1}
              icon={<div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 text-lg">⟷</div>}
              title="Integration"
              description={
                <div>
                  <p className="text-sm text-slate-500 leading-relaxed">API and ERP connectors, legacy system bridges, and pipelines that make AI usable in production.</p>
                  <Link href="/services#integration" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-rose-700 hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></Link>
                </div>
              }
            />
            <BentoCard
              span={1}
              icon={<div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 text-lg">★</div>}
              title="Strategy and Consulting"
              description={
                <div>
                  <p className="text-sm text-slate-500 leading-relaxed">Readiness audits, phased roadmaps, and AI governance frameworks aligned to business priorities.</p>
                  <Link href="/services#consulting" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-amber-700 hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></Link>
                </div>
              }
            />
          </BentoGrid>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-700">How we work</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Assess. Accelerate. Sustain.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">A proven methodology that takes AI from boardroom to production, then keeps it performing.</p>
          </Reveal>
          <div className="mt-16 pl-8 md:pl-24">
            <TracingBeam>
              <div className="space-y-20">
                <div>
                  <div className="text-xs font-mono text-indigo-700">01</div>
                  <h3 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Assess</h3>
                  <p className="mt-2 text-base text-slate-500">Know before you build.</p>
                  <ul className="mt-6 space-y-3 text-base text-slate-600 max-w-2xl">
                    <li className="flex gap-3"><span className="text-indigo-600">✓</span><span>Audit current infrastructure and AI readiness.</span></li>
                    <li className="flex gap-3"><span className="text-indigo-600">✓</span><span>Define a phased AI roadmap aligned to business priorities.</span></li>
                    <li className="flex gap-3"><span className="text-indigo-600">✓</span><span>Forecast ROI scenarios with quantified projections.</span></li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-700">02</div>
                  <h3 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Accelerate</h3>
                  <p className="mt-2 text-base text-slate-500">Build what works, fast.</p>
                  <ul className="mt-6 space-y-3 text-base text-slate-600 max-w-2xl">
                    <li className="flex gap-3"><span className="text-emerald-600">✓</span><span>Develop custom AI models, agents, and integrations.</span></li>
                    <li className="flex gap-3"><span className="text-emerald-600">✓</span><span>Deliver production-ready solutions in weeks, not quarters.</span></li>
                    <li className="flex gap-3"><span className="text-emerald-600">✓</span><span>Connect AI to existing enterprise systems and workflows.</span></li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-mono text-violet-700">03</div>
                  <h3 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Sustain</h3>
                  <p className="mt-2 text-base text-slate-500">Keep intelligence performing.</p>
                  <ul className="mt-6 space-y-3 text-base text-slate-600 max-w-2xl">
                    <li className="flex gap-3"><span className="text-violet-600">✓</span><span>Monitor, retrain, and optimize models post-deployment.</span></li>
                    <li className="flex gap-3"><span className="text-violet-600">✓</span><span>Ensure compliance with evolving regulations.</span></li>
                    <li className="flex gap-3"><span className="text-violet-600">✓</span><span>Scale across business units with shared AI infrastructure.</span></li>
                  </ul>
                </div>
              </div>
            </TracingBeam>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-700">Why RevClerx</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Built for enterprise reality, not lab conditions.</h2>
          </Reveal>
          <div className="mt-16 space-y-24">
            {/* Row 1: text left, art right */}
            <Reveal className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-indigo-700">01 / Outcomes</span>
                <h3 className="mt-3 text-3xl font-semibold text-slate-900">Outcomes before algorithms</h3>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">We measure success in revenue recovered, costs reduced, and decisions accelerated. Every engagement starts with a target metric and an executive sponsor.</p>
              </div>
              <div className="relative aspect-[5/4] flex items-center justify-center">
                <svg viewBox="0 0 400 320" className="w-full h-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="why-grad-1" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="160" r="120" fill="none" stroke="url(#why-grad-1)" strokeWidth="1.5" strokeDasharray="4 6" />
                  <circle cx="200" cy="160" r="80" fill="none" stroke="url(#why-grad-1)" strokeWidth="1.5" />
                  <circle cx="200" cy="160" r="40" fill="url(#why-grad-1)" opacity="0.15" />
                  <circle cx="200" cy="160" r="8" fill="url(#why-grad-1)" />
                  <text x="200" y="60" textAnchor="middle" className="fill-slate-400" fontSize="11" fontFamily="monospace">TARGET METRIC</text>
                </svg>
              </div>
            </Reveal>

            {/* Row 2: art left, text right */}
            <Reveal className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative aspect-[5/4] flex items-center justify-center md:order-1 order-2">
                <svg viewBox="0 0 400 320" className="w-full h-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="why-grad-2" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <rect x="80" y="80" width="240" height="160" rx="16" fill="none" stroke="url(#why-grad-2)" strokeWidth="1.5" />
                  <rect x="110" y="110" width="180" height="100" rx="10" fill="url(#why-grad-2)" opacity="0.08" />
                  <path d="M 130 200 L 130 130 L 270 130 L 270 200" fill="none" stroke="url(#why-grad-2)" strokeWidth="1.5" />
                  <circle cx="200" cy="165" r="22" fill="none" stroke="url(#why-grad-2)" strokeWidth="2" />
                  <path d="M 192 165 L 198 171 L 210 159" fill="none" stroke="url(#why-grad-2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="md:order-2 order-1">
                <span className="text-xs uppercase tracking-[0.25em] text-emerald-700">02 / Security</span>
                <h3 className="mt-3 text-3xl font-semibold text-slate-900">Security built in</h3>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">From air-gapped on-premise deployments to hybrid cloud configurations, your data residency and compliance posture are non-negotiable.</p>
              </div>
            </Reveal>

            {/* Row 3: text left, art right */}
            <Reveal className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-violet-700">03 / Speed</span>
                <h3 className="mt-3 text-3xl font-semibold text-slate-900">Speed to value</h3>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">Average POC delivered in 4 weeks. Production rollouts in 8 to 12 weeks. We design for shipping, not slideware.</p>
              </div>
              <div className="relative aspect-[5/4] flex items-center justify-center">
                <svg viewBox="0 0 400 320" className="w-full h-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="why-grad-3" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                  <line x1="40" y1="160" x2="360" y2="160" stroke="#e2e8f0" strokeWidth="1.5" />
                  <line x1="40" y1="160" x2="360" y2="160" stroke="url(#why-grad-3)" strokeWidth="2.5" strokeDasharray="320" strokeDashoffset="60" />
                  <circle cx="80" cy="160" r="6" fill="url(#why-grad-3)" />
                  <circle cx="180" cy="160" r="6" fill="url(#why-grad-3)" />
                  <circle cx="280" cy="160" r="6" fill="url(#why-grad-3)" />
                  <circle cx="340" cy="160" r="10" fill="url(#why-grad-3)" />
                  <text x="80" y="195" textAnchor="middle" className="fill-slate-400" fontSize="10" fontFamily="monospace">WK 1</text>
                  <text x="180" y="195" textAnchor="middle" className="fill-slate-400" fontSize="10" fontFamily="monospace">WK 4</text>
                  <text x="280" y="195" textAnchor="middle" className="fill-slate-400" fontSize="10" fontFamily="monospace">WK 8</text>
                  <text x="340" y="195" textAnchor="middle" className="fill-slate-400" fontSize="10" fontFamily="monospace">WK 12</text>
                  <text x="200" y="120" textAnchor="middle" className="fill-slate-700" fontSize="13" fontFamily="monospace" fontWeight="600">PRODUCTION</text>
                </svg>
              </div>
            </Reveal>

            {/* Row 4: art left, text right */}
            <Reveal className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative aspect-[5/4] flex items-center justify-center md:order-1 order-2">
                <svg viewBox="0 0 400 320" className="w-full h-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="why-grad-4" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  <circle cx="120" cy="160" r="30" fill="none" stroke="url(#why-grad-4)" strokeWidth="1.5" />
                  <circle cx="280" cy="160" r="30" fill="none" stroke="url(#why-grad-4)" strokeWidth="1.5" />
                  <circle cx="200" cy="80" r="30" fill="none" stroke="url(#why-grad-4)" strokeWidth="1.5" />
                  <circle cx="200" cy="240" r="30" fill="none" stroke="url(#why-grad-4)" strokeWidth="1.5" />
                  <circle cx="200" cy="160" r="50" fill="url(#why-grad-4)" opacity="0.12" />
                  <circle cx="200" cy="160" r="14" fill="url(#why-grad-4)" />
                  <line x1="148" y1="148" x2="186" y2="160" stroke="url(#why-grad-4)" strokeWidth="1.5" />
                  <line x1="252" y1="148" x2="214" y2="160" stroke="url(#why-grad-4)" strokeWidth="1.5" />
                  <line x1="200" y1="110" x2="200" y2="146" stroke="url(#why-grad-4)" strokeWidth="1.5" />
                  <line x1="200" y1="174" x2="200" y2="210" stroke="url(#why-grad-4)" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="md:order-2 order-1">
                <span className="text-xs uppercase tracking-[0.25em] text-rose-700">04 / Partnership</span>
                <h3 className="mt-3 text-3xl font-semibold text-slate-900">Long-term partnership</h3>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">Ongoing managed services, model monitoring, and continuous optimization. 94% of clients renew because the work compounds.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-violet-700">Proof, not promises</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Selected enterprise outcomes.</h2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-slate-900 transition self-start">All case studies <span aria-hidden="true">→</span></Link>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <CardSpotlight className="bg-white border-slate-200 h-full">
                <Link href="/case-studies" className="block">
                  <span className="text-xs uppercase tracking-wider text-indigo-700">Financial Services</span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">Top-10 US bank cuts false-positive fraud alerts by 73%.</h3>
                  <p className="mt-3 text-slate-500 leading-relaxed">Replaced static rules with a hybrid ML system trained on 24 months of transactions, deployed inside the existing risk-ops compliance framework. Zero increase in fraud loss.</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200">Data Insights</span>
                    <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200">Integration</span>
                  </div>
                </Link>
              </CardSpotlight>
            </Reveal>
            <Reveal>
              <Link href="/case-studies" className="block group relative h-full rounded-2xl p-[2px] bg-gradient-to-br from-emerald-300 via-indigo-300 to-fuchsia-300 hover:from-emerald-500 hover:via-indigo-500 hover:to-fuchsia-500 transition-colors">
                <div className="h-full rounded-[14px] bg-white p-8 shadow-sm">
                  <span className="text-xs uppercase tracking-wider text-emerald-700">Healthcare</span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">Global pharma cuts clinical document processing by 88%.</h3>
                  <p className="mt-3 text-slate-500 leading-relaxed">Built a RAG pipeline and agentic review workflow over 200K plus trial documents. 4x reviewer throughput and a complete audit trail for regulators.</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200">AI Agents</span>
                    <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200">Process Automation</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-700">The stack</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">We build with the best, on your cloud.</h2>
          </Reveal>
          <Marquee items={stackItems} duration={40} fadeColor="white" />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 border-t border-slate-100 bg-gradient-to-br from-indigo-50/40 via-white to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-700">In their words</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Trusted by leaders who ship.</h2>
          </Reveal>
          <InfiniteMovingCards items={testimonials} direction="left" speed="slow" className="mx-auto" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="rounded-3xl border border-slate-200 bg-white shadow-sm p-10 md:p-16 relative overflow-hidden">
            <div className="blob blob-indigo w-[360px] h-[360px] -top-20 -right-20 opacity-30"></div>
            <div className="blob blob-emerald w-[300px] h-[300px] -bottom-20 -left-20 opacity-30"></div>
            <div className="relative max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Schedule your free AI readiness assessment.</h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">A 30 minute working session with a senior consultant. We will benchmark your AI maturity, surface the highest ROI use case, and outline a 4 week path to a working prototype.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton as="div" spotlight={false} className="rounded-full">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">
                    Book a Strategy Call <span aria-hidden="true">→</span>
                  </Link>
                </MagneticButton>
                <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">See engagement models</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
