import { useEffect, useState } from 'react'
import './App.css'
import Logo from './Log.png'
import ContactForm from './components/ContactForm'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'product', label: 'Aether Property' },
  { id: 'contact', label: 'Contact' },
]

const heroHighlights = [
  {
    value: 'Property-first',
    label: 'Leases, units, maintenance, and reporting in one operating system',
  },
  {
    value: 'Board-ready',
    label: 'Executive dashboards designed for clear decisions and fast action',
  },
  {
    value: 'Africa-ready',
    label: 'Built for multi-site operations and growing enterprise teams',
  },
]

const aboutCards = [
  {
    title: 'A clear mission',
    text: 'Digitizing property, construction, and operational management across Africa.',
  },
  {
    title: 'Enterprise focus',
    text: 'Secure workflows, role-based access, and reliable reporting for complex organizations.',
  },
  {
    title: 'Product-led delivery',
    text: 'Strategy, implementation, and support aligned around outcomes, not just features.',
  },
]

const leadership = [
  {
    role: 'Product strategy',
    text: 'Roadmaps shaped around customer operations, adoption, and measurable value.',
  },
  {
    role: 'Implementation',
    text: 'Structured rollout support for live property and construction environments.',
  },
  {
    role: 'Client success',
    text: 'Responsive support for teams managing real assets, real people, and real deadlines.',
  },
]

const solutions = [
  {
    title: 'Property management software',
    description:
      'Aether Property helps operators manage units, tenants, maintenance, and reporting from one secure platform.',
    bullets: ['Lease and unit tracking', 'Maintenance workflows', 'Executive dashboards'],
  },
  {
    title: 'Construction operations',
    description:
      'Coordinate active sites with approvals, progress updates, and issue tracking connected to the real work on the ground.',
    bullets: ['Site visibility', 'Approvals and handovers', 'Risk escalation'],
  },
  {
    title: 'Digital transformation',
    description:
      'Modernize disconnected spreadsheets and legacy systems with clean data models and rollout plans.',
    bullets: ['Workflow audit', 'System design', 'Adoption roadmap'],
  },
  {
    title: 'Integration and data',
    description:
      'Bring finance, reporting, field operations, and third-party systems into one operating picture.',
    bullets: ['API sync', 'BI-ready structures', 'Audit trails'],
  },
  {
    title: 'Analytics and reporting',
    description:
      'Give leadership a boardroom view of performance, occupancy, progress, and exception management.',
    bullets: ['Live KPIs', 'Portfolio insights', 'Downloadable reports'],
  },
  {
    title: 'Future products',
    description:
      'Aether Systems is building a broader suite for property and infrastructure teams across Africa.',
    bullets: ['Platform roadmap', 'Scalable modules', 'Long-term product vision'],
  },
]

const industries = ['Property Management', 'Real Estate', 'Construction', 'Government', 'Facilities', 'Infrastructure']

const productFeatures = [
  {
    title: 'Portfolio control',
    text: 'Centralize properties, units, tenants, and contracts in one operating system.',
  },
  {
    title: 'Maintenance command center',
    text: 'Turn requests into assignable, trackable work with visibility for every team.',
  },
  {
    title: 'Operational reporting',
    text: 'Keep leaders informed with live KPIs, trends, and exception alerts.',
  },
  {
    title: 'Role-based access',
    text: 'Support executives, site teams, finance, and operations with the right permissions.',
  },
]

const dashboards = [
  {
    title: 'Portfolio Overview',
    subtitle: 'Occupancy, arrears, and lease health',
    accent: '#2f7cf6',
    sidebarItems: ['Overview', 'Units', 'Tenants', 'Collections', 'Reports'],
    stats: [
      { label: 'Occupancy', value: '94%' },
      { label: 'Open cases', value: '12' },
      { label: 'Risk flag', value: 'Low' },
    ],
    chartBars: [48, 72, 56, 88, 64, 90],
    rows: [
      ['Tower A', 'Occupied', 'Renewal due in 22 days'],
      ['Site B', 'Review', 'Rent follow-up scheduled'],
      ['Block C', 'Stable', 'No open exceptions'],
    ],
  },
  {
    title: 'Maintenance Command',
    subtitle: 'Work orders, vendors, and SLA tracking',
    accent: '#0f5bd7',
    sidebarItems: ['Queue', 'Vendors', 'Assets', 'Inspections', 'SLA'],
    stats: [
      { label: 'Active jobs', value: '28' },
      { label: 'Due today', value: '9' },
      { label: 'SLA met', value: '91%' },
    ],
    chartBars: [34, 42, 66, 60, 80, 74],
    rows: [
      ['HVAC-14', 'Urgent', 'Assigned to vendor'],
      ['Lighting-02', 'Open', 'Awaiting approval'],
      ['Fire panel', 'In progress', 'Inspection booked'],
    ],
  },
  {
    title: 'Executive Reporting',
    subtitle: 'Board-level performance and trends',
    accent: '#184ea8',
    sidebarItems: ['Summary', 'Projects', 'Budget', 'Escalations', 'Exports'],
    stats: [
      { label: 'Projects live', value: '16' },
      { label: 'Milestones', value: '83%' },
      { label: 'Alerts', value: '03' },
    ],
    chartBars: [20, 40, 65, 53, 78, 86],
    rows: [
      ['Portfolio A', 'On track', 'Weekly review complete'],
      ['Portfolio B', 'Watch', 'Budget variance under review'],
      ['Portfolio C', 'Stable', 'No blockers reported'],
    ],
  },
]

const heroDashboards = dashboards

const contactCards = [
  {
    label: 'Email',
    value: 'info@aethersystems.co.za',
    note: 'For demo requests and sales questions.',
  },
  {
    label: 'Response',
    value: 'Within 1 business day',
    note: 'A product specialist will follow up.',
  },
  {
    label: 'Region',
    value: 'Across Africa',
    note: 'Built for multi-site, multi-team operations.',
  },
]

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  )
}

function DashboardMockup({ title, subtitle, accent, sidebarItems, stats, chartBars, rows }) {
  return (
    <article className="dashboard-shot" style={{ '--shot-accent': accent }}>
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

        <div className="dashboard-window__body">
          <aside className="dashboard-sidebar" aria-label={`${title} navigation`}>
            {sidebarItems.map((item, index) => (
              <span key={item} className={`dashboard-sidebar__item ${index === 0 ? 'is-active' : ''}`}>
                {item}
              </span>
            ))}
          </aside>

          <div className="dashboard-content">
            <div className="dashboard-stat-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="dashboard-stat-card">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>

            <div className="dashboard-chart-card">
              <div className="dashboard-chart-head">
                <span>Weekly activity</span>
                <strong>Live data</strong>
              </div>
              <div className="dashboard-bars" aria-hidden="true">
                {chartBars.map((height, index) => (
                  <div key={`${title}-${index}`} className="dashboard-bar-wrap">
                    <span className="dashboard-bar" style={{ height: `${height}%` }} />
                    <small>W{index + 1}</small>
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
              <small>Enterprise software for property and infrastructure organizations</small>
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
            Request demo
          </a>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero-section section-pad">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Modern SaaS for Africa</p>
              <h1>Enterprise software for property and infrastructure organizations.</h1>
              <p className="hero-lead">
                Aether Systems helps property, construction, and operations teams run with more clarity through
                secure workflows, live dashboards, and product-led delivery.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  Request demo
                </a>
                <a className="btn btn-secondary" href="#product">
                  Explore Aether Property
                </a>
              </div>

              <div className="hero-trust">
                <span>Microsoft meets Stripe</span>
                <span>Professional and enterprise-focused</span>
                <span>Dark blue and white brand system</span>
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
              eyebrow="Demo request"
              title="See the platform in action"
              description="Tell us what your team manages today and we will tailor the walkthrough."
              submitLabel="Request demo"
              note="Usually reply within one business day."
              idPrefix="hero-demo"
              compact
              messagePlaceholder="What part of property or construction operations do you want to streamline?"
            />
          </div>
        </section>

        <section id="about" className="section-pad section-light">
          <div className="container">
            <SectionHeading
              eyebrow="About"
              title="Aether Systems builds software for teams that need operational clarity at enterprise scale."
              copy="We focus on product design, implementation discipline, and the trust required to support property and infrastructure organizations across Africa."
            />

            <div className="about-layout">
              <article className="surface-card about-story">
                <p className="card-kicker">Company story</p>
                <h3>Built for the reality of property and construction operations.</h3>
                <p>
                  Aether Systems is shaped around the idea that enterprise software should be simple to trust, easy
                  to use, and strong enough to support real-world operations where every update, approval, and
                  exception matters.
                </p>

                <div className="about-pill-row" aria-label="Core brand themes">
                  <span>Vision</span>
                  <span>Governance</span>
                  <span>Scale</span>
                  <span>Clarity</span>
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

            <div className="leadership-band surface-card">
              <div className="leadership-band__copy">
                <p className="card-kicker">Leadership</p>
                <h3>Built and delivered by people who respect enterprise operations.</h3>
              </div>

              <div className="leadership-grid">
                {leadership.map((item) => (
                  <article key={item.role} className="leadership-card">
                    <strong>{item.role}</strong>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section-pad section-tinted">
          <div className="container">
            <SectionHeading
              eyebrow="Solutions"
              title="A focused suite of enterprise tools for property, construction, and transformation teams."
              copy="The platform starts with Aether Property and extends into the workflows and integrations that support broader operational change."
            />

            <div className="solutions-grid">
              {solutions.map((solution, index) => (
                <article key={solution.title} className="surface-card solution-card">
                  <div className="solution-card__top">
                    <span className="solution-index">0{index + 1}</span>
                    <span className="solution-chip">Enterprise</span>
                  </div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <ul>
                    {solution.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="industries-band surface-card">
              <div className="industries-band__copy">
                <p className="card-kicker">Industries</p>
                <h3>Designed for teams managing built assets, active projects, and public-facing services.</h3>
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

        <section id="product" className="section-pad section-light">
          <div className="container">
            <SectionHeading
              eyebrow="Product"
              title="Aether Property brings modern SaaS discipline to property management operations."
              copy="From tenant and unit oversight to maintenance, approvals, and reporting, the product is designed to keep every team looking at the same truth."
            />

            <div className="product-layout">
              <article className="surface-card product-summary">
                <p className="card-kicker">Aether Property</p>
                <h3>One operating system for the people, places, and processes in your portfolio.</h3>
                <p>
                  The product is designed to support property managers, operations leaders, and executives with a
                  clean interface that feels as polished as the best modern SaaS tools.
                </p>

                <div className="feature-grid">
                  {productFeatures.map((feature) => (
                    <article key={feature.title} className="feature-card">
                      <strong>{feature.title}</strong>
                      <p>{feature.text}</p>
                    </article>
                  ))}
                </div>

                <div className="product-actions">
                  <a className="btn btn-primary" href="#contact">
                    Request demo
                  </a>
                  <a className="btn btn-secondary" href="#solutions">
                    View solutions
                  </a>
                </div>
              </article>

              <div className="dashboard-stack" aria-label="Placeholder dashboard screenshots">
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
              title="Start with a demo request or a sales conversation."
              copy="Share the portfolio size, teams involved, and the operational problems you want to solve. We will shape the next step around your real context."
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
                  <h3>Tell us about the workflow, the stakeholders, and the rollout scope.</h3>
                  <ul>
                    <li>Portfolio size or project volume</li>
                    <li>Current systems or spreadsheets in use</li>
                    <li>Timeline, compliance, and reporting needs</li>
                  </ul>
                </article>
              </div>

              <ContactForm
                eyebrow="Sales inquiry"
                title="Book a tailored walkthrough"
                description="Use this form for a demo request, a sales conversation, or a product discussion with the team."
                submitLabel="Send inquiry"
                note="We respond with the next best step for your team."
                idPrefix="sales"
                className="contact-form-panel"
                messagePlaceholder="Describe your portfolio, operational challenge, and what success looks like."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>
            <strong>Aether Systems</strong>
            <p>Enterprise software for property and infrastructure organizations across Africa.</p>
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
