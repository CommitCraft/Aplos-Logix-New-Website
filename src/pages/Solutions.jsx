import Container from "../components/common/Container";
import CTASection from "../components/common/CTASection";
import FeatureCard from "../components/common/FeatureCard";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import { solutionsHero, solutionCards, powerfulModules, productionTests, solutionBenefits } from "../content/solutions";

export default function Solutions() {
  return (
    <main>
      <PageHero page="Solutions" title={solutionsHero.title} highlight={solutionsHero.highlight} description={solutionsHero.description} image={solutionsHero.image} />
      <section className="py-12"><Container><div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div><SectionHeading eyebrow="Core Solutions" title="One Connected Portfolio for" highlight="Modern Manufacturing" /><div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{solutionCards.map((item) => <FeatureCard key={item.title} {...item} />)}</div></div>
        <aside className="self-start rounded-3xl border border-blue-100 bg-blue-50/50 p-5 lg:sticky lg:top-24"><h2 className="text-xl font-black text-blue-950">Powerful Modules</h2><div className="mt-4 space-y-3">{powerfulModules.map((item) => {const Icon=item.icon; return <div key={item.title} className="flex gap-3 rounded-xl bg-white p-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700"><Icon size={17} /></span><div><h3 className="text-sm font-black text-blue-950">{item.title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{item.text}</p></div></div>})}</div></aside>
      </div></Container></section>

      <section className="bg-slate-50 py-12"><Container><SectionHeading eyebrow="Test Automation" title="Production Test" highlight="Solutions" description="Automate test execution, read live values, validate limits and store every result against a serial number." /><div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">{productionTests.map((item) => <FeatureCard key={item.title} {...item} compact />)}</div></Container></section>

      <section className="py-12"><Container><SectionHeading center eyebrow="Business Outcomes" title="Why Manufacturers Choose" highlight="Aplos Logix" /><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{solutionBenefits.map((item) => <FeatureCard key={item.title} {...item} compact />)}</div></Container></section>
      <CTASection title="Need a Custom IIoT Solution?" text="We build modular systems around your unique processes, equipment, quality requirements and production goals." button="Request Demo" />
    </main>
  );
}
