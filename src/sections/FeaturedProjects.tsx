import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGoogle,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { EASE } from "../utils";
import { LazyVideo } from "../components/LazyVideo";
import { PROJECT_VIDEOS } from "../lib/projectMedia";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

type FeaturedMedia = { src: string; poster: string } | { image: string };

const FEATURED: Array<{
  slug: string;
  title: string;
  category: string;
  url?: string;
  tech: Array<{ Icon: IconType; label: string }>;
  intro: string;
  features: string[];
  media: FeaturedMedia;
}> = [
  {
    slug: "naqsh-resume",
    title: "Naqsh Resume",
    category: "Web App",
    url: "https://naqshresume.vercel.app/",
    tech: [
      { Icon: SiReact, label: "React" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiTailwindcss, label: "Tailwind CSS" },
      { Icon: SiGoogle, label: "Google Auth" },
      { Icon: SiNodedotjs, label: "Node.js" },
      { Icon: SiMongodb, label: "MongoDB" },
    ],
    intro:
      "Build a resume that stands out. Live preview as you type, clean PDF export, and ATS-friendly output that actually gets past recruiter software.",
    features: [
      "Live preview updates as you type",
      "One-click clean PDF export",
      "ATS-friendly formatting",
      "Responsive on all devices",
    ],
    media: PROJECT_VIDEOS["naqsh-resume"],
  },
  {
    slug: "meguri-life",
    title: "Meguri Life",
    category: "Services Site",
    url: "https://megurilife.vercel.app/",
    tech: [
      { Icon: SiHtml5, label: "HTML" },
      { Icon: SiCss, label: "CSS" },
    ],
    intro:
      "A bilingual services site for a mindful-living brand. Editorial blog, photo gallery and seamless navigation, all in one fast package.",
    features: [
      "Bilingual content (EN / JP)",
      "Editorial blog with rich posts",
      "Curated photo gallery",
      "Responsive on phones",
    ],
    media: PROJECT_VIDEOS["meguri-life"],
  },
  {
    slug: "paper-palace",
    title: "Paper Palace",
    category: "Wholesale E-commerce",
    url: "https://project-stationary.vercel.app/",
    tech: [
      { Icon: SiMongodb, label: "MongoDB" },
      { Icon: SiExpress, label: "Express" },
      { Icon: SiReact, label: "React" },
      { Icon: SiNodedotjs, label: "Node.js" },
    ],
    intro:
      "A wholesale e-commerce store for paper bags and packaging. Bulk ordering made easy, clean design, a proper admin panel and payments straight through WhatsApp.",
    features: [
      "Wholesale store for paper bags & packaging",
      "Admin panel to manage products and orders",
      "Clean, easy-to-use design",
      "WhatsApp payment integrated",
      "Responsive on all devices",
    ],
    media: PROJECT_VIDEOS["stationary"],
  },
];

const listContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

const techContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.4 },
  },
};

const techItem = {
  hidden: { opacity: 0, y: 10, scale: 0.85 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

export default function FeaturedProjects() {
  return (
    <section id="featured" className="w-full bg-(--page) px-6 py-16 sm:px-14 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mb-6 sm:mb-10"
      >
        <div className="flex items-center gap-2 text-(--lime-text)">
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            style={{ transformOrigin: "left" }}
            className="h-px w-32 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-72"
          />
          <motion.span
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
          >
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </motion.span>
        </div>
        <h2 className={`${FONT} mt-8 font-black tracking-tight text-(--text) leading-none text-4xl sm:text-6xl`}>
          featured <span className="text-(--pink-text)">projects</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-16 sm:gap-24">
        {FEATURED.map((project, i) => {
          const reverse = i % 2 === 1;
          const index = String(i + 1).padStart(2, "0");
          return (
            <motion.article
              key={project.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-8% 0px" }}
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative overflow-hidden rounded-[24px] border border-(--border) bg-black"
              >
                {(() => {
                  const media =
                    "image" in project.media ? (
                      <img
                        src={project.media.image}
                        alt={project.title}
                        loading="lazy"
                        className="aspect-video h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <LazyVideo
                        src={project.media.src}
                        poster={project.media.poster}
                        alt={project.title}
                        className="aspect-video h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    );
                  return project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live`}
                      className="block"
                    >
                      {media}
                    </a>
                  ) : (
                    media
                  );
                })()}
                {project.url && (
                  <div className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </div>
                )}
              </motion.div>
              <div className="relative">
                <span
                  aria-hidden
                  className={`${FONT} pointer-events-none absolute -top-6 right-0 select-none text-6xl font-black text-(--border) sm:-top-10 sm:text-8xl`}
                >
                  {index}
                </span>
                <motion.span
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative text-xs font-bold uppercase tracking-widest text-(--indigo-text)"
                >
                  {project.category}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
                  className={`${FONT} relative mt-3 text-3xl font-black tracking-tight text-(--text) sm:text-5xl`}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
                  className="relative mt-5 max-w-xl text-lg leading-relaxed text-(--text-muted) sm:text-xl"
                >
                  {project.intro}
                </motion.p>
                <motion.ul
                  variants={listContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  className="relative mt-6 space-y-3"
                >
                  {project.features.map((feature) => (
                    <motion.li
                      key={feature}
                      variants={listItem}
                      className="flex items-start gap-3 text-lg font-medium text-(--text)"
                    >
                      <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#FF2E91]" />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  variants={techContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  className="relative mt-8 flex items-center gap-4"
                >
                  {project.tech.map(({ Icon, label }) => (
                    <motion.span
                      key={label}
                      variants={techItem}
                      whileHover={{ y: -4, color: "#FF2E91" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={26} className="text-(--text)" aria-label={label} />
                    </motion.span>
                  ))}
                </motion.div>
                <div className="relative mt-8 flex items-center gap-4">
                  {project.url && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="group inline-flex items-center gap-2 rounded-full bg-[#1C1C1C] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[#5D00FF]"
                    >
                      view live
                      <ArrowUpRight
                        size={16}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}