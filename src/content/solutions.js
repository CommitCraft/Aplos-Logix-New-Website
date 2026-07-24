import {
  Activity,
  BarChart3,
  BellRing,
  Boxes,
  ClipboardCheck,
  Factory,
  FileSpreadsheet,
  Gauge,
  Network,
  PanelTop,
  QrCode,
  RadioTower,
  Search,
  ShieldCheck,
  Siren,
  TimerReset,
  Workflow,
  Zap,
  ChartNoAxesCombined,
  Cpu,
  Database,
  LineChart,
  Sliders,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Layers,
  Wrench,
  TrendingDown,
  Sparkles,
  CalendarCheck,
  AlertTriangle,
  Flame,
  Droplets
} from "lucide-react";

export const solutionsHero = {
  title: "Industrial IoT & Factory Intelligence Solutions",
  eyebrow: "IIoT • MES • OEE • DigiQA",
  description:
    "Transform legacy shop floors and modern automated lines into intelligent, data-driven production hubs. Connect PLCs, sensors, and test stations for real-time visibility, automated quality control, and zero downtime.",
  image:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=90",
};

export const whatWhyHowData = {
  what: {
    title: "What is the Aplos Logix IIoT Platform?",
    subtitle: "Complete Hardware & Software Ecosystem for Smart Factories",
    text: "Aplos Logix is an enterprise Industrial IoT and MES platform that seamlessly bridges physical shop floor machines with cloud and edge analytics. It connects directly to PLCs, sensors, barcode scanners, and test rigs to capture high-frequency production, quality, energy, and operational data.",
    highlights: [
      "Multi-protocol edge connectivity (OPC-UA, Modbus, MQTT, RS485)",
      "Real-time OEE, downtime & rejection root-cause tracking",
      "Automated safety, performance & EOL test panel integration",
      "Parent-child component genealogy and digital serial batch logging"
    ]
  },
  why: {
    title: "Why Do Modern Manufacturers Need It?",
    subtitle: "Eliminate Blind Spots, Reduce Downtime & Maximize OEE",
    text: "Manual logbooks, paper-based inspection sheets, and isolated machine siloes create expensive delays and hidden quality defects. Aplos Logix automates data capture, provides instant ANDON alerts, and enforces digital quality gates.",
    highlights: [
      "Reduce unplanned machine downtime by up to 35%",
      "Eliminate manual paperwork & daily Excel reporting overhead",
      "100% component and serial number level traceability",
      "Predictive energy & peak demand optimization"
    ]
  },
  how: {
    title: "How Do You Get Started?",
    subtitle: "Seamless 3-Step Onboarding Without Production Stoppage",
    text: "Our non-intrusive edge gateways and pre-built software adapters allow rapid deployment across single machines, full production lines, or multi-plant networks.",
    highlights: [
      "1. Site Audit & Protocol Mapping: We assess existing PLCs, meters, and test rigs.",
      "2. Edge Gateway & Sensor Setup: Quick plug-and-play hardware integration.",
      "3. Dashboard & Alert Configuration: Live in under 48 hours with full team training."
    ]
  }
};

export const pipelineSteps = [
  {
    step: "01",
    name: "CONNECT",
    icon: Cpu,
    title: "Edge & Machine Connectivity",
    desc: "Seamlessly interface with PLCs (Siemens, Allen Bradley, Mitsubishi, Omron), SCADA systems, power meters, and digital sensors using OPC-UA, Modbus & MQTT.",
    color: "blue"
  },
  {
    step: "02",
    name: "COLLECT",
    icon: Database,
    title: "High-Frequency Data Ingestion",
    desc: "Stream real-time cycle times, voltage/current parameters, test results, and operator inputs securely into edge nodes or local plant servers.",
    color: "violet"
  },
  {
    step: "03",
    name: "ANALYZE",
    icon: LineChart,
    title: "Real-Time OEE & Analytics",
    desc: "Process data instantly to compute Availability, Performance, and Quality metrics. Automatically classify downtime stop reasons and Pareto loss charts.",
    color: "orange"
  },
  {
    step: "04",
    name: "ACT",
    icon: Sliders,
    title: "ANDON Alerts & Automation",
    desc: "Trigger instant WhatsApp/SMS alerts for line stops, print barcode & rating labels automatically, and push live KPIs to shop floor ANDON displays.",
    color: "emerald"
  }
];

export const manufacturingTypes = {
  discrete: {
    title: "Discrete Manufacturing",
    desc: "High-speed assembly lines requiring unit-level serial traceability, safety/performance test panel integration, and automated label printing.",
    sectors: [
      "Washing Machines & Dryers",
      "Refrigerators & Deep Freezers",
      "Air Conditioners & HVAC Systems",
      "Microwaves & Kitchen Appliances",
      "Water Purifiers & Small Appliances",
      "Televisions & Consumer Electronics",
      "Electric Motors, Fans & Pumps",
      "Automobiles & EV Battery Packs"
    ]
  },
  process: {
    title: "Industrial & Process Manufacturing",
    desc: "Transform manufacturing operations with connected machines, real-time production visibility, intelligent alerts, energy monitoring, predictive maintenance, and scalable edge-to-cloud automation.",
    applications: [
      "Plastic Injection Molding",
      "CNC Machine Monitoring",
      "Industrial Press Automation",
      "HVAC & Utility Monitoring",
      "Battery Production Monitoring",
      "Temperature & Energy Management",
      "Real-Time Production Tracking",
      "Predictive Maintenance"
    ]
  }
};

export const supportedBrands = [
  "Siemens", "Allen Bradley", "Mitsubishi Electric", "Schneider Electric",
  "ABB", "Beckhoff", "Fanuc", "Omron", "Hitachi", "Delta", "Makino", "Mazak"
];

export const supportedProtocols = [
  "OPC-UA", "Modbus TCP/RTU", "MQTT", "Profinet", "Profibus",
  "EtherCAT", "BACnet", "CANbus", "EtherNet/IP", "CC-Link", "SNMP", "CoAP"
];

export const holisticModules = [
  {
    id: "machinemonitoring",
    tag: "Machine Monitoring",
    title: "Detailed View of High-Value Assets",
    desc: "Monitor CNCs, robotic arms, Swiss lathes, and precision equipment in real time to maximize operational efficiency.",
    icon: Gauge,
    points: [
      { name: "Condition Monitoring", text: "Access real-time health and vibration/heat metrics of assets." },
      { name: "Machine Performance", text: "Analyze speed, output, energy draw, and PMC indicators." },
      { name: "Uptime vs. Downtime", text: "Track operational intervals to minimize unplanned stops." },
      { name: "Machine Utilization", text: "Compare actual runtime against scheduled available shift hours." }
    ]
  },
  {
    id: "productionline",
    tag: "Production Line Monitoring",
    title: "Reduce Downtime & Stoppages for Max Efficiency",
    desc: "Proactively monitor multi-station assembly lines for enhanced throughput and zero-defect quality control.",
    icon: Factory,
    points: [
      { name: "Line Stoppages", text: "Identify exact root cause, duration, and frequency of line stops." },
      { name: "Cycle Time Analysis", text: "Track station-wise cycle time to eliminate bottlenecks." },
      { name: "Planned vs. Actual Yield", text: "Compare projected output against real-time finished units." },
      { name: "Operator Efficiency", text: "Monitor task completion rates and operator station activity." }
    ]
  },
  {
    id: "oee",
    tag: "Overall Equipment Effectiveness",
    title: "Evaluate OEE for World-Class Productivity",
    desc: "Automatically calculate the 3 golden pillars of manufacturing: Availability, Performance, and Quality.",
    icon: BarChart3,
    points: [
      { name: "Equipment Effectiveness", text: "Instant live OEE dashboard across machines, shifts, and plants." },
      { name: "Production Bottlenecks", text: "Highlight slow-running stations and micro-stoppages." },
      { name: "OEE Benchmarking", text: "Compare OEE against global Industry 4.0 standards." },
      { name: "Availability Tracking", text: "Schedule preventative maintenance to prevent breakdowns." }
    ]
  },
  {
    id: "shifts",
    tag: "Shifts & Job Allocation",
    title: "Track Shifts, Jobs, and Resource Utilization",
    desc: "Digital shift management and automated work order job card tracking for personnel and equipment.",
    icon: CalendarCheck,
    points: [
      { name: "Real-Time Shift Data", text: "Continuous analysis and shift report generation." },
      { name: "Resource Allocation", text: "Distribute tasks across operators and workstations." },
      { name: "Digital Job Cards", text: "Paperless work orders linked directly to serial numbers." },
      { name: "Idle Time Analysis", text: "Compare productive work time vs. line wait time." }
    ]
  },
  {
    id: "maintenance",
    tag: "Maintenance & SLAs",
    title: "Predictive Maintenance & Mobile Work Orders",
    desc: "Automate maintenance schedules, detect early signs of failure, and resolve SLAs faster.",
    icon: Wrench,
    points: [
      { name: "Predictive Maintenance", text: "AI-driven anomaly detection before catastrophic breakdown." },
      { name: "Mobile Work Orders", text: "Digital work instructions pushed to technician mobile apps." },
      { name: "Scheduled PM Log", text: "Track maintenance history and component replacement cycles." },
      { name: "Asset Repository", text: "Complete lifecycle management from installation to decommission." }
    ]
  },
  {
    id: "quality",
    tag: "Quality Analysis & DigiQA",
    title: "Meet Quality & ISO Standards with Precision",
    desc: "Digital quality checkpoints, safety test panel validation, and 100% serial number traceability.",
    icon: ShieldCheck,
    points: [
      { name: "100% Traceability", text: "Track product serial number history and test parameters." },
      { name: "Defect Analysis", text: "Classify rejections into Pareto charts for quick CAPA action." },
      { name: "Regulatory Compliance", text: "Comply with ISO, FDA, and OEM quality audit standards." },
      { name: "Safety Panel Testing", text: "Validate insulation, HV, and circuit safety before dispatch." }
    ]
  },
  {
    id: "energy",
    tag: "Energy & Sustainability (EMS)",
    title: "Optimize Energy & Reduce Carbon Footprint",
    desc: "Monitor power, kWh, power factor, and carbon emissions across compressors, chillers, and machine lines.",
    icon: Zap,
    points: [
      { name: "Energy Patterns", text: "Identify peak demand spikes and non-productive energy waste." },
      { name: "Carbon Emissions (CO2)", text: "Track greenhouse gas emissions for ESG compliance." },
      { name: "Utilities Monitoring", text: "Monitor power, water, gas flow, and air pressure in real time." },
      { name: "AI Demand Forecasting", text: "Predict shift energy consumption using machine learning models." }
    ]
  }
];

export const operationalOutcomes = {
  increase: ["Asset Lifecycle", "Machine Efficiency", "Production Revenue"],
  improve: ["Operator Productivity", "Machine Uptime", "Product Quality Yield"],
  optimize: ["Machine Utilization", "Maintenance Cycles", "Shift Output"],
  transform: ["Manufacturing Operations", "Workforce Efficiency", "Digital Factory Culture"],
  reduce: ["Unplanned Downtime", "Energy & Waste Costs", "Paperwork & Manual Logs"]
};

export const solutionCards = [
  {
    icon: ChartNoAxesCombined,
    title: "EMS Dashboard",
    text: "Track energy consumption, demand and power parameters with real-time trends and alerts.",
    badge: "Energy"
  },
  {
    icon: ClipboardCheck,
    title: "QMS Suite",
    text: "Quality inspections, checkpoints, audit records, deviations, CAPA support and compliance visibility.",
    badge: "Quality"
  },
  {
    icon: Gauge,
    title: "OEE Dashboard",
    text: "Real-time OEE tracking across machines, lines, shifts and plants with drill-down into losses.",
    badge: "OEE & Losses"
  },
  {
    icon: TimerReset,
    title: "Downtime Monitoring",
    text: "Capture downtime reasons, durations and recurrence to reduce production losses and improve response.",
    badge: "Downtime"
  },
  {
    icon: QrCode,
    title: "Label Printing",
    text: "Print accurate product, rating plate, QR and MRP labels directly from production data.",
    badge: "Traceability"
  },
  {
    icon: FileSpreadsheet,
    title: "Daily Reports",
    text: "Automated daily reports with production, quality, downtime, rejection and OEE KPIs.",
    badge: "Reporting"
  },
  {
    icon: RadioTower,
    title: "Live Data Monitoring",
    text: "Live machine, tester, sensor and process values streamed into dashboards and alerts.",
    badge: "Live Streams"
  },
  {
    icon: Siren,
    title: "ANDON Dashboard",
    text: "Real-time issue visibility, callouts, escalation workflows and operator notifications.",
    badge: "Alerts"
  },
  {
    icon: PanelTop,
    title: "Test Panel Automation",
    text: "Safety, performance and EOL test execution with validation, data capture and traceability.",
    badge: "Testing"
  },
];

export const powerfulModules = [
  {
    icon: Boxes,
    title: "Model Master",
    text: "Manage models, versions, BOMs and test specifications.",
  },
  {
    icon: ClipboardCheck,
    title: "Digital Log Book",
    text: "Capture records across stations, shifts and operators.",
  },
  {
    icon: Search,
    title: "Serial Search",
    text: "Instant product history and test result retrieval.",
  },
  {
    icon: Gauge,
    title: "OEE Monitoring",
    text: "Availability, performance and quality monitoring.",
  },
  {
    icon: TimerReset,
    title: "Downtime Analytics",
    text: "Loss reason tracking and recurring stop analysis.",
  },
  {
    icon: BellRing,
    title: "WhatsApp Alerts",
    text: "Event-driven production and quality notifications.",
  },
  {
    icon: Network,
    title: "Parent-Child Traceability",
    text: "Assembly and component genealogy across process levels.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    text: "Controlled access with clear audit boundaries.",
  },
  {
    icon: FileSpreadsheet,
    title: "LAN Excel Download",
    text: "Fast authorized data exports over the plant LAN.",
  },
];

export const productionTests = [
  {
    icon: ShieldCheck,
    title: "Safety Test Panel",
    text: "Validate electrical safety circuits before dispatch.",
  },
  {
    icon: Gauge,
    title: "RPM Test",
    text: "Measure speed accuracy and operational limits.",
  },
  {
    icon: Activity,
    title: "Runout Test",
    text: "Detect runout, concentricity and dimensional deviation.",
  },
  {
    icon: ClipboardCheck,
    title: "EOL Validation",
    text: "Final validation with result traceability.",
  },
];

export const solutionBenefits = [
  {
    icon: FileSpreadsheet,
    title: "Reduce Manual Reporting",
    stat: "90%",
    text: "Automate logs and reports to eliminate paperwork and human entry errors.",
  },
  {
    icon: Activity,
    title: "Faster Issue Resolution",
    stat: "3x",
    text: "Real-time alerts and escalation workflows ensure instant response times.",
  },
  {
    icon: Network,
    title: "Complete Traceability",
    stat: "100%",
    text: "Track every part, process, serial number and test parameter across lines.",
  },
  {
    icon: Factory,
    title: "Plant-Wide Visibility",
    stat: "24/7",
    text: "Unified live dashboards across machines, lines, shifts and multiple plants.",
  },
  {
    icon: Boxes,
    title: "Scalable Deployment",
    stat: "48h",
    text: "Modular architecture scaling seamlessly from one station to enterprise network.",
  },
];
