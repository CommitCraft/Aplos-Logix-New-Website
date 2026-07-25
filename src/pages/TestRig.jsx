import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, ChevronRight } from "lucide-react";
import Container from "../components/common/Container";
import TestAutomationSection from "../components/common/TestAutomationSection";
import CTASection from "../components/common/CTASection";

export default function TestRig() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-slate-50">
      {/* Page Hero Header */}
      <section className="relative overflow-hidden bg-[#04264c] py-16 text-white aplos-grid">
        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 backdrop-blur">
            <Cpu size={14} className="animate-spin-slow text-cyan-400" />
            Standalone Test Bench Infrastructure
          </span>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            IIoT Smart Test Rig &amp; <br className="hidden sm:block" />
            <span className="text-orange-400">Automated Inspection Suite</span>
          </h1>

          <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-blue-100 font-medium">
            Full end-of-line electrical safety testing, real-time sensor telemetry, digital pass gating, automated BIS compliance reports, and live WhatsApp alerts.
          </p>

          <div className="mt-6 flex justify-center gap-2 text-xs text-blue-200">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-orange-400 font-bold">IIoT Test Rig</span>
          </div>
        </Container>
      </section>

      {/* Full Interactive Test Automation Suite Section */}
      <TestAutomationSection />

      {/* Booking CTA Section */}
      <CTASection />
    </main>
  );
}
