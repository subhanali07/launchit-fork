import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "../sections/Footer";

const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    accent: "#CFFF04",
    description:
      "We design and build the website itself, from the first sketch to a live, working site. Every page is custom, fast to load and easy to use on any device.",
    includes: [
      "Custom design, not a template",
      "Mobile responsive layout",
      "Fast load times",
      "Content management so you can update it yourself",
    ],
  },
  {
    number: "02",
    title: "SEO",
    accent: "#FF2E91",
    description:
      "We make sure people can actually find your site on Google. That means fixing technical issues, choosing the right keywords and writing content that ranks, checked and updated every month.",
    includes: [
      "Technical site audit",
      "Keyword research",
      "On-page optimization",
      "Monthly performance reporting",
    ],
  },
  {
    number: "03",
    title: "E-commerce",
    accent: "#5D00FF",
    description:
      "We build online stores that are simple to shop and simple to run. Product pages, cart and checkout are all set up so customers can buy without friction.",
    includes: [
      "Product catalog setup",
      "Secure checkout and payments",
      "Inventory and order management",
      "Mobile-first shopping experience",
    ],
  },
  {
    number: "04",
    title: "Social Media",
    accent: "#CFFF04",
    description:
      "We plan and post content that gets your brand seen, and manage the day to day so your accounts stay active and consistent, not just a page that goes quiet after launch.",
    includes: [
      "Content calendar and planning",
      "Post design and copywriting",
      "Community management",
      "Monthly growth report",
    ],
  },
  {
    number: "05",
    title: "Portfolio Sites",
    accent: "#FF2E91",
    description:
      "For freelancers, studios and founders who need a site that shows their work clearly. Clean layouts that let the projects do the talking.",
    includes: [
      "Custom project layouts",
      "Case study pages",
      "Contact and booking forms",
      "Fast, simple hosting setup",
    ],
  },
  {
    number: "06",
    title: "SaaS",
    accent: "#5D00FF",
    description:
      "We build the actual product for software startups, from the interface to the features that make it work. Built to handle real users, not just a demo.",
    includes: [
      "Product design and UI",
      "Frontend and backend development",
      "User accounts and dashboards",
      "Built to scale as you grow",
    ],
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
          Six things we're good at. Pick one, or let us handle the whole
          picture, from your first line of code to your first customer.
        </p>
      </header>

      <main className="px-6 pb-20 sm:px-10 md:px-[5.5%]">
        <div className="border-t border-white/10">
          {SERVICES.map((service) => {
            return (
              <article
                key={service.title}
                className="grid grid-cols-1 gap-6 border-b border-white/10 py-10 sm:py-14 lg:grid-cols-[280px_1fr] lg:gap-16"
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-6">
                  <span
                    className={`${FONT} text-2xl font-black`}
                    style={{ color: service.accent }}
                  >
                    {service.number}
                  </span>
                  <h3
                    className={`${FONT} text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl`}
                  >
                    {service.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr]">
                  <p className="max-w-lg text-[15px] leading-relaxed text-white/70 sm:text-base">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-2.5">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/80 sm:text-[15px]"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: service.accent }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
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