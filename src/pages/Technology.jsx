import { ArrowRight, Check } from "lucide-react";
import ArchitectureStack from "../components/common/ArchitectureStack";
import Breadcrumbs from "../components/common/Breadcrumbs";
import ButtonLink from "../components/common/ButtonLink";
import Container from "../components/common/Container";
import CTASection from "../components/common/CTASection";
import DashboardMockup from "../components/common/DashboardMockup";
import FeatureCard from "../components/common/FeatureCard";
import MetricStrip from "../components/common/MetricStrip";
import SectionHeading from "../components/common/SectionHeading";
import {
  technologyHero,
  technologyStats,
  architectureLayers,
  protocols,
  integrationSources,
  dataPipeline,
  deploymentModes,
  techStack,
  technologyHighlights,
  reliabilityFeatures,
  technologyBenefits,
} from "../content/technology";

export default function Technology() {
  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-sky-100/70 soft-grid">
        <Container className="grid gap-10 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-14">
          <div className="relative z-10">
            <Breadcrumbs current="Technology" />
            <p className="mt-5 inline-flex rounded-md border border-blue-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-blue-700">{technologyHero.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">{technologyHero.title}</h1>
            <p className="mt-4 text-xl font-black text-blue-600">{technologyHero.highlight}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{technologyHero.description}</p>
            <div className="mt-7 flex flex-wrap gap-3"><ButtonLink to="/contact" variant="primary" arrow>Discuss Integration</ButtonLink><ButtonLink to="/solutions" variant="secondary">Explore Solutions</ButtonLink></div>
          </div>

          <div className="relative min-h-105">
            <div className="absolute inset-x-8 top-0 h-[72%] overflow-hidden rounded-[3rem_0_3rem_0] shadow-2xl shadow-blue-950/10">
              <img src={technologyHero.image} alt="Connected industrial technology architecture" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-950/25 via-transparent to-white/10" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 mx-auto w-[86%]"><DashboardMockup title="Factory Intelligence Layer" /></div>
          </div>
        </Container>
      </section>

      <Container className="-mt-1 py-6"><MetricStrip items={technologyStats} /></Container>

      <section className="py-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Reference Architecture"
                title="A Layered System from"
                highlight="Device to Decision"
                description="Each layer has a clear job. Equipment keeps running locally, data stays structured, applications remain modular and users see only the information and actions they need."
              />
              <div className="mt-6 rounded-3xl bg-blue-950 p-6 text-white aplos-grid">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-400">Design Principle</p>
                <h3 className="mt-2 text-xl font-black">Decouple the shop floor from the dashboard.</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/80">Machines, gateways, databases and applications should be independently maintainable. This makes upgrades safer and expansion easier.</p>
                <div className="mt-5 space-y-2">
                  {["Local operation first", "Structured data contracts", "Modular applications", "Controlled integrations"].map((item) => <div key={item} className="flex items-center gap-2 text-sm text-blue-50"><Check size={15} className="text-orange-400" />{item}</div>)}
                </div>
              </div>
            </div>
            <ArchitectureStack layers={architectureLayers} />
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12">
        <Container>
          <SectionHeading center eyebrow="Integration Coverage" title="Connect the Real" highlight="Factory Floor" description="Aplos Logix can collect identity, status, measurements, counts, test results and events from heterogeneous shop-floor sources." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrationSources.map((item) => <FeatureCard key={item.title} {...item} compact />)}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white p-5">
            {protocols.map((protocol) => <span key={protocol} className="rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-2.5 text-sm font-black text-blue-800">{protocol}</span>)}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading eyebrow="Data Journey" title="From Raw Signal to" highlight="Operational Action" description="The data pipeline is designed to make live information dependable enough for quality decisions, traceability and automated workflows." />
          <div className="mt-8 grid gap-3 lg:grid-cols-7">
            {dataPipeline.map((item, index) => (
              <article key={item.title} className="relative rounded-2xl border border-slate-200 bg-white p-4">
                <span className="text-xs font-black text-orange-500">{item.step}</span>
                <h3 className="mt-2 text-lg font-black text-blue-950">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{item.text}</p>
                {index < dataPipeline.length - 1 ? <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden text-blue-300 lg:block" size={22} /> : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-14 text-white aplos-grid">
        <Container>
          <SectionHeading center light eyebrow="Deployment" title="Choose the Right" highlight="Deployment Model" description="The architecture can remain plant-local, operate in hybrid mode or connect to centralized services based on network, governance and business requirements." />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {deploymentModes.map((mode) => {
              const Icon = mode.icon;
              return <article key={mode.title} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-400"><Icon size={23} /></span><h3 className="mt-5 text-2xl font-black">{mode.title}</h3><p className="mt-3 text-sm leading-6 text-blue-100/85">{mode.text}</p><div className="mt-5 rounded-2xl bg-blue-950/45 p-4"><p className="text-[11px] font-black uppercase tracking-[0.16em] text-orange-400">Best Fit</p><p className="mt-2 text-sm leading-6 text-white/90">{mode.bestFor}</p></div></article>;
            })}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading eyebrow="Engineering Stack" title="Practical Industrial" highlight="Technology Stack" description="A focused stack for edge connectivity, data handling, APIs, dashboards and plant-ready deployment." />
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {techStack.map((item) => { const Icon = item.icon; return <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4 text-center transition hover:-translate-y-0.5 hover:border-blue-300"><Icon className="mx-auto text-blue-700" /><p className="mt-3 text-sm font-black text-blue-950">{item.title}</p></div>; })}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12">
        <Container>
          <SectionHeading eyebrow="Technology Capabilities" title="Built for Integration, Resilience and" highlight="Continuous Improvement" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{technologyHighlights.map((item) => <FeatureCard key={item.title} {...item} />)}</div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <SectionHeading eyebrow="Reliability & Governance" title="Keep Industrial Data" highlight="Dependable" description="A connected factory is valuable only when its data flow is resilient, traceable and controlled." />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">{reliabilityFeatures.map((item) => <FeatureCard key={item.title} {...item} compact />)}</div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{technologyBenefits.map((item) => <FeatureCard key={item.title} {...item} compact />)}</div>
        </Container>
      </section>

      <CTASection title="Future-Ready. Secure. Industrial." text="Let’s design a practical integration architecture for your machines, test panels, data systems and operational dashboards." button="Request Technology Consultation" />
    </main>
  );
}
