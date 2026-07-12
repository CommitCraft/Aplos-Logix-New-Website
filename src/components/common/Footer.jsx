import { Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

import { footerColumns, company } from "../../content/site";
import BrandLogo from "./BrandLogo";
import Container from "./Container";

export default function Footer() {
  const uniquePhones = [...new Set(company.phone)];
  const emails = Array.isArray(company.email) ? company.email : [company.email];

  return (
    <footer className="bg-[#04264c] text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.25fr_repeat(3,1fr)_1.35fr]">
        {/* BRAND */}
        <div>
          <BrandLogo light />

          <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100/80">
            Aplos Logix builds IIoT, digital quality and production intelligence
            systems for connected manufacturing operations.
          </p>

          <div className="mt-5 flex gap-2">
            {[Linkedin, Youtube].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <Icon size={17} />
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER LINKS */}
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-black">{column.title}</h3>

            <div className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-sm text-blue-100/75 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-black">Contact</h3>

          <div className="mt-4 space-y-4">
            {/* HEAD OFFICE */}
            {/* <div className="flex gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-orange-400" />

              <div>
                <p className="text-sm font-bold text-white">Head Office</p>
                <p className="mt-1 text-xs leading-5 text-blue-100/70">
                  {company.location}
                </p>
              </div>
            </div> */}

            {/* WORKSHOP */}
            {/* <div className="flex gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-orange-400" />

              <div>
                <p className="text-sm font-bold text-white">Workshop Unit</p>
                <p className="mt-1 text-xs leading-5 text-blue-100/70">
                  {company.workshopLocation}
                </p>
              </div>
            </div> */}

            {/* PHONE */}
            <div className="flex gap-3">
              <Phone size={16} className="mt-1 shrink-0 text-orange-400" />

              <div>
                <p className="text-sm font-bold text-white">Phone</p>

                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                  {uniquePhones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-xs leading-5 text-blue-100/70 transition hover:text-white"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-3">
              <Mail size={16} className="mt-1 shrink-0 text-orange-400" />

              <div>
                <p className="text-sm font-bold text-white">Email</p>

                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                  {emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="text-xs leading-5 text-blue-100/70 transition hover:text-white"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-blue-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aplos Logix Pvt. Ltd. All rights reserved.</p>
          <p>Industrial Quality • IIoT • Production Intelligence</p>
        </Container>
      </div>
    </footer>
  );
}