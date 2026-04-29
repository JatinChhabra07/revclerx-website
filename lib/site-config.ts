export const siteConfig = {
  name: 'RevClerx.ai',
  domain: 'revclerx.ai',
  email: 'hello@revclerx.ai',
  phone: '+1 (415) 555-0142',
  tagline: 'AI That Works. Results That Matter.',
  social: {
    linkedin: '#',
    twitter: '#',
    facebook: '#'
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  services: [
    { label: 'Process Automation', href: '/services#process-automation' },
    { label: 'AI Agents', href: '/services#ai-agents' },
    { label: 'Conversational AI', href: '/services#conversational-ai' },
    { label: 'Data Insights', href: '/services#data-insights' },
    { label: 'Integration', href: '/services#integration' },
    { label: 'Strategy & Consulting', href: '/services#consulting' }
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' }
  ],
  stats: [
    { value: 50, suffix: '+', label: 'Enterprise Deployments' },
    { value: 12, suffix: '+', label: 'Industries Served' },
    { value: 4, suffix: ' wks', label: 'Average POC Delivery' },
    { value: 94, suffix: '%', label: 'Client Retention' }
  ]
} as const
