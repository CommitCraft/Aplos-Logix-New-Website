import {
  Activity,
  BarChart3,
  BellRing,
  Boxes,
  Cable,
  ChartNoAxesCombined,
  ClipboardCheck,
  Factory,
  FileSpreadsheet,
  Gauge,
  Network,
  PanelTop,
  QrCode,
  RadioTower,
  Router,
  Search,
  ShieldCheck,
  Siren,
  TimerReset,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

/* ──────────────────────────────────────────
   HERO
────────────────────────────────────────── */
export const homeHero = {
  eyebrow: "DigiQA • EMS • QMS • Production Intelligence",
  title: "Industrial Quality, Production & Live Factory Intelligence",
  description:
    "Aplos Logix connects machines, test stations, operators and production data into one intelligent platform for quality, OEE, downtime, traceability, live visibility and automated reporting.",
  services: ["EMS & QMS", "OEE & Downtime", "Autometic Label Printing", "Safety & Performance Tests", "Live Data", "Daily Reports"],
  factoryVideo: new URL("../assets/video/homepage_banner.mp4", import.meta.url).href,
  factoryImageMobile: new URL("../assets/video/banner_img.webp", import.meta.url).href,
};

/* ──────────────────────────────────────────
   ANIMATED STATS
────────────────────────────────────────── */
export const animatedStats = [
  { value: 200,  suffix: "+",  label: "Factory Installations",  icon: Factory    },
  { value: 50,   suffix: "K+", label: "Devices Connected",      icon: Network    },
  { value: 99.8, suffix: "%",  label: "System Uptime",          icon: Activity   },
  { value: 24,   suffix: "/7", label: "Live Monitoring",        icon: RadioTower },
];

/* ──────────────────────────────────────────
   QUICK HIGHLIGHTS (existing, kept)
────────────────────────────────────────── */
export const quickHighlights = [
  { icon: RadioTower,      value: "LIVE",  label: "Real-time visibility" },
  { icon: Gauge,           value: "OEE",   label: "Performance monitoring" },
  { icon: TimerReset,      value: "DOWN",  label: "Downtime control" },
  { icon: FileSpreadsheet, value: "AUTO",  label: "Daily reports" },
  { icon: QrCode,          value: "LABEL", label: "Autometic Label Printing" },
  { icon: Boxes,           value: "TRACE", label: "End-to-end genealogy" },
];

/* ──────────────────────────────────────────
   SOLUTION MODULES — 6 cards
────────────────────────────────────────── */
export const solutionModules = [
  {
    icon: BarChart3,
    color: "blue",
    badge: "MES",
    title: "Manufacturing Execution",
    description:
      "Real-time production tracking, work order management and shop-floor control from a single pane of glass.",
    features: [
      "Work Order Management",
      "Production Scheduling",
      "Operator Guidance",
      "Real-time WIP Tracking",
    ],
  },
  {
    icon: Network,
    color: "violet",
    badge: "IIoT",
    title: "IIoT Connectivity",
    description:
      "Connect PLCs, sensors, testers and legacy machines with secure edge-to-cloud data streaming and protocol bridging.",
    features: [
      "PLC & SCADA Integration",
      "Edge Data Processing",
      "Protocol Bridging",
      "Secure Cloud Sync",
    ],
  },
  {
    icon: Gauge,
    color: "orange",
    badge: "OEE",
    title: "OEE & Downtime Intelligence",
    description:
      "Track Availability, Performance and Quality across machines, lines, shifts and plants in real time.",
    features: [
      "OEE Dashboard",
      "Downtime Reason Codes",
      "MTTR & MTBF Tracking",
      "Shift Comparison Reports",
    ],
  },
  {
    icon: ChartNoAxesCombined,
    color: "emerald",
    badge: "EMS",
    title: "Energy Monitoring",
    description:
      "Monitor energy consumption, demand trends, power factor and utility costs with real-time metering data.",
    features: [
      "Real-time Energy Trends",
      "Demand Forecasting",
      "Multi-meter Support",
      "Automated Energy Reports",
    ],
  },
  {
    icon: ClipboardCheck,
    color: "sky",
    badge: "QMS",
    title: "Quality Management",
    description:
      "Digitize inspections, manage CAPAs, track rejections and maintain audit-ready quality records end to end.",
    features: [
      "Digital Inspections",
      "Rejection Analysis",
      "CAPA Workflows",
      "Audit Traceability",
    ],
  },
  {
    icon: Wrench,
    color: "rose",
    badge: "CMMS",
    title: "Maintenance Management",
    description:
      "Schedule preventive maintenance, track breakdowns, manage work orders and reduce unplanned stoppages.",
    features: [
      "Preventive Scheduling",
      "Breakdown Alerts",
      "Work Order Tracking",
      "Spare Parts Management",
    ],
  },
];

/* ──────────────────────────────────────────
   PLATFORM FEATURES — 5 tabs
────────────────────────────────────────── */
export const platformFeatures = [
  {
    id: "devices",
    label: "Device Management",
    icon: Router,
    headline: "Connect & Manage Every Asset",
    description:
      "Onboard, monitor and manage machines, sensors, PLCs and test stations from a single device registry. Track connection status, firmware and data health in real time.",
    points: [
      "Unified device registry",
      "Connection health monitoring",
      "Protocol-agnostic integration",
      "Remote configuration support",
    ],
  },
  {
    id: "monitoring",
    label: "Live Monitoring",
    icon: RadioTower,
    headline: "Real-time Factory Visibility",
    description:
      "Stream live data from every machine and station. View trends, alarms and KPIs across lines, shifts and plants without any delay.",
    points: [
      "Sub-second data refresh",
      "Multi-line dashboards",
      "Shift-based views",
      "Mobile-ready displays",
    ],
  },
  {
    id: "analytics",
    label: "Analytics & Reports",
    icon: BarChart3,
    headline: "Turn Data into Decisions",
    description:
      "Analyze production trends, rejection patterns, downtime causes and energy usage with configurable charts, drill-down views and automated reports.",
    points: [
      "Trend analysis dashboards",
      "Root cause drill-down",
      "Custom report builder",
      "Scheduled Excel / PDF exports",
    ],
  },
  {
    id: "alerts",
    label: "Alerts & ANDON",
    icon: BellRing,
    headline: "Instant Alerts. Zero Misses.",
    description:
      "Configure threshold-based alerts for quality, OEE, energy and machine health. Notify operators, supervisors and engineers via ANDON boards and email.",
    points: [
      "Threshold-based triggers",
      "Escalation workflows",
      "ANDON board integration",
      "Email & SMS notifications",
    ],
  },
  {
    id: "remote",
    label: "Remote Access",
    icon: PanelTop,
    headline: "Manage from Anywhere",
    description:
      "Access plant data, approve work orders, view live dashboards and respond to alerts from any device, anywhere in the world with role-based security.",
    points: [
      "Secure remote access",
      "Role-based permissions",
      "Multi-plant support",
      "Full audit log of actions",
    ],
  },
];

/* ──────────────────────────────────────────
   INDUSTRY USE CASES — 5 industries
────────────────────────────────────────── */
export const industryUseCases = [
  {
    industry: "White Goods & Appliances",
    icon: Zap,
    color: "blue",
    description:
      "End-of-line quality, safety testing, label printing and serial traceability for high-volume consumer manufacturing.",
    metrics: ["99.2% First Pass Yield", "40% Faster Test Cycle", "100% Traceability"],
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=900&q=85",
  },
  {
    industry: "Battery Manufacturing",
    icon: Boxes,
    color: "emerald",
    description:
      "Cell and pack traceability, formation test capture, quality records and genealogy for EV and energy storage production.",
    metrics: ["Full Cell Genealogy", "Real-time Formation Data", "Zero Paper QA Records"],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85",
  },
  {
    industry: "Automotive Components",
    icon: Factory,
    color: "orange",
    description:
      "Station-wise history, process validation, automated test data capture and part genealogy for Tier 1 and Tier 2 suppliers.",
    metrics: ["IATF-Ready Records", "Station History Drill-down", "PPAP Data Automation"],
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=85",
  },
  {
    industry: "Electronics & PCB",
    icon: Cable,
    color: "violet",
    description:
      "AOI integration, soldering quality, functional test capture and component-level traceability for electronics assembly lines.",
    metrics: ["PCB-level Traceability", "AOI Data Integration", "Functional Test Capture"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
  },
  {
    industry: "General Manufacturing",
    icon: Workflow,
    color: "sky",
    description:
      "Machine connectivity, OEE monitoring, downtime tracking, QMS workflows and automated daily reporting for any production environment.",
    metrics: ["OEE Improvement 15%+", "Downtime Reduced -30%", "Auto Daily Reports"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
  },
];

/* ──────────────────────────────────────────
   BENEFITS LIST — 6 items
────────────────────────────────────────── */
export const benefitsList = [
  {
    icon: RadioTower,
    title: "Real-time Visibility",
    text: "See every machine, line and plant's performance live — no delays, no guesswork.",
  },
  {
    icon: TimerReset,
    title: "Faster Issue Resolution",
    text: "Instant alerts and ANDON escalation cut mean-time-to-repair by up to 40%.",
  },
  {
    icon: FileSpreadsheet,
    title: "Zero Manual Reporting",
    text: "Automated shift, daily and quality reports eliminate hours of manual data entry.",
  },
  {
    icon: Boxes,
    title: "Complete Traceability",
    text: "End-to-end serial and component genealogy for every product and every process.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Energy Cost Reduction",
    text: "Energy monitoring with demand analysis helps cut utility costs by 10–25%.",
  },
  {
    icon: Network,
    title: "Scalable Architecture",
    text: "Start with one machine. Grow to 100+ lines and multiple plants seamlessly.",
  },
];

/* ──────────────────────────────────────────
   SECURITY PILLARS — 4 items
────────────────────────────────────────── */
export const securityPillars = [
  {
    icon: ShieldCheck,
    title: "Edge-to-Cloud Encryption",
    text: "All data transmitted with TLS/SSL encryption. Secure edge nodes with certificate-based authentication.",
  },
  {
    icon: Search,
    title: "Role-Based Access Control",
    text: "Granular user permissions by role, plant, line and function. Full audit trail for every action.",
  },
  {
    icon: Activity,
    title: "High Availability",
    text: "99.8% system uptime with redundant cloud infrastructure and local edge failover capability.",
  },
  {
    icon: BellRing,
    title: "Real-time Audit Logs",
    text: "Every operator action, configuration change and alert response is logged for compliance and review.",
  },
];

/* ──────────────────────────────────────────
   INTEGRATION PARTNERS — marquee text badges
────────────────────────────────────────── */
export const integrationPartners = [
  "Siemens S7",
  "Allen Bradley",
  "Mitsubishi PLC",
  "Beckhoff",
  "Delta PLC",
  "SAP ERP",
  "Microsoft Azure",
  "OPC-UA",
  "Modbus TCP",
  "Ethernet/IP",
  "MySQL / MSSQL",
  "REST APIs",
  "SCADA Systems",
  "HMI Panels",
  "Zebra Label Printers",
];

/* ──────────────────────────────────────────
   CUSTOMER TESTIMONIALS — 3 quotes
────────────────────────────────────────── */
export const customerTrustQuotes = [
  {
    quote:
      "Aplos Logix gave us complete visibility of our production floor. OEE improved by 18% in the first quarter after go-live.",
    name: "Production Head",
    company: "Leading White Goods Manufacturer, Pune",
    initials: "PH",
  },
  {
    quote:
      "The label printing and traceability module alone saved us 4 hours of daily manual work across all our assembly lines.",
    name: "Quality Manager",
    company: "Automotive Component Supplier, Gurugram",
    initials: "QM",
  },
  {
    quote:
      "Implementation was fast and the support team understood our shop-floor realities. I'd recommend Aplos Logix to any manufacturer.",
    name: "Plant Manager",
    company: "Battery Pack Assembler, Bangalore",
    initials: "PM",
  },
];

/* ──────────────────────────────────────────
   LEGACY EXPORTS — kept for existing pages
────────────────────────────────────────── */
export const platformModules = [
  {
    icon: ChartNoAxesCombined,
    title: "EMS Dashboard",
    text: "Track energy consumption, demand and power parameters with real-time trends and alerts.",
  },
  { icon: ClipboardCheck, title: "QMS Suite",           text: "Manage quality workflows, inspections, CAPA-ready records, audit visibility and continuous improvement actions." },
  { icon: Gauge,           title: "OEE Dashboard",      text: "Track availability, performance and quality across machines, lines, shifts and plants." },
  { icon: TimerReset,      title: "Downtime Monitoring", text: "Capture planned and unplanned stops, reason codes, MTTR, MTBF and recurring loss patterns." },
  {
    icon: QrCode,
    title: "Label Printing",
    text: "Print accurate product, rating plate, QR and MRP labels directly from production data.",
  },
  { icon: FileSpreadsheet, title: "Daily Reports",        text: "Automatically generate shift, daily, quality, rejection and production reports with actionable KPIs." },
  { icon: Activity,        title: "Live Data Monitoring", text: "Stream machine, sensor, tester and process data for real-time visualization and decision support." },
  { icon: Siren,           title: "ANDON Dashboard",      text: "Show alerts, callouts, line status, escalation timers and operator notifications in real time." },
];

export const iiotExcellence = {
  title: "IIoT Excellence for Modern Manufacturing",
  description:
    "Aplos Logix combines edge connectivity, structured data, digital quality and production intelligence to create a connected factory layer that is transparent, traceable and ready for continuous improvement.",
  pillars: [
    { icon: Cable,           title: "Edge Connectivity",       text: "PLC, sensor, tester and machine connectivity with secure local data capture." },
    { icon: ClipboardCheck,  title: "Digital Quality Control", text: "Configurable inspections, limits, workflows and validation rules." },
    { icon: BarChart3,       title: "Production Intelligence", text: "Shift trends, rejection analysis, throughput and target-vs-actual tracking." },
    { icon: Gauge,           title: "OEE & Downtime",         text: "Availability, performance, quality and detailed downtime loss visibility." },
    { icon: Network,         title: "Traceability & Genealogy",text: "Serial search, parent-child mapping and full production history." },
    { icon: FileSpreadsheet, title: "Automated Reporting",     text: "Scheduled Excel/PDF reports, alerts and distribution workflows." },
    {
      icon: Workflow,
      title: "EMS & QMS",
      text: "Manage energy usage and quality processes with connected data, alerts and traceability.",
    },
    { icon: RadioTower, title: "Live Data Streams", text: "Near real-time machine and tester visibility for operators and supervisors." },
  ],
};

export const homeStats = [
  { value: "200+", label: "Installations" },
  { value: "50K+", label: "Devices Connected" },
  { value: "99.8%", label: "System Uptime" },
  { value: "24/7", label: "Operational Monitoring" },
];

export const testCoverage = [
  { icon: ShieldCheck,  title: "Safety Test Panel",      text: "Electrical safety, protection circuits and guarded test sequencing." },
  { icon: Gauge,        title: "RPM Test",               text: "Speed and spindle RPM accuracy with operational limit validation." },
  { icon: Activity,     title: "Runout Test",            text: "Runout, concentricity and dimensional deviation measurement." },
  { icon: ClipboardCheck, title: "End-of-Line Validation", text: "Final automated validation with complete PASS/FAIL traceability." },
];

export const productionVisibility = [
  { label: "OEE",              value: "92.1%", trend: "+2.5%" },
  { label: "Downtime",         value: "2.8%",  trend: "-0.7%" },
  { label: "Rejection Trend",  value: "1.6%",  trend: "-0.4%" },
  { label: "Shift Performance", value: "96.3%", trend: "+1.8%" },
];

export const homeIndustries = [
  { title: "White Goods & Home Appliances", text: "End-of-line quality, safety tests, balancing, reliability and serial traceability.", image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=900&q=85" },
  { title: "Battery Manufacturing",         text: "Cell and pack traceability, test capture, quality records and production intelligence.", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85" },
  { title: "Automotive Components",         text: "Station history, process validation, test automation and part genealogy.", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=85" },
  { title: "General Manufacturing",         text: "Machine connectivity, OEE, downtime, QMS and automated daily reporting.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85" },
];

export const processSteps = [
  { title: "Discover",  text: "Study processes, machines, tests, reports and operational gaps." },
  { title: "Integrate", text: "Connect PLCs, testers, sensors, scanners, databases and user workflows." },
  { title: "Digitize",  text: "Configure dashboards, quality workflows, traceability and reports." },
  { title: "Optimize",  text: "Use OEE, downtime, rejection and live data insights for continuous improvement." },
];

export const manufacturerBenefits = [
  "Real-time production visibility across lines and plants",
  "Faster issue resolution with instant alerts and dashboards",
  "Reduced manual reporting through automated daily reports",
  "Complete serial and component traceability across every process",
  "Scalable architecture for one machine, one line or multiple plants",
];
