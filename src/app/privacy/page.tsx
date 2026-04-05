import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ticklr',
  description: 'Ticklr stores all data locally on your device. We collect nothing.',
}

const EFFECTIVE_DATE = 'March 18, 2026'
const CONTACT_EMAIL = 'support@xaymaca.com'

export default function PrivacyPage() {
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
        <div className="pt-12 pb-10">
          <h1 className="font-bebas text-6xl tracking-wide text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-600">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <Section title="The short version">
          <p>
            Ticklr stores everything on your device. We have no servers. We collect no data.
            No one outside your device can see your contacts, your messages, or your reminders — because none of that ever leaves your phone.
          </p>
        </Section>

        <Section title="What data does Ticklr collect?">
          <p>
            <strong className="text-white">None.</strong> Ticklr does not collect, transmit, or store any personal data on external servers.
            All information you enter — contacts, groups, tickle reminders, and message templates — is stored exclusively in your
            device&apos;s local database using Apple SwiftData (iOS) or Android Room (Android).
          </p>
        </Section>

        <Section title="Does Ticklr access my contacts?">
          <p>
            Ticklr requests access to your device&apos;s contacts only when you choose to import them.
            This access is used solely to read contact information and save it locally within the app.
            Contact data is never transmitted anywhere. You can revoke this permission at any time in your device settings.
          </p>
        </Section>

        <Section title="Does Ticklr use analytics or tracking?">
          <p>
            No. Ticklr contains no analytics SDKs, crash reporters, advertising identifiers, or third-party tracking of any kind.
            We do not know how many people use the app, how often, or what features they use.
          </p>
        </Section>

        <Section title="Does Ticklr send data to the cloud?">
          <p>
            No. Ticklr makes no network requests. There is no backend, no API, and no cloud sync.
            The app works entirely offline. Future versions may offer optional iCloud Keychain backup
            (end-to-end encrypted, controlled entirely by Apple), but this will always be opt-in.
          </p>
        </Section>

        <Section title="Does Ticklr send SMS messages without my knowledge?">
          <p>
            No. On iOS, all messages are sent through Apple&apos;s native Messages app — you always see the compose
            screen and tap Send yourself. On Android, the app will ask your permission before sending any message directly.
          </p>
        </Section>

        <Section title="LinkedIn CSV import">
          <p>
            When you import a LinkedIn CSV file, the file is read locally on your device and never uploaded anywhere.
            The data is parsed and stored in your local app database. Ticklr has no relationship with LinkedIn.
          </p>
        </Section>

        <Section title="Notifications">
          <p>
            Ticklr uses local notifications to remind you to reach out to contacts on your tickle schedule.
            These are generated entirely on-device. No notification content is sent to any server.
          </p>
        </Section>

        <Section title="Children's privacy">
          <p>
            Ticklr is not directed at children under 13. We do not knowingly collect information from children.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If we make material changes to this privacy policy, we will update the effective date above
            and note the changes in the app release notes.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions? Email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline transition-colors" style={{ color: '#F5C842' }}>
              {CONTACT_EMAIL}
            </a>.
          </p>
        </Section>
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <h2 className="font-bebas text-2xl tracking-wide mb-3" style={{ color: '#F5C842' }}>{title}</h2>
      <div className="text-slate-400 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}
