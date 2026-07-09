import Container from "../components/common/Container";
import CTASection from "../components/common/CTASection";
import FeatureCard from "../components/common/FeatureCard";
import ModuleRow from "../components/common/ModuleRow";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import { digiqaHero, digiqaModules, digiqaTests, digiqaManage } from "../content/digiqa";

export default function DigiQA() {
  return (
    <main>
      <PageHero page="DigiQA" parent="Solutions" eyebrow="DigiQA Software" title={digiqaHero.title} description={digiqaHero.description} image={digiqaHero.image} bullets={digiqaHero.bullets} />
      <section className="py-12"><Container><SectionHeading center eyebrow="Platform Modules" title="DigiQA Core" highlight="Modules" description="A connected operational suite for product models, quality records, production monitoring, traceability, reporting and test automation." /><div className="mt-8 grid gap-4 xl:grid-cols-2">{digiqaModules.map((item) => <ModuleRow key={item.title} {...item} />)}</div></Container></section>
      <section className="bg-slate-50 py-12"><Container><SectionHeading center eyebrow="Test Coverage" title="Production & Safety" highlight="Test Modules" /><div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">{digiqaTests.map((item) => <FeatureCard key={item.title} {...item} compact />)}</div></Container></section>
      <section className="py-12"><Container><SectionHeading center eyebrow="Configuration & Control" title="What You Can Manage with" highlight="DigiQA" /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{digiqaManage.map((item) => <FeatureCard key={item.title} {...item} compact />)}</div></Container></section>
      <CTASection title="See DigiQA in Action" text="Explore live dashboards, traceability, reports, alerts and test automation—built for the factory floor." button="Book a Free Demo" />
    </main>
  );
}
