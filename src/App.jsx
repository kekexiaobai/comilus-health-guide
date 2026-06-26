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
  ['FAQ', '/faq/'],
  ['Contact', '/contact/'],
]

const termsSections = [
  ['Service role', 'Comilus is a local coordination and translation support service in Shenzhen. We are not a hospital, clinic, medical provider, travel agency, insurer, law firm, immigration adviser, or payment service provider.'],
  ['Partner delivery model', 'Comilus may coordinate independent interpreters, local companions, drivers, administrative helpers, provider reception desks, or other service partners. We manage the written scope, timing, communication, and partner matching, but we do not claim that every person involved is a Comilus employee.'],
  ['Medical boundary', 'We do not provide medical advice, diagnosis, treatment recommendations, prescriptions, report interpretation, provider ranking, priority access, emergency response, or outcome guarantees. Doctors and qualified providers make all clinical decisions.'],
  ['Scope confirmation', 'Paid work should begin only after the service scope, location, timing, exclusions, fee, third-party costs, deposit, cancellation rule, and required information are confirmed in writing.'],
  ['Fees and third-party costs', 'Comilus fees pay for local coordination, partner matching, scheduling support, communication, and service management. Provider fees, checkup fees, transport, parking, meals, tickets, interpreter partner costs, payment processing fees, and other third-party costs are separate unless a written quote clearly includes them.'],
  ['Provider payments', 'Hospital, clinic, laboratory, hotel, transport, and other provider charges should normally be paid directly by the client to the provider. We do not sell hospital access, guarantee acceptance, or promise any medical result. Any formal provider cooperation must be documented and lawful.'],
  ['Cancellation and refunds', 'Unless a written quote states otherwise, cancellation more than 48 hours before the scheduled start time receives a 70% refund of Comilus service fees, 24-48 hours receives a 50% refund, and within 24 hours is non-refundable. Third-party costs may be non-refundable.'],
  ['Client responsibility', 'Clients are responsible for passports, visas, medical choices, payment credentials, insurance decisions, legal compliance, travel timing, and final decisions. Do not send emergency requests through the public form.'],
]

const privacySections = [
  ['Information we collect', 'The public request form asks for name, contact method, current country or city, preferred language, Shenzhen dates, package interest, support category, local partner need, timing, expected budget, request details, and service-scope acknowledgement.'],
  ['Sensitive information', 'Do not submit medical records, passport images, payment credentials, insurance cards, diagnosis details, bank details, or emergency information through the public form. If more information is needed later, we will ask for permission and explain why.'],
  ['How we use information', 'We use request details to assess whether the request fits our scope, respond to the client, prepare a quote, coordinate agreed support, and keep a written service trail.'],
  ['Third-party platforms', 'Messages sent by email, WhatsApp, WeChat, Telegram, PayPal, Netlify forms, or other platforms may also be processed by those third-party services under their own policies.'],
  ['Sharing', 'If a request later requires sharing limited details with a translator, companion, driver, provider reception desk, or other service partner, we aim to share only what is necessary for the agreed support.'],
  ['Retention and deletion', 'We keep request records only as long as needed for service review, coordination, dispute handling, accounting, and basic business records. Clients may request deletion of non-required records by contacting comilus@163.com.'],
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
    title: 'Interpreter and companion coordination',
    text: 'We coordinate suitable local interpreters or companions for scheduled visits, reception desks, business errands, and service counters.',
    points: ['Partner matching', 'Practical interpretation', 'Day-of-visit coordination'],
    icon: 'translate',
    href: '/shenzhen-translation-companion/',
  },
  {
    title: 'Business visit coordination',
    text: 'Local logistics and partner coordination for meetings, exhibitions, supplier visits, factory tours, coworking days, and multi-stop schedules.',
    points: ['Itinerary planning', 'Partner coordination', 'Transport coordination'],
    icon: 'calendar',
    href: '/services/',
  },
  {
    title: 'Routine checkup logistics',
    text: 'Appointment request communication, arrival instructions, and interpreter or companion coordination for scheduled non-emergency visits.',
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
  ['Partner control', 'Interpreters, companions, drivers, and other partners must follow no-medical-advice and no-payment-credential rules.'],
  ['Written trail', 'Quotes, timing, cancellation terms, and third-party exclusions are kept in writing.'],
]

const processSteps = [
  ['01', 'Request review', 'You send dates, location, preferred language, contact method, and the support you need.'],
  ['02', 'Fit check', 'We check whether the request is practical, legal, non-emergency, and inside our service boundary.'],
  ['03', 'Written quote', 'You receive a written scope, price, timing, exclusions, partner role, and payment instructions.'],
  ['04', 'Coordination', 'We coordinate logistics and local partners while licensed providers make all medical or professional decisions.'],
]

const pricingPlans = [
  {
    name: 'Trip Plan Review',
    note: 'Online review',
    usd: '$29',
    rmb: 'RMB 199',
    description: 'A written review of your Shenzhen dates, support needs, possible service fit, and next practical steps.',
    includes: ['Written reply', 'Preparation checklist', 'Credit applied if you book within 7 days'],
    cta: 'Start with plan review',
  },
  {
    name: 'Single Request Coordination',
    note: 'Before arrival',
    usd: 'From $69',
    rmb: 'From RMB 499',
    description: 'Coordination for one routine appointment request, checkup logistics request, or local service request.',
    includes: ['Request communication', 'Schedule and route check', 'Provider fees paid separately'],
    cta: 'Request coordination',
  },
  {
    name: 'Half-Day Local Partner',
    note: 'Up to 4 hours',
    usd: 'From $129',
    rmb: 'From RMB 899',
    description: 'We arrange a local interpreter or companion partner for a scheduled visit or local errand in Shenzhen.',
    includes: ['Partner matching', 'Partner briefing', 'Overtime quoted before confirmation'],
    cta: 'Check partner availability',
  },
  {
    name: 'Full-Day Local Partner',
    note: 'Up to 8 hours',
    usd: 'From $279',
    rmb: 'From RMB 1,980',
    description: 'For longer visits, multi-stop days, or business support where Comilus manages the local partner arrangement.',
    includes: ['Partner matching', 'Partner briefing', 'Transport costs separate'],
    cta: 'Request a full-day quote',
  },
]

const pricingFactors = [
  ['What your fee covers', 'Your Comilus fee covers request review, written scope, partner matching, schedule checks, client communication, and service management. It is not a hospital or treatment fee.'],
  ['Why quotes can change', 'Language, city, service duration, urgency, weekend timing, provider rules, partner availability, professional difficulty, and overtime can change the final quote.'],
  ['What stays separate', 'Hospital, clinic, lab, hotel, transport, parking, meals, ticket, and provider charges should normally be paid directly by the client unless a written quote clearly says otherwise.'],
]

const faqItems = [
  ['Why is Comilus more expensive than some local companion apps?', 'Local low-cost platforms usually sell basic domestic companion time. Comilus prices for international visitor support: English communication, pre-visit planning, written scope, partner matching, schedule confirmation, risk boundaries, and service management.'],
  ['Do you personally provide the interpreter or companion?', 'Not always. Comilus may coordinate independent interpreters, local companions, drivers, or service partners. We focus on matching, scope control, communication, and making sure the arrangement fits our boundaries.'],
  ['Are hospital or checkup fees included?', 'No, not by default. Provider charges are separate and should normally be paid directly by the client to the provider. If any third-party cost is included, it must be clearly written in the quote.'],
  ['Can you recommend the best hospital or guarantee access?', 'No. We can coordinate logistics and public-facing communication, but we do not sell hospital access, rank providers, guarantee acceptance, or promise medical results.'],
  ['Can the interpreter enter the consultation room?', 'This depends on the provider rules, patient consent, appointment type, and site conditions. We confirm what is allowed before paid work begins whenever possible.'],
  ['How is overtime charged?', 'Overtime is quoted before confirmation when possible. If a visit runs long unexpectedly, the client must approve additional paid time before the partner continues beyond the agreed scope.'],
  ['Can I send medical records through the form?', 'No. The public form is only for initial request review. Do not submit medical records, passport images, payment credentials, insurance cards, or emergency requests through it.'],
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

const requestGuidance = [
  ['What to include', 'Dates in Shenzhen, current country or city, preferred language, contact method, service type, timing, and whether you need an in-person local partner.'],
  ['What happens next', 'We review whether the request fits our scope. If it does, we reply with questions or a written quote before requesting payment.'],
  ['What not to send', 'Do not send medical records, passport images, payment credentials, insurance cards, diagnosis details, or emergency requests through this form.'],
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
            <a href="/faq/">FAQ</a>
            <a href="/terms/">Terms</a>
            <a href="/privacy/">Privacy</a>
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
        <article className="pricing-card" key={plan.name}>
          <span className="plan-note">{plan.note}</span>
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
          Current country or city
          <input name="location" type="text" placeholder="Example: Singapore, London, Dubai" />
        </label>
        <label>
          Preferred language
          <input name="language" type="text" placeholder="Example: English, Arabic, Russian" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Shenzhen dates
          <input name="date" type="text" placeholder="Example: July 12 to July 15" />
        </label>
        <label>
          Package interest
          <select name="package" defaultValue="Single Request Coordination">
            {pricingPlans.map((plan) => (
              <option key={plan.name}>{plan.name}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          Support needed
          <select name="category" defaultValue="Routine checkup logistics">
            <option>Routine checkup logistics</option>
            <option>Arrival and city setup</option>
            <option>Interpreter or companion coordination</option>
            <option>Business visit coordination</option>
            <option>Non-emergency appointment request</option>
            <option>Shenzhen local help</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          In-person local partner
          <select name="local_partner" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Yes, I may need an interpreter or companion</option>
            <option>No, online coordination only</option>
            <option>Maybe, depending on the quote</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          Timing
          <select name="timing" defaultValue="Flexible">
            <option>Flexible</option>
            <option>Within 48 hours</option>
            <option>This week</option>
            <option>Specific appointment date</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Expected budget
          <select name="budget" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Under $100</option>
            <option>$100-$300</option>
            <option>$300-$800</option>
            <option>Over $800</option>
          </select>
        </label>
      </div>
      <label>
        What should we help coordinate?
        <textarea name="need" rows="5" placeholder="Example: I will be in Shenzhen on July 12. I need help coordinating a routine checkup request and may need Chinese-English support for reception." />
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
            Local coordination for routine checkup logistics, interpreter and companion partner matching, business visit help, and practical arrival setup.
          </p>
          <p className="hero-note">
            We coordinate logistics, communication, and local partners only. Doctors and qualified professionals make all medical or legal decisions.
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
        <span>Written scope and quote before payment</span>
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
            Comilus is built to provide useful coordination without crossing professional boundaries. We confirm scope, price, partner role, exclusions, and cancellation terms before paid work begins.
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
        text="Practical local coordination for visitors who need Shenzhen to be understandable, scheduled, and documented without relying on informal arrangements."
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
          <p>Each service is scoped before payment. We only accept requests that can be handled as logistics, communication, partner matching, or companion coordination.</p>
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
        text="Coordination for scheduled non-emergency checkup visits: appointment request communication, arrival instructions, route timing, and interpreter or companion partner matching."
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
            <p>Appointment request communication, visit timing, meeting points, reception support, interpreter or companion partner matching, and local route planning.</p>
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
        text="Chinese-English interpreter and companion partner coordination for scheduled visits, service counters, business errands, and routine non-emergency appointments in Shenzhen."
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
          <p>Use this when you need Comilus to coordinate a suitable local partner for reception communication, route timing, meeting points, and practical conversations.</p>
        </div>
        <div className="credential-list">
          <span>Scheduled visit support</span>
          <span>Reception and counter communication</span>
          <span>Partner matching and briefing</span>
          <span>Routine appointment companion coordination</span>
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
        text="Starting service fees for planning, coordination, and local partner arrangements. Final quotes are confirmed in writing before payment."
        image={businessImage}
      />
      <section className="section pricing-section">
        <div className="pricing-intro">
          <h2>Service fees, not medical fees</h2>
          <p>
            These prices are Comilus coordination fees. Provider charges, checkup charges, transport, special-language interpreters, overtime, and other third-party costs are separate unless a written quote includes them.
          </p>
        </div>
        <PricingGrid />
        <div className="pricing-explainer">
          {pricingFactors.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="payment-rules">
          <article>
            <h3>Payment terms</h3>
            <p>Online reviews and appointment coordination are prepaid. In-person partner arrangements are normally reserved with a 50% deposit, with the remaining balance due 24 hours before the scheduled start time.</p>
          </article>
          <article>
            <h3>Extra costs</h3>
            <p>Provider fees, checkup fees, transport, parking, meals, tickets, professional interpreters, special-language partners, overtime, and processing fees are separate unless included in writing.</p>
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

function FaqPage() {
  return (
    <>
      <PageHero
        title="FAQ"
        text="Answers for clients before they pay: what Comilus charges for, what partners may deliver, what is separate, and where the service boundary stops."
        image={translationImage}
      >
        <div className="hero-actions">
          <a className="button primary" href="/contact/">Submit a request</a>
          <a className="button secondary" href="/pricing/">See pricing</a>
        </div>
      </PageHero>
      <section className="faq-list">
        {faqItems.map(([question, answer]) => (
          <article key={question}>
            <h2>{question}</h2>
            <p>{answer}</p>
          </article>
        ))}
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

function TermsPage() {
  return (
    <>
      <PageHero
        title="Service terms"
        text="The practical rules for using Comilus: narrow coordination scope, written confirmation before payment, clear cancellation terms, and strict medical-service boundaries."
        image={businessImage}
      />
      <section className="policy-section">
        {termsSections.map(([title, text]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
        <p className="policy-note">
          These terms are written for clarity and risk control, but they are not a substitute for advice from a qualified lawyer or accountant. If a written quote conflicts with this page, the written quote controls for that specific service.
        </p>
      </section>
    </>
  )
}

function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy notice"
        text="How Comilus handles request details, sensitive information boundaries, third-party platforms, and basic record retention."
        image={translationImage}
      />
      <section className="policy-section">
        {privacySections.map(([title, text]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
        <p className="policy-note">
          For privacy requests, corrections, or deletion of non-required records, contact comilus@163.com. Do not use the public form for emergencies or sensitive document uploads.
        </p>
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
          <p>Use the form for practical requests only. Clear details help us decide whether we can help and prepare a realistic quote.</p>
          <div className="request-guidance">
            {requestGuidance.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
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
  '/faq/': FaqPage,
  '/terms/': TermsPage,
  '/privacy/': PrivacyPage,
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
