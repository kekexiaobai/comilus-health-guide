# Comilus Health Guide

Comilus is a Shenzhen local coordination service for international visitors. The site is built to generate paid leads for non-emergency health checkup logistics, appointment communication support, translation/companion support, business visits, and practical local help.

## Operating Standard

This project should be run to the standard of a small premium service company, not a hobby landing page.

- Product owner standard: every page must make the offer, scope, price, next step, and limitations clear.
- Revenue standard: every major section should move visitors toward a qualified inquiry, paid review, or companion booking.
- Compliance standard: Comilus does not provide medical advice, diagnosis, treatment recommendations, emergency response, insurance handling, legal advice, immigration advice, or official representation of any provider.
- Customer support standard: every lead should receive triage within 12 business hours when the service is live.
- Data standard: public forms should collect only basic logistics information. Do not collect medical records, passport images, payment credentials, diagnosis details, insurance cards, or emergency requests through the public form.

## Business Model

Primary revenue:

- Trip readiness review
- Appointment coordination
- Half-day companion support
- Full-day companion support
- Custom local support for families, business visitors, and multi-day plans

Secondary revenue:

- Referral fees from translators, drivers, hotels, serviced apartments, and eligible local partners
- Add-ons such as urgent request handling, additional traveler support, or written visit summaries

## Current Pricing Direction

- Trip readiness review: USD 29 / RMB 199
- Appointment coordination: USD 99 / RMB 699
- Half-day companion: USD 199 / RMB 1,480
- Full-day companion: USD 349 / RMB 2,580

Pricing is intentionally visible to filter low-intent leads. The entry offer is a paid readiness review and can be credited toward larger bookings within 7 days.

## Current Technical Stack

- React
- Vite
- CSS modules through standard imported CSS files
- Static front-end only

Important files:

- `src/App.jsx`: page content, service data, pricing data, form behavior
- `src/App.css`: page layout and component styling
- `src/index.css`: global design tokens and base styles
- `src/assets/shenzhen-concierge-hero.png`: generated hero asset
- `src/assets/comilus-concept.png`: visual concept reference

## Local Development

```bash
npm install
npm run dev
```

Build and lint:

```bash
npm run build
npm run lint
```

## Launch Priorities

1. Connect the form to a real lead destination.
2. Add WhatsApp, WeChat, and Email instant contact actions.
3. Add analytics for form submit, email click, WhatsApp click, WeChat QR view, and pricing CTA clicks.
4. Publish focused service pages for search traffic.
5. Add privacy policy, terms, and operating scripts before paid traffic.

## 30-Day Growth Plan

Days 1-3:

- Connect form backend.
- Add instant contact CTAs.
- Set up lead spreadsheet or CRM.
- Add analytics.

Days 4-10:

- Publish pages for routine checkup logistics, appointment request communication, translation companion, Shenzhen arrival setup, and business visit assistant.

Days 11-17:

- Prepare Google Business Profile if eligible.
- Add real Shenzhen photos, service descriptions, and contact links.

Days 18-24:

- Contact hotels, serviced apartments, relocation agents, interpreters, drivers, coworking spaces, and business visit partners.

Days 25-30:

- Run a small high-intent paid search test only after form capture and tracking are working.

## Risk Rules

- Do not claim partnership, endorsement, priority access, guaranteed booking, or guaranteed outcomes unless documented.
- Do not interpret symptoms, recommend treatment, compare clinical quality, explain diagnosis, or advise whether a customer should accept care.
- Direct emergencies to local emergency services or emergency departments.
- Keep Comilus fees separate from provider fees.
- Do not handle customer payment passwords, bank apps, QR authorization, or card credentials.
- Confirm scope, price, deposit, cancellation terms, third-party fees, and no-show rules before payment.

## Recommended Deployment

Use Netlify first:

- Build command: `npm run build`
- Publish directory: `dist`
- Config file: `netlify.toml`
- Form name: `comilus-request`
- Domain registrar: GNAME
- Domain: `comilus.com`
- Netlify account email recommendation: `tpeople677@gmail.com`
- Public temporary contact email: `comilus@163.com`
- GitHub username: `kekexiaobai`
- WhatsApp: `+86 151 2192 0345`
- WeChat ID: `L18774947136`
- PayPal receiving email: `comilus@163.com`

The public form is Netlify-compatible. After deployment, enable form notifications in Netlify and test a live submission before sending paid traffic.

## Operating Decisions

- Use `comilus@163.com` as the temporary public email because it matches the brand name. Replace it with `hello@comilus.com` after a domain mailbox is set up.
- Use a Gmail account for GitHub, Netlify, platform alerts, and form notification delivery because it is more reliable for platform emails.
- Use PayPal manually at launch rather than integrating checkout immediately. Send a payment link only after the request is accepted, scoped, and priced.
- Publish only WhatsApp, WeChat, and Email on the website at launch. Keep Telegram, Facebook, Instagram, X, Line, and Messenger available for later channel-specific campaigns, but do not clutter the primary conversion path.
- Accept WeChat Pay or Alipay for customers already in China. Keep provider fees and Comilus service fees separate.
- Do not require a company before MVP launch, but register a proper business entity before scaling paid ads, signing provider partnerships, hiring regular staff, or processing large recurring payments.
- Use outsourced interpreters/companions as contractors. Confirm availability, rate, language ability, cancellation terms, and service scope before quoting the customer.
