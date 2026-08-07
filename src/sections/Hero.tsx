import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "HOME", number: "2" },
  { label: "PROJECTS", number: "10" },
  { label: "SERVICES", number: "12" },
  { label: "FAQS", number: "16" },
  { label: "CONTACT US", number: "19" },
];

 function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#1b1b1b] px-4 pt-5">
      <nav className="relative z-20 mb-4 flex h-8 items-center justify-between sm:mb-5">
        <div className="flex-1 flex justify-center">
          <div className="flex translate-x-5 items-center gap-2 text-[#5D00FF] sm:translate-x-7">
            <span className="h-px w-32 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-72" />
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="p-1 text-white mt-8 "
        >
          {menuOpen ? (
            <X size={30} strokeWidth={1.8} />
          ) : (
            <Menu size={66} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      <div className="relative flex flex-1 flex-col rounded-t-[34px] bg-[#CFFF04] mt-8 px-6 pb-10 pt-16 text-black sm:px-9 sm:pb-14 sm:pt-14 md:px-[5.5%] md:pt-12">
        <h1 className="select-none text-[#1b1b1b] text-center font-[Arial_Rounded_MT_Bold,Arial,sans-serif] text-[clamp(5.5rem,19vw,17rem)] font-black leading-[0.85] mt-10 tracking-[-0.085em]">
          launchit.
        </h1>

        <div className="mx-auto mt-8 grid w-full max-w-[920px] flex-1 grid-cols-1 content-start items-center gap-6 sm:mt-5 sm:grid-cols-[1fr_auto] md:mt-3">
          <div className="flex max-w-[650px] flex-wrap items-center gap-x-4 gap-y-3">
            <p className="max-w-[450px] text-xl font-medium leading-[1.45] sm:text-2xl md:text-[1.6rem]">
              Creating your brand presence from web to social media.
            </p>
            <button
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-full border border-black px-5 py-2.5 text-base font-medium transition-colors hover:bg-black hover:text-[#CFFF04] sm:text-lg"
            >
              <ArrowUpRight className="text-[#FF2E91]" size={18} strokeWidth={2} />
              book mine
            </button>
          
          </div>

          <span className="text-left text-xl font-extrabold uppercase leading-[1.15] sm:text-2xl">
            Creative
            <br />
            Agency
          </span>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-neutral-900 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 sm:px-14 sm:py-10">
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 text-[#CFFF04]">
              <span className="h-px w-24 sm:w-40 bg-[#CFFF04]" />
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="text-white p-2"
          >
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        <ul className="flex flex-col mt-4">
          {NAV_ITEMS.map((item) => {
            const isActive = item.label === activeSection;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSection(item.label);
                    setMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-6 sm:px-14 py-4 sm:py-5 text-left transition-colors ${
                    isActive
                      ? "bg-[#CFFF04] text-black"
                      : "bg-transparent text-white hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${
                      isActive ? "text-black/60" : "text-[#CFFF04]"
                    }`}
                  >
                    /{item.number}
                  </span>
                  <span
                    className={`font-black uppercase tracking-tight ${
                      isActive ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Hero;
