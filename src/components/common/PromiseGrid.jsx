import { promiseCards, valueProposition } from "../../content/valueProposition";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function PromiseGrid({ compact = false }) {
  return (
    <section className={compact ? "py-10" : "py-14"}>
      <Container>
        <SectionHeading
          center
          eyebrow={valueProposition.eyebrow}
          title={valueProposition.title}
          highlight={valueProposition.highlight}
          description={valueProposition.description}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {promiseCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/5">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon size={23} /></span>
                  <span className="text-xs font-black text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-blue-950">{item.title}</h3>
                <p className="mt-2 font-bold text-blue-700">{item.text}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
