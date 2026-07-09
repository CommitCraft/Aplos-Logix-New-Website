import { Check } from "lucide-react";

import {
  customerSection,
  customers,
  customerTrustPoints,
} from "../../content/customers";

import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function CustomerShowcase({ compact = false }) {
  return (
    <section
      className={`relative overflow-hidden ${
        compact ? "py-12" : "bg-slate-50 py-16 lg:py-24"
      }`}
    >
      {/* Decorative background */}
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

          {/* Customer logos */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {customers.map((customer) => (
              <article
                key={customer.name}
                className="
                  group
                  flex
                  min-h-[130px]
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-xl
                  hover:shadow-blue-950/5
                "
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  loading="lazy"
                  className="
                    h-14
                    w-full
                    max-w-[140px]
                    object-contain
                    transition
                    duration-300
                    group-hover:scale-105
                  "
                />
              </article>
            ))}
          </div>

          {/* Trust points */}
          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {customerTrustPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-50
                      text-blue-700
                    "
                  >
                    <Check size={16} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-semibold leading-6 text-slate-700">
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