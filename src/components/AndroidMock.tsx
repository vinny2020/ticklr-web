import * as React from 'react'

export type AndroidScreen = 'network' | 'tickle' | 'compose' | 'settings'

const M3_BG = '#0A1628'
const M3_SURFACE = '#0F1F35'
const M3_SURFACE_VARIANT = '#1A2E4A'
const M3_PRIMARY = '#1D4ED8'
const M3_ON_BG = '#E8EDF5'
const M3_ON_VARIANT = '#8FA3BF'
const M3_OUTLINE = 'rgba(143,163,191,0.32)'
const AMBER = '#F5C842'

const A_TABS: Array<{ key: AndroidScreen | 'groups'; label: string }> = [
  { key: 'network', label: 'Network' },
  { key: 'tickle', label: 'Tickle' },
  { key: 'groups', label: 'Groups' },
  { key: 'compose', label: 'Compose' },
  { key: 'settings', label: 'Settings' },
]

const CONTACTS = [
  { name: 'Mei Chen', sub: 'Notion', initials: 'MC', tint: '#2563EB' },
  { name: 'Keisha Brown', sub: '3 days overdue', initials: 'KB', tint: AMBER, due: true, freq: 'Every 2 weeks' },
  { name: 'Hannah Fischer', sub: 'Tomorrow', initials: 'HF', tint: '#1A2E4A', freq: 'Every 2 weeks' },
  { name: 'Daniel Kim', sub: 'Shopify', initials: 'DK', tint: '#2563EB' },
  { name: 'Aisha Johnson', sub: 'In 4 days', initials: 'AJ', tint: '#1A2E4A', freq: 'Monthly' },
]

const TICKLES = [
  { name: 'Keisha Brown', date: '3 days overdue', freq: 'Every 2 weeks', due: true },
  { name: 'Mei Chen', date: 'Today', freq: 'Weekly', due: true },
  { name: 'Hannah Fischer', date: 'Tomorrow', freq: 'Every 2 weeks' },
  { name: 'Aisha Johnson', date: 'In 4 days', freq: 'Monthly' },
  { name: 'Daniel Kim', date: 'In 9 days', freq: 'Quarterly' },
]

function NetworkBody() {
  return (
    <>
      <div style={{ padding: '14px 18px 8px', fontSize: 22, fontWeight: 700, color: M3_ON_BG }}>Network</div>
      <div style={{ margin: '0 18px 10px', padding: '8px 12px', borderRadius: 10, background: M3_SURFACE_VARIANT, color: M3_ON_VARIANT, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={M3_ON_VARIANT} strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="M16.5 16.5L21 21" strokeLinecap="round" />
        </svg>
        Search your network
      </div>
      <div style={{ flex: 1 }}>
        {CONTACTS.map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 18px' }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                background: c.tint === '#1A2E4A' ? M3_SURFACE_VARIANT : c.tint,
                color: c.tint === AMBER ? '#0A1628' : '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {c.initials}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: M3_ON_BG }}>{c.name}</div>
              <div style={{ fontSize: 11, color: c.due ? AMBER : M3_ON_VARIANT }}>{c.sub}</div>
            </div>
            {c.freq && (
              <div
                style={{
                  padding: '2px 7px',
                  borderRadius: 6,
                  background: c.due ? AMBER : M3_SURFACE_VARIANT,
                  color: c.due ? '#0A1628' : M3_ON_VARIANT,
                  fontSize: 9,
                  fontWeight: 600,
                }}
              >
                {c.freq}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

function TickleBody() {
  return (
    <>
      <div style={{ padding: '14px 18px 8px', fontSize: 22, fontWeight: 700, color: M3_ON_BG }}>Tickle</div>
      <div style={{ padding: '6px 18px', background: M3_SURFACE_VARIANT, fontSize: 10, fontWeight: 700, letterSpacing: 0.6, color: AMBER, textTransform: 'uppercase' }}>Due</div>
      <div style={{ flex: 1 }}>
        {TICKLES.map((t, i) => (
          <React.Fragment key={i}>
            {i === 2 && (
              <div style={{ padding: '6px 18px', background: M3_SURFACE_VARIANT, fontSize: 10, fontWeight: 700, letterSpacing: 0.6, color: M3_ON_VARIANT, textTransform: 'uppercase' }}>Upcoming</div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 18px' }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  background: t.due ? AMBER : M3_SURFACE_VARIANT,
                  color: t.due ? '#0A1628' : M3_ON_VARIANT,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 13,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {t.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: M3_ON_BG }}>{t.name}</div>
                <div style={{ fontSize: 11, color: t.due ? AMBER : M3_ON_VARIANT }}>{t.date}</div>
              </div>
              <div
                style={{
                  padding: '2px 7px',
                  borderRadius: 6,
                  background: t.due ? AMBER : M3_SURFACE_VARIANT,
                  color: t.due ? '#0A1628' : M3_ON_VARIANT,
                  fontSize: 9,
                  fontWeight: 600,
                }}
              >
                {t.freq}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

function ComposeBody() {
  return (
    <>
      <div style={{ padding: '14px 18px 8px', fontSize: 22, fontWeight: 700, color: M3_ON_BG }}>Compose</div>
      <div style={{ padding: '4px 18px 14px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div>
          <div style={{ fontSize: 10, color: M3_ON_VARIANT, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.6, fontWeight: 600 }}>To</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px 4px 4px', background: M3_SURFACE, borderRadius: 16, border: `1px solid ${M3_SURFACE_VARIANT}` }}>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#2563EB', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>MC</span>
            <span style={{ color: M3_ON_BG, fontSize: 12, fontWeight: 500 }}>Mei Chen</span>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, color: M3_ON_VARIANT, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.6, fontWeight: 600 }}>Message</div>
          <div style={{ padding: 10, borderRadius: 10, background: M3_SURFACE, border: `1px solid ${M3_SURFACE_VARIANT}`, color: M3_ON_BG, fontSize: 12, lineHeight: 1.45, minHeight: 90 }}>
            Hey! Saw your post about the new project — wanted to check in and hear how it&apos;s going.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {['Quick hello', 'Work check-in', 'Birthday'].map((c) => (
            <div key={c} style={{ padding: '4px 10px', borderRadius: 10, border: `1px solid ${M3_OUTLINE}`, color: M3_ON_BG, fontSize: 10 }}>
              {c}
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '10px 18px 14px', display: 'flex', gap: 8, borderTop: `1px solid ${M3_SURFACE_VARIANT}` }}>
        <div style={{ flex: 1, height: 36, borderRadius: 18, border: `1px solid ${M3_OUTLINE}`, background: 'transparent', color: M3_ON_BG, fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Save draft</div>
        <div style={{ flex: 1, height: 36, borderRadius: 18, background: M3_PRIMARY, color: '#fff', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Send via SMS</div>
      </div>
    </>
  )
}

function SettingsBody() {
  const Row = ({ title, subtitle, last }: { title: string; subtitle?: string; last?: boolean }) => (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 18px' }}>
        <div style={{ width: 32, height: 32, borderRadius: 16, background: M3_SURFACE_VARIANT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, background: M3_PRIMARY }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: M3_ON_BG }}>{title}</div>
          {subtitle && <div style={{ fontSize: 11, color: M3_ON_VARIANT }}>{subtitle}</div>}
        </div>
      </div>
      {!last && <div style={{ marginLeft: 62, height: 1, background: M3_SURFACE_VARIANT }} />}
    </>
  )
  const SH = ({ title }: { title: string }) => (
    <div style={{ padding: '14px 18px 6px', fontSize: 11, fontWeight: 700, color: M3_PRIMARY, textTransform: 'uppercase', letterSpacing: 0.6 }}>{title}</div>
  )
  return (
    <>
      <div style={{ padding: '14px 18px 8px', fontSize: 22, fontWeight: 700, color: M3_ON_BG }}>Settings</div>
      <div style={{ flex: 1 }}>
        <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: '#0A1628', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${M3_SURFACE_VARIANT}` }}>
            <span style={{ fontFamily: 'var(--font-bebas)', fontSize: 22, color: AMBER, letterSpacing: '0.04em' }}>T</span>
          </div>
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 22, color: M3_ON_BG, letterSpacing: '0.04em' }}>TICKLR</div>
          <div style={{ fontSize: 9, color: M3_ON_VARIANT, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Your People Matter</div>
        </div>
        <SH title="Account" />
        <Row title="Import contacts" subtitle="LinkedIn, CSV, phone" />
        <Row title="Message templates" subtitle="Manage your quick sends" />
        <Row title="Notifications" subtitle="Alarm & Worker settings" last />
        <SH title="About" />
        <Row title="Version" subtitle="1.0.0" />
        <Row title="Built by Xaymaca" last />
      </div>
    </>
  )
}

const BODIES: Record<AndroidScreen, React.ComponentType> = {
  network: NetworkBody,
  tickle: TickleBody,
  compose: ComposeBody,
  settings: SettingsBody,
}

export default function AndroidMock({ w = 320, h = 660, screen = 'tickle' }: { w?: number; h?: number; screen?: AndroidScreen }) {
  const Body = BODIES[screen]
  const showFAB = screen === 'tickle' || screen === 'network'
  const activeKey = screen
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: 36,
        padding: 6,
        background: '#1a1a1f',
        boxShadow: '0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)',
        flexShrink: 0,
        position: 'relative',
        fontFamily: 'Roboto, system-ui, sans-serif',
      }}
    >
      <div style={{ position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)', width: 9, height: 9, borderRadius: '50%', background: '#000', zIndex: 2 }} />
      <div style={{ borderRadius: 30, overflow: 'hidden', background: M3_BG, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 18px 4px', fontSize: 12, fontWeight: 500, color: M3_ON_BG }}>
          <span>9:30</span>
          <span style={{ display: 'inline-block', width: 16, height: 8, border: `1px solid ${M3_ON_BG}`, borderRadius: 1, position: 'relative' }}>
            <span style={{ position: 'absolute', inset: 1, background: M3_ON_BG, borderRadius: 0.5 }} />
          </span>
        </div>
        <Body />
        {showFAB && (
          <div style={{ position: 'absolute', right: 18, bottom: 70, width: 44, height: 44, borderRadius: 14, background: AMBER, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A1628">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
        )}
        <div style={{ display: 'flex', background: M3_SURFACE_VARIANT, padding: '10px 0 8px' }}>
          {A_TABS.map((t) => {
            const isActive = t.key === activeKey
            return (
              <div key={t.key} style={{ flex: 1, textAlign: 'center', fontSize: 9, fontWeight: isActive ? 600 : 500, color: isActive ? M3_ON_BG : M3_ON_VARIANT }}>
                <div style={{ width: 32, height: 16, margin: '0 auto 4px', borderRadius: 8, background: isActive ? M3_PRIMARY : 'transparent' }} />
                {t.label}
              </div>
            )
          })}
        </div>
        <div style={{ height: 14, display: 'flex', justifyContent: 'center', alignItems: 'center', background: M3_SURFACE_VARIANT }}>
          <div style={{ width: 80, height: 3, borderRadius: 2, background: 'rgba(232,237,245,0.4)' }} />
        </div>
      </div>
    </div>
  )
}
