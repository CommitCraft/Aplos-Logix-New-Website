import { useState, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

import {
  customerSection,
  customers,
  customerTrustPoints,
} from "../../content/customers";

import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function CustomerShowcase({ compact = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Group customer logos into slides of 6 for interactive paginated slider
  const itemsPerPage = 6;
  const totalSlides = Math.ceil(customers.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-advance slider every 4 seconds when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, totalSlides]);

  // Split customers into two halves for dual-row marquee
  const halfLength = Math.ceil(customers.length / 2);
  const row1Customers = customers.slice(0, halfLength);
  const row2Customers = customers.slice(halfLength);

  return (
    <section
      className={`relative overflow-hidden ${
        compact ? "py-12" : "bg-slate-50 py-16 lg:py-24 border-y border-slate-200"
      }`}
    >
      {/* Decorative ambient background */}
      {!compact && (
        <>
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />
        </>
      )}

      <Container>
        <div className="relative">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow={customerSection.eyebrow}
              title={customerSection.title}
              highlight={customerSection.highlight}
              description={customerSection.description}
              align="center"
            />
          </div>

          {/* ══════════════════════════════════════
              § 1 — CONTINUOUS AUTO-MARQUEE LOGO SLIDER
          ══════════════════════════════════════ */}
          <div className="mt-12 space-y-4">
            {/* Row 1: Forward Marquee Track */}
            <div className="marquee-wrapper relative rounded-2xl border border-slate-200/80 bg-white py-4 shadow-sm backdrop-blur">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

              <div className="marquee-track flex items-center gap-6">
                {[...row1Customers, ...row1Customers, ...row1Customers].map((customer, idx) => (
                  <div
                    key={`${customer.name}-r1-${idx}`}
                    className="group flex min-h-[90px] w-44 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-lg"
                  >
                    <img
                      src={customer.logo}
                      alt={`${customer.name} logo`}
                      loading="lazy"
                      className="h-12 w-full max-w-[130px] object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Reverse Marquee Track */}
            <div className="marquee-wrapper relative rounded-2xl border border-slate-200/80 bg-white py-4 shadow-sm backdrop-blur">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

              <div className="marquee-track-reverse flex items-center gap-6">
                {[...row2Customers, ...row2Customers, ...row2Customers].map((customer, idx) => (
                  <div
                    key={`${customer.name}-r2-${idx}`}
                    className="group flex min-h-[90px] w-44 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-orange-300 hover:bg-white hover:shadow-lg"
                  >
                    <img
                      src={customer.logo}
                      alt={`${customer.name} logo`}
                      loading="lazy"
                      className="h-12 w-full max-w-[130px] object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════
              § 2 — INTERACTIVE PAGINATED CAROUSEL CONTROLS
          ══════════════════════════════════════ */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-xs hover:bg-slate-100 transition"
              >
                {isPlaying ? <Pause size={13} className="text-orange-500" /> : <Play size={13} className="text-emerald-500" />}
                <span>{isPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}</span>
              </button>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                Hover logos to inspect
              </span>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-8 bg-orange-500 shadow-sm"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition hover:bg-blue-950 hover:text-white hover:border-blue-950"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition hover:bg-blue-950 hover:text-white hover:border-blue-950"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════
              § 3 — CUSTOMER TRUST POINTS GRID
          ══════════════════════════════════════ */}
          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {customerTrustPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-slate-50/80 p-3 border border-slate-100"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span className="text-xs font-bold leading-snug text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}