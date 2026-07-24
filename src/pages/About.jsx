import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, Quote, Sparkles, CheckCircle2, Factory, ShieldCheck, Zap, Cpu, Database, BrainCircuit, Rocket, Target, Award } from "lucide-react";

import {
  aboutHero,
  aboutIntro,
  heroProductsStrip,
  platformTabsData,
  missionSection,
  visionSection,
  philosophy,
  coreValues,
  impactStats,
  iiotExcellence,
  vision2030,
  technologyExcellence,
  futureSection,
} from "../content/about";

import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import CustomerShowcase from "../components/common/CustomerShowcase";
import PromiseGrid from "../components/common/PromiseGrid";
import CTASection from "../components/common/CTASection";

import IIoTVennDiagram from "../components/common/IIoTVennDiagram";
import AnimatedCounter from "../components/common/AnimatedCounter";

import iiotBannerOv1 from "../assets/image/iiot_banner_ov1.svg";
import iiotBannerOv2 from "../assets/image/iiot_banner_ov2.svg";


export default function About() {
  const [activePlatformTab, setActivePlatformTab] = useState("aplos-edge");
  const currentTabObj = platformTabsData.find((t) => t.id === activePlatformTab) || platformTabsData[0];

  return (
    <main className="overflow-hidden bg-slate-50">
      {/* ══════════════════════════════════════
          § 1 — DOUBLE CONTAINER HERO (Atlassian Software Collection Inspired)
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#091e42] text-white">
        {/* Top Split Layer */}
        <div className="relative py-16 lg:py-24 aplos-grid">
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />

          <Container className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Column: Heading & Content */}
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
                <Sparkles size={13} /> {aboutHero.eyebrow}
              </span>

              <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {aboutHero.title}{" "}
                <span className="text-[#ffab00] block">{aboutHero.highlight}</span>
              </h1>

              <p className="max-w-xl text-base leading-7 text-blue-100/90 md:text-lg">
                {aboutHero.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ffab00] px-7 py-3.5 text-sm font-black text-[#091e42] shadow-xl shadow-amber-400/20 transition hover:bg-[#ffc400] hover:shadow-amber-400/35"
                >
                  Contact Sales <ChevronRight size={16} />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  Explore Platform
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Showcase Visual (platform-chart.svg) */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white p-5 sm:p-7 shadow-2xl transition duration-500 hover:shadow-blue-500/20">
                <img
                  src={aboutHero.image}
                  width="600"
                  height="450"
                  alt={aboutHero.imageAlt}
                  className="w-full h-auto object-contain transition duration-500 hover:scale-[1.02]"
                  fetchPriority="high"
                />
              </div>

              {/* Floating Badge Overlays */}
              <div className="absolute -top-12 -left-8 sm:-left-8 w-44 sm:w-56 drop-shadow-2xl animate-float">
                <img
                  src={iiotBannerOv1}
                  width="234"
                  alt="Software Collection Analytics"
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-12 -right-12 sm:-right-8 w-40 sm:w-52 drop-shadow-2xl animate-float delay-200">
                <img
                  src={iiotBannerOv2}
                  width="204"
                  alt="Productivity & Velocity"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </Container>

          {/* Bottom 4 Quick Product Cards Strip */}
          <Container className="mt-14 pt-10 border-t border-white/10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroProductsStrip.map((prod) => {
                const Icon = prod.icon || Cpu;
                return (
                  <div
                    key={prod.title}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-amber-400/50 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-400 p-2 shadow-xs group-hover:scale-110 transition">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white">{prod.title}</h4>
                      <p className="text-xs text-blue-200/80 leading-snug">{prod.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>

        {/* ══════════════════════════════════════
            § 1.2 — BOTTOM CONTAINER: INTERACTIVE PLATFORM TABS
        ══════════════════════════════════════ */}
        <div className="bg-slate-50 py-16 text-slate-900 border-b border-slate-200">
          <Container>
            <div className="mb-10 text-center">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-800">
                The Platform Architecture
              </span>
              <h2 className="mt-3 text-3xl font-black text-blue-950 sm:text-4xl">
                The AI-Native SDLC &amp; IIoT Platform for Every Team
              </h2>
              <p className="mt-2 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                Measure and improve your developer productivity, software quality, shop floor automation, and team velocity.
              </p>
            </div>

            {/* Interactive Tab Navigation Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {platformTabsData.map((tab) => {
                const TabIcon = tab.icon || Cpu;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActivePlatformTab(tab.id)}
                    className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all duration-200 ${activePlatformTab === tab.id
                      ? "bg-blue-700 text-white shadow-md ring-2 ring-blue-600"
                      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                      }`}
                  >
                    <TabIcon size={15} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Showcase Panel */}
            {currentTabObj && (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:p-12">
                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                  <div>
                    <span className="inline-block rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-blue-800 mb-3">
                      {currentTabObj.name}
                    </span>
                    <h3 className="text-2xl font-black text-blue-950 sm:text-3xl leading-snug">
                      {currentTabObj.title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {currentTabObj.desc}
                    </p>

                    <div className="mt-8">
                      <Link
                        to={currentTabObj.link}
                        className="inline-flex items-center gap-2 text-sm font-black text-blue-700 hover:text-blue-900 transition"
                      >
                        <span>Learn more</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-2 shadow-lg">
                    <img
                      src={currentTabObj.image}
                      alt={currentTabObj.title}
                      className="w-full h-auto rounded-xl object-cover shadow-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════
          § 2 — WHO WE ARE & FACTORY ECOSYSTEM
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column: Who We Are Text & Core Principles */}
            <div>
              <SectionHeading
                eyebrow={aboutIntro.eyebrow}
                title={aboutIntro.title}
                highlight={aboutIntro.highlight}
              />

              <div className="mt-6 space-y-4">
                {aboutIntro.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Principles Grid */}
              <div className="mt-8">
                <h3 className="text-xl font-black tracking-tight text-blue-950">
                  {aboutIntro.coreValues.heading}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  {aboutIntro.coreValues.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {aboutIntro.coreValues.items.map((item) => {
                    const Icon = item.icon || Sparkles;
                    return (
                      <div
                        key={item.title}
                        className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-md"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition group-hover:scale-110">
                            <Icon size={18} />
                          </div>
                          <div>
                            <h4 className="font-extrabold text-blue-950 text-sm">{item.title}</h4>
                            <p className="mt-1 text-xs text-slate-600 leading-relaxed font-normal">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Live Factory Intelligence Ecosystem Card */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-blue-950 via-slate-900 to-[#031d3b] p-6 text-white shadow-2xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-orange-400 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Aplos Logix Smart Factory Architecture
                  </span>
                  <span className="text-[10px] font-bold text-blue-200 bg-white/10 px-2.5 py-1 rounded-full">
                    Connected Ecosystem
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <span className="text-[10px] font-extrabold text-orange-400 uppercase tracking-widest block mb-1">
                      01. Physical Field Devices
                    </span>
                    <p className="text-sm font-bold text-white">PLCs, Safety Test Panels &amp; Sensor Array</p>
                    <p className="mt-1 text-xs text-blue-200/80">Siemens, Allen Bradley, Mitsubishi, Fanuc, Omron, Temperature/Pressure/Flow Meters</p>
                  </div>

                  <div className="flex justify-center -my-2">
                    <div className="h-5 w-0.5 bg-orange-400" />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <span className="text-[10px] font-extrabold text-orange-400 uppercase tracking-widest block mb-1">
                      02. Aplos Edge Node Computing
                    </span>
                    <p className="text-sm font-bold text-white">High-Frequency Ingestion &amp; Protocol Conversion</p>
                    <p className="mt-1 text-xs text-blue-200/80">OPC-UA, Modbus TCP/RTU, MQTT, Store-and-Forward Memory Buffer</p>
                  </div>

                  <div className="flex justify-center -my-2">
                    <div className="h-5 w-0.5 bg-orange-400" />
                  </div>

                  <div className="rounded-2xl border border-orange-400/40 bg-orange-500/10 p-4 backdrop-blur">
                    <span className="text-[10px] font-extrabold text-orange-400 uppercase tracking-widest block mb-1">
                      03. Production Intelligence &amp; Action
                    </span>
                    <p className="text-sm font-bold text-white">Live OEE, Rejection Pareto, ANDON &amp; ERP Sync</p>
                    <p className="mt-1 text-xs text-blue-200/80">WhatsApp Alerts, Serial Barcode Printing, SAP REST API Connector</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-200 font-bold">
                  <span>Plant-Wide Visibility</span>
                  <span className="text-emerald-400 font-black">99.8% System Uptime SLA</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 3 — MISSION & VISION DUAL SHOWCASE CARDS
      ══════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-blue-700">
                  <Target size={13} /> {missionSection.eyebrow}
                </span>
                <h3 className="mt-3 text-2xl font-black text-blue-950 sm:text-3xl">
                  {missionSection.title} <span className="text-blue-600">{missionSection.highlight}</span>
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  {missionSection.description}
                </p>

                <div className="mt-6 space-y-2.5">
                  {missionSection.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl bg-white p-3 border border-blue-100/80 shadow-xs">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-orange-200 bg-gradient-to-br from-orange-50/70 via-white to-slate-50 p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-orange-400 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500" />
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-orange-700">
                  <Award size={13} /> {visionSection.eyebrow}
                </span>
                <h3 className="mt-3 text-2xl font-black text-blue-950 sm:text-3xl">
                  {visionSection.title} <span className="text-orange-500">{visionSection.highlight}</span>
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  {visionSection.description}
                </p>

                <div className="mt-8 rounded-2xl border border-orange-200/80 bg-white p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Pillars of Vision 2030</p>
                  <ul className="space-y-3 text-xs font-bold text-slate-800">
                    <li className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                      <span>Empower 1,000+ Manufacturing Plants across Asia &amp; Global Hubs</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                      <span>100% Serial Number Traceability &amp; Digital Quality Gates</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                      <span>AI Predictive Maintenance &amp; ESG Carbon Neutrality Support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 4 — PHILOSOPHY QUOTE
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-950 via-[#031d3b] to-slate-900 px-8 py-12 text-white shadow-2xl sm:px-14 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <Quote size={48} className="mx-auto mb-6 text-orange-400 opacity-90" />
              <blockquote className="text-2xl font-black leading-relaxed sm:text-3xl lg:text-4xl text-white">
                “{philosophy.quote}”
              </blockquote>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                {philosophy.author}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 5 — BUSINESS IMPACT STATS (Animated Counter Strip)
      ══════════════════════════════════════ */}
      <section className="py-16 bg-slate-900 text-white aplos-grid">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-orange-400/50 hover:bg-white/10 text-center"
              >
                <div className="text-4xl font-black text-orange-400 sm:text-5xl">
                  <AnimatedCounter end={stat.numericEnd} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm font-bold text-white">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-blue-200/80 font-normal">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 6 — IIOT JOURNEY & MULTI-STAGE CONTINUUM
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow={iiotExcellence.eyebrow}
              title={iiotExcellence.title}
              highlight={iiotExcellence.highlight}
              description={iiotExcellence.description}
              align="center"
            />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {iiotExcellence.stages.map((stage) => {
              const Icon = stage.icon || Database;
              return (
                <article
                  key={stage.title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white via-slate-50/50 to-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl"
                >
                  <div className="absolute right-5 top-4 text-6xl font-black text-slate-200/50 group-hover:text-blue-100 transition">
                    {stage.number}
                  </div>

                  <div className="relative z-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md shadow-blue-700/20 group-hover:bg-orange-500 transition">
                      <Icon size={22} />
                    </span>

                    <h3 className="mt-6 text-xl font-black text-blue-950">
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                      {stage.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {stage.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-bold text-blue-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 7 — VISION 2030 & CONNECTED IIOT VENN DIAGRAM
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-24 aplos-grid">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            {/* Left Content */}
            <div>
              <SectionHeading
                eyebrow={vision2030.eyebrow}
                title={vision2030.title}
                highlight={vision2030.highlight}
                description={vision2030.description}
                titleClassName="text-white"
              />

              <p className="mt-6 border-l-4 border-orange-400 pl-5 text-base sm:text-lg font-semibold leading-relaxed text-slate-200">
                {vision2030.statement}
              </p>

              {/* Info pills */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-blue-100">
                  Connected Factory
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-blue-100">
                  Real-Time Intelligence
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-blue-100">
                  AI-Ready Architecture
                </span>
              </div>

              {/* Metrics strip */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {vision2030.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-2xl font-black text-orange-400 sm:text-3xl">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-xs font-bold text-slate-300">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IIoT Venn Diagram Frame */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-6 shadow-2xl">
              <IIoTVennDiagram />
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 8 — TECHNOLOGY EXCELLENCE ARCHITECTURE
      ══════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow={technologyExcellence.eyebrow}
              title={technologyExcellence.title}
              highlight={technologyExcellence.highlight}
              description={technologyExcellence.description}
              align="center"
            />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologyExcellence.items.map((item) => {
              const Icon = item.icon || Cpu;
              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={22} />
                  </span>

                  <h3 className="mt-5 text-lg font-black text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 9 — APLOS PROMISE & CUSTOMER SHOWCASE
      ══════════════════════════════════════ */}
      <PromiseGrid />
      <CustomerShowcase />

      {/* ══════════════════════════════════════
          § 10 — FUTURE CTA
      ══════════════════════════════════════ */}
      <CTASection
        title={futureSection.title}
        text={futureSection.description}
        button="Talk to Our Team"
      />
    </main>
  );
}
