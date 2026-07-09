import { Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { footerColumns, company } from "../../content/site";
import BrandLogo from "./BrandLogo";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#04264c] text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.25fr_repeat(3,1fr)_1.2fr]">
        <div>
          <BrandLogo light />
          <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100/80">Aplos Logix builds IIoT, digital quality and production intelligence systems for connected manufacturing operations.</p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Youtube].map((Icon, i) => <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Icon size={17} /></span>)}
          </div>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-black">{column.title}</h3>
            <div className="mt-4 space-y-2.5">
              {column.links.map((link) => <Link key={link.label} to={link.to} className="block text-sm text-blue-100/75 hover:text-white">{link.label}</Link>)}
            </div>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-black">Contact</h3>
          <p className="mt-4 text-sm leading-6 text-blue-100/75">{company.name}<br />{company.location}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-blue-100/75"><Phone size={15} /> {company.phone}</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-blue-100/75"><Mail size={15} /> {company.email}</p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-blue-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aplos Logix Pvt. Ltd. All rights reserved.</p>
          <p>Industrial Quality • IIoT • Production Intelligence</p>
        </Container>
      </div>
    </footer>
  );
}
