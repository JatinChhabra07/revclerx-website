import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { GradientMesh } from '@/components/ui/gradient-mesh'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { HighlightText } from '@/components/ui/highlight-text'
import { AnimatedCircles } from '@/components/ui/animated-circles'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { ShineBorder } from '@/components/ui/shine-border'
import { NumberTicker } from '@/components/ui/number-ticker'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { HoverGlow } from '@/components/ui/hover-glow'
import { CTABand } from '@/components/ui/cta-band'

export const metadata: Metadata = {
  title: 'About | Enterprise AI Specialists',
  description: 'RevClerx is a senior enterprise AI consultancy. We assess, build, and operate AI systems for regulated, data rich organizations across 12 plus industries.'
}

const principles = [
  { tag: 'P1', title: 'Outcomes over output.', body: 'A model in a notebook is not an outcome. We define the metric on day one and own it through deployment.', color: 'text-indigo-700', span: 2 as const },
  { tag: 'P2', title: 'Security as default.', body: 'Air-gapped, on-premise, hybrid, or cloud. The architecture decision starts with your data residency and compliance posture.', color: 'text-emerald-700', span: 1 as const },
  { tag: 'P3', title: 'Speed without shortcuts.', body: 'Four week POCs are the norm. We get there by removing process bloat, not by skipping reviews.', color: 'text-violet-700', span: 2 as const },
  { tag: 'P4', title: 'Integration is the product.', body: 'If it does not slot into your ERP, your CRM, or your data lake, it does not ship. We treat connectors as first-class work.', color: 'text-cyan-700', span: 1 as const },
  { tag: 'P5', title: 'Stay after launch.', body: 'Models drift. Regulations change. We monitor, retrain, and optimize so the value compounds rather than decays.', color: 'text-amber-700', span: 1 as const },
  { tag: 'P6', title: 'Honest about limits.', body: 'If AI is not the right answer, we will tell you on day one. We have walked away from work that was not ready for AI.', color: 'text-rose-700', span: 1 as const },
]

const milestones = [
  { year: '2022', color: 'text-indigo-700', title: 'Founded.', body: 'Three founders, one thesis. Enterprise AI is bottlenecked by integration and governance, not by models.' },
  { year: '2023', color: 'text-emerald-700', title: 'First production deployments.', body: 'Shipped fraud detection, document processing, and predictive maintenance for early enterprise partners.' },
  { year: '2024', color: 'text-violet-700', title: 'Crossed 25 deployments.', body: 'Expanded into healthcare, retail, and logistics. Released the Assess, Accelerate, Sustain methodology.' },
  { year: '2025', color: 'text-cyan-700', title: '50 plus deployments.', body: 'Launched the Managed AI Operations practice. Strategic partnerships with Nervesparks and Xsparks.ai.' },
  { year: '2026', color: 'text-amber-700', title: 'Today.', body: 'Operating across North America, Europe, and APAC. Twelve plus industries served and 94% client retention.' },
]

const leaders = [
  { gradient: 'from-indigo-400 to-violet-400', glow: 'rgba(124, 58, 237, 0.3)', name: 'Co-founder and CEO', role: 'AI Strategy, Enterprise Delivery', roleColor: 'text-indigo-700', blurb: 'Former CIO at a Fortune 500. Fifteen years architecting AI and data programs in regulated industries.' },
  { gradient: 'from-emerald-400 to-cyan-400', glow: 'rgba(16, 185, 129, 0.3)', name: 'Co-founder and CTO', role: 'ML Systems, Production AI', roleColor: 'text-emerald-700', blurb: 'Built large-scale ML platforms at two hyperscalers. Open source contributor to retrieval and agent frameworks.' },
  { gradient: 'from-violet-400 to-rose-400', glow: 'rgba(244, 63, 94, 0.3)', name: 'Co-founder and CDO', role: 'Data Governance, Compliance', roleColor: 'text-violet-700', blurb: 'Former regulator turned operator. Built data governance programs across financial services and healthcare.' },
]

export default function AboutPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <GradientMesh colorScheme="ai-purple" />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24 relative">
          <span className="text-xs uppercase tracking-[0.25em] text-indigo-700">About RevClerx</span>
          <h1 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight text-slate-900 text-balance leading-[1.05]">
            <VerticalCutReveal>
              {'Senior operators, building AI that ships.'}
            </VerticalCutReveal>
          </h1>
          <div className="mt-3 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            <HighlightText color="rgba(167, 139, 250, 0.35)">
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">We ship.</span>
            </HighlightText>
          </div>
          <p className="mt-7 max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed">
            We are a small, senior team of AI engineers, data scientists, and former enterprise CIOs. We started RevClerx because too many AI programs were stalling between brilliant slideware and production reality. Our job is to close that gap.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start relative">
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
          <div className="md:col-span-2 mt-6 flex justify-center">
            <div className="w-40 h-40 text-violet-500/40">
              <AnimatedCircles count={4} color="currentColor" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-700">Principles</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">Six things we will not compromise on.</h2>
          </Reveal>
          <BentoGrid className="mt-12 md:auto-rows-[16rem]">
            {principles.map((p) =>
              p.span === 2 ? (
                <ShineBorder
                  key={p.tag}
                  className="md:col-span-2 row-span-1"
                  borderRadius={16}
                  borderWidth={1}
                  color="linear-gradient(90deg, #4f46e5, #7c3aed, #d946ef)"
                >
                  <div className="w-full h-full flex flex-col justify-end p-2">
                    <div className={`text-sm font-mono ${p.color}`}>{p.tag}</div>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">{p.body}</p>
                  </div>
                </ShineBorder>
              ) : (
                <BentoCard
                  key={p.tag}
                  title={p.title}
                  description={p.body}
                  icon={<div className={`text-sm font-mono ${p.color}`}>{p.tag}</div>}
                  span={1}
                />
              ),
            )}
          </BentoGrid>
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
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent tabular">
                <NumberTicker value={50} />+
              </div>
              <div className="mt-2 text-sm text-slate-500">Enterprise AI deployments</div>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent tabular">
                <NumberTicker value={12} />+
              </div>
              <div className="mt-2 text-sm text-slate-500">Industries served</div>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent tabular">
                <NumberTicker value={94} />%
              </div>
              <div className="mt-2 text-sm text-slate-500">Client retention rate</div>
            </Reveal>
            <Reveal className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent tabular">
                <NumberTicker value={4} /> wks
              </div>
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
          <div className="mt-12">
            <TracingBeam>
              <div className="space-y-14 pl-4 md:pl-0">
                {milestones.map((m) => (
                  <div key={m.year} className="relative">
                    <span className={`inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono ${m.color}`}>{m.year}</span>
                    <h3 className="mt-3 text-xl md:text-2xl font-semibold text-slate-900">{m.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed max-w-2xl">{m.body}</p>
                  </div>
                ))}
              </div>
            </TracingBeam>
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
          <div className="mt-14 grid md:grid-cols-3 gap-12">
            {leaders.map((l) => (
              <HoverGlow key={l.name} color={l.glow} className="rounded-2xl">
                <div className="p-2">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${l.gradient} ring-4 ring-white shadow-md`}></div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">{l.name}</h3>
                  <p className={`mt-1 text-sm ${l.roleColor}`}>{l.role}</p>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">{l.blurb}</p>
                </div>
              </HoverGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <CTABand
            heading="Want to see how we work?"
            subheading="Book a 30 minute call. We will walk you through a recent deployment in your industry and outline what your first 4 weeks with RevClerx would look like."
            primaryCta={{ label: 'Book a Strategy Call', href: '/contact' }}
            gradient="linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #d946ef 100%)"
          />
          <div className="mt-6 flex justify-center">
            <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition">See case studies</Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
