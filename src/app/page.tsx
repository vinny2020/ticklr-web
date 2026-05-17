'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { AppleIcon, PlayIcon, CheckIcon } from '@/components/Icons'

// ─── Warm tokens (cream paper × Bebas × mustard) ─────────────────────────────

const W = {
  paper: '#EFEAE0',
  paperSurface: '#F4EFE3',
  paperSurface2: '#EFE9DB',
  paperCard: '#FAF5E8',
  paperCardAlt: '#FAF4E2',
  paperHighlight: '#FBF7EE',
  ink: '#1A1F2A',
  ink2: '#28241D',
  ink3: '#3D4753',
  ink4: '#6B5F4F',
  ink5: '#9A8E7C',
  border: 'rgba(60,42,20,0.10)',
  borderStrong: 'rgba(60,42,20,0.18)',
  mustard: '#A7791C',
  mustardSoft: '#E6D1A0',
  mustardTint: '#EDDEB6',
  burgundy: '#9C3F3C',
  blue: '#3F5C7A',
  forest: '#4F6B47',
  terracotta: '#B26342',
} as const

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

const PAPER_GRAIN_URL =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.22  0 0 0 0 0.14  0 0 0 0 0.06  0 0 0 0.65 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    id: '01',
    name: 'Every Relationship',
    desc: 'Family, friends, colleagues, neighbors, milestones — Ticklr makes maintaining every kind of relationship easier. Sort them into circles that make sense to you.',
    avail: 'iOS · Android',
    tech: 'Family · Friends · Work · Milestones · Community',
    color: W.terracotta,
  },
  {
    id: '02',
    name: 'Tickle Reminders',
    desc: 'Recurring nudges to reach out, on a schedule you set. Daily, weekly, monthly, quarterly, yearly, or custom — repeats you actually want.',
    avail: 'iOS · Android',
    tech: 'localNotifications · cron-like',
    color: W.mustard,
  },
  {
    id: '03',
    name: 'Import Network',
    desc: 'Bring contacts in from your iPhone or Android phonebook, or paste a LinkedIn CSV export. Manual deduplication preserved — you stay in control.',
    avail: 'iOS · Android',
    tech: 'CNContact · Contacts · CSV',
    color: W.burgundy,
  },
] as const

const TRUST = [
  { n: '0', l: 'servers', s: 'No backend' },
  { n: '0', l: 'accounts', s: 'No signup' },
  { n: '0', l: 'tracking', s: 'No analytics' },
  { n: '100%', l: 'local', s: 'On-device only' },
  { n: '2', l: 'platforms', s: 'iOS + Android' },
] as const

const SCREENSHOTS: Array<{ src: string; alt: string; label: string; sub: string; accent: string }> = [
  { src: '/assets/tile-01-tickle.png', alt: 'Never lose touch with the people who matter.', label: 'Tickle', sub: 'Today, upcoming, snoozed', accent: W.mustard },
  { src: '/assets/tile-04-network.png', alt: '608 people. One quiet circle.', label: 'Network', sub: 'Your people, sorted', accent: W.blue },
  { src: '/assets/tile-05-compose.png', alt: 'Reach out in seconds.', label: 'Compose', sub: 'SMS without switching apps', accent: W.terracotta },
  { src: '/assets/tile-06-privacy.png', alt: 'Your network. Yours only.', label: '100% on device', sub: 'No servers, no analytics', accent: W.forest },
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
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: W.paper,
        color: W.ink3,
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
      }}
    >
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

// ─── Grain overlay ────────────────────────────────────────────────────────────

function GrainOverlay({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: PAPER_GRAIN_URL,
        opacity,
        mixBlendMode: 'multiply',
      }}
    />
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
        color: W.ink5,
        borderBottom: `1px solid ${W.border}`,
        letterSpacing: '0.05em',
        background: W.paperSurface2,
        position: 'relative',
        zIndex: 5,
      }}
    >
      <span>TICKLR/v1.7.0 · 2026-05-17</span>
      <span style={{ color: W.mustard }}>● WARM REDESIGN — LIVE</span>
      <span>RATED E (APP STORE) · 4+ (PLAY) · LOCAL-ONLY</span>
    </div>
  )
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 md:py-5 backdrop-blur-md"
      style={{
        borderBottom: `1px solid ${W.border}`,
        background: 'rgba(239,234,224,0.78)',
      }}
    >
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="w-9 h-9 rounded-[10px] overflow-hidden flex-shrink-0" style={{ boxShadow: '0 1px 2px rgba(60,42,20,0.12)' }}>
          <Image src="/assets/app-icon.png" alt="Ticklr" width={36} height={36} className="w-full h-full object-cover" />
        </div>
        <span className="font-bebas text-2xl tracking-wider" style={{ color: W.ink }}>
          Ticklr
        </span>
      </Link>

      <div className="hidden lg:flex font-mono text-xs gap-8" style={{ color: W.ink4 }}>
        <a href="#features" className="transition-colors hover:text-[color:var(--warm-ink)]">01 Features</a>
        <a href="#privacy" className="transition-colors hover:text-[color:var(--warm-ink)]">02 Privacy</a>
        <a href="#screens" className="transition-colors hover:text-[color:var(--warm-ink)]">03 Screens</a>
        <Link href="/support" className="transition-colors hover:text-[color:var(--warm-ink)]">04 Support</Link>
      </div>

      <div className="flex items-center gap-2.5">
        <a
          href="https://apps.apple.com/us/app/ticklr/id6760884034"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px] text-[13px] font-semibold transition-colors"
          style={{ color: W.ink2, border: `1px solid ${W.borderStrong}`, background: 'rgba(255,255,255,0.5)' }}
        >
          <AppleIcon size={14} />
          App Store
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.xaymaca.sit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px] text-[13px] font-bold transition-all hover:brightness-110"
          style={{ background: W.ink, color: W.paperHighlight }}
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
    <section
      className="relative px-6 md:px-16 pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 25%, #FAEED4 0%, #F1E2B5 38%, #EDDEB6 70%, #E8D69E 100%)',
      }}
    >
      <GrainOverlay opacity={0.07} />
      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(80,55,20,0.16) 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="relative">
          {/* Eyebrow wordmark */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-8"
          >
            <div
              className="font-bebas"
              style={{
                fontSize: 38,
                lineHeight: 0.9,
                letterSpacing: '0.04em',
                color: W.ink,
              }}
            >
              TICKLR
            </div>
            <div
              className="font-mono mt-1.5 font-semibold"
              style={{ fontSize: 11, letterSpacing: '0.32em', color: W.ink4 }}
            >
              YOUR PEOPLE MATTER
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[112px] mb-7"
            style={{ color: W.ink, lineHeight: 0.96, letterSpacing: '0.005em' }}
          >
            Never lose touch
            <br />
            with the people
            <br />
            <span style={{ color: W.mustard }}>who matter.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-[19px] leading-relaxed max-w-md mb-9"
            style={{ color: W.ink3 }}
          >
            Private contact reminders for the relationships that matter most.
            <br />
            <span style={{ color: W.ink2, fontWeight: 500 }}>On your device. Nowhere else.</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-3.5 mb-7"
          >
            <a
              href="https://apps.apple.com/us/app/ticklr/id6760884034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all hover:scale-[1.03] hover:brightness-105 active:scale-95"
              style={{
                background: W.ink,
                color: W.paperHighlight,
                boxShadow: '0 6px 20px rgba(26,31,42,0.28)',
              }}
            >
              <AppleIcon size={20} />
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.xaymaca.sit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-sm font-bold transition-colors hover:bg-white/40"
              style={{ color: W.ink, border: `1px solid ${W.borderStrong}`, background: 'rgba(255,255,255,0.5)' }}
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
            className="flex flex-wrap gap-2"
          >
            {['0 servers', '0 accounts', '0 tracking', '100% local'].map((t) => (
              <span
                key={t}
                className="font-medium"
                style={{
                  padding: '7px 14px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.62)',
                  border: `1px solid ${W.border}`,
                  fontSize: 12,
                  color: W.ink3,
                }}
              >
                {t}
              </span>
            ))}
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
          {/* Back tile — Family / Groups (rotated left) */}
          <div
            className="absolute right-[34%] sm:right-[30%] lg:right-[230px] top-6 lg:top-[40px]"
            style={{
              transform: 'rotate(-4deg)',
              filter: 'drop-shadow(0 30px 50px rgba(60,40,20,0.22))',
            }}
          >
            <Image
              src="/assets/tile-03-family.png"
              alt="Family First. Always."
              width={290}
              height={628}
              priority
              className="rounded-[18px]"
              style={{ width: 260, height: 'auto' }}
            />
          </div>

          {/* Front tile — Birthday / Tickle (rotated right) */}
          <div
            className="absolute right-2 sm:right-4 lg:right-0 top-0 lg:top-[10px]"
            style={{
              transform: 'rotate(3deg)',
              filter: 'drop-shadow(0 36px 60px rgba(60,40,20,0.28))',
            }}
          >
            <Image
              src="/assets/tile-02-birthday.png"
              alt="Never miss a birthday."
              width={310}
              height={672}
              priority
              className="rounded-[18px]"
              style={{ width: 290, height: 'auto' }}
            />
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
      className="relative py-10"
      style={{
        borderTop: `1px solid ${W.border}`,
        borderBottom: `1px solid ${W.border}`,
        background: W.paperSurface2,
      }}
    >
      <GrainOverlay opacity={0.05} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-wrap justify-around items-center gap-x-10 gap-y-8">
          {TRUST.map((p, i) => (
            <div key={i} className="flex items-baseline gap-3.5">
              <span className="font-bebas leading-none" style={{ fontSize: 56, color: W.ink, letterSpacing: '0.02em' }}>
                {p.n}
              </span>
              <div>
                <div className="font-bebas leading-none" style={{ fontSize: 24, color: W.ink2, letterSpacing: '0.02em' }}>
                  {p.l}
                </div>
                <div className="font-mono text-[11px] mt-1" style={{ color: W.ink5 }}>
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

// ─── Feature index ────────────────────────────────────────────────────────────

function FeatureIndex() {
  return (
    <section id="features" className="relative px-6 md:px-16 pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-8 gap-3">
          <div>
            <div
              className="font-mono uppercase mb-3.5"
              style={{ fontSize: 11, color: W.mustard, letterSpacing: '0.16em' }}
            >
              // 01 — what it does
            </div>
            <h2
              className="font-bebas m-0"
              style={{ fontSize: 'clamp(48px, 8vw, 88px)', lineHeight: 0.95, color: W.ink, letterSpacing: '0.02em' }}
            >
              Feature Index.
            </h2>
          </div>
          <div className="font-mono text-[11px] md:text-right" style={{ color: W.ink4 }}>
            3 entries · sorted by id
            <br />
            <span style={{ color: W.ink5 }}>everything · nothing more</span>
          </div>
        </div>

        {/* table header */}
        <div
          className="hidden md:grid font-mono uppercase"
          style={{
            gridTemplateColumns: '70px 260px 1fr 200px 60px',
            borderTop: `1px solid ${W.borderStrong}`,
            borderBottom: `1px solid ${W.borderStrong}`,
            padding: '10px 0',
            fontSize: 10,
            color: W.ink4,
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
                borderBottom: isLast ? `1px solid ${W.borderStrong}` : `1px solid ${W.border}`,
              }}
            >
              <span className="font-mono font-bold text-sm" style={{ color: f.color }}>
                {f.id}
              </span>
              <div className="md:grid md:items-baseline" style={{ gridTemplateColumns: '260px 1fr 200px 60px' }}>
                <div>
                  <div
                    className="font-bebas leading-none"
                    style={{ fontSize: 32, color: W.ink, letterSpacing: '0.02em' }}
                  >
                    {f.name}
                  </div>
                  <div
                    className="font-mono mt-2"
                    style={{ fontSize: 10, color: W.ink5, letterSpacing: '0.04em' }}
                  >
                    {f.tech}
                  </div>
                </div>
                <span className="block mt-3 md:mt-0 md:pr-8 text-sm leading-relaxed" style={{ color: W.ink3 }}>
                  {f.desc}
                </span>
                <span className="hidden md:inline font-mono text-[11px]" style={{ color: W.ink3 }}>
                  ● {f.avail}
                </span>
                <span className="hidden md:inline text-right font-mono text-base" style={{ color: W.ink4 }}>
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
    <section
      id="screens"
      className="relative px-6 md:px-16 py-16 md:py-24"
      style={{
        background: W.paperSurface,
        borderTop: `1px solid ${W.border}`,
        borderBottom: `1px solid ${W.border}`,
      }}
    >
      <GrainOverlay opacity={0.05} />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
          <div
            className="font-mono uppercase"
            style={{ fontSize: 11, color: W.mustard, letterSpacing: '0.16em' }}
          >
            // 02 — look around
          </div>
          <p className="text-sm leading-snug max-w-xs" style={{ color: W.ink3 }}>
            Four posters. The whole app on one bottom bar — Network, Tickle, Compose, Settings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SCREENSHOTS.map((s, i) => (
            <motion.figure
              key={s.src}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={i}
              className="m-0 overflow-hidden rounded-[20px] relative"
              style={{
                border: `1px solid ${W.border}`,
                boxShadow: '0 1px 0 rgba(60,42,20,0.05), 0 14px 28px rgba(60,42,20,0.08)',
              }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={645}
                height={1398}
                className="block w-full h-auto"
              />
              <figcaption
                className="absolute left-3 bottom-3 right-3 flex items-center justify-between px-3 py-2 rounded-[12px] font-mono"
                style={{
                  background: 'rgba(255,255,255,0.78)',
                  backdropFilter: 'blur(6px)',
                  border: `1px solid ${W.border}`,
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: W.ink3,
                }}
              >
                <span style={{ color: s.accent, fontWeight: 700 }}>{s.label}</span>
                <span>{s.sub}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Privacy ──────────────────────────────────────────────────────────────────

function PrivacySection() {
  return (
    <section id="privacy" className="px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-[28px] px-8 py-14 md:px-16 md:py-20"
          style={{
            background: W.paperCardAlt,
            border: `1px solid ${W.borderStrong}`,
            boxShadow: '0 1px 0 rgba(60,42,20,0.06), 0 14px 36px rgba(60,42,20,0.08)',
          }}
        >
          <GrainOverlay opacity={0.06} />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(167,121,28,0.14) 0%, transparent 60%)' }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div
                className="font-mono uppercase mb-4"
                style={{ fontSize: 11, color: W.mustard, letterSpacing: '0.16em' }}
              >
                // 03 — privacy
              </div>
              <h2
                className="font-bebas mb-5"
                style={{ fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 0.95, color: W.ink, letterSpacing: '0.02em' }}
              >
                Built for privacy.
                <br />
                <span style={{ color: W.mustard }}>Not as an afterthought.</span>
              </h2>
              <p className="text-base leading-relaxed max-w-xl mb-4" style={{ color: W.ink3 }}>
                Ticklr stores everything in your phone&apos;s secure local database — Apple SwiftData on iOS, Android
                Room on Android. We have no servers and no analytics — and neither we nor anyone else can access your
                data, because none of it ever leaves your device.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: W.ink4 }}>
                No account to create. No password to forget. No breach to worry about.
              </p>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: W.mustard }}
              >
                Read our full privacy policy →
              </Link>
            </div>

            <div className="grid gap-3">
              {PRIVACY_POINTS.map(([title, sub]) => (
                <div
                  key={title}
                  className="flex items-center gap-4 p-5 rounded-[14px]"
                  style={{ background: 'rgba(255,255,255,0.55)', border: `1px solid ${W.border}` }}
                >
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(167,121,28,0.16)' }}
                  >
                    <CheckIcon size={16} color={W.mustard} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: W.ink }}>
                      {title}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: W.ink3 }}>
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
    <section
      className="relative px-6 md:px-16 py-16 md:py-24 text-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, #FAEED4 0%, #EFEAE0 60%, #EFEAE0 100%)',
        borderTop: `1px solid ${W.border}`,
      }}
    >
      <GrainOverlay opacity={0.05} />
      <div className="relative inline-flex flex-col items-center max-w-3xl mx-auto">
        <div
          className="w-[76px] h-[76px] rounded-[18px] overflow-hidden mb-8"
          style={{ boxShadow: '0 12px 32px rgba(60,42,20,0.25)' }}
        >
          <Image src="/assets/app-icon.png" alt="Ticklr app icon" width={76} height={76} className="w-full h-full" />
        </div>
        <h2
          className="font-bebas mb-4"
          style={{ fontSize: 'clamp(44px, 7vw, 80px)', lineHeight: 0.95, color: W.ink, letterSpacing: '0.02em' }}
        >
          Stay close to your people.
        </h2>
        <p className="text-base mb-9 max-w-xl" style={{ color: W.ink3 }}>
          Free on the App Store and Google Play. No subscription. No tracking. Ever.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="https://apps.apple.com/us/app/ticklr/id6760884034"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-[15px] font-bold transition-all hover:scale-[1.03] hover:brightness-105 active:scale-95"
            style={{ background: W.ink, color: W.paperHighlight, boxShadow: '0 8px 28px rgba(26,31,42,0.28)' }}
          >
            <AppleIcon size={22} />
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.xaymaca.sit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-[15px] font-bold transition-all hover:brightness-95 active:scale-95"
            style={{ background: 'rgba(255,255,255,0.7)', color: W.ink, border: `1px solid ${W.borderStrong}` }}
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
      style={{
        borderTop: `1px solid ${W.border}`,
        color: W.ink4,
        letterSpacing: '0.04em',
        background: W.paperSurface2,
      }}
    >
      <span>© {new Date().getFullYear()} Xaymaca · built with quiet intent · v1.7.0</span>
      <div className="flex gap-5">
        <Link href="/privacy" className="transition-colors hover:text-[color:var(--warm-ink)]">
          ./privacy
        </Link>
        <Link href="/support" className="transition-colors hover:text-[color:var(--warm-ink)]">
          ./support
        </Link>
        <a href="https://xaymaca.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[color:var(--warm-ink)]">
          xaymaca.com
        </a>
      </div>
    </footer>
  )
}
