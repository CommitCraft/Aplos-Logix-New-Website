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
  Search,
  ShieldCheck,
  Siren,
  TimerReset,
  Workflow,
  Zap,
} from "lucide-react";

export const homeHero = {
  eyebrow: "DigiQA • EMS • QMS • Production Intelligence",
  title: "Industrial Quality, Production & Live Factory Intelligence",
  description:
    "Aplos Logix connects machines, test stations, operators and production data into one intelligent platform for quality, OEE, downtime, traceability, live visibility and automated reporting.",
  services: ["EMS & QMS", "OEE & Downtime", "Autometic Label Printing", "Safety & Performance Tests", "Live Data", "Daily Reports"],
  factoryImage: "https://cdn.sanity.io/images/03hnmfyj/production/213029123782fdda8d0b4e868245ff1e3561f2b1-4155x2765.jpg",
};

export const quickHighlights = [
  { icon: RadioTower, value: "LIVE", label: "Real-time visibility" },
  { icon: Gauge, value: "OEE", label: "Performance monitoring" },
  { icon: TimerReset, value: "DOWN", label: "Downtime control" },
  { icon: FileSpreadsheet, value: "AUTO", label: "Daily reports" },
  { icon: QrCode, value: "LABEL", label: "Autometic Label Printing" },
  { icon: Boxes, value: "TRACE", label: "End-to-end genealogy" },
];

export const platformModules = [
{
  icon: ChartNoAxesCombined,
  title: "EMS Dashboard",
  text: "Track energy consumption, demand and power parameters with real-time trends and alerts.",
},
  { icon: ClipboardCheck, title: "QMS Suite", text: "Manage quality workflows, inspections, CAPA-ready records, audit visibility and continuous improvement actions." },
  { icon: Gauge, title: "OEE Dashboard", text: "Track availability, performance and quality across machines, lines, shifts and plants." },
  { icon: TimerReset, title: "Downtime Monitoring", text: "Capture planned and unplanned stops, reason codes, MTTR, MTBF and recurring loss patterns." },
{
  icon: QrCode,
  title: "Label Printing",
  text: "Print accurate product, rating plate, QR and MRP labels directly from production data.",
},
  { icon: FileSpreadsheet, title: "Daily Reports", text: "Automatically generate shift, daily, quality, rejection and production reports with actionable KPIs." },
  { icon: Activity, title: "Live Data Monitoring", text: "Stream machine, sensor, tester and process data for real-time visualization and decision support." },
  { icon: Siren, title: "ANDON Dashboard", text: "Show alerts, callouts, line status, escalation timers and operator notifications in real time." },
];

export const iiotExcellence = {
  title: "IIoT Excellence for Modern Manufacturing",
  description:
    "Aplos Logix combines edge connectivity, structured data, digital quality and production intelligence to create a connected factory layer that is transparent, traceable and ready for continuous improvement.",
  pillars: [
    { icon: Cable, title: "Edge Connectivity", text: "PLC, sensor, tester and machine connectivity with secure local data capture." },
    { icon: ClipboardCheck, title: "Digital Quality Control", text: "Configurable inspections, limits, workflows and validation rules." },
    { icon: BarChart3, title: "Production Intelligence", text: "Shift trends, rejection analysis, throughput and target-vs-actual tracking." },
    { icon: Gauge, title: "OEE & Downtime", text: "Availability, performance, quality and detailed downtime loss visibility." },
    { icon: Network, title: "Traceability & Genealogy", text: "Serial search, parent-child mapping and full production history." },
    { icon: FileSpreadsheet, title: "Automated Reporting", text: "Scheduled Excel/PDF reports, alerts and distribution workflows." },
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
  { icon: ShieldCheck, title: "Safety Test Panel", text: "Electrical safety, protection circuits and guarded test sequencing." },
  { icon: Gauge, title: "RPM Test", text: "Speed and spindle RPM accuracy with operational limit validation." },
  { icon: Activity, title: "Runout Test", text: "Runout, concentricity and dimensional deviation measurement." },
  { icon: ClipboardCheck, title: "End-of-Line Validation", text: "Final automated validation with complete PASS/FAIL traceability." },
];

export const productionVisibility = [
  { label: "OEE", value: "92.1%", trend: "+2.5%" },
  { label: "Downtime", value: "2.8%", trend: "-0.7%" },
  { label: "Rejection Trend", value: "1.6%", trend: "-0.4%" },
  { label: "Shift Performance", value: "96.3%", trend: "+1.8%" },
];

export const homeIndustries = [
  { title: "White Goods & Home Appliances", text: "End-of-line quality, safety tests, balancing, reliability and serial traceability.", image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=900&q=85" },
  { title: "Battery Manufacturing", text: "Cell and pack traceability, test capture, quality records and production intelligence.", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85" },
  { title: "Automotive Components", text: "Station history, process validation, test automation and part genealogy.", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=85" },
  { title: "General Manufacturing", text: "Machine connectivity, OEE, downtime, QMS and automated daily reporting.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85" },
];

export const processSteps = [
  { title: "Discover", text: "Study processes, machines, tests, reports and operational gaps." },
  { title: "Integrate", text: "Connect PLCs, testers, sensors, scanners, databases and user workflows." },
  { title: "Digitize", text: "Configure dashboards, quality workflows, traceability and reports." },
  { title: "Optimize", text: "Use OEE, downtime, rejection and live data insights for continuous improvement." },
];

export const manufacturerBenefits = [
  "Real-time production visibility across lines and plants",
  "Faster issue resolution with instant alerts and dashboards",
  "Reduced manual reporting through automated daily reports",
  "Complete serial and component traceability across every process",
  "Scalable architecture for one machine, one line or multiple plants",
];
