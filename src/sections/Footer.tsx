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

const SOCIALS = ["Instagram", "LinkedIn", "X", "YouTube"];

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

          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#CFFF04]">
              Sitemap
            </p>
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

          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#CFFF04]">
              Social
            </p>
            <ul className="mt-5 space-y-3">
              {SOCIALS.map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-[15px] text-white/70 transition-colors duration-300 hover:text-[#CFFF04]"
                  >
                    {social}
                  </a>
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
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Launchit. All rights reserved.
          </p>
          <p className="text-sm text-white/50">made by aleeza</p>
        </div>
      </div>
    </footer>
  );
}
