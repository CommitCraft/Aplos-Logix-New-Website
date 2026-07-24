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
  Droplets,
  Radio,
  Boxes as InventoryIcon,
  ShieldAlert,
  SlidersHorizontal,
  Smartphone
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

export const architectureStages = [
  {
    id: "collect",
    step: "STAGE 01",
    tag: "COLLECT",
    title: "Data Acquisition & Controller Interfaces",
    subtitle: "High-Frequency Field Data Ingestion from Legacy & Modern Machines",
    icon: Database,
    accent: "blue",
    img1: "procPhoto1",
    img2: "procPhoto2",
    features: [
      { title: "Universal PLC & SCADA Connectivity", desc: "Connect seamlessly to Siemens, Allen Bradley, Mitsubishi, Fanuc, Omron, and Beckhoff PLCs." },
      { title: "High-Frequency 1 KHz Sampling", desc: "Capture micro-vibrations, peak current draw, and PMC parameters for AI machine learning." },
      { title: "Multi-Protocol Hardware Bus", desc: "Support OPC-UA, Modbus TCP/RTU, Profinet, Profibus, EtherCAT, and Ethernet/IP." },
      { title: "Digital & Analog Sensor Nodes", desc: "Plug-and-play integration for temperature, pressure, flow, vibration, and optical sensors." }
    ]
  },
  {
    id: "connect",
    step: "STAGE 02",
    tag: "CONNECT",
    title: "Edge Gateway Computing & Cloud Aggregation",
    subtitle: "Localized Machine Intelligence & Secure Encrypted Telemetry",
    icon: Cpu,
    accent: "violet",
    img1: "procPhoto3",
    img2: "procPhoto4",
    features: [
      { title: "Edge Gateway Computing", desc: "Local processing, data filtering, and zero-latency decision making right at the shop floor." },
      { title: "Encrypted Cloud Streaming", desc: "Stream metrics via HTTPS/MQTT to local plant servers or secure cloud infrastructure." },
      { title: "Remote Site Management", desc: "Deploy firmware updates and configuration changes remotely with one click." },
      { title: "Store-and-Forward Memory", desc: "Local buffer memory ensures zero data loss during temporary network outages." }
    ]
  },
  {
    id: "analyze",
    step: "STAGE 03",
    tag: "ANALYZE & CURATE",
    title: "Real-Time OEE & Industrial Analytics Engine",
    subtitle: "Automated OEE Calculation, Machine Telemetry & Energy (EMS) Intelligence",
    icon: LineChart,
    accent: "orange",
    img1: "procPhoto5",
    img2: "procPhoto6",
    features: [
      { title: "Real-Time OEE Loss Engine", desc: "Instantly calculate Availability, Performance, and Quality across machines, lines, and shifts." },
      { title: "Downtime & Pareto Root Cause", desc: "Automated categorization of machine stop reasons for instant root-cause corrective action (CAPA)." },
      { title: "Industrial Energy Management (EMS)", desc: "Track kWh power consumption, peak load spikes, power factor, and carbon footprint per unit." },
      { title: "Serial Quality & Component Traceability", desc: "Link electrical safety, pressure, and dimension test results to product serial numbers." }
    ]
  },
  {
    id: "act",
    step: "STAGE 04",
    tag: "ACT & AUTOMATE",
    title: "ANDON Alerts, Workflows & ERP Integration",
    subtitle: "Turn Insights into Instant Automated Actions & ERP Synchronization",
    icon: Sliders,
    accent: "emerald",
    img1: "procPhoto1",
    img2: "procPhoto4",
    features: [
      { title: "Instant ANDON Callouts", desc: "Trigger WhatsApp, SMS, and email alerts for line stops, quality deviations, and maintenance." },
      { title: "Automated Label Printing", desc: "Print barcode, QR code, MRP, and rating plate labels directly from live test results." },
      { title: "ERP & MES REST APIs", desc: "Bi-directional integration with SAP, Oracle, Tally, and custom ERP production planning." },
      { title: "DigiQA Safety Gates", desc: "Prevent non-compliant units from advancing to packing with automated safety interlocks." }
    ]
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
    subheading: "Monitor equipment (CNC, robotic arms, Swiss, precision presses) in real time to maximize efficiency.",
    imageKey: "modMachine",
    icon: Gauge,
    points: [
      { name: "Condition Monitoring", text: "Access real-time data on the health and performance of industrial equipment." },
      { name: "Machine Performance", text: "Analyze speed, output, energy consumption, and PMC indicators to optimize performance." },
      { name: "Machine Uptime / Downtime", text: "Monitor intervals when the machine is operational and non-operational to minimize disruptions." },
      { name: "Machine Utilization", text: "Measure actual operation time against scheduled available hours to optimize production schedules." },
      { name: "Asset Operations", text: "Monitor real-time asset performance across multiple lines." },
      { name: "Usage Patterns", text: "Analyze machine usage patterns for optimized shift allocation and performance." }
    ]
  },
  {
    id: "productionlinemonitoring",
    tag: "Production Line Monitoring",
    title: "Reduce Downtime & Stoppages for Production Efficiency",
    subheading: "Proactively monitor operations for enhanced productivity, bottleneck elimination, and quality control.",
    imageKey: "modLine",
    icon: Factory,
    points: [
      { name: "Line Stoppages", text: "Gain insights into the cause, duration, and frequency of line interruptions." },
      { name: "Cycle Time Analysis", text: "Analyze the time to task completion to identify bottlenecks and optimize workflows." },
      { name: "Planned vs Actual Yield", text: "Compare projected and actual outputs to assess production effectiveness." },
      { name: "Reject Rate Tracking", text: "Assess the percentage of manufactured products that do not meet quality standards." },
      { name: "Production Downtime", text: "Gain insights into the reasons for interruptions and their overall operational impact." },
      { name: "Operator Efficiency", text: "View operator activities, performance metrics, and task completion rates." }
    ]
  },
  {
    id: "overallequipmenteffectiveness",
    tag: "Overall Equipment Effectiveness",
    title: "Evaluate OEE for Greater Shop Floor Productivity",
    subheading: "Assess Availability, Performance Efficiency, and Quality Yield across all production lines.",
    imageKey: "modOee",
    icon: BarChart3,
    points: [
      { name: "Equipment Effectiveness", text: "Determine live availability, performance, and quality of industrial equipment." },
      { name: "Production Bottlenecks", text: "Identify process constraints, slow-running stations, and micro-stoppages." },
      { name: "OEE Benchmarking", text: "Compare OEE of equipment with established standards to set performance targets." },
      { name: "Asset Performance", text: "View real-time data on the health, condition, and usage of high-value assets." },
      { name: "Productivity Tracking", text: "Optimize workflows and energy efficiency by assessing operational output." },
      { name: "Availability Management", text: "Track operational assets ready for use to plan scheduled maintenance." }
    ]
  },
  {
    id: "shiftsandjobsallocation",
    tag: "Shifts & Jobs Allocation",
    title: "Keep Track of Shifts, Jobs, and Workstation Resources",
    subheading: "Ensure optimal coordination of employee and equipment shifts based on energy consumption and productivity.",
    imageKey: "modShift",
    icon: CalendarCheck,
    points: [
      { name: "Real-Time Shift Data", text: "Continuous monitoring, analysis, and reporting of operational data during work shifts." },
      { name: "Resource Allocation", text: "Optimized distribution of personnel, machinery, and raw materials." },
      { name: "Digital Job Cards", text: "Digital records containing detailed work order instructions linked to serial numbers." },
      { name: "Shift Scheduling", text: "Automation of work shifts for personnel and machines to optimize resource deployment." },
      { name: "Workforce Efficiency", text: "Insights for enhancing overall operator productivity and team collaboration." },
      { name: "Idle Time vs Productive Time", text: "Analysis of machine idle time to enable timely interventions." }
    ]
  },
  {
    id: "maintenanceandsla",
    tag: "Maintenance & SLAs",
    title: "Perform Condition Monitoring, Predictive PM, and Work Orders",
    subheading: "Automate tasks quickly and reduce maintenance costs. Detect early signs of downtime and schedule PM proactively.",
    imageKey: "modMaint",
    icon: Wrench,
    points: [
      { name: "Remote Asset Condition Monitoring", text: "Analyze real-time data on the health and performance of industrial assets remotely." },
      { name: "Predictive Maintenance", text: "Proactively prevent equipment failures and extend the lifecycle span of assets." },
      { name: "Mobile Work Orders", text: "Digitally access detailed work instructions, asset info, and task assignments." },
      { name: "Scheduled Planned Maintenance", text: "Schedule maintenance based on machine health to improve operational reliability." },
      { name: "Asset Repository", text: "Access a comprehensive view of your assets to optimize maintenance strategies." },
      { name: "Roles & Approval Automation", text: "Enable workflow automation, conditional approvals, and role permissions." }
    ]
  },
  {
    id: "qualityanalysis",
    tag: "Quality Analysis",
    title: "Meet Standards with Precision & DigiQA Validation",
    subheading: "Create quality benchmarks and implement safety measures while ensuring regulatory compliance with ISO and OEM standards.",
    imageKey: "modQuality",
    icon: ShieldCheck,
    points: [
      { name: "Equipment Health", text: "Enable real-time monitoring of the condition and operational performance of machinery." },
      { name: "Production Quality Yield", text: "Measure the quantity and quality of industrial process output relative to input." },
      { name: "Full Serial Traceability", text: "Track and record product production history and test result parameters." },
      { name: "Regulatory Compliance", text: "Build trust and minimize legal and regulatory compliance risks." },
      { name: "Material Composition", text: "Accurately monitor the composition of raw materials to ensure quality standards." },
      { name: "Defect Pareto Analysis", text: "Analyze abnormalities in production to reduce waste and improve efficiency." }
    ]
  },
  {
    id: "assetandinventorytracking",
    tag: "Asset & Inventory Tracking",
    title: "Trace Assets and Stock from Source to Shelf",
    subheading: "Access real-time insights and comprehensive visibility to prevent loss and maximize asset usage.",
    imageKey: "modInventory",
    icon: InventoryIcon,
    points: [
      { name: "Asset Identification", text: "Gain enhanced visibility of assets and perform maintenance as needed." },
      { name: "Location Tracking", text: "Track asset location with GPS, BLE, and RFID to improve logistics." },
      { name: "Stock Availability", text: "Monitor stock availability to reduce stock-outs or overstocking." },
      { name: "Maintenance & Service History", text: "Document all maintenance activities to optimize resource allocation." },
      { name: "Utilization Analysis", text: "Optimize inventory management for accurate order fulfillment." },
      { name: "Geo-Fencing Boundaries", text: "Create virtual boundaries and trigger alerts when assets move." }
    ]
  },
  {
    id: "energyandsustainability",
    tag: "Energy & Sustainability",
    title: "Optimize Energy Consumption & Reduce Carbon Footprint",
    subheading: "Monitor and control energy consumption by HVACs, DGs, Compressors, Chillers, and production machines.",
    imageKey: "modEnergy",
    icon: Zap,
    points: [
      { name: "Energy Consumption Pattern", text: "Take a data-driven approach to improving energy efficiency and reducing costs." },
      { name: "Carbon Emissions (CO2)", text: "Measure, track, and manage greenhouse gas releases for ESG goals." },
      { name: "Waste Generation Insights", text: "Access real-time insights into volume and types of industrial waste created." },
      { name: "Renewable Energy Integration", text: "Integrate solar and renewable energy sources with your plant layout." },
      { name: "Measurement & Verification (M&V)", text: "Validate energy savings, process improvements, and sustainability KPIs." },
      { name: "AI Prediction & Forecasting", text: "Analyze historical energy data to forecast future shift power demand." }
    ]
  },
  {
    id: "utilitiesmonitoring",
    tag: "Utilities Monitoring",
    title: "Unlock Savings Potential with Smart Utilities",
    subheading: "Acquire, manage, and report vital data from power, water, gas, and air flow meters.",
    imageKey: "modUtilities",
    icon: Droplets,
    points: [
      { name: "Power Quality Tracking", text: "Track voltage stability, frequency, and harmonic distortion to prevent trips." },
      { name: "Water Usage Monitoring", text: "Monitor water consumption throughout plant facilities." },
      { name: "Gas Flow & Pressure", text: "Measure flow rates and pressure levels of gases across facilities." },
      { name: "Leak Detection", text: "Detect water or gas leaks and anomalies to prevent resource waste." },
      { name: "Demand Planning", text: "Monitor real-time energy consumption patterns and load fluctuations." },
      { name: "Remote Utility Monitoring", text: "Oversee utility usage and meter parameters from any location." }
    ]
  },
  {
    id: "safetyandcontrol",
    tag: "Safety & Control",
    title: "For Safe & Secure Manufacturing Operations",
    subheading: "Continually monitor fire safety equipment, environmental sensors, and safety interlocks.",
    imageKey: "modSafety",
    icon: ShieldAlert,
    points: [
      { name: "Sprinkler System Status", text: "Monitor sprinkler system pressure to ensure proper readiness." },
      { name: "Emergency Sirens & Lighting", text: "Detect emergencies and enable sirens to notify shop floor personnel." },
      { name: "Temperature Anomaly Detection", text: "Monitor temperature spikes and thermal anomalies in real time." },
      { name: "Remote Safety Control", text: "Oversee safety interlocks and alarms from any location." },
      { name: "Extinguisher Status", text: "Track availability and status of fire extinguishers for timely intervention." },
      { name: "Smoke Sensor Detection", text: "Detect smoke anomalies and automatically trigger emergency notifications." }
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
    text: "Track energy consumption, peak demand and power parameters with real-time trends and alerts.",
    badge: "Energy",
    category: "energy",
    status: "Active Monitoring",
    features: ["kWh & Peak Demand Tracking", "Power Factor & Voltage Logging", "CO2 ESG Carbon Reports"]
  },
  {
    icon: ClipboardCheck,
    title: "QMS Suite",
    text: "Quality inspections, checkpoints, audit records, deviations, CAPA support and compliance visibility.",
    badge: "Quality",
    category: "quality",
    status: "ISO Compliant",
    features: ["Digital Quality Checkpoints", "Defect Pareto & CAPA Action", "ISO Audit Trial Logging"]
  },
  {
    icon: Gauge,
    title: "OEE Dashboard",
    text: "Real-time OEE tracking across machines, lines, shifts and plants with drill-down into losses.",
    badge: "OEE & Losses",
    category: "oee",
    status: "Live OEE Engine",
    features: ["Availability, Performance & Quality", "Real-Time Downtime Capture", "Multi-Plant OEE Benchmarking"]
  },
  {
    icon: TimerReset,
    title: "Downtime Monitoring",
    text: "Capture downtime reasons, durations and recurrence to reduce production losses and improve response.",
    badge: "Downtime",
    category: "oee",
    status: "Auto Classification",
    features: ["Stop Reason Categorization", "Micro-Stoppage Tracking", "Pareto Downtime Analytics"]
  },
  {
    icon: QrCode,
    title: "Label Printing",
    text: "Print accurate product, rating plate, QR and MRP labels directly from production data.",
    badge: "Traceability",
    category: "quality",
    status: "Auto Print Engine",
    features: ["QR & Barcode Generation", "Rating Plate & MRP Print", "Zebra / SATO Printer Interfacing"]
  },
  {
    icon: FileSpreadsheet,
    title: "Daily Reports",
    text: "Automated daily reports with production, quality, downtime, rejection and OEE KPIs.",
    badge: "Reporting",
    category: "energy",
    status: "Automated PDF/Excel",
    features: ["Shift End Report Dispatch", "LAN Excel Data Export", "Management Summary KPI Mail"]
  },
  {
    icon: RadioTower,
    title: "Live Data Monitoring",
    text: "Live machine, tester, sensor and process values streamed into dashboards and alerts.",
    badge: "Live Streams",
    category: "energy",
    status: "1 KHz Data Stream",
    features: ["High-Frequency Sensor Logging", "Live Gauge Widgets", "Vibration & Temp Streaming"]
  },
  {
    icon: Siren,
    title: "ANDON Dashboard",
    text: "Real-time issue visibility, callouts, escalation workflows and operator notifications.",
    badge: "Alerts",
    category: "oee",
    status: "WhatsApp/SMS Live",
    features: ["WhatsApp & SMS Instant Alerts", "Shop Floor ANDON TV Display", "Multi-Tier Escalation Matrix"]
  },
  {
    icon: PanelTop,
    title: "Test Panel Automation",
    text: "Safety, performance and EOL test execution with validation, data capture and traceability.",
    badge: "Testing",
    category: "quality",
    status: "EOL Safety Gate",
    features: ["HV Insulation & Safety Test", "RPM & Runout Validation", "Pass/Fail Serial Pass Gate"]
  },
];

export const essentialCapabilities = [
  { id: "conn", icon: Cpu, name: "Connectivity", desc: "OPC-UA, Modbus, MQTT, Profinet PLC edge adapters for legacy & modern machines." },
  { id: "wf", icon: Workflow, name: "Workflows", desc: "Event-driven rule engine, ANDON escalation matrix & automated task routing." },
  { id: "alert", icon: Siren, name: "Smart Alerts", desc: "Multi-channel WhatsApp, SMS, email & shop floor physical siren triggers." },
  { id: "sec", icon: ShieldCheck, name: "Security", desc: "Role-based access, SSL/TLS encryption, LAN local data storage & audit trails." },
  { id: "daq", icon: Database, name: "Data Acquisition", desc: "1 KHz high-frequency sensor sampling, PLC register logs & PMC data capture." },
  { id: "vis", icon: Gauge, name: "Visualization", desc: "Real-time ANDON TV displays, dynamic gauge widgets & multi-plant dashboards." },
  { id: "ana", icon: LineChart, name: "Analytics", desc: "Automated OEE calculations, downtime Pareto loss charts & energy demand forecasts." },
  { id: "mod", icon: Boxes, name: "Modelling", desc: "Digital twin, model master BOM, test specifications & parent-child serial genealogy." },
  { id: "int", icon: Network, name: "Integrations", desc: "Bi-directional REST APIs with SAP, Oracle, ERP, MES, and industrial printers." },
  { id: "mob", icon: Smartphone, name: "Mobile App", desc: "Technician work orders, real-time push alerts & shift report downloads on mobile." }
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
