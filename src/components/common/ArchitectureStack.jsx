import { ArrowUp, Check } from "lucide-react";

export default function ArchitectureStack({ layers }) {
  return (
    <div className="relative space-y-4">
      {layers.map((layer, index) => {
        const Icon = layer.icon;
        const isLast = index === layers.length - 1;
        return (
          <div key={layer.title} className="relative">
            <article className="grid gap-5 rounded-3xl border border-blue-100 bg-white p-5 shadow-lg shadow-blue-950/5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700"><Icon size={23} /></span>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-orange-500">Layer {layers.length - index}</p>
                  <h3 className="mt-1 text-xl font-black text-blue-950">{layer.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{layer.text}</p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {layer.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-700">
                    <Check size={14} className="text-blue-600" /> {bullet}
                  </div>
                ))}
              </div>
            </article>
            {!isLast ? (
              <div className="flex h-8 items-center justify-center text-blue-400"><ArrowUp size={20} /></div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
