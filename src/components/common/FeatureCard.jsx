export default function FeatureCard({ icon: Icon, title, text, compact = false, accent = "blue" }) {
  const accentClass = accent === "orange" ? "bg-orange-50 text-orange-500" : "bg-blue-50 text-blue-700";
  return (
    <article className={`rounded-2xl border border-slate-200 bg-white ${compact ? "p-4" : "p-6"} transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/5`}>
      <div className={`flex ${compact ? "h-10 w-10" : "h-12 w-12"} items-center justify-center rounded-xl ${accentClass}`}><Icon size={compact ? 19 : 22} /></div>
      <h3 className={`${compact ? "mt-3 text-base" : "mt-5 text-lg"} font-black text-blue-950`}>{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}
