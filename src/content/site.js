export const navigation = [
  { label: "Home", to: "/" },
  {
    label: "Solutions",
    to: "/solutions",
    children: [
      { label: "IIoT Smart Test Rig", to: "/test-rig", desc: "HV withstand, insulation & safety bench" },
      { label: "DigiQA Software", to: "/digiqa", desc: "Digital inspection & traceability suite" },
      { label: "OEE & Downtime Intelligence", to: "/solutions#oee", desc: "Real-time OEE & availability tracking" },
      { label: "Energy EMS Dashboard", to: "/solutions#ems", desc: "Multi-meter power & gas telemetry" },
      { label: "Quality QMS Suite", to: "/solutions#qms", desc: "CAPA workflows & digital quality audits" },
      { label: "ANDON TV Dashboards", to: "/solutions#andon", desc: "Shop-floor visual alert escalation" },
    ],
  },
  {
    label: "Industries",
    to: "/industries",
    children: [
      { label: "White Goods & Appliances", to: "/industries", desc: "High-volume appliance safety & QA" },
      { label: "EV & Battery Manufacturing", to: "/industries", desc: "Pack genealogy & cell formation" },
      { label: "Automotive Components", to: "/industries", desc: "Tier 1/2 IATF-ready records" },
      { label: "General Manufacturing", to: "/industries", desc: "Machine connectivity & daily reports" },
    ],
  },
  { label: "Technology", to: "/technology" },
  { label: "Case Studies", to: "/case-studies" },
  {
    label: "Company",
    to: "/about",
    children: [
      { label: "About", to: "/about", desc: "Our history & manufacturing expertise" },
      { label: "Contact & Support", to: "/contact?type=support", desc: "Get in touch with us" },
    ],
  },
];

export const footerColumns = [
  {
    title: "IIoT & Software",
    links: [
      { label: "IIoT Smart Test Rig", to: "/test-rig" },
      { label: "DigiQA Quality Software", to: "/digiqa" },
      { label: "OEE & Downtime Intelligence", to: "/solutions#oee" },
      { label: "Energy EMS Telemetry", to: "/solutions#ems" },
      { label: "Quality QMS Suite", to: "/solutions#qms" },
      { label: "ANDON Visual Dashboards", to: "/solutions#andon" },
    ],
  },
  {
    title: "Industry Verticals",
    links: [
      { label: "White Goods & Appliances", to: "/industries" },
      { label: "EV & Battery Production", to: "/industries" },
      { label: "Automotive Components", to: "/industries" },
      { label: "General Manufacturing", to: "/industries" },
      { label: "Industrial Edge Technology", to: "/technology" },
    ],
  },
  {
    title: "Company & Proof",
    links: [
      { label: "About Aplos Logix", to: "/about" },
      { label: "Customer Case Studies", to: "/case-studies" },
      { label: "Technology Architecture", to: "/technology" },
      { label: "Factory Assessments", to: "/contact?type=assessment" },
    ],
  },
  {
    title: "Actions & Support",
    links: [
      { label: "Book a Live Demo", to: "/contact?type=demo" },
      { label: "Request On-site Audit", to: "/contact?type=assessment" },
      { label: "Contact Engineering Support", to: "/contact?type=support" },
    ],
  },
];

export const company = {
  name: "Aplos Logix Pvt. Ltd.",

  location:
    "D-1207, 12th Floor, The Light House Vatika Town Square, Sector-82, Gurugram, Haryana - 122004, India",

  workshopLocation:
    "Khewat No. 747/786, M. No. 31, Kila No. 22/1/1, Near Police Chowki, Vill. Hayatpur, Sec-93, Gurugram, Haryana - 122505, India",

  phone: [
    "+91 84480 55732",
    "+91 93500 74731",
    "+91 98884 67884",
  ],

  email: [
    "info@aploslogix.com",
    "sales@aploslogix.com",
  ],

  supportEmail: "support@aploslogix.com",

  hours: "Mon–Sat, 9:00 AM – 6:00 PM",
};
