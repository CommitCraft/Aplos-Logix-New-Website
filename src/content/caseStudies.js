import {
  Activity,
  BarChart3,
  ClipboardCheck,
  FileSpreadsheet,
  Gauge,
  Network,
  QrCode,
  RadioTower,
  Search,
  ShieldCheck,
  TimerReset,
  Workflow,
} from "lucide-react";

export const caseStudiesHero = {
  eyebrow: "Factory Solution Stories",
  title: "From Shop-Floor Challenge to Connected Operation",
  description:
    "Explore practical manufacturing solution patterns across digital quality, test automation, live production data, serial traceability and reporting. Each story shows the problem, connected workflow and operational outcome.",
};

export const caseStudies = [
  {
    tag: "Case Study 01",
    title: "White Goods Manufacturing — Digital End-of-Line Quality & Test Traceability",
    summary:
      "A connected end-of-line quality workflow that links product identity, model-specific limits, safety and performance tests, PASS/FAIL decisions, alerts and daily reporting.",
    challenge:
      "Test results were spread across stations and files, making serial-wise history difficult to retrieve and increasing manual effort for daily quality reporting.",
    solution:
      "DigiQA connected serial scanning, model master rules, tester and panel data capture, limit validation, result storage, serial search and automated report generation.",
    industry: "White Goods & Home Appliances",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1400&q=90",
    modules: ["DigiQA", "Serial Search", "Safety Test Panel", "Automated Reports", "ANDON", "Traceability"],
    outcomes: [
      "One searchable quality history for every product serial number",
      "Consistent test validation against model-specific limits",
      "Automated shift and daily quality reporting",
      "Live rejection and station-status visibility for faster response",
    ],
    flow: ["Scan Serial", "Load Test Plan", "Run Tests", "Validate Limits", "Save History", "Report & Alert"],
  },
  {
    tag: "Case Study 02",
    title: "Rotating Component Production — Balancing, Runout & Reliability Data Intelligence",
    summary:
      "A unified data layer for balancing, runout and reliability records so production and quality teams can follow one part across process stages and review results from a single interface.",
    challenge:
      "Balancing, runout and reliability information existed in separate machine tables and manual records, slowing serial-level investigation and consolidated reporting.",
    solution:
      "Aplos Logix centralized machine data, test outcomes and reliability records, added search and filters, standardized PASS/FAIL logic and enabled dashboard and report views.",
    industry: "Automotive / Rotating Components",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=90",
    modules: ["Live Data", "Balancing Data", "Runout", "Reliability Lab", "Serial Search", "Daily Reports"],
    outcomes: [
      "Consolidated process and reliability history around the part identity",
      "Faster investigation of abnormal balancing and runout results",
      "Consistent dashboard views with search, filters and export",
      "Reduced dependence on manually combining records from multiple sources",
    ],
    flow: ["Scan Part", "Capture Machine Data", "Validate Result", "Add Reliability Record", "Search History", "Export Report"],
  },
  {
    tag: "Case Study 03",
    title: "Regulatory QR & Label Operations — Controlled Batch Printing and Traceable Export",
    summary:
      "A structured XML-to-print workflow for QR batch ingestion, duplicate prevention, active-batch control, recoverable print queues and status-based export.",
    challenge:
      "Large QR batches required safe upload, queue control, duplicate protection, print-state recovery and final export without losing the original batch relationships.",
    solution:
      "The workflow parses XML batches, stores QR records, validates duplicates, prints only from active batches, manages PENDING/PRINTING/PRINTED states and exports filtered records back into the required XML structure.",
    industry: "Regulated Product Labelling",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=90",
    modules: ["XML Batch Ingestion", "QR Mapping", "Print Queue", "Duplicate Control", "Status Recovery", "XML Export"],
    outcomes: [
      "Controlled printing from approved active batches",
      "Duplicate prevention across queued and printed QR records",
      "Clear batch, status and printed-count visibility",
      "Traceable filtered export for downstream compliance workflows",
    ],
    flow: ["Upload XML", "Parse Batch", "Validate Duplicate", "Queue", "Print", "Export XML"],
  },
];

export const caseStudyProcess = [
  { step: "01", title: "Understand", text: "Map the process, current data sources, controls, reports and operational pain points." },
  { step: "02", title: "Connect", text: "Integrate machines, panels, scanners, databases and existing shop-floor workflows." },
  { step: "03", title: "Digitize", text: "Create structured master data, validations, serial history, dashboards and reports." },
  { step: "04", title: "Improve", text: "Use live data, downtime, rejection and test trends to support continuous improvement." },
];

export const deliveredSolutions = [
  { icon: ClipboardCheck, title: "DigiQA / QMS", text: "Digital quality workflows and controlled records" },
  { icon: Gauge, title: "OEE", text: "Availability, performance and quality visibility" },
  { icon: TimerReset, title: "Downtime", text: "Reason capture, loss trends and response visibility" },
  { icon: FileSpreadsheet, title: "Daily Reports", text: "Automated shift and daily insight delivery" },
  { icon: QrCode, title: "Serial Mapping", text: "Unit and component traceability across process stages" },
  { icon: RadioTower, title: "Live Data", text: "Real-time machine, tester and process visibility" },
  { icon: BarChart3, title: "Analytics", text: "Trends, comparisons and operational decisions" },
  { icon: Workflow, title: "Automation", text: "Queue, alert, validation and reporting workflows" },
  { icon: Search, title: "Fast Search", text: "Serial-wise product and test history retrieval" },
  { icon: ShieldCheck, title: "Controlled Access", text: "Role-based screens and secure operational actions" },
  { icon: Network, title: "Integration", text: "Machine, database and API connectivity" },
  { icon: Activity, title: "Monitoring", text: "Status, alarms and KPI visibility" },
];
