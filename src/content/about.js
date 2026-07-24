import {
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Lightbulb,
  LockKeyhole,
  Network,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  Target,
  Eye,
  CheckCircle2,
  Award,
  Factory,
  BarChart3
} from "lucide-react";

import panelImage from "../assets/image/big_panel.png";

/* =========================================================
   HERO
========================================================= */

export const aboutHero = {
  eyebrow: "About Aplos Logix Pvt. Ltd.",
  title: "Transforming Manufacturing with",
  highlight: "Connected Intelligence",
  description:
    "We design enterprise-grade IIoT, MES, OEE, and DigiQA solutions that simplify complex shop floor operations, connect legacy and modern PLCs, and empower manufacturers with real-time actionable visibility.",
  image: panelImage,
  imageAlt: "Aplos Logix Pvt. Ltd. Industrial Automation & IIoT Platform",
  points: [
    "100% Paperless DigiQA & Quality Gate Enforcements",
    "Real-time OEE, Downtime Pareto & Rejection Root-Cause Tracking",
    "Multi-protocol Edge Gateway Integration (OPC-UA, Modbus, MQTT, Profinet)",
    "Parent-Child Assembly Genealogy & Serial Barcode Label Printing",
    "Predictive Energy Management (EMS) & Peak Load Optimization"
  ],
};

/* =========================================================
   WHO WE ARE
========================================================= */

export const aboutIntro = {
  eyebrow: "Who We Are",
  title: "Making Industrial Automation",
  highlight: "Powerful Yet Simple",
  paragraphs: [
    "At Aplos Logix Pvt. Ltd., we believe that the most transformative industrial technology is technology that operates transparently and reliably in the background.",
    "We build non-intrusive IIoT, DigiQA, EMS, QMS, traceability, and production intelligence platforms that give plant leaders 24/7 visibility into Availability, Performance, and Quality.",
    "We bridge hardware engineering with cloud analytics — combining PLC integration, edge computing, high-frequency sampling, and modern web applications into unified smart factory ecosystems."
  ],
  coreValues: {
    heading: "Our Core Principles",
    description: "Built upon four foundational pillars engineered specifically for Indian and global manufacturing environments.",
    items: [
      {
        icon: Lightbulb,
        title: "Innovation First",
        description: "Cutting-edge edge gateways and IIoT microservices driving real operational transformation."
      },
      {
        icon: LockKeyhole,
        title: "Security by Design",
        description: "Local LAN isolation, SSL encryption, role-based access, and audit trail security."
      },
      {
        icon: Zap,
        title: "Lightning Fast Data Stream",
        description: "1 KHz high-frequency sensor sampling and sub-second ANDON notification alerts."
      },
      {
        icon: Scale,
        title: "Enterprise Scalable",
        description: "Seamlessly scale from a single assembly station to multi-plant enterprise networks."
      }
    ]
  }
};

/* =========================================================
   MISSION & VISION SECTIONS
========================================================= */

export const missionSection = {
  eyebrow: "Our Core Mission",
  title: "Transforming Shop Floors Through",
  highlight: "Real-Time IIoT Automation",
  description:
    "Our mission is to eliminate paper logbooks, hidden machine downtime, and manual quality bottlenecks by connecting every asset, station, and operator to an intelligent data layer.",
  points: [
    "Plug-and-play PLC, SCADA & sensor gateway integration",
    "Automate electrical safety, performance & EOL test panels",
    "Deliver instant WhatsApp & ANDON siren escalation alerts",
    "Enforce 100% component and serial number traceability",
    "Eliminate manual Excel reporting overhead and human entry error",
    "Enable data-driven, ROI-focused manufacturing decisions"
  ]
};

export const visionSection = {
  eyebrow: "Our Strategic Vision",
  title: "Empowering 1,000+ Factories with",
  highlight: "Industry 4.0 Ecosystems",
  description:
    "By 2030, Aplos Logix aims to be the undisputed leader in enterprise Industrial IoT and shop floor MES solutions across Asia and global manufacturing corridors."
};

/* =========================================================
   PHILOSOPHY
========================================================= */

export const philosophy = {
  quote:
    "We don't just write software — we build connected industrial ecosystems that make complex manufacturing operations beautifully simple and completely transparent.",
  author: "Aplos Logix Leadership Team"
};

/* =========================================================
   CORE VALUES LIST
========================================================= */

export const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Developing custom edge adapters and AI microservices that convert raw PLC registers into actionable shop floor metrics."
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description: "Air-gapped local LAN options, encrypted MQTT telemetry, and enterprise role permissions protecting your IP."
  },
  {
    icon: Zap,
    title: "Real-Time Speed",
    description: "Sub-second ANDON notifications, live TV gauge displays, and instant serial number test retrieval."
  },
  {
    icon: Scale,
    title: "Infinite Scale",
    description: "Modular microservices architecture growing effortlessly from one station to multi-plant networks."
  }
];

/* =========================================================
   BUSINESS IMPACT STATS (Animated Counter Compatible)
========================================================= */

export const impactStats = [
  {
    numericEnd: 200,
    suffix: "+",
    label: "Factory Deployments",
    sublabel: "Across Discrete & Process Mfg"
  },
  {
    numericEnd: 50,
    suffix: "K+",
    label: "Connected Sensors & PLCs",
    sublabel: "Siemens, Fanuc, ABB & Omron"
  },
  {
    numericEnd: 99.8,
    suffix: "%",
    label: "System Uptime SLA",
    sublabel: "24/7 Live Monitoring"
  },
  {
    numericEnd: 35,
    suffix: "%",
    label: "Average Downtime Reduction",
    sublabel: "Within 90 Days of Launch"
  }
];

/* =========================================================
   IIOT EXCELLENCE
========================================================= */

export const iiotExcellence = {
  eyebrow: "The IIoT Continuum",
  title: "From Raw Field Signals to",
  highlight: "Enterprise ROI",
  description:
    "Our unified IIoT platform spans field connectivity, edge compute analytics, automated ANDON alerts, and enterprise ERP integration.",
  stages: [
    {
      icon: Database,
      number: "01",
      title: "Connect & Ingest",
      description: "Non-intrusive OPC-UA, Modbus & RS485 edge connectivity capturing high-frequency cycle times, voltages & PMC data.",
      items: ["PLC/SCADA Adapters", "1 KHz Sensor Sampling", "Multi-Brand Hardware Support"]
    },
    {
      icon: BrainCircuit,
      number: "02",
      title: "Process & Analyze",
      description: "Edge and cloud algorithms calculating real-time Availability, Performance, Quality, Downtime Pareto & EMS demand.",
      items: ["Live OEE Engine", "Defect Pareto Root-Cause", "Energy & CO2 Tracking"]
    },
    {
      icon: Rocket,
      number: "03",
      title: "Automate & Scale",
      description: "Instant WhatsApp ANDON alerts, automated rating label printing, mobile work orders, and bi-directional SAP REST APIs.",
      items: ["WhatsApp/SMS Alerts", "Rating Label Printing", "SAP/ERP Integration"]
    }
  ]
};

/* =========================================================
   VISION 2030
========================================================= */

export const vision2030 = {
  eyebrow: "Strategic Vision 2030",
  title: "Pioneering the Next Era of",
  highlight: "Zero-Defect Manufacturing",
  description:
    "Our roadmap focuses on AI predictive maintenance, autonomous ANDON routing, and carbon footprint reduction for green smart factories.",
  statement:
    "By bridging legacy plant hardware with cloud AI analytics, Aplos Logix empowers manufacturers to achieve world-class OEE and 100% serial product quality.",
  metrics: [
    { value: "100%", label: "Serial Traceability" },
    { value: "<50ms", label: "Edge Signal Latency" },
    { value: "35%", label: "Downtime Reduction" }
  ]
};

/* =========================================================
   TECHNOLOGY EXCELLENCE
========================================================= */

export const technologyExcellence = {
  eyebrow: "Our Tech Architecture",
  title: "Engineered for High-Frequency",
  highlight: "Industrial Reliability",
  description:
    "Built on resilient edge-computing frameworks, secure encrypted data buses, and modular microservices.",
  items: [
    {
      icon: Cpu,
      title: "Edge Gateway Computing",
      description: "Non-intrusive edge nodes processing sensor data locally with store-and-forward memory."
    },
    {
      icon: Network,
      title: "Multi-Protocol Hardware Bus",
      description: "Native support for OPC-UA, Modbus TCP/RTU, Profinet, Profibus, EtherCAT & CANbus."
    },
    {
      icon: Cloud,
      title: "Real-Time Cloud & LAN Sync",
      description: "Sub-second streaming to local plant servers or secure cloud dashboards over TLS 1.3."
    },
    {
      icon: Workflow,
      title: "ERP & MES REST APIs",
      description: "Bi-directional REST API connectors for SAP, Oracle, Tally, and custom shop floor systems."
    }
  ]
};

/* =========================================================
   FUTURE SECTION
========================================================= */

export const futureSection = {
  title: "Ready to Build Your Smart Connected Factory?",
  description:
    "Partner with Aplos Logix to boost your OEE, eliminate manual paperwork, and experience complete shop floor visibility."
};