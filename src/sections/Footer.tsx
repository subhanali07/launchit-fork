import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#projects" },
  { label: "FAQs", to: "/#faqs" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#1C1C1C] px-6 pb-8 pt-16 sm:px-14 sm:pt-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              to="/"
              aria-label="Launchit home"
              className={`${FONT} text-4xl font-black tracking-tight text-white`}
            >
              launchit<span className="text-[#CFFF04]">.</span>
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
              An independent creative studio for new startups :3
            </p>
            <a
              href="mailto:hello@launchit.com"
              className="group mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-[#CFFF04]"
            >
              hello@launchit.com
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="md:col-span-3">
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[15px] text-white/70 transition-colors duration-300 hover:text-[#CFFF04]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#CFFF04]">
              Get in touch
            </p>
            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#CFFF04] px-6 py-3.5 text-sm font-semibold text-[#1C1C1C] transition-transform duration-300 hover:scale-[1.03]"
            >
              Start a project
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="text-[#FF2E91] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Launchit. All rights reserved.
            </p>
            <Link
              to="/privacy"
              className="text-sm text-white/50 underline-offset-4 transition-colors duration-300 hover:text-[#CFFF04] hover:underline"
            >
              Privacy policy
            </Link>
          </div>
          <p className="text-sm text-white/50">made by aleeza</p>
        </div>
      </div>
    </footer>
  );
}
