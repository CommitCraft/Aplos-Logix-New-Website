import {
  Activity,
  BarChart3,
  ClipboardCheck,
  Factory,
  FileSpreadsheet,
  Gauge,
  QrCode,
  RadioTower,
  ShieldCheck,
  Siren,
  TimerReset,
  Workflow,
  Zap,
 
} from "lucide-react";
import industryBanner from "../assets/image/industry.png";

export const industriesHero = {
  title: "Industries We Transform",
  highlight: "Smart Solutions. Real Impact.",
  description:
    "Aplos Logix delivers data-driven systems for diverse manufacturing industries—helping factories improve quality, achieve full traceability, maximize OEE and gain live production visibility.",
  image:industryBanner,
};

export const industryCards = [
  {
    title: "White Goods & Home Appliances",
    text: "Automated safety testing, performance validation, balancing, quality control and production monitoring for appliance manufacturing.",
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1000&q=85",
  },

  {
    title: "Battery Manufacturing",
    text: "Production monitoring, quality validation, safety testing and process data management across battery manufacturing operations.",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=85",
  },

  {
    title: "Automotive Components",
    text: "Production testing, process monitoring, quality checks and real-time dashboards for automotive component manufacturing.",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=85",
  },

  {
    title: "General Manufacturing",
    text: "Machine connectivity, OEE monitoring, downtime analysis, quality management and plant-wide production visibility.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
  },

  {
    title: "Production & Assembly Lines",
    text: "Digital production monitoring, ANDON dashboards, station status, quality checks and real-time operational insights.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85",
  },

  {
    title: "Industrial Equipment Manufacturing",
    text: "Safety testing, performance validation, reliability monitoring and digital quality workflows for industrial equipment production.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
  },
];

export const industryStats = [
  { value: "100+", label: "Active Deployments" },
  { value: "500+", label: "Projects Delivered" },
  { value: "99.8%", label: "Platform Availability" },
  { value: "24/7", label: "Operational Monitoring" },
];

export const useCases = [
  {
    icon: ClipboardCheck,
    title: "End-of-Line Testing",
    text: "Automate test execution and capture results in real time.",
  },
  {
    icon: QrCode,
    title: "Production Traceability",
    text: "Track components and assemblies across the production flow.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    text: "Perform in-line and final inspections with digital workflows.",
  },
  {
    icon: BarChart3,
    title: "Rejection Analytics",
    text: "Analyze rejection trends and identify root causes faster.",
  },
  {
    icon: Workflow,
    title: "Reliability Lab Records",
    text: "Manage lab tests and traceable reliability records.",
  },
  {
    icon: Siren,
    title: "Smart ANDON Monitoring",
    text: "Detect issues instantly and trigger responsive actions.",
  },
  {
    icon: Gauge,
    title: "OEE Monitoring",
    text: "Track OEE by line, machine and shift.",
  },
  {
    icon: TimerReset,
    title: "Downtime Analysis",
    text: "Identify repeated causes and reduce production losses.",
  },
  {
    icon: QrCode,
    title: "Label Printing",
    text: "Generate and print product, rating plate, QR and MRP labels directly from production data.",
    preview: "Product Data → Label Generate → Print → Apply",
  },
  {
    icon: FileSpreadsheet,
    title: "Daily Reporting",
    text: "Automate daily production and quality reports.",
  },
  {
    icon: RadioTower,
    title: "Live Data",
    text: "See production and process data as it happens.",
  },
  {
    icon: Factory,
    title: "Plant Visibility",
    text: "Unify machine, line and plant-level performance views.",
  },
];

export const industryTestCoverage = [
  {
    icon: ShieldCheck,
    title: "Earth Contact Resistance",
    text: "Validate protective earth continuity and resistance for electrical safety.",
  },

  {
    icon: Zap,
    title: "High Voltage Withstand",
    text: "Verify insulation strength and electrical protection under high-voltage conditions.",
  },

  {
    icon: ClipboardCheck,
    title: "Insulation Resistance",
    text: "Measure insulation integrity and ensure safe electrical isolation.",
  },

  {
    icon: Gauge,
    title: "Leakage Current Test",
    text: "Measure electrical leakage and validate safe operating limits.",
  },

  {
    icon: Activity,
    title: "Low Voltage Test",
    text: "Validate product operation under controlled low-voltage conditions.",
  },

  {
    icon: BarChart3,
    title: "Performance Testing",
    text: "Evaluate operating parameters and performance against defined specifications.",
  },

  {
    icon: RadioTower,
    title: "Vibration Testing",
    text: "Monitor vibration levels to detect imbalance and abnormal operating conditions.",
  },

  {
    icon: Gauge,
    title: "RPM Testing",
    text: "Measure rotational speed and validate motor performance against defined limits.",
  },
];

// export const industryConnectedCapabilities = [
//   {
//     icon: FileSpreadsheet,
//     title: "Rating Plate Label Printing",
//     text: "Generate and print rating plate labels from verified production and test data.",
//   },

//   {
//     icon: QrCode,
//     title: "MRP & QR Label Printing",
//     text: "Generate and print MRP and QR labels as part of the production workflow.",
//   },

//   {
//     icon: Factory,
//     title: "Live ANDON Dashboards",
//     text: "Display live production, testing and quality data across the shop floor.",
//   },

//   {
//     icon: Workflow,
//     title: "Remote Dashboard Access",
//     text: "Access production and quality dashboards from authorized systems.",
//   },

//   {
//     icon: Siren,
//     title: "WhatsApp Alerts",
//     text: "Receive important production updates, faults and critical alerts instantly.",
//   },

//   {
//     icon: TimerReset,
//     title: "Hourly Production Trends",
//     text: "Track hourly output and monitor production performance trends.",
//   },

//   {
//     icon: BarChart3,
//     title: "Quality Rejection Analysis",
//     text: "Analyze rejection patterns and identify recurring quality issues.",
//   },

//   {
//     icon: ClipboardCheck,
//     title: "Long-Term Data Storage",
//     text: "Maintain production and testing records for long-term analysis and reporting.",
//   },
// ];
