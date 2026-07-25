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

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: getInitialRequirement(),
    message: "",
    website: "", // Honeypot field (hidden for real users)
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverSuccessMessage, setServerSuccessMessage] = useState("");
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  useEffect(() => {
    const initReq = getInitialRequirement();
    setFormData((prev) => ({ ...prev, requirement: initReq }));

    if (typeParam) {
      const formElem = document.getElementById("contact-form-section");
      if (formElem) {
        formElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [typeParam]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error when user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Client-side field validation
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+\d\s\-\(\)]{7,25}$/;

    if (!formData.name.trim()) {
      errors.name = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number (e.g. +91 98765 43210).";
    }

    if (!formData.requirement) {
      errors.requirement = "Please select a primary requirement.";
    }

    if (!formData.message.trim()) {
      errors.message = "Message details are required.";
    } else if (formData.message.trim().length > 5000) {
      errors.message = "Message cannot exceed 5000 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
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

  // Form Submit Handler
  const onSubmit = async (event) => {
    event.preventDefault();
    setServerSuccessMessage("");
    setServerErrorMessage("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const endpoint = import.meta.env.VITE_CONTACT_API_URL || "/api/contact/send";

      const payload = {
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: `${formHeadline} - ${formData.requirement || "Website Contact"}`,
        service: formData.requirement || "Industrial IIoT Solution",
        requirement: formData.requirement,
        message: formData.message.trim(),
        pageUrl: window.location.href,
        website: formData.website, // Honeypot
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setServerSuccessMessage(data.message || "Thank you. Your enquiry has been submitted successfully.");

        // Clear form after successful submission
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          requirement: getInitialRequirement(),
          message: "",
          website: "",
        });
        setFieldErrors({});
      } else {
        setServerErrorMessage(
          data.message || "An error occurred while submitting your enquiry. Please try again."
        );
      }
    } catch (err) {
      console.error("[Contact Form Client Error]", err);
      setServerErrorMessage(
        "Unable to reach the server at this time. Please check your internet connection or email us directly at info@aploslogix.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {/* Contact Cards Left Column */}
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

            {/* Form Right Column */}
            <form
              onSubmit={onSubmit}
              noValidate
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

              {/* Bot Honeypot Field (Hidden from human visitors) */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <label className="text-xs font-extrabold text-[#04264c]">
                  Your Full Name *
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:ring-2 ${
                      fieldErrors.name
                        ? "border-red-500 bg-red-50/20 focus:ring-red-500/20"
                        : "border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                    }`}
                    placeholder="e.g. Rajesh Kumar"
                  />
                  {fieldErrors.name && (
                    <span className="mt-1 text-[11px] font-bold text-red-600 block">
                      {fieldErrors.name}
                    </span>
                  )}
                </label>

                {/* Company Name */}
                <label className="text-xs font-extrabold text-[#04264c]">
                  Company / Organization Name
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-normal text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="e.g. Apex Appliances Ltd"
                  />
                </label>

                {/* Work Email */}
                <label className="text-xs font-extrabold text-[#04264c]">
                  Work Email Address *
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:ring-2 ${
                      fieldErrors.email
                        ? "border-red-500 bg-red-50/20 focus:ring-red-500/20"
                        : "border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                    }`}
                    placeholder="e.g. rajesh@apexappliances.com"
                  />
                  {fieldErrors.email && (
                    <span className="mt-1 text-[11px] font-bold text-red-600 block">
                      {fieldErrors.email}
                    </span>
                  )}
                </label>

                {/* Phone Number */}
                <label className="text-xs font-extrabold text-[#04264c]">
                  Mobile Phone Number *
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:ring-2 ${
                      fieldErrors.phone
                        ? "border-red-500 bg-red-50/20 focus:ring-red-500/20"
                        : "border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {fieldErrors.phone && (
                    <span className="mt-1 text-[11px] font-bold text-red-600 block">
                      {fieldErrors.phone}
                    </span>
                  )}
                </label>

                {/* Requirement Dropdown */}
                <label className="text-xs font-extrabold text-[#04264c] sm:col-span-2">
                  Select Primary Requirement *
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm font-bold text-slate-900 outline-none transition focus:ring-2 ${
                      fieldErrors.requirement
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                    }`}
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
                  {fieldErrors.requirement && (
                    <span className="mt-1 text-[11px] font-bold text-red-600 block">
                      {fieldErrors.requirement}
                    </span>
                  )}
                </label>

                {/* Project Details Message */}
                <label className="text-xs font-extrabold text-[#04264c] sm:col-span-2">
                  Project Details / Specific Challenges *
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className={`mt-1.5 w-full resize-y rounded-xl border px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:ring-2 ${
                      fieldErrors.message
                        ? "border-red-500 bg-red-50/20 focus:ring-red-500/20"
                        : "border-slate-300 focus:border-orange-500 focus:ring-orange-500/20"
                    }`}
                    placeholder="Describe your manufacturing plant setup, line count, test rig standards, or timeline..."
                  />
                  {fieldErrors.message && (
                    <span className="mt-1 text-[11px] font-bold text-red-600 block">
                      {fieldErrors.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-orange-600/25 transition hover:shadow-xl hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting Enquiry...
                  </>
                ) : (
                  "Submit Inquiry & Request Callback"
                )}
              </button>

              {/* Success Notification Banner */}
              {serverSuccessMessage ? (
                <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-300 p-4 text-xs font-bold text-emerald-900 flex items-center gap-2.5 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  {serverSuccessMessage}
                </div>
              ) : null}

              {/* Error Notification Banner */}
              {serverErrorMessage ? (
                <div className="mt-4 rounded-xl bg-red-50 border border-red-300 p-4 text-xs font-bold text-red-900 flex items-center gap-2.5 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500 shrink-0" />
                  {serverErrorMessage}
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
