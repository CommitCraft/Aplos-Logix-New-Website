import { ArrowRight } from "lucide-react";
import Container from "../components/common/Container";
import CTASection from "../components/common/CTASection";
import FeatureCard from "../components/common/FeatureCard";
import MetricStrip from "../components/common/MetricStrip";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import { industriesHero, industryCards, industryStats, useCases, industryTestCoverage } from "../content/industries";

export default function Industries() {
  return (
    <main>
      <PageHero page="Industries" title={industriesHero.title} highlight={industriesHero.highlight} description={industriesHero.description} image={industriesHero.image} />
      <section className="py-12"><Container><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{industryCards.map((item) => <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><img src={item.image} alt={item.title} className="h-52 w-full object-cover" /><div className="p-5"><h2 className="text-lg font-black text-blue-950">{item.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-blue-700">Learn More <ArrowRight size={15} /></span></div></article>)}</div><div className="mt-8"><MetricStrip items={industryStats} /></div></Container></section>
      <section className="bg-slate-50 py-12"><Container><SectionHeading center eyebrow="Factory Use Cases" title="Typical Use Cases by" highlight="Industry" /><div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{useCases.map((item) => <FeatureCard key={item.title} {...item} compact />)}</div></Container></section>
      <section className="py-12"><Container><SectionHeading center eyebrow="Test Automation" title="Production & Test Coverage Across" highlight="Industries" /><div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{industryTestCoverage.map((item) => <FeatureCard key={item.title} {...item} compact />)}</div></Container></section>
      <CTASection title="We Understand Your Industry" text="Let’s build the right connected quality, production and test automation system for your factory." button="Request Demo" />
    </main>
  );
}
