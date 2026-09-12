import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'

export const metadata = { title: 'GitBook — REBAL' }

const CHAPTERS = [
  {
    title: 'Overview',
    pages: ['Introduction', 'Protocol at a glance', 'Robinhood Chain deployment', 'Demo mode'],
  },
  {
    title: 'Portfolio Markets',
    pages: ['Market anatomy', 'Composition & allocations', 'Fee tiers', 'Settlement assets'],
  },
  {
    title: 'Liquidity',
    pages: ['Multi-asset deposits', 'Auto-balanced deposits', 'Portfolio shares', 'Claiming fees'],
  },
  {
    title: 'Trading',
    pages: ['Routing', 'Slippage controls', 'Price impact', 'Settlement'],
  },
  {
    title: 'Creating Markets',
    pages: ['Factory walkthrough', 'Parameters reference', 'Creator incentives'],
  },
  {
    title: 'Reference',
    pages: ['Contract addresses (placeholders)', 'Glossary', 'FAQ'],
  },
]

export default function GitBookPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <Link
        href="/docs"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Documentation
      </Link>
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border">
          <BookOpen className="h-4.5 w-4.5" />
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">REBAL GitBook</h1>
          <p className="text-sm text-muted-foreground">Protocol handbook · Robinhood Chain</p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHAPTERS.map((ch) => (
          <section key={ch.title} className="rounded-2xl border border-border bg-card p-5">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">{ch.title.toUpperCase()}</h2>
            <ul className="mt-3 space-y-2">
              {ch.pages.map((p) => (
                <li key={p} className="text-sm text-foreground/85 transition-colors hover:text-foreground">
                  {p}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
