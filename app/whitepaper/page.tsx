import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export const metadata = { title: 'Whitepaper — REBAL' }

const SECTIONS = [
  {
    title: '1. Abstract',
    body: 'REBAL is portfolio market infrastructure deployed on Robinhood Chain. It enables the creation, trading, and liquidity provisioning of multi-asset portfolio markets. Instead of isolated token pairs, REBAL organizes liquidity around programmable portfolios — baskets of assets with defined allocations — and routes trades through the deepest available portfolio liquidity.',
  },
  {
    title: '2. Motivation',
    body: 'Conventional AMMs fragment liquidity across pairs. Multi-asset exposure requires multiple trades, each incurring fees, slippage, and approval overhead. REBAL collapses this complexity: a portfolio market expresses a strategy as a single onchain object with its own vault, shares, and market configuration.',
  },
  {
    title: '3. Architecture',
    body: 'The protocol comprises four layers. The Portfolio Factory creates markets from user-defined composition. Each Portfolio Vault manages underlying assets, maintains target composition, and accounts LP shares. The Market Router executes trades against vault liquidity with slippage controls. Portfolio Shares represent proportional claims on vault positions — they are not equity in REBAL.',
  },
  {
    title: '4. Portfolio Markets',
    body: 'A portfolio market is defined by: (i) a set of underlying assets, (ii) target allocations summing to 100%, (iii) initial liquidity, (iv) a fee tier, and (v) a settlement asset. Markets are permissionless: any wallet can create one. The existence of a market does not constitute endorsement or recommendation by REBAL.',
  },
  {
    title: '5. Liquidity & Shares',
    body: 'Liquidity providers deposit one or more assets; deposits are normalized to the portfolio composition. In return they receive portfolio shares representing their proportional position. Shares accrue fees from trading activity and can be redeemed for the underlying portfolio assets.',
  },
  {
    title: '6. Trading & Routing',
    body: 'The Market Router sources liquidity across portfolio vaults, splitting routes where beneficial. Trades settle onchain with configurable slippage tolerance. Because vaults hold multiple assets, a single trade can be settled without intermediate hops.',
  },
  {
    title: '7. $REBAL',
    body: '$REBAL is the ecosystem utility token. It is intended for governance participation, liquidity and creator incentives, and ecosystem programs. $REBAL does not represent equity, ownership, or a claim on assets held by portfolio markets, and no guaranteed yield, revenue sharing, or returns are implied.',
  },
  {
    title: '8. Risk & Disclaimers',
    body: 'Smart contract risk, market risk, and regulatory risk are borne by users. This document is informational and does not constitute financial, investment, legal, or tax advice. Users must conduct their own research and comply with applicable laws.',
  },
]

export default function WhitepaperPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <Link
        href="/docs"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Documentation
      </Link>
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border">
          <FileText className="h-4.5 w-4.5" />
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">REBAL Whitepaper</h1>
          <p className="text-sm text-muted-foreground">Portfolio Market Infrastructure · v1.0</p>
        </div>
      </div>

      <article className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="text-lg font-semibold tracking-tight">{s.title}</h2>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{s.body}</p>
          </section>
        ))}
      </article>
    </div>
  )
}
