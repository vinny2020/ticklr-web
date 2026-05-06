'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import IOSMock from '@/components/IOSMock'
import AndroidMock from '@/components/AndroidMock'
import { AppleIcon, PlayIcon, CheckIcon } from '@/components/Icons'

// ─── Tokens (D5: Observatory × Brutalist) ────────────────────────────────────

const D5 = {
  bg: '#080c14',
  bgRaised: '#0f1623',
  fg1: '#ffffff',
  fg2: '#e2e8f0',
  fg3: '#94a3b8',
  fg4: '#475569',
  fg5: '#334155',
  cobalt: '#2563EB',
  amber: '#F5C842',
  border: 'rgba(255,255,255,0.06)',
  borderStrong: 'rgba(255,255,255,0.10)',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    id: '01',
    name: 'Fully Private',
    desc: 'No accounts, no servers, no tracking. Your data lives in the OS-native local store on each device — Apple SwiftData on iOS, Android Room on Android.',
    avail: 'iOS · Android',
    tech: '~/Library/.../Ticklr.sqlite',
    color: D5.cobalt,
  },
  {
    id: '02',
    name: 'Tickle Reminders',
    desc: 'Recurring nudges to reach out, on a schedule you set. Daily, weekly, monthly, quarterly, yearly, or custom — repeats you actually want.',
    avail: 'iOS · Android',
    tech: 'localNotifications · cron-like',
    color: D5.amber,
  },
  {
    id: '03',
    name: 'Import Network',
    desc: 'Bring contacts in from your iPhone or Android phonebook, or paste a LinkedIn CSV export. Manual deduplication preserved — you stay in control.',
    avail: 'iOS · Android',
    tech: 'CNContact · Contacts · CSV',
    color: '#a78bfa',
  },
  {
    id: '04',
    name: 'Native Messaging',
    desc: 'Compose SMS and MMS directly from your contact list, with prefilled recipients and reusable templates. No third-party messaging service.',
    avail: 'iOS · Android',
    tech: 'MessageUI · Telephony',
    color: '#34d399',
  },
] as const

const TRUST = [
  { n: '0', l: 'servers', s: 'No backend' },
  { n: '0', l: 'accounts', s: 'No signup' },
  { n: '0', l: 'tracking', s: 'No analytics' },
  { n: '100%', l: 'local', s: 'On-device only' },
  { n: '2', l: 'platforms', s: 'iOS + Android' },
] as const

type Platform = 'ios' | 'android'
const SCREENSHOTS: Array<{ label: string; sub: string; screen: 'network' | 'tickle' | 'compose' | 'settings'; platform: Platform }> = [
  { label: 'Network', sub: 'Your people, sorted', screen: 'network', platform: 'ios' },
  { label: 'Tickle', sub: 'Today, upcoming, snoozed', screen: 'tickle', platform: 'android' },
  { label: 'Compose', sub: 'SMS without switching apps', screen: 'compose', platform: 'android' },
  { label: 'Settings', sub: 'Import, templates, version', screen: 'settings', platform: 'ios' },
]

const PRIVACY_POINTS: Array<[string, string]> = [
  ['No cloud', 'Data never leaves your phone'],
  ['No account', 'Nothing to sign up for'],
  ['No analytics', "We don't know you exist"],
  ['Open data', 'Export your contacts anytime'],
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: D5.bg, color: D5.fg2 }}>
      <SpecStrip />
      <Nav />
      <Hero />
      <TrustMarquee />
      <FeatureIndex />
      <ScreenshotsGallery />
      <PrivacySection />
      <FinalCTA />
      <Footer />
    </div>
  )
}

// ─── Spec strip ───────────────────────────────────────────────────────────────

function SpecStrip() {
  return (
    <div
      className="hidden md:flex font-mono"
      style={{
        justifyContent: 'space-between',
        padding: '8px 64px',
        fontSize: 10,
        color: D5.fg4,
        borderBottom: `1px solid ${D5.border}`,
        letterSpacing: '0.05em',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <span>TICKLR/v1.0.0 · 2026-04-29</span>
      <span style={{ color: D5.amber }}>● ANDROID v1.0 — SHIPPED</span>
      <span>iOS 17+ · Android 8+ · LOCAL-ONLY</span>
    </div>
  )
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 md:py-5 backdrop-blur-md"
      style={{
        borderBottom: `1px solid ${D5.border}`,
        background: 'rgba(8,12,20,0.7)',
      }}
    >
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
          <Image src="/assets/app-icon.png" alt="Ticklr" width={32} height={32} className="w-full h-full object-cover" />
        </div>
        <span className="font-bebas text-2xl tracking-wider" style={{ color: D5.fg1 }}>
          Ticklr
        </span>
      </Link>

      <div className="hidden lg:flex font-mono text-xs gap-8" style={{ color: D5.fg3 }}>
        <a href="#features" className="hover:text-white transition-colors">§01 Features</a>
        <a href="#privacy" className="hover:text-white transition-colors">§02 Privacy</a>
        <a href="#screens" className="hover:text-white transition-colors">§03 Screens</a>
        <Link href="/support" className="hover:text-white transition-colors">§04 Support</Link>
      </div>

      <div className="flex items-center gap-2.5">
        <a
          href="https://apps.apple.com/us/app/ticklr/id6760884034"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px] text-[13px] font-semibold transition-colors hover:bg-white/5"
          style={{ color: D5.fg2, border: `1px solid ${D5.borderStrong}` }}
        >
          <AppleIcon size={14} />
          App Store
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.xaymaca.sit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px] text-[13px] font-bold transition-all hover:brightness-110"
          style={{ background: D5.amber, color: '#0A1628' }}
        >
          <PlayIcon size={13} />
          Google Play
        </a>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative px-6 md:px-16 pt-16 md:pt-20 pb-12 md:pb-16">
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-24 w-[1200px] max-w-[150%] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2.5 mb-7 pl-2 pr-3.5 py-1.5 rounded-full"
            style={{
              background: 'rgba(245,200,66,0.08)',
              border: '1px solid rgba(245,200,66,0.30)',
            }}
          >
            <span
              className="px-2.5 py-[3px] rounded-full text-[10px] font-extrabold"
              style={{ background: D5.amber, color: '#0A1628', letterSpacing: '0.12em' }}
            >
              NEW
            </span>
            <span className="text-xs font-semibold" style={{ color: D5.amber, letterSpacing: '0.05em' }}>
              Now on Android · Already on iOS
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-bebas text-7xl sm:text-8xl md:text-9xl lg:text-[130px] mb-7"
            style={{ color: D5.fg1, lineHeight: 0.92, letterSpacing: '0.005em' }}
          >
            Your<br />
            <span style={{ color: D5.amber }}>People</span>
            <br />
            Matter.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-[19px] leading-relaxed max-w-md mb-9"
            style={{ color: D5.fg3 }}
          >
            Private contact reminders for the relationships that matter most.
            <br />
            <span style={{ color: D5.fg2 }}>On your device. Nowhere else.</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-3.5 mb-6"
          >
            <a
              href="https://apps.apple.com/us/app/ticklr/id6760884034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all hover:scale-[1.03] hover:brightness-110 active:scale-95"
              style={{
                background: D5.amber,
                color: '#0A1628',
                boxShadow: '0 4px 24px rgba(245,200,66,0.25)',
              }}
            >
              <AppleIcon size={20} />
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.xaymaca.sit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-sm font-bold transition-colors hover:bg-white/5"
              style={{ color: D5.fg1, border: `1px solid ${D5.borderStrong}` }}
            >
              <PlayIcon size={18} />
              Google Play
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="font-mono text-[11px]"
            style={{ color: D5.fg5, letterSpacing: '0.02em' }}
          >
            free · no account · iOS 17+ · Android 8+
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="relative h-[640px] md:h-[700px] flex justify-center lg:justify-end items-center"
          aria-hidden
        >
          {/* iOS phone (back, rotated left) */}
          <div className="absolute right-[42%] sm:right-[36%] lg:right-[200px] top-10 lg:top-[60px]" style={{ transform: 'rotate(-4deg)' }}>
            <div
              className="absolute font-mono text-[10px] uppercase"
              style={{ top: -22, left: 16, color: D5.fg4, letterSpacing: '0.16em' }}
            >
              iOS
            </div>
            <IOSMock w={240} h={500} screen="network" />
          </div>

          {/* Android phone (front, rotated right) */}
          <div className="absolute right-2 sm:right-4 lg:right-0 top-2 lg:top-[30px]" style={{ transform: 'rotate(3deg)' }}>
            <div
              className="absolute font-mono text-[10px] uppercase"
              style={{ top: -22, right: 16, color: D5.amber, letterSpacing: '0.16em' }}
            >
              Android · new
            </div>
            <AndroidMock w={260} h={540} screen="tickle" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Trust marquee ────────────────────────────────────────────────────────────

function TrustMarquee() {
  return (
    <section
      className="py-10"
      style={{ borderTop: `1px solid ${D5.border}`, borderBottom: `1px solid ${D5.border}`, background: D5.bgRaised }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-wrap justify-around items-center gap-x-10 gap-y-8">
          {TRUST.map((p, i) => (
            <div key={i} className="flex items-baseline gap-3.5">
              <span className="font-bebas leading-none" style={{ fontSize: 56, color: D5.fg1, letterSpacing: '0.02em' }}>
                {p.n}
              </span>
              <div>
                <div className="font-bebas leading-none" style={{ fontSize: 24, color: D5.fg2, letterSpacing: '0.02em' }}>
                  {p.l}
                </div>
                <div className="font-mono text-[11px] mt-1" style={{ color: D5.fg4 }}>
                  {p.s}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Brutalist feature index ──────────────────────────────────────────────────

function FeatureIndex() {
  return (
    <section id="features" className="relative px-6 md:px-16 pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-8 gap-3">
          <div>
            <div
              className="font-mono uppercase mb-3.5"
              style={{ fontSize: 11, color: D5.cobalt, letterSpacing: '0.16em' }}
            >
              // §01 — what it does
            </div>
            <h2
              className="font-bebas m-0"
              style={{ fontSize: 'clamp(48px, 8vw, 88px)', lineHeight: 0.95, color: D5.fg1, letterSpacing: '0.02em' }}
            >
              Feature Index.
            </h2>
          </div>
          <div className="font-mono text-[11px] md:text-right" style={{ color: D5.fg4 }}>
            4 entries · sorted by id
            <br />
            <span style={{ color: D5.fg5 }}>everything · nothing more</span>
          </div>
        </div>

        {/* table header */}
        <div
          className="hidden md:grid font-mono uppercase"
          style={{
            gridTemplateColumns: '70px 260px 1fr 200px 60px',
            borderTop: `1px solid ${D5.borderStrong}`,
            borderBottom: `1px solid ${D5.borderStrong}`,
            padding: '10px 0',
            fontSize: 10,
            color: D5.fg4,
            letterSpacing: '0.14em',
          }}
        >
          <span>id</span>
          <span>name</span>
          <span>description</span>
          <span>availability</span>
          <span className="text-right">→</span>
        </div>

        {/* rows */}
        {FEATURES.map((f, i, arr) => {
          const isLast = i === arr.length - 1
          return (
            <motion.div
              key={f.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={i}
              className="grid items-baseline py-7 md:py-7"
              style={{
                gridTemplateColumns: '70px 1fr',
                borderBottom: isLast ? `1px solid ${D5.borderStrong}` : `1px solid ${D5.border}`,
              }}
            >
              <span className="font-mono font-bold text-sm" style={{ color: f.color }}>
                §{f.id}
              </span>
              <div className="md:grid md:items-baseline" style={{ gridTemplateColumns: '260px 1fr 200px 60px' }}>
                <div>
                  <div
                    className="font-bebas leading-none"
                    style={{ fontSize: 32, color: D5.fg1, letterSpacing: '0.02em' }}
                  >
                    {f.name}
                  </div>
                  <div
                    className="font-mono mt-2"
                    style={{ fontSize: 10, color: D5.fg5, letterSpacing: '0.04em' }}
                  >
                    {f.tech}
                  </div>
                </div>
                <span className="block mt-3 md:mt-0 md:pr-8 text-sm leading-relaxed" style={{ color: D5.fg3 }}>
                  {f.desc}
                </span>
                <span className="hidden md:inline font-mono text-[11px]" style={{ color: D5.fg3 }}>
                  ● {f.avail}
                </span>
                <span className="hidden md:inline text-right font-mono text-base" style={{ color: D5.fg3 }}>
                  →
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

// ─── Screenshots gallery ──────────────────────────────────────────────────────

function ScreenshotsGallery() {
  return (
    <section id="screens" className="relative px-6 md:px-16 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-10 gap-3">
          <div>
            <div
              className="font-mono uppercase mb-3"
              style={{ fontSize: 11, color: D5.cobalt, letterSpacing: '0.16em' }}
            >
              // §02 — look around
            </div>
            <h2
              className="font-bebas m-0"
              style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: D5.fg1, letterSpacing: '0.02em' }}
            >
              Four tabs. No clutter.
            </h2>
          </div>
          <p className="text-sm leading-snug max-w-xs" style={{ color: D5.fg3 }}>
            Network, Tickle, Compose, Settings. The whole app, on one bottom bar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCREENSHOTS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={i}
              className="overflow-hidden rounded-[20px]"
              style={{ background: D5.bgRaised, border: `1px solid ${D5.border}` }}
            >
              <div
                className="h-[380px] relative overflow-hidden flex justify-center pt-5"
                style={{ background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.10), transparent 60%)' }}
              >
                {s.platform === 'android' ? (
                  <AndroidMock w={220} h={420} screen={s.screen} />
                ) : (
                  <IOSMock
                    w={220}
                    h={420}
                    screen={s.screen as 'network' | 'tickle' | 'compose' | 'settings'}
                  />
                )}
              </div>
              <div className="p-5" style={{ borderTop: `1px solid ${D5.border}` }}>
                <div className="flex items-center justify-between">
                  <span className="font-bebas" style={{ fontSize: 22, color: D5.fg1, letterSpacing: '0.02em' }}>
                    {s.label}
                  </span>
                  <span className="font-mono text-[9px]" style={{ color: D5.fg5, letterSpacing: '0.1em' }}>
                    {s.platform === 'android' ? 'ANDROID' : 'iOS'}
                  </span>
                </div>
                <div className="text-xs mt-1" style={{ color: D5.fg3 }}>
                  {s.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Privacy ──────────────────────────────────────────────────────────────────

function PrivacySection() {
  return (
    <section id="privacy" className="px-6 md:px-16 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-[28px] px-8 py-14 md:px-16 md:py-20"
          style={{
            background: 'linear-gradient(135deg, rgba(14,21,38,0.95), rgba(8,15,30,0.95))',
            border: '1px solid rgba(37,99,235,0.20)',
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.16) 0%, transparent 60%)' }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div
                className="font-mono uppercase mb-4"
                style={{ fontSize: 11, color: D5.cobalt, letterSpacing: '0.16em' }}
              >
                // §03 — privacy
              </div>
              <h2
                className="font-bebas mb-5"
                style={{ fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 0.95, color: D5.fg1, letterSpacing: '0.02em' }}
              >
                Built for privacy.
                <br />
                <span style={{ color: D5.amber }}>Not as an afterthought.</span>
              </h2>
              <p className="text-base leading-relaxed max-w-xl mb-4" style={{ color: D5.fg3 }}>
                Ticklr stores everything in your phone&apos;s secure local database — Apple SwiftData on iOS, Android
                Room on Android. We have no servers and no analytics — and neither we nor anyone else can access your
                data, because none of it ever leaves your device.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: D5.fg4 }}>
                No account to create. No password to forget. No breach to worry about.
              </p>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:brightness-125"
                style={{ color: D5.cobalt }}
              >
                Read our full privacy policy →
              </Link>
            </div>

            <div className="grid gap-3">
              {PRIVACY_POINTS.map(([title, sub]) => (
                <div
                  key={title}
                  className="flex items-center gap-4 p-5 rounded-[14px]"
                  style={{ background: 'rgba(0,0,0,0.30)', border: `1px solid ${D5.border}` }}
                >
                  <div
                    className="w-8 h-8 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(37,99,235,0.18)' }}
                  >
                    <CheckIcon size={16} color={D5.cobalt} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: D5.fg1 }}>
                      {title}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: D5.fg3 }}>
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="relative px-6 md:px-16 py-12 md:py-20 text-center">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] max-w-[120%] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245,200,66,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div className="relative inline-flex flex-col items-center max-w-3xl mx-auto">
        <div
          className="w-[72px] h-[72px] rounded-[18px] overflow-hidden mb-8"
          style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}
        >
          <Image src="/assets/app-icon.png" alt="Ticklr app icon" width={72} height={72} className="w-full h-full" />
        </div>
        <h2
          className="font-bebas mb-4"
          style={{ fontSize: 'clamp(44px, 7vw, 80px)', lineHeight: 0.95, color: D5.fg1, letterSpacing: '0.02em' }}
        >
          Stay close to your people.
        </h2>
        <p className="text-base mb-9" style={{ color: D5.fg3 }}>
          Free on the App Store and Google Play. No subscription. No tracking. Ever.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="https://apps.apple.com/us/app/ticklr/id6760884034"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-[15px] font-bold transition-all hover:scale-[1.03] hover:brightness-110 active:scale-95"
            style={{ background: D5.amber, color: '#0A1628', boxShadow: '0 6px 32px rgba(245,200,66,0.30)' }}
          >
            <AppleIcon size={22} />
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.xaymaca.sit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-[15px] font-bold transition-all hover:brightness-95 active:scale-95"
            style={{ background: D5.fg1, color: '#0A1628' }}
          >
            <PlayIcon size={20} />
            Google Play
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[11px]"
      style={{ borderTop: `1px solid ${D5.border}`, color: D5.fg4, letterSpacing: '0.04em' }}
    >
      <span>© {new Date().getFullYear()} Xaymaca · built with quiet intent · v1.0.0</span>
      <div className="flex gap-5">
        <Link href="/privacy" className="hover:text-slate-300 transition-colors">
          ./privacy
        </Link>
        <Link href="/support" className="hover:text-slate-300 transition-colors">
          ./support
        </Link>
        <a href="https://xaymaca.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
          xaymaca.com
        </a>
      </div>
    </footer>
  )
}
