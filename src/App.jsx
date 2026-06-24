import { useState } from 'react'
import businessImage from './assets/business-support.jpg'
import checkupImage from './assets/checkup-logistics.jpg'
import heroImage from './assets/shenzhen-concierge-hero.jpg'
import hotelImage from './assets/hotel-concierge.jpg'
import translationImage from './assets/translation-support.jpg'
import './App.css'

const navItems = [
  ['Services', '/services/'],
  ['Checkup logistics', '/routine-checkup-logistics-shenzhen/'],
  ['Translation', '/shenzhen-translation-companion/'],
  ['Pricing', '/pricing/'],
  ['Standards', '/standards/'],
  ['Contact', '/contact/'],
]

const services = [
  {
    title: 'Arrival and city setup',
    text: 'Airport, hotel, local route planning, meeting points, district orientation, and first-day Shenzhen setup.',
    points: ['Arrival guidance', 'Hotel and route planning', 'No credential handling'],
    icon: 'map',
    href: '/shenzhen-local-coordination/',
  },
  {
    title: 'Translation companion support',
    text: 'Practical Chinese-English support for scheduled visits, reception desks, business errands, and service counters.',
    points: ['Reception support', 'Practical interpretation', 'Day-of-visit coordination'],
    icon: 'translate',
    href: '/shenzhen-translation-companion/',
  },
  {
    title: 'Business visit coordination',
    text: 'Local logistics for meetings, exhibitions, supplier visits, factory tours, coworking days, and multi-stop schedules.',
    points: ['Itinerary planning', 'Meeting-day companion', 'Transport coordination'],
    icon: 'calendar',
    href: '/services/',
  },
  {
    title: 'Routine checkup logistics',
    text: 'Appointment request communication, arrival instructions, and practical interpretation for scheduled non-emergency visits.',
    points: ['Routine checkup coordination', 'No medical judgment', 'No treatment promise'],
    icon: 'checkup',
    href: '/routine-checkup-logistics-shenzhen/',
  },
]

const serviceScenes = [
  {
    title: 'Arrival and hotel setup',
    text: 'First-day logistics, meeting points, and practical city orientation.',
    image: hotelImage,
    href: '/shenzhen-local-coordination/',
  },
  {
    title: 'Routine checkup logistics',
    text: 'Scheduled non-emergency support without diagnosis, treatment advice, or provider guarantees.',
    image: checkupImage,
    href: '/routine-checkup-logistics-shenzhen/',
  },
  {
    title: 'Business visit support',
    text: 'Meeting-day routing, reception communication, and scheduled companion coverage.',
    image: businessImage,
    href: '/services/',
  },
]

const operatingStandards = [
  ['Scope first', 'Every paid request should have a written scope, quote, exclusions, and timing before work begins.'],
  ['No sensitive public uploads', 'The public form does not request medical records, passport images, payment credentials, or insurance cards.'],
  ['Contractor control', 'Interpreters and companions must follow no-medical-advice and no-payment-credential rules.'],
  ['Written trail', 'Quotes, timing, cancellation terms, and third-party exclusions are kept in writing.'],
]

const processSteps = [
  ['01', 'Request review', 'You send dates, contact method, and the practical support you need.'],
  ['02', 'Scope check', 'We confirm whether the request is within our coordination boundary.'],
  ['03', 'Quote and plan', 'You receive a written scope, price, timing, exclusions, and payment instructions.'],
  ['04', 'Delivery', 'We coordinate logistics while licensed providers make all medical or professional decisions.'],
]

const pricingPlans = [
  {
    name: 'Trip Readiness Review',
    usd: '$29',
    rmb: 'RMB 199',
    description: 'A paid written review of your dates, location, likely service fit, preparation checklist, and next step.',
    includes: ['Written logistics review', 'Preparation checklist', 'Credited if you book within 7 days'],
    cta: 'Start with a readiness review',
  },
  {
    name: 'Checkup or Local Coordination',
    usd: '$99',
    rmb: 'RMB 699',
    description: 'For one routine checkup, appointment, or local coordination request within a clearly written scope.',
    includes: ['Request review', 'Public contact communication', 'Provider fees not included'],
    featured: true,
    cta: 'Request coordination',
  },
  {
    name: 'Half-Day Companion',
    usd: '$199',
    rmb: 'RMB 1,480',
    description: 'Up to 4 hours of in-person support in Shenzhen for scheduled visits or local errands.',
    includes: ['Basic translation', 'One visit or errand block', 'Overtime billed separately'],
    cta: 'Check half-day availability',
  },
  {
    name: 'Full-Day Companion',
    usd: '$349',
    rmb: 'RMB 2,580',
    description: 'Up to 8 hours of in-person support for multi-stop visits, business days, or city assistance.',
    includes: ['Multi-stop support', 'Transport guidance', 'Overtime billed separately'],
    cta: 'Check full-day availability',
  },
]

const safeTasks = [
  'Route and meeting-point planning',
  'Basic Chinese-English communication',
  'Scheduled companion support',
  'Routine checkup logistics',
  'Travel timing and local logistics',
  'Clear quote before payment',
]

const redLines = [
  'No medical advice, diagnosis, prescriptions, treatment recommendations, or report interpretation',
  'No emergency, insurance, legal, immigration, banking, or investment services',
  'No provider ranking, clinical recommendation, priority access, or outcome guarantee',
  'No passport images, medical records, insurance cards, or payment credentials in the public form',
]

const contactOptions = [
  {
    name: 'WhatsApp',
    detail: '+86 151 2192 0345',
    href: 'https://wa.me/8615121920345',
    note: 'Best for international visitors',
  },
  {
    name: 'WeChat',
    detail: 'L18774947136',
    href: '/contact/#wechat',
    note: 'Scan the QR code or add ID',
  },
  {
    name: 'Email',
    detail: 'comilus@163.com',
    href: 'mailto:comilus@163.com',
    note: 'Best for detailed requests',
  },
]

function Icon({ name }) {
  const common = {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
  }

  const paths = {
    checkup: (
      <>
        <path d="M8 12.2l2.4 2.4L16.8 8" />
        <path d="M4.8 6.2h14.4v11.6H4.8z" />
        <path d="M9 4.4h6" />
      </>
    ),
    calendar: (
      <>
        <path d="M6.2 5.5h11.6a1.8 1.8 0 011.8 1.8v10.1a1.8 1.8 0 01-1.8 1.8H6.2a1.8 1.8 0 01-1.8-1.8V7.3a1.8 1.8 0 011.8-1.8z" />
        <path d="M8 3.8v3.1M16 3.8v3.1M4.7 9.4h14.6M8 13h3.4" />
      </>
    ),
    translate: (
      <>
        <path d="M4.6 5.4h8.3M8.8 3.7v1.7M11.8 5.4c-.7 3.5-2.9 6.3-6.2 8.1" />
        <path d="M6.5 8.6c1 2.1 2.9 3.9 5.5 5.1" />
        <path d="M14.4 19.8l1-2.7h4l1 2.7M16.8 10.7l-3.6 9.1M18 10.7l3.6 9.1" />
      </>
    ),
    map: (
      <>
        <path d="M5 6.7l4.5-1.8 5 1.8 4.5-1.8v12.4l-4.5 1.8-5-1.8-4.5 1.8z" />
        <path d="M9.5 4.9v12.4M14.5 6.7v12.4" />
      </>
    ),
  }

  return (
    <svg className="icon" {...common}>
      <g stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </g>
    </svg>
  )
}

function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="9" />
      <path d="M12 20.3c0-5.1 3.7-9 8.6-9 2.7 0 5 1.1 6.6 2.9l-2.3 2.3a5.7 5.7 0 00-4.3-1.9c-3 0-5.2 2.4-5.2 5.7s2.2 5.8 5.2 5.8c1.8 0 3.2-.6 4.4-1.9l2.2 2.3a8.8 8.8 0 01-6.7 2.9c-4.8 0-8.5-3.9-8.5-9.1z" />
      <path d="M27.8 10.8l3.4-1.1-1.1 3.5" />
      <path d="M28.7 11.7l-4.6 4.6" />
    </svg>
  )
}

function Header({ path }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Comilus home">
        <span className="brand-mark"><BrandMark /></span>
        <span>Comilus</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a className={path === href ? 'active' : ''} href={href} key={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href="/" aria-label="Comilus home">
          <span className="brand-mark"><BrandMark /></span>
          <span>Comilus</span>
        </a>
        <p>Shenzhen local coordination for international visitors.</p>
      </div>
      <div className="footer-legal">
        <p>
          Not a hospital, clinic, travel agency, insurer, or medical provider. For emergencies, contact local emergency services or go directly to an emergency department.
        </p>
        <nav aria-label="Footer links">
          <a href="/standards/">Operating standards</a>
          <a href="/pricing/">Pricing</a>
          <a href="/contact/">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

function Layout({ children, path }) {
  return (
    <div className="site-shell">
      <Header path={path} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

function PageHero({ title, text, image, children }) {
  return (
    <section className="page-hero">
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
      {image && <img src={image} alt="" loading="eager" decoding="sync" fetchPriority="high" />}
    </section>
  )
}

function ServiceGrid({ compact = false }) {
  return (
    <div className={compact ? 'service-grid compact-service-grid' : 'service-grid'}>
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <div className="icon-box">
            <Icon name={service.icon} />
          </div>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <ul>
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a className="plan-link" href={service.href}>View details</a>
        </article>
      ))}
    </div>
  )
}

function PricingGrid() {
  return (
    <div className="pricing-grid">
      {pricingPlans.map((plan) => (
        <article className={plan.featured ? 'pricing-card featured' : 'pricing-card'} key={plan.name}>
          {plan.featured && <span className="plan-marker">Most requested</span>}
          <h3>{plan.name}</h3>
          <div className="price-line">
            <strong>{plan.usd}</strong>
            <span>{plan.rmb}</span>
          </div>
          <p>{plan.description}</p>
          <ul>
            {plan.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="plan-link" href="/contact/">{plan.cta}</a>
        </article>
      ))}
    </div>
  )
}

function RequestForm() {
  const [formState, setFormState] = useState({ status: 'idle', message: '' })

  function handleSubmit(event) {
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim()
    const contact = formData.get('contact')?.toString().trim()
    const need = formData.get('need')?.toString().trim()
    const consent = formData.get('consent')

    if (!name || !contact || !need || !consent) {
      event.preventDefault()
      setFormState({
        status: 'error',
        message: 'Please add your name, contact method, request details, and confirm the service-scope acknowledgement.',
      })
    }
  }

  return (
    <form
      className="request-form"
      name="comilus-request"
      method="POST"
      action="/thanks.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="comilus-request" />
      <p className="hidden-field">
        <label>
          Do not fill this out if you are human
          <input name="bot-field" tabIndex="-1" autoComplete="off" />
        </label>
      </p>
      <div className="form-row">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" />
        </label>
        <label>
          Best contact method
          <input name="contact" type="text" placeholder="Email, WhatsApp, or WeChat" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Shenzhen dates
          <input name="date" type="text" placeholder="Example: July 12 to July 15" />
        </label>
        <label>
          Package interest
          <select name="package" defaultValue="Checkup or Local Coordination">
            {pricingPlans.map((plan) => (
              <option key={plan.name}>{plan.name}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label>
        Support needed
        <select name="category" defaultValue="Routine checkup logistics">
          <option>Routine checkup logistics</option>
          <option>Arrival and city setup</option>
          <option>Translation or companion support</option>
          <option>Business visit coordination</option>
          <option>Non-emergency appointment request</option>
          <option>Shenzhen local help</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        What should we help coordinate?
        <textarea name="need" rows="5" placeholder="Example: I will be in Shenzhen on July 12 and need help coordinating a routine health checkup with Chinese-English support." />
      </label>
      <p className="form-disclaimer">
        We use your request details only to assess and respond to your support request. Do not submit medical records, passport images, payment credentials, or emergency requests through this form.
      </p>
      <label className="consent-row">
        <input name="consent" type="checkbox" value="accepted" />
        <span>I understand Comilus provides coordination and translation support only, not medical advice, diagnosis, treatment, emergency response, insurance handling, or official representation of any provider.</span>
      </label>
      <button className="button primary form-button" type="submit">Submit request for review</button>
      {formState.message && (
        <p className="form-message error" role="status">
          {formState.message}
        </p>
      )}
    </form>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <h1>Shenzhen local support for international visitors</h1>
          <p className="hero-lede">
            A focused coordination service for routine checkup logistics, translation companion support, business visit help, and practical arrival setup.
          </p>
          <p className="hero-note">
            We handle logistics and communication only. Doctors and qualified professionals make all medical or legal decisions.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/contact/">Request review</a>
            <a className="button secondary" href="/services/">View services</a>
          </div>
          <div className="quick-contact" aria-label="Quick contact links">
            <a href="https://wa.me/8615121920345" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="/contact/#wechat">WeChat</a>
            <a href="mailto:comilus@163.com">Email</a>
          </div>
        </div>
        <div className="hero-media" aria-label="International visitor receiving local assistance in Shenzhen">
          <img
            src={heroImage}
            alt="A local assistant helping an international visitor arrive in Shenzhen"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="route-panel" aria-hidden="true">
            <span>SZX</span>
            <i />
            <span>CITY</span>
            <strong>Arrival support</strong>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service scope">
        <span>Shenzhen-based support for appointments, translation, arrival logistics, and local coordination.</span>
        <span>Response within 12 business hours</span>
        <span>Clear quote before payment</span>
      </section>

      <section className="scene-strip" aria-label="Comilus service scenes">
        {serviceScenes.map((scene) => (
          <article key={scene.title}>
            <img src={scene.image} alt={`${scene.title} scene`} />
            <div>
              <h3>{scene.title}</h3>
              <p>{scene.text}</p>
              <a className="plan-link" href={scene.href}>Open page</a>
            </div>
          </article>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>A narrow, documented service model</h2>
          <p>
            Comilus is built to be useful without crossing professional boundaries. We confirm scope, price, exclusions, and cancellation terms before paid work begins.
          </p>
        </div>
        <ServiceGrid compact />
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        text="Practical support for visitors who need Shenzhen to be understandable, scheduled, and documented without relying on informal arrangements."
        image={businessImage}
      >
        <div className="hero-actions">
          <a className="button primary" href="/contact/">Request help</a>
          <a className="button secondary" href="/standards/">Read boundaries</a>
        </div>
      </PageHero>
      <section className="section">
        <div className="section-heading align-left">
          <h2>Service lines</h2>
          <p>Each service is scoped before payment. We only accept requests that can be handled as logistics, communication, or companion support.</p>
        </div>
        <ServiceGrid />
      </section>
      <ProcessSection />
    </>
  )
}

function CheckupPage() {
  return (
    <>
      <PageHero
        title="Routine checkup logistics in Shenzhen"
        text="Coordination for scheduled non-emergency checkup visits: appointment request communication, arrival instructions, route timing, and practical Chinese-English support."
        image={checkupImage}
      >
        <div className="hero-actions">
          <a className="button primary" href="/contact/">Request routine checkup logistics</a>
          <a className="button secondary" href="/pricing/">See pricing</a>
        </div>
      </PageHero>
      <section className="page-band">
        <div className="authority-grid">
          <article>
            <h2>What we can coordinate</h2>
            <p>Appointment request communication, visit timing, meeting points, reception support, practical interpretation, and local route planning.</p>
          </article>
          <article>
            <h2>What we do not do</h2>
            <p>No diagnosis, treatment advice, report interpretation, clinical recommendation, provider ranking, insurance handling, or outcome guarantee.</p>
          </article>
          <article>
            <h2>How payment works</h2>
            <p>You receive a written scope and quote before payment. Comilus fees are separate from provider fees and third-party costs.</p>
          </article>
        </div>
      </section>
      <StandardsSummary />
    </>
  )
}

function TranslationPage() {
  return (
    <>
      <PageHero
        title="Translation companion support"
        text="Chinese-English practical communication support for scheduled visits, service counters, business errands, and routine non-emergency appointments in Shenzhen."
        image={translationImage}
      >
        <div className="hero-actions">
          <a className="button primary" href="/contact/">Check availability</a>
          <a className="button secondary" href="/standards/">Service limits</a>
        </div>
      </PageHero>
      <section className="split-section">
        <div>
          <h2>When this helps</h2>
          <p>Use this when you need a calm local companion for reception communication, route timing, meeting points, and practical conversations.</p>
        </div>
        <div className="credential-list">
          <span>Scheduled visit support</span>
          <span>Reception and counter communication</span>
          <span>Business-day routing</span>
          <span>Routine appointment companion coverage</span>
        </div>
      </section>
      <StandardsSummary />
    </>
  )
}

function LocalCoordinationPage() {
  return (
    <>
      <PageHero
        title="Shenzhen local coordination"
        text="Arrival setup, hotel area orientation, route planning, local communication, and first-day practical support for international visitors."
        image={hotelImage}
      >
        <div className="hero-actions">
          <a className="button primary" href="/contact/">Ask about coordination</a>
          <a className="button secondary" href="/services/">All services</a>
        </div>
      </PageHero>
      <section className="split-section">
        <div>
          <h2>Visitor setup without risky handling</h2>
          <p>We can guide practical steps, but we do not handle your bank apps, QR payment authorization, passports, passwords, or cash custody.</p>
        </div>
        <div className="credential-list">
          <span>Arrival timing</span>
          <span>Hotel transfer guidance</span>
          <span>Meeting points</span>
          <span>Local route planning</span>
        </div>
      </section>
    </>
  )
}

function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing"
        text="Simple starting prices for review, coordination, and companion support. Final fees depend on scope, timing, location, and contractor availability."
        image={businessImage}
      />
      <section className="section pricing-section">
        <PricingGrid />
        <div className="payment-rules">
          <article>
            <h3>Payment terms</h3>
            <p>Online services and appointment coordination are prepaid. In-person support is reserved with a 50% deposit, with the remaining balance due 24 hours before the scheduled start time.</p>
          </article>
          <article>
            <h3>Extra costs</h3>
            <p>Provider fees, checkup fees, transport, parking, meals, tickets, third-party interpreters, and processing fees are separate.</p>
          </article>
          <article>
            <h3>Cancellation</h3>
            <p>Cancel more than 48 hours before the scheduled start time for a 70% refund, 24-48 hours before for a 50% refund, and within 24 hours no refund.</p>
          </article>
        </div>
      </section>
    </>
  )
}

function StandardsPage() {
  return (
    <>
      <PageHero
        title="Operating standards and boundaries"
        text="The project is designed around survival-first risk control: narrow scope, written confirmation, no medical judgment, and no sensitive uploads through the public form."
        image={checkupImage}
      />
      <StandardsSummary />
      <section className="safety-section">
        <div>
          <h2>Clear red lines</h2>
          <p>We deliberately avoid high-liability work. Routine checkup logistics can be accepted, but medical decisions and emergency situations stay outside our scope.</p>
        </div>
        <div className="safety-lists">
          <article>
            <h3>Safe tasks</h3>
            <ul>
              {safeTasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Red lines</h3>
            <ul>
              {redLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Comilus"
        text="Send your dates, contact method, and practical support request. We review fit before requesting payment or detailed documents."
        image={translationImage}
      />
      <section className="request-section">
        <div className="request-copy">
          <h2>Request review</h2>
          <p>Use the form for practical requests only. Do not send medical records, passport images, payment credentials, or emergency requests.</p>
          <address>
            <span>Email</span>
            <a href="mailto:comilus@163.com">comilus@163.com</a>
          </address>
          <div className="direct-contact">
            <h3>Contact directly</h3>
            {contactOptions.map((option) => (
              <a
                href={option.href}
                key={option.name}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span>{option.name}</span>
                <strong>{option.detail}</strong>
                <small>{option.note}</small>
              </a>
            ))}
          </div>
        </div>
        <RequestForm />
      </section>
      <section className="wechat-section" id="wechat">
        <div>
          <h2>Add us on WeChat</h2>
          <p>
            Scan the QR code or add WeChat ID <strong>L18774947136</strong>. Please send your Shenzhen dates, preferred language, and the support you need.
          </p>
        </div>
        <img src="/wechat-qr.jpg" alt="WeChat QR code for Comilus contact" />
      </section>
    </>
  )
}

function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="section-heading align-left">
        <h2>A documented process before work starts</h2>
        <p>The first goal is not to collect sensitive records. It is to understand your logistics and whether we can help.</p>
      </div>
      <div className="process-list">
        {processSteps.map(([number, title, text]) => (
          <article className="process-row" key={number}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function StandardsSummary() {
  return (
    <section className="standard-section">
      <div className="standard-media">
        <img src={checkupImage} alt="Routine checkup logistics support in a clean reception setting" />
      </div>
      <div className="standard-copy">
        <h2>Built for low-risk, paid coordination</h2>
        <p>
          Comilus is not trying to become a hospital, travel agency, insurer, or legal adviser. The business is intentionally narrow: practical coordination that can be quoted, delivered, and documented.
        </p>
        <div className="standard-grid">
          {operatingStandards.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NotFoundPage() {
  return (
    <PageHero
      title="Page not found"
      text="The page you requested is not available. Use the navigation to open Comilus services, pricing, standards, or contact."
      image={heroImage}
    >
      <div className="hero-actions">
        <a className="button primary" href="/">Go home</a>
        <a className="button secondary" href="/contact/">Contact Comilus</a>
      </div>
    </PageHero>
  )
}

const pageMap = {
  '/': HomePage,
  '/services/': ServicesPage,
  '/routine-checkup-logistics-shenzhen/': CheckupPage,
  '/shenzhen-translation-companion/': TranslationPage,
  '/shenzhen-local-coordination/': LocalCoordinationPage,
  '/pricing/': PricingPage,
  '/standards/': StandardsPage,
  '/contact/': ContactPage,
}

function normalizePath(path) {
  if (path === '') return '/'
  if (!path.endsWith('/')) return `${path}/`
  return path
}

function App() {
  const path = normalizePath(window.location.pathname)
  const Page = pageMap[path] || NotFoundPage

  return (
    <Layout path={path}>
      <Page />
    </Layout>
  )
}

export default App
