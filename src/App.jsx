import './App.css'
import Logo from './Log.png'
import AetherVisuals from './aethervisuals.jpg'
import CampaignPoster from './ElevenLabs_image_nano-banana-2_make a marke..._2026-03-04T19_15_16.png'
import ConceptToCodeVisual from './ElevenLabs_image_nano-banana-2_make a marke..._2026-03-04T19_15_19.png'
import AetherIalVisual from './ElevenLabs_image_nano-banana-2_make a marke..._2026-03-04T19_15_26.png'
import ServicePillarsVisual from './ElevenLabs_image_nano-banana-2_make a marke..._2026-03-04T19_15_47.png'
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

const projects = [
  {
    name: 'Brick Renovations',
    type: 'Public Project',
    summary:
      'Construction company website focused on showcasing renovation services, trust signals, and lead capture.',
    stack: ['Responsive website', 'Service pages', 'Contact conversion flow'],
    caseStudyId: 'case-brick-renovations',
    liveUrl: 'https://brickand.co.za'
  },
  {
    name: 'Aether Dispatch Hub',
    type: 'Private Internal Project',
    summary:
      'A logistics operations platform for a transport company managing dispatch planning, fleet visibility, and delivery exception handling.',
    stack: ['Operations dashboard', 'Workflow automation', 'Role-based access'],
    caseStudyId: 'case-dispatch-hub'
  },
  {
    name: 'MedFlow Patient Portal',
    type: 'Private Internal Project',
    summary:
      'A healthcare portal belonging to a medical practice for appointments, records access, and communication between care teams and patients.',
    stack: ['Patient portal', 'Appointment workflows', 'Secure communication'],
    caseStudyId: 'case-medflow-portal'
  }
]

const visuals = [
  {
    image: CampaignPoster,
    title: 'Digital Future Campaign',
    text: 'Brand-led campaign visual focused on product vision, software delivery, and cross-device design.',
    alt: 'Aether Systems campaign poster showing vision, business, and experience themes'
  },
  {
    image: ConceptToCodeVisual,
    title: 'Concept-to-Launch Storyboard',
    text: 'A four-part creative that communicates the journey from product ideation to business launch.',
    alt: 'Aether Systems concept to code marketing visual showing ideation, development, multi-platform, and launch'
  },
  {
    image: AetherIalVisual,
    title: 'Aether-IAL Product Mockup',
    text: 'Multi-device product preview centered on Aether Architect, Ascent, and Cognition service offerings.',
    alt: 'Aether Systems multi-device product mockup with Aether Architect, Ascent, and Cognition'
  },
  {
    image: ServicePillarsVisual,
    title: 'Service Pillars Overview',
    text: 'A service matrix visual highlighting custom software, app development, cloud, AI integration, and modernization.',
    alt: 'Aether Systems service pillars visual for software development and modernization'
  }
]

const caseStudies = [
  {
    id: 'case-brick-renovations',
    title: 'Brick Renovations',
    type: 'Public Project',
    challenge:
      'Brick Renovations needed a stronger digital presence to present services clearly and turn website visits into qualified enquiries.',
    approach:
      'We structured the site around core renovation services, added clear trust-building content blocks, and streamlined enquiry CTAs across the full browsing journey.',
    impact:
      'The final structure is easier to navigate, communicates credibility faster, and supports better lead generation for the business.',
    liveUrl: 'https://brickand.co.za'
  },
  {
    id: 'case-dispatch-hub',
    title: 'Aether Dispatch Hub',
    type: 'Private Internal Project',
    challenge:
      'Dispatch teams often lose time switching between spreadsheets, calls, and disconnected tracking tools.',
    approach:
      'We implemented an internal operations portal that consolidates route assignment, driver status, and delivery alerts into one control surface with prioritized workflows.',
    impact:
      'The company gained faster dispatch decisions, reduced coordination overhead, and clearer accountability per route.'
  },
  {
    id: 'case-medflow-portal',
    title: 'MedFlow Patient Portal',
    type: 'Private Internal Project',
    challenge:
      'Patients and care staff needed a single digital path for booking, updates, and records without fragmented communication channels.',
    approach:
      'We designed an accessible portal flow for appointment booking, secure messaging, and patient record visibility with clear user states.',
    impact:
      'The internal platform improved digital service quality while reducing front-desk load and communication delays.'
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
            <img src={Logo} className="brand-logo" alt="Aether Systems logo" />
            <span>Aether Systems (Pty) Ltd </span>
          </a>

          <nav className="nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#projects">Projects</a>
            <a href="#visuals">Visuals</a>
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
              <img className="hero-panel-image" src={AetherVisuals} alt="Aether Systems visual showcase" />
              <h2 className="hero-panel-title">What you can expect</h2>
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

        <section id="projects" className="projects section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Projects</p>
              <h2>Selected delivered projects</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.name} className="project-card">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <ul>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <a className="btn btn-primary" href={`#${project.caseStudyId}`}>View Case Study</a>
                    {project.liveUrl && (
                      <a className="btn btn-secondary" href={project.liveUrl} target="_blank" rel="noreferrer">
                        Visit Live Site
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="visuals" className="visuals section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Brand Visuals</p>
              <h2>Recent campaign and product visual concepts</h2>
              <p>
                Newly added creative assets used to communicate Aether Systems positioning,
                delivery capabilities, and product direction.
              </p>
            </div>

            <div className="visuals-grid">
              {visuals.map((item) => (
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

        <section id="case-studies" className="case-studies section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Case Studies</p>
              <h2>Project breakdowns and delivery outcomes</h2>
              <p>Two projects are private internal systems and are shared here without client-identifying details.</p>
            </div>

            <div className="case-study-list">
              {caseStudies.map((study) => (
                <article id={study.id} key={study.id} className="case-study-card">
                  <p className="project-type">{study.type}</p>
                  <h3>{study.title}</h3>
                  <div className="case-study-grid">
                    <div>
                      <h4>Challenge</h4>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <h4>Approach</h4>
                      <p>{study.approach}</p>
                    </div>
                    <div>
                      <h4>Impact</h4>
                      <p>{study.impact}</p>
                    </div>
                  </div>
                  {study.liveUrl && (
                    <a className="case-study-link" href={study.liveUrl} target="_blank" rel="noreferrer">
                      Open {study.title}
                    </a>
                  )}
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
