import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ticklr',
  description: 'Ticklr stores all data locally on your device. We collect nothing.',
}

const EFFECTIVE_DATE = 'March 18, 2026'
const CONTACT_EMAIL = 'support@xaymaca.com'

const SECTIONS: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: '01',
    title: 'The short version',
    body: (
      <p>
        Ticklr stores everything on your device. We have no servers. We collect no data. No one outside your device can see your contacts, your messages, or your reminders — because none of that ever leaves your phone.
      </p>
    ),
  },
  {
    id: '02',
    title: 'What data does Ticklr collect?',
    body: (
      <p>
        <strong className="text-ink">None.</strong> Ticklr does not collect, transmit, or store any personal data on external servers. All information you enter — contacts, groups, tickle reminders, and message templates — is stored exclusively in your device&apos;s local database using Apple SwiftData (iOS) or Android Room (Android).
      </p>
    ),
  },
  {
    id: '03',
    title: 'Does Ticklr access my contacts?',
    body: (
      <p>
        Ticklr requests access to your device&apos;s contacts only when you choose to import them. This access is used solely to read contact information and save it locally within the app. Contact data is never transmitted anywhere. You can revoke this permission at any time in your device settings.
      </p>
    ),
  },
  {
    id: '04',
    title: 'Does Ticklr use analytics or tracking?',
    body: (
      <p>
        No. Ticklr contains no analytics SDKs, crash reporters, advertising identifiers, or third-party tracking of any kind. We do not know how many people use the app, how often, or what features they use.
      </p>
    ),
  },
  {
    id: '05',
    title: 'Does Ticklr send data to the cloud?',
    body: (
      <p>
        No. Ticklr makes no network requests. There is no backend, no API, and no cloud sync. The app works entirely offline. Future versions may offer optional iCloud Keychain backup (end-to-end encrypted, controlled entirely by Apple), but this will always be opt-in.
      </p>
    ),
  },
  {
    id: '06',
    title: 'Does Ticklr send SMS messages without my knowledge?',
    body: (
      <p>
        No. On iOS, all messages are sent through Apple&apos;s native Messages app — you always see the compose screen and tap Send yourself. On Android, the app will ask your permission before sending any message directly.
      </p>
    ),
  },
  {
    id: '07',
    title: 'LinkedIn CSV import',
    body: (
      <p>
        When you import a LinkedIn CSV file, the file is read locally on your device and never uploaded anywhere. The data is parsed and stored in your local app database. Ticklr has no relationship with LinkedIn.
      </p>
    ),
  },
  {
    id: '08',
    title: 'Notifications',
    body: (
      <p>
        Ticklr uses local notifications to remind you to reach out to contacts on your tickle schedule. These are generated entirely on-device. No notification content is sent to any server.
      </p>
    ),
  },
  {
    id: '09',
    title: "Children's privacy",
    body: (
      <p>
        Ticklr is not directed at children under 13. We do not knowingly collect information from children.
      </p>
    ),
  },
  {
    id: '10',
    title: 'Changes to this policy',
    body: (
      <p>
        If we make material changes to this privacy policy, we will update the effective date above and note the changes in the app release notes.
      </p>
    ),
  },
  {
    id: '11',
    title: 'Contact',
    body: (
      <p>
        Questions? Email us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity font-bold">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <div className="bg-bg text-ink">
      {/* Spec strip */}
      <div className="spec-strip border-b border-ink font-mono text-[10px] tracking-[0.02em] text-ink-3">
        <span>TICKLR/PRIVACY-POLICY · v1.7.0 · {EFFECTIVE_DATE}</span>
        <span className="hidden sm:inline">DOCUMENT · NO TRACKING · LOCAL-ONLY</span>
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
          // document / privacy-policy
        </div>
        <h1
          className="font-sans font-black lowercase text-ink m-0"
          style={{ fontSize: 'clamp(48px, 9vw, 120px)', lineHeight: 0.85, letterSpacing: '-0.05em' }}
        >
          privacy.
        </h1>
        <div className="font-mono text-[11px] text-ink-3">effective {EFFECTIVE_DATE} · {SECTIONS.length} entries</div>
      </section>

      {/* Body — table of sections */}
      <main>
        {SECTIONS.map((s, i) => (
          <article
            key={s.id}
            className="faq-row"
            style={{ borderBottom: i < SECTIONS.length - 1 ? '1px solid var(--rule-soft)' : 'none' }}
          >
            <div className="font-mono font-bold text-ink-3" style={{ fontSize: 13 }}>§{s.id}</div>
            <h2 className="font-sans font-bold text-ink m-0" style={{ fontSize: 22, letterSpacing: '-0.015em' }}>
              {s.title}
            </h2>
            <div className="font-sans text-ink-3" style={{ fontSize: 14, lineHeight: 1.6 }}>{s.body}</div>
          </article>
        ))}
      </main>

      {/* Footer */}
      <footer className="footer-grid font-mono text-ink-3 border-t border-ink" style={{ fontSize: 11 }}>
        <span>© 2026 xaymaca</span>
        <Link href="/" className="hover:text-ink transition-colors">./home</Link>
        <Link href="/support" className="hover:text-ink transition-colors">./support</Link>
        <span className="text-right">v1.7.0</span>
      </footer>
    </div>
  )
}
