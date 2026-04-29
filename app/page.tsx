import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import StatCounter from '@/components/StatCounter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise AI That Delivers Outcomes',
  description: 'RevClerx partners with enterprises to design, deploy, and operationalize AI that drives measurable business value. 50+ deployments, 12+ industries, 4 week POC delivery.'
}

export default function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="blob blob-indigo w-[480px] h-[480px] -top-24 -left-24"></div>
        <div className="blob blob-emerald w-[420px] h-[420px] top-40 -right-32"></div>
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32 relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs text-slate-600 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Enterprise AI Solutions and Consulting
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-slate-900 text-balance leading-[1.05]">
            Enterprise AI that delivers <span className="grad-text">outcomes</span>, not overhead.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
            RevClerx partners with forward-thinking enterprises to design, deploy, and operationalize AI that drives measurable business value, with the speed, security, and precision your organization demands.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">Book a Free Strategy Call <span aria-hidden="true">→</span></Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">Explore Services</Link>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            <div>
              <div className="text-3xl md:text-4xl font-bold stat-number tabular"><StatCounter to={50} suffix="+" /></div>
              <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Enterprise Deployments</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold stat-number tabular"><StatCounter to={12} suffix="+" /></div>
              <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold stat-number tabular"><StatCounter to={4} suffix=" wks" /></div>
              <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Average POC Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold stat-number tabular"><StatCounter to={94} suffix="%" /></div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Reveal>
              <Link href="/services#process-automation" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover block">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 text-lg">⚙</div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">Process Automation</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">Document processing, RPA modernization, and workflow orchestration that cuts manual cycle times.</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-indigo-700 group-hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </Reveal>
            <Reveal>
              <Link href="/services#ai-agents" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover block">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 text-lg">◈</div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">AI Agents</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">Autonomous task agents and multi-agent systems that take action inside your stack, not just chat.</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-emerald-700 group-hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </Reveal>
            <Reveal>
              <Link href="/services#conversational-ai" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover block">
                <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-violet-700 text-lg">◉</div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">Conversational AI</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">Enterprise chat, voice AI, and customer copilots grounded in your data, with full guardrails.</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-violet-700 group-hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </Reveal>
            <Reveal>
              <Link href="/services#data-insights" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover block">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 text-lg">▲</div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">Data Insights</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">Predictive analytics, anomaly detection, and decision intelligence that move metrics, not dashboards.</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-cyan-700 group-hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </Reveal>
            <Reveal>
              <Link href="/services#integration" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover block">
                <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 text-lg">⟷</div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">Integration</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">API and ERP connectors, legacy system bridges, and pipelines that make AI usable in production.</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-rose-700 group-hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </Reveal>
            <Reveal>
              <Link href="/services#consulting" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-7 card-hover block">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 text-lg">★</div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">Strategy and Consulting</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">Readiness audits, phased roadmaps, and AI governance frameworks aligned to business priorities.</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-amber-700 group-hover:text-slate-900 transition">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </Reveal>
          </div>
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
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8">
              <div className="text-xs font-mono text-indigo-700">01</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">Assess</h3>
              <p className="mt-2 text-sm text-slate-500">Know before you build.</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3"><span className="text-indigo-600">✓</span><span>Audit current infrastructure and AI readiness.</span></li>
                <li className="flex gap-3"><span className="text-indigo-600">✓</span><span>Define a phased AI roadmap aligned to business priorities.</span></li>
                <li className="flex gap-3"><span className="text-indigo-600">✓</span><span>Forecast ROI scenarios with quantified projections.</span></li>
              </ul>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent"></div>
              <div className="text-xs font-mono text-emerald-700">02</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">Accelerate</h3>
              <p className="mt-2 text-sm text-slate-500">Build what works, fast.</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3"><span className="text-emerald-600">✓</span><span>Develop custom AI models, agents, and integrations.</span></li>
                <li className="flex gap-3"><span className="text-emerald-600">✓</span><span>Deliver production-ready solutions in weeks, not quarters.</span></li>
                <li className="flex gap-3"><span className="text-emerald-600">✓</span><span>Connect AI to existing enterprise systems and workflows.</span></li>
              </ul>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8">
              <div className="text-xs font-mono text-violet-700">03</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">Sustain</h3>
              <p className="mt-2 text-sm text-slate-500">Keep intelligence performing.</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3"><span className="text-violet-600">✓</span><span>Monitor, retrain, and optimize models post-deployment.</span></li>
                <li className="flex gap-3"><span className="text-violet-600">✓</span><span>Ensure compliance with evolving regulations.</span></li>
                <li className="flex gap-3"><span className="text-violet-600">✓</span><span>Scale across business units with shared AI infrastructure.</span></li>
              </ul>
            </Reveal>
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
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 card-hover">
              <h3 className="text-xl font-semibold text-slate-900">Outcomes before algorithms</h3>
              <p className="mt-3 text-slate-500 leading-relaxed">We measure success in revenue recovered, costs reduced, and decisions accelerated. Every engagement starts with a target metric and an executive sponsor.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 card-hover">
              <h3 className="text-xl font-semibold text-slate-900">Security built in</h3>
              <p className="mt-3 text-slate-500 leading-relaxed">From air-gapped on-premise deployments to hybrid cloud configurations, your data residency and compliance posture are non-negotiable.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 card-hover">
              <h3 className="text-xl font-semibold text-slate-900">Speed to value</h3>
              <p className="mt-3 text-slate-500 leading-relaxed">Average POC delivered in 4 weeks. Production rollouts in 8 to 12 weeks. We design for shipping, not slideware.</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 card-hover">
              <h3 className="text-xl font-semibold text-slate-900">Long-term partnership</h3>
              <p className="mt-3 text-slate-500 leading-relaxed">Ongoing managed services, model monitoring, and continuous optimization. 94% of clients renew because the work compounds.</p>
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
              <Link href="/case-studies" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-8 card-hover block">
                <span className="text-xs uppercase tracking-wider text-indigo-700">Financial Services</span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">Top-10 US bank cuts false-positive fraud alerts by 73%.</h3>
                <p className="mt-3 text-slate-500 leading-relaxed">Replaced static rules with a hybrid ML system trained on 24 months of transactions, deployed inside the existing risk-ops compliance framework. Zero increase in fraud loss.</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200">Data Insights</span>
                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200">Integration</span>
                </div>
              </Link>
            </Reveal>
            <Reveal>
              <Link href="/case-studies" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-8 card-hover block">
                <span className="text-xs uppercase tracking-wider text-emerald-700">Healthcare</span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">Global pharma cuts clinical document processing by 88%.</h3>
                <p className="mt-3 text-slate-500 leading-relaxed">Built a RAG pipeline and agentic review workflow over 200K plus trial documents. 4x reviewer throughput and a complete audit trail for regulators.</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200">AI Agents</span>
                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200">Process Automation</span>
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
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">OpenAI</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">Anthropic</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">AWS</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">Azure</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">Google Cloud</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">LangChain</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">LlamaIndex</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">Pinecone</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">Snowflake</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">Databricks</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">Kubernetes</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm">PostgreSQL</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal as="figure" className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-10 md:p-14">
            <div className="text-3xl font-bold leading-tight text-balance text-slate-900">
              &quot;RevClerx took us from a stalled pilot to a production AI capability in under three months. They cared about our compliance constraints as much as our model accuracy.&quot;
            </div>
            <figcaption className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-emerald-400"></div>
              <div>
                <div className="font-semibold text-slate-900">Chief Data Officer</div>
                <div className="text-sm text-slate-500">Top-10 US Bank</div>
              </div>
            </figcaption>
          </Reveal>
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
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">Book a Strategy Call <span aria-hidden="true">→</span></Link>
                <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">See engagement models</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
