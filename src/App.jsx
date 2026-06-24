import { useMemo, useState } from 'react'
import businessImage from './assets/business-support.png'
import checkupImage from './assets/checkup-logistics.png'
import heroImage from './assets/shenzhen-concierge-hero.png'
import hotelImage from './assets/hotel-concierge.png'
import translationImage from './assets/translation-support.png'
import './App.css'

const services = [
  {
    title: 'Arrival and city setup',
    text: 'Airport, hotel, SIM, transport, district orientation, and everyday Shenzhen setup for first-time visitors.',
    points: ['Arrival guidance', 'Hotel and route planning', 'No payment credential handling'],
    icon: 'map',
  },
  {
    title: 'Translation and companion support',
    text: 'Practical Chinese-English support for scheduled visits, service counters, business errands, and local communication.',
    points: ['Reception support', 'Practical interpretation', 'Day-of-visit coordination'],
    icon: 'translate',
  },
  {
    title: 'Business visit coordination',
    text: 'Local logistics for meetings, exhibitions, factory visits, coworking days, and multi-stop business schedules.',
    points: ['Itinerary planning', 'Meeting-day companion', 'Transport coordination'],
    icon: 'calendar',
  },
  {
    title: 'Checkup logistics support',
    text: 'For routine health checkups or simple non-emergency appointments, we help with logistics, communication, and translation only.',
    points: ['Routine checkup coordination', 'No medical judgment', 'No treatment promise'],
    icon: 'checkup',
  },
]

const audiences = [
  {
    title: 'First-time visitors',
    text: 'People who need a calm local contact for arrival, transport, SIM, payments guidance, and basic city orientation.',
  },
  {
    title: 'Business travelers',
    text: 'Visitors attending meetings, exhibitions, supplier visits, factory tours, coworking days, or multi-stop schedules.',
  },
  {
    title: 'Families and companions',
    text: 'Visitors who want practical language support, route planning, and a local coordinator for scheduled non-emergency tasks.',
  },
]

const useCases = [
  {
    title: 'Landing in Shenzhen',
    image: hotelImage,
    text: 'We help plan arrival steps, meeting points, hotel transfer guidance, SIM/payment method guidance, and first-day city basics.',
    safe: 'We do not handle passwords, bank apps, payment authorization, passports, or cash custody.',
  },
  {
    title: 'Business day support',
    image: businessImage,
    text: 'We coordinate routes, meeting timing, local communication, reception desk support, and companion coverage for scheduled business visits.',
    safe: 'We do not negotiate contracts, give legal advice, or represent you in commercial decisions.',
  },
  {
    title: 'Routine checkup support',
    image: checkupImage,
    text: 'We can help with routine checkup logistics, appointment request communication, arrival instructions, and practical interpretation during scheduled non-emergency visits.',
    safe: 'Doctors and providers make all medical decisions. We do not explain diagnoses, recommend tests or treatments, or promise results.',
  },
]

const serviceScenes = [
  {
    title: 'Hotel and arrival coordination',
    text: 'A local contact for first-day setup, meeting points, and practical city logistics.',
    image: hotelImage,
  },
  {
    title: 'Routine checkup logistics',
    text: 'Appointment request communication, arrival instructions, and translation support without medical advice.',
    image: checkupImage,
  },
  {
    title: 'Business visit support',
    text: 'Meeting-day routing, reception communication, and scheduled companion coverage.',
    image: businessImage,
  },
  {
    title: 'Translation companion',
    text: 'Chinese-English practical communication at agreed locations and within a written scope.',
    image: translationImage,
  },
]

const operatingStandards = [
  ['Scope first', 'We confirm what is included, excluded, and payable before work begins.'],
  ['No sensitive uploads', 'The public form does not ask for medical records, passports, insurance cards, or payment credentials.'],
  ['Contractor control', 'Interpreters and companions must follow no-medical-advice and no-payment-credential rules.'],
  ['Written trail', 'Quotes, timing, cancellation terms, and third-party exclusions are confirmed in writing.'],
]

const seoPages = {
  '/routine-checkup-logistics-shenzhen/': {
    title: 'Routine Checkup Logistics Support in Shenzhen',
    intro: 'Comilus helps international visitors coordinate routine checkup logistics in Shenzhen without giving medical advice, diagnosis, treatment recommendations, or provider guarantees.',
    sections: [
      ['What we can coordinate', 'Appointment request communication, arrival instructions, practical Chinese-English interpretation, meeting-point planning, and companion support for scheduled non-emergency visits.'],
      ['What we do not do', 'We do not recommend doctors, choose treatment, explain diagnoses, interpret reports, handle insurance claims, or promise appointment availability, provider acceptance, prices, timing, or outcomes.'],
      ['How pricing works', 'You receive a written scope and quote before payment. Comilus fees are separate from provider fees, checkup fees, transport, parking, meals, and third-party costs.'],
    ],
    cta: 'Request routine checkup logistics',
  },
  '/shenzhen-translation-companion/': {
    title: 'Shenzhen Translation Companion Support',
    intro: 'Practical Chinese-English communication support for scheduled visits, local errands, reception counters, business days, and routine non-emergency appointments in Shenzhen.',
    sections: [
      ['When it helps', 'Use this when you need a calm local companion to help with practical communication, route timing, meeting points, and service-counter conversations.'],
      ['Strict boundary', 'We translate and coordinate only. We do not provide medical, legal, financial, insurance, immigration, or emergency advice.'],
      ['Booking model', 'Half-day and full-day support depend on contractor availability. Scope, timing, location, fees, and cancellation rules are confirmed before payment.'],
    ],
    cta: 'Check companion availability',
  },
  '/shenzhen-local-coordination/': {
    title: 'Shenzhen Local Coordination for Visitors',
    intro: 'Arrival setup, route planning, hotel transfer guidance, SIM and payment-method guidance, local communication, and practical Shenzhen support for international visitors.',
    sections: [
      ['Visitor setup', 'We can help you plan arrival steps, local transport, meeting points, hotel area logistics, and first-day Shenzhen basics.'],
      ['No credential handling', 'We do not handle your payment passwords, bank apps, QR authorization, passport images, or payment credentials.'],
      ['Best fit', 'First-time visitors, business travelers, families, and companions who need a local contact before or during a scheduled visit.'],
    ],
    cta: 'Ask about Shenzhen coordination',
  },
  '/pricing/': {
    title: 'Comilus Pricing',
    intro: 'Review Comilus pricing for readiness reviews, routine checkup logistics, local coordination, and half-day or full-day companion support in Shenzhen.',
    sections: [
      ['Entry review', 'Trip Readiness Review starts at USD 29 / RMB 199 and can be credited if you book within 7 days.'],
      ['Coordination', 'Checkup or Local Coordination starts at USD 99 / RMB 699 for one clearly scoped routine request.'],
      ['Companion support', 'Half-day and full-day support are quoted with clear time limits, deposits, exclusions, and cancellation terms.'],
    ],
    cta: 'Submit request for review',
  },
  '/contact/': {
    title: 'Contact Comilus',
    intro: 'Contact Comilus for Shenzhen routine checkup logistics, translation companion support, local coordination, arrival setup, or business visit help.',
    sections: [
      ['WhatsApp', '+86 151 2192 0345'],
      ['WeChat', 'Add WeChat ID L18774947136 or scan the QR code on this site.'],
      ['Email', 'comilus@163.com'],
    ],
    cta: 'Send a request',
  },
}

const processSteps = [
  ['01', 'Tell us what you need', 'Share your dates, language needs, location, and the kind of help you want.'],
  ['02', 'We review the request', 'We check whether it is within our coordination scope and identify practical next steps.'],
  ['03', 'Confirm the support plan', 'You receive the service scope, estimated fee, timing, and information needed.'],
  ['04', 'Complete the visit', 'We help with coordination while medical services remain with licensed providers.'],
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
    includes: ['Request review', 'Public contact communication', 'Medical/provider fees not included'],
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

const limits = [
  'No medical diagnosis or treatment recommendations',
  'No prescription, insurance claim, or emergency response services',
  'No guarantee of hospital acceptance, appointment availability, or outcomes',
  'No official representation of hospitals, clinics, or government bodies',
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
  'No medical advice, diagnosis, treatment, prescriptions, or report interpretation',
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
    href: '#wechat',
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

function SeoLandingPage({ page }) {
  return (
    <div className="seo-page">
      <header className="site-header static-header">
        <a className="brand" href="/" aria-label="Comilus home">
          <span className="brand-mark"><BrandMark /></span>
          <span>Comilus</span>
        </a>
        <nav className="nav" aria-label="SEO page navigation">
          <a href="/">Home</a>
          <a href="/pricing/">Pricing</a>
          <a href="/contact/">Contact</a>
        </nav>
      </header>
      <main>
        <section className="seo-hero">
          <div>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            <a className="button primary" href="/#request">{page.cta}</a>
          </div>
          <img src={checkupImage} alt="Comilus coordination support in Shenzhen" />
        </section>
        <section className="seo-content">
          {page.sections.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>
        <section className="seo-cta">
          <h2>Need practical help in Shenzhen?</h2>
          <p>Send your dates, contact method, and the practical support you need. We review scope before quoting or taking payment.</p>
          <div className="hero-actions">
            <a className="button primary" href="/#request">Submit request</a>
            <a className="button secondary" href="https://wa.me/8615121920345" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </section>
      </main>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formState, setFormState] = useState({ status: 'idle', message: '' })
  const [selectedPackage, setSelectedPackage] = useState('Checkup or Local Coordination')
  const [activeUseCase, setActiveUseCase] = useState(0)
  const currentPath = window.location.pathname
  const seoPage = seoPages[currentPath]

  const requestSummary = useMemo(
    () => 'Shenzhen-based support for appointments, translation, arrival logistics, and local coordination.',
    [],
  )

  if (seoPage) {
    return <SeoLandingPage page={seoPage} />
  }

  function encodeForm(formData) {
    return new URLSearchParams(formData).toString()
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim()
    const contact = formData.get('contact')?.toString().trim()
    const need = formData.get('need')?.toString().trim()
    const consent = formData.get('consent')

    if (!name || !contact || !need || !consent) {
      setFormState({
        status: 'error',
        message: 'Please add your name, contact method, request details, and confirm the service-scope acknowledgement.',
      })
      return
    }

    setFormState({ status: 'loading', message: 'Submitting your request...' })

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(formData),
      })
      setFormState({
        status: 'success',
        message: 'Thanks. We received your request and will review it within 12 business hours. If it fits our scope, we will send a clear plan, quote, and payment link before work begins.',
      })
      event.currentTarget.reset()
      setSelectedPackage('Checkup or Local Coordination')
    } catch {
      setFormState({
        status: 'error',
        message: 'The form could not be submitted. Please email comilus@163.com with your dates, contact method, and request details.',
      })
    }
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Comilus home">
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
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#guide" onClick={() => setMenuOpen(false)}>Guide</a>
          <a href="#request" onClick={() => setMenuOpen(false)}>Request help</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <h1>Shenzhen local help for international visitors</h1>
            <p className="hero-lede">
              Routine checkup logistics, translation companion support, business visit help, and carefully scoped local coordination in Shenzhen.
            </p>
            <p className="hero-note">
              We handle practical logistics and communication only. Doctors and qualified professionals make all medical or legal decisions.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#request">Check availability</a>
              <a className="button secondary" href="#pricing">Compare support options</a>
            </div>
            <div className="quick-contact" aria-label="Quick contact links">
              <a href="https://wa.me/8615121920345" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="#wechat">WeChat</a>
              <a href="mailto:comilus@163.com">Email</a>
            </div>
          </div>
          <div className="hero-media" aria-label="International visitor receiving local assistance in Shenzhen">
            <img src={heroImage} alt="A local assistant helping an international visitor arrive in Shenzhen" />
            <div className="route-panel" aria-hidden="true">
              <span>SZX</span>
              <i />
              <span>CITY</span>
              <strong>Arrival support</strong>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Service scope">
          <span>{requestSummary}</span>
          <span>Response within 12 business hours</span>
          <span>Clear quote before payment</span>
        </section>

        <section className="scene-strip" aria-label="Comilus service scenes">
          {serviceScenes.slice(0, 3).map((scene) => (
            <article key={scene.title}>
              <img src={scene.image} alt={`${scene.title} scene`} />
              <div>
                <h3>{scene.title}</h3>
                <p>{scene.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="section section-services" id="services">
          <div className="section-heading">
            <h2>Practical help, tightly scoped</h2>
            <p>
              Comilus is built for visitors who need a local person to make Shenzhen logistics understandable while staying inside strict service boundaries.
            </p>
          </div>
          <div className="service-grid">
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
              </article>
            ))}
          </div>
        </section>

        <section className="audience-section">
          <div className="section-heading align-left">
            <h2>Who we can safely help</h2>
            <p>
              We focus on normal, non-emergency visitor logistics where a local coordinator can add value without taking professional or legal responsibility.
            </p>
          </div>
          <div className="audience-grid">
            {audiences.map((audience) => (
              <article key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
        </section>

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

        <section className="section process-section" id="process">
          <div className="section-heading align-left">
            <h2>A simple process before you travel</h2>
            <p>
              The first goal is not to collect sensitive records. It is to understand your logistics and whether we can help.
            </p>
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

        <section className="use-case-section" id="guide">
          <div className="use-case-copy">
            <h2>Safe ways to use Comilus</h2>
            <p>
              We keep the service narrow by design. Pick a practical scenario first, then we confirm whether it fits our scope before quoting or taking payment.
            </p>
            <div className="use-case-tabs" role="tablist" aria-label="Comilus use cases">
              {useCases.map((item, index) => (
                <button
                  className={activeUseCase === index ? 'active' : ''}
                  key={item.title}
                  type="button"
                  onClick={() => setActiveUseCase(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <div className="use-case-display">
            <img src={useCases[activeUseCase].image} alt={`${useCases[activeUseCase].title} support scene`} />
            <div>
              <h3>{useCases[activeUseCase].title}</h3>
              <p>{useCases[activeUseCase].text}</p>
              <strong>{useCases[activeUseCase].safe}</strong>
            </div>
          </div>
        </section>

        <section className="safety-section">
          <div>
            <h2>Survival-first operating boundaries</h2>
            <p>
              We deliberately avoid high-liability work. Routine checkup logistics can be accepted, but diagnosis, treatment decisions, emergencies, insurance, banking, and official representation are outside our scope.
            </p>
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

        <section className="section pricing-section" id="pricing">
          <div className="section-heading">
            <h2>Clear pricing before we start</h2>
            <p>
              You receive a confirmed scope and payment link before any paid work begins. Provider, transport, and third-party fees are separate.
            </p>
          </div>
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
                <a
                  className="plan-link"
                  href="#request"
                  onClick={() => setSelectedPackage(plan.name)}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
          <div className="payment-rules">
            <article>
              <h3>Payment terms</h3>
              <p>Online services and appointment coordination are prepaid. In-person support is reserved with a 50% deposit, with the remaining balance due 24 hours before the scheduled start time.</p>
            </article>
            <article>
              <h3>Extra costs</h3>
              <p>Comilus service fees do not include provider fees, checkup fees, transport, parking, meals, tickets, third-party interpreters, or payment processing fees.</p>
            </article>
            <article>
              <h3>Cancellation</h3>
              <p>Cancel more than 48 hours before the scheduled start time for a 70% refund, 24-48 hours before for a 50% refund, and within 24 hours no refund. Third-party costs may be non-refundable.</p>
            </article>
          </div>
        </section>

        <section className="limits-section" aria-label="Important service limits">
          <div>
            <h2>Important limits</h2>
            <p>
              Comilus is a local assistance and coordination service. We keep the boundary clear so visitors know what we can and cannot do.
            </p>
          </div>
          <ul>
            {limits.map((limit) => (
              <li key={limit}>{limit}</li>
            ))}
          </ul>
        </section>

        <section className="request-section" id="request">
          <div className="request-copy">
            <h2>Tell us what you need in Shenzhen</h2>
            <p>
              Share your dates, contact method, and the practical help you need. We confirm whether we can help before requesting payment or detailed documents.
            </p>
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

          <form
            className="request-form"
            name="comilus-request"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
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
                <select
                  name="package"
                  value={selectedPackage}
                  onChange={(event) => setSelectedPackage(event.target.value)}
                >
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
              <textarea name="need" rows="5" placeholder="Example: I will be in Shenzhen on July 12 and need help coordinating a routine health checkup with Chinese-English support. I may need a half-day companion." />
            </label>
            <p className="form-disclaimer">
              We use your request details only to assess and respond to your support request. Do not submit medical records, passport images, payment credentials, or emergency requests through this form.
            </p>
            <label className="consent-row">
              <input name="consent" type="checkbox" value="accepted" />
              <span>I understand Comilus provides coordination and translation support only, not medical advice, diagnosis, treatment, emergency response, insurance handling, or official representation of any provider.</span>
            </label>
            <button className="button primary form-button" type="submit" disabled={formState.status === 'loading'}>
              {formState.status === 'loading' ? 'Submitting...' : 'Submit request for review'}
            </button>
            {formState.message && (
              <p className={formState.status === 'error' ? 'form-message error' : 'form-message success'} role="status">
                {formState.message}
              </p>
            )}
          </form>
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

        <section className="legal-section" id="privacy">
          <article>
            <h2>Privacy notice</h2>
            <p>
              We use request details only to assess, respond to, and coordinate your support request. Please do not submit medical records, passport images, payment credentials, insurance cards, diagnosis details, or emergency requests through the public form.
            </p>
            <p>
              If a request later requires sharing details with a provider, translator, driver, or other service partner, we will ask for your permission first. Messages sent through email, WhatsApp, or WeChat may also be processed by those third-party platforms.
            </p>
          </article>
          <article id="terms">
            <h2>Service terms</h2>
            <p>
              Comilus is a customer-side local coordination service. We do not provide medical, legal, immigration, insurance, financial, or emergency services, and we do not guarantee appointment availability, provider acceptance, report timing, or outcomes.
            </p>
            <p>
              Comilus service fees are separate from provider fees and third-party costs. Scope, price, deposit, cancellation terms, no-show rules, and required information should be confirmed before payment.
            </p>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="brand footer-brand" href="#top" aria-label="Comilus home">
            <span className="brand-mark"><BrandMark /></span>
            <span>Comilus</span>
          </a>
          <p>Shenzhen local help for international visitors.</p>
        </div>
        <div className="footer-legal">
          <p>
            Not a hospital, clinic, travel agency, or medical provider. For emergencies, contact local emergency services or go directly to an emergency department.
          </p>
          <nav aria-label="Legal links">
            <a href="#privacy">Privacy notice</a>
            <a href="#terms">Service terms</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
