export default function DashboardMockup({ compact = false, title = "Aplos Logix Dashboard" }) {
  const metrics = [
    ["OEE", "92.1%", "+2.5%"], ["Availability", "96.8%", "+1.9%"], ["Performance", "91.6%", "+1.2%"], ["Quality", "98.2%", "+2.3%"],
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-blue-950/10">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3"><span className="text-xs font-black text-blue-950">{title}</span><span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">LIVE</span></div>
      <div className={`${compact ? "p-3" : "p-4"}`}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {metrics.map(([label, value, change]) => <div key={label} className="rounded-lg bg-slate-50 p-2"><p className="text-[10px] text-slate-500">{label}</p><p className="mt-1 text-sm font-black text-blue-950">{value}</p><p className="text-[9px] font-bold text-emerald-600">{change}</p></div>)}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-blue-50/60 p-3"><p className="text-[10px] font-bold text-blue-950">OEE Trend</p><div className="mt-4 flex h-20 items-end gap-1">{[22,38,31,52,44,68,62,85,78,94].map((h,i) => <span key={i} className="flex-1 rounded-t bg-blue-500/80" style={{height:`${h}%`}} />)}</div></div>
          <div className="rounded-xl bg-slate-50 p-3"><p className="text-[10px] font-bold text-blue-950">Production Overview</p><div className="mt-4 flex h-20 items-end gap-2">{[70,48,86,62,92,54].map((h,i) => <span key={i} className="flex-1 rounded-t bg-orange-400/85" style={{height:`${h}%`}} />)}</div></div>
        </div>
      </div>
    </div>
  );
}
