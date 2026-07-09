import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../content/site";
import BrandLogo from "./BrandLogo";
import ButtonLink from "./ButtonLink";
import Container from "./Container";

export default function Header() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) => `relative py-2 text-sm font-semibold transition ${isActive ? "text-blue-700" : "text-slate-600 hover:text-blue-700"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-6">
        <BrandLogo />
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
              <span className="absolute inset-x-0 -bottom-2 h-0.5 scale-x-0 bg-blue-600 transition-transform [[aria-current=page]_&]:scale-x-100" />
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block"><ButtonLink to="/contact" variant="orange">Book Demo</ButtonLink></div>
        <button onClick={() => setOpen((v) => !v)} className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </Container>
      {open ? (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <Container className="flex flex-col py-4">
            {navigation.map((item) => <NavLink onClick={() => setOpen(false)} key={item.to} to={item.to} className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700">{item.label}</NavLink>)}
            <ButtonLink to="/contact" variant="orange" className="mt-4">Book Demo</ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
