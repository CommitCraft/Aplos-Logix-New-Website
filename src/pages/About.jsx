import { ArrowRight, Check, Quote } from "lucide-react";

import {
  aboutHero,
  aboutIntro,
  missionSection,
  philosophy,
  coreValues,
  impactStats,
  iiotExcellence,
  vision2030,
  technologyExcellence,
  futureSection,
} from "../content/about";

import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import CustomerShowcase from "../components/common/CustomerShowcase";
import PromiseGrid from "../components/common/PromiseGrid";
import CTASection from "../components/common/CTASection";
import DashboardMockup from "../components/common/DashboardMockup";
import IIoTVennDiagram from "../components/common/IIoTVennDiagram";

export default function About() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
        highlight={aboutHero.highlight}
        description={aboutHero.description}
        image={aboutHero.image}
        bullets={aboutHero.points}
        imageAlt={aboutHero.imageAlt}
      />

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="relative">
              <SectionHeading
                eyebrow={aboutIntro.eyebrow}
                title={aboutIntro.title}
                highlight={aboutIntro.highlight}
              />

              <div className="relative mt-8 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-4 shadow-xl shadow-blue-950/5 sm:p-6">
                {/* Decorative background */}
                <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-orange-200/30 blur-3xl" />

                {/* Dashboard */}
                <div className="relative z-10 mx-auto w-full max-w-3xl">
                  <DashboardMockup />
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {/* About Paragraphs */}
              {aboutIntro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-slate-600 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              {/* Core Values */}
              <div>
                <h3 className="text-2xl font-black tracking-tight text-blue-950 sm:text-3xl">
                  {aboutIntro.coreValues.heading}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                  {aboutIntro.coreValues.description}
                </p>

                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {aboutIntro.coreValues.items.map((item) => (
                    <li
                      key={item.title}
                      className="
            group
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-200
            hover:shadow-lg
            hover:shadow-blue-950/5
          "
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="
                mt-2
                h-2.5
                w-2.5
                shrink-0
                rounded-full
                bg-orange-500
                ring-4
                ring-orange-100
              "
                        />

                        <div>
                          <h4 className="font-black text-blue-950">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}

      <section className="bg-slate-50 py-6 lg:py-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow={missionSection.eyebrow}
                title={missionSection.title}
                highlight={missionSection.highlight}
                description={missionSection.description}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {missionSection.points.map((point) => (
                <div
                  key={point}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                    shadow-sm
                  "
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <Check size={15} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          PHILOSOPHY QUOTE
      ====================================================== */}

      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] bg-blue-950 px-7 py-10 text-white sm:px-12 lg:px-16 lg:py-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative z-10 max-w-4xl">
              <Quote size={42} className="mb-6 text-orange-400" />

              <blockquote className="text-2xl font-bold leading-relaxed sm:text-3xl lg:text-4xl">
                “{philosophy.quote}”
              </blockquote>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
                {philosophy.author}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CORE VALUES
      ====================================================== */}

      <section className="bg-slate-50 py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Our Core Values"
              title="Principles That Guide"
              highlight="Every Solution We Build"
              description="Our technology and implementation decisions are guided by simplicity, reliability, security and long-term scalability."
              align="center"
            />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-xl
                    hover:shadow-blue-950/5
                  "
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={22} />
                  </span>

                  <h3 className="mt-6 text-lg font-black text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="py-12">
        <Container>
          <div className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="border-white/10 px-8 py-9 text-center text-white sm:border-r last:border-r-0"
              >
                <div className="text-4xl font-black sm:text-5xl">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm font-semibold text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          IIOT EXCELLENCE
      ====================================================== */}

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow={iiotExcellence.eyebrow}
              title={iiotExcellence.title}
              highlight={iiotExcellence.highlight}
              description={iiotExcellence.description}
              align="center"
            />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {iiotExcellence.stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.title}
                  className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-blue-100
                    bg-white
                    p-7
                    shadow-sm
                  "
                >
                  <div className="absolute right-5 top-4 text-6xl font-black text-blue-50">
                    {stage.number}
                  </div>

                  <div className="relative">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                      <Icon size={24} />
                    </span>

                    <h3 className="mt-6 text-xl font-black text-blue-950">
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {stage.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {stage.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =====================================================
          VISION 2030
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-16 text-white lg:py-24">
  {/* Background decoration */}
  <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

  <Container>
    <div className="relative z-10">
      
      {/* Main content + diagram */}
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        
        {/* Left Content */}
        <div>
          <SectionHeading
            eyebrow={vision2030.eyebrow}
            title={vision2030.title}
            highlight={vision2030.highlight}
            description={vision2030.description}
            titleClassName="text-white"
          />

          <p className="mt-7 max-w-3xl border-l-4 border-orange-400 pl-5 text-lg font-semibold leading-8 text-slate-200">
            {vision2030.statement}
          </p>

          {/* Small info tags */}
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-blue-100">
              Connected Factory
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-blue-100">
              Real-Time Intelligence
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-blue-100">
              AI-Ready Architecture
            </span>
          </div>
        </div>

        {/* IIoT Diagram */}
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-6">
          <IIoTVennDiagram />
        </div>
      </div>


      {/* Metrics - Single Row */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {vision2030.metrics.map((metric) => (
          <div
            key={metric.label}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.06]
              p-6
              text-center
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-400/30
              hover:bg-white/[0.09]
            "
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-orange-400/15" />

            <div className="relative z-10">
              <div className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                {metric.value}
              </div>

              <div className="mt-2 text-sm font-semibold text-slate-300">
                {metric.label}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </Container>
</section>

      {/* =====================================================
          TECHNOLOGY EXCELLENCE
      ====================================================== */}

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow={technologyExcellence.eyebrow}
              title={technologyExcellence.title}
              highlight={technologyExcellence.highlight}
              description={technologyExcellence.description}
              align="center"
            />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologyExcellence.items.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Icon size={22} />
                  </span>

                  <h3 className="mt-5 text-lg font-black text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =====================================================
          APLOS PHILOSOPHY
      ====================================================== */}

      <PromiseGrid />

      {/* =====================================================
          CUSTOMERS
      ====================================================== */}

      <CustomerShowcase />

      {/* =====================================================
          FUTURE CTA
      ====================================================== */}

      <CTASection
        title={futureSection.title}
        text={futureSection.description}
        button="Talk to Our Team"
      />
    </>
  );
}
