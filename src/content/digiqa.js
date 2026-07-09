import { Activity, BarChart3, BellRing, Boxes, ClipboardCheck, FileSpreadsheet, Gauge, Network, PanelTop, QrCode, RadioTower, Search, ShieldCheck, Siren, TimerReset, Users, Workflow, Zap } from "lucide-react";
import digiqa_image from "../assets/image/digi_qa_banner.svg"
export const digiqaHero = {
  title: "Complete Digital Quality & Test Automation Ecosystem",
  description: "DigiQA digitizes quality, test stations and production records across the factory floor. Capture live data, ensure traceability, automate reports and alerts, and connect every unit to a complete production history.",
  image: digiqa_image,
  bullets: ["Real-time Quality Visibility", "End-to-End Traceability", "Automated Reports & Alerts"],
};

export const digiqaModules = [
  { icon: Boxes, title: "Model Master", text: "Create and manage models, versions, part numbers, drawings, specifications and test routes.", preview: "Model WM-1002 • Rev 2.0 • Active" },
  { icon: ClipboardCheck, title: "Digital Log Book", text: "Capture every station result digitally with operator, shift, timestamp, value and result.", preview: "ST-01 • 14:45 • 97.6 • PASS" },
  { icon: Search, title: "Serial Number Search", text: "Search any serial number to view complete test history, operators, station-wise results and final status.", preview: "SN: 24WM00123546 • Status: PASS" },
  { icon: Siren, title: "ANDON Dashboard", text: "Live production and quality status for the shop floor with callouts, alerts and escalation timers.", preview: "Running 20 • Stopped 2 • Alerts 2" },
  { icon: FileSpreadsheet, title: "Automated Reports", text: "Generate daily, shift, station, operator, OEE and rejection reports in Excel or PDF.", preview: "Daily Report • Today • Excel" },
  { icon: BellRing, title: "WhatsApp Alerts", text: "Instant alerts for rejection, limit breach, downtime and quality deviation delivered to the right team.", preview: "Alert: Torque high • ST-03 • 10:02" },
  { icon: Network, title: "Parent-Child Traceability", text: "Maintain complete pedigree across assemblies and components with forward and backward search.", preview: "Parent A-1000 → Sub B-2000 → C-3000" },
  { icon: ShieldCheck, title: "Role-Based Access", text: "Control access by role, plant, station and responsibility with audit-ready permissions.", preview: "Admin • Quality Manager • Operator • Viewer" },
  { icon: FileSpreadsheet, title: "LAN Excel Download", text: "Export plant data directly to Excel over LAN with secure filtered access.", preview: "LAN Connected • Export Ready" },
  { icon: BarChart3, title: "EMS Dashboard", text: "Monitor plant environment, utilities and equipment conditions in live dashboards.", preview: "Temp 26.4°C • RH 54% • Air Quality: Good" },
  { icon: ClipboardCheck, title: "QMS Suite", text: "Manage audits, quality plans, inspection records, NCR/CAPA workflows and compliance status.", preview: "Open NCR 18 • CAPA 7 • Compliance 98.2%" },
  { icon: Gauge, title: "OEE Dashboard", text: "Track OEE by line, machine and shift with availability, performance and quality breakdown.", preview: "OEE 92.1 • A 96.8 • P 91.6 • Q 98.2" },
  { icon: TimerReset, title: "Downtime Monitoring", text: "Capture planned and unplanned downtime with reason codes, owners and root-cause visibility.", preview: "Events 128 • Open 22 • MTTR 12 min" },
  { icon: RadioTower, title: "Live Data Monitoring", text: "Stream RPM, pressure, current, vibration and other process values directly from machines and testers.", preview: "RPM 1450 • Current 12.5A • Pressure 5.2 bar" },
  { icon: QrCode, title: "Serial Number Mapping", text: "Map units and components through process stages with barcode, QR and serial-based identity.", preview: "Assembly → Test → Packing → Dispatch" },
];

export const digiqaTests = [
  { icon: ShieldCheck, title: "Safety Test Panel", text: "Validate safety circuits, interlocks, guards and emergency systems." },
  { icon: Gauge, title: "RPM Test", text: "Test motor and spindle RPM accuracy and performance." },
  { icon: Activity, title: "Runout Test", text: "Measure runout and dimensional precision." },
  { icon: BarChart3, title: "Performance Test", text: "Validate load, function and operating benchmarks." },
  { icon: Zap, title: "HV Test", text: "High-voltage insulation and withstand testing." },
  { icon: PanelTop, title: "LC Test", text: "Inductance and capacitance measurement." },
  { icon: Workflow, title: "IR Test", text: "Insulation resistance and leakage verification." },
  { icon: ClipboardCheck, title: "End-of-Line Validation", text: "Final PASS/FAIL validation before dispatch." },
];

export const digiqaManage = [
  { icon: Boxes, title: "Product Models", text: "Manage products, versions and variants." },
  { icon: ClipboardCheck, title: "Specifications", text: "Define specs, tolerances and acceptance limits." },
  { icon: Workflow, title: "Stations", text: "Configure process stations and test sequences." },
  { icon: Gauge, title: "Test Parameters", text: "Create parameters, units and control limits." },
  { icon: Users, title: "Operators", text: "Manage operators, roles and skills." },
  { icon: Activity, title: "Shifts", text: "Configure shifts, calendars and timings." },
  { icon: ClipboardCheck, title: "Rejection Logs", text: "Track rejects, reasons and actions." },
  { icon: FileSpreadsheet, title: "Daily Reports", text: "View and export daily production summaries." },
  { icon: Network, title: "Traceability History", text: "Search complete end-to-end production history." },
  { icon: RadioTower, title: "Machine Live Data", text: "Monitor live machine and sensor values." },
  { icon: Gauge, title: "OEE & Downtime", text: "Track performance losses and stop events." },
  { icon: Boxes, title: "Test Results Archive", text: "Archive and retrieve test results securely." },
  { icon: BellRing, title: "Alerts & Notifications", text: "Configure issue and escalation rules." },
  { icon: ShieldCheck, title: "Audit & Compliance", text: "Manage records and audit visibility." },
  { icon: BarChart3, title: "Dashboards & Insights", text: "Real-time dashboards and advanced analytics." },
];
