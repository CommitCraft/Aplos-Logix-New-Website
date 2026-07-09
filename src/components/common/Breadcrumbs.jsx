import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ current, parent }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
      <Link to="/" className="inline-flex items-center gap-1 hover:text-blue-700"><Home size={14} /> Home</Link>
      {parent ? <><ChevronRight size={14} /><span>{parent}</span></> : null}
      <ChevronRight size={14} />
      <span className="text-blue-800">{current}</span>
    </nav>
  );
}
