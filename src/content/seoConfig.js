export const defaultSEO = {
  siteName: "Aplos Logix",
  domain: "https://aploslogix.com",
  defaultTitle: "Aplos Logix | Industrial Quality & IIoT Smart Manufacturing Solutions",
  titleTemplate: "%s | Aplos Logix",
  defaultDescription:
    "Aplos Logix provides Industry 4.0, IIoT digital quality assurance, ANDON visual alert systems, traceabilty, and automated end-of-line test rig solutions for manufacturing excellence.",
  defaultKeywords: [
    "Industrial Quality Control",
    "IIoT Smart Manufacturing",
    "DigiQA Software",
    "Automated Test Rigs",
    "Traceability System",
    "ANDON Display",
    "OEE Tracking",
    "Quality Management System",
    "Industry 4.0 India",
    "Gurugram Manufacturing Automation"
  ].join(", "),
  ogImage: "https://aploslogix.com/og-image.jpg",
  twitterHandle: "@aploslogix",
  company: {
    name: "Aplos Logix Pvt. Ltd.",
    url: "https://aploslogix.com",
    logo: "https://aploslogix.com/logo.png",
    telephone: "+91 84480 55732",
    email: "info@aploslogix.com",
    address: {
      streetAddress: "D-1207, 12th Floor, The Light House Vatika Town Square, Sector-82",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122004",
      addressCountry: "IN"
    }
  }
};

export const routesSEO = {
  "/": {
    title: "Aplos Logix | Industrial Quality & IIoT Smart Manufacturing Solutions",
    description:
      "Transform manufacturing operations with Aplos Logix. Leading provider of IIoT Smart Test Rigs, DigiQA digital quality inspection, OEE analytics, ANDON dashboards, and complete factory traceability.",
    keywords:
      "IIoT Manufacturing, Quality Assurance Software, End-of-Line Test Rigs, OEE Dashboard, Traceability Systems, Industrial Automation India, Industry 4.0 Solutions",
    canonical: "https://aploslogix.com/",
    schemaType: "Organization",
    jsonLdExtra: {
      "@type": "Corporation",
      name: "Aplos Logix Pvt. Ltd.",
      url: "https://aploslogix.com",
      logo: "https://aploslogix.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-84480-55732",
        contactType: "sales & support",
        email: "sales@aploslogix.com",
        availableLanguage: ["English", "Hindi"]
      },
      sameAs: [
        "https://www.linkedin.com/company/aplos-logix"
      ]
    }
  },

  "/about": {
    title: "About Us - Industrial Automation & IIoT Pioneers | Aplos Logix",
    description:
      "Learn about Aplos Logix Pvt. Ltd. Founded by manufacturing experts to engineer zero-defect quality systems, end-of-line test rigs, and Industry 4.0 software solutions.",
    keywords:
      "Aplos Logix About, Industrial Engineering Team, Manufacturing Excellence India, IIoT Pioneers Gurugram, Factory Digitization Experts",
    canonical: "https://aploslogix.com/about",
    schemaType: "AboutPage",
    breadcrumb: [
      { name: "Home", item: "https://aploslogix.com/" },
      { name: "About Us", item: "https://aploslogix.com/about" }
    ]
  },

  "/solutions": {
    title: "IIoT & Digital Quality Solutions | Aplos Logix",
    description:
      "Explore comprehensive IIoT solutions: OEE & Downtime Intelligence, Energy Telemetry (EMS), Quality Management (QMS), ANDON TV Dashboards, and Custom Test Automation.",
    keywords:
      "OEE Software, Energy Monitoring System EMS, Quality Management QMS, ANDON Systems, Shop Floor Visibility, Manufacturing Telemetry",
    canonical: "https://aploslogix.com/solutions",
    schemaType: "Service",
    breadcrumb: [
      { name: "Home", item: "https://aploslogix.com/" },
      { name: "Solutions", item: "https://aploslogix.com/solutions" }
    ]
  },

  "/digiqa": {
    title: "DigiQA - Digital Quality Assurance & Traceability Software | Aplos Logix",
    description:
      "DigiQA is an enterprise digital quality inspection suite providing 100% component genealogy, barcode scanning, Poka-Yoke validation, and automated defect tracking.",
    keywords:
      "DigiQA, Digital Quality Inspection, Serial Number Traceability, Poka-Yoke Software, Component Genealogy, Defect Tracking, Industry 4.0 QMS",
    canonical: "https://aploslogix.com/digiqa",
    schemaType: "SoftwareApplication",
    jsonLdExtra: {
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows, Web, Embedded",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "Customized Enterprise License"
      }
    },
    breadcrumb: [
      { name: "Home", item: "https://aploslogix.com/" },
      { name: "Solutions", item: "https://aploslogix.com/solutions" },
      { name: "DigiQA Software", item: "https://aploslogix.com/digiqa" }
    ]
  },

  "/test-rig": {
    title: "IIoT Smart Test Rig - Automated End-of-Line Quality Testing | Aplos Logix",
    description:
      "High-voltage withstand, electrical safety, thermal, and functional automated test benches engineered for zero-defect production in appliances, EV, and automotive manufacturing.",
    keywords:
      "End of Line Test Rig, HV Safety Bench, Automated Electrical Testing, High Voltage Withstand Bench, Appliance Safety Testing, Battery Pack Tester",
    canonical: "https://aploslogix.com/test-rig",
    schemaType: "Product",
    jsonLdExtra: {
      category: "Industrial Automation Hardware & Software",
      brand: {
        "@type": "Brand",
        name: "Aplos Logix"
      }
    },
    breadcrumb: [
      { name: "Home", item: "https://aploslogix.com/" },
      { name: "Solutions", item: "https://aploslogix.com/solutions" },
      { name: "IIoT Smart Test Rig", item: "https://aploslogix.com/test-rig" }
    ]
  },

  "/industries": {
    title: "Industries Served - Appliances, EV, Automotive & Manufacturing | Aplos Logix",
    description:
      "Specialized IIoT and test automation solutions tailored for White Goods & Appliances, EV Battery Production, Automotive Component Tier 1/2 suppliers, and Discrete Manufacturing.",
    keywords:
      "White Goods QA, EV Battery Testing, Automotive Component Quality, Manufacturing Automation India, IATF 16949 Compliance Software",
    canonical: "https://aploslogix.com/industries",
    schemaType: "Service",
    breadcrumb: [
      { name: "Home", item: "https://aploslogix.com/" },
      { name: "Industries", item: "https://aploslogix.com/industries" }
    ]
  },

  "/technology": {
    title: "Technology Stack & Architecture - Edge Computing & PLC Connectivity | Aplos Logix",
    description:
      "Discover Aplos Logix IIoT architecture. Seamless multi-brand PLC connectivity (Siemens, Allen Bradley, Mitsubishi, Omron), MQTT, OPC-UA protocols, industrial edge computing, and cloud reporting.",
    keywords:
      "PLC Connectivity, OPC-UA, MQTT Industrial, Edge Gateway, SCADA IIoT Integration, Siemens PLC Collector, Factory Data Pipeline",
    canonical: "https://aploslogix.com/technology",
    schemaType: "TechArticle",
    breadcrumb: [
      { name: "Home", item: "https://aploslogix.com/" },
      { name: "Technology", item: "https://aploslogix.com/technology" }
    ]
  },

  "/case-studies": {
    title: "Customer Case Studies & ROI Success Stories | Aplos Logix",
    description:
      "See how leading manufacturers improved quality, achieved 100% traceabilty, reduced warranty claims, and boosted OEE using Aplos Logix solutions.",
    keywords:
      "Manufacturing Case Studies, OEE Success Story, Zero Defect ROI, Traceability Case Study, Aplos Logix Proof Points",
    canonical: "https://aploslogix.com/case-studies",
    schemaType: "CollectionPage",
    breadcrumb: [
      { name: "Home", item: "https://aploslogix.com/" },
      { name: "Case Studies", item: "https://aploslogix.com/case-studies" }
    ]
  },

  "/contact": {
    title: "Contact Us & Book a Live Factory Demo | Aplos Logix",
    description:
      "Get in touch with Aplos Logix engineering experts. Request a live demo, schedule an on-site factory quality assessment, or ask technical support questions.",
    keywords:
      "Contact Aplos Logix, Book IIoT Demo, Gurugram Automation Office, Factory Audit Request, Quality Engineering Support",
    canonical: "https://aploslogix.com/contact",
    schemaType: "ContactPage",
    breadcrumb: [
      { name: "Home", item: "https://aploslogix.com/" },
      { name: "Contact", item: "https://aploslogix.com/contact" }
    ]
  }
};
