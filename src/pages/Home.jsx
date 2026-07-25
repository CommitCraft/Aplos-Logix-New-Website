import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Cpu,
  Quote,
  Shield,
  Star,
} from "lucide-react";

import AnimatedCounter from "../components/common/AnimatedCounter";
import ButtonLink from "../components/common/ButtonLink";
import Container from "../components/common/Container";
import CTASection from "../components/common/CTASection";
import CustomerShowcase from "../components/common/CustomerShowcase";
import DashboardMockup from "../components/common/DashboardMockup";

import {
  homeHero,
  animatedStats,
  solutionModules,
  platformFeatures,
  industryUseCases,
  benefitsList,
  securityPillars,
  integrationPartners,
  customerTrustQuotes,
} from "../content/home";

/* ─────────────────────────────────────────────
   Color maps shared across cards
───────────────────────────────────────────── */
const COLOR = {
  blue: { bar: "bg-blue-600", icon: "bg-blue-50 text-blue-700", dot: "bg-blue-600", ring: "ring-blue-100", badge: "bg-blue-50 text-blue-700" },
  violet: { bar: "bg-violet-600", icon: "bg-violet-50 text-violet-700", dot: "bg-violet-600", ring: "ring-violet-100", badge: "bg-violet-50 text-violet-700" },
  orange: { bar: "bg-orange-500", icon: "bg-orange-50 text-orange-600", dot: "bg-orange-500", ring: "ring-orange-100", badge: "bg-orange-50 text-orange-600" },
  emerald: { bar: "bg-emerald-600", icon: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-600", ring: "ring-emerald-100", badge: "bg-emerald-50 text-emerald-700" },
  sky: { bar: "bg-sky-600", icon: "bg-sky-50 text-sky-700", dot: "bg-sky-600", ring: "ring-sky-100", badge: "bg-sky-50 text-sky-700" },
  rose: { bar: "bg-rose-600", icon: "bg-rose-50 text-rose-700", dot: "bg-rose-600", ring: "ring-rose-100", badge: "bg-rose-50 text-rose-700" },
};

/* Word rotation hook */
function useWordRotation(words, ms = 3000) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % words.length);
        setVisible(true);
      }, 320);
    }, ms);
    return () => clearInterval(t);
  }, [words, ms]);

  return { word: words[idx], visible };
}

const HERO_WORDS = ["Quality", "Efficiency", "Intelligence", "Visibility"];

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
export default function Home() {
  const { word, visible } = useWordRotation(HERO_WORDS);
  const [activeTab, setActiveTab] = useState("machine-monitoring");
  const activeFeature = platformFeatures.find((f) => f.id === activeTab) || platformFeatures[0];
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [activeIndustryFilter, setActiveIndustryFilter] = useState("all");

  return (
    <main className="overflow-hidden">

      {/* ══════════════════════════════════════
          § 1 — HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#04264c] aplos-grid">
        <Container className="relative z-10 grid min-h-[92vh] gap-10 py-12 lg:grid-cols-[55%_45%] lg:items-center">

          {/* LEFT — headline + CTA */}
          <div className="flex flex-col gap-6 animate-fade-in-left">
            {/* Eyebrow */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-400">
              DigiQA • EMS • QMS • IIoT Platform
            </span>

            {/* Headline with rotating word */}
            <h1 className="text-4xl font-black leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
              Industrial{" "}
              <span
                className={`text-orange-400 transition-all duration-300 inline-block ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
              >
                {word}
              </span>
              <br className="hidden sm:block" />
              &amp; Factory Intelligence
            </h1>

            <p className="max-w-lg text-base leading-7 text-blue-100/80 md:text-lg">
              {homeHero.description}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <ButtonLink to="/solutions" arrow>Explore Platform</ButtonLink>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Book a Demo <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service pills */}
            <div className="flex flex-wrap gap-2">
              {homeHero.services.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-semibold text-blue-100 backdrop-blur"
                >
                  <Check size={11} className="text-orange-400 shrink-0" />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — video / image + floating badges */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/50 ring-1 ring-white/10">
              {/* Desktop/tablet: video */}
              <video
                src={homeHero.factoryVideo}
                autoPlay muted loop playsInline
                className="hidden md:block h-full max-h-[560px] w-full object-cover"
                aria-label="Connected industrial factory"
              />
              {/* Mobile: webp image */}
              <img
                src={homeHero.factoryImageMobile}
                alt="Connected industrial factory"
                className="block md:hidden w-full max-h-[400px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04264c]/55 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating OEE badge */}
            <div className="absolute -bottom-5 -left-5 glass-card rounded-2xl p-4 shadow-xl animate-float">
              <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400">OEE Live</p>
              <p className="mt-0.5 text-3xl font-black text-white">92.4%</p>
              <p className="mt-0.5 text-[11px] text-blue-200">↑ +2.1% vs last shift</p>
            </div>

            {/* Floating machines badge */}
            <div className="absolute -top-5 -right-5 glass-card rounded-2xl p-4 shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Machines Active</p>
              <p className="mt-0.5 text-3xl font-black text-white">128</p>
              <p className="mt-0.5 text-[11px] text-blue-200">of 134 total online</p>
            </div>
          </div>
        </Container>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#04264c] to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════
          § 2 — ANIMATED STATS STRIP
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-[#04264c] to-blue-950">
        {/* subtle grid overlay */}
        <div className="absolute inset-0 aplos-grid opacity-40 pointer-events-none" />
        <Container className="relative z-10 py-14">
          {/* Top label */}
          <p className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
            Proven at Scale — Across Industries
          </p>

          <div className="grid grid-cols-2 divide-x divide-white/8 lg:grid-cols-4">
            {[
              { ...animatedStats[0], trend: '+8 this year', sparkColor: '#fb923c', spark: [30, 45, 42, 60, 55, 70, 65, 85, 80, 100], desc: 'Live factory deployments' },
              { ...animatedStats[1], trend: '+2K this year', sparkColor: '#34d399', spark: [20, 35, 30, 55, 50, 68, 72, 85, 90, 100], desc: 'Machines & sensors online' },
              { ...animatedStats[2], trend: 'SLA guaranteed', sparkColor: '#60a5fa', spark: [88, 90, 89, 93, 95, 97, 96, 98, 99, 100], desc: '24/7 cloud infrastructure' },
              { ...animatedStats[3], trend: 'All year round', sparkColor: '#a78bfa', spark: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100], desc: 'Continuous monitoring' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group flex flex-col items-center gap-4 px-6 py-8 text-center transition hover:bg-white/4"
                >
                  {/* Icon ring */}
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition group-hover:ring-white/30">
                      <Icon size={24} className="text-orange-400" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  </div>

                  {/* Big number */}
                  <div className="text-5xl font-black text-white sm:text-[3.5rem]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div>
                    <p className="text-sm font-black text-white">{stat.label}</p>
                    <p className="mt-0.5 text-[11px] text-blue-400">{stat.desc}</p>
                  </div>

                  {/* Mini sparkline */}
                  <svg viewBox="0 0 100 24" className="w-24 h-6 opacity-70">
                    <polyline
                      points={stat.spark.map((v, i) => `${i * 11},${24 - (v * 0.22)}`).join(' ')}
                      fill="none"
                      stroke={stat.sparkColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {stat.spark.map((v, i) => (
                      i === stat.spark.length - 1 && (
                        <circle key={i} cx={i * 11} cy={24 - (v * 0.22)} r="2.5" fill={stat.sparkColor} />
                      )
                    ))}
                  </svg>

                  {/* Trend badge */}
                  <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[10px] font-bold text-blue-200">
                    {stat.trend}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 3 — SOLUTION MODULES GRID
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white soft-grid">
        <Container>
          {/* Section header */}
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-700">
              Complete Platform
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
              One Platform for Every Industrial Need
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base leading-7 text-slate-600">
              From MES and IIoT connectivity to OEE, energy monitoring and quality management — all in one intelligent system built for manufacturing.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionModules.map((mod) => {
              const Icon = mod.icon;
              const c = COLOR[mod.color];
              return (
                <article
                  key={mod.badge}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-200"
                >
                  {/* Accent top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${c.bar}`} />

                  {/* Icon + badge row */}
                  <div className="mb-5 flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.icon}`}>
                      <Icon size={22} />
                    </div>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-black ${c.badge}`}>
                      {mod.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-blue-950">{mod.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 flex-1">{mod.description}</p>

                  {/* Features */}
                  <ul className="mt-5 space-y-1.5">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${c.dot}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={mod.to || "/solutions"}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-black text-orange-600 transition-all group-hover:gap-2.5 group-hover:text-orange-700"
                  >
                    {mod.ctaLabel || "Learn More"} <ArrowRight size={13} />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 4 — IIOT TEST RIG SPOTLIGHT BANNER (Light Redesign)
      ══════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/70 soft-grid border-y border-slate-200/60">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column: Text & Features (HIGH CONTRAST LIGHT THEME) */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-cyan-800 shadow-sm">
                <Cpu size={14} className="text-cyan-700" />
                IIoT Test Automation Infrastructure
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-[#04264c] sm:text-5xl leading-tight">
                IIoT Smart Test Rig &amp; <br />
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Automated Inspection Suite</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                End-of-line electrical safety testing (HV Withstand, Insulation Res, Earth Bond), live oscilloscope signal telemetry, automated BIS report compliance, and instant WhatsApp alerts.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                {[
                  "HV Withstand (5.00 kV AC)",
                  "Earth Bond Resistance (25A)",
                  "Thermal Barcode Printing",
                  "WhatsApp Defect Dispatch",
                  "Oscilloscope Waveform Sync",
                  "IEC 60601-1 / IS 302-1 Standards",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 font-bold text-slate-800 bg-white border border-slate-200 p-2.5 rounded-xl shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-cyan-600 shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/test-rig"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-600/25 transition hover:shadow-xl hover:scale-[1.02]"
                >
                  Launch Interactive Test Rig Simulator <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-extrabold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Book Demo <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Column: Dark Telemetry Screen Pod for Oscilloscope Visibility */}
            <div className="relative rounded-3xl border border-slate-800 bg-[#021329] p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-cyan-300">BENCH-IIOT-01 [PASS GATED]</span>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-black text-emerald-400 border border-emerald-500/30">
                  SYSTEM READY
                </span>
              </div>

              {/* Mini SVG Oscilloscope */}
              <div className="h-28 w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
                <svg className="w-full h-full relative z-10" viewBox="0 0 300 80" preserveAspectRatio="none">
                  <path
                    d="M 0 40 Q 30 10, 60 40 T 120 40 T 180 40 T 240 40 T 300 40"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    className="animate-pulse"
                  />
                  <path
                    d="M 0 40 Q 30 70, 60 40 T 120 40 T 180 40 T 240 40 T 300 40"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* Mini Numerical Gauges */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="rounded-lg bg-slate-900/90 p-2 border border-slate-800">
                  <p className="text-[10px] text-slate-400">HV WITHSTAND</p>
                  <p className="text-sm font-bold text-cyan-400">1.48 kV</p>
                </div>
                <div className="rounded-lg bg-slate-900/90 p-2 border border-slate-800">
                  <p className="text-[10px] text-slate-400">EARTH BOND</p>
                  <p className="text-sm font-bold text-emerald-400">0.042 Ω</p>
                </div>
                <div className="rounded-lg bg-slate-900/90 p-2 border border-slate-800">
                  <p className="text-[10px] text-slate-400">INSULATION</p>
                  <p className="text-sm font-bold text-amber-400">540 MΩ</p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Link
                  to="/test-rig"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-cyan-400 hover:text-cyan-300 transition"
                >
                  Open Full Interactive Test Console <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 6 — INDUSTRY USE CASES
      ══════════════════════════════════════ */}
      {/* ══════════════════════════════════════
          § 6 — INDUSTRY USE CASES (Light Redesign)
      ══════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/50 soft-grid">
        <Container>
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-orange-700 shadow-sm">
              Tailored Manufacturing Solutions
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#04264c] sm:text-5xl">
              Built for Your Manufacturing Vertical
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base text-slate-600 font-medium">
              Deep domain expertise in precision assembly, safety testing, battery formation, and high-speed discrete manufacturing.
            </p>
          </div>

          {/* Industry & Solutions Category Filter Pills */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "All Solutions & Verticals" },
              { id: "oee", label: "OEE & Downtime" },
              { id: "ems", label: "Energy (EMS)" },
              { id: "qms", label: "Quality (QMS)" },
              { id: "white-goods", label: "White Goods" },
              { id: "battery", label: "EV & Battery" },
              { id: "automotive", label: "Automotive" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveIndustryFilter(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-extrabold transition-all duration-200 ${
                  activeIndustryFilter === cat.id
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-600/25 ring-2 ring-orange-500"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:text-orange-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of Light-Theme Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industryUseCases
              .filter((ind) => {
                if (activeIndustryFilter === "all") return true;
                if (activeIndustryFilter === "oee") return ind.industry.includes("OEE");
                if (activeIndustryFilter === "ems") return ind.industry.includes("EMS") || ind.industry.includes("Energy");
                if (activeIndustryFilter === "qms") return ind.industry.includes("QMS") || ind.industry.includes("Quality");
                if (activeIndustryFilter === "white-goods") return ind.industry.includes("White Goods");
                if (activeIndustryFilter === "battery") return ind.industry.includes("Battery");
                if (activeIndustryFilter === "automotive") return ind.industry.includes("Automotive");
                return true;
              })
              .map((ind) => {
                const Icon = ind.icon;
                return (
                  <article
                    key={ind.industry}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
                  >
                    {/* Top Image Banner */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                      <img
                        src={ind.image}
                        alt={ind.industry}
                        className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                      
                      {/* Floating Icon Pill */}
                      <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30 ring-2 ring-white">
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="flex flex-col justify-between flex-1 p-5 text-slate-900">
                      <div>
                        <h3 className="text-base font-black text-slate-950 leading-snug group-hover:text-orange-600 transition">
                          {ind.industry}
                        </h3>
                        <p className="mt-2 text-xs leading-5 text-slate-600 font-normal">
                          {ind.description}
                        </p>
                      </div>

                      <div className="mt-5 border-t border-slate-100 pt-3 space-y-1.5">
                        {ind.metrics.map((m) => (
                          <div key={m} className="flex items-center gap-2 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-lg">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                            {m}
                          </div>
                        ))}
                        
                        <Link
                          to="/industries"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-black text-orange-600 transition-all group-hover:gap-2.5 group-hover:text-orange-700"
                        >
                          Explore Use Cases <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 7 — WHY APLOS LOGIX (premium redesign)
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/60 soft-grid">
        <Container>
          {/* Centered section header */}
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-orange-700 shadow-sm">
              Why Aplos Logix
            </span>
            <h2 className="mt-5 text-4xl font-black leading-[1.07] tracking-tight text-[#04264c] sm:text-5xl">
              Why Manufacturers<br />
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Choose Aplos Logix</span>
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base leading-7 text-slate-600 font-medium">
              Purpose-built for Indian and global manufacturing environments — with deep domain expertise and a proven track record of 200+ successful deployments.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

            {/* LEFT: numbered benefits (LIGHT THEME CARDS) */}
            <div>
              <div className="space-y-3">
                {benefitsList.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.title}
                      className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="flex shrink-0 flex-col items-center gap-1">
                        <span className="text-[10px] font-black tabular-nums text-orange-600 font-mono">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 ring-1 ring-orange-200 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                          <Icon size={18} />
                        </div>
                      </div>
                      <div className="pt-0.5">
                        <p className="font-black text-slate-950">{b.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600 font-normal">{b.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink to="/solutions" arrow>See All Solutions</ButtonLink>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Request Demo <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* RIGHT: live metrics panel (LIGHT CARDS + DARK TELEMETRY POD) */}
            <div className="flex flex-col gap-4">

              {/* 4 stat cards — rich light design */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { ...animatedStats[0], delta: '+18', deltaLabel: 'this year', progress: 82, accent: 'text-orange-600', bar: 'bg-orange-500', ring: 'ring-orange-200', iconBg: 'bg-orange-50' },
                  { ...animatedStats[1], delta: '+12K', deltaLabel: 'this year', progress: 74, accent: 'text-emerald-600', bar: 'bg-emerald-500', ring: 'ring-emerald-200', iconBg: 'bg-emerald-50' },
                  { ...animatedStats[2], delta: 'SLA', deltaLabel: 'guaranteed', progress: 99, accent: 'text-blue-700', bar: 'bg-blue-600', ring: 'ring-blue-200', iconBg: 'bg-blue-50' },
                  { ...animatedStats[3], delta: '365', deltaLabel: 'days/year', progress: 100, accent: 'text-violet-700', bar: 'bg-violet-600', ring: 'ring-violet-200', iconBg: 'bg-violet-50' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className={`group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ${s.ring} transition hover:shadow-lg`}
                    >
                      {/* Top row */}
                      <div className="flex items-center justify-between">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${s.iconBg}`}>
                          <Icon size={16} className={s.accent} />
                        </div>
                        <div className="text-right">
                          <p className={`text-[10px] font-black ${s.accent}`}>{s.delta}</p>
                          <p className="text-[9px] text-slate-500 font-medium">{s.deltaLabel}</p>
                        </div>
                      </div>

                      {/* Value */}
                      <div>
                        <p className="text-2xl font-black text-slate-950">{s.value}{s.suffix}</p>
                        <p className="mt-0.5 text-[10px] font-semibold text-slate-600 leading-tight">{s.label}</p>
                      </div>

                      {/* Progress bar */}
                      <div className="h-1 w-full rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${s.bar} transition-all duration-1000`}
                          style={{ width: `${s.progress}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>


              {/* OEE Analytics Live Pod (Dark Telemetry Screen for Maximum Readability) */}
              <div className="rounded-2xl border border-slate-800 bg-[#021329] p-5 text-white shadow-xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-300">OEE Trend — Last 10 Shifts</p>
                    <p className="mt-1 text-2xl font-black text-white">
                      92.4% <span className="text-sm font-semibold text-emerald-400">&#8593; +2.1%</span>
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-black text-emerald-400 border border-emerald-400/30">
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    LIVE
                  </span>
                </div>

                {/* Charts row: Bar+Line left, Donut right */}
                <div className="grid grid-cols-[1fr_auto] gap-4 items-end">

                  {/* Bar + SVG Line overlay */}
                  <div>
                    <div className="relative h-28">
                      {/* Bars */}
                      <div className="absolute inset-0 flex items-end gap-1">
                        {[62, 71, 68, 75, 80, 78, 85, 88, 90, 92].map((h, i) => (
                          <div key={i} className="flex flex-1 flex-col items-center h-full justify-end">
                            <div
                              className="w-full rounded-t bg-gradient-to-t from-blue-800/70 to-blue-500/45"
                              style={{ height: `${h}%` }}
                            />
                          </div>
                        ))}
                      </div>
                      {/* SVG line + area overlay */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="oeeLineGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#34d399" stopOpacity="0.22" />
                            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <path
                          d="M10,38 L30,29 L50,32 L70,25 L90,20 L110,22 L130,15 L150,12 L170,10 L190,8 L190,100 L10,100 Z"
                          fill="url(#oeeLineGrad)"
                        />
                        {/* Trend line */}
                        <polyline
                          points="10,38 30,29 50,32 70,25 90,20 L110,22 L130,15 L150,12 L170,10 L190,8"
                          fill="none"
                          stroke="#34d399"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Data point dots */}
                        {[[10, 38], [30, 29], [50, 32], [70, 25], [90, 20], [110, 22], [130, 15], [150, 12], [170, 10], [190, 8]].map(([x, y], i) => (
                          <circle key={i} cx={x} cy={y} r="2.5" fill="#34d399" stroke="#04264c" strokeWidth="1.5" />
                        ))}
                      </svg>
                    </div>
                    {/* X axis */}
                    <div className="mt-1 flex justify-between text-[9px] font-medium text-blue-300">
                      {['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10'].map((s) => <span key={s}>{s}</span>)}
                    </div>
                    {/* Legend */}
                    <div className="mt-2 flex gap-4">
                      <span className="flex items-center gap-1.5 text-[10px] text-blue-300">
                        <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-500/60" />Bars
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                        <span className="inline-block h-0.5 w-4 rounded bg-emerald-400" />Trend
                      </span>
                    </div>
                  </div>

                  {/* Donut chart */}
                  <div className="flex flex-col items-center gap-2 pb-5">
                    <svg viewBox="0 0 80 80" className="w-24 h-24">
                      <circle cx="40" cy="40" r="28" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="13" />
                      {/* Availability 96.8% */}
                      <circle cx="40" cy="40" r="28" fill="none"
                        stroke="#34d399" strokeWidth="13"
                        strokeDasharray="170 176" strokeDashoffset="44"
                        strokeLinecap="round" transform="rotate(-90 40 40)" />
                      {/* Performance 91.6% */}
                      <circle cx="40" cy="40" r="28" fill="none"
                        stroke="#60a5fa" strokeWidth="13"
                        strokeDasharray="161 176" strokeDashoffset="-126"
                        strokeLinecap="round" transform="rotate(-90 40 40)" />
                      {/* Quality 98.2% */}
                      <circle cx="40" cy="40" r="28" fill="none"
                        stroke="#fb923c" strokeWidth="13"
                        strokeDasharray="173 176" strokeDashoffset="-287"
                        strokeLinecap="round" transform="rotate(-90 40 40)" />
                      <text x="40" y="37" textAnchor="middle" fill="white" fontSize="9" fontWeight="900">92.4%</text>
                      <text x="40" y="47" textAnchor="middle" fill="#93c5fd" fontSize="5.5">OEE</text>
                    </svg>
                    <div className="space-y-1 text-[9px] font-semibold">
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />Avail 96.8%
                      </div>
                      <div className="flex items-center gap-1.5 text-blue-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />Perf 91.6%
                      </div>
                      <div className="flex items-center gap-1.5 text-orange-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />Qual 98.2%
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Machine status row */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: 'Running', count: 112, color: 'text-emerald-700', dot: 'bg-emerald-500' },
                  { label: 'Idle', count: 16, color: 'text-amber-700', dot: 'bg-amber-500' },
                  { label: 'Down', count: 4, color: 'text-rose-700', dot: 'bg-rose-500' },
                  { label: 'Maintenance', count: 2, color: 'text-blue-700', dot: 'bg-blue-500' },
                ].map((st) => (
                  <div
                    key={st.label}
                    className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm"
                  >
                    <span className={`inline-block h-2 w-2 rounded-full mb-2 ${st.dot}`} />
                    <p className={`text-xl font-black ${st.color}`}>{st.count}</p>
                    <p className="text-[9px] font-bold leading-tight text-slate-600">{st.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 8 — SECURITY & COMPLIANCE
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#04264c] aplos-grid">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-400">
              <Shield size={12} /> Security &amp; Compliance
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Enterprise-Grade Security
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-blue-200">
              Built with a security-first architecture — from encrypted data transmission to role-based access and complete audit trails.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {securityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-card rounded-3xl p-7 transition hover:bg-white/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15">
                    <Icon size={22} className="text-orange-400" />
                  </div>
                  <h3 className="font-black text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-200">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 9 — INTEGRATIONS MARQUEE
      ══════════════════════════════════════ */}
      <section className="border-y border-slate-100 py-16 bg-white">
        <Container>
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-600">
              Integrations
            </span>
            <h2 className="mt-4 text-3xl font-black text-blue-950">
              Works with Your Infrastructure
            </h2>
            <p className="mt-3 text-slate-600">
              Connects to the PLCs, SCADA systems, ERPs, databases and test equipment you already use.
            </p>
          </div>

          <div className="marquee-wrapper py-2">
            <div className="marquee-track gap-4">
              {[...integrationPartners, ...integrationPartners].map((p, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 10 — CUSTOMER TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-700">
              Customer Stories
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
              Trusted by Manufacturers Across India
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {customerTrustQuotes.map((t, i) => (
              <blockquote
                key={i}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>

                <Quote size={20} className="text-blue-200 mb-3" />
                <p className="flex-1 text-sm leading-7 text-slate-700 italic">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-black text-blue-950">{t.name}</p>
                    <p className="text-[11px] text-slate-500">{t.company}</p>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>

          {/* Customer logo showcase */}
          <div className="mt-14">
            <CustomerShowcase compact />
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 11 — CTA (existing component)
      ══════════════════════════════════════ */}
      <CTASection />
    </main>
  );
}
