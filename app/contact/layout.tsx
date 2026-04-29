import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Book a Free AI Strategy Call',
  description:
    'Talk to RevClerx about your enterprise AI roadmap. Free 30 minute strategy call. We respond within one business day.'
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
