import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "../sections/Footer";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const SECTIONS = [
  {
    num: "01",
    title: "Information we collect",
    body: "We collect the information you choose to share with us through our contact form, including your name, email address and the details of your project. We also collect limited technical data, such as browser type and device information, that is gathered automatically when you visit this site.",
  },
  {
    num: "02",
    title: "How we use it",
    body: "Your information is used only to respond to your enquiry, discuss your project and, where you opt in, send occasional updates about the studio. We never sell your personal data to third parties, and we never use it for anything beyond what you asked for.",
  },
  {
    num: "03",
    title: "Cookies",
    body: "This site uses cookies to improve your experience and understand how it is used. You decide which categories of cookies are enabled. Your choices are stored on your device and can be updated at any time.",
    action: { label: "Manage cookie preferences", event: "launchit:open-cookie-consent" },
  },
  {
    num: "04",
    title: "Third-party services",
    body: "We rely on a small number of trusted providers for email and hosting. These providers only process data on our behalf and in line with this policy. We do not allow them to use your data for their own purposes.",
  },
  {
    num: "05",
    title: "Data retention",
    body: "Project and contact details are kept only as long as needed to complete your project and meet any legal obligations. After that, your information is deleted or anonymised.",
  },
  {
    num: "06",
    title: "Your rights",
    body: "You can ask us at any time for a copy of the data we hold about you, ask us to correct or delete it, or withdraw any consent you previously gave. There are no hoops to jump through: email us and we will handle it.",
  },
  {
    num: "07",
    title: "Changes to this policy",
    body: "We may update this policy as the studio grows or the law changes. Any changes will be posted on this page with an updated date below, so you always know exactly how your data is handled.",
  },
];

export default function PrivacyPolicyPage() {
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
          to="/"
          className="mr-14 flex items-center gap-2 rounded-full border border-(--border-strong) px-5 py-2.5 text-sm font-medium transition-colors hover:bg-(--text) hover:text-(--page) sm:mr-16"
        >
          <ArrowUpRight size={16} />
          back home
        </Link>
      </nav>

      <header className="px-6 pt-14 pb-14 sm:px-10 sm:pt-20 sm:pb-16 md:px-[5.5%]">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CFFF04]">
          legal
        </p>
        <h1
          className={`${FONT} mt-4 text-[clamp(2.8rem,9vw,7rem)] font-black leading-[0.9] tracking-[-0.06em]`}
        >
          privacy
          <br />
          <span className="text-[#FF2E91]">policy</span>
        </h1>
        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-(--text-muted) sm:text-lg">
          The short version: we keep your information safe, use it only to work
          with you, and never sell it. The details are below.
        </p>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-20 sm:px-10 md:px-0">
        <p className="font-num text-xs font-medium text-(--text-faint)">
          Last updated: 8 August 2026
        </p>

        <div className="mt-4 divide-y divide-(--border) border-y border-(--border)">
          {SECTIONS.map((section) => (
            <section key={section.num} className="py-8 sm:py-10">
              <div className="flex items-baseline gap-5">
                <span className="font-num text-xs font-bold text-[#CFFF04]">
                  /{section.num}
                </span>
                <h2
                  className={`${FONT} text-2xl font-black tracking-tight sm:text-3xl`}
                >
                  {section.title}
                </h2>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-(--text-muted) sm:pl-12 sm:text-base">
                {section.body}
              </p>
              {section.action && (
                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(
                      new Event("launchit:open-cookie-consent"),
                    )
                  }
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#CFFF04] px-5 py-2.5 text-sm font-semibold text-[#1b1b1b] transition-transform duration-300 hover:scale-[1.03] sm:ml-12"
                >
                  {section.action.label}
                  <ArrowUpRight size={16} strokeWidth={2.5} className="text-[#FF2E91]" />
                </button>
              )}
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-(--text-faint)">
          Questions about your data? Email us at{" "}
          <a
            href="mailto:hello@launchit.com"
            className="font-medium text-[#CFFF04] underline-offset-4 hover:underline"
          >
            hello@launchit.com
          </a>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
}
