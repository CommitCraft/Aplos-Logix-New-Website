import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  FileCheck,
  FileSpreadsheet,
  Filter,
  Gauge,
  Grid,
  Info,
  Layers,
  ListFilter,
  Lock,
  Monitor,
  Pause,
  Play,
  Printer,
  QrCode,
  Radio,
  RefreshCw,
  RotateCw,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Table,
  TrendingUp,
  Workflow,
  X,
  XCircle,
  Zap,
} from "lucide-react";

import { testAutomationData } from "../../content/testAutomationData";

/* =========================================================
   SIMULATOR TEST PROFILES
========================================================= */
const SIMULATOR_MODES = [
  {
    id: "hv",
    name: "HV Withstand",
    targetVoltage: 4850,
    unitV: "V AC",
    targetCurrent: 0.14,
    unitI: "mA",
    limit: "< 2.0 mA",
    waveformColor: "#06b6d4",
    sampleRate: "100 kHz",
  },
  {
    id: "earth",
    name: "Earth Bond",
    targetVoltage: 12,
    unitV: "V AC",
    targetCurrent: 25.0,
    unitI: "A",
    targetRes: 0.038,
    unitR: "Ω",
    limit: "< 0.100 Ω",
    waveformColor: "#10b981",
    sampleRate: "50 kHz",
  },
  {
    id: "insulation",
    name: "Insulation Res",
    targetVoltage: 1000,
    unitV: "V DC",
    targetRes: 850,
    unitR: "MΩ",
    limit: "> 100 MΩ",
    waveformColor: "#3b82f6",
    sampleRate: "20 kHz",
  },
  {
    id: "leakage",
    name: "Leakage Current",
    targetVoltage: 230,
    unitV: "V AC",
    targetCurrent: 0.08,
    unitI: "mA",
    limit: "< 0.50 mA",
    waveformColor: "#f59e0b",
    sampleRate: "10 kHz",
  },
];

export default function TestAutomationSection() {
  const {
    eyebrow,
    title,
    description,
    benefits,
    panelVisual,
    categories,
    tests,
    possibilities,
    process,
    cta,
  } = testAutomationData;

  /* ---------------------------------------------------------
     Simulator State
  --------------------------------------------------------- */
  const [activeSimIndex, setActiveSimIndex] = useState(0);
  const [isSimRunning, setIsSimRunning] = useState(true);
  const [simStatus, setSimStatus] = useState("PASS"); // "TESTING", "PASS", "FAIL"
  const [simLog, setSimLog] = useState([
    { id: "SN-98401", test: "HV Withstand", val: "4.85 kV", res: "PASS", time: "10:24:12" },
    { id: "SN-98402", test: "Earth Bond", val: "0.038 Ω", res: "PASS", time: "10:24:15" },
    { id: "SN-98403", test: "Insulation Res", val: "850 MΩ", res: "PASS", time: "10:24:18" },
  ]);
  const [simValJitter, setSimValJitter] = useState(0);
  const [waveformPhase, setWaveformPhase] = useState(0);

  /* ---------------------------------------------------------
     Comprehensive Coverage State (Category, Search, View Mode, Inspection Modal)
  --------------------------------------------------------- */
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "table"
  const [inspectTest, setInspectTest] = useState(null); // Active modal test item
  const [sliderVal, setSliderVal] = useState(0);

  /* ---------------------------------------------------------
     Endless Possibilities Feature Playground State
  --------------------------------------------------------- */
  const [activeFeatureWidget, setActiveFeatureWidget] = useState("whatsapp-alerts");
  const [waMessages, setWaMessages] = useState([
    {
      id: 1,
      sender: "IIoT Bot",
      time: "10:15 AM",
      text: "⚠️ CRITICAL ALERT: Test Bench #02 reported 3 consecutive HV Withstand failures on Model #AP-900.",
      type: "alert",
    },
    {
      id: 2,
      sender: "IIoT Bot",
      time: "10:15 AM",
      text: "📊 Batch Summary: 142 units passed | 3 failed (97.9% Yield). Auto BIS PDF attached.",
      type: "info",
    },
  ]);
  const [printedSn, setPrintedSn] = useState("SN-2026-98405");
  const [isPrinting, setIsPrinting] = useState(false);

  /* Process pipeline state */
  const [activeStep, setActiveStep] = useState(1);

  const activeMode = SIMULATOR_MODES[activeSimIndex];

  /* Live simulation loop */
  useEffect(() => {
    if (!isSimRunning) return;

    const interval = setInterval(() => {
      setSimValJitter((Math.random() - 0.5) * 0.06);
      setWaveformPhase((p) => (p + 0.15) % (Math.PI * 2));
    }, 120);

    return () => clearInterval(interval);
  }, [isSimRunning]);

  /* Cycle test modes automatically in simulator */
  useEffect(() => {
    if (!isSimRunning) return;

    const timer = setInterval(() => {
      const nextIdx = (activeSimIndex + 1) % SIMULATOR_MODES.length;
      setActiveSimIndex(nextIdx);

      const timeStr = new Date().toLocaleTimeString("en-US", { hour12: false });
      const randomSn = `SN-${Math.floor(90000 + Math.random() * 9999)}`;
      const mode = SIMULATOR_MODES[nextIdx];
      const valStr =
        mode.id === "hv"
          ? `${(4.8 + Math.random() * 0.1).toFixed(2)} kV`
          : mode.id === "earth"
          ? `${(0.03 + Math.random() * 0.015).toFixed(3)} Ω`
          : mode.id === "insulation"
          ? `${Math.floor(800 + Math.random() * 120)} MΩ`
          : `${(0.07 + Math.random() * 0.02).toFixed(2)} mA`;

      setSimLog((prev) => [
        { id: randomSn, test: mode.name, val: valStr, res: "PASS", time: timeStr },
        ...prev.slice(0, 4),
      ]);
    }, 4500);

    return () => clearInterval(timer);
  }, [isSimRunning, activeSimIndex]);

  /* Trigger Test WhatsApp Notification */
  const triggerWhatsAppAlert = () => {
    const timeStr = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    const randomNum = Math.floor(98410 + Math.random() * 800);
    const newMsg = {
      id: Date.now(),
      sender: "IIoT Bot",
      time: timeStr,
      text: `⚡ LIVE ALERT: Unit #SN-${randomNum} PASS GATED. HV: 4.85kV • Earth: 0.038Ω • BIS PDF generated.`,
      type: "success",
    };
    setWaMessages((prev) => [newMsg, ...prev.slice(0, 3)]);
  };

  /* Trigger Thermal Label Print */
  const triggerPrintLabel = () => {
    setIsPrinting(true);
    setTimeout(() => {
      const nextNum = Math.floor(98410 + Math.random() * 500);
      setPrintedSn(`SN-2026-${nextNum}`);
      setIsPrinting(false);
    }, 800);
  };

  /* Filter category & search tests */
  const filteredTests = tests.filter((t) => {
    const matchesCat = activeCategory === "all" || t.category === activeCategory;
    const matchesQuery =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.standard.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  /* Calculate dynamic readings based on jitter */
  const liveVoltage = Math.round(
    activeMode.targetVoltage * (1 + simValJitter * 0.05)
  );
  const liveCurrent = activeMode.targetCurrent
    ? (activeMode.targetCurrent * (1 + simValJitter * 0.04)).toFixed(2)
    : null;
  const liveRes = activeMode.targetRes
    ? (activeMode.targetRes * (1 + simValJitter * 0.03)).toFixed(3)
    : null;

  /* Generate SVG Sine Wave Points */
  const generateWaveformPath = () => {
    const points = [];
    const width = 240;
    const height = 60;
    const centerY = height / 2;

    for (let x = 0; x <= width; x += 4) {
      const freq = activeMode.id === "hv" ? 0.05 : 0.03;
      const amp = simStatus === "FAIL" ? 24 : 18;
      const y =
        centerY +
        Math.sin(x * freq + waveformPhase) * amp +
        (Math.random() - 0.5) * 2;
      points.push(`${x},${y.toFixed(1)}`);
    }
    return `M ${points.join(" L ")}`;
  };

  /* Open Inspection Modal */
  const openInspector = (test) => {
    setInspectTest(test);
    setSliderVal(test.defaultVal);
  };

  const activeWidgetObject = possibilities.find((p) => p.id === activeFeatureWidget) || possibilities[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/50 py-24 text-slate-900 soft-grid">
      
      {/* Background ambient lighting accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            § 1 — SECTION HEADER & EYEBROW
        ===================================================== */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-blue-700 shadow-sm">
            <Cpu size={14} className="animate-spin-slow text-blue-600" />
            {eyebrow} • Smart Test Rig
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#04264c] sm:text-5xl lg:text-6xl leading-[1.08]">
            Automated Industrial Safety &amp; <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Performance Test Intelligence
            </span>
          </h2>

          <p className="mt-4 mx-auto max-w-3xl text-base text-slate-600 sm:text-lg leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* =====================================================
            § 2 — BENEFITS HIGHLIGHT GRID (LIGHT THEME CARDS)
        ===================================================== */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-extrabold text-blue-700 border border-blue-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-extrabold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-blue-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                  Active Feature
                </div>
              </article>
            );
          })}
        </div>


        {/* =====================================================
            § 3 — INTERACTIVE LIVE IIOT TEST SIMULATOR BENCH
        ===================================================== */}
        <div className="mt-16 rounded-3xl border-2 border-blue-200 bg-white p-6 md:p-10 shadow-2xl shadow-blue-900/10 relative overflow-hidden">
          
          {/* Simulator Top Bar */}
          <div className="relative z-10 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  IIoT Rig Status: Live &amp; Telemetry Active
                </span>
              </div>
              <h3 className="mt-1 text-2xl font-black text-[#04264c] sm:text-3xl">
                {panelVisual.title}
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Interactive demonstration of real-time parameter sampling and instant pass/fail gating.
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsSimRunning(!isSimRunning)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold transition-all duration-200 ${
                  isSimRunning
                    ? "bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
                    : "bg-emerald-600 text-white font-black hover:bg-emerald-500 shadow-lg shadow-emerald-600/20"
                }`}
              >
                {isSimRunning ? (
                  <>
                    <Pause size={14} /> Pause Simulator
                  </>
                ) : (
                  <>
                    <Play size={14} /> Resume Simulation
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setSimStatus(simStatus === "PASS" ? "FAIL" : "PASS");
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-xs font-extrabold transition-all ${
                  simStatus === "PASS"
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                    : "border-rose-300 bg-rose-50 text-rose-800 hover:bg-rose-100"
                }`}
              >
                <RefreshCw size={13} className={isSimRunning ? "animate-spin" : ""} />
                Signal: {simStatus}
              </button>
            </div>
          </div>

          {/* Test Profile Selector Tabs */}
          <div className="relative z-10 mt-6 flex flex-wrap gap-2">
            {SIMULATOR_MODES.map((mode, idx) => {
              const isActive = activeSimIndex === idx;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveSimIndex(idx)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-600"
                      : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:text-slate-950"
                  }`}
                >
                  <Zap size={14} className={isActive ? "text-white" : "text-blue-600"} />
                  {mode.name}
                </button>
              );
            })}
          </div>

          {/* Main Simulator Display Grid */}
          <div className="relative z-10 mt-6 grid gap-6 lg:grid-cols-12">
            
            {/* LEFT: Live Meters & Oscilloscope (Dark Telemetry Pod for Maximum Readability) */}
            <div className="lg:col-span-8 flex flex-col gap-6 rounded-2xl border border-slate-900 bg-[#021329] p-6 text-white shadow-xl">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-400/30">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white">
                      {activeMode.name} Routine
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Sampling Rate: <span className="font-bold text-cyan-300">{activeMode.sampleRate}</span> • Limit: <span className="font-bold text-emerald-400">{activeMode.limit}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${
                    simStatus === "PASS"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                      : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                  }`}>
                    {simStatus === "PASS" ? (
                      <>
                        <CheckCircle2 size={14} /> PASS GATED
                      </>
                    ) : (
                      <>
                        <XCircle size={14} /> FAULT DETECTED
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Dynamic Live Numerical Gauges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                
                {/* Voltage Readout */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 relative overflow-hidden">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Test Voltage</p>
                  <p className="mt-1 text-3xl font-black text-cyan-300 font-mono">
                    {liveVoltage} <span className="text-xs font-normal text-slate-400">{activeMode.unitV}</span>
                  </p>
                  <div className="mt-2 h-1 w-full rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-cyan-400 transition-all duration-300"
                      style={{ width: `${Math.min(100, (liveVoltage / 5000) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Current / Resistance Readout */}
                {activeMode.targetCurrent && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 relative overflow-hidden">
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Measured Current</p>
                    <p className="mt-1 text-3xl font-black text-emerald-400 font-mono">
                      {liveCurrent} <span className="text-xs font-normal text-slate-400">{activeMode.unitI}</span>
                    </p>
                    <div className="mt-2 h-1 w-full rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                        style={{ width: "35%" }}
                      />
                    </div>
                  </div>
                )}

                {activeMode.targetRes && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 relative overflow-hidden">
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Measured Resistance</p>
                    <p className="mt-1 text-3xl font-black text-amber-400 font-mono">
                      {liveRes} <span className="text-xs font-normal text-slate-400">{activeMode.unitR}</span>
                    </p>
                    <div className="mt-2 h-1 w-full rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-amber-400 transition-all duration-300"
                        style={{ width: "65%" }}
                      />
                    </div>
                  </div>
                )}

                {/* Cycle Duration Readout */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 relative overflow-hidden col-span-2 sm:col-span-1">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Cycle Time</p>
                  <p className="mt-1 text-3xl font-black text-white font-mono">
                    0.15 <span className="text-xs font-normal text-slate-400">sec</span>
                  </p>
                  <p className="mt-1 text-[10px] font-semibold text-emerald-400">
                    ⚡ Auto-Gated
                  </p>
                </div>
              </div>

              {/* Real-time Oscilloscope SVG Display */}
              <div className="rounded-xl border border-white/10 bg-slate-900/90 p-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    Live Waveform Telemetry — {activeMode.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    CH-1: 500V/div • 10ms/div
                  </span>
                </div>

                <div className="relative h-24 w-full bg-slate-950 rounded-lg overflow-hidden border border-white/5 flex items-center">
                  <svg className="absolute inset-0 h-full w-full" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                    <line x1="0" y1="25%" x2="100%" y2="25%" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" />
                    <line x1="0" y1="75%" x2="100%" y2="75%" />
                    <line x1="25%" y1="0" x2="25%" y2="100%" />
                    <line x1="50%" y1="0" x2="50%" y2="100%" />
                    <line x1="75%" y1="0" x2="75%" y2="100%" />
                  </svg>

                  <svg className="relative h-full w-full overflow-visible" viewBox="0 0 240 60" preserveAspectRatio="none">
                    <path
                      d={generateWaveformPath()}
                      fill="none"
                      stroke={simStatus === "FAIL" ? "#f43f5e" : activeMode.waveformColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-full bg-cyan-500/20 px-2 py-0.5 text-[9px] font-bold text-cyan-300 border border-cyan-500/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    LIVE SENSORS
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Live Audit Log Ticker Pod */}
            <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#041d38] p-6 text-white shadow-xl">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h4 className="text-sm font-black text-white flex items-center gap-2">
                    <Database size={16} className="text-cyan-400" />
                    Digital Audit Stream
                  </h4>
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
                    Cloud Synced
                  </span>
                </div>

                <div className="mt-4 space-y-2.5">
                  {simLog.map((log, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl border border-white/8 bg-white/5 p-3 text-xs transition duration-300 hover:bg-white/10"
                    >
                      <div>
                        <p className="font-mono font-bold text-white">{log.id}</p>
                        <p className="text-[10px] text-slate-300">{log.test} • {log.val}</p>
                      </div>

                      <div className="text-right">
                        <span className="inline-block rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-black text-emerald-400 border border-emerald-500/30">
                          {log.res}
                        </span>
                        <p className="mt-0.5 text-[9px] font-mono text-slate-400">{log.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-3 text-[11px] text-cyan-200">
                <p className="font-bold flex items-center gap-1.5 text-cyan-300">
                  <ShieldCheck size={14} /> 100% BIS &amp; ISO Compliant
                </p>
                <p className="mt-1 text-slate-300 leading-tight">
                  Auto-generates PDF certificates immediately upon batch test completion.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* =====================================================
            § 4 — COMPREHENSIVE COVERAGE (LIGHT THEME)
        ===================================================== */}
        <div className="mt-24" id="comprehensive-coverage">
          
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <Layers size={13} /> Comprehensive Coverage
              </span>
              <h3 className="mt-3 text-3xl font-black text-[#04264c] sm:text-4xl">
                Testing Capabilities &amp; Specifications
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Complete electrical safety, mechanical, and operational test routines integrated into a connected IIoT architecture. Click any item to simulate parameters!
              </p>
            </div>

            {/* View Mode Switcher & Search Bar */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Search input */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search test or standard..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-xl border border-slate-300 bg-white pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>

              {/* View Switcher Toggle */}
              <div className="flex items-center rounded-xl border border-slate-300 bg-white p-1 shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                  title="Grid View"
                >
                  <Grid size={14} /> Grid Cards
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    viewMode === "table"
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                  title="Technical Specs Matrix View"
                >
                  <Table size={14} /> Specs Matrix
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
            {categories.map((cat) => {
              const count =
                cat.id === "all"
                  ? tests.length
                  : tests.filter((t) => t.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-600"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    activeCategory === cat.id ? "bg-white text-blue-900 font-black" : "bg-slate-100 text-slate-600"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* VIEW MODE 1: VISUAL CARDS GRID (LIGHT THEME) */}
          {viewMode === "grid" && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredTests.map((test) => {
                const Icon = test.icon;
                return (
                  <article
                    key={test.id}
                    onClick={() => openInspector(test)}
                    className="group cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white">
                          <Icon size={20} />
                        </div>
                        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-extrabold text-blue-700 border border-blue-200">
                          {test.status}
                        </span>
                      </div>

                      <h4 className="mt-4 text-base font-black text-slate-950 group-hover:text-blue-600 transition">
                        {test.title}
                      </h4>

                      <p className="mt-1.5 text-xs leading-5 text-slate-600">
                        {test.description}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-slate-100 pt-3">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-mono font-bold text-blue-700">
                          {test.specs}
                        </p>
                        <SlidersHorizontal size={13} className="text-slate-400 group-hover:text-blue-600 transition" />
                      </div>

                      {/* Mini Sparkline Preview */}
                      <div className="mt-2 h-5 w-full">
                        <svg viewBox="0 0 100 20" className="h-full w-full opacity-70 group-hover:opacity-100 transition">
                          <polyline
                            points={test.spark.map((v, i) => `${i * 14},${20 - (v / test.defaultVal) * 10}`).join(" ")}
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                        <span>Standard: <span className="text-slate-800 font-semibold">{test.standard}</span></span>
                        <span className="text-blue-600 font-bold group-hover:underline">Simulate →</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* VIEW MODE 2: TECHNICAL SPECS MATRIX TABLE (LIGHT THEME) */}
          {viewMode === "table" && (
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-[11px] uppercase tracking-wider text-slate-800 border-b border-slate-200">
                  <tr>
                    <th className="px-5 py-4 font-black">Test Routine</th>
                    <th className="px-5 py-4 font-black">Operating Specification</th>
                    <th className="px-5 py-4 font-black">Compliance Standard</th>
                    <th className="px-5 py-4 font-black">Hardware Channel</th>
                    <th className="px-5 py-4 font-black">Cycle Time</th>
                    <th className="px-5 py-4 font-black">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredTests.map((test) => {
                    const Icon = test.icon;
                    return (
                      <tr
                        key={test.id}
                        onClick={() => openInspector(test)}
                        className="cursor-pointer hover:bg-blue-50/50 transition"
                      >
                        <td className="px-5 py-4 font-extrabold text-slate-950 flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                            <Icon size={16} />
                          </div>
                          <span>{test.title}</span>
                        </td>
                        <td className="px-5 py-4 font-mono text-blue-700 font-bold">
                          {test.specs}
                        </td>
                        <td className="px-5 py-4 text-slate-700 font-medium">
                          {test.standard}
                        </td>
                        <td className="px-5 py-4 font-mono text-xs text-amber-700">
                          {test.relayChannel}
                        </td>
                        <td className="px-5 py-4 font-mono text-slate-500">
                          {test.duration}
                        </td>
                        <td className="px-5 py-4">
                          <button className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-800">
                            Inspect <SlidersHorizontal size={12} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>


        {/* =====================================================
            INTERACTIVE TEST INSPECTION MODAL / DRAWER (LIGHT THEME)
        ===================================================== */}
        {inspectTest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
            <div className="relative w-full max-w-2xl rounded-3xl border border-slate-300 bg-white p-6 md:p-8 shadow-2xl text-slate-900">
              
              {/* Close Button */}
              <button
                onClick={() => setInspectTest(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-950"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-200">
                  <inspectTest.icon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-black uppercase text-blue-700 border border-blue-200">
                      {inspectTest.standard}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-700">
                      {inspectTest.relayChannel}
                    </span>
                  </div>
                  <h3 className="mt-1 text-2xl font-black text-slate-950">
                    {inspectTest.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    {inspectTest.description}
                  </p>
                </div>
              </div>

              {/* Interactive Parameter Slider Simulation */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                    <SlidersHorizontal size={14} /> Interactive Sensor Slider
                  </label>
                  <span className="text-xs font-mono font-bold text-slate-900">
                    Live Value: <span className="text-blue-700 text-base">{sliderVal} {inspectTest.unit}</span>
                  </span>
                </div>

                <input
                  type="range"
                  min={inspectTest.minLimit}
                  max={inspectTest.maxLimit}
                  step={inspectTest.unit === "Ω" || inspectTest.unit === "mA" ? 0.01 : 10}
                  value={sliderVal}
                  onChange={(e) => setSliderVal(parseFloat(e.target.value))}
                  className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
                />

                <div className="mt-2 flex justify-between text-[10px] font-mono text-slate-500">
                  <span>Min: {inspectTest.minLimit} {inspectTest.unit}</span>
                  <span>Max: {inspectTest.maxLimit} {inspectTest.unit}</span>
                </div>

                {/* Dynamic Pass / Fail Gating Result */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500">Pass Gating Condition</p>
                    <p className="text-xs font-mono text-blue-900 font-bold">Specification: {inspectTest.specs}</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-800 border border-emerald-300">
                    <CheckCircle2 size={15} /> PASS GATED
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  ⚡ Auto-logged to cloud with timestamp &amp; QR label
                </span>
                <button
                  onClick={() => setInspectTest(null)}
                  className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Done Testing
                </button>
              </div>
            </div>
          </div>
        )}


        {/* =====================================================
            § 5 — CONNECTED PROCESS PIPELINE (LIGHT THEME)
        ===================================================== */}
        <div className="mt-24 rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
          
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-blue-700">
              End-to-End Workflow
            </span>
            <h3 className="mt-2 text-3xl font-black text-[#04264c] sm:text-4xl">
              From Testing to Production Intelligence
            </h3>
            <p className="mt-2 mx-auto max-w-2xl text-sm text-slate-600">
              Click any step to inspect the automated data acquisition and validation sequence.
            </p>
          </div>

          {/* Interactive Pipeline Steps Header */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === parseInt(step.number);

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(parseInt(step.number))}
                  className={`cursor-pointer group relative rounded-2xl border p-4 transition-all duration-300 ${
                    isActive
                      ? "border-blue-600 bg-blue-50 shadow-md ring-1 ring-blue-600"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-black font-mono ${isActive ? "text-blue-700" : "text-slate-400"}`}>
                      STEP {step.number}
                    </span>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}>
                      <Icon size={16} />
                    </div>
                  </div>

                  <h4 className="mt-3 text-sm font-black text-slate-950">
                    {step.title}
                  </h4>

                  <p className="mt-1 text-[11px] font-semibold text-blue-700">
                    {step.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Panel */}
          {process[activeStep - 1] && (
            <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-950 via-[#04264c] to-blue-900 p-6 md:p-8 text-white shadow-xl animate-fade-in-up">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-cyan-300 border border-white/15">
                    <Sparkles size={12} /> Active Routine Detail — Step {process[activeStep - 1].number}
                  </span>
                  <h4 className="mt-3 text-2xl font-black text-white">
                    {process[activeStep - 1].title} — {process[activeStep - 1].subtitle}
                  </h4>
                  <p className="mt-2 text-sm text-blue-100 leading-relaxed font-medium">
                    {process[activeStep - 1].description}
                  </p>
                  <p className="mt-3 text-xs text-cyan-200 border-l-2 border-cyan-400 pl-3 py-0.5">
                    {process[activeStep - 1].detail}
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-xs font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                  >
                    Request Rig Demo <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>


        {/* =====================================================
            § 6 — ENDLESS POSSIBILITIES & INTERACTIVE PLAYGROUND (LIGHT THEME)
        ===================================================== */}
        <div className="mt-24" id="endless-possibilities">
          
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <Sparkles size={13} /> Value Addition &amp; Integration
            </span>
            <h3 className="mt-3 text-3xl font-black text-[#04264c] sm:text-4xl">
              Endless Possibilities Beyond Testing
            </h3>
            <p className="mt-2 mx-auto max-w-2xl text-sm text-slate-600">
              Extend test automation into barcode label printing, WhatsApp alert triggers, ANDON displays, and defect pareto analytics. Select any feature to test the live simulator!
            </p>
          </div>

          {/* Feature Grid Selector Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {possibilities.map((item) => {
              const Icon = item.icon;
              const isActive = activeFeatureWidget === item.id;

              return (
                <article
                  key={item.id}
                  onClick={() => setActiveFeatureWidget(item.id)}
                  className={`group cursor-pointer relative flex flex-col justify-between rounded-2xl border p-5 backdrop-blur-sm transition-all duration-300 ${
                    isActive
                      ? "border-blue-600 bg-blue-50/80 shadow-md ring-1 ring-blue-600"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                        isActive ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white"
                      }`}>
                        <Icon size={20} />
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${
                        isActive ? "bg-blue-600 text-white font-black" : "bg-blue-50 text-blue-700 border border-blue-200"
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="mt-4 text-sm font-black text-slate-950">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-xs leading-5 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-blue-700">
                    {isActive ? "Viewing Simulator ↓" : "Interactive Demo →"}
                  </div>
                </article>
              );
            })}
          </div>

          {/* ===================================================
              LIVE INTERACTIVE FEATURE PLAYGROUND WIDGET SUITE (LIGHT THEME)
          =================================================== */}
          <div className="mt-8 rounded-3xl border-2 border-blue-200 bg-white p-6 md:p-8 shadow-2xl relative overflow-hidden text-slate-900">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-ping" />
                <h4 className="text-base font-black text-[#04264c] flex items-center gap-2">
                  Interactive Simulator — {activeWidgetObject.title}
                </h4>
              </div>
              <span className="text-xs font-mono text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-bold">
                {activeWidgetObject.badge} Enabled
              </span>
            </div>

            {/* WIDGET 1: WHATSAPP ALERT SIMULATOR */}
            {activeFeatureWidget === "whatsapp-alerts" && (
              <div className="mt-6 grid gap-6 md:grid-cols-12 items-center">
                <div className="md:col-span-6 space-y-3">
                  <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                    💬 Real-time WhatsApp Dispatch
                  </span>
                  <h4 className="text-2xl font-black text-slate-950">
                    Instant Failure &amp; Shift Notifications
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    When 3 consecutive test failures or a major safety breakdown occurs, the IIoT test bench automatically dispatches structured WhatsApp notifications to quality supervisors.
                  </p>
                  
                  <button
                    onClick={triggerWhatsAppAlert}
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-xs font-black text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
                  >
                    <Send size={14} /> Send Test WhatsApp Message
                  </button>
                </div>

                {/* Simulated Phone Chat Screen */}
                <div className="md:col-span-6 rounded-2xl border border-slate-800 bg-slate-950 p-4 shadow-xl text-white">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-black text-xs">
                        WA
                      </div>
                      <span className="text-xs font-bold text-white">Aplos IIoT Quality Bot</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold">● Online</span>
                  </div>

                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {waMessages.map((msg) => (
                      <div key={msg.id} className="rounded-xl bg-emerald-950/40 border border-emerald-500/20 p-3 text-xs text-slate-200">
                        <div className="flex justify-between text-[10px] text-emerald-400 font-bold mb-1">
                          <span>{msg.sender}</span>
                          <span>{msg.time}</span>
                        </div>
                        <p>{msg.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WIDGET 2: RATING PLATE & BARCODE PRINTER SIMULATOR */}
            {(activeFeatureWidget === "label-print" || activeFeatureWidget === "mrp-label") && (
              <div className="mt-6 grid gap-6 md:grid-cols-12 items-center">
                <div className="md:col-span-6 space-y-3">
                  <span className="text-xs font-black uppercase text-emerald-700 tracking-wider">
                    🏷️ Thermal Barcode &amp; QR Label Print
                  </span>
                  <h4 className="text-2xl font-black text-slate-950">
                    Automated Pass Label Printing
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Immediately upon successful pass gating, the test rig sends print signals to automated thermal printers to print product rating plates, MRP labels, and serial barcodes without operator delay.
                  </p>

                  <button
                    onClick={triggerPrintLabel}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
                  >
                    <Printer size={14} className={isPrinting ? "animate-bounce" : ""} />
                    {isPrinting ? "Printing Label..." : "Print Sample Thermal Label"}
                  </button>
                </div>

                {/* Simulated Label Box */}
                <div className="md:col-span-6 flex justify-center">
                  <div className="w-full max-w-sm rounded-2xl border-2 border-dashed border-blue-400 bg-white p-5 text-slate-950 shadow-2xl relative">
                    <div className="flex justify-between items-start border-b border-slate-300 pb-2">
                      <div>
                        <h5 className="font-black text-sm uppercase text-blue-950">APLOS LOGIX RIG</h5>
                        <p className="text-[10px] text-slate-600 font-bold">MODEL: AP-900 INDUSTRIAL MOTOR</p>
                      </div>
                      <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 border border-emerald-300">
                        PASS GATED
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div>VOLTS: <span className="font-bold">230V AC</span></div>
                      <div>FREQ: <span className="font-bold">50 Hz</span></div>
                      <div>HV TEST: <span className="font-bold text-emerald-700">4.85 kV PASS</span></div>
                      <div>GROUND: <span className="font-bold text-blue-700">0.038 Ω</span></div>
                    </div>

                    {/* Barcode & QR SVG Preview */}
                    <div className="mt-4 pt-2 border-t border-slate-300 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-mono font-bold text-slate-500">SERIAL NUMBER:</p>
                        <p className="text-xs font-mono font-black text-slate-950">{printedSn}</p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center bg-slate-950 text-white rounded">
                        <QrCode size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WIDGET 3: ANDON LIVE SHOP FLOOR TV */}
            {activeFeatureWidget === "andon-tv" && (
              <div className="mt-6 grid gap-6 md:grid-cols-12 items-center">
                <div className="md:col-span-6 space-y-3">
                  <span className="text-xs font-black uppercase text-blue-700 tracking-wider">
                    📺 Shop-Floor ANDON TV Stream
                  </span>
                  <h4 className="text-2xl font-black text-slate-950">
                    Live Production &amp; Yield Telemetry
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Broadcast real-time line throughput, target vs actual output, and first-pass yield percentages directly to overhead factory TV screens.
                  </p>
                </div>

                <div className="md:col-span-6 rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl text-white">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                    <span className="text-xs font-black text-cyan-300 uppercase">ANDON LINE #02 FEED</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-400/10 px-2.5 py-0.5 rounded-full">
                      ● RUNNING
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                      <p className="text-[10px] text-slate-400 font-bold">Target Output</p>
                      <p className="text-xl font-black text-white mt-1">500</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                      <p className="text-[10px] text-slate-400 font-bold">Actual Passed</p>
                      <p className="text-xl font-black text-emerald-400 mt-1">488</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                      <p className="text-[10px] text-slate-400 font-bold">Line Yield</p>
                      <p className="text-xl font-black text-cyan-300 mt-1">97.6%</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WIDGET 4: DEFECT PARETO ANALYSIS */}
            {activeFeatureWidget === "defect-pareto" && (
              <div className="mt-6 grid gap-6 md:grid-cols-12 items-center">
                <div className="md:col-span-6 space-y-3">
                  <span className="text-xs font-black uppercase text-rose-700 tracking-wider">
                    📊 Quality Rejection Analysis
                  </span>
                  <h4 className="text-2xl font-black text-slate-950">
                    Defect Pareto &amp; Root Cause Tracking
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Automatically categorize failure modes across high voltage breakdown, ground continuity faults, and insulation degradation for corrective action.
                  </p>
                </div>

                <div className="md:col-span-6 rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl text-white">
                  <p className="text-xs font-black text-rose-400 uppercase mb-3">Defect Distribution (Last Shift)</p>
                  <div className="space-y-3">
                    {[
                      { label: "High Voltage Breakdown", pct: 45, count: "9 units", color: "bg-rose-500" },
                      { label: "Insulation Resistance Low", pct: 30, count: "6 units", color: "bg-amber-500" },
                      { label: "Earth Bond Resistance High", pct: 15, count: "3 units", color: "bg-cyan-500" },
                      { label: "Leakage Current Exceeded", pct: 10, count: "2 units", color: "bg-blue-500" },
                    ].map((d) => (
                      <div key={d.label}>
                        <div className="flex justify-between text-[11px] font-bold text-white mb-1">
                          <span>{d.label}</span>
                          <span className="text-slate-400">{d.pct}% ({d.count})</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-800">
                          <div className={`h-full rounded-full ${d.color}`} style={{ width: `${d.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WIDGET 5: DEFAULT / CLOUD & MOBILE */}
            {(activeFeatureWidget === "mobile-dash" || activeFeatureWidget === "yield-trend" || activeFeatureWidget === "cloud-storage") && (
              <div className="mt-6 grid gap-6 md:grid-cols-12 items-center">
                <div className="md:col-span-6 space-y-3">
                  <span className="text-xs font-black uppercase text-blue-700 tracking-wider">
                    ☁️ Cloud &amp; Remote Intelligence
                  </span>
                  <h4 className="text-2xl font-black text-slate-950">
                    5-Year Archiving &amp; Mobile Web Access
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Every raw waveform, test value, operator ID, and serial timestamp is stored in encrypted cloud servers accessible via mobile devices anytime.
                  </p>
                </div>

                <div className="md:col-span-6 rounded-2xl border border-slate-200 bg-blue-50/50 p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-950">AES-256 Cloud Encrypted</p>
                      <p className="text-[10px] text-slate-600">Compliance Audit Ready • BIS Certificate Vault</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>


        {/* =====================================================
            § 7 — HIGH-IMPACT CALL TO ACTION BANNER (VIBRANT BLUE)
        ===================================================== */}
        <div className="mt-24 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 p-8 sm:p-12 text-white shadow-2xl">
          
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-100 backdrop-blur">
                Transform End-of-Line Quality
              </span>
              <h3 className="mt-3 text-3xl font-black sm:text-4xl leading-tight">
                {cta.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100">
                {cta.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={cta.primaryCTA.to}
                className="rounded-xl bg-white px-6 py-3.5 text-sm font-black text-blue-900 shadow-xl transition hover:bg-blue-50 hover:scale-105"
              >
                {cta.primaryCTA.label}
              </Link>

              <Link
                to={cta.secondaryCTA.to}
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                {cta.secondaryCTA.label} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}