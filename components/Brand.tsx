import Link from 'next/link'
import Image from 'next/image'

type Props = {
  href?: string
  size?: 'sm' | 'md'
  className?: string
}

export default function Brand({ href = '/', size = 'md', className = '' }: Props) {
  const dim = size === 'sm' ? 32 : 36
  const txt = size === 'sm' ? 'text-lg' : 'text-xl'
  const Inner = (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="block overflow-hidden flex-shrink-0" style={{ width: dim, height: dim }}>
        <Image
          src="/logo.png"
          alt="RevClerx logo"
          width={dim * 3}
          height={dim}
          className="block max-w-none"
          style={{ height: dim, width: 'auto' }}
          priority
        />
      </span>
      <span className={`${txt} font-bold tracking-tight text-slate-900`}>
        Rev
        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Clerx
        </span>
        <span className="text-violet-600">.ai</span>
      </span>
    </span>
  )
  if (href) return <Link href={href}>{Inner}</Link>
  return Inner
}
