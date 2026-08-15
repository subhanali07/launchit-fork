import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiTypescript,
  SiPython,
  SiShopify,
  SiGoogleads,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";
import { EASE } from "../utils";

import aboutCode from "../assets/about-code.jpg";
import aboutDesign from "../assets/about-design.jpg";
import aboutTeam from "../assets/about-team.jpg";
import aboutPlan from "../assets/about-plan.jpg";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const MARQUEE_WORDS = ["FAST", "SIMPLE", "CLEAN", "MODERN", "RELIABLE"];

const TOOLS = [
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Express", Icon: SiExpress },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "SQL", Icon: SiMysql },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "Shopify", Icon: SiShopify },
  { name: "Google Ads", Icon: SiGoogleads },
  { name: "Instagram", Icon: SiInstagram },
  { name: "Facebook", Icon: SiFacebook },
];

const IMAGES = [
  { src: aboutTeam, alt: "our team collaborating" },
  { src: aboutCode, alt: "writing clean code" },
  { src: aboutDesign, alt: "designing interfaces" },
  { src: aboutPlan, alt: "planning projects" },
];

function Marquee() {
  return (
    <div className="mt-6 overflow-hidden border-y border-(--border) py-4 sm:py-5">
      <motion.div
        className="flex w-max shrink-0 items-center gap-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`${FONT} flex shrink-0 items-center gap-5 text-2xl font-black uppercase tracking-tight text-(--text-faint) sm:text-3xl`}
          >
            {word}
            <span className="text-(--lime-text)">*</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="w-full bg-(--surface) px-6 py-12 sm:px-14 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="px-0"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 text-(--lime-text)">
              <span className="h-[3px] w-20 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-32" />
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
            <h3
              className={`${FONT} mt-3 max-w-xl text-5xl font-black leading-[1.02] tracking-tight text-(--text) sm:text-7xl`}
            >
              about us
            </h3>
            <Marquee />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--text-soft) sm:text-xl">
              We start by talking to you, so we understand your business and
              what you need.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-(--text-soft) sm:text-xl">
              Then we design, build and test your website step by step, keeping
              you updated along the way.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-(--text-soft) sm:text-xl">
              When it goes live, we keep it fast, safe and easy to change, so it
              keeps working for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {IMAGES.map((img, i) => (
              <motion.img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className={`aspect-[4/3] w-full rounded-[20px] border border-(--border) object-cover ${
                  i % 2 === 1 ? "sm:translate-y-6" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-(--border) pt-12 sm:mt-20 sm:pt-14">
          <div className="mt-12">
            <div className="flex items-center gap-2 text-(--lime-text)">
              <span className="h-[3px] w-16 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-24" />
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
            <h4 className={`${FONT} mt-6 text-4xl font-black tracking-tight text-(--text) sm:text-5xl`}>
              tools &amp; languages
            </h4>
            <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {TOOLS.map((tool) => {
                const { Icon } = tool;
                return (
                  <div key={tool.name}>
                    <Icon size={60} className="text-(--text)" aria-label={tool.name} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
