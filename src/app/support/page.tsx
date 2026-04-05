import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support — Ticklr',
  description: 'Get help with Ticklr — Your People Matter.',
}

const faqs = [
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
    a: "Ticklr stores everything locally on your device with no cloud backup. If you delete the app, your data is deleted with it. A future version will offer optional iCloud / Google backup. For now, treat Ticklr like a local note — reinstalling starts fresh.",
  },
  {
    q: 'What is a tickle reminder?',
    a: "A tickle is a recurring reminder to reach out to someone. For example: \"Call dad every Sunday\" or \"Check in with my colleague every 2 months.\" Ticklr will notify you when it's time and mark it done when you act on it, then schedule the next one automatically.",
  },
  {
    q: 'How do I delete a contact?',
    a: "Open the contact's detail page, scroll to the bottom, and tap Delete Contact. This only removes them from Ticklr — it does not affect your iPhone's native contacts.",
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen text-slate-200" style={{ backgroundColor: '#080c14' }}>

      {/* Nav */}
      <nav
        className="flex items-center justify-between px-6 py-4 max-w-3xl mx-auto"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-7 h-7 rounded-lg overflow-hidden">
            <Image src="/assets/app-icon.png" alt="Ticklr" width={28} height={28} className="w-full h-full object-cover" />
          </div>
          <span className="font-bebas text-xl tracking-widest text-white">Ticklr</span>
        </Link>
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        <div className="pt-12 pb-4">
          <h1 className="font-bebas text-6xl tracking-wide text-white mb-4">Support</h1>
          <p className="text-slate-400 text-sm">
            Need help? Email us at{' '}
            <a
              href="mailto:support@xaymaca.com"
              className="hover:underline transition-colors"
              style={{ color: '#F5C842' }}
            >
              support@xaymaca.com
            </a>{' '}
            and we&apos;ll get back to you within 1 business day.
          </p>
        </div>

        <h2 className="font-bebas text-3xl tracking-wide text-white mt-12 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: 'rgba(15,22,35,0.7)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h3 className="font-semibold text-white mb-2 text-sm">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </main>

      <footer
        className="px-6 py-8 max-w-3xl mx-auto text-sm text-slate-600"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <Link href="/" className="hover:text-slate-300 transition-colors flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Ticklr
        </Link>
      </footer>
    </div>
  )
}
