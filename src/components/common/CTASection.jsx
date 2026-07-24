import { ArrowRight, Factory, Sparkles, CheckCircle2, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function CTASection({
  title = "Ready to Transform Your Factory?",
  text = "Bring quality, production, traceability, and live shop-floor intelligence into one connected ecosystem.",
  button = "Book a Focused Consultation",
}) {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] border-2 border-white/15 bg-gradient-to-br from-[#021329] via-[#04264c] to-[#031d3b] p-8 text-white shadow-2xl backdrop-blur-2xl sm:p-12 lg:p-16">
          {/* Ambient Glowing Light Orbs */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />

          {/* Grid pattern overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] aplos-grid" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
                <Sparkles size={14} className="animate-pulse" />
                <span>Smart Manufacturing &amp; IIoT</span>
              </div>

              <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-blue-100/90 font-normal">
                {text}
              </p>

              {/* 4 Capability Glass Pills */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur transition hover:border-amber-400/40 hover:bg-white/10">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-extrabold text-blue-100">Quality Digitization &amp; DigiQA</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur transition hover:border-amber-400/40 hover:bg-white/10">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-extrabold text-blue-100">Live OEE &amp; Production Data</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur transition hover:border-amber-400/40 hover:bg-white/10">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-extrabold text-blue-100">Multi-Protocol IIoT Integration</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur transition hover:border-amber-400/40 hover:bg-white/10">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-extrabold text-blue-100">ANDON &amp; WhatsApp Escalations</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="flex flex-col items-start lg:items-end justify-center">
              <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                    <PhoneCall size={14} /> Direct Consultation
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                    ● 24/7 SLA Response
                  </span>
                </div>

                <p className="text-xs text-blue-200 leading-relaxed">
                  Book a 1-on-1 session with our senior IIoT architects for DigiQA, EMS, QMS, OEE, ANDON, or test automation requirements.
                </p>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ffab00] px-6 py-3.5 text-sm font-black text-slate-950 shadow-lg shadow-amber-400/25 transition duration-300 hover:bg-[#ffc400] hover:shadow-amber-400/40 hover:scale-[1.02]"
                  >
                    <span>{button}</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    to="/solutions"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                  >
                    Explore IIoT Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}