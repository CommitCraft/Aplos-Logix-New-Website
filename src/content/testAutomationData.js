import {
  Activity,
  BarChart3,
  BellRing,
  Database,
  FileSpreadsheet,
  Gauge,
  Monitor,
  Radio,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";


export const testAutomationData = {
  /* =========================================================
     INTRO
  ========================================================= */

  eyebrow: "IIoT Test Automation",

  title: "Automatic Safety & Performance Test Panel",

  description:
    "An IIoT-enabled testing solution designed to automate electrical safety and performance testing, digitally log results and provide real-time production visibility.",


  /* =========================================================
     BENEFITS
  ========================================================= */

  benefits: [
    {
      title: "Fully Automated Testing",

      description:
        "Automate complete testing cycles with minimal operator intervention.",

      icon: Zap,
    },

    {
      title: "Zero Dependency on Skilled Labour",

      description:
        "Standardized workflows reduce manual dependency and operator variation.",

      icon: ShieldCheck,
    },

    {
      title: "Digitally Logged Test Data",

      description:
        "Every test result is securely captured and stored digitally.",

      icon: Database,
    },

    {
      title: "Automated BIS Reports & Alerts",

      description:
        "Generate BIS reports automatically and receive WhatsApp notifications.",

      icon: BellRing,
    },

    {
      title: "ANDON Dashboards",

      description:
        "Monitor testing status, production performance and line conditions in real time.",

      icon: Monitor,
    },
  ],


  /* =========================================================
     PANEL VISUAL CONTENT
  ========================================================= */

  panelVisual: {
    eyebrow: "Smart Test Panel",

    title: "Connected Testing Intelligence",

    description:
      "A centralized IIoT-enabled testing system that automates test sequences, validates measured values, stores complete test records and provides real-time production and quality visibility.",


    metrics: [
      {
        value: "100%",
        label: "Digital Test Logging",
      },

      {
        value: "24/7",
        label: "Production Visibility",
      },

      {
        value: "Auto",
        label: "Report Generation",
      },
    ],


    capabilities: [
      {
        title: "Automatic Test Sequence",

        description:
          "Run predefined electrical safety and performance tests automatically with controlled test sequencing.",
      },

      {
        title: "Real-Time Monitoring",

        description:
          "Track live test status, measured values, pass or fail results and production activity.",
      },

      {
        title: "Digital Data Storage",

        description:
          "Store model, serial number, testing values, final result, date and time for complete traceability.",
      },

      {
        title: "Automatic Reports",

        description:
          "Generate structured production, quality and BIS-related reports with minimal manual effort.",
      },

      {
        title: "Remote Dashboards",

        description:
          "View testing performance, production status and quality information through connected dashboards.",
      },

      {
        title: "Instant Notifications",

        description:
          "Send production updates, fault information and critical alerts through WhatsApp notifications.",
      },
    ],


    status: {
      label: "IIoT Connected System",

      flow:
        "Test → Validate → Store → Report → Alert",
    },
  },


  /* =========================================================
     TESTS INCLUDED
  ========================================================= */

  tests: [
    {
      title: "Earth Contact Resistance",
      icon: Activity,
    },

    {
      title: "High Voltage Withstand",
      icon: Zap,
    },

    {
      title: "Insulation Resistance",
      icon: ShieldCheck,
    },

    {
      title: "Leakage Current",
      icon: Gauge,
    },

    {
      title: "Low Voltage Test",
      icon: Activity,
    },

    {
      title: "Performance Tests",
      icon: TrendingUp,
    },

    {
      title: "Vibration Tests",
      icon: Radio,
    },

    {
      title: "RPM Test",
      icon: Gauge,
    },
  ],


  /* =========================================================
     ENDLESS POSSIBILITIES
  ========================================================= */

  possibilities: [
    {
      title: "Print Rating Plate Labels",
      icon: FileSpreadsheet,
    },

    {
      title: "Print MRP Labels",
      icon: FileSpreadsheet,
    },

    {
      title: "Display Live Data on ANDON Screens",
      icon: Monitor,
    },

    {
      title: "Access Dashboards from Anywhere",
      icon: Smartphone,
    },

    {
      title: "WhatsApp Alerts",
      icon: BellRing,
    },

    {
      title: "Hourly Production Trends",
      icon: TrendingUp,
    },

    {
      title: "Quality Rejection Analysis",
      icon: BarChart3,
    },

    {
      title: "Data Storage for 5 Years",
      icon: Database,
    },
  ],


  /* =========================================================
     PROCESS
  ========================================================= */

  process: [
    {
      number: "01",

      title: "Product Identification",

      description:
        "Identify model and product through barcode or QR scanning.",
    },

    {
      number: "02",

      title: "Automatic Test Sequence",

      description:
        "System performs configured safety and performance tests automatically.",
    },

    {
      number: "03",

      title: "Result Validation",

      description:
        "Measured values are automatically validated against predefined specifications.",
    },

    {
      number: "04",

      title: "Digital Data Logging",

      description:
        "Results are saved with serial number, model, measured values, date and time.",
    },

    {
      number: "05",

      title: "Reporting & Monitoring",

      description:
        "Reports, dashboards and operational alerts are generated automatically.",
    },
  ],


  /* =========================================================
     CTA
  ========================================================= */

  cta: {
    title: "Automate Your End-of-Line Testing",

    description:
      "Improve testing accuracy, reduce manual dependency and gain complete production visibility with connected IIoT test automation.",

    primaryCTA: {
      label: "Discuss Your Requirement",
      to: "/contact",
    },

    secondaryCTA: {
      label: "Explore Industrial Solutions",
      to: "/services",
    },
  },
};