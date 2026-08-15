import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Check,
  Clock3,
  CreditCard,
  HelpCircle,
  MessageSquare,
  Plus,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { getIndustry } from "../../lib/industries";
import type {
  IndustryData,
  IndustryFaq,
  IndustryItem,
} from "../../lib/industries";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";
const CONTAINER = "px-6 sm:px-10 md:px-[5.5%]";

const PAIN_ICONS = [AlertCircle, Clock3, MessageSquare, CreditCard, HelpCircle, Smartphone];
const WHY_ICONS = [Rocket, ShieldCheck, Zap, Award, Users, BadgeCheck];

function SectionHeader({
  title,
  intro,
}: {
  title: ReactNode;
  intro?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-(--lime-text)">
        <span className="h-px w-24 bg-[#CFFF04] sm:w-40" />
        <ArrowUpRight size={16} strokeWidth={2.5} />
      </div>
      <h2
        className={`${FONT} mt-8 max-w-3xl text-[clamp(2rem,6vw,4rem)] font-black leading-[0.95] tracking-[-0.05em]`}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-(--text-muted) sm:text-base">
          {intro}
        </p>
      )}
    </div>
  );
}

function PrimaryCta({ label }: { label: string }) {
  return (
    <Link
      to="/contact"
      className="group inline-flex items-center gap-2 rounded-full bg-[#CFFF04] px-8 py-4 text-base font-semibold text-[#1C1C1C] transition-colors hover:bg-[#b7d600]"
    >
      {label}
      <ArrowUpRight
        size={18}
        strokeWidth={2}
        className="text-(--pink-text) transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

function SecondaryCta({ label }: { label: string }) {
  return (
    <Link
      to="/#projects"
      className="inline-flex items-center gap-2 rounded-full border border-(--border-strong) px-8 py-4 text-base font-semibold text-(--text) transition-colors hover:bg-(--text) hover:text-(--page)"
    >
      {label}
    </Link>
  );
}

export function IndustryHero({ industry }: { industry: IndustryData }) {
  return (
    <header className={`${CONTAINER} pt-14 pb-14 sm:pt-20 sm:pb-16`}>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-(--lime-text)">
            {industry.eyebrow}
          </p>
          <h1
            className={`${FONT} mt-4 max-w-4xl text-[clamp(2.6rem,8vw,5.8rem)] font-black leading-[0.9] tracking-[-0.06em]`}
          >
            {industry.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-(--text-muted) sm:text-lg">
            {industry.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <PrimaryCta label="Start Your Project" />
            <SecondaryCta label="View Our Work" />
          </div>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-(--border)">
          <img
            src={industry.image}
            alt={industry.name}
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export function PainPoints({
  painIntro,
  pains,
}: {
  painIntro: string;
  pains: IndustryItem[];
}) {
  return (
    <section className={`${CONTAINER} border-t border-(--border) py-16 sm:py-20`}>
      <SectionHeader
        title={
          <>
            the usual <span className="text-(--pink-text)">website problems</span>
          </>
        }
        intro={painIntro}
      />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((pain, i) => {
          const Icon = PAIN_ICONS[i % PAIN_ICONS.length];
          return (
            <article
              key={pain.title}
              className="rounded-[24px] border border-(--border) bg-(--card) p-6 sm:p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--page) text-[#FF2E91]">
                <Icon size={18} strokeWidth={2} />
              </div>
              <h3 className={`${FONT} mt-4 text-xl font-bold tracking-tight`}>
                {pain.title}
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-(--text-muted)">
                {pain.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function WhatWeBuild({
  intro,
  builds,
}: {
  intro: string;
  builds: IndustryItem[];
}) {
  return (
    <section
      className={`${CONTAINER} border-t border-(--border) bg-(--surface) py-16 sm:py-20`}
    >
      <SectionHeader
        title={
          <>
            what we <span className="text-(--lime-text)">build</span>
          </>
        }
        intro={intro}
      />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {builds.map((build) => (
          <article
            key={build.title}
            className="rounded-[24px] border border-(--border) bg-(--page) p-6 sm:p-7"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CFFF04] text-[#1C1C1C]">
              <Check size={18} strokeWidth={2.5} />
            </div>
            <h3 className={`${FONT} mt-4 text-xl font-bold tracking-tight`}>
              {build.title}
            </h3>
            <p className="mt-2.5 text-base leading-relaxed text-(--text-muted)">
              {build.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhyLaunchIt({
  intro,
  whys,
}: {
  intro: string;
  whys: IndustryItem[];
}) {
  return (
    <section className={`${CONTAINER} border-t border-(--border) py-16 sm:py-20`}>
      <SectionHeader
        title={
          <>
            why <span className="text-(--lime-text)">launchit</span>
          </>
        }
        intro={intro}
      />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whys.map((why, i) => {
          const Icon = WHY_ICONS[i % WHY_ICONS.length];
          return (
            <article
              key={why.title}
              className="rounded-[24px] border border-(--border) bg-(--card) p-6 sm:p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--page) text-(--lime-text)">
                <Icon size={18} strokeWidth={2} />
              </div>
              <h3 className={`${FONT} mt-4 text-lg font-bold tracking-tight`}>
                {why.title}
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-(--text-muted)">
                {why.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const STEP_ACCENTS = ["#FF2E91", "#5D00FF", "#CFFF04"];

export function IndustryProcess({
  intro,
  steps,
}: {
  intro: string;
  steps: IndustryItem[];
}) {
  return (
    <section className={`${CONTAINER} border-t border-(--border) py-16 sm:py-20`}>
      <SectionHeader
        title={
          <>
            how we <span className="text-(--lime-text)">work</span>
          </>
        }
        intro={intro}
      />
      <div className="mt-12 grid grid-cols-1 gap-[2px] bg-(--border) sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.title} className="bg-(--page) p-7 sm:p-8">
            <span
              className={`${FONT} text-4xl font-black`}
              style={{ color: STEP_ACCENTS[i % STEP_ACCENTS.length] }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={`${FONT} mt-5 text-xl font-black tracking-tight`}>
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-(--text-muted)">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function IndustryMotto({ industry }: { industry: IndustryData }) {
  return (
    <section
      className={`${CONTAINER} border-t border-(--border) bg-(--surface) py-16 sm:py-24`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-(--pink-text)">
        why your {industry.noun} needs a website
      </p>
      <h2
        className={`${FONT} mt-6 max-w-5xl text-[clamp(1.8rem,5vw,3.8rem)] font-black leading-[1.05] tracking-[-0.04em]`}
      >
        {industry.motto}
      </h2>
    </section>
  );
}

export function IndustryFaq({ faqs, intro }: { faqs: IndustryFaq[]; intro: string }) {
  return (
    <section className={`${CONTAINER} border-t border-(--border) py-16 sm:py-20`}>
      <SectionHeader
        title={
          <>
            frequently asked <span className="text-(--lime-text)">questions</span>
          </>
        }
        intro={intro}
      />
      <div className="mt-12 border-t border-(--border)">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group border-b border-(--border) py-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
              <h3 className={`${FONT} text-lg font-bold tracking-tight sm:text-xl`}>
                {faq.question}
              </h3>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-(--border-strong) text-(--lime-text) transition-transform duration-300 group-open:rotate-45">
                <Plus size={16} strokeWidth={2.5} />
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-(--text-muted)">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function RelatedIndustries({ related }: { related: string[] }) {
  const pages = related
    .map((slug) => getIndustry(slug))
    .filter((p): p is IndustryData => Boolean(p));

  if (pages.length === 0) return null;

  return (
    <section className={`${CONTAINER} border-t border-(--border) py-14 sm:py-16`}>
      <p className="label mb-6 text-(--text-faint)">more for you</p>
      <div className="flex flex-wrap gap-3">
        {pages.map((page) => (
          <Link
            key={page.slug}
            to={`/industries/${page.slug}`}
            className="group inline-flex items-center gap-2 rounded-full border border-(--border-strong) bg-(--surface) px-6 py-3.5 text-base font-semibold text-(--text) transition-colors hover:border-[#CFFF04] hover:text-(--lime-text)"
          >
            Websites for {page.name}
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="text-(--pink-text)"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FinalCta({ industry }: { industry: IndustryData }) {
  return (
    <section className="rounded-t-[34px] bg-[#CFFF04] px-6 py-20 text-[#1b1b1b] sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-black/50">
          ready to launch?
        </p>
        <h2
          className={`${FONT} mt-6 text-[clamp(2rem,6vw,4.5rem)] font-black leading-[0.95] tracking-[-0.05em]`}
        >
          {industry.cta.title}
        </h2>
        <p className="mt-6 max-w-md text-base font-medium sm:text-lg">
          {industry.cta.text}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-base font-medium text-(--lime-text) transition-colors hover:bg-[#333]"
          >
            Start Your Project
            <ArrowUpRight
              size={18}
              strokeWidth={2}
              className="text-(--pink-text) transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-black/40 px-8 py-4 text-base font-medium text-black transition-colors hover:bg-black hover:text-(--lime-text)"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
