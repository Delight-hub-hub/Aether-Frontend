import { useEffect, useState } from 'react'
import './App.css'
import Logo from './Log.png'
import AdvancedWeb from './advanced_web.jpg'
import ProStore from './pro_store.jpg'
import Security from './security.jpg'
import Speed from './speed.jpg'
import ContactForm from './components/ContactForm'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'showcase', label: 'Solutions' },
  { id: 'contact', label: 'Contact' },
]

const heroHighlights = [
  {
    value: 'Cross-industry',
    label: 'Built for construction, retail, logistics, services, and startups.',
  },
  {
    value: 'Automation first',
    label: 'Streamline manual workflows with connected software and integrations.',
  },
  {
    value: 'Scalable delivery',
    label: 'Designed for websites, systems, SaaS products, and long-term growth.',
  },
]

const aboutCards = [
  {
    title: 'Technology partner',
    text: 'Aether Systems helps organizations modernize operations with software engineering, automation, and digital products.',
  },
  {
    title: 'Business outcomes',
    text: 'Every engagement is shaped around efficiency, visibility, customer experience, and measurable return.',
  },
  {
    title: 'Long-term delivery',
    text: 'We plan for maintainable systems, safe integrations, and roadmaps that can grow with the business.',
  },
]

const deliveryApproach = [
  {
    role: 'Discovery and strategy',
    text: 'We align on goals, users, workflows, and the business case before writing a line of code.',
  },
  {
    role: 'Design and engineering',
    text: 'We build secure, polished experiences and scalable software architecture that supports real operations.',
  },
  {
    role: 'Support and evolution',
    text: 'We stay involved after launch to refine features, extend integrations, and support future growth.',
  },
]

const services = [
  {
    title: 'Website Design & Development',
    description: 'Create credible, high-performing websites that support marketing, sales, and customer acquisition.',
  },
  {
    title: 'Custom Software Development',
    description: 'Build tailored systems that replace manual work and fit the way your teams actually operate.',
  },
  {
    title: 'Business Process Automation',
    description: 'Automate repetitive tasks and approvals to reduce delays, errors, and operating costs.',
  },
  {
    title: 'API Integrations',
    description: 'Connect internal tools and third-party platforms so data moves cleanly across your business.',
  },
  {
    title: 'E-Commerce Applications',
    description: 'Launch commerce experiences that improve conversion, streamline order handling, and scale with demand.',
  },
  {
    title: 'SaaS Product Development',
    description: 'Design subscription-ready products with the architecture, UX, and reliability modern software needs.',
  },
  {
    title: 'Technical Consulting',
    description: 'Guide strategy, architecture, and implementation decisions with practical advice rooted in delivery.',
  },
]

const industries = [
  'Construction',
  'Property Management',
  'Retail',
  'E-Commerce',
  'Professional Services',
  'Logistics',
  'Startups and SMEs',
]

const capabilityCards = [
  {
    title: 'Business Websites',
    text: 'Fast, credible sites that support marketing, sales, and conversion.',
  },
  {
    title: 'Customer Portals',
    text: 'Secure self-service experiences that reduce support load and improve response times.',
  },
  {
    title: 'Internal Business Systems',
    text: 'Tools that give teams visibility, control, and less manual work.',
  },
  {
    title: 'E-Commerce Platforms',
    text: 'Commerce experiences built to handle catalog, order, and fulfillment workflows.',
  },
  {
    title: 'Automation Tools',
    text: 'Workflow automation that reduces cycle time and human error.',
  },
  {
    title: 'API-Driven Applications',
    text: 'Connected software that moves data between products and services.',
  },
  {
    title: 'SaaS Platforms',
    text: 'Subscription products designed for maintainability, growth, and scale.',
  },
]

const dashboards = [
  {
    title: 'Operations Overview',
    subtitle: 'Revenue, delivery, and active workstreams',
    accent: '#2f7cf6',
    accentSecondary: '#7cc0ff',
    sidebarItems: ['Overview', 'Projects', 'Tasks', 'Finance', 'Reports'],
    stats: [
      { label: 'Active accounts', value: '24' },
      { label: 'Open requests', value: '12' },
      { label: 'Risk flag', value: 'Low' },
    ],
    chartBars: [48, 72, 56, 88, 64, 90],
    rows: [
      ['North Team', 'On track', 'Weekly review complete'],
      ['Client 14', 'Review', 'Budget variance under check'],
      ['Project 08', 'Stable', 'No blockers reported'],
    ],
  },
  {
    title: 'Automation Command',
    subtitle: 'Requests, tasks, and SLA tracking',
    accent: '#12b8a6',
    accentSecondary: '#7ae3cf',
    sidebarItems: ['Queue', 'Vendors', 'Assets', 'Inspections', 'SLA'],
    stats: [
      { label: 'Automations', value: '18' },
      { label: 'Due today', value: '9' },
      { label: 'Success rate', value: '96%' },
    ],
    chartBars: [34, 42, 66, 60, 80, 74],
    rows: [
      ['Support queue', 'Urgent', 'Assigned to owner'],
      ['Approval flow', 'In progress', 'Waiting on sign-off'],
      ['Invoice sync', 'Healthy', 'No action required'],
    ],
  },
  {
    title: 'Executive Reporting',
    subtitle: 'Board-level performance and trends',
    accent: '#7758ff',
    accentSecondary: '#c6b2ff',
    sidebarItems: ['Summary', 'Programs', 'Budget', 'Escalations', 'Exports'],
    stats: [
      { label: 'Programs live', value: '16' },
      { label: 'Milestones', value: '83%' },
      { label: 'Alerts', value: '03' },
    ],
    chartBars: [20, 40, 65, 53, 78, 86],
    rows: [
      ['Division A', 'On track', 'Weekly review complete'],
      ['Division B', 'Watch', 'Budget variance under review'],
      ['Division C', 'Stable', 'No blockers reported'],
    ],
  },
  {
    title: 'E-Commerce Control',
    subtitle: 'Revenue, orders, inventory, and fulfillment',
    accent: '#ff8d42',
    accentSecondary: '#ffd08b',
    layout: 'commerce',
    sidebarItems: ['Overview', 'Orders', 'Catalog', 'Inventory', 'Insights'],
    stats: [
      { label: 'Revenue overview', value: '$1.28M' },
      { label: 'Orders dashboard', value: '4,260' },
      { label: 'Conversion metrics', value: '3.9%' },
      { label: 'Fulfillment status', value: '91%' },
    ],
    chartBars: [42, 55, 61, 58, 74, 88],
    summary: 'Monthly revenue is up 18% with stronger conversion on mobile traffic and cleaner order flow.',
    orders: [
      { code: '#4821', route: 'North Hub', status: 'Paid', statusClass: 'paid' },
      { code: '#4814', route: 'Central Store', status: 'Packing', statusClass: 'packing' },
      { code: '#4799', route: 'Online Channel', status: 'Ready', statusClass: 'ready' },
    ],
    catalogRows: [
      { name: 'Aurora Chair', detail: '215 active SKUs and best seller status', status: 'Top seller' },
      { name: 'Nimbus Lamp', detail: '32 units remaining across two warehouses', status: 'Low stock' },
      { name: 'Terra Desk', detail: '84 orders completed this month', status: 'Active' },
    ],
    inventoryItems: [
      { label: 'Core range', value: 84 },
      { label: 'Seasonal stock', value: 61 },
      { label: 'Bundles', value: 47 },
    ],
    customerMetrics: [
      { label: 'Repeat customers', value: '38%' },
      { label: 'Average order value', value: '$72' },
      { label: 'Cart recovery', value: '18%' },
    ],
    fulfillmentStages: [
      { label: 'Paid', value: '118' },
      { label: 'Packed', value: '94' },
      { label: 'Shipped', value: '86' },
      { label: 'Delivered', value: '79' },
    ],
  },
]

const heroDashboards = dashboards

const contactCards = [
  {
    label: 'Email',
    value: 'info@aethersystems.co.za',
    note: 'For consultations, demos, and new project enquiries.',
  },
  {
    label: 'Response',
    value: 'Within 1 business day',
    note: 'A member of the team will follow up with the next step.',
  },
  {
    label: 'Coverage',
    value: 'Across industries',
    note: 'Construction, retail, logistics, services, and startups.',
  },
]

const brandVisualSignals = [
  {
    value: 'Authentic',
    label: 'Real project imagery and grounded surfaces',
  },
  {
    value: 'Layered',
    label: 'Color, motion, and depth instead of flat blocks',
  },
  {
    value: 'Clear',
    label: 'Visual cues that guide attention and action',
  },
]

const brandVisualTiles = [
  {
    title: 'Web presence',
    text: 'Sharper landing pages and product screens that feel credible on first glance.',
    src: AdvancedWeb,
    alt: 'Website experience mockup with layered screens and analytics',
  },
  {
    title: 'Commerce flow',
    text: 'Retail and order journeys with cleaner hierarchy and conversion-focused detail.',
    src: ProStore,
    alt: 'E-commerce interface with product cards and checkout layout',
  },
  {
    title: 'Security posture',
    text: 'Trust signals, permissions, and safer operations across the product.',
    src: Security,
    alt: 'Security-themed dashboard with data protection visuals',
  },
  {
    title: 'Performance',
    text: 'Faster-feeling interfaces with better pacing and lighter visual noise.',
    src: Speed,
    alt: 'Performance-focused visual with speed and optimization cues',
  },
]

const processSteps = [
  {
    title: 'Discover',
    text: 'We map users, workflow, and constraints before the build starts.',
    accent: '#2f7cf6',
  },
  {
    title: 'Shape',
    text: 'We craft the visual system, information hierarchy, and architecture.',
    accent: '#12b8a6',
  },
  {
    title: 'Deliver',
    text: 'We launch, measure, and refine so the product keeps improving.',
    accent: '#ff8d42',
  },
]

function BrandVisualBand() {
  return (
    <div className="surface-card brand-visual-band">
      <div className="brand-visual-band__copy">
        <p className="card-kicker">Visual direction</p>
        <h3>We keep the hero strong, then let imagery and color carry the rest of the story.</h3>
        <p>
          The collage below uses project-inspired visuals, softer gradients, and clear labels so the experience
          feels authentic instead of flat.
        </p>

        <div className="brand-visual-signals" aria-label="Visual design signals">
          {brandVisualSignals.map((signal) => (
            <div key={signal.label} className="brand-visual-signal">
              <span>{signal.value}</span>
              <strong>{signal.label}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="brand-visual-grid" aria-label="Aether Systems visual collage">
        {brandVisualTiles.map((tile, index) => (
          <article
            key={tile.title}
            className={`brand-visual-card ${index === 0 ? 'brand-visual-card--hero' : ''}`}
          >
            <img src={tile.src} alt={tile.alt} />
            <div className="brand-visual-card__overlay">
              <span>{tile.title}</span>
              <p>{tile.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function ProcessRibbon() {
  return (
    <div className="surface-card process-ribbon">
      <div className="process-ribbon__art" aria-hidden="true">
        <svg viewBox="0 0 960 180" preserveAspectRatio="none">
          <defs>
            <linearGradient id="processRibbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2f7cf6" />
              <stop offset="46%" stopColor="#12b8a6" />
              <stop offset="100%" stopColor="#ff8d42" />
            </linearGradient>
          </defs>
          <path
            d="M40 110 C 170 32, 310 32, 430 92 S 670 164, 920 54"
            fill="none"
            stroke="url(#processRibbonGradient)"
            strokeLinecap="round"
            strokeWidth="8"
          />
          <circle cx="120" cy="106" r="16" fill="#ffffff" stroke="#2f7cf6" strokeWidth="6" />
          <circle cx="480" cy="70" r="16" fill="#ffffff" stroke="#12b8a6" strokeWidth="6" />
          <circle cx="840" cy="90" r="16" fill="#ffffff" stroke="#ff8d42" strokeWidth="6" />
        </svg>
      </div>

      <div className="process-ribbon__steps">
        {processSteps.map((step, index) => (
          <article key={step.title} className="process-step" style={{ '--step-accent': step.accent }}>
            <span className="process-step__index">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  )
}

function DashboardMockup({
  title,
  subtitle,
  accent,
  accentSecondary = accent,
  sidebarItems,
  stats = [],
  chartBars = [],
  rows = [],
  layout = 'standard',
  summary = '',
  orders = [],
  catalogRows = [],
  inventoryItems = [],
  customerMetrics = [],
  fulfillmentStages = [],
}) {
  return (
    <article
      className={`dashboard-shot ${layout === 'commerce' ? 'dashboard-shot--commerce' : ''}`}
      style={{ '--shot-accent': accent, '--shot-accent-2': accentSecondary }}
    >
      <div className="dashboard-window">
        <div className="dashboard-window__topbar">
          <div className="window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="dashboard-window__meta">
            <strong>{title}</strong>
            <span>{subtitle}</span>
          </div>
        </div>

        <div className={`dashboard-window__body ${layout === 'commerce' ? 'dashboard-window__body--commerce' : ''}`}>
          <aside className="dashboard-sidebar" aria-label={`${title} navigation`}>
            {sidebarItems.map((item, index) => (
              <span key={item} className={`dashboard-sidebar__item ${index === 0 ? 'is-active' : ''}`}>
                {item}
              </span>
            ))}
          </aside>

          <div className={`dashboard-content ${layout === 'commerce' ? 'dashboard-content--commerce' : ''}`}>
            <div className={`dashboard-stat-grid ${layout === 'commerce' ? 'dashboard-stat-grid--commerce' : ''}`}>
              {stats.map((stat) => (
                <div key={stat.label} className="dashboard-stat-card">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>

            {layout === 'commerce' ? (
              <div className="commerce-grid">
                <section className="commerce-card commerce-card--revenue">
                  <div className="dashboard-chart-head">
                    <span>Revenue Overview</span>
                    <strong>Sales Trends</strong>
                  </div>
                  <p className="commerce-summary">{summary}</p>
                  <div className="commerce-revenue-summary">
                    <div>
                      <span>Monthly revenue</span>
                      <strong>{stats[0]?.value}</strong>
                    </div>
                    <div>
                      <span>Conversion metrics</span>
                      <strong>{stats[2]?.value}</strong>
                    </div>
                    <div>
                      <span>Growth</span>
                      <strong>+18%</strong>
                    </div>
                  </div>
                  <div className="dashboard-bars dashboard-bars--compact" aria-hidden="true">
                    {chartBars.map((height, index) => (
                      <div key={`${title}-${index}`} className="dashboard-bar-wrap">
                        <span className="dashboard-bar" style={{ height: `${height}%` }} />
                        <small>M{index + 1}</small>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="commerce-card commerce-card--orders">
                  <div className="dashboard-chart-head">
                    <span>Orders Dashboard</span>
                    <strong>Fulfillment</strong>
                  </div>
                  <div className="commerce-order-list">
                    {orders.map((order) => (
                      <div key={order.code} className="commerce-order-row">
                        <div>
                          <strong>{order.code}</strong>
                          <span>{order.route}</span>
                        </div>
                        <span className={`commerce-status commerce-status--${order.statusClass}`}>{order.status}</span>
                      </div>
                    ))}
                  </div>
                  <div className="commerce-fulfillment-row" aria-label="Order fulfillment stages">
                    {fulfillmentStages.map((stage) => (
                      <div key={stage.label}>
                        <span>{stage.label}</span>
                        <strong>{stage.value}</strong>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="commerce-card commerce-card--catalog">
                  <div className="dashboard-chart-head">
                    <span>Product Catalog Management</span>
                    <strong>{catalogRows.length} items</strong>
                  </div>
                  <div className="commerce-catalog-list">
                    {catalogRows.map((item) => (
                      <div key={item.name} className="commerce-catalog-row">
                        <div>
                          <strong>{item.name}</strong>
                          <span>{item.detail}</span>
                        </div>
                        <span>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="commerce-card commerce-card--insights">
                  <div className="dashboard-chart-head">
                    <span>Inventory Tracking</span>
                    <strong>Customer Analytics</strong>
                  </div>
                  <div className="commerce-progress-list">
                    {inventoryItems.map((item) => (
                      <div key={item.label} className="commerce-progress-item">
                        <div className="commerce-progress-label">
                          <span>{item.label}</span>
                          <strong>{item.value}%</strong>
                        </div>
                        <div className="commerce-progress-track" aria-hidden="true">
                          <span className="commerce-progress-fill" style={{ width: `${item.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="commerce-metric-grid">
                    {customerMetrics.map((metric) => (
                      <div key={metric.label} className="commerce-metric-card">
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <>
                <div className="dashboard-chart-card">
                  <div className="dashboard-chart-head">
                    <span>Weekly activity</span>
                    <strong>Live data</strong>
                  </div>
                  <div className="dashboard-bars" aria-hidden="true">
                    {chartBars.map((height, index) => (
                      <div key={`${title}-${index}`} className="dashboard-bar-wrap">
                        <span className="dashboard-bar" style={{ height: `${height}%` }} />
                        <small>M{index + 1}</small>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="dashboard-table" role="presentation">
                  {rows.map((row) => (
                    <div key={row[0]} className="dashboard-table__row">
                      <span>{row[0]}</span>
                      <span>{row[1]}</span>
                      <span>{row[2]}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

function HeroDashboardRotator() {
  const [activeDashboard, setActiveDashboard] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveDashboard((current) => (current + 1) % heroDashboards.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  const activeDashboardData = heroDashboards[activeDashboard]
  const previousDashboard = (activeDashboard - 1 + heroDashboards.length) % heroDashboards.length
  const nextDashboard = (activeDashboard + 1) % heroDashboards.length

  return (
    <div className="hero-dashboard-rotator" aria-label="Rotating dashboard preview">
      <div className="hero-dashboard-stage">
        {heroDashboards.map((dashboard, index) => {
          let slideState = 'hidden'

          if (index === activeDashboard) {
            slideState = 'active'
          } else if (index === previousDashboard) {
            slideState = 'prev'
          } else if (index === nextDashboard) {
            slideState = 'next'
          }

          return (
            <div
              key={dashboard.title}
              className={`hero-dashboard-slide hero-dashboard-slide--${slideState}`}
              aria-hidden={index !== activeDashboard}
            >
              <DashboardMockup {...dashboard} />
            </div>
          )
        })}
      </div>

      <div className="hero-dashboard-controls">
        <div className="hero-dashboard-dots" aria-label="Dashboard preview selector">
          {heroDashboards.map((dashboard, index) => (
            <button
              key={dashboard.title}
              type="button"
              className={`hero-dashboard-dot ${index === activeDashboard ? 'is-active' : ''}`}
              onClick={() => setActiveDashboard(index)}
              aria-label={`Show ${dashboard.title}`}
              aria-pressed={index === activeDashboard}
            />
          ))}
        </div>

        <div className="hero-dashboard-caption">
          <p>Auto-rotating view</p>
          <strong>{activeDashboardData.title}</strong>
          <span>{activeDashboardData.subtitle}</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const closeMobileNav = () => {
    setMobileNavOpen(false)
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-row">
          <a href="#home" className="brand" aria-label="Aether Systems home">
            <img src={Logo} className="brand-logo" alt="Aether Systems logo" />
            <span className="brand-text">
              <strong>AETHER SYSTEMS</strong>
              <small>Software, automation, and digital products</small>
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
            Book a consultation
          </a>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero-section section-pad">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Technology for modern business</p>
              <h1>Modern software for websites, systems, and automation.</h1>
              <p className="hero-lead">
                Aether Systems helps businesses digitize, automate, and scale their operations through modern
                software solutions. We design websites, build custom systems, connect APIs, and create e-commerce
                and SaaS products that improve efficiency and customer experience.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  Book a consultation
                </a>
                <a className="btn btn-secondary" href="#services">
                  See services
                </a>
              </div>

              <div className="hero-trust">
                <span>Websites and portals</span>
                <span>Automation and integrations</span>
                <span>SaaS and e-commerce</span>
              </div>

              <div className="hero-stats">
                {heroHighlights.map((item) => (
                  <article key={item.value} className="hero-stat-card">
                    <strong>{item.value}</strong>
                    <p>{item.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-panel">
              <HeroDashboardRotator />
            </div>
          </div>

          <div className="container hero-demo-band">
            <ContactForm
              eyebrow="Consultation"
              title="Tell us what your team needs to improve"
              description="We will tailor the conversation to your goals, current systems, and the business outcome you want to achieve."
              submitLabel="Book a consultation"
              note="Usually reply within one business day."
              idPrefix="hero-demo"
              compact
              messagePlaceholder="Describe the workflows or systems you want to modernize."
            />
          </div>
        </section>

        <section id="about" className="section-pad section-light">
          <div className="container">
            <SectionHeading
              eyebrow="About"
              title="Aether Systems is a long-term technology partner for businesses that want to modernize how they operate."
              copy="We combine software engineering, automation, product thinking, and delivery discipline to help organizations build better internal systems and stronger digital experiences."
            />

            <div className="about-layout">
              <article className="surface-card about-story">
                <p className="card-kicker">Company story</p>
                <h3>Built to support change, not just launch it.</h3>
                <p>
                  Aether Systems is shaped around the idea that enterprise software should be simple to trust, easy
                  to use, and strong enough to support real-world operations where every update, approval, and
                  customer interaction matters.
                </p>

                <div className="about-pill-row" aria-label="Core brand themes">
                  <span>Strategy</span>
                  <span>Engineering</span>
                  <span>Automation</span>
                  <span>Partnership</span>
                </div>
              </article>

              <div className="about-stack">
                {aboutCards.map((card) => (
                  <article key={card.title} className="surface-card about-card">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <BrandVisualBand />

            <div className="leadership-band surface-card">
              <div className="leadership-band__copy">
                <p className="card-kicker">How we work</p>
                <h3>Structured delivery that keeps the business goal at the center.</h3>
              </div>

              <div className="leadership-grid">
                {deliveryApproach.map((item) => (
                  <article key={item.role} className="leadership-card">
                    <strong>{item.role}</strong>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section id="services" className="section-pad section-tinted">
          <div className="container">
            <SectionHeading
              eyebrow="Services"
              title="Services designed to solve business problems and improve operational efficiency."
              copy="From customer-facing websites to internal software systems, we design and deliver technology that helps teams work faster, reduce manual effort, and scale with confidence."
            />

            <div className="solutions-grid">
              {services.map((service, index) => (
                <article key={service.title} className="surface-card solution-card">
                  <div className="solution-card__top">
                    <span className="solution-index">0{index + 1}</span>
                    <span className="solution-chip">Service</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>

            <ProcessRibbon />
          </div>
        </section>

        <section id="industries" className="section-pad section-light">
          <div className="container">
            <SectionHeading
              eyebrow="Industries"
              title="Industries We Serve"
              copy="Aether Systems works across sectors, bringing the same core expertise in software engineering, automation, and digital transformation to every engagement."
            />

            <div className="industries-band surface-card">
              <div className="industries-band__copy">
                <h3>Whether the brief is for a construction firm, retailer, or startup, we bring the same software discipline and delivery standards.</h3>
              </div>
              <div className="industry-grid">
                {industries.map((industry) => (
                  <span key={industry} className="industry-chip">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="section-pad section-tinted">
          <div className="container">
            <SectionHeading
              eyebrow="Solutions"
              title="What We Build"
              copy="We deliver the software layer behind modern businesses, from customer-facing experiences to internal systems that keep operations moving."
            />

            <div className="product-layout">
              <article className="surface-card product-summary">
                <p className="card-kicker">Delivery scope</p>
                <h3>One partner for the digital systems behind your business.</h3>
                <p>
                  Aether Systems designs business websites, customer portals, internal business systems,
                  e-commerce platforms, automation tools, API-driven applications, and SaaS platforms that help
                  teams work faster and grow with confidence.
                </p>

                <div className="feature-grid">
                  {capabilityCards.map((feature) => (
                    <article key={feature.title} className="feature-card">
                      <strong>{feature.title}</strong>
                      <p>{feature.text}</p>
                    </article>
                  ))}
                </div>

                <div className="product-actions">
                  <a className="btn btn-primary" href="#contact">
                    Book a consultation
                  </a>
                  <a className="btn btn-secondary" href="#industries">
                    See industries
                  </a>
                </div>
              </article>

              <div className="dashboard-stack" aria-label="Animated dashboard showcase">
                {dashboards.map((dashboard) => (
                  <DashboardMockup key={dashboard.title} {...dashboard} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="container">
            <SectionHeading
              eyebrow="Contact"
              title="Start with a consultation or a project conversation."
              copy="Share the workflow, customer experience, or operational challenge you want to solve and we will shape the next step around that goal."
            />

            <div className="contact-layout">
              <div className="contact-rail">
                <div className="contact-card-grid">
                  {contactCards.map((card) => (
                    <article key={card.label} className="surface-card contact-card">
                      <p className="card-kicker">{card.label}</p>
                      <h3>{card.value}</h3>
                      <p>{card.note}</p>
                    </article>
                  ))}
                </div>

                <article className="surface-card contact-cta-card">
                  <p className="card-kicker">What to include</p>
                  <h3>Tell us about the workflow, the stakeholders, and the outcome you want to improve.</h3>
                  <ul>
                    <li>Current systems, tools, or manual processes in use</li>
                    <li>Timeline, stakeholders, and key business constraints</li>
                    <li>The operational or customer outcome you want to improve</li>
                  </ul>
                </article>
              </div>

              <ContactForm
                eyebrow="Project inquiry"
                title="Book a tailored consultation"
                description="Use this form for a website brief, software project, automation request, e-commerce build, or integration discussion."
                submitLabel="Send inquiry"
                note="We respond with the next best step for your team."
                idPrefix="sales"
                className="contact-form-panel"
                messagePlaceholder="Describe your business challenge, current tools, and the outcome you want to achieve."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>
            <strong>Aether Systems</strong>
            <p>Technology solutions that help businesses digitize, automate, and scale.</p>
          </div>

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
