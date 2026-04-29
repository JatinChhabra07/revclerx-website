import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Enterprise AI Consulting',
  description:
    'End-to-end enterprise AI services: process automation, intelligent agents, conversational AI, data insights, integration, and strategic consulting.',
}

export default function ServicesPage() {
  return (
    <PageShell>
      <Reveal as="section" className="relative overflow-hidden pt-16 md:pt-24 pb-20">
        <div aria-hidden="true" className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-indigo-100/60 blur-3xl opacity-60"></div>
        <div aria-hidden="true" className="absolute top-20 right-0 w-[420px] h-[420px] rounded-full bg-emerald-100/60 blur-3xl opacity-60"></div>
        <div aria-hidden="true" className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-violet-50 blur-3xl opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-4 py-1.5 text-xs font-medium text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              AI That Works. Results That Matter.
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900 text-balance">
              Services Built for{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Enterprise Outcomes
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              We design, build, and operate AI systems that integrate with your stack, scale safely across teams, and produce measurable ROI within a quarter, not a fiscal year. Every engagement starts with outcomes and ends with operational AI you can trust.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition"
              >
                Book a Strategy Call <span aria-hidden="true">→</span>
              </Link>
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
                <dd className="mt-1 text-2xl font-bold text-slate-900">4 weeks</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Client retention</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">94%</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Industries served</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">12+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Production models</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">200+</dd>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article id="process-automation" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-emerald-100 border border-slate-200 flex items-center justify-center text-indigo-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Process Automation</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">Replace brittle scripts and manual queues with AI workflows that read, route, decide, and audit themselves end to end.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Document processing &amp; extraction</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> RPA modernization</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Workflow orchestration</li>
              </ul>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-emerald-700 transition">Learn more <span aria-hidden="true">→</span></Link>
            </article>

            <article id="ai-agents" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-50 to-cyan-50 border border-slate-200 flex items-center justify-center text-violet-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="3"/><path d="M9 12h.01M15 12h.01"/><path d="M12 2v4"/><path d="M2 14h2M20 14h2"/></svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">AI Agents</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">Goal-driven systems that plan, call tools, and finish work across systems while staying inside your guardrails and audit trails.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Autonomous task agents</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Multi-agent systems</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Agentic RAG</li>
              </ul>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-emerald-700 transition">Learn more <span aria-hidden="true">→</span></Link>
            </article>

            <article id="conversational-ai" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-indigo-50 border border-slate-200 flex items-center justify-center text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Conversational AI</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">Voice and chat experiences that handle real workflows, escalate gracefully, and ship with full transcript analytics from day one.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Enterprise chat assistants</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Voice AI &amp; IVR replacement</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Customer support copilots</li>
              </ul>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-emerald-700 transition">Learn more <span aria-hidden="true">→</span></Link>
            </article>

            <article id="data-insights" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-50 border border-slate-200 flex items-center justify-center text-cyan-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Data Insights</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">Predictive and prescriptive models that turn historical data into next-best-action recommendations your operators actually trust.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Predictive analytics</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Anomaly detection</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Decision intelligence</li>
              </ul>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-emerald-700 transition">Learn more <span aria-hidden="true">→</span></Link>
            </article>

            <article id="integration" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-slate-200 flex items-center justify-center text-indigo-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Integration</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">Bridge AI to the systems that run your business, from SAP and Salesforce to twenty-year-old mainframes, without ripping anything out.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> API &amp; ERP connectors</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Legacy system bridges</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Data pipelines</li>
              </ul>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-emerald-700 transition">Learn more <span aria-hidden="true">→</span></Link>
            </article>

            <article id="consulting" className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:bg-slate-50 hover:border-slate-300 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 border border-slate-200 flex items-center justify-center text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Strategy &amp; Consulting</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">A clear-eyed view of where AI will move the needle, with portfolio prioritization, governance, and a roadmap your board can sign off on.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">›</span> AI readiness audits</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Roadmap planning</li>
                <li className="flex gap-2"><span className="text-emerald-600">›</span> Governance frameworks</li>
              </ul>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-emerald-700 transition">Learn more <span aria-hidden="true">→</span></Link>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Our Process</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Assess. Accelerate. Sustain.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">A repeatable operating model that turns AI ambition into shipped, governed, and measurable systems. No theater, no abandoned pilots.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:border-slate-300 transition">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center text-sm font-bold text-white">01</span>
                <span className="text-xs uppercase tracking-widest text-slate-500">Phase one</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">Assess</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">We map your data, systems, and workflows, score opportunities by feasibility and ROI, and pick the few use cases that actually deserve to be built first.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Data &amp; readiness audit</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Use-case prioritization</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Risk &amp; compliance review</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:border-slate-300 transition">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center text-sm font-bold text-white">02</span>
                <span className="text-xs uppercase tracking-widest text-slate-500">Phase two</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">Accelerate</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">Senior pods build a working POC in four weeks, then harden it for production with the same team, on the same code, with the same standards.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> 4-week proof of concept</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Production hardening</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Stakeholder enablement</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 hover:border-slate-300 transition">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 flex items-center justify-center text-sm font-bold text-white">03</span>
                <span className="text-xs uppercase tracking-widest text-slate-500">Phase three</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">Sustain</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">We run model monitoring, drift response, and quarterly upgrades so your AI keeps earning its place on the P&amp;L long after launch.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Model monitoring &amp; drift</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> SLA-backed operations</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8 md:p-14">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Standard inclusions</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">What's included in every engagement.</h2>
                <p className="mt-5 text-slate-600 leading-relaxed">No surprise add-ons. No partial deliverables. Every RevClerx project ships with the same enterprise rigor by default.</p>
              </div>
              <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-5"><span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100/60 text-emerald-700 flex items-center justify-center text-xs">✓</span><div><p className="font-medium text-slate-900">Security review</p><p className="text-sm text-slate-500">Threat modeling, secret hygiene, and red team checks before go-live.</p></div></li>
                <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-5"><span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100/60 text-emerald-700 flex items-center justify-center text-xs">✓</span><div><p className="font-medium text-slate-900">Dedicated team</p><p className="text-sm text-slate-500">Senior engineers and ML leads, never a rotating bench.</p></div></li>
                <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-5"><span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100/60 text-emerald-700 flex items-center justify-center text-xs">✓</span><div><p className="font-medium text-slate-900">Weekly progress reviews</p><p className="text-sm text-slate-500">Demo, metrics, blockers, and decisions captured every Friday.</p></div></li>
                <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-5"><span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100/60 text-emerald-700 flex items-center justify-center text-xs">✓</span><div><p className="font-medium text-slate-900">Model monitoring</p><p className="text-sm text-slate-500">Latency, cost, accuracy, and drift dashboards from day one.</p></div></li>
                <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-5"><span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100/60 text-emerald-700 flex items-center justify-center text-xs">✓</span><div><p className="font-medium text-slate-900">Compliance documentation</p><p className="text-sm text-slate-500">SOC 2, HIPAA, GDPR, and EU AI Act artifacts ready for audit.</p></div></li>
                <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-5"><span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100/60 text-emerald-700 flex items-center justify-center text-xs">✓</span><div><p className="font-medium text-slate-900">Production SLA</p><p className="text-sm text-slate-500">Uptime, response time, and incident commitments in writing.</p></div></li>
                <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-5"><span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100/60 text-emerald-700 flex items-center justify-center text-xs">✓</span><div><p className="font-medium text-slate-900">Team training</p><p className="text-sm text-slate-500">Hands-on sessions for engineers, ops, and business owners.</p></div></li>
                <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-5"><span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100/60 text-emerald-700 flex items-center justify-center text-xs">✓</span><div><p className="font-medium text-slate-900">Post-launch support</p><p className="text-sm text-slate-500">90 days of co-piloted operations after every release.</p></div></li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Tech we build with</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">A best-in-class stack, picked for your problem.</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">We are model and cloud agnostic. We pick the boring, reliable tools when boring wins, and the bleeding-edge tools when they unlock real differentiation.</p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700 hover:border-slate-300 transition">OpenAI</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700 hover:border-slate-300 transition">Anthropic</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700 hover:border-slate-300 transition">AWS</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700 hover:border-slate-300 transition">Azure</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700 hover:border-slate-300 transition">Google Cloud</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700 hover:border-slate-300 transition">LangChain</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700 hover:border-slate-300 transition">Pinecone</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700 hover:border-slate-300 transition">Snowflake</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700 hover:border-slate-300 transition">Databricks</span>
            <span className="px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm text-sm text-slate-700 hover:border-slate-300 transition">Kubernetes</span>
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

          <div className="grid md:grid-cols-3 gap-6">
            <article className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 flex flex-col">
              <span className="inline-block text-xs uppercase tracking-widest text-slate-500">Sprint</span>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">AI Readiness Sprint</h3>
              <p className="mt-2 text-sm text-slate-500">2 weeks, fixed scope</p>
              <p className="mt-5 text-sm text-slate-600 leading-relaxed">A focused diagnostic for leaders who need clarity before they spend. Walk away with a prioritized portfolio, gaps mapped, and a 90-day plan.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Data &amp; tech audit</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Opportunity portfolio</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Executive readout</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> 90-day roadmap</li>
              </ul>
              <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/[0.08] hover:border-slate-300 transition">Start a Sprint <span aria-hidden="true">→</span></Link>
            </article>

            <article className="rounded-2xl border border-indigo-200 bg-gradient-to-b from-indigo-50 to-emerald-50 p-8 flex flex-col relative">
              <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
              <span className="inline-block text-xs uppercase tracking-widest text-slate-600">Build</span>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">Custom Build</h3>
              <p className="mt-2 text-sm text-slate-500">8 to 12 weeks, end to end</p>
              <p className="mt-5 text-sm text-slate-600 leading-relaxed">Our flagship engagement. A dedicated pod takes one priority use case from POC to production with full integration, monitoring, and handover.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Production-grade build</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Full integration &amp; security</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Monitoring &amp; SLA</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> 90-day post-launch support</li>
              </ul>
              <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">Scope a Build <span aria-hidden="true">→</span></Link>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 flex flex-col">
              <span className="inline-block text-xs uppercase tracking-widest text-slate-500">Operate</span>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">Managed AI Operations</h3>
              <p className="mt-2 text-sm text-slate-500">Ongoing, quarterly reviews</p>
              <p className="mt-5 text-sm text-slate-600 leading-relaxed">A long-term partnership for enterprises running AI in production. We monitor, retrain, and evolve your systems while your team stays focused on the business.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> 24x7 monitoring</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Quarterly model upgrades</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Cost &amp; latency tuning</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Roadmap stewardship</li>
              </ul>
              <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/[0.08] hover:border-slate-300 transition">Talk to Operations <span aria-hidden="true">→</span></Link>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-violet-50 to-emerald-50 p-10 md:p-16">
            <div aria-hidden="true" className="absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full bg-emerald-100/60 blur-3xl"></div>
            <div aria-hidden="true" className="absolute -bottom-32 -left-16 w-[420px] h-[420px] rounded-full bg-indigo-100/60 blur-3xl"></div>
            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Ready to deploy AI that ships?</h2>
              <p className="mt-5 text-slate-600 leading-relaxed">Skip the slide deck. Spend 30 minutes with a senior engineer and walk out with a concrete next step, whether that's a sprint, a build, or a polite "not yet."</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 transition">Book a Strategy Call <span aria-hidden="true">→</span></Link>
                <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-white/[0.08] hover:border-slate-300 transition">See Outcomes</Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </PageShell>
  )
}
