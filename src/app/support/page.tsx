import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support — Ticklr',
  description: 'Get help with Ticklr — Your People Matter.',
}

const CONTACT_EMAIL = 'support@xaymaca.com'

const FAQS = [
  {
    q: 'How do I import my LinkedIn contacts?',
    a: 'Go to linkedin.com → Settings & Privacy → Data Privacy → Get a copy of your data → select Connections → Request archive. LinkedIn will email you a download link within 10–30 minutes. Download the zip, open it in the Files app (it unzips automatically), then open Ticklr → Import → Import from LinkedIn CSV and select the Connections.csv file.',
  },
  {
    q: 'Why does Ticklr need access to my contacts?',
    a: 'Ticklr requests contacts access only when you choose to import from your iPhone contacts. The data is read once, saved locally in the app, and never transmitted anywhere. You can revoke access in Settings → Privacy & Security → Contacts at any time.',
  },
  {
    q: 'Can Ticklr send messages without me knowing?',
    a: 'No. On iOS, Ticklr opens the native Messages app and you always tap Send yourself. On Android, you control when messages go out. Ticklr never sends anything in the background.',
  },
  {
    q: 'My data disappeared after reinstalling. Can I get it back?',
    a: 'Ticklr stores everything locally on your device with no cloud backup. If you delete the app, your data is deleted with it. A future version will offer optional iCloud / Google backup. For now, treat Ticklr like a local note — reinstalling starts fresh.',
  },
  {
    q: 'What is a tickle reminder?',
    a: 'A tickle is a recurring reminder to reach out to someone. For example: "Call dad every Sunday" or "Check in with my colleague every 2 months." Ticklr will notify you when it\'s time and mark it done when you act on it, then schedule the next one automatically.',
  },
  {
    q: 'How do I delete a contact?',
    a: "Open the contact's detail page, scroll to the bottom, and tap Delete Contact. This only removes them from Ticklr — it does not affect your iPhone's native contacts.",
  },
]

export default function SupportPage() {
  return (
    <div className="bg-bg text-ink">
      {/* Spec strip */}
      <div className="spec-strip border-b border-ink font-mono text-[10px] tracking-[0.02em] text-ink-3">
        <span>TICKLR/SUPPORT · v1.7.0</span>
        <span className="hidden sm:inline">REPLIES WITHIN 1 BUSINESS DAY</span>
        <span className="sm:text-right">xaymaca/ticklr</span>
      </div>

      {/* Nav */}
      <nav className="site-nav border-b border-ink flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3.5 flex-shrink-0">
          <div className="w-9 h-9 border border-ink overflow-hidden flex-shrink-0">
            <Image
              src="/assets/app-icon.png"
              alt=""
              width={36}
              height={36}
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(1)' }}
              priority
            />
          </div>
          <span className="font-sans text-[22px] font-extrabold tracking-[-0.02em] lowercase text-ink">
            ticklr<span className="text-ink">.</span>
          </span>
        </Link>
        <Link
          href="/"
          className="font-mono text-xs text-ink border border-ink hover:opacity-70 transition-opacity"
          style={{ padding: '10px 16px' }}
        >
          ← back
        </Link>
      </nav>

      {/* Page header */}
      <section className="border-b border-ink section-head flex flex-col gap-3">
        <div className="font-mono text-[11px] uppercase text-ink-3" style={{ letterSpacing: '0.16em' }}>
          // document / support
        </div>
        <h1
          className="font-sans font-black lowercase text-ink m-0"
          style={{ fontSize: 'clamp(48px, 9vw, 120px)', lineHeight: 0.85, letterSpacing: '-0.05em' }}
        >
          support.
        </h1>
        <p className="font-sans text-ink m-0 max-w-xl" style={{ fontSize: 16, lineHeight: 1.55, fontWeight: 500 }}>
          Need help? Email{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-ink underline underline-offset-4 decoration-2 font-bold hover:opacity-70 transition-opacity"
          >
            {CONTACT_EMAIL}
          </a>{' '}
          <span className="text-ink-3">— we&apos;ll get back within one business day.</span>
        </p>
      </section>

      {/* FAQ table */}
      <section>
        <div className="section-head flex justify-between items-baseline border-b border-ink">
          <h2 className="font-sans font-black lowercase text-ink m-0" style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.04em' }}>
            frequently asked
          </h2>
          <div className="font-mono text-[11px] text-ink-3 hidden sm:block">{FAQS.length} entries</div>
        </div>

        {FAQS.map((f, i) => (
          <div
            key={f.q}
            className="faq-row"
            style={{ borderBottom: i < FAQS.length - 1 ? '1px solid var(--rule-soft)' : 'none' }}
          >
            <div className="font-mono font-bold text-ink-3" style={{ fontSize: 13 }}>
              q.{String(i + 1).padStart(2, '0')}
            </div>
            <div className="font-sans font-bold text-ink" style={{ fontSize: 22, letterSpacing: '-0.015em' }}>{f.q}</div>
            <div className="font-sans text-ink-3" style={{ fontSize: 14, lineHeight: 1.6 }}>{f.a}</div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer-grid font-mono text-ink-3 border-t border-ink" style={{ fontSize: 11 }}>
        <span>© 2026 xaymaca</span>
        <Link href="/" className="hover:text-ink transition-colors">./home</Link>
        <Link href="/privacy" className="hover:text-ink transition-colors">./privacy-policy</Link>
        <span className="text-right">v1.7.0</span>
      </footer>
    </div>
  )
}
