import { ArrowRight, Factory } from "lucide-react";

import ButtonLink from "./ButtonLink";
import Container from "./Container";

export default function CTASection({
  title = "Ready to Transform Your Factory?",
  text = "Bring quality, production, traceability and live shop-floor intelligence into one connected system.",
  button = "Book a Free Demo",
}) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-gradient-to-br
            from-slate-950
            via-blue-950
            to-blue-700
            px-6
            py-10
            shadow-2xl
            shadow-blue-950/20
            sm:px-10
            sm:py-12
            lg:px-14
            lg:py-14
          "
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-orange-400/15 blur-3xl" />

          {/* Grid pattern */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.07]
              [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              [background-size:32px_32px]
            "
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Content */}
            <div className="max-w-3xl">
              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-blue-100
                  backdrop-blur-sm
                "
              >
                <Factory size={15} />

                Smart Manufacturing
              </div>

              <h2
                className="
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {title}
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-base
                  leading-7
                  text-blue-100
                  sm:text-lg
                "
              >
                {text}
              </p>

              {/* Small capability list */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/90">
                <span>Quality Digitization</span>

                <span className="hidden text-blue-300 sm:inline">•</span>

                <span>Live Production Data</span>

                <span className="hidden text-blue-300 sm:inline">•</span>

                <span>IIoT Integration</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink
                to="/contact"
                variant="orange"
                arrow
                className="
                  min-w-[190px]
                  justify-center
                  shadow-lg
                  shadow-orange-950/20
                "
              >
                {button}
              </ButtonLink>

              <ButtonLink
                to="/solutions"
                className="
                  min-w-[170px]
                  justify-center
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-sm
                  hover:bg-white/20
                "
              >
                Explore Solutions
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}