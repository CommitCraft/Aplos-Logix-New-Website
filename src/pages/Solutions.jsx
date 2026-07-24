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
  manufacturingTypes,
  solutionCards,
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

  const currentFaq = whatWhyHowData[activeTab];
  const activeModule = holisticModules.find((m) => m.id === activeModuleId) || holisticModules[0];

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
          § 3 — CONNECT -> COLLECT -> ANALYZE -> ACT PIPELINE
      ══════════════════════════════════════ */}
      <section className="py-20 bg-slate-900 text-white aplos-grid">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-400">
              The Architecture
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl text-white">
              From Edge Data to Actionable Insights
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              A unified 4-layer IIoT framework that converts raw PLC signals into real-time shop floor intelligence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pipelineSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-orange-400/50 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-orange-400/40 group-hover:text-orange-400 transition">
                      {step.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-400">
                      <Icon size={22} />
                    </div>
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">
                    {step.name}
                  </span>
                  <h3 className="mt-1 text-lg font-black text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-slate-300 flex-1">
                    {step.desc}
                  </p>
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
          § 5 — HOLISTIC SHOP-FLOOR MASTERY MODULE SWITCHER
      ══════════════════════════════════════ */}
      <section className="py-20 bg-slate-900 text-white aplos-grid">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-400">
              Single Destination
            </span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Holistic Shop-Floor Automation Mastery
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              A comprehensive suite of factory intelligence modules designed to monitor, track, and optimize every operational parameter.
            </p>
          </div>

          {/* Module Switcher Buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {holisticModules.map((module) => {
              const Icon = module.icon;
              const isActive = activeModuleId === module.id;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModuleId(module.id)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${isActive
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 ring-2 ring-orange-400"
                    : "border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <Icon size={15} />
                  {module.tag}
                </button>
              );
            })}
          </div>

          {/* Active Module Details Showcase */}
          {activeModule && (
            <div className="grid gap-10 rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-2 lg:items-center lg:p-12">
              <div>
                <span className="inline-block rounded-full bg-orange-500/20 border border-orange-400/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-orange-400">
                  {activeModule.tag}
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white">
                  {activeModule.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-blue-100/80 leading-relaxed">
                  {activeModule.desc}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {activeModule.points.map((pt, i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <p className="font-bold text-white text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-400" />
                        {pt.name}
                      </p>
                      <p className="mt-1 text-xs text-blue-200/90 leading-relaxed">
                        {pt.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Mockup Display */}
              <div className="relative">
                <div className="rounded-2xl border border-white/10 bg-[#031d3b] p-6 shadow-2xl">
                  <DashboardMockup title={activeModule.title} />
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 6 — BRANDS & PROTOCOLS SUPPORTED MARQUEE
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-y border-slate-200">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: Brands We Support */}
            <div>
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-blue-700">
                Hardware Interoperability
              </span>
              <h3 className="mt-2 text-2xl font-black text-blue-950">
                Brands &amp; Controllers We Support
              </h3>
              <p className="mt-2 text-xs text-slate-500">
                Plug-and-play integration with major industrial automation equipment and CNC controls.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {supportedBrands.map((brand) => (
                  <span
                    key={brand}
                    className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-extrabold text-slate-800 shadow-xs"
                  >
                    <Check size={12} className="text-emerald-600" />
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Protocols We Support */}
            <div>
              <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-orange-700">
                Industrial Communications
              </span>
              <h3 className="mt-2 text-2xl font-black text-blue-950">
                Protocols We Support
              </h3>
              <p className="mt-2 text-xs text-slate-500">
                High-frequency data streaming from legacy fieldbuses to modern IoT cloud protocols.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {supportedProtocols.map((protocol) => (
                  <span
                    key={protocol}
                    className="flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50/60 px-3.5 py-1.5 text-xs font-extrabold text-orange-900 shadow-xs"
                  >
                    <Zap size={12} className="text-orange-500" />
                    {protocol}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 7 — CORE SOLUTION MODULES GRID
      ══════════════════════════════════════ */}
      <section id="solutions-grid" className="py-20 bg-slate-50">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-700">
              Core Solutions
            </span>
            <h2 className="mt-4 text-3xl font-black text-blue-950 sm:text-4xl">
              One Connected Solution Portfolio
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Modular applications that plug directly into your production lines to monitor, automate, and optimize operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((card) => {
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
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 ${theme.border} ${theme.bg} p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.iconBg} shadow-xs transition duration-300 group-hover:scale-105`}>
                        <Icon size={22} />
                      </div>
                      <span className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide ${theme.badge}`}>
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-blue-950">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                      {card.text}
                    </p>
                  </div>

                  <div className={`mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black ${theme.link}`}>
                    <span>Explore Module</span>
                    <ArrowRight size={14} className="transition group-hover:translate-x-1.5" />
                  </div>
                </div>
              );
            })}
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
