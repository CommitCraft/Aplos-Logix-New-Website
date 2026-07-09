import { ArrowRight } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import CaseStudyCard from "../components/common/CaseStudyCard";
import Container from "../components/common/Container";
import CTASection from "../components/common/CTASection";
import SectionHeading from "../components/common/SectionHeading";
import { caseStudiesHero, caseStudies, caseStudyProcess, deliveredSolutions } from "../content/caseStudies";

export default function CaseStudies() {
  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/45 to-sky-100/60 py-12 soft-grid">
        <Container>
          <Breadcrumbs current="Case Studies" />
          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-500">{caseStudiesHero.eyebrow}</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight text-blue-950 sm:text-5xl">{caseStudiesHero.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">{caseStudiesHero.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Quality & Test Automation", "Production Intelligence", "Traceability & Search", "Reports & Alerts"].map((item) => (
                <div key={item} className="rounded-2xl border border-blue-100 bg-white p-4 text-sm font-black text-blue-950 shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading eyebrow="Featured Story" title="Connected Quality from Serial Scan to" highlight="Final Report" description="A detailed example of how identity, test automation, validation, traceability and reporting can work as one connected flow." />
          <div className="mt-8"><CaseStudyCard item={caseStudies[0]} featured /></div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12">
        <Container>
          <SectionHeading eyebrow="More Solution Stories" title="Different Factory Problems." highlight="One Connected Approach." description="The architecture stays modular while the workflow adapts to the actual production, test and compliance requirement." />
          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {caseStudies.slice(1).map((item) => <CaseStudyCard key={item.title} item={item} />)}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading center eyebrow="Delivery Method" title="From Plant Problem to" highlight="Operational Improvement" description="Case studies become credible when the page explains the actual system journey, not just a list of marketing percentages." />
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {caseStudyProcess.map((item, index) => (
              <article key={item.title} className="relative rounded-3xl border border-slate-200 bg-white p-6">
                <span className="text-sm font-black text-orange-500">{item.step}</span>
                <h3 className="mt-3 text-xl font-black text-blue-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                {index < caseStudyProcess.length - 1 ? <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden text-blue-300 lg:block" /> : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-blue-950 py-12 text-white aplos-grid">
        <Container>
          <SectionHeading light center eyebrow="Capabilities Delivered" title="Solutions Across Quality, Production and" highlight="Traceability" description="Mix only the modules required for the plant problem—without forcing a monolithic rollout." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {deliveredSolutions.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur">
                  <Icon size={20} className="text-orange-400" />
                  <h3 className="mt-3 text-sm font-black text-white">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-blue-100/75">{item.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection title="Your Factory Story Can Be Next" text="Bring us one production, quality, test, traceability or reporting problem. We’ll map the data flow and propose a practical connected solution." button="Discuss Your Use Case" />
    </main>
  );
}
