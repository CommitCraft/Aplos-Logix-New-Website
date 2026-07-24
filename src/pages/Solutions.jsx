import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Factory,
  Layers,
  LineChart,
  ShieldCheck,
  Sliders,
  Sparkles,
  Zap,
  TrendingUp,
  TrendingDown,
  Wrench,
  BarChart3,
  CalendarCheck,
  Gauge,
  Check,
  Workflow
} from "lucide-react";

import Container from "../components/common/Container";
import CTASection from "../components/common/CTASection";
import DashboardMockup from "../components/common/DashboardMockup";
import {
  solutionsHero,
  whatWhyHowData,
  pipelineSteps,
  architectureStages,
  manufacturingTypes,
  solutionCards,
  essentialCapabilities,
  powerfulModules,
  productionTests,
  solutionBenefits,
  supportedBrands,
  supportedProtocols,
  holisticModules,
  operationalOutcomes
} from "../content/solutions";

import iiotBannerImg from "../assets/image/iiot_banner.webp";
import iiotBannerOv1 from "../assets/image/iiot_banner_ov1.svg";
import iiotBannerOv2 from "../assets/image/iiot_banner_ov2.svg";
import iiotBannerOv3 from "../assets/image/iiot_banner_ov3.svg";

import discreteIllustration from "../assets/image/discrete_illustration.svg";
import processIllustration from "../assets/image/process_illustration.svg";
import iiotLaptopImg from "../assets/image/iiot_laptop.webp";
import overlayConnect from "../assets/image/overlay_connect.svg";
import overlayCollect from "../assets/image/overlay_collect.svg";
import overlayCurate from "../assets/image/overlay_curate.svg";

import modMachine from "../assets/image/mod_machine.webp";
import modLine from "../assets/image/mod_line.webp";
import modOee from "../assets/image/mod_oee.webp";
import modShift from "../assets/image/mod_shift.webp";
import modMaint from "../assets/image/mod_maint.webp";
import modQuality from "../assets/image/mod_quality.webp";
import modInventory from "../assets/image/mod_inventory.webp";
import modEnergy from "../assets/image/mod_energy.webp";
import modUtilities from "../assets/image/mod_utilities.webp";
import modSafety from "../assets/image/mod_safety.webp";

import procPhoto1 from "../assets/image/proc_photo_1.svg";
import procPhoto2 from "../assets/image/proc_photo_2.svg";
import procPhoto3 from "../assets/image/proc_photo_3.svg";
import procPhoto4 from "../assets/image/proc_photo_4.svg";
import procPhoto5 from "../assets/image/proc_photo_5.svg";
import procPhoto6 from "../assets/image/proc_photo_6.svg";

const PROC_PHOTOS = {
  procPhoto1,
  procPhoto2,
  procPhoto3,
  procPhoto4,
  procPhoto5,
  procPhoto6
};

const MODULE_IMAGES = {
  modMachine,
  modLine,
  modOee,
  modShift,
  modMaint,
  modQuality,
  modInventory,
  modEnergy,
  modUtilities,
  modSafety
};

const CARD_THEMES = {
  "Energy": { border: "border-emerald-200/80 hover:border-emerald-400 hover:shadow-emerald-500/10", bg: "bg-gradient-to-br from-emerald-50/40 via-white to-white", iconBg: "bg-emerald-100 text-emerald-700", badge: "bg-emerald-100 text-emerald-800 border-emerald-200", link: "text-emerald-700" },
  "Quality": { border: "border-violet-200/80 hover:border-violet-400 hover:shadow-violet-500/10", bg: "bg-gradient-to-br from-violet-50/40 via-white to-white", iconBg: "bg-violet-100 text-violet-700", badge: "bg-violet-100 text-violet-800 border-violet-200", link: "text-violet-700" },
  "OEE & Losses": { border: "border-orange-200/80 hover:border-orange-400 hover:shadow-orange-500/10", bg: "bg-gradient-to-br from-orange-50/40 via-white to-white", iconBg: "bg-orange-100 text-orange-700", badge: "bg-orange-100 text-orange-800 border-orange-200", link: "text-orange-700" },
  "Downtime": { border: "border-rose-200/80 hover:border-rose-400 hover:shadow-rose-500/10", bg: "bg-gradient-to-br from-rose-50/40 via-white to-white", iconBg: "bg-rose-100 text-rose-700", badge: "bg-rose-100 text-rose-800 border-rose-200", link: "text-rose-700" },
  "Traceability": { border: "border-sky-200/80 hover:border-sky-400 hover:shadow-sky-500/10", bg: "bg-gradient-to-br from-sky-50/40 via-white to-white", iconBg: "bg-sky-100 text-sky-700", badge: "bg-sky-100 text-sky-800 border-sky-200", link: "text-sky-700" },
  "Reporting": { border: "border-indigo-200/80 hover:border-indigo-400 hover:shadow-indigo-500/10", bg: "bg-gradient-to-br from-indigo-50/40 via-white to-white", iconBg: "bg-indigo-100 text-indigo-700", badge: "bg-indigo-100 text-indigo-800 border-indigo-200", link: "text-indigo-700" },
  "Live Streams": { border: "border-teal-200/80 hover:border-teal-400 hover:shadow-teal-500/10", bg: "bg-gradient-to-br from-teal-50/40 via-white to-white", iconBg: "bg-teal-100 text-teal-700", badge: "bg-teal-100 text-teal-800 border-teal-200", link: "text-teal-700" },
  "Alerts": { border: "border-amber-200/80 hover:border-amber-400 hover:shadow-amber-500/10", bg: "bg-gradient-to-br from-amber-50/40 via-white to-white", iconBg: "bg-amber-100 text-amber-700", badge: "bg-amber-100 text-amber-800 border-amber-200", link: "text-amber-700" },
  "Testing": { border: "border-blue-200/80 hover:border-blue-400 hover:shadow-blue-500/10", bg: "bg-gradient-to-br from-blue-50/40 via-white to-white", iconBg: "bg-blue-100 text-blue-700", badge: "bg-blue-100 text-blue-800 border-blue-200", link: "text-blue-700" },
};

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("what");
  const [activeModuleId, setActiveModuleId] = useState("machinemonitoring");
  const [activeStageId, setActiveStageId] = useState("collect");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const currentFaq = whatWhyHowData[activeTab];
  const activeModule = holisticModules.find((m) => m.id === activeModuleId) || holisticModules[0];
  const activeStage = architectureStages.find((s) => s.id === activeStageId) || architectureStages[0];

  const filteredCards = selectedCategory === "all"
    ? solutionCards
    : solutionCards.filter((c) => c.category === selectedCategory);

  return (
    <main className="overflow-hidden bg-slate-50">
      {/* ══════════════════════════════════════
          § 1 — HERO SECTION (Aplos Logix IIoT Inspired)
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#04264c] aplos-grid py-20 text-white lg:py-24">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

        <Container className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-400">
              <Sparkles size={13} /> {solutionsHero.eyebrow}
            </span>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Manufacturing Analytics &amp;{" "}
              <span className="text-orange-400">Shop Floor Automation</span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-blue-100/80 md:text-lg">
              {solutionsHero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 hover:shadow-orange-500/40"
              >
                Request IIoT Demo <ChevronRight size={16} />
              </Link>
              <a
                href="#solutions-grid"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Explore Modules
              </a>
            </div>

            {/* Quick stats strip */}
            <div className="mt-4 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-black text-white">200+</p>
                <p className="text-xs text-blue-200">Plant Deployments</p>
              </div>
              <div>
                <p className="text-2xl font-black text-orange-400">50K+</p>
                <p className="text-xs text-blue-200">Connected Sensors</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-400">99.8%</p>
                <p className="text-xs text-blue-200">System Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Column: Aplos Logix IIoT Inspired Banner Image Composition */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#031d3b]/80 p-3 sm:p-5 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-orange-400/40">
              <picture>
                <source type="image/webp" srcSet={iiotBannerImg} />
                <img
                  src={iiotBannerImg}
                  width="608"
                  height="513"
                  alt="Manufacturing analytics and factory automation for industries"
                  className="w-full h-auto rounded-2xl object-cover shadow-inner"
                  fetchPriority="high"
                />
              </picture>
            </div>

            {/* Overlay 1: Top-Left Analytics Badge */}
            <div className="absolute -top-6 -left-4 sm:-left-8 w-44 sm:w-56 drop-shadow-2xl animate-float">
              <img
                src={iiotBannerOv1}
                width="234"
                alt="Factory Analytics Overlay"
                className="w-full h-auto"
              />
            </div>

            {/* Overlay 2: Bottom-Right Downtime/OEE Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 w-40 sm:w-52 drop-shadow-2xl animate-float delay-200">
              <img
                src={iiotBannerOv2}
                width="204"
                alt="Real-time Downtime & OEE Overlay"
                className="w-full h-auto"
              />
            </div>

            {/* Overlay 3: Mid-Right Machine Status Badge */}
            <div className="absolute top-1/2 -right-4 sm:-right-10 -translate-y-1/2 hidden md:block w-36 sm:w-48 drop-shadow-2xl animate-float delay-400">
              <img
                src={iiotBannerOv3}
                width="204"
                alt="Connected Machines Status Overlay"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 2 — WHAT / WHY / HOW TABBED SECTION (Aplos Logix Style)
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-700">
              Understanding IIoT
            </span>
            <h2 className="mt-4 text-3xl font-black text-blue-950 sm:text-4xl">
              Smart Factory Intelligence Decoded
            </h2>
          </div>

          {/* Tabs header */}
          <div className="mt-10 flex justify-center border-b border-slate-200">
            <div className="flex gap-4 sm:gap-8">
              {[
                { id: "what", label: "What is IIoT?" },
                { id: "why", label: "Why Do You Need It?" },
                { id: "how", label: "How Do You Start?" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 text-base font-bold transition-all relative ${activeTab === tab.id
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-slate-500 hover:text-slate-900"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content panel */}
          {currentFaq && (
            <div className="mt-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/50 via-white to-slate-50 p-8 shadow-xl shadow-blue-950/5 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
                    {currentFaq.subtitle}
                  </span>
                  <h3 className="mt-2 text-2xl font-black text-blue-950 sm:text-3xl">
                    {currentFaq.title}
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {currentFaq.text}
                  </p>
                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                    >
                      Talk to an IIoT Expert <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="space-y-3">
                  {currentFaq.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold ring-1 ring-emerald-500/20">
                        <CheckCircle2 size={18} />
                      </div>
                      <p className="text-sm font-semibold text-slate-800 pt-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 3 — THE ARCHITECTURE (Interactive 4-Stage IIoT Pipeline)
      ══════════════════════════════════════ */}
      <section className="py-20 bg-slate-900 text-white aplos-grid overflow-hidden">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-400">
              The IIoT Architecture
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl text-white">
              From Edge Data Signals to Enterprise Action
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              Explore how raw PLC and sensor signals are captured at the edge, transmitted securely, analyzed for OEE, and converted into automated actions.
            </p>
          </div>

          {/* Interactive Stage Selector Bar */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-12">
            {architectureStages.map((stage) => {
              const Icon = stage.icon;
              const isActive = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex flex-col items-center gap-2 rounded-2xl p-4 text-center border transition-all duration-300 ${isActive
                    ? "border-orange-400 bg-gradient-to-b from-orange-500/20 to-white/10 shadow-xl ring-2 ring-orange-400/40"
                    : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20"
                    }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isActive ? "bg-orange-500 text-white" : "bg-white/10 text-orange-400"}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-orange-400 block">{stage.step}</span>
                    <span className="text-xs font-black text-white">{stage.tag}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Showcase */}
          {activeStage && (
            <div className="grid gap-10 rounded-3xl border border-white/15 bg-gradient-to-br from-[#031d3b]/95 via-[#04264c]/90 to-blue-950/95 p-8 backdrop-blur-2xl lg:grid-cols-2 lg:items-center lg:p-12">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="inline-block rounded-full bg-orange-400/20 border border-orange-400/40 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-orange-400">
                    {activeStage.step} • {activeStage.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {activeStage.title}
                </h3>
                <p className="mt-3 text-sm text-blue-100/90 leading-relaxed font-medium">
                  {activeStage.subtitle}
                </p>

                {/* 4 Feature Items */}
                <div className="mt-8 space-y-3.5">
                  {activeStage.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur transition hover:bg-white/12 hover:border-orange-400/30"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-400/20 text-orange-400 mt-0.5">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {feat.title}
                        </h4>
                        <p className="mt-1 text-xs text-blue-200/80 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Technical SVG Diagram Frame with High Visibility Container */}
              <div className="relative space-y-4">
                {/* Stage 3 Live Metrics Bar */}
                {activeStage.id === "analyze" && (
                  <div className="grid grid-cols-3 gap-2 mb-2 rounded-2xl bg-white/10 p-3 border border-orange-400/30 backdrop-blur">
                    <div className="text-center">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-orange-300">Live OEE</p>
                      <p className="text-base font-black text-white">89.4%</p>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-300">Availability</p>
                      <p className="text-base font-black text-white">94.8%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-blue-300">Energy (EMS)</p>
                      <p className="text-base font-black text-white">142 kWh</p>
                    </div>
                  </div>
                )}

                <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200/90 bg-white p-5 shadow-2xl transition duration-300">
                  <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                      Industrial IoT &amp; Telemetry Architecture
                    </span>
                    <span className="rounded-full bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 text-[9px] font-bold text-emerald-800">
                      Active High-Frequency Pipeline
                    </span>
                  </div>

                  <div className="space-y-4 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                    <img
                      src={PROC_PHOTOS[activeStage.img1] || procPhoto1}
                      alt="Architecture Technical Process Diagram 1"
                      className="w-full h-auto rounded-lg filter drop-shadow-sm object-contain"
                    />
                    <img
                      src={PROC_PHOTOS[activeStage.img2] || procPhoto2}
                      alt="Architecture Technical Process Diagram 2"
                      className="w-full h-auto rounded-lg filter drop-shadow-sm object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom 4-Column Summary Flow Bar */}
          <div className="mt-14 pt-10 border-t border-white/10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pipelineSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-orange-400">{step.name}</span>
                    <h4 className="text-xs font-bold text-white truncate">{step.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 4 — INTELLIGENT SHOP FLOOR AUTOMATION (Discrete vs Process Mfg)
      ══════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Industry Multi-Verticals
            </span>
            <h2 className="mt-4 text-3xl font-black text-blue-950 sm:text-4xl">
              Intelligent Shop Floor Automation
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Industry 4.0 is just a click away. Whether you want to monitor one machine or automate your entire factory, we've got you covered. Explore Aplos Logix's expansive multi-vertical IIoT solutions now.
            </p>
          </div>

          {/* Dual Category Cards: Discrete vs Process Manufacturing */}
          <div className="grid gap-8 lg:grid-cols-2 relative z-10">
            {/* Discrete Manufacturing Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 p-7 sm:p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400" />
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-blue-100/90 border border-blue-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-blue-700">
                      Assembly &amp; Serial Production
                    </span>
                    <h3 className="text-2xl font-black text-blue-950 mt-2.5">Discrete Manufacturing</h3>
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-2 gap-2.5 text-xs font-bold text-slate-800">
                  {(manufacturingTypes.discrete.sectors || manufacturingTypes.discrete.applications || []).map((item) => (
                    <li key={item} className="flex items-center gap-2 rounded-2xl bg-white/90 p-3 border border-blue-100/80 shadow-xs hover:border-blue-300 hover:bg-blue-50/30 transition">
                      <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner SVG Illustration */}
              <div className="mt-6 flex justify-end pointer-events-none opacity-95 transition duration-300 group-hover:scale-105">
                <img src={discreteIllustration} width="320" height="230" alt="Discrete Manufacturing Illustration" className="max-w-full h-auto" />
              </div>
            </div>

            {/* Process Manufacturing Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-orange-100 bg-gradient-to-br from-orange-50/70 via-white to-slate-50 p-7 sm:p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-orange-400 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400" />
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-orange-100/90 border border-orange-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-orange-700">
                      Continuous &amp; Batch Processing
                    </span>
                    <h3 className="text-2xl font-black text-blue-950 mt-2.5">Process Manufacturing</h3>
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-2 gap-2.5 text-xs font-bold text-slate-800">
                  {(manufacturingTypes.process.applications || manufacturingTypes.process.sectors || []).map((item) => (
                    <li key={item} className="flex items-center gap-2 rounded-2xl bg-white/90 p-3 border border-orange-100/80 shadow-xs hover:border-orange-300 hover:bg-orange-50/30 transition">
                      <span className="h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner SVG Illustration */}
              <div className="mt-6 flex justify-end pointer-events-none opacity-95 transition duration-300 group-hover:scale-105">
                <img src={processIllustration} width="320" height="230" alt="Process Manufacturing Illustration" className="max-w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Animated Connecting SVG Line */}
          <div className="hidden lg:block relative -my-6 h-28 w-full max-w-4xl mx-auto pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 732.5 293" preserveAspectRatio="xMidYMid meet">
              <path className="stroke-blue-400/40" strokeWidth="3" fill="none" strokeDasharray="6 6" d="M1.91-0.2c0,0-10.23,154.13,184.92,150.39c151.44-2.9,175.37,84.24,178.51,123.61 c0.06,0.76-0.01,8.82,0.05,9.85" />
              <path className="stroke-orange-400/40" strokeWidth="3" fill="none" strokeDasharray="6 6" d="M729.22-0.2c0,0,10.23,154.13-184.92,150.39S365.74,293.12,365.74,293.12" />

              <circle cx="0" cy="0" r="7" fill="#2563eb" filter="drop-shadow(0 0 6px #3b82f6)">
                <animateMotion dur="4s" repeatCount="indefinite" path="M1.91-0.2c0,0-10.23,154.13,184.92,150.39c151.44-2.9,175.37,84.24,178.51,123.61 c0.06,0.76-0.01,8.82,0.05,9.85" />
              </circle>
              <circle cx="0" cy="0" r="7" fill="#f97316" filter="drop-shadow(0 0 6px #f97316)">
                <animateMotion dur="4s" repeatCount="indefinite" begin="1s" path="M729.22-0.2c0,0,10.23,154.13-184.92,150.39S365.74,293.12,365.74,293.12" />
              </circle>
            </svg>
          </div>

          {/* Central Laptop Showcase with Floating Overlays */}
          <div className="mt-8 relative max-w-5xl mx-auto">
            <div className="relative mx-auto max-w-4xl text-center">
              <picture>
                <source type="image/webp" srcSet={iiotLaptopImg} />
                <img
                  src={iiotLaptopImg}
                  width="1280"
                  height="461"
                  alt="Intelligent factory automation crafted for your shop floor"
                  className="w-full h-auto mx-auto drop-shadow-2xl"
                />
              </picture>

              <div className="absolute top-1/4 -left-4 sm:left-4 w-44 sm:w-64 drop-shadow-2xl animate-float">
                <img src={overlayConnect} width="280" alt="Connect Overlay" className="w-full h-auto" />
              </div>

              <div className="absolute top-1/2 -right-4 sm:right-4 -translate-y-1/2 w-44 sm:w-64 drop-shadow-2xl animate-float delay-200">
                <img src={overlayCollect} width="280" alt="Collect Overlay" className="w-full h-auto" />
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-72 drop-shadow-2xl animate-float delay-400">
                <img src={overlayCurate} width="300" alt="Curate Overlay" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 5 — HOLISTIC SHOP-FLOOR MASTERY MODULE SWITCHER (Single Destination)
      ══════════════════════════════════════ */}
      <section className="py-20 bg-slate-900 text-white aplos-grid overflow-hidden">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-400">
              Single Destination
            </span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Single Destination for Shop-Floor Automation Mastery
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              A holistic portfolio of 10 interconnected factory intelligence modules designed to monitor, analyze, and optimize every machine, line, and operational workflow.
            </p>
          </div>

          {/* Module Switcher Buttons Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {holisticModules.map((module) => {
              const Icon = module.icon;
              const isActive = activeModuleId === module.id;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModuleId(module.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-extrabold transition-all duration-200 ${isActive
                    ? "bg-orange-500 text-white shadow-xl shadow-orange-500/35 ring-2 ring-orange-400 scale-105"
                    : "border border-white/15 bg-white/5 text-slate-300 hover:bg-white/12 hover:text-white"
                    }`}
                >
                  <Icon size={14} />
                  {module.tag}
                </button>
              );
            })}
          </div>

          {/* Active Module Details Showcase */}
          {activeModule && (
            <div className="grid gap-10 rounded-3xl border border-white/15 bg-gradient-to-br from-[#04264c]/90 via-[#031d3b]/95 to-[#021329] p-7 sm:p-10 shadow-2xl backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block rounded-full bg-orange-500/20 border border-orange-400/40 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-orange-400">
                    {activeModule.tag}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE MODULE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {activeModule.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-blue-100/90 leading-relaxed">
                  {activeModule.subheading}
                </p>

                {/* 6 Feature Point Cards */}
                <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
                  {activeModule.points.map((pt, i) => (
                    <div
                      key={i}
                      className="group/pt flex flex-col justify-between rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur transition duration-200 hover:border-orange-400/40 hover:bg-white/10"
                    >
                      <p className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-400 shrink-0 group-hover/pt:scale-125 transition" />
                        {pt.name}
                      </p>
                      <p className="mt-1.5 text-[11px] sm:text-xs text-blue-200/80 leading-relaxed font-normal">
                        {pt.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Screenshot Showcase */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-blue-950 p-2 shadow-2xl transition duration-500 hover:border-orange-400/30">
                  <picture>
                    <source type="image/webp" srcSet={MODULE_IMAGES[activeModule.imageKey] || modMachine} />
                    <img
                      src={MODULE_IMAGES[activeModule.imageKey] || modMachine}
                      width="647"
                      height="430"
                      alt={activeModule.title}
                      className="w-full h-auto rounded-xl object-cover shadow-inner"
                    />
                  </picture>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-blue-950/90 border border-white/20 px-3 py-1 text-[10px] font-bold text-blue-200 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Real-Time Dashboard
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 6 — CORE SOLUTION MODULES GRID & 10 ESSENTIAL CAPABILITIES
      ══════════════════════════════════════ */}
      <section id="solutions-grid" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <Container>
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-700">
              Connected Modules
            </span>
            <h2 className="mt-4 text-3xl font-black text-blue-950 sm:text-4xl">
              One Connected Solution Portfolio
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Plug-and-play IIoT software applications that connect directly to physical shop floor machines to automate production, quality, and energy reporting.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                { id: "all", label: "All Modules (9)" },
                { id: "oee", label: "OEE & Downtime" },
                { id: "quality", label: "Quality & DigiQA" },
                { id: "energy", label: "Energy & Telemetry" }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${selectedCategory === cat.id
                    ? "bg-blue-950 text-white shadow-md ring-2 ring-blue-700"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCards.map((card) => {
              const Icon = card.icon;
              const theme = CARD_THEMES[card.badge] || {
                border: "border-slate-200/80 hover:border-blue-400",
                bg: "bg-white",
                iconBg: "bg-blue-50 text-blue-700",
                badge: "bg-slate-100 text-slate-700 border-slate-200",
                link: "text-blue-700"
              };

              return (
                <div
                  key={card.title}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 ${theme.border} ${theme.bg} p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.iconBg} shadow-xs transition duration-300 group-hover:scale-105`}>
                        <Icon size={22} />
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide ${theme.badge}`}>
                          {card.badge}
                        </span>
                        {card.status && (
                          <span className="text-[9px] font-bold text-emerald-600 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {card.status}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-blue-950">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.text}
                    </p>

                    {/* 3 Feature Bullets */}
                    {card.features && (
                      <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                        {card.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black ${theme.link}`}>
                    <span>Explore Module Details</span>
                    <ArrowRight size={14} className="transition group-hover:translate-x-1.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* 10 Essential Capabilities & Cause & Effect Showcase */}
          <div className="mt-20 rounded-3xl border border-white/15 bg-gradient-to-br from-[#031d3b] via-[#04264c] to-[#021329] p-7 sm:p-10 text-white shadow-2xl backdrop-blur-2xl">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-orange-400">
                Determine Cause &amp; Effect
              </span>
              <h3 className="mt-3 text-2xl font-black sm:text-4xl text-white leading-tight">
                Holistic Cause &amp; Effect Intelligence Powered by 10 Essential Capabilities
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                Directly connect physical machine signals to root-cause diagnosis, automated ANDON escalation, and zero downtime.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              {/* Left Column: 10 Essential Capabilities Grid */}
              <div className="grid gap-3.5 sm:grid-cols-2">
                {essentialCapabilities.map((cap, i) => {
                  const Icon = cap.icon || Cpu;
                  return (
                    <div
                      key={cap.name}
                      className="group/cap flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition duration-300 hover:border-orange-400/50 hover:bg-white/10 hover:shadow-lg"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400 group-hover/cap:scale-110 transition">
                            <Icon size={18} />
                          </div>
                          <span className="text-[10px] font-black text-orange-400/60 group-hover/cap:text-orange-400 transition">
                            0{i + 1}
                          </span>
                        </div>
                        <h4 className="text-sm font-black text-white">{cap.name}</h4>
                        <p className="mt-1.5 text-[11px] text-blue-200/80 leading-relaxed font-normal">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Live Cause & Effect Event Simulation Flowchart */}
              <div className="relative rounded-3xl border border-white/15 bg-[#021329] p-6 shadow-2xl">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-orange-400 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                    Live Cause &amp; Effect Simulation
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                    Auto Resolution Loop
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Step 1: CAUSE */}
                  <div className="rounded-2xl border border-rose-500/40 bg-rose-950/30 p-4 relative">
                    <span className="text-[9px] font-black uppercase tracking-widest text-rose-400 block mb-1">
                      1. PHYSICAL MACHINE CAUSE
                    </span>
                    <h5 className="text-xs font-bold text-white flex items-center justify-between">
                      <span>Machine #04 Motor Vibration Peak</span>
                      <span className="text-rose-400 font-mono text-[10px]">&gt;85°C Temp Spike</span>
                    </h5>
                    <p className="mt-1 text-[11px] text-slate-300">
                      1 KHz sensor streams abnormal vibration harmonics directly to edge node.
                    </p>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="h-6 w-0.5 bg-gradient-to-b from-rose-500 to-amber-500" />
                  </div>

                  {/* Step 2: DIAGNOSIS */}
                  <div className="rounded-2xl border border-amber-500/40 bg-amber-950/30 p-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-amber-400 block mb-1">
                      2. AUTOMATED EDGE DIAGNOSIS
                    </span>
                    <h5 className="text-xs font-bold text-white flex items-center justify-between">
                      <span>Pareto Root-Cause Classification</span>
                      <span className="text-amber-400 font-mono text-[10px]">Bearing Wear (Cat #2)</span>
                    </h5>
                    <p className="mt-1 text-[11px] text-slate-300">
                      Edge AI classifies downtime stop reason &amp; computes remaining lifecycle hours.
                    </p>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="h-6 w-0.5 bg-gradient-to-b from-amber-500 to-emerald-500" />
                  </div>

                  {/* Step 3: EFFECT & ACTION */}
                  <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 block mb-1">
                      3. AUTOMATED EFFECT &amp; ACTION
                    </span>
                    <ul className="space-y-2 mt-2 text-[11px] text-slate-200">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>Instant WhatsApp &amp; ANDON Siren Callout to Maintenance SLA Lead</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>PLC Feed Rate auto-throttled to prevent catastrophic motor failure</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>Digital Mobile Work Order generated with 30-min technician SLA timer</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 8 — OPERATIONAL OUTCOMES MATRIX (Harness Potential)
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-700">
              Operational Outcomes
            </span>
            <h2 className="mt-4 text-3xl font-black text-blue-950 sm:text-4xl">
              Harness the Potential of Your Manufacturing Operations
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Realize quantifiable value across every level of your factory from equipment lifecycle to operator productivity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {/* INCREASE */}
            <div className="rounded-3xl border border-emerald-200 bg-gradient-to-b from-emerald-50/60 to-white p-6 shadow-sm">
              <span className="inline-flex items-center gap-1 text-xs font-black uppercase text-emerald-700">
                <TrendingUp size={16} /> INCREASE
              </span>
              <ul className="mt-4 space-y-2 text-xs font-bold text-slate-800">
                {operationalOutcomes.increase.map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-emerald-100">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* IMPROVE */}
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-b from-blue-50/60 to-white p-6 shadow-sm">
              <span className="inline-flex items-center gap-1 text-xs font-black uppercase text-blue-700">
                <Sparkles size={16} /> IMPROVE
              </span>
              <ul className="mt-4 space-y-2 text-xs font-bold text-slate-800">
                {operationalOutcomes.improve.map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-blue-100">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* OPTIMIZE */}
            <div className="rounded-3xl border border-orange-200 bg-gradient-to-b from-orange-50/60 to-white p-6 shadow-sm">
              <span className="inline-flex items-center gap-1 text-xs font-black uppercase text-orange-700">
                <Sliders size={16} /> OPTIMIZE
              </span>
              <ul className="mt-4 space-y-2 text-xs font-bold text-slate-800">
                {operationalOutcomes.optimize.map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-orange-100">
                    <CheckCircle2 size={14} className="text-orange-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* TRANSFORM */}
            <div className="rounded-3xl border border-violet-200 bg-gradient-to-b from-violet-50/60 to-white p-6 shadow-sm">
              <span className="inline-flex items-center gap-1 text-xs font-black uppercase text-violet-700">
                <Workflow size={16} /> TRANSFORM
              </span>
              <ul className="mt-4 space-y-2 text-xs font-bold text-slate-800">
                {operationalOutcomes.transform.map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-violet-100">
                    <CheckCircle2 size={14} className="text-violet-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* REDUCE */}
            <div className="rounded-3xl border border-rose-200 bg-gradient-to-b from-rose-50/60 to-white p-6 shadow-sm">
              <span className="inline-flex items-center gap-1 text-xs font-black uppercase text-rose-700">
                <TrendingDown size={16} /> REDUCE
              </span>
              <ul className="mt-4 space-y-2 text-xs font-bold text-slate-800">
                {operationalOutcomes.reduce.map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-rose-100">
                    <CheckCircle2 size={14} className="text-rose-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 9 — CTA SECTION
      ══════════════════════════════════════ */}
      <CTASection
        title="Ready to Transform Your Shop Floor?"
        text="Experience how Aplos Logix IIoT & MES solutions can boost your OEE, eliminate manual paperwork, and provide complete factory visibility."
        button="Schedule Live Demo"
      />
    </main>
  );
}
