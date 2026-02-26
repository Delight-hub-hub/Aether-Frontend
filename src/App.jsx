import './App.css'
import AetherLogo from './Log.png'
import Chatbot from './components/chatbot'
import ContactForm from './components/ContactForm'

const services = [
  {
    title: 'Custom Web Platforms',
    summary:
      'Design and development of secure web platforms for internal operations, citizen services, and customer portals.',
    outcomes: ['Faster service delivery', 'Lower manual workload', 'Clear ownership of code']
  },
  {
    title: 'Business Process Automation',
    summary:
      'Workflow automation for approvals, onboarding, compliance, and reporting across departments.',
    outcomes: ['Reduced turnaround times', 'Fewer process errors', 'Consistent operations']
  },
  {
    title: 'Data & Reporting Systems',
    summary:
      'Unified data pipelines and dashboards that give leadership teams real-time operational visibility.',
    outcomes: ['Trusted reporting', 'Single source of truth', 'Better decision speed']
  },
  {
    title: 'System Integration',
    summary:
      'Integration of legacy and modern tools using APIs and event-driven architecture with minimal disruption.',
    outcomes: ['Connected systems', 'Less duplicate entry', 'Improved reliability']
  },
  {
    title: 'Cloud & Platform Engineering',
    summary:
      'Deployment architecture, performance optimization, and monitoring for scalable production systems.',
    outcomes: ['High uptime', 'Predictable scaling', 'Operational resilience']
  },
  {
    title: 'Modernization & Support',
    summary:
      'Codebase audits, performance improvements, and long-term engineering support for existing products.',
    outcomes: ['Lower technical debt', 'Stronger security posture', 'Sustained delivery']
  }
]

const deliveryModel = [
  {
    title: 'Discover',
    text: 'We map your goals, constraints, and current systems to define the right technical path.'
  },
  {
    title: 'Build',
    text: 'Our team designs, develops, and ships production-ready software with quality gates built in.'
  },
  {
    title: 'Scale',
    text: 'We monitor, optimize, and iterate so your platform grows with your business needs.'
  }
]

const sectors = ['Government & Public Services', 'Financial Services', 'Healthcare & HealthTech', 'Commerce & Retail', 'Education Platforms', 'Logistics & Utilities']

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="Aether Systems home">
            <img src={AetherLogo} className="brand-logo" alt="Aether Systems logo" />
            <span>Aether Systems (Pty) Ltd </span>
          </a>

          <nav className="nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex="-1">
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Software Engineering Partner</p>
              <h1>We build and scale websites and business platforms that drive operations.</h1>
              <p className="hero-copy">
                Aether Systems helps companies and institutions move from fragmented tools to cohesive,
                production-grade software. We focus on outcomes: speed, reliability, and maintainable systems.
              </p>
              <div className="hero-cta-row">
                <a className="btn btn-primary" href="#contact">Request a Project Call</a>
                <a className="btn btn-secondary" href="#services">Explore Services</a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Delivery outcomes">
              <h2>What you can expect</h2>
              <ul>
                <li>Clear project scope and delivery milestones</li>
                <li>Modern architecture built for growth</li>
                <li>Security and quality from day one</li>
                <li>Dedicated post-launch support</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="services" className="services section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Our Services</p>
              <h2>End-to-end development services centered on business impact</h2>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul>
                    {service.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="process section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">How We Work</p>
              <h2>A practical delivery model that keeps projects moving</h2>
            </div>

            <div className="process-grid">
              {deliveryModel.map((step) => (
                <article key={step.title} className="process-card">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="industries section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Industries</p>
              <h2>Teams we commonly support</h2>
            </div>

            <div className="sector-grid">
              {sectors.map((sector) => (
                <div key={sector} className="sector-chip">{sector}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Start a Project</p>
              <h2>Tell us what you need and we will respond within one business day</h2>
            </div>

            <div className="contact-layout">
              <div className="contact-info-column">
                <div className="contact-info">
                  <div className="contact-item">
                    <h3>Email</h3>
                    <p>info@aethersystems.co.za</p>
                  </div>
                  <div className="contact-item">
                    <h3>Availability</h3>
                    <p>Remote-first team serving organizations globally</p>
                  </div>
                </div>
                <div className="engagement-statement">
                  <p>
                    Best for teams that need a reliable engineering partner to build websites, internal systems,
                    and long-term digital platforms.
                  </p>
                </div>
              </div>

              <div className="contact-form-column">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Aether Systems. All rights reserved.</p>
        </div>
      </footer>

      <Chatbot whatsappNumber="+2788146767" />
    </div>
  )
}

export default App
