import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { webDevServices } from "../lib/webDevServices";
import { Footer } from "../sections/Footer";

import servicesWebDev from "../assets/services-webdev.jpg";
import servicesSeo from "../assets/services-seo.jpg";
import servicesEcommerce from "../assets/services-ecommerce.jpg";
import servicesSocial from "../assets/services-social.jpg";
import servicesPortfolio from "../assets/services-portfolio.jpg";
import servicesSaaS from "../assets/services-saas.jpg";

const SERVICES = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    accent: "#CFFF04",
    image: servicesWebDev,
    alt: "Code on a laptop screen during web development",
    description:
      "We design and build the website itself, from the first sketch to a live, working site. Every page is custom, fast to load and easy to use on any device.",
    includes: [
      "Maintenance and ongoing support",
      "Mobile responsive layout",
      "Fast load times",
      "Content management so you can update it yourself",
    ],
    subServices: webDevServices,
  },
  {
    id: "seo",
    number: "02",
    title: "SEO",
    accent: "#FF2E91",
    image: servicesSeo,
    alt: "Search analytics and ranking charts",
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
    id: "e-commerce",
    number: "03",
    title: "E-commerce",
    accent: "#5D00FF",
    image: servicesEcommerce,
    alt: "Online shopping and payments",
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
    id: "social-media",
    number: "04",
    title: "Social Media",
    accent: "#CFFF04",
    image: servicesSocial,
    alt: "Social media apps on a phone",
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
    id: "portfolio-sites",
    number: "05",
    title: "Portfolio Sites",
    accent: "#FF2E91",
    image: servicesPortfolio,
    alt: "A design desk with a portfolio in progress",
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
    id: "saas",
    number: "06",
    title: "SaaS",
    accent: "#5D00FF",
    image: servicesSaaS,
    alt: "A development team building a product",
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
    <div className="min-h-screen w-full bg-(--page) text-(--text)">
      <nav className="flex h-20 items-center justify-between px-6 sm:px-10">
        <Link
          to="/"
          aria-label="Launchit home"
          className={`${FONT} text-2xl font-black tracking-tight text-(--lime-text)`}
        >
          launchit.
        </Link>
        <Link
          to="/"
          className="mr-14 flex items-center gap-2 rounded-full border border-(--border-strong) px-5 py-2.5 text-base font-medium transition-colors hover:bg-(--text) hover:text-(--page) sm:mr-16"
        >
          <ArrowUpRight size={16} />
          back home
        </Link>
      </nav>

      <header className="px-6 pt-14 pb-14 sm:px-10 sm:pt-20 sm:pb-16 md:px-[5.5%]">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-(--lime-text)">
          services
        </p>
        <h1
          className={`${FONT} mt-4 text-[clamp(2.8rem,9vw,7rem)] font-black leading-[0.9] tracking-[-0.06em]`}
        >
          what we <span className="text-(--pink-text)">do</span>
        </h1>
        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-(--text-muted) sm:text-lg">
          Six things we're good at. Pick one, or let us handle the whole
          picture, from your first line of code to your first customer.
        </p>
      </header>

      <main className="px-6 pb-20 sm:px-10 md:px-[5.5%]">
        <div className="border-t border-(--border)">
          {SERVICES.map((service) => {
            return (
              <article
                key={service.title}
                id={service.id}
                className="grid grid-cols-1 gap-8 scroll-mt-24 border-b border-(--border) py-10 sm:py-14 lg:grid-cols-[300px_1fr_340px] lg:items-start lg:gap-12"
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-6">
                  <span
                    className={`${FONT} text-2xl font-black`}
                    style={{ color: service.accent }}
                  >
                    {service.number}
                  </span>
                  <h3
                    className={`${FONT} text-2xl font-black uppercase tracking-tight sm:text-3xl lg:text-4xl`}
                  >
                    {service.title}
                  </h3>
                </div>

                <div>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr]">
                    <p className="max-w-lg text-lg leading-relaxed text-(--text-muted) sm:text-base">
                      {service.description}
                    </p>

                    <ul className="flex flex-col gap-2.5">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-base text-(--text-soft) sm:text-lg"
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

                  {service.subServices && (
                    <div className="mt-8 border-t border-(--border) pt-6">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-(--lime-text)">
                        in web development we also do
                      </p>
                      <div className="flex flex-col gap-1">
                        {service.subServices.map((sub) => (
                          <div
                            key={sub.slug}
                            className="flex items-center gap-2.5 py-1.5 text-base font-semibold text-(--text-soft) sm:text-lg"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-(--lime-text)" />
                            {sub.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="overflow-hidden rounded-[24px] border border-(--border)">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
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
            className="mt-10 flex items-center gap-2 rounded-full bg-black px-8 py-4 text-base font-medium text-(--lime-text) transition-transform duration-300 hover:scale-[1.03]"
          >
            book mine
            <ArrowUpRight className="text-(--pink-text)" size={18} strokeWidth={2} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}