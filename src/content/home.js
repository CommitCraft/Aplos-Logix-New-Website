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
    to: "/solutions",
    ctaLabel: "Explore MES Solutions",
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
    title: "IIoT & Test Automation",
    description:
      "Connect PLCs, sensors, safety test benches and legacy machines with secure edge-to-cloud telemetry.",
    to: "/test-rig",
    ctaLabel: "Launch Test Rig Console",
    features: [
      "HV Electrical Safety Test",
      "Oscilloscope Signal Telemetry",
      "Protocol Bridging (OPC-UA)",
      "WhatsApp Defect Alerts",
    ],
  },
  {
    icon: Gauge,
    color: "orange",
    badge: "OEE",
    title: "OEE & Downtime Intelligence",
    description:
      "Track Availability, Performance and Quality across machines, lines, shifts and plants in real time.",
    to: "/solutions#oee",
    ctaLabel: "View OEE Analytics",
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
    to: "/solutions#ems",
    ctaLabel: "Explore EMS Dashboard",
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
    title: "Digital Quality (DigiQA)",
    description:
      "Digitize inspections, manage CAPAs, track rejections and maintain audit-ready quality records end to end.",
    to: "/digiqa",
    ctaLabel: "Explore DigiQA Suite",
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
    to: "/solutions",
    ctaLabel: "Explore Maintenance SLA",
    features: [
      "Preventive Scheduling",
      "Breakdown Alerts",
      "Work Order Tracking",
      "Spare Parts Management",
    ],
  },
];

/* ──────────────────────────────────────────
   PLATFORM FEATURES — 10 Shop-Floor Modules
────────────────────────────────────────── */
import modMachine from "../assets/image/mod_machine.webp";
import modLine from "../assets/image/mod_line.webp";
import modOee from "../assets/image/mod_oee.webp";
import modShift from "../assets/image/mod_shift.webp";
import modMaint from "../assets/image/mod_maint.webp";
import modQuality from "../assets/image/mod_quality.webp";
import modInventory from "../assets/image/mod_inventory.webp";
import modEnergy from "../assets/image/mod_energy.webp";
import modUtilities from "../assets/image/mod_utilities.webp";
import modSafety from "../assets/image/mod_safety.webp";

import {
  Cpu,
  Workflow as IconWorkflow,
  Gauge as IconGauge,
  CalendarCheck,
  Wrench as IconWrench,
  ClipboardCheck as IconClipboardCheck,
  Boxes as IconBoxes,
  Flame,
  Droplets,
  ShieldAlert
} from "lucide-react";

export const platformFeatures = [
  {
    id: "machine-monitoring",
    label: "Machine Monitoring",
    tag: "Machine Monitoring",
    icon: Cpu,
    headline: "A Detailed View of High-Value Assets",
    subHeading: "Monitor equipment (CNC, robotic arm, SWISS, precision etc) in real time to maximize efficiency.",
    image: modMachine,
    subFeatures: [
      { title: "Condition Monitoring", desc: "Access real-time data on the health and performance of industrial equipment." },
      { title: "Machine Performance", desc: "Analyze speed, output, energy consumption, and health indicators to optimize performance." },
      { title: "Machine Uptime/Downtime", desc: "Monitor intervals when the machine is operational (uptime) and non-operational (downtime) to minimize disruptions." },
      { title: "Machine Utilization", desc: "Measure actual operation time against scheduled available hours to optimize production schedules." },
      { title: "Asset Operations", desc: "Monitor real-time asset performance across all active production shifts." },
      { title: "Usage Patterns", desc: "Analyze machine usage patterns for optimized shift allocation and peak output." }
    ]
  },
  {
    id: "line-monitoring",
    label: "Production Line Monitoring",
    tag: "Production Line Monitoring",
    icon: IconWorkflow,
    headline: "Reduce Downtime & Stoppages for Production Efficiency",
    subHeading: "Proactively monitor operations for enhanced productivity and quality control.",
    image: modLine,
    subFeatures: [
      { title: "Line Stoppages", desc: "Gain insights into the cause, duration, and frequency of interruptions." },
      { title: "Cycle Time", desc: "Analyze the time to task completion to identify bottlenecks and optimize workflows." },
      { title: "Planned vs Actual Yield", desc: "Compare projected and actual outputs to assess production planning and enhance overall yield." },
      { title: "Reject Rate", desc: "Assess the percentage of manufactured products that do not meet quality standards and take corrective action." },
      { title: "Production Downtime", desc: "Gain insights into the reasons for interruptions, their duration, and operational impact." },
      { title: "Operator Efficiency", desc: "View operator activities, performance metrics, and task completion rates to enhance productivity." }
    ]
  },
  {
    id: "oee",
    label: "Overall Equipment Effectiveness (OEE)",
    tag: "Overall Equipment Effectiveness",
    icon: IconGauge,
    headline: "Evaluate OEE for Greater Productivity",
    subHeading: "Assess availability, performance efficiency, and quality yield across all lines.",
    image: modOee,
    subFeatures: [
      { title: "Equipment Effectiveness", desc: "Determine the availability, performance, and quality of industrial equipment." },
      { title: "Production Bottlenecks", desc: "Identify process constraints and slowdowns before lines stall." },
      { title: "Benchmarking", desc: "Compare OEE of industrial equipment with established standards to set performance targets." },
      { title: "Asset Performance", desc: "View real-time data on the health, condition, and usage of key shop floor assets." },
      { title: "Productivity", desc: "Optimize workflows and energy efficiency by assessing industrial operations and output." },
      { title: "Availability", desc: "Track assets operational and ready for use to plan scheduled maintenance and avoid unplanned stops." }
    ]
  },
  {
    id: "shift-job",
    label: "Shift & Job Allocation",
    tag: "Shift and Job Allocation",
    icon: CalendarCheck,
    headline: "Keep Track of Shifts, Jobs, and Resources",
    subHeading: "Ensure optimal coordination of employee and equipment shifts based on energy consumption and productivity.",
    image: modShift,
    subFeatures: [
      { title: "Real-time Shift Data", desc: "Continuous monitoring, analysis, and reporting of operational data during work shifts." },
      { title: "Resource Allocation", desc: "Distribution and optimization of personnel, machinery, and materials." },
      { title: "Digital Job Cards", desc: "Digital records containing detailed instructions and work order specs to streamline operations." },
      { title: "Shift Scheduling", desc: "Automation of work shifts for personnel and machines to optimize resource deployment." },
      { title: "Time & Attendance", desc: "Tracking employees' work hours and attendance to enhance productivity and compliance." },
      { title: "Idle vs Productive Time", desc: "Analysis of machine idle time and productive time to enable timely interventions." }
    ]
  },
  {
    id: "maintenance-sla",
    label: "Maintenance & SLAs",
    tag: "Maintenance and SLAs",
    icon: IconWrench,
    headline: "Condition Monitoring, Predictive Maintenance & Work Orders",
    subHeading: "Automate tasks quickly and reduce maintenance costs with Aplos Logix IIoT.",
    image: modMaint,
    subFeatures: [
      { title: "Remote Asset Condition", desc: "Analyze real-time data on asset health and performance from any location." },
      { title: "Predictive Maintenance", desc: "Proactively prevent equipment failures and extend the lifespan of high-value assets." },
      { title: "Mobile Work Orders", desc: "Digitally access detailed work instructions, asset info, and technician assignments." },
      { title: "Scheduled Maintenance", desc: "Proactively schedule maintenance based on machine health to improve reliability." },
      { title: "Asset Repository", desc: "Comprehensive view of your assets to make data-driven maintenance decisions." },
      { title: "Approval Automation", desc: "Enable workflow automation, user authentication, and conditional approvals." }
    ]
  },
  {
    id: "quality-analysis",
    label: "Quality Analysis (DigiQA)",
    tag: "Quality Analysis",
    icon: IconClipboardCheck,
    headline: "Meet Standards with Precision & Compliance",
    subHeading: "Create quality benchmarks and ensure compliance with ISO standards, FDA regulations, and ITAR.",
    image: modQuality,
    subFeatures: [
      { title: "Equipment Health", desc: "Real-time monitoring of machinery condition and performance during testing." },
      { title: "Production Yield", desc: "Measure the quantity and quality of industrial process output relative to input." },
      { title: "Traceability", desc: "Track and record product production history to address quality issues fast." },
      { title: "Regulatory Compliance", desc: "Ensure compliance with ISO, FDA, and ITAR standards to minimize legal risks." },
      { title: "Material Composition", desc: "Accurately monitor material composition to ensure strict quality standards." },
      { title: "Defect Analysis", desc: "Analyze production abnormalities to reduce scrap waste and improve efficiency." }
    ]
  },
  {
    id: "asset-tracking",
    label: "Asset & Inventory Tracking",
    tag: "Asset & Inventory Tracking",
    icon: IconBoxes,
    headline: "Trace Assets & Stock from Source to Shelf",
    subHeading: "Access real-time insights and comprehensive visibility to prevent loss and maximize usage.",
    image: modInventory,
    subFeatures: [
      { title: "Asset Identification", desc: "Gain enhanced visibility of assets and perform maintenance as needed." },
      { title: "Location Tracking", desc: "Track asset locations with BLE, RFID, and GPS to improve logistics and safety." },
      { title: "Stock Availability", desc: "Monitor stock availability to prevent stock-outs and enhance order fulfillment." },
      { title: "Service History", desc: "Document all maintenance and service activities to optimize resource allocation." },
      { title: "Utilization Analysis", desc: "Optimize industrial inventory usage to reduce holding costs." },
      { title: "Geo-fencing", desc: "Set virtual boundaries to trigger specific alerts when assets or equipment move." }
    ]
  },
  {
    id: "energy-sustainability",
    label: "Energy & Sustainability (EMS)",
    tag: "Energy and Sustainability",
    icon: Flame,
    headline: "Optimize Energy Consumption & Reduce Carbon Emissions",
    subHeading: "Monitor and control energy consumption by HVACs, DGs, Chillers, Compressors, and production machines.",
    image: modEnergy,
    subFeatures: [
      { title: "Energy Consumption Patterns", desc: "Data-driven approach to improving energy efficiency and reducing operational costs." },
      { title: "Carbon Emissions", desc: "Measure, track, and manage CO2 release and greenhouse gas emissions." },
      { title: "Waste Generation", desc: "Access real-time insights into industrial waste volumes to reduce environmental impact." },
      { title: "Renewable Energy Sync", desc: "Integrate solar and renewable energy sources into your existing factory layout." },
      { title: "Environmental Conditions", desc: "Measure site air quality, noise, ambient temperature, and humidity." },
      { title: "AI Prediction & Forecasting", desc: "Analyze historical energy demand data to forecast peak load tariffs." }
    ]
  },
  {
    id: "utilities-monitoring",
    label: "Utilities Monitoring",
    tag: "Utilities Monitoring",
    icon: Droplets,
    headline: "Unlock Savings Potential with Smart Utilities",
    subHeading: "Acquire, manage, and report data from power, water, and gas meters, such as voltage, pressure, and leakage.",
    image: modUtilities,
    subFeatures: [
      { title: "Power Quality", desc: "Track voltage stability, frequency, and harmonic distortion to prevent power outages." },
      { title: "Water Usage", desc: "Monitor facility-wide water consumption patterns in real time." },
      { title: "Gas Flow & Pressure", desc: "Measure gas flow rates and pressure levels throughout manufacturing pipelines." },
      { title: "Leak Detection", desc: "Detect water and gas leaks or pressure anomalies instantly to minimize waste." },
      { title: "Demand Planning", desc: "Monitor real-time utility consumption fluctuations and peak demand." },
      { title: "Fault Management", desc: "Proactively detect and correct utility infrastructure anomalies." }
    ]
  },
  {
    id: "safety-controls",
    label: "Safety & Controls (EHS)",
    tag: "Safety and Control",
    icon: ShieldAlert,
    headline: "For Safe and Secure Manufacturing Operations",
    subHeading: "Continually monitor fire safety equipment, sprinkler systems, extinguishers, and emergency sirens.",
    image: modSafety,
    subFeatures: [
      { title: "Sprinkler System Status", desc: "Monitor sprinkler system readiness and pressure status continuously." },
      { title: "Emergency Sirens & Lighting", desc: "Detect emergencies and trigger physical ANDON sirens and evacuation lighting." },
      { title: "Temperature Monitoring", desc: "Monitor thermal anomalies and hazardous hot spots across panels." },
      { title: "Extinguisher Status", desc: "Track fire extinguisher availability and pressure status for rapid intervention." },
      { title: "Smoke & Gas Detection", desc: "Detect smoke, toxic fumes, and gas leaks to notify shop floor personnel immediately." },
      { title: "Remote EHS Monitoring", desc: "Monitor safety compliance and hazard alarms remotely from any device." }
    ]
  }
];

/* ──────────────────────────────────────────
   INDUSTRY & SOLUTION USE CASES — 7 verticals
────────────────────────────────────────── */
export const industryUseCases = [
  {
    industry: "OEE & Downtime Intelligence",
    icon: Gauge,
    color: "orange",
    description:
      "Track Availability, Performance, Quality and unplanned downtime root causes across production lines and shifts in real time.",
    metrics: ["+15% OEE Improvement", "MTTR/MTBF Analytics", "Real-time Downtime Alerts"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
  },
  {
    industry: "Energy & Sustainability (EMS)",
    icon: Flame,
    color: "emerald",
    description:
      "Monitor power consumption, demand forecasting, power factor, and utility costs with automated meter telemetry.",
    metrics: ["-18% Energy Costs", "Peak Tariff Alerts", "ISO 50001 Compliant"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
  },
  {
    industry: "Digital Quality Management (QMS)",
    icon: ClipboardCheck,
    color: "blue",
    description:
      "Digitize stage inspections, automated BIS reports, CAPA workflows, and end-to-end component serial genealogy.",
    metrics: ["100% Digital Audits", "Zero Manual QA Logs", "Instant CAPA Triggers"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
  },
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
