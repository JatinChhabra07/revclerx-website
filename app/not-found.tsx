import PageShell from '@/components/PageShell'
import Link from 'next/link'

export default function NotFound() {
  return (
    <PageShell>
      <section className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="blob blob-indigo w-[480px] h-[480px] -top-24 -left-24"></div>
        <div className="blob blob-emerald w-[420px] h-[420px] bottom-0 -right-32"></div>
        <div className="max-w-4xl mx-auto px-6 py-24 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs text-slate-600 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            Page not found
          </div>
          <h1 className="mt-8 text-7xl md:text-9xl font-bold tracking-tight grad-text leading-none">404</h1>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">This page wandered off.</h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">Let us get you back on track. The link you followed may be broken, or the page may have moved. Try one of the destinations below.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">Back to Home <span aria-hidden>{'→'}</span></Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">Explore Services</Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">View Case Studies</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">Contact Us</Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
