import {
  Activity,
  BarChart3,
  BellRing,
  CheckCircle2,
  Cpu,
  Database,
  FileSpreadsheet,
  Gauge,
  Layers,
  Monitor,
  QrCode,
  Radio,
  RotateCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

export const testAutomationData = {
  /* =========================================================
     INTRO
  ========================================================= */
  eyebrow: "IIoT Test Automation",
  title: "Automatic Safety & Performance Test Panel",
  description:
    "An IIoT-enabled testing solution designed to automate electrical safety and performance testing, digitally log results, enforce pass/fail gates, and provide real-time production visibility.",

  /* =========================================================
     BENEFITS
  ========================================================= */
  benefits: [
    {
      title: "Fully Automated Testing",
      description: "Automate complete testing cycles with minimal operator intervention and sub-second pass/fail gating.",
      icon: Zap,
      badge: "100% Automated",
    },
    {
      title: "Zero Dependency on Skilled Labour",
      description: "Standardized automated workflows reduce human error, manual dependency, and operator variation.",
      icon: ShieldCheck,
      badge: "Standardized",
    },
    {
      title: "Digitally Logged Test Data",
      description: "Every measured parameter (V, I, R, Ω) is securely captured with serial timestamp traceability.",
      icon: Database,
      badge: "Full Audit Trail",
    },
    {
      title: "Automated BIS Reports & Alerts",
      description: "Generate BIS compliance reports automatically and broadcast instant WhatsApp failure alerts.",
      icon: BellRing,
      badge: "Instant Sync",
    },
    {
      title: "ANDON Live Dashboards",
      description: "Monitor testing status, line yield, OEE metrics, and defect pareto charts in real time.",
      icon: Monitor,
      badge: "Real-time Telemetry",
    },
  ],

  /* =========================================================
     PANEL VISUAL & SIMULATION DATA
  ========================================================= */
  panelVisual: {
    eyebrow: "IIoT Smart Test Bench Simulator",
    title: "Connected Testing Intelligence",
    description:
      "A centralized IIoT test rig controlling test sequencing, sensor signal acquisition, automated pass/fail validation, cloud telemetry, and real-time alerts.",

    metrics: [
      { value: "100%", label: "Digital Traceability" },
      { value: "0.15s", label: "Pass Gating Speed" },
      { value: "Auto", label: "BIS Compliance PDFs" },
    ],

    capabilities: [
      {
        title: "Automatic Test Sequence",
        description: "Run predefined electrical safety and load tests automatically with programmable voltage & current profiles.",
      },
      {
        title: "Real-Time Sensor Telemetry",
        description: "Capture high-frequency electrical measurements (V, A, W, PF, Hz, Ω) with continuous waveform analysis.",
      },
      {
        title: "Serial Number Gating",
        description: "Store serial numbers, model variants, measured values, operator ID, timestamp, and final pass/fail state.",
      },
      {
        title: "Automated BIS Reports",
        description: "Generate structured production, quality, and regulatory compliance reports automatically without manual entry.",
      },
      {
        title: "Remote ANDON Screens",
        description: "Cast live test bench yield, daily throughput, and line breakdown status to factory floor ANDON TVs.",
      },
      {
        title: "WhatsApp & Cloud Alerts",
        description: "Instantly alert quality engineers via WhatsApp and SMS when consecutive test failures occur.",
      },
    ],

    status: {
      label: "IIoT Test Rig Connected",
      flow: "Scan → Auto-Sequence → Measure → Validate → Log → Alert",
    },
  },

  /* =========================================================
     TESTING CAPABILITIES (CATEGORIZED WITH RICH PARAMETERS)
  ========================================================= */
  categories: [
    { id: "all", label: "All Tests" },
    { id: "safety", label: "Electrical Safety" },
    { id: "performance", label: "Performance & Load" },
    { id: "diagnostics", label: "Smart Diagnostics" },
  ],

  tests: [
    {
      id: "earth-contact",
      category: "safety",
      title: "Earth Contact Resistance",
      description: "Verifies grounding integrity by applying high test current up to 30A AC.",
      specs: "0.001 - 0.500 Ω • Up to 30A AC",
      standard: "IS 302-1 / IEC 60335",
      relayChannel: "CH-01 (K1 Relay Bank)",
      duration: "0.15 sec",
      minLimit: 0.001,
      maxLimit: 0.100,
      unit: "Ω",
      defaultVal: 0.038,
      spark: [30, 32, 35, 38, 36, 38, 37, 38],
      icon: Activity,
      status: "Verified Safe",
      highlightColor: "emerald",
    },
    {
      id: "hv-withstand",
      category: "safety",
      title: "High Voltage Withstand",
      description: "Dielectric strength test up to 5kV AC/DC with sub-millisecond trip shutdown.",
      specs: "0 - 5000V AC/DC • <0.1ms Trip",
      standard: "IS 302-1 / IEC 60601-1",
      relayChannel: "CH-02 (Solid State HV Switch)",
      duration: "0.50 sec",
      minLimit: 500,
      maxLimit: 5000,
      unit: "V",
      defaultVal: 4850,
      spark: [4200, 4400, 4600, 4800, 4850, 4850, 4840, 4850],
      icon: Zap,
      status: "Pass Gated",
      highlightColor: "cyan",
    },
    {
      id: "insulation-res",
      category: "safety",
      title: "Insulation Resistance",
      description: "Measures electrical isolation between live parts and chassis enclosure.",
      specs: "500V / 1000V DC • Up to 10 GΩ",
      standard: "IS 302-1 / IEEE 43",
      relayChannel: "CH-03 (High Res Isolation)",
      duration: "0.20 sec",
      minLimit: 100,
      maxLimit: 10000,
      unit: "MΩ",
      defaultVal: 850,
      spark: [750, 800, 820, 850, 850, 860, 840, 850],
      icon: ShieldCheck,
      status: "Auto Logged",
      highlightColor: "blue",
    },
    {
      id: "leakage-curr",
      category: "safety",
      title: "Leakage Current",
      description: "Monitors touch current and protective conductor leakage under nominal load.",
      specs: "0.01 - 20.0 mA • IEC 60601/60335",
      standard: "IEC 60335-1 Clause 13",
      relayChannel: "CH-04 (Precision CT Sensing)",
      duration: "0.30 sec",
      minLimit: 0.01,
      maxLimit: 0.50,
      unit: "mA",
      defaultVal: 0.08,
      spark: [0.05, 0.06, 0.07, 0.08, 0.08, 0.07, 0.08, 0.08],
      icon: Gauge,
      status: "Real-time Gated",
      highlightColor: "amber",
    },
    {
      id: "low-volts",
      category: "performance",
      title: "Low Voltage Start Test",
      description: "Verifies motor startup capabilities under brownout/low line voltage conditions.",
      specs: "160V - 180V AC • Soft Start",
      standard: "BEE Energy Rating / IS 996",
      relayChannel: "CH-05 (Variac Transformer)",
      duration: "1.20 sec",
      minLimit: 160,
      maxLimit: 250,
      unit: "V AC",
      defaultVal: 175,
      spark: [160, 165, 170, 175, 175, 174, 175, 175],
      icon: Activity,
      status: "Pass Verified",
      highlightColor: "violet",
    },
    {
      id: "perf-test",
      category: "performance",
      title: "Full Load Performance",
      description: "Evaluates active power (W), power factor (PF), current draw (A), and speed.",
      specs: "Voltage, Current, Watts, PF, Hz",
      standard: "IS 3725 / IEC 60034",
      relayChannel: "CH-06 (Power Analyzer Bus)",
      duration: "2.00 sec",
      minLimit: 100,
      maxLimit: 3500,
      unit: "Watts",
      defaultVal: 1250,
      spark: [1100, 1180, 1220, 1250, 1250, 1240, 1250, 1250],
      icon: TrendingUp,
      status: "Telemetry Active",
      highlightColor: "emerald",
    },
    {
      id: "vibration",
      category: "diagnostics",
      title: "Vibration & Acoustic Test",
      description: "FFT spectrum analysis for bearing fault detection and mechanical balance.",
      specs: "3-Axis Accelerometer • FFT Spectrum",
      standard: "ISO 10816-3 Severity",
      relayChannel: "CH-07 (Piezo 3-Axis DSP)",
      duration: "1.50 sec",
      minLimit: 0.1,
      maxLimit: 2.8,
      unit: "mm/s RMS",
      defaultVal: 0.85,
      spark: [0.6, 0.7, 0.8, 0.85, 0.85, 0.82, 0.86, 0.85],
      icon: Radio,
      status: "FFT Analyzed",
      highlightColor: "rose",
    },
    {
      id: "rpm-test",
      category: "diagnostics",
      title: "RPM & Strobe Analysis",
      description: "Optical non-contact laser tachometer for rotational speed accuracy.",
      specs: "100 - 30,000 RPM • ±0.1%",
      standard: "ISO 2954 Speed Calibration",
      relayChannel: "CH-08 (Laser Tachometer)",
      duration: "0.80 sec",
      minLimit: 500,
      maxLimit: 30000,
      unit: "RPM",
      defaultVal: 2880,
      spark: [2700, 2800, 2850, 2880, 2880, 2875, 2880, 2880],
      icon: RotateCw,
      status: "Laser Calibrated",
      highlightColor: "cyan",
    },
  ],

  /* =========================================================
     ENDLESS POSSIBILITIES (WITH INTERACTIVE WIDGET METADATA)
  ========================================================= */
  possibilities: [
    {
      id: "label-print",
      title: "Print Rating Plate Labels",
      description: "Automated thermal label printing with laser barcode/QR immediately upon test pass.",
      icon: FileSpreadsheet,
      badge: "Auto Print",
      widgetType: "label",
      accent: "emerald",
    },
    {
      id: "whatsapp-alerts",
      title: "Instant WhatsApp Alerts",
      description: "Automatic alerts to production managers when 3 consecutive test failures occur.",
      icon: BellRing,
      badge: "Instant Push",
      widgetType: "whatsapp",
      accent: "amber",
    },
    {
      id: "andon-tv",
      title: "ANDON Live TV Displays",
      description: "Broadcast live line output, test yield percentage, and top defect Pareto to shop floor.",
      icon: Monitor,
      badge: "Shop Floor TV",
      widgetType: "andon",
      accent: "cyan",
    },
    {
      id: "defect-pareto",
      title: "Defect Rejection Pareto",
      description: "Categorize failure types (e.g. HV breakdown, high leakage) for root cause analysis.",
      icon: BarChart3,
      badge: "Root Cause",
      widgetType: "pareto",
      accent: "rose",
    },
    {
      id: "mobile-dash",
      title: "Mobile Dashboard Access",
      description: "Real-time production monitoring & remote approval via smartphone or tablet web app.",
      icon: Smartphone,
      badge: "Cloud Sync",
      widgetType: "mobile",
      accent: "blue",
    },
    {
      id: "yield-trend",
      title: "Hourly Yield & Trend Charts",
      description: "Track testing efficiency across shifts, operators, and product models automatically.",
      icon: TrendingUp,
      badge: "Analytics",
      widgetType: "trend",
      accent: "violet",
    },
    {
      id: "mrp-label",
      title: "MRP & Serial Labels",
      description: "Generate compliant packaging labels tied directly to validated test records.",
      icon: FileSpreadsheet,
      badge: "Zero Typo",
      widgetType: "mrp",
      accent: "cyan",
    },
    {
      id: "cloud-storage",
      title: "5-Year Secure Cloud Storage",
      description: "Tamper-proof digital archiving of all raw test waveforms and compliance data.",
      icon: Database,
      badge: "Encrypted",
      widgetType: "cloud",
      accent: "emerald",
    },
  ],

  /* =========================================================
     PROCESS PIPELINE
  ========================================================= */
  process: [
    {
      number: "01",
      title: "Product Identification",
      subtitle: "Barcode / QR Scan",
      description: "Scan product barcode/QR code to automatically load model parameters and test limits.",
      detail: "Supports 1D Barcodes, 2D QR codes, and RFID tags to load custom test profiles instantaneously.",
      icon: QrCode,
    },
    {
      number: "02",
      title: "Automatic Test Sequence",
      subtitle: "Multi-Parameter Cycle",
      description: "Test bench automatically executes HV, Earth Bond, IR, and performance routines.",
      detail: "Precise relay switching and programmable solid-state sources apply exact test voltages.",
      icon: Workflow,
    },
    {
      number: "03",
      title: "Result Validation",
      subtitle: "Sub-Second Pass/Fail",
      description: "Measured electrical parameters are validated against upper and lower threshold limits.",
      detail: "Hardware interlocks physical gates — defective items cannot proceed to packaging.",
      icon: CheckCircle2,
    },
    {
      number: "04",
      title: "Digital Data Logging",
      subtitle: "Cloud Audit Trail",
      description: "Test results saved with serial number, model, measured values, timestamp & operator ID.",
      detail: "Creates an immutable digital birth certificate for every unit produced.",
      icon: Database,
    },
    {
      number: "05",
      title: "Reporting & Alerts",
      subtitle: "BIS PDFs & WhatsApp",
      description: "Automatic BIS report compilation and real-time WhatsApp alert dispatch on line failure.",
      detail: "Pushes real-time line yield to executive ANDON dashboards and mobile notifications.",
      icon: BellRing,
    },
  ],

  /* =========================================================
     CTA
  ========================================================= */
  cta: {
    title: "Automate Your End-of-Line Testing Today",
    description:
      "Eliminate manual testing bottlenecks, ensure 100% BIS compliance, and achieve full digital traceability with Aplos Logix IIoT test rigs.",
    primaryCTA: {
      label: "Request Live Demo",
      to: "/contact",
    },
    secondaryCTA: {
      label: "Explore IIoT Solutions",
      to: "/solutions",
    },
  },
};