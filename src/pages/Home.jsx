import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronRight,
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
import TestAutomationSection from "../components/common/TestAutomationSection";

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
            <h1 className="text-5xl font-black leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
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
                    to="/solutions"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 transition-all group-hover:gap-2.5"
                  >
                    Learn more <ArrowRight size={13} />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 4 — TEST AUTOMATION (existing)
      ══════════════════════════════════════ */}
      <TestAutomationSection />

      {/* ══════════════════════════════════════
          § 5 — PLATFORM FEATURES TABS
      ══════════════════════════════════════ */}
      {/* ══════════════════════════════════════
          § 5 — HOLISTIC SHOP-FLOOR AUTOMATION MASTERY (10 MODULES)
      ══════════════════════════════════════ */}
      <section className="py-20 bg-slate-50/80">
        <Container>
          {/* Section header */}
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-blue-100 border border-blue-200 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-blue-700">
              Shop-Floor Automation Mastery
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">
              Single Destination to Achieve Holistic Shop-Floor Mastery
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Integrate Aplos Logix IIoT across your equipment, production lines, OEE analytics, shift schedules, maintenance SLAs, DigiQA quality gates, energy, and plant utilities.
            </p>
          </div>

          {/* 10 Module Tab Buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {platformFeatures.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setActiveSubIndex(0);
                  }}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold transition-all duration-200 ${active
                    ? "bg-blue-700 text-white shadow-lg shadow-blue-700/25 ring-2 ring-blue-600"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:bg-slate-50"
                    }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab content panel */}
          {activeFeature && (
            <div key={activeFeature.id} className="grid gap-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:grid-cols-2 lg:items-center lg:p-12 animate-fade-in-up">
              {/* Left Column: Details & Accordion Sub-features */}
              <div>
                <span className="inline-block rounded-full bg-orange-100 border border-orange-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-orange-700 mb-3">
                  {activeFeature.tag}
                </span>
                <h3 className="text-2xl font-black tracking-tight text-blue-950 sm:text-3xl leading-snug">
                  {activeFeature.headline}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                  {activeFeature.subHeading}
                </p>

                {/* Sub-features Accordion / Grid List */}
                {activeFeature.subFeatures && (
                  <div className="mt-6 space-y-2.5 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                    {activeFeature.subFeatures.map((sub, idx) => {
                      const isSubActive = activeSubIndex === idx;
                      return (
                        <div
                          key={sub.title}
                          onClick={() => setActiveSubIndex(idx)}
                          className={`cursor-pointer rounded-2xl border p-3.5 transition duration-200 ${isSubActive
                            ? "border-blue-400 bg-blue-50/70 shadow-sm"
                            : "border-slate-100 bg-slate-50/50 hover:bg-slate-100/80"
                            }`}
                        >
                          <h4 className="text-xs font-extrabold text-blue-950 flex items-center justify-between">
                            <span>{sub.title}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSubActive ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"}`}>
                              {isSubActive ? "Active View" : "Explore"}
                            </span>
                          </h4>
                          <p className="mt-1 text-xs text-slate-600 leading-relaxed font-normal">
                            {sub.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="mt-8 flex items-center gap-4">
                  <ButtonLink to="/solutions" arrow>Explore Solution</ButtonLink>
                  <ButtonLink to="/contact" variant="outline">Book Consultation</ButtonLink>
                </div>
              </div>

              {/* Right Column: High-Res WebP Dashboard Screenshot */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-[#021329] p-3 shadow-2xl transition duration-500 hover:shadow-2xl hover:border-blue-400">
                <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-2 px-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-200 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live IIoT Telemetry Panel
                  </span>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                    {activeFeature.label}
                  </span>
                </div>
                <img
                  key={activeFeature.id}
                  src={activeFeature.image}
                  alt={activeFeature.headline}
                  className="w-full h-auto rounded-xl object-cover shadow-inner transition duration-300 hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ══════════════════════════════════════
          § 6 — INDUSTRY USE CASES
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-orange-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-600">
              Industries
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
              Built for Your Industry
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-slate-600">
              Deep domain expertise in the manufacturing verticals that need precision, traceability and continuous improvement most.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {industryUseCases.map((ind) => {
              const Icon = ind.icon;
              return (
                <article
                  key={ind.industry}
                  className="group relative overflow-hidden rounded-3xl bg-blue-950 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl min-h-[290px] flex flex-col"
                >
                  {/* Background image */}
                  <img
                    src={ind.image}
                    alt={ind.industry}
                    className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/50 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between flex-1 p-6">
                    <div>
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <Icon size={18} className="text-orange-400" />
                      </div>
                      <h3 className="text-base font-black leading-tight text-white">{ind.industry}</h3>
                      <p className="mt-2 text-[12px] leading-5 text-blue-200">{ind.description}</p>
                    </div>

                    <div className="mt-4">
                      {ind.metrics.map((m) => (
                        <div key={m} className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 mb-1">
                          <span className="h-1 w-1 rounded-full bg-emerald-400 shrink-0" />
                          {m}
                        </div>
                      ))}
                      <Link
                        to="/industries"
                        className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-orange-400 hover:gap-2 transition-all"
                      >
                        Learn More <ArrowRight size={11} />
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
      <section className="relative overflow-hidden py-24 bg-[#04264c] aplos-grid">
        {/* Decorative blur orbs */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <Container>
          {/* Centered section header */}
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-400">
              Why Aplos Logix
            </span>
            <h2 className="mt-5 text-4xl font-black leading-[1.07] tracking-tight text-white sm:text-5xl">
              Why Manufacturers<br />
              <span className="text-orange-400">Choose Aplos Logix</span>
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base leading-7 text-blue-200">
              Purpose-built for Indian and global manufacturing environments — with deep domain expertise and a proven track record of 200+ successful deployments.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

            {/* LEFT: numbered benefits */}
            <div>
              <div className="space-y-3">
                {benefitsList.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.title}
                      className="group flex items-start gap-5 rounded-2xl border border-white/8 bg-white/5 p-5 backdrop-blur-sm transition-all duration-200 hover:border-orange-400/30 hover:bg-white/8"
                    >
                      <div className="flex shrink-0 flex-col items-center gap-1">
                        <span className="text-[10px] font-black tabular-nums text-orange-400/50">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 ring-1 ring-orange-400/20 transition group-hover:bg-orange-500/25">
                          <Icon size={18} className="text-orange-400" />
                        </div>
                      </div>
                      <div className="pt-0.5">
                        <p className="font-black text-white">{b.title}</p>
                        <p className="mt-1 text-sm leading-6 text-blue-200">{b.text}</p>
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
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  Request Demo <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* RIGHT: live metrics panel */}
            <div className="flex flex-col gap-4">

              {/* 4 stat cards — rich design */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { ...animatedStats[0], delta: '+18', deltaLabel: 'this year', progress: 82, accent: 'text-orange-400', bar: 'bg-orange-400', ring: 'ring-orange-400/20', iconBg: 'bg-orange-400/15' },
                  { ...animatedStats[1], delta: '+12K', deltaLabel: 'this year', progress: 74, accent: 'text-emerald-400', bar: 'bg-emerald-400', ring: 'ring-emerald-400/20', iconBg: 'bg-emerald-400/15' },
                  { ...animatedStats[2], delta: 'SLA', deltaLabel: 'guaranteed', progress: 99, accent: 'text-blue-300', bar: 'bg-blue-400', ring: 'ring-blue-400/20', iconBg: 'bg-blue-400/15' },
                  { ...animatedStats[3], delta: '365', deltaLabel: 'days/year', progress: 100, accent: 'text-violet-400', bar: 'bg-violet-400', ring: 'ring-violet-400/20', iconBg: 'bg-violet-400/15' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className={`group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur ring-1 ${s.ring} transition hover:bg-white/10`}
                    >
                      {/* Top row */}
                      <div className="flex items-center justify-between">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${s.iconBg}`}>
                          <Icon size={16} className={s.accent} />
                        </div>
                        <div className="text-right">
                          <p className={`text-[10px] font-black ${s.accent}`}>{s.delta}</p>
                          <p className="text-[9px] text-blue-400">{s.deltaLabel}</p>
                        </div>
                      </div>

                      {/* Value */}
                      <div>
                        <p className="text-2xl font-black text-white">{s.value}{s.suffix}</p>
                        <p className="mt-0.5 text-[10px] font-medium text-blue-300 leading-tight">{s.label}</p>
                      </div>

                      {/* Progress bar */}
                      <div className="h-1 w-full rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${s.bar} transition-all duration-1000`}
                          style={{ width: `${s.progress}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>


              {/* OEE Analytics Panel: Bar + Line + Donut */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-blue-300">OEE Trend — Last 10 Shifts</p>
                    <p className="mt-1 text-2xl font-black text-white">
                      92.4% <span className="text-sm font-semibold text-emerald-400">&#8593; +2.1%</span>
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-black text-emerald-400">
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
                          points="10,38 30,29 50,32 70,25 90,20 110,22 130,15 150,12 170,10 190,8"
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
                    <div className="mt-1 flex justify-between text-[9px] font-medium text-blue-400">
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
                  { label: 'Running', count: 112, color: 'text-emerald-400', dot: 'bg-emerald-400' },
                  { label: 'Idle', count: 16, color: 'text-yellow-400', dot: 'bg-yellow-400' },
                  { label: 'Down', count: 4, color: 'text-rose-400', dot: 'bg-rose-400' },
                  { label: 'Maintenance', count: 2, color: 'text-blue-300', dot: 'bg-blue-300' },
                ].map((st) => (
                  <div
                    key={st.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur"
                  >
                    <span className={`inline-block h-2 w-2 rounded-full mb-2 ${st.dot}`} />
                    <p className={`text-xl font-black ${st.color}`}>{st.count}</p>
                    <p className="text-[9px] font-medium leading-tight text-blue-300">{st.label}</p>
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
