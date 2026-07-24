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
  Zap
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
  solutionBenefits
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

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("what");
  const currentFaq = whatWhyHowData[activeTab];

  return (
    <main className="overflow-hidden bg-slate-50">
      {/* ══════════════════════════════════════
          § 1 — HERO SECTION (Zoho IIoT Inspired)
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#04264c] aplos-grid py-20 text-white lg:py-24">
        {/* Background glow orbs */}
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

          {/* Right Column: Zoho IIoT Inspired Banner Image Composition */}
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
          § 2 — WHAT / WHY / HOW TABBED SECTION (Zoho Style)
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
                  className={`pb-4 text-base font-bold transition-all relative ${
                    activeTab === tab.id
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
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-sm lg:p-12">
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
                      className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold">
                        <CheckCircle2 size={18} />
                      </div>
                      <p className="text-sm font-semibold text-slate-700 pt-1">
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
          § 4 — INTELLIGENT SHOP FLOOR AUTOMATION (Zoho Crafted Integration)
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
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm transition hover:shadow-xl hover:border-blue-300">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Assembly &amp; Serial Unit Production</span>
                    <h3 className="text-2xl font-black text-blue-950 mt-1">Discrete Manufacturing</h3>
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700">
                  {[
                    "Construction and building materials",
                    "Automobiles",
                    "Aerospace and defense",
                    "Machines and equipment",
                    "Medical devices",
                    "Appliances",
                    "Electronics",
                    "Automotive parts"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner SVG Illustration */}
              <div className="mt-6 flex justify-end pointer-events-none opacity-90 transition duration-300 group-hover:scale-105">
                <img src={discreteIllustration} width="320" height="230" alt="Discrete Manufacturing Illustration" className="max-w-full h-auto" />
              </div>
            </div>

            {/* Process Manufacturing Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm transition hover:shadow-xl hover:border-orange-300">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600">Continuous &amp; Batch Operations</span>
                    <h3 className="text-2xl font-black text-blue-950 mt-1">Process Manufacturing</h3>
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700">
                  {[
                    "Chemical",
                    "Food and beverage",
                    "Oil and gas",
                    "Pharmaceutical",
                    "Metal and steel",
                    "Glass",
                    "Textile",
                    "Adhesives and Paint"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner SVG Illustration */}
              <div className="mt-6 flex justify-end pointer-events-none opacity-90 transition duration-300 group-hover:scale-105">
                <img src={processIllustration} width="320" height="230" alt="Process Manufacturing Illustration" className="max-w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Animated Connecting Zig-Zag Line (SVG Path with animateMotion circles) */}
          <div className="hidden lg:block relative -my-6 h-28 w-full max-w-4xl mx-auto pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 732.5 293" preserveAspectRatio="xMidYMid meet">
              <path className="stroke-blue-400/40" strokeWidth="3" fill="none" strokeDasharray="6 6" d="M1.91-0.2c0,0-10.23,154.13,184.92,150.39c151.44-2.9,175.37,84.24,178.51,123.61 c0.06,0.76-0.01,8.82,0.05,9.85" />
              <path className="stroke-orange-400/40" strokeWidth="3" fill="none" strokeDasharray="6 6" d="M729.22-0.2c0,0,10.23,154.13-184.92,150.39S365.74,293.12,365.74,293.12" />
              
              {/* Animated Moving Glowing Particles */}
              <circle cx="0" cy="0" r="7" fill="#2563eb" filter="drop-shadow(0 0 6px #3b82f6)">
                <animateMotion dur="4s" repeatCount="indefinite" path="M1.91-0.2c0,0-10.23,154.13,184.92,150.39c151.44-2.9,175.37,84.24,178.51,123.61 c0.06,0.76-0.01,8.82,0.05,9.85" />
              </circle>
              <circle cx="0" cy="0" r="7" fill="#f97316" filter="drop-shadow(0 0 6px #f97316)">
                <animateMotion dur="4s" repeatCount="indefinite" begin="1s" path="M729.22-0.2c0,0,10.23,154.13-184.92,150.39S365.74,293.12,365.74,293.12" />
              </circle>
            </svg>
          </div>

          {/* Central Laptop Showcase with Floating Connect / Collect / Curate Overlays */}
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

              {/* Overlay 1: CONNECT */}
              <div className="absolute top-1/4 -left-4 sm:left-4 w-44 sm:w-64 drop-shadow-2xl animate-float">
                <img src={overlayConnect} width="280" alt="Connect Overlay" className="w-full h-auto" />
              </div>

              {/* Overlay 2: COLLECT */}
              <div className="absolute top-1/2 -right-4 sm:right-4 -translate-y-1/2 w-44 sm:w-64 drop-shadow-2xl animate-float delay-200">
                <img src={overlayCollect} width="280" alt="Collect Overlay" className="w-full h-auto" />
              </div>

              {/* Overlay 3: CURATE / ANALYZE */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-72 drop-shadow-2xl animate-float delay-400">
                <img src={overlayCurate} width="300" alt="Curate Overlay" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 5 — CORE SOLUTION MODULES GRID
      ══════════════════════════════════════ */}
      <section id="solutions-grid" className="py-20 bg-slate-50 border-t border-slate-200">
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
              return (
                <div
                  key={card.title}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:border-blue-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                        <Icon size={22} />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-600">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-blue-950">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {card.text}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                    <span>Learn Capabilities</span>
                    <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 6 — POWERFUL MODULES & PRODUCTION TESTING
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Powerful System Modules */}
            <div>
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-700">
                Core Capabilities
              </span>
              <h2 className="mt-4 text-3xl font-black text-blue-950">
                Powerful Platform Modules
              </h2>
              <p className="mt-3 text-slate-600 text-sm">
                Built-in features that ensure end-to-end operational control and complete traceability.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {powerfulModules.map((module) => {
                  const Icon = module.icon;
                  return (
                    <div
                      key={module.title}
                      className="flex items-start gap-3.5 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-blue-50/50 hover:border-blue-200"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-blue-950">
                          {module.title}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500 leading-normal">
                          {module.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Production Test Automation */}
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-950 via-[#04264c] to-blue-950 p-8 text-white">
              <span className="inline-block rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-400">
                DigiQA Integration
              </span>
              <h2 className="mt-4 text-3xl font-black">
                Production Test Automation
              </h2>
              <p className="mt-3 text-sm text-blue-200">
                Automate test execution, validate safety thresholds, and log serial-number wise test reports in real time.
              </p>

              <div className="mt-8 space-y-4">
                {productionTests.map((test) => {
                  const Icon = test.icon;
                  return (
                    <div
                      key={test.title}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white">
                          {test.title}
                        </h4>
                        <p className="text-xs text-blue-200 mt-0.5">
                          {test.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 7 — BUSINESS OUTCOMES & BENEFITS
      ══════════════════════════════════════ */}
      <section className="py-20 bg-slate-900 text-white">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-400">
              Measurable ROI
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl text-white">
              Why Leading Manufacturers Choose Aplos Logix
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {solutionBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400 mb-4">
                      <Icon size={20} />
                    </div>
                    <p className="text-3xl font-black text-orange-400">{benefit.stat}</p>
                    <h3 className="mt-2 text-sm font-black text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 8 — CTA SECTION
      ══════════════════════════════════════ */}
      <CTASection
        title="Ready to Transform Your Shop Floor?"
        text="Experience how Aplos Logix IIoT & MES solutions can boost your OEE, eliminate manual paperwork, and provide complete factory visibility."
        button="Schedule Live Demo"
      />
    </main>
  );
}
