# Aplos Logix — Final Industrial IIoT Website

Production-ready multi-page React website for Aplos Logix, built with React, Vite, Tailwind CSS v4, React Router and Lucide icons.

## Pages

- Home
- About Us
- Solutions
- DigiQA
- Industries
- Technology
- Case Studies
- Contact Us
- 404 / Not Found

## Core capabilities covered

- DigiQA / Digital Quality
- EMS
- QMS
- OEE Monitoring
- Downtime Monitoring and Analysis
- Serial Number Mapping
- Parent-Child Traceability
- ANDON Dashboard
- Live Data Monitoring
- Daily Reports and automated reporting
- WhatsApp alerts and notifications
- Safety Test Panel
- RPM Test
- Runout Test
- Performance Test
- HV Test
- LC Test
- IR Test
- End-of-Line Validation
- IIoT architecture, protocols and deployment modes
- Customer showcase
- Factory solution case studies

## Final source architecture

```text
src/
├── components/
│   └── common/
│       ├── AplosLogo.jsx
│       ├── ArchitectureStack.jsx
│       ├── BrandLogo.jsx
│       ├── Breadcrumbs.jsx
│       ├── ButtonLink.jsx
│       ├── CaseStudyCard.jsx
│       ├── Container.jsx
│       ├── CTASection.jsx
│       ├── CustomerShowcase.jsx
│       ├── DashboardMockup.jsx
│       ├── FeatureCard.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       ├── MetricStrip.jsx
│       ├── ModuleRow.jsx
│       ├── PageHero.jsx
│       ├── PromiseGrid.jsx
│       ├── ScrollToTop.jsx
│       └── SectionHeading.jsx
├── content/
│   ├── about.js
│   ├── caseStudies.js
│   ├── contact.js
│   ├── customers.js
│   ├── digiqa.js
│   ├── home.js
│   ├── industries.js
│   ├── site.js
│   ├── solutions.js
│   ├── technology.js
│   └── valueProposition.js
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── About.jsx
│   ├── CaseStudies.jsx
│   ├── Contact.jsx
│   ├── DigiQA.jsx
│   ├── Home.jsx
│   ├── Industries.jsx
│   ├── NotFound.jsx
│   ├── Solutions.jsx
│   └── Technology.jsx
├── routes/
│   └── AppRoutes.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Content editing

All website content is separated from page layout code and lives inside `src/content/`.

- Global navigation, footer and contact details: `src/content/site.js`
- Home page: `src/content/home.js`
- About page: `src/content/about.js`
- Solutions page: `src/content/solutions.js`
- DigiQA page: `src/content/digiqa.js`
- Industries page: `src/content/industries.js`
- Technology architecture: `src/content/technology.js`
- Case studies: `src/content/caseStudies.js`
- Customer names: `src/content/customers.js`
- Why Aplos promise cards: `src/content/valueProposition.js`

## Logo

The reusable wordmark is implemented in:

```text
src/components/common/AplosLogo.jsx
```

Usage:

```jsx
<AplosLogo />
<AplosLogo light />
<AplosLogo showTagline={false} />
```

## Run locally

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

The compiled site is written to `dist/`.

## Contact form

The Contact page UI is complete. The current submit handler is frontend-only and is intentionally ready for backend/API integration. A placeholder `.env.example` is included for a future `VITE_CONTACT_API_URL` value.

## Deployment

The `dist/` folder can be deployed to Vercel, Netlify, Cloudflare Pages or any static host that supports SPA routing fallback to `index.html`.
# Aplos-Logix-New-Website
