import * as React from 'react'

export type IOSScreen = 'network' | 'tickle' | 'compose' | 'settings' | 'groups'

const INDIGO = '#5E5CE6'

const theme = {
  bg: '#000000',
  card: '#1C1C1E',
  card2: '#2C2C2E',
  ink: '#FFFFFF',
  inkMuted: 'rgba(235,235,245,0.60)',
  inkFaint: 'rgba(235,235,245,0.30)',
  hair: 'rgba(84,84,88,0.32)',
  avatarBg: 'rgba(94,92,230,0.18)',
  avatarInk: '#A8A6FF',
  tabBarBg: 'rgba(28,28,30,0.92)',
  tabPill: 'rgba(120,120,128,0.32)',
  statusFg: '#FFFFFF',
}

const TABS: Array<{ key: IOSScreen; label: string }> = [
  { key: 'network', label: 'Network' },
  { key: 'groups', label: 'Groups' },
  { key: 'tickle', label: 'Tickle' },
  { key: 'compose', label: 'Compose' },
  { key: 'settings', label: 'Settings' },
]

const TAB_ICONS: Record<IOSScreen, (c: string) => React.ReactNode> = {
  network: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M14.5 17.5c.5-1.8 2.2-3 4.5-3 1 0 2 .3 2.5.6" />
    </svg>
  ),
  groups: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={c} stroke="none">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.4" />
      <path d="M3 18.5c0-2.6 2.7-4.5 6-4.5s6 1.9 6 4.5V20H3v-1.5z" />
      <path d="M16 14c2.3 0 4.5 1.4 4.7 3.6.05.5-.32.9-.83.9H17V18c0-1.6-.6-3-1.5-3.9.16-.06.33-.1.5-.1z" />
    </svg>
  ),
  tickle: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9z" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  ),
  compose: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h4l11-11-4-4L4 16v4z" />
      <path d="M14 7l3 3" />
    </svg>
  ),
  settings: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.7l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.7-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.7.3l-.1.1A2 2 0 1 1 4.6 17l.1-.1a1.6 1.6 0 0 0 .3-1.7 1.6 1.6 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.7l-.1-.1A2 2 0 1 1 7 4.6l.1.1a1.6 1.6 0 0 0 1.7.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.7-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.7V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
    </svg>
  ),
}

const NETWORK = [
  { letter: 'T', name: 'Tunde', hasPhone: true },
  { letter: '?', name: 'Lakemont', hasPhone: true, hasWork: true, faded: true },
  { letter: 'L', name: 'Longs', hasPhone: true },
  { letter: 'K', name: 'Kate', hasPhone: true },
  { letter: '?', name: 'Apple Inc.', hasPhone: true, hasWork: true, faded: true },
  { letter: 'C', name: 'Chase', hasPhone: true },
  { letter: 'FF', name: 'Ford Factory Lofts', hasPhone: true },
  { letter: 'AO', name: "Allison's Other Phone", hasPhone: true },
]

const TICKLES = [
  { letter: 'EG', name: 'Eden Grace', freq: 'Weekly', when: 'In 2d', note: 'Call daughter' },
  { letter: 'TB', name: 'TieuAnh Barcelona Nerd', freq: 'Weekly', when: 'In 3d', note: 'Hiking?' },
]

const GROUPS = [
  { emoji: '🏠', name: 'Family', count: 2 },
  { emoji: '💡', name: 'Inventors', count: 3 },
  { emoji: '🍕', name: 'The fellas', count: 6 },
]

function AvatarLetter({ text, faded }: { text: string; faded?: boolean }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 18,
        background: theme.avatarBg,
        color: theme.avatarInk,
        opacity: faded ? 0.55 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700,
        flexShrink: 0,
      }}
    >
      {text}
    </div>
  )
}

function PlusButton() {
  return (
    <div style={{ width: 32, height: 32, borderRadius: 16, background: theme.card, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={INDIGO} strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
    </div>
  )
}

function IOSCard({ children }: { children: React.ReactNode }) {
  return <div style={{ margin: '0 14px 14px', background: theme.card, borderRadius: 12, overflow: 'hidden' }}>{children}</div>
}

function LargeTitle({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div style={{ padding: '4px 18px 14px', display: 'flex', alignItems: 'flex-end', gap: 8 }}>
      <div style={{ flex: 1, fontSize: 32, fontWeight: 700, color: theme.ink, letterSpacing: '-0.02em' }}>{children}</div>
      {right}
    </div>
  )
}

function NetworkBody() {
  return (
    <>
      <div style={{ padding: '4px 18px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 32 }} />
        <div style={{ fontSize: 17, fontWeight: 600, color: theme.ink }}>Network</div>
        <PlusButton />
      </div>
      <div style={{ margin: '0 14px 12px', padding: '8px 14px', borderRadius: 16, background: theme.card, fontSize: 14, color: theme.inkMuted, display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={theme.inkMuted} strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M16.5 16.5L21 21" />
        </svg>
        Search your network
      </div>
      <IOSCard>
        {NETWORK.map((c, i, arr) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', position: 'relative' }}>
            <AvatarLetter text={c.letter} faded={c.faded} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: c.faded ? 500 : 600, color: c.faded ? theme.inkMuted : theme.ink }}>{c.name}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: theme.inkFaint }}>
              {c.hasPhone && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1 0 9.4 7.6 17 17 17 .5 0 1-.5 1-1v-3.5c0-.5-.5-.9-1-.9z" />
                </svg>
              )}
              {c.hasWork && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z" />
                </svg>
              )}
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M1 1l5 5.5L1 12" stroke={theme.inkFaint} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            {i < arr.length - 1 && <div style={{ position: 'absolute', left: 62, right: 0, bottom: 0, height: 0.5, background: theme.hair }} />}
          </div>
        ))}
      </IOSCard>
    </>
  )
}

function TickleBody() {
  return (
    <>
      <LargeTitle right={<PlusButton />}>Tickle</LargeTitle>
      <div style={{ padding: '0 28px 8px', fontSize: 15, color: theme.inkMuted }}>Upcoming</div>
      <IOSCard>
        {TICKLES.map((t, i, arr) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 14px', position: 'relative' }}>
            <AvatarLetter text={t.letter} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: theme.ink, marginBottom: 2 }}>{t.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                <span style={{ padding: '2px 8px', borderRadius: 5, background: theme.card2, color: theme.inkMuted, fontSize: 10, fontWeight: 500 }}>{t.freq}</span>
                <span style={{ fontSize: 12, color: theme.inkMuted }}>{t.when}</span>
              </div>
              <div style={{ fontSize: 13, color: theme.inkMuted }}>{t.note}</div>
            </div>
            <div style={{ width: 24, height: 24, borderRadius: 12, border: `1.5px solid ${theme.inkFaint}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }} />
            {i < arr.length - 1 && <div style={{ position: 'absolute', left: 62, right: 0, bottom: 0, height: 0.5, background: theme.hair }} />}
          </div>
        ))}
      </IOSCard>
    </>
  )
}

function GroupsBody() {
  return (
    <>
      <div style={{ padding: '4px 18px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 32 }} />
        <div style={{ fontSize: 17, fontWeight: 600, color: theme.ink }}>Groups</div>
        <PlusButton />
      </div>
      <IOSCard>
        {GROUPS.map((g, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', position: 'relative' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: theme.card2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, lineHeight: 1, flexShrink: 0 }}>{g.emoji}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 500, color: theme.ink }}>{g.name}</div>
              <div style={{ fontSize: 12, color: theme.inkMuted }}>{g.count} contacts</div>
            </div>
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
              <path d="M1 1l5 5.5L1 12" stroke={theme.inkFaint} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {i < GROUPS.length - 1 && <div style={{ position: 'absolute', left: 56, right: 0, bottom: 0, height: 0.5, background: theme.hair }} />}
          </div>
        ))}
      </IOSCard>
    </>
  )
}

function ComposeBody() {
  return (
    <>
      <div style={{ padding: '4px 14px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ padding: '5px 16px', borderRadius: 14, background: theme.card, fontSize: 14, color: theme.ink }}>Cancel</div>
      </div>
      <LargeTitle>Compose</LargeTitle>
      <div style={{ padding: '0 18px 6px', fontSize: 13, color: theme.inkMuted }}>To</div>
      <div style={{ margin: '0 14px 14px', padding: '12px 14px', borderRadius: 10, background: theme.card, fontSize: 15, color: theme.ink }}>Clarence</div>
      <div style={{ padding: '0 18px 6px', fontSize: 13, color: theme.inkMuted }}>Template</div>
      <div style={{ margin: '0 14px 14px', padding: '12px 14px', borderRadius: 10, background: theme.card, fontSize: 15, color: INDIGO }}>Checking in</div>
      <div style={{ padding: '0 18px 6px', fontSize: 13, color: theme.inkMuted }}>Message</div>
      <div style={{ margin: '0 14px 14px', padding: '12px 14px', borderRadius: 10, background: theme.card, fontSize: 14, color: theme.ink, lineHeight: 1.4, minHeight: 90 }}>
        Hey, just wanted to check in! Hope you&apos;re doing well 😊
      </div>
      <div style={{ padding: '0 18px', display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ padding: '8px 18px', borderRadius: 22, background: INDIGO, color: '#fff', fontSize: 15, fontWeight: 600 }}>Send</div>
      </div>
    </>
  )
}

function SettingsBody() {
  const Row = ({ label, detail, last }: { label: string; detail?: string; last?: boolean }) => (
    <div style={{ display: 'flex', alignItems: 'center', padding: '12px 14px', position: 'relative', minHeight: 44 }}>
      <span style={{ flex: 1, fontSize: 15, color: theme.ink }}>{label}</span>
      {detail && <span style={{ fontSize: 14, color: theme.inkMuted }}>{detail}</span>}
      {!last && <div style={{ position: 'absolute', left: 14, right: 0, bottom: 0, height: 0.5, background: theme.hair }} />}
    </div>
  )
  const Section = ({ children }: { children: React.ReactNode }) => (
    <div style={{ padding: '14px 28px 6px', fontSize: 12, color: theme.inkMuted }}>{children}</div>
  )
  return (
    <div style={{ flex: 1, overflow: 'hidden' }}>
      <LargeTitle>Settings</LargeTitle>
      <Section>Data</Section>
      <IOSCard>
        <Row label="Contacts" detail="566" />
        <Row label="Start Your Network" />
        <Row label="Message Templates" last />
      </IOSCard>
      <Section>Notifications</Section>
      <IOSCard>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', minHeight: 44 }}>
          <span style={{ flex: 1, fontSize: 15, color: theme.ink }}>Tickle Reminders</span>
          <div style={{ width: 38, height: 22, borderRadius: 12, background: INDIGO, padding: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#fff' }} />
          </div>
        </div>
      </IOSCard>
      <Section>About</Section>
      <div style={{ margin: '0 14px 14px', borderRadius: 12, padding: '24px 14px', background: '#0A1628', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 32, color: '#F5C842', letterSpacing: '0.06em', lineHeight: 1 }}>TICKLR</div>
        <div style={{ fontSize: 9, color: '#F5C842', letterSpacing: '0.32em', textTransform: 'uppercase' }}>Your People Matter</div>
      </div>
    </div>
  )
}

function TabBar({ active }: { active: IOSScreen }) {
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 10, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          padding: '6px 8px',
          borderRadius: 28,
          background: theme.tabBarBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 24px rgba(0,0,0,0.5)',
        }}
      >
        {TABS.map((t) => {
          const isActive = t.key === active
          const color = isActive ? INDIGO : theme.inkMuted
          return (
            <div
              key={t.key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                padding: '5px 9px',
                borderRadius: 18,
                background: isActive ? theme.tabPill : 'transparent',
              }}
            >
              {TAB_ICONS[t.key](color)}
              <span style={{ fontSize: 9, fontWeight: isActive ? 600 : 500, color, letterSpacing: '-0.01em' }}>{t.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const BODIES: Record<IOSScreen, React.ComponentType> = {
  network: NetworkBody,
  tickle: TickleBody,
  groups: GroupsBody,
  compose: ComposeBody,
  settings: SettingsBody,
}

export default function IOSMock({ w = 320, h = 660, screen = 'network' }: { w?: number; h?: number; screen?: IOSScreen }) {
  const Body = BODIES[screen]
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: 44,
        padding: 8,
        background: '#0c0e12',
        boxShadow: '0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)',
        flexShrink: 0,
        position: 'relative',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 18,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 110,
          height: 28,
          borderRadius: 14,
          background: '#000',
          zIndex: 2,
        }}
      />
      <div style={{ borderRadius: 36, overflow: 'hidden', background: theme.bg, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 28px 16px', fontSize: 14, fontWeight: 600, color: theme.statusFg }}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill={theme.statusFg}>
              <rect x="0" y="7" width="2.5" height="3" rx="0.5" />
              <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" />
              <rect x="7" y="3" width="2.5" height="7" rx="0.5" />
              <rect x="10.5" y="0.5" width="2.5" height="9.5" rx="0.5" />
            </svg>
          </span>
        </div>
        <div style={{ flex: 1, overflow: 'hidden', paddingBottom: 80 }}>
          <Body />
        </div>
        <TabBar active={screen} />
      </div>
    </div>
  )
}
