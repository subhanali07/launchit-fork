import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { webDevServices } from "../lib/webDevServices";
import { LazyVideo } from "../components/LazyVideo";
import Connect from "../sections/Connect";
import { Footer } from "../sections/Footer";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const PROCESS = [
  {
    num: "01",
    title: "Discover",
    desc: "We listen first. A quick call, a look at your current site and your goals, so we know exactly what you need.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes and a design that matches your brand, reviewed with you before any code is written.",
  },
  {
    num: "03",
    title: "Build",
    desc: "We develop and test your service, making sure it is fast, secure and easy to manage.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "We launch, submit your sitemap to Google and stay around with maintenance and support.",
  },
];

export default function WebDevServicePage() {
  const { slug } = useParams();
  const service = webDevServices.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <div className="min-h-screen w-full bg-(--page) text-(--text)">
      <nav className="flex h-20 items-center justify-between px-6 sm:px-10">
        <Link
          to="/"
          aria-label="Launchit home"
          className={`${FONT} text-2xl font-black tracking-tight text-[#CFFF04]`}
        >
          launchit.
        </Link>
        <Link
          to="/services"
          className="mr-14 flex items-center gap-2 rounded-full border border-(--border-strong) px-5 py-2.5 text-sm font-medium transition-colors hover:bg-(--text) hover:text-(--page) sm:mr-16"
        >
          <ArrowUpRight size={16} />
          all services
        </Link>
      </nav>

      <header className="px-6 pt-14 pb-14 sm:px-10 sm:pt-20 sm:pb-16 md:px-[5.5%]">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CFFF04]">
          web development
        </p>
        <h1
          className={`${FONT} mt-4 max-w-4xl text-[clamp(2.8rem,9vw,6.5rem)] font-black leading-[0.9] tracking-[-0.06em]`}
        >
          {service.title}
        </h1>
        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-(--text-muted) sm:text-lg">
          {service.tagline}
        </p>
      </header>

      <main className="px-6 pb-20 sm:px-10 md:px-[5.5%]">
        <section className="grid grid-cols-1 gap-10 border-t border-(--border) py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <p className="max-w-2xl text-[15px] leading-relaxed text-(--text-muted) sm:text-base">
            {service.description}
          </p>

          <ul className="flex flex-col gap-2.5">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-(--text-soft) sm:text-[15px]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#CFFF04]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {service.media && (
          <div className="overflow-hidden rounded-[24px] border-t border-(--border) pt-12 sm:pt-16">
            <LazyVideo
              src={service.media.src}
              poster={service.media.poster}
              alt={service.title}
              className="aspect-video h-auto w-full rounded-[24px] bg-black object-contain"
            />
          </div>
        )}

        <div className="border-t border-(--border)">
          {service.body.map((section) => (
            <section
              key={section.heading}
              className="grid grid-cols-1 gap-4 border-b border-(--border) py-10 sm:py-12 lg:grid-cols-[280px_1fr] lg:gap-16"
            >
              <h2
                className={`${FONT} text-2xl font-black tracking-tight sm:text-3xl`}
              >
                {section.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-2xl text-[15px] leading-relaxed text-(--text-muted) sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section id="stack" className="pt-16 sm:pt-24">
          <div className="flex items-center gap-2 text-[#CFFF04]">
            <span className="h-px w-24 bg-[#CFFF04] sm:w-40" />
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
          <h2
            className={`${FONT} mt-8 text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[0.95] tracking-[-0.05em]`}
          >
            our tech <span className="text-[#CFFF04]">stack</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-(--text-muted) sm:text-base">
            The tools we use to build and secure your project.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {service.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-(--border-strong) bg-(--surface) px-5 py-2.5 text-sm font-medium text-(--text-soft) transition-colors hover:border-[#CFFF04] hover:text-[#CFFF04]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="process" className="pt-16 sm:pt-24">
          <div className="flex items-center gap-2 text-[#CFFF04]">
            <span className="h-px w-24 bg-[#CFFF04] sm:w-40" />
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
          <h2
            className={`${FONT} mt-8 text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[0.95] tracking-[-0.05em]`}
          >
            how we <span className="text-[#CFFF04]">work</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-(--text-muted) sm:text-base">
            A simple, transparent process. No jargon, no surprises, just a
            clear path from idea to launch.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-[2px] bg-(--border) sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <div key={step.num} className="bg-(--page) p-7 sm:p-8">
                <span className={`${FONT} text-4xl font-black text-[#FF2E91]`}>
                  {step.num}
                </span>
                <h3 className={`${FONT} mt-5 text-xl font-black tracking-tight`}>
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-(--text-muted)">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Connect />
      <Footer />
    </div>
  );
}
