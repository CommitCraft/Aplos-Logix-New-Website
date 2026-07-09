import { BarChart3, ClipboardCheck, Gauge, Headphones, Mail, MapPin, PanelTop, Phone, Workflow } from "lucide-react";
import { company } from "./site";

export const contactHero = {
  title: "Let’s Build Something Smart Together",
  description: "Tell us about your DigiQA, EMS, QMS, ANDON, OEE, downtime, traceability, live data or test automation requirement. We will help shape the right factory-ready solution.",
  image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=90",
};

export const contactCards = [
  { icon: MapPin, title: "Head Office", lines: [company.name, company.location] },
  { icon: Phone, title: "Phone", lines: [company.phone, company.hours] },
  { icon: Mail, title: "Email", lines: [company.email, company.supportEmail] },
  { icon: Headphones, title: "Support", lines: [company.supportEmail, company.hours] },
];

export const helpCards = [
  { icon: ClipboardCheck, title: "Factory Assessment", text: "Review current processes and identify opportunities for digitization, quality control and visibility." },
  { icon: BarChart3, title: "DigiQA Demo", text: "See dashboards, serial search, reports, alerts and quality workflows in a focused demo." },
  { icon: Workflow, title: "EMS / QMS Consultation", text: "Structure environmental, equipment and quality processes with digital workflows." },
  { icon: Gauge, title: "Production & OEE Monitoring", text: "Improve OEE, reduce downtime and gain real-time visibility across production lines." },
  { icon: PanelTop, title: "Test Panel Consultation", text: "Discuss safety, RPM, runout, performance, HV, LC and IR test automation." },
];

export const requirementOptions = [
  "DigiQA Platform",
  "EMS Dashboard",
  "QMS Suite",
  "OEE & Downtime Monitoring",
  "ANDON Dashboard",
  "Serial Number Mapping",
  "Live Data Monitoring",
  "Safety / Performance Test Panel",
  "Daily Reports & Alerts",
  "Custom IIoT Integration",
];
