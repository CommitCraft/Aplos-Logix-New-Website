import {
  Activity,
  BarChart3,
  BellRing,
  Cable,
  CloudCog,
  Code2,
  Database,
  Factory,
  FileSpreadsheet,
  Gauge,
  GitBranch,
  HardDrive,
  Lock,
  MonitorSmartphone,
  Network,
  PanelTop,
  QrCode,
  RadioTower,
  RefreshCcw,
  Router,
  ServerCog,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import technologyBanner from "../assets/image/technology.png";

export const technologyHero = {
  eyebrow: "Industrial Architecture",
  title: "Industrial Technology That Powers Your Factory",
  highlight: "From Machine Signal to Actionable Decision",
  description:
    "A secure, modular architecture for connected manufacturing—from PLCs, test panels and scanners to edge processing, structured storage, quality applications, dashboards, alerts and automated reports.",
image:technologyBanner,
};

export const technologyStats = [
  { value: "EDGE", label: "Local processing & resilience" },
  { value: "LIVE", label: "Real-time machine visibility" },
  { value: "API", label: "Open integration approach" },
  { value: "HYBRID", label: "On-premise + cloud ready" },
];

export const architectureLayers = [
  {
    icon: BellRing,
    title: "Action & Insights Layer",
    text: "Turn shop-floor events into clear action through alerts, workflows, reports and management visibility.",
    bullets: ["Alerts & Escalations", "Workflow Automation", "Scheduled Reports", "Management Dashboards"],
  },
  {
    icon: MonitorSmartphone,
    title: "Application Layer",
    text: "Deliver role-based applications for quality, production, traceability, maintenance and operational intelligence.",
    bullets: ["DigiQA & QMS", "OEE & Downtime", "Traceability & Genealogy", "EMS & ANDON"],
  },
  {
    icon: Database,
    title: "Data & Storage Layer",
    text: "Normalize and store transactional, time-series and traceability data with controlled structure and retention.",
    bullets: ["Relational Data", "Time-Series Data", "Data Validation", "Backup & Retention"],
  },
  {
    icon: Router,
    title: "Edge & Connectivity Layer",
    text: "Collect, validate, buffer and route industrial data locally so plant operations remain dependable even when external connectivity changes.",
    bullets: ["Protocol Conversion", "Local Buffering", "Store & Forward", "Secure API Gateway"],
  },
  {
    icon: Factory,
    title: "Device & Machine Layer",
    text: "Connect the physical shop floor: controllers, testers, sensors, scanners, meters, panels and production equipment.",
    bullets: ["PLCs & HMIs", "Test Panels & Testers", "Scanners & Printers", "Meters & Sensors"],
  },
];

export const protocols = [
  "OPC UA",
  "Modbus TCP",

  "EtherNet/IP",

  "MQTT",
  "REST APIs",
  "HTTP / HTTPS",
  "TCP / IP",
  "WebSocket",
  "RS-232",
  "RS-485",
];
export const integrationSources = [
  { icon: Factory, title: "PLCs & Machines", text: "Cycle, status, count, recipe and process signals." },
  { icon: PanelTop, title: "Test Panels", text: "Safety, RPM, runout, performance, HV, LC and IR results." },
  { icon: QrCode, title: "Barcode / QR", text: "Unit identity, model validation and serial mapping." },
  { icon: Gauge, title: "Meters & Sensors", text: "Energy, temperature, pressure, vibration and utility data." },
  { icon: FileSpreadsheet, title: "Legacy Data", text: "Structured import from existing files, databases and systems." },
  { icon: Network, title: "ERP / MES / APIs", text: "Controlled exchange with business and plant applications." },
];

export const dataPipeline = [
  { step: "01", title: "Acquire", text: "Read machine, tester, sensor and scanner data." },
  { step: "02", title: "Validate", text: "Apply type checks, limits, identity and completeness rules." },
  { step: "03", title: "Buffer", text: "Protect continuity with resilient local queues and store-forward logic." },
  { step: "04", title: "Normalize", text: "Convert source-specific signals into consistent business data." },
  { step: "05", title: "Store", text: "Persist quality, production, event and traceability records." },
  { step: "06", title: "Visualize", text: "Show live KPIs, trends, status and complete serial history." },
  { step: "07", title: "Act", text: "Trigger alerts, reports, escalations and system workflows." },
];

export const deploymentModes = [
  {
    icon: HardDrive,
    title: "On-Premise",
    text: "Plant-local application and database deployment for controlled networks and LAN-first operations.",
    bestFor: "Isolated plants, low-latency operations, strict local control",
  },
  {
    icon: GitBranch,
    title: "Hybrid",
    text: "Edge-first plant operation with selective synchronization to centralized or cloud services.",
    bestFor: "Multi-plant visibility, central reports, resilient local execution",
  },
  {
    icon: CloudCog,
    title: "Cloud-Connected",
    text: "Centralized applications and analytics with secure gateway-based plant connectivity where appropriate.",
    bestFor: "Distributed operations, centralized analytics, remote management",
  },
];

export const techStack = [
  { icon: Workflow, title: "Node-RED" },
  { icon: Database, title: "MySQL" },
  { icon: RadioTower, title: "MQTT" },
  { icon: ServerCog, title: "Raspberry Pi" },
  { icon: Code2, title: "Linux" },
  { icon: MonitorSmartphone, title: "Windows" },
  { icon: Network, title: "REST APIs" },
  { icon: CloudCog, title: "Cloud" },
];

export const technologyHighlights = [
  { icon: Cable, title: "PLC & Tester Integration", text: "Connect PLCs, HMIs, testers and industrial equipment using source-appropriate protocols and robust handshakes." },
  { icon: Router, title: "Edge Computing & IIoT Gateways", text: "Collect, filter, buffer and process data close to equipment for reliable local operation." },
  { icon: Workflow, title: "Test Automation", text: "Build maintainable event flows for routing, transformation, validation, alerting and integration." },
  { icon: Database, title: "Industrial Data Design", text: "Structure production, quality, traceability and time-series records for fast search and reliable reporting." },
  { icon: ShieldCheck, title: "Secure Hybrid Architecture", text: "Combine local operation with controlled synchronization, role-based access and protected data exchange." },
  { icon: Activity, title: "Analytics & Monitoring", text: "Deliver OEE, downtime, quality trends, live machine views and actionable operational dashboards." },
];

export const reliabilityFeatures = [
  { icon: Lock, title: "Role-Based Access", text: "Control screens, actions and data based on responsibility and plant role." },
  { icon: RefreshCcw, title: "Store & Forward", text: "Buffer events locally and resume delivery automatically after connectivity interruption." },
  { icon: Database, title: "Data Integrity", text: "Validation rules, unique identities and controlled writes reduce incomplete or duplicate records." },
  { icon: Users, title: "Audit Visibility", text: "Maintain operator, station, timestamp and action history where traceability is required." },
];

export const technologyBenefits = [
  { icon: ShieldCheck, title: "Reliable", text: "Designed for 24/7 shop-floor operations and local resilience." },
  { icon: BarChart3, title: "Scalable", text: "Start with one machine or line and expand to plant-level visibility." },
  { icon: Network, title: "Integration Ready", text: "Connect machines, databases, APIs and enterprise systems." },
  { icon: Gauge, title: "Future Ready", text: "Modular layers make new devices, modules and analytics easier to add." },
];
