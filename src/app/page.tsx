import Image from 'next/image'
import Link from 'next/link'

const APP_STORE_URL = 'https://apps.apple.com/us/app/ticklr/id6760884034'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.xaymaca.sit'

function AppleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 22V2l18 10L3 22z" />
    </svg>
  )
}

const TICKLES = [
  { name: 'Keisha Brown', date: '3 days overdue', freq: 'Every 2 weeks', due: true, upcomingBefore: false },
  { name: 'Mei Chen', date: 'Today', freq: 'Weekly', due: true, upcomingBefore: false },
  { name: 'Hannah Fischer', date: 'Tomorrow', freq: 'Every 2 weeks', due: false, upcomingBefore: true },
  { name: 'Aisha Johnson', date: 'In 4 days', freq: 'Monthly', due: false, upcomingBefore: false },
  { name: 'Daniel Kim', date: 'In 9 days', freq: 'Quarterly', due: false, upcomingBefore: false },
]

function AndroidMock({ w, h }: { w: number; h: number }) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: w,
        height: h,
        borderRadius: 36,
        padding: 6,
        background: '#1a1a1f',
        boxShadow: '0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="absolute"
        style={{ top: 18, left: '50%', transform: 'translateX(-50%)', width: 9, height: 9, borderRadius: '50%', background: '#000', zIndex: 2 }}
      />
      <div className="flex flex-col h-full overflow-hidden" style={{ borderRadius: 30, background: '#0A1628' }}>
        <div className="flex justify-between" style={{ padding: '12px 18px 6px', fontFamily: 'Roboto, system-ui, sans-serif', fontSize: 12, fontWeight: 500, color: '#E8EDF5' }}>
          <span>9:30</span>
          <span style={{ display: 'inline-block', width: 16, height: 8, border: '1px solid #E8EDF5', borderRadius: 1, position: 'relative' }}>
            <span style={{ position: 'absolute', inset: 1, background: '#E8EDF5' }} />
          </span>
        </div>
        <div style={{ padding: '14px 18px 8px', fontFamily: 'Roboto, system-ui, sans-serif', fontSize: 22, fontWeight: 700, color: '#E8EDF5' }}>Tickle</div>
        <div style={{ padding: '6px 18px', background: '#1A2E4A', fontFamily: 'Roboto, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 0.6, color: '#F5C842', textTransform: 'uppercase' }}>Due</div>
        <div className="flex-1">
          {TICKLES.map((t) => (
            <div key={t.name}>
              {t.upcomingBefore && (
                <div style={{ padding: '6px 18px', background: '#1A2E4A', fontFamily: 'Roboto, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 0.6, color: '#8FA3BF', textTransform: 'uppercase' }}>Upcoming</div>
              )}
              <div className="flex items-center" style={{ gap: 10, padding: '10px 18px' }}>
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 36, height: 36, borderRadius: 18,
                    background: t.due ? '#F5C842' : '#1A2E4A',
                    color: t.due ? '#0A1628' : '#8FA3BF',
                    fontFamily: 'Roboto, sans-serif', fontSize: 13, fontWeight: 700,
                  }}
                >
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, fontWeight: 600, color: '#E8EDF5' }}>{t.name}</div>
                  <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: 11, color: t.due ? '#F5C842' : '#8FA3BF' }}>{t.date}</div>
                </div>
                <div
                  style={{
                    padding: '2px 7px', borderRadius: 6,
                    background: t.due ? '#F5C842' : '#1A2E4A',
                    color: t.due ? '#0A1628' : '#8FA3BF',
                    fontFamily: 'Roboto, sans-serif', fontSize: 9, fontWeight: 600,
                  }}
                >
                  {t.freq}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute flex items-center justify-center"
          style={{ right: 18, bottom: 70, width: 44, height: 44, borderRadius: 14, background: '#F5C842', boxShadow: '0 4px 8px rgba(0,0,0,0.3)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A1628" aria-hidden>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </div>
        <div className="flex" style={{ background: '#1A2E4A', padding: '10px 0 8px' }}>
          {['Network', 'Tickle', 'Groups', 'Compose', 'Settings'].map((t, i) => (
            <div
              key={t}
              className="flex-1 text-center"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: 9, fontWeight: i === 1 ? 600 : 500, color: i === 1 ? '#E8EDF5' : '#8FA3BF' }}
            >
              <div style={{ width: 32, height: 16, margin: '0 auto 4px', borderRadius: 8, background: i === 1 ? '#1D4ED8' : 'transparent' }} />
              {t}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center" style={{ height: 14, background: '#1A2E4A' }}>
          <div style={{ width: 80, height: 3, borderRadius: 2, background: 'rgba(232,237,245,0.4)' }} />
        </div>
      </div>
    </div>
  )
}

const FEATURES = [
  { id: '01', name: 'Fully Private', desc: 'No accounts, no servers, no tracking. Local SQLite-backed store on each device.', avail: 'iOS · Android' },
  { id: '02', name: 'Import Network', desc: 'iOS contacts, Android phonebook, or LinkedIn CSV. Manual deduplication preserved.', avail: 'iOS · Android' },
  { id: '03', name: 'Tickle Reminders', desc: 'Recurring nudges on your schedule. Daily, weekly, monthly, quarterly, yearly, custom.', avail: 'iOS · Android' },
  { id: '04', name: 'Native Messaging', desc: 'SMS / MMS compose with prefilled recipients & templates. No third-party messaging service.', avail: 'iOS · Android' },
]

const PRIVACY = [
  ['01', 'no servers', 'There is no backend. Every byte of your data lives on your phone.'],
  ['02', 'no accounts', 'Nothing to sign up for. Nothing to forget. Nothing to breach.'],
  ['03', 'no analytics', 'We do not know you exist. We do not count installs, retention, or usage.'],
  ['04', 'no cloud', 'Your contact list never leaves your device. Move phones via local export only.'],
] as const

const FAQ = [
  {
    q: 'Is Ticklr really free?',
    a: 'Yes. Free to download, no in-app purchases, no subscription. Built by Xaymaca as part of our toolkit. We make money elsewhere.',
  },
  {
    q: 'Where does my data live?',
    a: "On your device, in the OS-native local database — Apple SwiftData on iOS, Android Room on Android. Not on our servers, because we don't have any.",
  },
  {
    q: 'Will you add a web version or sync?',
    a: 'No web version, and no cross-device sync. Both would mean a server. The point of Ticklr is that there is no server.',
  },
  {
    q: 'Why is it called "tickle"?',
    a: "A tickle is the gentlest possible nudge. It's a recurring reminder to reach out to someone — not an alert, not a task, not a ping.",
  },
  {
    q: 'Can I use it without giving access to my contacts?',
    a: 'Yes. Add contacts manually, or import from a LinkedIn CSV. Phonebook access is optional.',
  },
]

export default function HomePage() {
  return (
    <div className="bg-bg text-ink">
      {/* ── Spec strip ─────────────────────────────────────────────────────── */}
      <div className="spec-strip border-b border-ink font-mono text-[10px] tracking-[0.02em] text-ink-3">
        <span>TICKLR/INDEX · v1.0.0 · 2026-04-29</span>
        <span className="hidden sm:inline">iOS 17+ · Android 8+ · LOCAL-ONLY</span>
        <span className="sm:text-right">xaymaca/ticklr · 100% on-device</span>
      </div>

      {/* ── Nav ────────────────────────────────────────────────────────────── */}
      <nav className="site-nav border-b border-ink flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3.5 flex-shrink-0">
          <div className="w-9 h-9 border border-ink overflow-hidden flex-shrink-0">
            <Image
              src="/assets/app-icon.png"
              alt=""
              width={36}
              height={36}
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(0.3)' }}
              priority
            />
          </div>
          <span className="font-sans text-[22px] font-extrabold tracking-[-0.02em] lowercase text-ink">
            ticklr<span className="text-amber">.</span>
          </span>
        </Link>

        <div className="hidden lg:flex gap-8 font-mono text-xs text-ink">
          <a href="#index" className="hover:opacity-70 transition-opacity">§01 Index</a>
          <a href="#features" className="hover:opacity-70 transition-opacity">§02 Features</a>
          <a href="#privacy" className="hover:opacity-70 transition-opacity">§03 Privacy</a>
          <a href="#faq" className="hover:opacity-70 transition-opacity">§04 FAQ</a>
          <a href="#download" className="hover:opacity-70 transition-opacity">§05 Download</a>
        </div>

        <div className="flex border border-ink">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-ink border-r border-ink hover:opacity-70 transition-opacity"
            style={{ padding: '10px 16px' }}
          >
            <AppleIcon size={14} /> ./app-store
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold bg-amber text-amber-ink hover:opacity-80 transition-opacity"
            style={{ padding: '10px 16px' }}
          >
            <PlayIcon size={14} /> ./play-store
          </a>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section id="index" className="hero relative border-b border-ink">
        {/* hairline 12-col grid */}
        <div className="absolute inset-0 hidden md:grid pointer-events-none" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} style={{ borderLeft: i > 0 && i < 12 ? '0.5px solid rgba(10,10,10,0.10)' : 'none' }} />
          ))}
        </div>

        <div className="hero-inner relative">
          {/* meta row */}
          <div
            className="hero-meta flex flex-col gap-2 sm:flex-row sm:justify-between font-mono text-[11px] text-ink-3"
            style={{ paddingBottom: 16, borderBottom: '1px solid var(--rule-soft)' }}
          >
            <span>// HERO_001 — public release</span>
            <span className="text-amber font-bold">● NEW: ANDROID v1.0 → SHIPPED</span>
            <span>updated 04.29.2026</span>
          </div>

          {/* wordmark slab */}
          <div className="relative" style={{ padding: '40px 0 24px' }}>
            <h1
              className="font-sans font-black lowercase text-ink m-0"
              style={{
                fontSize: 'clamp(72px, 19.4vw, 280px)',
                lineHeight: 0.82,
                letterSpacing: '-0.06em',
              }}
            >
              your<br />
              people<br />
              matter<span className="text-amber">.</span>
            </h1>

            {/* phone cutout — only on extra-wide screens where the text leaves room */}
            <div className="hero-phone hidden xl:block absolute" style={{ right: 32, top: 60 }}>
              <div className="relative" style={{ padding: 12, border: '1px solid var(--ink)', background: 'var(--bg)' }}>
                <AndroidMock w={240} h={500} />
                <div
                  className="absolute font-mono font-bold bg-amber text-amber-ink"
                  style={{ top: -18, left: -1, fontSize: 10, padding: '3px 10px', letterSpacing: '0.05em' }}
                >
                  FIG.01 — TICKLE / ANDROID / DARK
                </div>
              </div>
            </div>
          </div>

          {/* spec block */}
          <div className="hero-spec">
            <div className="hero-col hero-col-desc">
              <div className="font-mono text-[11px] text-ink-4 mb-2">// description</div>
              <p className="font-sans text-[19px] leading-[1.5] text-ink m-0 font-medium">
                Private contact reminders for the relationships that matter most.
                <br />
                <span className="text-ink-3">Everything stays on your device. No accounts. No cloud. No analytics.</span>
              </p>
            </div>

            <div className="hero-col hero-col-install">
              <div className="font-mono text-[11px] text-ink-4 mb-3">// install</div>
              <div className="flex flex-col border border-ink">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2.5 font-mono text-[13px] text-ink border-b border-ink hover:opacity-70 transition-opacity"
                  style={{ padding: '12px 14px' }}
                >
                  <span className="flex items-center gap-2.5"><AppleIcon size={16} /> App Store</span>
                  <span className="text-ink-4">↘</span>
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2.5 font-mono text-[13px] font-bold bg-amber text-amber-ink hover:opacity-80 transition-opacity"
                  style={{ padding: '12px 14px' }}
                >
                  <span className="flex items-center gap-2.5"><PlayIcon size={15} /> Google Play</span>
                  <span>↘ NEW</span>
                </a>
              </div>
            </div>

            <div className="hero-col hero-col-guarantees">
              <div className="font-mono text-[11px] text-ink-4 mb-3">// guarantees</div>
              <div className="grid grid-cols-2" style={{ gap: 12 }}>
                {[['00', 'servers'], ['00', 'accounts'], ['00', 'tracking'], ['100', 'local %']].map(([n, l]) => (
                  <div key={l} className="flex items-baseline gap-2">
                    <span className="font-sans text-ink" style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.04em' }}>{n}</span>
                    <span className="font-mono text-[11px] text-ink-3">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── §02 Feature Index ──────────────────────────────────────────────── */}
      <section id="features" className="border-b border-ink">
        <div className="section-head flex justify-between items-baseline">
          <h2
            className="font-sans font-black lowercase text-ink m-0"
            style={{ fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.04em' }}
          >
            §02 — feature index
          </h2>
          <div className="font-mono text-[11px] text-ink-3 hidden sm:block">4 entries · sorted by id</div>
        </div>

        <div className="feature-table-head font-mono uppercase text-ink-4">
          <span>id</span><span>name</span><span>description</span><span>availability</span><span className="text-right">→</span>
        </div>

        {FEATURES.map((f, i) => (
          <div
            key={f.id}
            className="feature-row"
            style={{ borderBottom: i < FEATURES.length - 1 ? '1px solid var(--rule-soft)' : 'none' }}
          >
            <span className="font-mono font-bold text-amber" style={{ fontSize: 14 }}>§{f.id}</span>
            <span className="font-sans font-bold text-ink" style={{ fontSize: 22, letterSpacing: '-0.01em' }}>{f.name}</span>
            <span className="font-sans text-ink-3" style={{ fontSize: 14, lineHeight: 1.55 }}>{f.desc}</span>
            <span className="feature-avail font-mono text-ink-3" style={{ fontSize: 11 }}>● {f.avail}</span>
            <span className="feature-arrow text-right font-mono text-ink" style={{ fontSize: 16 }}>→</span>
          </div>
        ))}
      </section>

      {/* ── Android launch strip (amber) ───────────────────────────────────── */}
      <section className="android-strip border-b border-ink" style={{ background: '#F5C842', color: '#1a1a1a' }}>
        <div className="android-strip-inner">
          <div>
            <div className="font-mono uppercase mb-4" style={{ fontSize: 11, letterSpacing: '0.16em' }}>
              // announcement / 2026-04-29
            </div>
            <h2
              className="font-sans font-black lowercase m-0"
              style={{ fontSize: 'clamp(56px, 10vw, 144px)', lineHeight: 0.85, letterSpacing: '-0.05em' }}
            >
              now on
              <br />
              <span style={{ textDecoration: 'underline', textDecorationThickness: '8px', textUnderlineOffset: '12px' }}>
                android.
              </span>
            </h2>
            <p className="font-sans m-0" style={{ fontSize: 18, lineHeight: 1.55, marginTop: 28, maxWidth: 540, color: '#1a1a1a' }}>
              One quiet companion, native to both phones. Built ground-up in Jetpack Compose. Stores everything locally with Room. The privacy story is identical to iOS — there is no server.
            </p>
            <div className="inline-flex flex-wrap mt-8" style={{ border: '1.5px solid #0a0a0a' }}>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-mono font-bold hover:opacity-80 transition-opacity"
                style={{ padding: '14px 22px', fontSize: 13, color: '#0a0a0a', borderRight: '1.5px solid #0a0a0a' }}
              >
                <PlayIcon size={16} /> install on android
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2.5 font-mono hover:opacity-80 transition-opacity"
                style={{ padding: '14px 22px', fontSize: 13, color: '#0a0a0a' }}
              >
                read changelog →
              </a>
            </div>
          </div>

          <div className="android-strip-phone hidden md:flex justify-end">
            <div className="relative" style={{ padding: 16, background: 'var(--bg)', border: '1.5px solid var(--ink)' }}>
              <AndroidMock w={260} h={520} />
              <div
                className="absolute font-mono font-bold"
                style={{ bottom: -1, right: -1, fontSize: 10, padding: '4px 10px', background: '#0a0a0a', color: '#F5C842' }}
              >
                FIG.02 — ANDROID
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── §03 Privacy Manifesto (dark) ───────────────────────────────────── */}
      <section id="privacy" className="privacy border-b border-ink" style={{ background: '#0a0a0a', color: '#fafaf7' }}>
        <div className="privacy-inner">
          <div className="privacy-header">
            <h2
              className="font-sans font-black lowercase m-0"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.9, letterSpacing: '-0.04em' }}
            >
              §03 privacy
              <br />
              manifesto.
            </h2>
            <p className="font-sans m-0 self-end" style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(250,250,247,0.7)' }}>
              We don&apos;t have a privacy policy that lets us collect your data and explain it later. We have an architecture that makes collecting impossible.
            </p>
          </div>

          <div className="privacy-grid" style={{ borderTop: '1px solid rgba(250,250,247,0.2)' }}>
            {PRIVACY.map(([n, t, b]) => (
              <div key={n} className="privacy-cell" style={{ padding: '32px 24px' }}>
                <div className="font-mono text-amber mb-6" style={{ fontSize: 13 }}>{n}.</div>
                <div className="font-sans lowercase mb-3" style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>
                  {t}
                </div>
                <p className="font-sans m-0" style={{ fontSize: 13, lineHeight: 1.55, color: 'rgba(250,250,247,0.7)' }}>{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/privacy"
              className="font-mono inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ fontSize: 12, color: 'rgba(250,250,247,0.7)' }}
            >
              read full privacy policy →
            </Link>
          </div>
        </div>
      </section>

      {/* ── §04 Q&A ────────────────────────────────────────────────────────── */}
      <section id="faq" className="border-b border-ink">
        <div className="section-head flex justify-between items-baseline border-b border-ink">
          <h2
            className="font-sans font-black lowercase text-ink m-0"
            style={{ fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.04em' }}
          >
            §04 — q&amp;a
          </h2>
          <div className="font-mono text-[11px] text-ink-3 hidden sm:block">{FAQ.length} entries</div>
        </div>

        {FAQ.map((f, i) => (
          <div
            key={f.q}
            className="faq-row"
            style={{ borderBottom: i < FAQ.length - 1 ? '1px solid var(--rule-soft)' : 'none' }}
          >
            <div className="font-mono font-bold text-amber" style={{ fontSize: 13 }}>
              q.{String(i + 1).padStart(2, '0')}
            </div>
            <div className="font-sans font-bold text-ink" style={{ fontSize: 22, letterSpacing: '-0.015em' }}>{f.q}</div>
            <div className="font-sans text-ink-3" style={{ fontSize: 14, lineHeight: 1.6 }}>{f.a}</div>
          </div>
        ))}
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section id="download" className="final-cta text-center border-b border-ink">
        <h2
          className="font-sans font-black lowercase text-ink m-0"
          style={{
            fontSize: 'clamp(96px, 14vw, 200px)',
            lineHeight: 0.85,
            letterSpacing: '-0.05em',
            marginBottom: 32,
          }}
        >
          install<span className="text-amber">.</span>
        </h2>
        <p className="font-sans text-ink-3 m-0" style={{ fontSize: 18, marginBottom: 36 }}>
          Free. No subscription. No tracking, ever.
        </p>
        <div className="inline-flex flex-wrap justify-center" style={{ border: '1.5px solid var(--ink)' }}>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono font-bold text-ink hover:opacity-70 transition-opacity"
            style={{ padding: '18px 28px', fontSize: 14, borderRight: '1.5px solid var(--ink)' }}
          >
            <AppleIcon size={18} /> App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono font-bold bg-amber text-amber-ink hover:opacity-80 transition-opacity"
            style={{ padding: '18px 28px', fontSize: 14 }}
          >
            <PlayIcon size={16} /> Google Play · NEW
          </a>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="footer-grid font-mono text-ink-3" style={{ fontSize: 11 }}>
        <span>© 2026 xaymaca</span>
        <Link href="/privacy" className="hover:text-ink transition-colors">./privacy-policy</Link>
        <Link href="/support" className="hover:text-ink transition-colors">./support</Link>
        <span className="text-right">built with quiet intent · v1.0.0</span>
      </footer>
    </div>
  )
}
