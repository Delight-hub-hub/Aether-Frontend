import { useEffect, useRef, useState } from 'react'
import './App.css'
import Logo from './Log.jpeg'
import ContactForm from './components/ContactForm'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const services = [
  {
    slug: 'software',
    eyebrow: 'Product engineering',
    title: 'Custom Software Development',
    description: 'Tailored platforms, integrations and systems built around the way your business works.',
    accent: '#4bd7ff',
    secondary: '#8a7cff',
  },
  {
    slug: 'automation',
    eyebrow: 'Workflow intelligence',
    title: 'AI Automation',
    description: 'Automation that routes tasks, approvals and insights without manual drag.',
    accent: '#46f1a7',
    secondary: '#4cc8ff',
  },
  {
    slug: 'web',
    eyebrow: 'Digital products',
    title: 'Web Applications',
    description: 'Fast, secure web apps with clean authentication, analytics and responsive delivery.',
    accent: '#8f7aff',
    secondary: '#43d8ff',
  },
  {
    slug: 'commerce',
    eyebrow: 'Commerce systems',
    title: 'E-Commerce Applications',
    description: 'Storefronts, carts, inventory and order operations in one polished interface.',
    accent: '#ffbe6d',
    secondary: '#ff76b7',
  },
  {
    slug: 'analytics',
    eyebrow: 'Business intelligence',
    title: 'Business Dashboards',
    description: 'Live KPIs, reports and financial visibility for day-to-day decisions.',
    accent: '#ff7ee0',
    secondary: '#62f0c6',
  },
]

const productPills = ['Customer portals', 'Internal platforms', 'SaaS products', 'Data layers']

const portfolioCards = [
  {
    title: 'Launch systems',
    copy: 'Strategy, design and engineering moving in one direction.',
  },
  {
    title: 'Operational visibility',
    copy: 'Interfaces that make complex work readable at a glance.',
  },
  {
    title: 'Commerce momentum',
    copy: 'Clean product flows that help teams move faster.',
  },
]

const aboutCards = [
  {
    title: 'Strategy',
    copy: 'We frame the system before we write the code.',
  },
  {
    title: 'Design',
    copy: 'Interfaces are calm, clear and easy to trust.',
  },
  {
    title: 'Engineering',
    copy: 'Delivery stays disciplined, scalable and polished.',
  },
]

const contactCards = [
  {
    label: 'Email',
    value: 'info@aethersystems.co.za',
    copy: 'For consultations, demos and new project enquiries.',
  },
  {
    label: 'Response',
    value: 'Within 1 business day',
    copy: 'We reply with the next practical step.',
  },
  {
    label: 'Focus',
    value: 'Strategy, design, build',
    copy: 'One delivery team from concept to launch.',
  },
]

const softwareBars = [42, 58, 54, 72, 66, 90]
const commerceBars = [36, 51, 63, 74, 83, 96]
const analyticsBars = [40, 56, 52, 71, 79, 91]

const automationSteps = [
  { label: 'Intake', value: '3 queues' },
  { label: 'AI triage', value: '92% match' },
  { label: 'Action', value: '14 routes' },
  { label: 'Confirm', value: 'Live' },
]

const webSessions = [
  { label: 'Desktop session', value: 'Auth + role verified' },
  { label: 'Tablet layout', value: 'Adaptive controls active' },
  { label: 'Mobile flow', value: 'Session resumed' },
]

const commerceCatalog = [
  { name: 'Nimbus Lamp', price: '$129', stock: '18 left', tone: 'warning' },
  { name: 'Orbit Desk', price: '$790', stock: '34 left', tone: 'ok' },
  { name: 'Pulse Chair', price: '$320', stock: '09 left', tone: 'alert' },
]

const commerceOrders = [
  { id: '#4821', status: 'Paid', note: 'Express shipping' },
  { id: '#4822', status: 'Packing', note: 'Gift wrap requested' },
  { id: '#4823', status: 'Ready', note: 'Pickup today' },
]

const analyticsReportRows = [
  { label: 'Revenue', value: '+14.2%', note: 'Forecast revised upward' },
  { label: 'Margin', value: '31.8%', note: 'Efficiency holding' },
  { label: 'Ops', value: '92%', note: 'Service level healthy' },
]

const heroParticles = Array.from({ length: 14 }, (_, index) => {
  const top = 10 + ((index * 11) % 72)
  const left = 4 + ((index * 13) % 88)
  const size = 4 + (index % 4) * 2
  const duration = 12 + (index % 5) * 1.6

  return {
    top: `${top}%`,
    left: `${left}%`,
    size: `${size}px`,
    duration: `${duration}s`,
    delay: `${index * -0.8}s`,
  }
})

const heroWordmark = 'AETHER SYSTEMS'
const heroTagline = 'intelligent software solutions.'

function useRevealObserver() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!nodes.length) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.18,
      },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])
}

function useInView(rootMargin = '180px') {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false

    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    )
  })

  useEffect(() => {
    const node = ref.current
    if (!node || isVisible) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [isVisible, rootMargin])

  return [ref, isVisible]
}

function useTypewriterText(text, duration = 5000, delay = 0) {
  const [displayedText, setDisplayedText] = useState(() => {
    if (typeof window === 'undefined') {
      return ''
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? text : ''
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      // schedule update asynchronously to avoid synchronous setState within effect
      const id = window.setTimeout(() => setDisplayedText(text), 0)
      return () => {
        window.clearTimeout(id)
      }
    }

    let frameId = 0
    let timeoutId = 0
    let cancelled = false

    const startTyping = () => {
      const startedAt = performance.now()

      const tick = (now) => {
        if (cancelled) {
          return
        }

        const progress = Math.min((now - startedAt) / duration, 1)
        const nextLength = Math.round(progress * text.length)

        setDisplayedText(text.slice(0, nextLength))

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick)
        }
      }

      frameId = window.requestAnimationFrame(tick)
    }

    timeoutId = window.setTimeout(startTyping, delay)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
      window.cancelAnimationFrame(frameId)
    }
  }, [delay, duration, text])

  return displayedText
}

function AnimatedNumber({ value, active, prefix = '', suffix = '', decimals = 0 }) {
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!active) {
      return undefined
    }

    let frameId = 0
    const start = performance.now()
    const duration = 1100

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(value * eased)

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frameId)
  }, [active, value])

  const formattedValue = active ? displayed : 0
  const formatted = decimals > 0 ? formattedValue.toFixed(decimals) : Math.round(formattedValue).toString()

  return (
    <>
      {prefix}
      {formatted}
      {suffix}
    </>
  )
}

function MetricCard({ label, value, active, prefix = '', suffix = '', decimals = 0 }) {
  const isNumeric = typeof value === 'number'

  return (
    <div className="metric-card">
      <span>{label}</span>
      <strong>
        {isNumeric ? <AnimatedNumber value={value} active={active} prefix={prefix} suffix={suffix} decimals={decimals} /> : value}
      </strong>
    </div>
  )
}

function ChartBars({ values, active, className = '' }) {
  return (
    <div className={`chart-bars ${className}`.trim()} aria-hidden="true">
      {values.map((value, index) => (
        <span
          key={`${value}-${index}`}
          style={{
            height: active ? `${value}%` : '14%',
            transitionDelay: `${index * 70}ms`,
          }}
        />
      ))}
    </div>
  )
}

function DashboardShell({ eyebrow, title, accent, secondary, className = '', children }) {
  return (
    <div className={`dashboard-shell ${className}`.trim()} style={{ '--accent': accent, '--accent-2': secondary }}>
      <div className="dashboard-shell__top">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="dashboard-shell__titles">
          <span>{eyebrow}</span>
          <strong>{title}</strong>
        </div>
        <div className="dashboard-live" aria-hidden="true">
          <span className="dashboard-live__dot" />
          Live
        </div>
      </div>
      <div className="dashboard-shell__body">{children}</div>
    </div>
  )
}

function SoftwareDashboard({ active }) {
  const activityRows = [
    { label: 'Billing API synchronized', meta: '2 min ago' },
    { label: 'Performance budget stable', meta: 'Green' },
    { label: 'Feature flags staged', meta: 'Queued' },
  ]

  return (
    <DashboardShell eyebrow="Deployment intelligence" title="Project command center" accent="#4bd7ff" secondary="#8a7cff">
      <div className="dashboard-grid dashboard-grid--software">
        <div className="dashboard-stack">
          <div className="metric-grid metric-grid--compact">
            <MetricCard label="API uptime" value={99.98} active={active} suffix="%" decimals={2} />
            <MetricCard label="Deployments" value={42} active={active} />
            <MetricCard label="Latency" value={118} active={active} suffix="ms" />
          </div>

          <div className="progress-card">
            <div className="progress-card__top">
              <span>Release candidate</span>
              <strong>{active ? '88%' : '0%'}</strong>
            </div>
            <div className="progress-track" aria-hidden="true">
              <i style={{ width: active ? '88%' : '0%' }} />
            </div>
            <p>Production deployment verified across all regions.</p>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-head">
            <span>API activity</span>
            <strong>Live</strong>
          </div>
          <ChartBars values={softwareBars} active={active} />
        </div>

        <div className="activity-list">
          {activityRows.map((row, index) => (
            <div className="activity-row" key={row.label}>
              <span className="activity-dot" style={{ animationDelay: `${index * 220}ms` }} />
              <div>
                <p>{row.label}</p>
                <small>{row.meta}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}

function AutomationDashboard({ active }) {
  return (
    <DashboardShell eyebrow="Workflow intelligence" title="AI automation studio" accent="#46f1a7" secondary="#4cc8ff">
      <div className="dashboard-grid dashboard-grid--automation">
        <div className="automation-chat">
          <div className="chat-bubble chat-bubble--bot">Approve the invoice batch and notify finance.</div>
          <div className="chat-bubble chat-bubble--user">Route the total to sales and close the queue.</div>
          <div className="automation-notification">
            <span className="automation-notification__dot" />
            12 tasks executed
          </div>
        </div>

        <div className="automation-flow">
          <div className="panel-head">
            <span>Execution flow</span>
            <strong>{active ? '92% routed' : '0% routed'}</strong>
          </div>
          <div className="flow-list">
            {automationSteps.map((step, index) => (
              <div className={`flow-step ${active ? 'is-active' : ''}`} key={step.label}>
                <span className="flow-step__index">{index + 1}</span>
                <div>
                  <strong>{step.label}</strong>
                  <small>{step.value}</small>
                </div>
                <i style={{ animationDelay: `${index * 180}ms` }} />
              </div>
            ))}
          </div>
        </div>

        <div className="metric-grid metric-grid--compact">
          <MetricCard label="Runs today" value={1284} active={active} />
          <MetricCard label="Hours saved" value={316} active={active} />
          <MetricCard label="Success" value={97} active={active} suffix="%" />
        </div>

        <div className="automation-log">
          <div className="panel-head">
            <span>Activity log</span>
            <strong>Streaming</strong>
          </div>
          {['AI triage complete', 'Invoice route approved', 'CRM enrichment queued'].map((label, index) => (
            <div className="log-row" key={label}>
              <span className="log-row__status" style={{ animationDelay: `${index * 240}ms` }} />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}

function WebDashboard({ active }) {
  return (
    <DashboardShell eyebrow="Platform health" title="Web app operations" accent="#8f7aff" secondary="#43d8ff">
      <div className="dashboard-grid dashboard-grid--web">
        <div className="metric-grid metric-grid--compact">
          <MetricCard label="Users live" value={18.6} active={active} suffix="k" decimals={1} />
          <MetricCard label="Auth events" value={7.92} active={active} suffix="k" decimals={2} />
          <MetricCard label="Core vitals" value="Good" active={active} />
        </div>

        <div className="viewport-panel">
          <div className="viewport-switcher" aria-hidden="true">
            <span className="is-active">Desktop</span>
            <span>Tablet</span>
            <span>Mobile</span>
          </div>
          <div className="device-stack">
            <div className="device-frame device-frame--desktop">
              <div className="device-frame__top">
                <span />
                <span />
                <span />
              </div>
              <div className="device-layout">
                <div className="device-layout__hero">
                  <strong>Responsive layout</strong>
                  <span>Scale cleanly across breakpoints.</span>
                </div>
                <div className="device-layout__cards">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
            <div className="device-frame device-frame--tablet">
              <div className="device-frame__top">
                <span />
                <span />
                <span />
              </div>
              <div className="device-layout device-layout--tablet">
                <strong>Tablet controls</strong>
                <span>Touch-first navigation.</span>
              </div>
            </div>
            <div className="device-frame device-frame--mobile">
              <div className="device-frame__top">
                <span />
                <span />
                <span />
              </div>
              <div className="device-layout device-layout--mobile">
                <strong>Mobile session</strong>
                <span>One-handed flow.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="session-list">
          {webSessions.map((session, index) => (
            <div className="session-row" key={session.label}>
              <span className="session-row__dot" style={{ animationDelay: `${index * 180}ms` }} />
              <div>
                <strong>{session.label}</strong>
                <p>{session.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}

function CommerceDashboard({ active }) {
  return (
    <DashboardShell eyebrow="Commerce control" title="Store operations" accent="#ffbe6d" secondary="#ff76b7">
      <div className="dashboard-grid dashboard-grid--commerce">
        <div className="metric-grid metric-grid--commerce">
          <MetricCard label="Revenue" value={1.28} active={active} prefix="$" suffix="M" decimals={2} />
          <MetricCard label="Orders" value={4260} active={active} />
          <MetricCard label="Inventory" value={92} active={active} suffix="%" />
          <MetricCard label="Cart lift" value={18} active={active} suffix="%" />
        </div>

        <div className="commerce-main">
          <div className="dashboard-panel">
            <div className="panel-head">
              <span>Sales analytics</span>
              <strong>7 days</strong>
            </div>
            <ChartBars values={commerceBars} active={active} className="chart-bars--commerce" />
          </div>

          <div className="commerce-catalog">
            <div className="panel-head">
              <span>Product catalog</span>
              <strong>Stock watch</strong>
            </div>
            {commerceCatalog.map((item) => (
              <div className="commerce-row" key={item.name}>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.price}</span>
                </div>
                <em className={`status-pill status-pill--${item.tone}`}>{item.stock}</em>
              </div>
            ))}
          </div>
        </div>

        <div className="commerce-side">
          <div className="commerce-orders">
            <div className="panel-head">
              <span>Orders</span>
              <strong>Live queue</strong>
            </div>
            {commerceOrders.map((order) => (
              <div className="commerce-order" key={order.id}>
                <div>
                  <strong>{order.id}</strong>
                  <span>{order.note}</span>
                </div>
                <em className={`status-pill status-pill--${order.status.toLowerCase()}`}>{order.status}</em>
              </div>
            ))}
          </div>

          <div className="shopping-pill">
            <span className="shopping-pill__dot" />
            Cart recovery triggered +18% lift
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

function AnalyticsDashboard({ active }) {
  return (
    <DashboardShell eyebrow="Executive reporting" title="Business dashboards" accent="#ff7ee0" secondary="#62f0c6">
      <div className="dashboard-grid dashboard-grid--analytics">
        <div className="metric-grid metric-grid--analytics">
          <MetricCard label="KPI health" value={92} active={active} suffix="%" />
          <MetricCard label="Reports" value={64} active={active} />
          <MetricCard label="Forecast" value={14} active={active} suffix="%" />
        </div>

        <div className="analytics-main">
          <div className="analytics-radial-card">
            <div
              className="analytics-radial"
              style={{
                '--value': active ? 92 : 0,
              }}
            >
              <strong>{active ? '92%' : '0%'}</strong>
              <span>KPI health</span>
            </div>
          </div>

          <div className="dashboard-panel">
            <div className="panel-head">
              <span>Trend line</span>
              <strong>Monthly view</strong>
            </div>
            <ChartBars values={analyticsBars} active={active} className="chart-bars--analytics" />
          </div>
        </div>

        <div className="analytics-report">
          <div className="panel-head">
            <span>Reporting</span>
            <strong>Operational</strong>
          </div>
          {analyticsReportRows.map((row) => (
            <div className="report-row" key={row.label}>
              <div>
                <strong>{row.label}</strong>
                <span>{row.note}</span>
              </div>
              <em>{row.value}</em>
            </div>
          ))}
        </div>

        <div className="finance-grid">
          <div className="finance-card">
            <span>Cash flow</span>
            <strong>Stable</strong>
          </div>
          <div className="finance-card">
            <span>Margin</span>
            <strong>31.8%</strong>
          </div>
          <div className="finance-card">
            <span>Ops</span>
            <strong>92%</strong>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

function renderDashboard(service, active) {
  switch (service.slug) {
    case 'software':
      return <SoftwareDashboard active={active} />
    case 'automation':
      return <AutomationDashboard active={active} />
    case 'web':
      return <WebDashboard active={active} />
    case 'commerce':
      return <CommerceDashboard active={active} />
    case 'analytics':
      return <AnalyticsDashboard active={active} />
    default:
      return null
  }
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  )
}

function HeroIntro() {
  const typedTagline = useTypewriterText(heroTagline, 5000, 900)
  const isTypingComplete = typedTagline.length >= heroTagline.length

  return (
    <div className="hero-copy">
      <h1 className="hero-brand">{heroWordmark}</h1>

      <p className="hero-tagline">
        <span className="sr-only">{heroTagline}</span>
        <span className="hero-tagline__text" aria-hidden="true">
          {typedTagline}
        </span>
        <span
          className={`hero-tagline__cursor ${isTypingComplete ? 'is-hidden' : ''}`}
          aria-hidden="true"
        />
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#contact">
          Book a Consultation
        </a>
        <a className="btn btn-secondary" href="#services">
          See Services
        </a>
      </div>
    </div>
  )
}

const heroNetworkNodes = Array.from({ length: 32 }).map(() => ({
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${8 + Math.random() * 6}s`,
}))

function HeroAtmosphere() {
  return (
    <div className="hero-atmosphere" aria-hidden="true">

      <div className="hero-grid" />

      <div className="hero-network">
        {heroNetworkNodes.map((node, i) => (
          <span
            key={i}
            className="network-node"
            style={{
              "--x": node.x,
              "--y": node.y,
              "--delay": node.delay,
              "--duration": node.duration,
            }}
          />
        ))}
      </div>

      <div className="hero-stream hero-stream-1" />
      <div className="hero-stream hero-stream-2" />
      <div className="hero-stream hero-stream-3" />

      <div className="hero-noise" />

    </div>
  )
}

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useInView('200px')

  return (
    <article
      ref={ref}
      className={`service-card reveal ${index % 2 === 1 ? 'service-card--reverse' : ''}`}
      style={{ '--delay': `${index * 110}ms`, '--accent': service.accent, '--accent-2': service.secondary }}
    >
      <div className="service-copy">
        <div className="service-meta">
          <span className="service-index">0{index + 1}</span>
          <span className="service-eyebrow">{service.eyebrow}</span>
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      <div className="service-dashboard">{renderDashboard(service, isVisible)}</div>
    </article>
  )
}

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useRevealObserver()

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 16)

    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  const closeMobileNav = () => setMobileNavOpen(false)

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container header-row">
          <a href="#home" className="brand" aria-label="Aether Systems home" onClick={closeMobileNav}>
            <img src={Logo} className="brand-logo" alt="Aether Systems logo" />
            <span className="brand-copy">
              <strong>Aether Systems</strong>
              <small>Software development agency</small>
            </span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={mobileNavOpen}
            aria-controls="site-nav"
            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="site-nav" className={`site-nav ${mobileNavOpen ? 'open' : ''}`} aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={closeMobileNav}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#contact" onClick={closeMobileNav}>
            Book a Consultation
          </a>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero-section">
          <HeroAtmosphere />
          <div className="container hero-content">
            <HeroIntro />
          </div>
        </section>

        <section id="services" className="section-pad services-section">
          <div className="container section-shell">
            <SectionHeading
              eyebrow="Services"
              title="Enterprise systems, visualized before the first meeting."
              copy="Each dashboard is product-specific, so the value of the work is visible at a glance."
            />

            <div className="services-grid">
              {services.map((service, index) => (
                <ServiceCard key={service.slug} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="section-pad products-section">
          <div className="container section-shell">
            <SectionHeading
              eyebrow="Products"
              title="Digital products that live inside the business."
              copy="Customer portals, internal tools, SaaS layers and reporting surfaces with one visual language."
            />

            <div className="product-showcase reveal">
              <div className="product-showcase__copy">
                <p className="eyebrow">Systems</p>
                <h3>Built to be used every day.</h3>
                <p>The interfaces stay clear, stable and premium whether the team is on desktop, tablet or mobile.</p>
              </div>

              <div className="product-pill-grid">
                {productPills.map((pill, index) => (
                  <div className="product-pill" key={pill} style={{ '--delay': `${index * 90}ms` }}>
                    <span>{pill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section-pad portfolio-section">
          <div className="container section-shell">
            <SectionHeading
              eyebrow="Portfolio"
              title="A calm visual language for serious software."
              copy="The results are designed to feel composed, clear and unmistakably premium."
            />

            <div className="portfolio-grid">
              {portfolioCards.map((card, index) => (
                <article className="portfolio-card reveal" key={card.title} style={{ '--delay': `${index * 90}ms` }}>
                  <span>0{index + 1}</span>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad about-section">
          <div className="container section-shell about-layout">
            <SectionHeading
              eyebrow="About"
              title="Aether Systems partners with teams ready to move faster."
              copy="We combine strategy, design and engineering into one focused delivery rhythm."
            />

            <div className="about-panel reveal">
              {aboutCards.map((card, index) => (
                <article className="about-card" key={card.title} style={{ '--delay': `${index * 80}ms` }}>
                  <span>{card.title}</span>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="container section-shell contact-layout">
            <div className="contact-copy">
              <SectionHeading
                eyebrow="Contact"
                title="Start with a consultation."
                copy="Share the system, workflow or product you want to improve and we will shape the next step around the outcome."
              />

              <div className="contact-card-grid">
                {contactCards.map((card, index) => (
                  <article className="contact-card reveal" key={card.label} style={{ '--delay': `${index * 80}ms` }}>
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                    <p>{card.copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <ContactForm
              eyebrow="Project inquiry"
              title="Book a tailored consultation"
              description="Tell us what you want to build, automate or modernize."
              submitLabel="Send inquiry"
              note="We usually reply within one business day."
              idPrefix="sales"
              className="contact-form-panel"
              messagePlaceholder="Tell us the system you want to build or improve."
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <a href="#home" className="footer-brand">
            <img src={Logo} alt="" aria-hidden="true" />
            <span>Aether Systems</span>
          </a>
          <nav className="footer-nav" aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
