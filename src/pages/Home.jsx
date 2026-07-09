import { ArrowRight, Check, Factory, Router, ServerCog } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonLink from "../components/common/ButtonLink";
import Container from "../components/common/Container";
import CustomerShowcase from "../components/common/CustomerShowcase";
import CTASection from "../components/common/CTASection";
import DashboardMockup from "../components/common/DashboardMockup";
import FeatureCard from "../components/common/FeatureCard";
import MetricStrip from "../components/common/MetricStrip";
import PromiseGrid from "../components/common/PromiseGrid";
import SectionHeading from "../components/common/SectionHeading";
import {
  homeHero,
  quickHighlights,
  platformModules,
  iiotExcellence,
  homeStats,
  testCoverage,
  productionVisibility,
  homeIndustries,
  processSteps,
  manufacturerBenefits,
} from "../content/home";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-sky-100/70 soft-grid">
        <Container className="grid gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-14">
          <div className="relative z-10">
            <p className="inline-flex rounded-md border border-blue-200 bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-blue-700">{homeHero.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.04] tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">{homeHero.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{homeHero.description}</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {homeHero.services.map((item) => <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><Check size={16} className="text-blue-600" />{item}</div>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3"><ButtonLink to="/solutions" arrow>Explore Solutions</ButtonLink><ButtonLink to="/contact" variant="secondary">Request Demo</ButtonLink></div>
          </div>
          <div className="relative min-h-96 lg:min-h-130">
            <div className="absolute right-0 top-0 h-full w-[86%] overflow-hidden rounded-[4rem_0_0_0] shadow-2xl shadow-blue-950/10">
              <img src={homeHero.factoryImage} alt="Connected industrial factory" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-950/20 via-transparent to-white/15" />
            </div>
            {/* <div className="absolute bottom-0 right-0 w-[68%] sm:w-[58%]"><DashboardMockup /></div> */}
          </div>
        </Container>
      </section>

      <Container className="-mt-1 py-5"><MetricStrip items={quickHighlights} /></Container>

      <CustomerShowcase compact />

      <section className="py-10">
        <Container>
          <SectionHeading center eyebrow="Connected Platform" title="DigiQA, EMS & Production" highlight="Intelligence Modules" description="A modular suite for digital quality, live factory data, production monitoring, traceability and automated action." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformModules.map((item) => <FeatureCard key={item.title} {...item} compact />)}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/70 via-white to-sky-50 p-6 sm:p-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <SectionHeading eyebrow="IIoT Excellence" title={iiotExcellence.title} description={iiotExcellence.description} />
                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {iiotExcellence.pillars.map((item) => {
                    const Icon = item.icon;
                    return <article key={item.title} className="rounded-xl border border-blue-100 bg-white p-4"><Icon size={20} className="text-blue-700" /><h3 className="mt-3 text-sm font-black text-blue-950">{item.title}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{item.text}</p></article>;
                  })}
                </div>
              </div>
              <div>
                <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl border border-blue-100 bg-white p-4">
                  <div className="space-y-2">{["PLC / CNC", "Test Panels", "Sensors", "Scanners", "HMIs"].map((x) => <div key={x} className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700">{x}</div>)}</div>
                  <div className="flex flex-col items-center gap-2 text-blue-600"><Router /><ArrowRight /><ServerCog /></div>
                  <div className="rounded-2xl bg-blue-950 p-4 text-white"><p className="text-xs font-black text-orange-400">APLOS IIoT PLATFORM</p><p className="mt-2 text-sm leading-6 text-blue-100">Edge processing, structured storage, dashboards, alerts and reports.</p></div>
                </div>
                <DashboardMockup title="Production & Quality Intelligence" />
              </div>
            </div>
            <div className="mt-7"><MetricStrip items={homeStats} /></div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <SectionHeading eyebrow="Test Automation" title="Production & Safety Test" highlight="Coverage" description="Connect test panels and testers directly to DigiQA for controlled test execution, live values and traceable results." />
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {testCoverage.map((item) => <FeatureCard key={item.title} {...item} compact />)}
              </div>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-blue-50/50 p-6">
              <SectionHeading eyebrow="Production Intelligence" title="Visibility That Drives" highlight="Action" />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {productionVisibility.map((m, index) => <article key={m.label} className="rounded-2xl border border-slate-200 bg-white p-4"><p className="text-xs font-bold text-slate-500">{m.label}</p><div className="mt-2 flex items-end justify-between"><span className="text-2xl font-black text-blue-950">{m.value}</span><span className={`text-xs font-bold ${m.trend.startsWith("-") ? "text-orange-500" : "text-emerald-600"}`}>{m.trend}</span></div><div className="mt-4 flex h-14 items-end gap-1">{[24,34,29,52,48,70,61,80,74,92].map((h,i)=><span key={i} className={`flex-1 rounded-t ${index % 2 ? "bg-orange-400/70" : "bg-blue-500/70"}`} style={{height:`${h}%`}} />)}</div></article>)}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-white p-5"><p className="text-xs font-bold text-slate-500">Operator Productivity</p><p className="mt-2 text-3xl font-black text-blue-950">94.2%</p><p className="mt-2 text-xs text-slate-500">Shift-wise performance visibility</p></div><div className="rounded-2xl bg-white p-5"><p className="text-xs font-bold text-slate-500">Machine Status</p><p className="mt-2 text-3xl font-black text-blue-950">128 Active</p><p className="mt-2 text-xs text-slate-500">Running • Idle • Down • Maintenance</p></div></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12">
        <Container>
          <SectionHeading eyebrow="Industries" title="Built for Production Environments Where" highlight="Quality Matters" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeIndustries.map((item) => <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><img src={item.image} alt={item.title} className="h-44 w-full object-cover" /><div className="p-5"><h3 className="font-black text-blue-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p><Link to="/industries" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-blue-700">Learn More <ArrowRight size={15} /></Link></div></article>)}
          </div>
        </Container>
      </section>

      <PromiseGrid />

      <section className="py-12">
        <Container>
          <SectionHeading center eyebrow="Implementation" title="How Aplos Logix" highlight="Works" description="A structured deployment path from plant understanding to connected operations and continuous improvement." />
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {processSteps.map((step, index) => <article key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-black text-white">{index + 1}</span><h3 className="mt-4 text-lg font-black text-blue-950">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>{index < 3 ? <ArrowRight className="absolute -right-4 top-1/2 hidden text-blue-300 lg:block" /> : null}</article>)}
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="grid overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-r from-white to-blue-50 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-9"><SectionHeading eyebrow="Why Aplos Logix" title="Why Manufacturers" highlight="Choose Us" /><div className="mt-6 space-y-3">{manufacturerBenefits.map((b) => <div key={b} className="flex items-start gap-3 text-sm text-slate-700"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">✓</span>{b}</div>)}</div></div>
            <div className="relative min-h-80"><img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=90" alt="Engineer reviewing factory dashboard" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute bottom-4 left-4 right-4"><DashboardMockup compact title="Live Plant Overview" /></div></div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
