import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  LayoutTemplate,
  TrendingUp,
  ShoppingBag,
  Share2,
  Briefcase,
  Rocket,
} from "lucide-react";
import { Footer } from "../sections/Footer";

const SERVICES = [
  {
    title: "Web Design",
    Icon: LayoutTemplate,
    bg: "#1C1C1C",
    text: "#FFFFFF",
    desc: "Custom websites engineered to convert, from high-impact landing pages to full-scale web experiences, built for speed, elegance and results.",
  },
  {
    title: "SEO",
    Icon: TrendingUp,
    bg: "#CFFF04",
    text: "#1C1C1C",
    desc: "Data-driven search optimization that puts you on top. Technical audits, keyword strategy and content that ranks and stays ranked.",
  },
  {
    title: "E-commerce",
    Icon: ShoppingBag,
    bg: "#1C1C1C",
    text: "#FFFFFF",
    desc: "High-converting online stores built to sell. From product catalogs to seamless checkout, e-commerce experiences that turn visitors into customers.",
  },
  {
    title: "Social Media Marketing",
    Icon: Share2,
    bg: "#FF2E91",
    text: "#FFFFFF",
    desc: "Scroll-stopping content and community strategy that grows real, engaged audiences across every platform that matters.",
  },
  {
    title: "Portfolio Sites",
    Icon: Briefcase,
    bg: "#1C1C1C",
    text: "#FFFFFF",
    desc: "Showcase sites that make your work impossible to ignore. Clean, fast and tailored to put your projects front and center.",
  },
  {
    title: "SaaS",
    Icon: Rocket,
    bg: "#5D00FF",
    text: "#FFFFFF",
    desc: "Scalable web applications and SaaS platforms designed to grow. We turn complex features into simple, fast products users love.",
  },
];

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-[#1b1b1b] text-white">
      <nav className="flex h-20 items-center justify-between px-6 sm:px-10">
        <Link
          to="/"
          aria-label="Launchit home"
          className={`${FONT} text-2xl font-black tracking-tight text-[#CFFF04]`}
        >
          launchit.
        </Link>
        <Link
          to="/"
          className="mr-14 flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white hover:text-black sm:mr-16"
        >
          <ArrowUpRight size={16} />
          back home
        </Link>
      </nav>

      <header className="px-6 pt-14 pb-14 sm:px-10 sm:pt-20 sm:pb-16 md:px-[5.5%]">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CFFF04]">
          services
        </p>
        <h1
          className={`${FONT} mt-4 text-[clamp(2.8rem,9vw,7rem)] font-black leading-[0.9] tracking-[-0.06em]`}
        >
          what we <span className="text-[#FF2E91]">do</span>
        </h1>
        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/70 sm:text-lg">
          From brand presence to launch, everything you need to build,
          grow and scale your presence online.
        </p>
      </header>

      <main className="grid grid-cols-1 px-4 pb-8 sm:grid-cols-2 sm:px-6 md:grid-cols-3 md:px-10 gap-[2px] bg-white/10">
        {SERVICES.map((service) => {
          const { Icon } = service;
          return (
            <article
              key={service.title}
              className="group flex flex-col gap-6 p-8 transition-transform duration-300 hover:scale-[0.98] sm:p-10"
              style={{ backgroundColor: service.bg }}
            >
              <Icon
                size={40}
                strokeWidth={1.5}
                style={{ color: service.text }}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
              <div className="mt-auto">
                <h2
                  className="font-bold text-xl sm:text-2xl"
                  style={{ color: service.text }}
                >
                  {service.title}
                </h2>
                <p
                  className="mt-3 text-sm leading-relaxed opacity-80 sm:text-[15px]"
                  style={{ color: service.text }}
                >
                  {service.desc}
                </p>
              </div>
            </article>
          );
        })}
      </main>

      <section className="rounded-t-[34px] bg-[#CFFF04] px-6 py-20 text-[#1b1b1b] sm:px-10 sm:py-28">
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <h2
            className={`${FONT} text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.9] tracking-[-0.05em]`}
          >
            have a project in mind?
          </h2>
          <p className="mt-6 max-w-md text-base font-medium sm:text-lg">
            Let's launch your brand into orbit. Tell us what you're building.
          </p>
          <Link
            to="/"
            className="mt-10 flex items-center gap-2 rounded-full bg-black px-8 py-4 text-base font-medium text-[#CFFF04] transition-transform duration-300 hover:scale-[1.03]"
          >
            book mine
            <ArrowUpRight className="text-[#FF2E91]" size={18} strokeWidth={2} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
