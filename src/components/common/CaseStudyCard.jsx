import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CaseStudyCard({ item, featured = false }) {
  return (
    <article className={`overflow-hidden rounded-3xl border border-slate-200 bg-white ${featured ? "shadow-xl shadow-blue-950/5" : ""}`}>
      <div className={`grid ${featured ? "lg:grid-cols-[0.92fr_1.08fr]" : ""}`}>
        <div className="relative min-h-72 overflow-hidden">
          <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/55 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
            {item.modules.slice(0, 4).map((module) => (
              <span key={module} className="rounded-full border border-white/20 bg-blue-950/55 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">{module}</span>
            ))}
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-blue-600">
            <span>{item.tag}</span>
            <span className="h-1 w-1 rounded-full bg-orange-500" />
            <span>{item.industry}</span>
          </div>
          <h2 className="mt-3 text-2xl font-black leading-tight text-blue-950 sm:text-3xl">{item.title}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-orange-50/70 p-4">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-orange-600">Challenge</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.challenge}</p>
            </div>
            <div className="rounded-2xl bg-blue-50/80 p-4">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-700">Solution</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.solution}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">Operational Outcomes</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {item.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-600" /> {outcome}
                </div>
              ))}
            </div>
          </div>

          {item.flow?.length ? (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {item.flow.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-blue-950">{step}</span>
                  {index < item.flow.length - 1 ? <ArrowRight size={14} className="text-blue-400" /> : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
