import './App.css'
import { useState } from 'react'
import Logo from './Log.png'
import AetherVisuals from './aethervisuals.jpg'
import CampaignPoster from './ElevenLabs_image_nano-banana-2_make a marke..._2026-03-04T19_15_16.png'
import ConceptToCodeVisual from './ElevenLabs_image_nano-banana-2_make a marke..._2026-03-04T19_15_19.png'
import AetherIalVisual from './ElevenLabs_image_nano-banana-2_make a marke..._2026-03-04T19_15_26.png'
import ServicePillarsVisual from './ElevenLabs_image_nano-banana-2_make a marke..._2026-03-04T19_15_47.png'
import Chatbot from './components/chatbot'
import ContactForm from './components/ContactForm'

const serviceAreas = [
  {
    title: 'Construction Operations Software',
    summary: 'Internal platforms for dispatch, reporting, approvals, and daily production control across active sites.',
    outcomes: ['Fewer spreadsheet handoffs', 'Stronger site visibility', 'Cleaner operational accountability']
  },
  {
    title: 'Digital Twin & Site Intelligence',
    summary: 'Interactive dashboards and asset views that turn field data into a live operating picture for leadership teams.',
    outcomes: ['Real-time project state', 'Faster issue escalation', 'Better forecasting decisions']
  },
  {
    title: 'Workflow Automation & Integration',
    summary: 'Connected systems for inspections, procurement, compliance, and progress tracking across existing tools.',
    outcomes: ['Less duplicate capture', 'Lower admin load', 'More reliable reporting']
  },
  {
    title: 'Data Foundations for ConTech',
    summary: 'Data models, APIs, and reporting layers engineered for construction teams dealing with fragmented information.',
    outcomes: ['Consistent project data', 'Audit-ready records', 'Decision-grade dashboards']
  },
  {
    title: 'Software Audits & Modernization',
    summary: 'Technical reviews of existing software, websites, and internal tools with a roadmap for performance and security upgrades.',
    outcomes: ['Prioritized fixes', 'Reduced technical debt', 'Clear modernization path']
  },
  {
    title: 'Fractional Product & Technical Advisory',
    summary: 'Ongoing consulting for firms defining their software roadmap, digital twin strategy, or internal delivery model.',
    outcomes: ['Stronger planning discipline', 'Sharper technical choices', 'Faster execution alignment']
  }
]

const deliveryModel = [
  {
    title: 'Survey Reality',
    text: 'We start from the jobsite, current workflows, and asset constraints rather than abstract software assumptions.'
  },
  {
    title: 'Engineer The System',
    text: 'We design the data model, platform architecture, and operator workflows needed to support field execution.'
  },
  {
    title: 'Operate With Confidence',
    text: 'We launch with reporting, monitoring, and iteration loops so the software becomes part of daily site operations.'
  }
]

const twinMetrics = [
  { label: 'Live packages tracked', value: '148', detail: 'RFIs, inspections, and deliveries in one operating view.' },
  { label: 'Critical risk alerts', value: '06', detail: 'Blocked approvals, delayed deliveries, and high-risk dependencies.' },
  { label: 'Field reporting lag', value: '-42%', detail: 'Reduction in manual reporting time after workflow consolidation.' }
]

const fieldProof = [
  {
    title: 'Brick Renovations',
    summary: 'A live construction business presence that grounds our consulting work in the commercial reality of project delivery.',
    image: AetherVisuals,
    alt: 'Finished construction project photography for Brick Renovations',
    cta: 'Visit Construction Company',
    href: 'https://brickand.co.za'
  },
  {
    title: 'Site Command Dashboard',
    summary: 'The software side of the same story: dashboards, role-based workflows, and real-time project controls built for the field.',
    image: AetherIalVisual,
    alt: 'Construction software dashboard and platform concept',
    cta: 'View Delivery Approach',
    href: '#twin-showcase'
  }
]

const visualShowcase = [
  {
    image: ConceptToCodeVisual,
    title: 'Concept To Command Layer',
    text: 'A planning-to-deployment visual language for software that sits close to site execution.',
    alt: 'Concept to launch software visual for contech systems'
  },
  {
    image: ServicePillarsVisual,
    title: 'ConTech Capability Matrix',
    text: 'Software architecture, cloud delivery, automation, and modernization aligned to construction operators.',
    alt: 'ConTech service pillars and software capability visual'
  },
  {
    image: CampaignPoster,
    title: 'Data-Driven Project Delivery',
    text: 'Brand direction for a consultancy that treats operational data as a core project asset.',
    alt: 'Campaign poster focused on digital delivery and software systems'
  }
]

const techBadges = [
  'Python',
  'React',
  'Three.js',
  'Node APIs',
  'PostgreSQL',
  'Power BI',
  'GIS Data',
  'Site QA Workflows',
  'Compliance Tracking',
  'Construction Delivery Insight'
]

const sectors = [
  'General Contractors',
  'Specialist Trades',
  'Property Developers',
  'Project Management Teams',
  'Asset Owners',
  'Construction Operations Leaders'
]

const engagements = [
  {
    image: CampaignPoster,
    alt: 'Consulting discovery sprint visual',
    name: 'ConTech Discovery Sprint',
    price: 'From R7 500',
    label: 'Fast strategic assessment',
    features: ['Workflow and tool audit', 'Risk and bottleneck review', 'Priority roadmap', 'Executive debrief']
  },
  {
    image: ConceptToCodeVisual,
    alt: 'Digital twin pilot consulting visual',
    name: 'Digital Twin Pilot',
    price: 'From R18 000',
    label: 'Proof-of-value engagement',
    features: ['Pilot dashboard design', 'Data model and feed mapping', 'Field reporting workflow', 'Pilot success metrics']
  },
  {
    image: ServicePillarsVisual,
    alt: 'Operations platform build consulting visual',
    name: 'Operations Platform Buildout',
    price: 'Custom quote',
    label: 'Full implementation program',
    features: ['Platform architecture', 'Integration delivery', 'Role-based workflows', 'Launch and iteration support']
  }
]

const pricingFactors = [
  'Number of sites, teams, and operational workflows involved.',
  'Complexity of data sources, integrations, and asset models.',
  'Level of dashboarding, automation, and reporting required.',
  'Need for advisory, implementation, or long-term support.'
]

const terminalFeed = [
  '> sync site telemetry --region gauteng',
  '[ok] crane status received: 4/4 online',
  '[ok] delivery queue reconciled: 18 inbound loads',
  '[warn] inspection backlog: concrete pour area C',
  '[ok] dashboard snapshot published to project leads'
]

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const handleNavLinkClick = () => {
    setMobileNavOpen(false)
  }

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="Aether Systems home">
            <img src={Logo} className="brand-logo" alt="Aether Systems logo" />
            <span>AETHER SYSTEMS</span>
          </a>

          <button
            className="nav-toggle"
            aria-expanded={mobileNavOpen}
            aria-controls="primary-nav"
            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="primary-nav" className={`nav ${mobileNavOpen ? 'open' : ''}`} aria-label="Primary">
            <a href="#services" onClick={handleNavLinkClick}>Services</a>
            <a href="#twin-showcase" onClick={handleNavLinkClick}>Digital Twin</a>
            <a href="#field-proof" onClick={handleNavLinkClick}>Field Proof</a>
            <a href="#visuals" onClick={handleNavLinkClick}>Visuals</a>
            <a href="#pricing" onClick={handleNavLinkClick}>Engagements</a>
            <a href="#contact" onClick={handleNavLinkClick}>Contact</a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex="-1">
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy-column">
              <p className="eyebrow">ConTech Software Consultancy</p>
              <h1>Building the Future, Line by Line.</h1>
              <p className="hero-copy">
                Custom software solutions engineered within the reality of the jobsite. Aether Systems helps construction and logistics
                teams turn fragmented field activity into reliable digital operations, dashboards, and asset intelligence.
              </p>
              <div className="hero-cta-row">
                <a className="btn btn-primary" href="#contact">Book a Discovery Call</a>
                <a className="btn btn-secondary" href="#twin-showcase">See The Digital Twin View</a>
              </div>

              <div className="hero-terminal" aria-label="Mock live feed of site data">
                <div className="terminal-head">
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <p>live-site-feed.log</p>
                </div>
                <div className="terminal-body">
                  {terminalFeed.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <aside className="hero-visual" aria-label="Construction digital twin illustration">
              <div className="wireframe-stage">
                <div className="wireframe-orbit orbit-one" />
                <div className="wireframe-orbit orbit-two" />
                <div className="wireframe-core">
                  <div className="wireframe-tower tower-one" />
                  <div className="wireframe-tower tower-two" />
                  <div className="wireframe-tower tower-three" />
                </div>
              </div>
              <div className="hero-visual-card">
                <p className="hero-visual-kicker">Operational layer</p>
                <h2>Software that understands physical work.</h2>
                <ul>
                  <li>Site dashboards linked to real workflows</li>
                  <li>Data models built around projects and assets</li>
                  <li>Delivery planning grounded in field constraints</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section id="services" className="services section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Services</p>
              <h2>Software consulting for construction teams that need more than a generic dev shop</h2>
            </div>

            <div className="services-grid">
              {serviceAreas.map((service) => (
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
              <p className="eyebrow">Approach</p>
              <h2>We start from field reality, then engineer the software around it</h2>
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

        <section id="twin-showcase" className="twin-showcase section">
          <div className="container twin-grid">
            <div className="section-head twin-head">
              <p className="eyebrow">Digital Twin Showcase</p>
              <h2>A dashboard-style operating picture for projects, assets, and site decisions</h2>
              <p>
                The point is not flashy software. The point is to give project leaders one place to see what is moving,
                what is blocked, and what needs intervention next.
              </p>
            </div>

            <div className="twin-panel">
              <div className="twin-map">
                <div className="twin-node node-a">Plant</div>
                <div className="twin-node node-b">Stores</div>
                <div className="twin-node node-c">Zone C</div>
                <div className="twin-node node-d">QA</div>
              </div>
              <div className="twin-metrics">
                {twinMetrics.map((metric) => (
                  <article key={metric.label} className="metric-card">
                    <p className="metric-label">{metric.label}</p>
                    <p className="metric-value">{metric.value}</p>
                    <p className="metric-detail">{metric.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="field-proof" className="field-proof section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Proven In The Field</p>
              <h2>Real construction context on one side, software execution on the other</h2>
            </div>

            <div className="field-proof-grid">
              {fieldProof.map((item) => (
                <article key={item.title} className="proof-card">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="proof-copy">
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <a className="proof-link" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                      {item.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="badge-bar" aria-label="Technology and field credibility">
          <div className="container badge-track">
            {techBadges.map((badge) => (
              <span key={badge} className="tech-badge">{badge}</span>
            ))}
          </div>
        </section>

        <section id="visuals" className="visuals section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Visual Direction</p>
              <h2>Creative system for digital twin storytelling, dashboards, and software delivery</h2>
            </div>

            <div className="visuals-grid">
              {visualShowcase.map((item) => (
                <figure key={item.title} className="visual-card">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <figcaption>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="industries section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Who We Support</p>
              <h2>Construction-focused teams that need software to work in the real world</h2>
            </div>

            <div className="sector-grid">
              {sectors.map((sector) => (
                <div key={sector} className="sector-chip">{sector}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Engagement Models</p>
              <h2>Consulting-led pricing built around software outcomes, not brochure websites</h2>
              <p className="section-note">
                We scope around operational complexity, data maturity, and delivery ambition. The images lead each engagement card, with the offer details below.
              </p>
            </div>

            <div className="pricing-grid">
              {engagements.map((tier) => (
                <article key={tier.name} className="pricing-card">
                  <img className="pricing-image" src={tier.image} alt={tier.alt} loading="lazy" />
                  <div className="pricing-copy-block">
                    <h3>{tier.name}</h3>
                    <p className="pricing-price">{tier.price}</p>
                    <p className="pricing-label">{tier.label}</p>
                    <ul>
                      {tier.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="pricing-note-card">
              <h3>How custom pricing is determined</h3>
              <p>
                Larger ConTech engagements are quoted after a discovery session, workflow review, and data architecture check. We price based on delivery responsibility, not just dev hours.
              </p>
              <ul>
                {pricingFactors.map((factor) => (
                  <li key={factor}>{factor}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Start A Conversation</p>
              <h2>Tell us where your construction workflows, data, or software stack are slowing you down</h2>
              <p className="section-note">
                Share the current setup, the operational pain point, and what success looks like. We’ll shape the next step around your real delivery context.
              </p>
            </div>

            <div className="contact-layout">
              <div className="contact-rail">
                <article className="contact-card contact-intro-card">
                  <p className="contact-card-kicker">Before you reach out</p>
                  <h3>Give us the operational context, not just a contact request.</h3>
                  <p>
                    The best conversations start with a real workflow problem. Tell us what is breaking down, what tools are already in play,
                    and where you want the system to end up.
                  </p>

                  <div className="contact-pills" aria-label="Typical engagement types">
                    <span>Workflow audit</span>
                    <span>Platform build</span>
                    <span>Digital twin</span>
                    <span>Advisory support</span>
                  </div>
                </article>

                <div className="contact-mini-grid">
                  <article className="contact-card contact-mini-card">
                    <p className="contact-mini-label">Email</p>
                    <h3>info@aethersystems.co.za</h3>
                    <p>For project enquiries, introductions, and discovery conversations.</p>
                  </article>
                  <article className="contact-card contact-mini-card">
                    <p className="contact-mini-label">Focus</p>
                    <h3>ConTech systems</h3>
                    <p>Software strategy, operational dashboards, and digital twin delivery.</p>
                  </article>
                </div>

                <article className="contact-card contact-note-card">
                  <h3>Best fit</h3>
                  <p>
                    Best for teams that need software strategy, field-aware platforms, operational dashboards,
                    or a practical roadmap for construction technology adoption.
                  </p>
                </article>
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
          <p>&copy; 2026 Aether Systems. ConTech software consulting for teams building in the real world.</p>
        </div>
      </footer>

      <Chatbot whatsappNumber="+27736665476" />
    </div>
  )
}

export default App
