import { Activity, BarChart3, ClipboardCheck, Factory, FileSpreadsheet, Gauge, QrCode, RadioTower, ShieldCheck, Siren, TimerReset, Workflow, Zap } from "lucide-react";

export const industriesHero = {
  title: "Industries We Transform",
  highlight: "Smart Solutions. Real Impact.",
  description: "Aplos Logix delivers data-driven systems for diverse manufacturing industries—helping factories improve quality, achieve full traceability, maximize OEE and gain live production visibility.",
  image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=90",
};

export const industryCards = [
  { title: "White Goods & Home Appliances", text: "End-to-end quality assurance across assembly, safety testing, balancing, performance and final inspection.", image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1000&q=85" },
  { title: "Battery Manufacturing", text: "Cell and pack quality, safety, traceability and production intelligence across manufacturing stages.", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=85" },
  { title: "Automotive Components", text: "Process validation, component genealogy, station history and high-mix production traceability.", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=85" },
  { title: "General Manufacturing", text: "Machine connectivity, OEE, downtime, quality, test automation and plant-wide visibility.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85" },
  { title: "Electronics Assembly", text: "Serial traceability, inspection control, electrical testing and zero-defect quality workflows.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85" },
  { title: "Industrial Equipment", text: "Reliability, compliance, safety testing and performance validation for complex equipment.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85" },
];

export const industryStats = [
  { value: "100+", label: "Active Deployments" },
  { value: "500+", label: "Projects Delivered" },
  { value: "99.8%", label: "Platform Availability" },
  { value: "24/7", label: "Operational Monitoring" },
];

export const useCases = [
  { icon: ClipboardCheck, title: "End-of-Line Testing", text: "Automate test execution and capture results in real time." },
  { icon: QrCode, title: "Production Traceability", text: "Track components and assemblies across the production flow." },
  { icon: ShieldCheck, title: "Quality Inspection", text: "Perform in-line and final inspections with digital workflows." },
  { icon: BarChart3, title: "Rejection Analytics", text: "Analyze rejection trends and identify root causes faster." },
  { icon: Workflow, title: "Reliability Lab Records", text: "Manage lab tests and traceable reliability records." },
  { icon: Siren, title: "Smart ANDON Monitoring", text: "Detect issues instantly and trigger responsive actions." },
  { icon: Gauge, title: "OEE Monitoring", text: "Track OEE by line, machine and shift." },
  { icon: TimerReset, title: "Downtime Analysis", text: "Identify repeated causes and reduce production losses." },
  { icon: QrCode, title: "Serial Number Mapping", text: "Map serials and subassemblies across every process." },
  { icon: FileSpreadsheet, title: "Daily Reporting", text: "Automate daily production and quality reports." },
  { icon: RadioTower, title: "Live Data", text: "See production and process data as it happens." },
  { icon: Factory, title: "Plant Visibility", text: "Unify machine, line and plant-level performance views." },
];

export const industryTestCoverage = [
  { icon: ShieldCheck, title: "Safety Test Panel", text: "Electrical safety and protection checks." },
  { icon: Gauge, title: "RPM Test", text: "Speed and rotation performance testing." },
  { icon: Activity, title: "Runout Test", text: "Concentricity and dimensional validation." },
  { icon: BarChart3, title: "Performance Test", text: "Functional and load performance testing." },
  { icon: Zap, title: "HV Test", text: "High-voltage insulation testing." },
  { icon: Workflow, title: "LC Test", text: "Inductance and capacitance testing." },
  { icon: ClipboardCheck, title: "IR Test", text: "Insulation resistance and leakage testing." },
];
