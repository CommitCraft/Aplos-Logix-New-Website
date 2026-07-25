import { ChevronRight, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

import { footerColumns, company } from "../../content/site";
import BrandLogo from "./BrandLogo";
import Container from "./Container";

export default function Footer() {
  const uniquePhones = [...new Set(company.phone)];
  const emails = Array.isArray(company.email) ? company.email : [company.email];

  return (
    <footer className="bg-[#021329] text-white border-t border-slate-800">
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,1fr)] xl:grid-cols-[1.4fr_repeat(4,1fr)]">
        {/* BRAND PROFILE */}
        <div>
          <BrandLogo light />

          <p className="mt-4 max-w-xs text-xs leading-6 text-slate-300 font-medium">
            Aplos Logix builds IIoT, digital quality and production intelligence
            systems for connected manufacturing operations.
          </p>

          {/* Social Badges */}
          <div className="mt-6 flex gap-3">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Youtube, href: "#", label: "YouTube" },
            ].map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.label}
                  href={soc.href}
                  aria-label={soc.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-slate-200 transition hover:bg-orange-600 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* Direct Support Box */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur">
            <p className="text-[11px] font-black uppercase tracking-wider text-orange-400">Direct Engineering Line</p>
            <p className="mt-1 text-xs font-bold text-white">{company.phone[0]}</p>
            <p className="mt-0.5 text-[10px] text-slate-400">{company.hours}</p>
          </div>
        </div>

        {/* 4 FOOTER MENU COLUMNS */}
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-xs font-black uppercase tracking-wider text-orange-400 border-b border-white/10 pb-2">
              {column.title}
            </h3>

            <div className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="group flex items-center gap-1.5 text-xs text-slate-300 font-medium transition hover:text-orange-400 hover:translate-x-1.5"
                >
                  <ChevronRight size={12} className="text-slate-500 transition group-hover:text-orange-400 shrink-0" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Container>

      {/* LOCATIONS & CONTACT SUB-STRIP */}
      <div className="border-t border-slate-800/80 bg-slate-950/80 py-8">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-xs">
          {/* Head Office */}
          <div className="flex gap-3">
            <MapPin size={16} className="mt-0.5 shrink-0 text-orange-400" />
            <div>
              <p className="font-bold text-white">Head Office</p>
              <p className="mt-0.5 text-[11px] leading-4 text-slate-400">
                {company.location}
              </p>
            </div>
          </div>

          {/* Workshop Unit */}
          <div className="flex gap-3">
            <MapPin size={16} className="mt-0.5 shrink-0 text-amber-400" />
            <div>
              <p className="font-bold text-white">Workshop Unit</p>
              <p className="mt-0.5 text-[11px] leading-4 text-slate-400">
                {company.workshopLocation}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-3">
            <Phone size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            <div>
              <p className="font-bold text-white">Phones</p>
              <div className="mt-0.5 flex flex-wrap gap-x-2 gap-y-1">
                {uniquePhones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-[11px] text-slate-300 hover:text-orange-400 transition"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3">
            <Mail size={16} className="mt-0.5 shrink-0 text-cyan-400" />
            <div>
              <p className="font-bold text-white">Email Us</p>
              <div className="mt-0.5 flex flex-wrap gap-x-2 gap-y-1">
                {emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="text-[11px] text-slate-300 hover:text-orange-400 transition"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-slate-900 bg-slate-950 py-4">
        <Container className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between font-medium">
          <p>© 2026 Aplos Logix Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-[11px]">
            <Link to="/solutions" className="hover:text-white transition">IIoT Solutions</Link>
            <span>•</span>
            <Link to="/digiqa" className="hover:text-white transition">DigiQA Suite</Link>
            <span>•</span>
            <Link to="/test-rig" className="hover:text-white transition">Test Rig Bench</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}