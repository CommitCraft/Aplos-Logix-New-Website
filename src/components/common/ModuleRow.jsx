export default function ModuleRow({ icon: Icon, title, text, preview }) {
  return (
    <article className="grid items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-[56px_1fr_0.9fr]">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon size={22} /></span>
      <div><h3 className="font-black text-blue-950">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">{preview}</div>
    </article>
  );
}
