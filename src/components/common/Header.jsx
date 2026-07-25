import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../../content/site";
import BrandLogo from "./BrandLogo";
import ButtonLink from "./ButtonLink";
import Container from "./Container";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});

  const toggleMobileSubmenu = (label) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const linkClass = ({ isActive }) =>
    `relative inline-flex items-center gap-1 py-2 text-sm font-bold transition ${
      isActive ? "text-orange-600 font-black" : "text-slate-700 hover:text-orange-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl shadow-sm">
      <Container className="flex h-20 items-center justify-between gap-6">
        <BrandLogo />

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0;

            if (!hasChildren) {
              return (
                <NavLink key={item.label} to={item.to} className={linkClass}>
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-2 h-0.5 scale-x-0 bg-orange-600 transition-transform [[aria-current=page]_&]:scale-x-100" />
                </NavLink>
              );
            }

            return (
              <div key={item.label} className="group relative py-5">
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-orange-600 transition"
                >
                  <span>{item.label}</span>
                  <ChevronDown size={14} className="text-slate-400 transition-transform group-hover:rotate-180 group-hover:text-orange-600" />
                </Link>

                {/* Dropdown Submenu Flyout */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl ring-1 ring-slate-900/5 z-50">
                  <div className="space-y-1">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className="group/item flex flex-col rounded-xl p-2.5 transition hover:bg-orange-50/80"
                      >
                        <span className="text-xs font-black text-slate-900 group-hover/item:text-orange-600 transition">
                          {sub.label}
                        </span>
                        {sub.desc && (
                          <span className="mt-0.5 text-[11px] text-slate-500 font-normal leading-tight">
                            {sub.desc}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
          <ButtonLink to="/contact" variant="orange">
            Book Demo
          </ButtonLink>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden hover:bg-slate-50"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <Container className="flex flex-col py-4 space-y-1">
            {navigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = mobileExpanded[item.label];

              if (!hasChildren) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 text-sm font-bold text-slate-800 border-b border-slate-100"
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <div key={item.label} className="border-b border-slate-100 py-1">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-black text-slate-900"
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="p-1 text-slate-500 hover:text-orange-600"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isExpanded ? "rotate-180 text-orange-600" : ""}`}
                      />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-3 pb-2 space-y-1 bg-slate-50 rounded-xl p-2 my-1">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-xs font-bold text-slate-700 hover:text-orange-600"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-3">
              <ButtonLink to="/contact" variant="orange" className="w-full justify-center">
                Book Demo
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
