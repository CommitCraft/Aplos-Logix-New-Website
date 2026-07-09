import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const styles = {
  primary: "bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/15",
  secondary: "border border-blue-300 bg-white text-blue-800 hover:bg-blue-50",
  orange: "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20",
  ghost: "text-blue-700 hover:bg-blue-50",
};

export default function ButtonLink({ to, children, variant = "primary", arrow = false, className = "" }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`}
    >
      {children}
      {arrow ? <ArrowRight size={17} /> : null}
    </Link>
  );
}
