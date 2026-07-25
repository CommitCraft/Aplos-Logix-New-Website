import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../components/common/Container";
import FeatureCard from "../components/common/FeatureCard";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import CTASection from "../components/common/CTASection";
import {
  contactHero,
  contactCards,
  helpCards,
  requirementOptions,
} from "../content/contact";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type");

  // Determine initial selected requirement based on typeParam
  const getInitialRequirement = () => {
    if (typeParam === "assessment") return "Factory Assessment & IIoT Audit";
    if (typeParam === "demo") return "Book Live IIoT & DigiQA Demo";
    if (typeParam === "support") return "Technical Support & SLA Inquiry";
    return "";
  };

  const [selectedRequirement, setSelectedRequirement] = useState(getInitialRequirement());
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedRequirement(getInitialRequirement());
    if (typeParam) {
      const formElem = document.getElementById("contact-form-section");
      if (formElem) {
        formElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [typeParam]);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  // Dynamic header titles based on inquiry type
  const formHeadline = typeParam === "assessment"
    ? "Schedule On-site Factory Assessment"
    : typeParam === "demo"
    ? "Book a Live IIoT Platform Demo"
    : typeParam === "support"
    ? "Contact Technical Support & Engineering"
    : "Send Us a Message";

  const formSubtext = typeParam === "assessment"
    ? "Request an on-site audit of your shop-floor machines, test panels & quality workflows."
    : typeParam === "demo"
    ? "Schedule a live 1-on-1 walkthrough of DigiQA, OEE telemetry, ANDON & test rig features."
    : typeParam === "support"
    ? "Direct engineering support line for existing deployments, SLA inquiries & hardware sync."
    : "Fill in the form and our engineering team will get back to you promptly.";

  return (
    <main>
      <PageHero
        page="Contact Us"
        title={contactHero.title}
        description={contactHero.description}
        image={contactHero.image}
      />

      <section id="contact-form-section" className="py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md shadow-orange-600/20">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h2 className="font-black text-[#04264c]">{card.title}</h2>
                      {card.lines.map((line) => (
                        <p key={line} className="mt-1 text-xs text-slate-600 leading-relaxed font-medium">
                          {line}
                        </p>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-950/5 sm:p-8"
            >
              <span className="inline-block rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-orange-700 mb-2">
                {typeParam ? `Inquiry Mode: ${typeParam.toUpperCase()}` : "Direct Contact"}
              </span>

              <h2 className="text-2xl font-black text-[#04264c]">
                {formHeadline}
              </h2>
              <p className="mt-1.5 text-xs text-slate-600 font-medium leading-relaxed">
                {formSubtext}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-extrabold text-[#04264c]">
                  Your Full Name *
                  <input
                    required
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-normal text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="e.g. Rajesh Kumar"
                  />
                </label>

                <label className="text-xs font-extrabold text-[#04264c]">
                  Company / Organization Name *
                  <input
                    required
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-normal text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="e.g. Apex Appliances Ltd"
                  />
                </label>

                <label className="text-xs font-extrabold text-[#04264c]">
                  Work Email Address *
                  <input
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-normal text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="e.g. rajesh@apexappliances.com"
                  />
                </label>

                <label className="text-xs font-extrabold text-[#04264c]">
                  Mobile Phone Number *
                  <input
                    required
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-normal text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="+91 98765 43210"
                  />
                </label>

                <label className="text-xs font-extrabold text-[#04264c] sm:col-span-2">
                  Select Primary Requirement *
                  <select
                    required
                    value={selectedRequirement}
                    onChange={(e) => setSelectedRequirement(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="" disabled>
                      Select primary requirement
                    </option>
                    {requirementOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-xs font-extrabold text-[#04264c] sm:col-span-2">
                  Project Details / Specific Challenges
                  <textarea
                    rows="4"
                    className="mt-1.5 w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm font-normal text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Describe your manufacturing plant setup, line count, test rig standards, or timeline..."
                  />
                </label>
              </div>

              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-orange-600/25 transition hover:shadow-xl hover:scale-[1.01]">
                Submit Inquiry &amp; Request Callback
              </button>

              {submitted ? (
                <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-xs font-bold text-emerald-800 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  Thank you! Your inquiry has been submitted. Our engineering team will contact you shortly.
                </div>
              ) : null}
            </form>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12">
        <Container>
          <SectionHeading
            eyebrow="Start the Right Conversation"
            title="How Can We"
            highlight="Help You?"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {helpCards.map((item) => (
              <FeatureCard key={item.title} {...item} compact />
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Need Immediate Assistance?" />
    </main>
  );
}
