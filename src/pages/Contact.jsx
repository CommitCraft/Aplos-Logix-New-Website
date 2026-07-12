import { useState } from "react";
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
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <main>
      <PageHero
        page="Contact Us"
        title={contactHero.title}
        description={contactHero.description}
        image={contactHero.image}
      />
      <section className="py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h2 className="font-black text-blue-950">{card.title}</h2>
                      {card.lines.map((line) => (
                        <p key={line} className="mt-1 text-sm text-slate-600">
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
              <h2 className="text-2xl font-black text-blue-950">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Fill in the form and our team will get back to you.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-bold text-blue-950">
                  Your Name
                  <input
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </label>
                <label className="text-sm font-bold text-blue-950">
                  Company Name
                  <input
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500"
                    placeholder="Enter company name"
                  />
                </label>
                <label className="text-sm font-bold text-blue-950">
                  Email Address
                  <input
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500"
                    placeholder="Enter email address"
                  />
                </label>
                <label className="text-sm font-bold text-blue-950">
                  Phone Number
                  <input
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500"
                    placeholder="Enter phone number"
                  />
                </label>
                <label className="text-sm font-bold text-blue-950 sm:col-span-2">
                  Select Requirement
                  <select
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Select primary requirement
                    </option>
                    {requirementOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-bold text-blue-950 sm:col-span-2">
                  Your Message
                  <textarea
                    rows="5"
                    className="mt-2 w-full resize-y rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500"
                    placeholder="Tell us about your requirement, challenges and goals..."
                  />
                </label>
              </div>
              <button className="mt-5 w-full rounded-lg bg-blue-700 px-5 py-3.5 text-sm font-black text-white transition hover:bg-blue-800">
                Submit Message
              </button>
              {submitted ? (
                <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
                  Thanks. This demo form is ready to connect to your backend
                  API.
                </p>
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
      <CTASection
        title="Need Immediate Help?"
        text="Book a focused consultation for DigiQA, EMS, QMS, OEE, ANDON or test automation requirements."
        button="Book Demo"
      />
    </main>
  );
}
