'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Fully Private',
    body: 'Everything lives on your device. No accounts, no servers, no tracking. Your contacts are yours — forever.',
    color: 'text-blue-400',
    border: 'border-blue-900/40',
    bg: 'bg-blue-950/20',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Import Your Network',
    body: 'Bring in contacts from your iPhone or a LinkedIn CSV export. Ticklr organizes them your way — no merge conflicts.',
    color: 'text-violet-400',
    border: 'border-violet-900/40',
    bg: 'bg-violet-950/20',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Tickle Reminders',
    body: 'Set recurring nudges to reach out. Call dad every Sunday. Check in with a colleague every quarter. Never let a relationship drift.',
    color: 'text-amber-400',
    border: 'border-amber-900/40',
    bg: 'bg-amber-950/20',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Native Messaging',
    body: 'Compose SMS and MMS directly from your contact list. Pre-fill recipients and draft message templates without switching apps.',
    color: 'text-emerald-400',
    border: 'border-emerald-900/40',
    bg: 'bg-emerald-950/20',
  },
]

const trustPills = [
  { label: '0 servers', sub: 'No backend' },
  { label: '0 accounts', sub: 'No signup' },
  { label: '0 tracking', sub: 'No analytics' },
  { label: '100% local', sub: 'On-device only' },
]

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AppleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 22V2l18 10L3 22z" />
    </svg>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-200 overflow-x-hidden" style={{ backgroundColor: '#080c14' }}>

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        {/* backdrop blur pill */}
        <div className="absolute inset-0 rounded-none backdrop-blur-md" style={{ backgroundColor: 'rgba(8,12,20,0.8)', borderBottom: '1px solid rgba(255,255,255,0.05)' }} />

        <div className="relative flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/assets/app-icon.png"
              alt="Ticklr"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bebas text-xl tracking-widest text-white">Ticklr</span>
        </div>

        <a
          href="https://apps.apple.com/us/app/ticklr/id6760884034"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-stone-900 transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ backgroundColor: '#F5C842' }}
        >
          <AppleIcon size={16} />
          Download
        </a>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 max-w-6xl mx-auto">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.14) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative flex flex-col items-center text-center">
          {/* App icon badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-blue-300"
              style={{ backgroundColor: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse inline-block" />
              Available on iOS · Android coming soon
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-bebas text-7xl sm:text-8xl md:text-[110px] leading-none tracking-wide text-white mb-5"
          >
            Your People{' '}
            <span style={{ color: '#F5C842' }}>Matter.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-10"
          >
            Private contact reminders for the relationships that matter most.
            <br className="hidden sm:block" />
            <span className="text-slate-300">On your device. Nowhere else.</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap items-center justify-center gap-4 mb-6"
          >
            <a
              href="https://apps.apple.com/us/app/ticklr/id6760884034"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold text-stone-900 transition-all duration-200 hover:scale-105 active:scale-95 hover:brightness-110"
              style={{ backgroundColor: '#F5C842', boxShadow: '0 4px 24px rgba(245,200,66,0.25)' }}
            >
              <AppleIcon size={20} />
              <span>Download on the App Store</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold text-slate-400 cursor-not-allowed"
              style={{ border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.04)' }}
              onClick={(e) => e.preventDefault()}
            >
              <PlayIcon size={18} />
              <span>Google Play — Coming Soon</span>
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="text-xs text-slate-600 mb-16"
          >
            Free to download. No account required.
          </motion.p>
        </div>

        {/* ── App Preview Image ──────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="relative mx-auto max-w-5xl"
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(37,99,235,0.25)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(37,99,235,0.1)',
            }}
          >
            {/* Top bar chrome */}
            <div
              className="flex items-center gap-1.5 px-4 py-3"
              style={{ backgroundColor: 'rgba(15,22,35,0.95)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28C840' }} />
            </div>
            <Image
              src="/assets/app-preview.jpg"
              alt="Ticklr app — contact list and reminder view"
              width={2528}
              height={1684}
              className="w-full h-auto block"
              priority
              quality={90}
            />
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(8,12,20,0.8))' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── Trust pills ─────────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {trustPills.map((pill, i) => (
              <motion.div
                key={pill.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col items-center justify-center py-5 px-4 rounded-2xl text-center"
                style={{
                  backgroundColor: 'rgba(15,22,35,0.7)',
                  border: '1px solid rgba(37,99,235,0.15)',
                }}
              >
                <span className="font-bebas text-3xl tracking-wide text-white">{pill.label}</span>
                <span className="text-xs text-slate-500 mt-0.5">{pill.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-28 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#2563EB', backgroundColor: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}
          >
            Features
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white">
            Everything you need.<br />
            <span className="text-slate-500">Nothing you don&apos;t.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              className={`rounded-2xl p-7 ${f.bg}`}
              style={{ border: `1px solid var(--tw-border-opacity, 1)`, borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div className={`mb-4 ${f.color}`}>{f.icon}</div>
              <h3 className={`font-bebas text-2xl tracking-wide mb-2 ${f.color}`}>{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Privacy Section ─────────────────────────────────────────────────── */}
      <section className="px-6 pb-28 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(14,21,38,0.95) 0%, rgba(8,15,30,0.95) 100%)',
            border: '1px solid rgba(37,99,235,0.2)',
            boxShadow: '0 0 80px rgba(37,99,235,0.08)',
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Lock icon */}
          <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
            style={{ backgroundColor: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h2 className="relative font-bebas text-5xl md:text-6xl tracking-wide text-white mb-5">
            Built for privacy.<br />
            <span style={{ color: '#F5C842' }}>Not as an afterthought.</span>
          </h2>
          <p className="relative text-slate-400 text-base leading-relaxed max-w-2xl mx-auto mb-3">
            Ticklr stores everything in your phone&apos;s secure local database — Apple SwiftData on iOS, Android Room on Android. We have no servers and no analytics — and neither we nor anyone else can access your data, because none of it ever leaves your device.
          </p>
          <p className="relative text-slate-500 text-sm leading-relaxed max-w-xl mx-auto mb-8">
            No account to create. No password to forget. No breach to worry about.
          </p>

          <Link
            href="/privacy"
            className="relative inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: '#2563EB' }}
          >
            Read our full privacy policy
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────────── */}
      <section className="px-6 pb-32 max-w-3xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-[22px] overflow-hidden shadow-2xl" style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}>
              <Image
                src="/assets/app-icon.png"
                alt="Ticklr app icon"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-white mb-4">
            Stay close to your people.
          </h2>
          <p className="text-slate-400 mb-10 text-base">
            Free on the App Store. No subscription. No tracking. Ever.
          </p>
          <a
            href="https://apps.apple.com/us/app/ticklr/id6760884034"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-stone-900 transition-all duration-200 hover:scale-105 active:scale-95 hover:brightness-110"
            style={{ backgroundColor: '#F5C842', boxShadow: '0 6px 32px rgba(245,200,66,0.3)' }}
          >
            <AppleIcon size={22} />
            Download on the App Store
          </a>
        </motion.div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded overflow-hidden">
            <Image src="/assets/app-icon.png" alt="" width={20} height={20} className="w-full h-full object-cover" />
          </div>
          <span>© {new Date().getFullYear()} Xaymaca. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link href="/support" className="hover:text-slate-300 transition-colors">Support</Link>
          <a href="https://xaymaca.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Xaymaca</a>
        </div>
      </footer>
    </div>
  )
}
