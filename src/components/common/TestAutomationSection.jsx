import React from "react";

import {
  ArrowRight,
  CheckCircle2,
  Cpu,
} from "lucide-react";

import { Link } from "react-router-dom";

import { testAutomationData } from "../../content/testAutomationData";


function TestAutomationSection() {
  const {
    eyebrow,
    title,
    description,
    benefits,
    panelVisual,
    tests,
    possibilities,
    process,
    cta,
  } = testAutomationData;


  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 lg:px-8">

      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

        {/* LEFT CONTENT */}

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            {eyebrow}
          </p>

          <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
            {title}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            {description}
          </p>


          {/* BENEFITS */}

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">

            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="
                    rounded-xl
                    border border-slate-200
                    bg-white
                    p-4
                    transition
                    duration-300

                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-md
                  "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">

                    <Icon
                      size={19}
                      className="text-blue-600"
                    />

                  </div>


                  <h3 className="mt-3 text-sm font-bold text-slate-950">
                    {item.title}
                  </h3>


                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            PANEL VISUAL
        ===================================================== */}

        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-950 via-blue-950 to-blue-700 p-6 text-white md:p-8">

          {/* BACKGROUND EFFECTS */}

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />


          <div className="relative z-10">

            {/* PANEL HEADER */}

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">

                <Cpu size={24} />

              </div>


              <div>

                <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
                  {panelVisual.eyebrow}
                </p>


                <h3 className="mt-1 text-xl font-black md:text-2xl">
                  {panelVisual.title}
                </h3>


                <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100/90">
                  {panelVisual.description}
                </p>

              </div>

            </div>


            {/* =================================================
                METRICS
            ================================================= */}

            <div className="mt-7 grid grid-cols-3 gap-3">

              {panelVisual.metrics.map((metric) => (

                <article
                  key={metric.label}
                  className="
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    p-3
                    text-center
                    backdrop-blur-sm
                  "
                >

                  <p className="text-xl font-black text-white md:text-2xl">
                    {metric.value}
                  </p>


                  <p className="mt-1 text-[11px] leading-4 text-blue-200">
                    {metric.label}
                  </p>

                </article>

              ))}

            </div>


            {/* =================================================
                CAPABILITIES
            ================================================= */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {panelVisual.capabilities.map((item) => (

                <article
                  key={item.title}
                  className="
                    group
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    p-4
                    backdrop-blur-sm
                    transition
                    duration-300

                    hover:border-white/20
                    hover:bg-white/10
                  "
                >

                  <div className="flex items-start gap-3">

                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">

                      <CheckCircle2
                        size={16}
                        className="text-cyan-300"
                      />

                    </div>


                    <div>

                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>


                      <p className="mt-1.5 text-xs leading-5 text-blue-100/75">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </article>

              ))}

            </div>


            {/* =================================================
                STATUS BAR
            ================================================= */}

            <div className="mt-6 flex flex-col gap-3 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-2">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />

                </span>


                <span className="text-xs font-semibold text-cyan-100">
                  {panelVisual.status.label}
                </span>

              </div>


              <span className="text-xs text-blue-200">
                {panelVisual.status.flow}
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          TESTS INCLUDED
      ===================================================== */}

      <div className="mt-14">

        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Testing Capabilities
        </p>


        <h3 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
          Tests Included
        </h3>


        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
          Complete electrical safety and performance testing capabilities
          integrated into a connected and automated test workflow.
        </p>


        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {tests.map((test) => {
            const Icon = test.icon;

            return (
              <article
                key={test.title}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border border-slate-200
                  bg-slate-50
                  p-4
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:bg-white
                  hover:shadow-md
                "
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">

                  <Icon
                    size={20}
                    className="text-blue-600"
                  />

                </div>


                <p className="text-sm font-semibold leading-5 text-slate-800">
                  {test.title}
                </p>

              </article>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          ENDLESS POSSIBILITIES
      ===================================================== */}

      <div className="mt-14 rounded-3xl bg-linear-to-br from-blue-50 to-cyan-50 p-6 md:p-8">

        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Connected Intelligence
        </p>


        <h3 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
          Endless Possibilities
        </h3>


        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Extend test automation beyond testing with connected reporting,
          traceability, labeling, alerts and real-time production intelligence.
        </p>


        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {possibilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  rounded-xl
                  border border-white
                  bg-white/80
                  p-4
                  shadow-sm
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-md
                "
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">

                  <Icon
                    size={20}
                    className="text-blue-600"
                  />

                </div>


                <p className="mt-3 text-sm font-semibold leading-5 text-slate-800">
                  {item.title}
                </p>

              </article>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <div className="mt-14">

        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Working Process
        </p>


        <h3 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
          From Testing to Insights
        </h3>


        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
          A connected workflow that takes each product from identification
          through testing, validation, traceability and reporting.
        </p>


        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {process.map((step) => (

            <article
              key={step.number}
              className="
                group
                relative
                rounded-xl
                border border-slate-200
                bg-white
                p-4
                transition
                duration-300

                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-lg
              "
            >

              <span className="text-xs font-black text-blue-600">
                {step.number}
              </span>


              <h4 className="mt-3 text-sm font-bold text-slate-950">
                {step.title}
              </h4>


              <p className="mt-2 text-xs leading-5 text-slate-500">
                {step.description}
              </p>

            </article>

          ))}

        </div>

      </div>


      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="mt-14 rounded-3xl bg-linear-to-r from-blue-800 via-blue-600 to-cyan-500 px-6 py-10 text-white md:px-10">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div className="max-w-2xl">

            <h3 className="text-3xl font-black md:text-4xl">
              {cta.title}
            </h3>


            <p className="mt-3 text-sm leading-6 text-blue-100">
              {cta.description}
            </p>

          </div>


          <div className="flex flex-wrap gap-3">

            <Link
              to={cta.primaryCTA.to}
              className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
            >
              {cta.primaryCTA.label}
            </Link>


            <Link
              to={cta.secondaryCTA.to}
              className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
            >
              {cta.secondaryCTA.label}

              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}


export default TestAutomationSection;