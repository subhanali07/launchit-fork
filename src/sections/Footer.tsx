import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { industries } from "../lib/industries";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const NAV = [
  { label: "Home", to: "/#hero" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#featured" },
  { label: "FAQs", to: "/#faqs" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="w-full bg-(--surface) px-6 pb-8 pt-16 sm:px-14 sm:pt-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              aria-label="Launchit home"
              className={`${FONT} text-4xl font-black tracking-tight text-(--text)`}
            >
              launchit<span className="text-(--lime-text)">.</span>
            </Link>
            <p className="mt-5 max-w-xs text-lg leading-relaxed text-(--text-muted)">
              A web development agency building custom sites, stores and SEO for
              new startups :3
            </p>
          </div>

          <div className="md:col-span-2">
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={
                      item.to.startsWith("/#")
                        ? (e) => {
                            const id = item.to.split("#")[1];
                            if (window.location.pathname === "/") {
                              e.preventDefault();
                              const el = document.getElementById(id);
                              if (el) {
                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                              } else {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }
                            }
                          }
                        : undefined
                    }
                    className="text-lg text-(--text-muted) transition-colors duration-300 hover:text-(--lime-text)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-(--lime-text)">
              Websites by industry
            </p>
            <ul className="mt-5 space-y-3">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="text-lg text-(--text-muted) transition-colors duration-300 hover:text-(--lime-text)"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-(--lime-text)">
              Get in touch
            </p>
            <a
              href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'launchitweb@gmail.com'}`}
              className="mt-5 block w-fit text-lg font-semibold text-(--text) transition-colors duration-300 hover:text-(--lime-text)"
            >
              {import.meta.env.VITE_CONTACT_EMAIL || 'launchitweb@gmail.com'}
            </a>
            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#CFFF04] px-6 py-3.5 text-base font-semibold text-[#1C1C1C] transition-transform duration-300 hover:scale-[1.03]"
            >
              Start a project
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="text-(--pink-text) transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-(--border) pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-base text-(--text-faint)">
              © {new Date().getFullYear()} Launchit. All rights reserved.
            </p>
            <Link
              to="/privacy"
              className="text-base text-(--text-faint) underline-offset-4 transition-colors duration-300 hover:text-(--lime-text) hover:underline"
            >
              Privacy policy
            </Link>
          </div>
          <p className="text-base text-(--text-faint)">made by aleeza</p>
        </div>
      </div>
    </footer>
  );
}
