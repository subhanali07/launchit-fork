import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom-built sites that load fast, scale clean, and actually work the way you need them to.",
    accent: "#CFFF04",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Storefronts, checkout flows, and product pages built to actually convert.",
    accent: "#FF2E91",
  },
  {
    number: "03",
    title: "Portfolios",
    description:
      "Clean, personal sites that put your work front and center without the clutter.",
    accent: "#5D00FF",
  },
  {
    number: "04",
    title: "Social Media Management",
    description:
      "Content, posting, and strategy handled so your brand shows up consistently everywhere.",
    accent: "#CFFF04",
  },
  {
    number: "05",
    title: "SEO",
    description:
      "Technical fixes, on-page optimization, and ongoing tuning to get your site found.",
    accent: "#FF2E91",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#1C1C1C] w-full px-6 py-16 sm:px-14 sm:py-24">
      <div className="flex items-center justify-between mb-12 sm:mb-20 flex-wrap gap-4">
        <div className="flex items-center gap-2 text-[#CFFF04]">
          <span className="h-px w-24 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-40" />
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </div>
        <span className="text-white text-xs font-medium">/12</span>
      </div>

      <div className="flex items-end justify-between flex-wrap gap-6 mb-14 sm:mb-20">
        <h2 className="font-black tracking-tight text-white leading-none text-5xl sm:text-7xl md:text-8xl">
          services
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-xs">
          Everything your brand needs to show up online, built and run in one
          place.
        </p>
      </div>

      <div className="flex flex-col rounded-3xl overflow-hidden border border-white/10">
        {SERVICES.map((service, index) => {
          const isActive = index === active;
          const textColor = service.accent === "#CFFF04" ? "#1C1C1C" : "#FFFFFF";

          return (
            <button
              key={service.number}
              type="button"
              onClick={() => setActive(index)}
              className="w-full text-left transition-colors duration-300"
              style={{
                backgroundColor: isActive ? service.accent : "transparent",
                borderTop: index === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-center gap-4 sm:gap-8 px-6 sm:px-10 py-6 sm:py-8">
                <span
                  className="font-black text-sm sm:text-base w-8 sm:w-10 shrink-0"
                  style={{ color: isActive ? textColor : service.accent }}
                >
                  {service.number}
                </span>

                <h3
                  className="font-black uppercase tracking-tight leading-none text-2xl sm:text-4xl md:text-5xl flex-1"
                  style={{ color: isActive ? textColor : "#FFFFFF" }}
                >
                  {service.title}
                </h3>

                <ArrowUpRight
                  size={24}
                  strokeWidth={2}
                  className="shrink-0 transition-transform duration-300"
                  style={{
                    color: isActive ? textColor : "rgba(255,255,255,0.3)",
                    transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                />
              </div>

              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{
                  gridTemplateRows: isActive ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <p
                    className="px-6 sm:px-10 pb-6 sm:pb-8 sm:pl-[4.5rem] max-w-lg text-sm sm:text-base leading-relaxed"
                    style={{ color: isActive ? textColor : "transparent", opacity: isActive ? 0.75 : 0 }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-14 sm:mt-20 flex justify-center">
        <button
          type="button"
          className="flex items-center gap-1.5 border border-[#CFFF04] rounded-full px-6 py-2.5 text-[#CFFF04] text-sm font-semibold hover:bg-[#CFFF04] hover:text-black transition-colors"
        >
          see what fits
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}