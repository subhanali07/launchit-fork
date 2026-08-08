import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "../utils";

import galaxies from "../assets/galaxies-colliding.mp4";
import fishes from "../assets/fishes.mp4";
import flowers from "../assets/flowers.mp4";
import her from "../assets/her.mp4";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const ACCENTS = ["#FF2E91", "#5D00FF", "#CFFF04"];

const MARQUEE_WORDS = ["CRAFT", "TASTE", "DETAIL", "OBSESSION", "MOTION"];

function VideoTile({
  src,
  alt,
  rotate,
  className,
}: {
  src: string;
  alt: string;
  rotate: number;
  className: string;
}) {
  return (
    <div
      className={`${className} overflow-hidden rounded-[20px] border border-white/10 bg-black`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <video
        src={src}
        aria-label={alt}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
}

function Marquee() {
  return (
    <div className="mt-10 overflow-hidden border-y border-white/10 py-4 sm:mt-14 sm:py-5">
      <motion.div
        className="flex w-max shrink-0 items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`${FONT} flex shrink-0 items-center gap-8 text-2xl font-black uppercase tracking-tight text-white/20 sm:text-3xl`}
          >
            {word}
            <span className="text-[#CFFF04]">*</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function About() {
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <section id="about" className="w-full bg-[#1C1C1C] px-6 py-16 sm:px-14 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-10 sm:px-12 sm:py-16"
      >
        <div className="flex items-center gap-2 text-[#CFFF04]">
          <span className="h-px w-32 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-72" />
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </div>
        <h2
          className={`${FONT} mt-4 font-black tracking-tight text-white leading-none text-4xl sm:text-6xl`}
        >
          about <span className="text-[#5D00FF]">us</span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col justify-center"
          >
            <h3
              className={`${FONT} max-w-xl text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl`}
            >
              <span className="text-white">in the age of ai slop,</span>
              <br />
              <button
                type="button"
                onClick={() => setColorIndex((prev) => (prev + 1) % ACCENTS.length)}
                className="transition-colors duration-300 cursor-pointer"
                style={{ color: ACCENTS[colorIndex] }}
              >
                we make art.
              </button>
            </h3>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base">
              We are an independent creative studio built on a simple belief: in
              an era of infinite, forgettable AI slop, craft still wins. We work
              with founders and brands who want fewer, better decisions, and we
              sweat the details other teams skip.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base">
              Galaxies colliding, flowers blooming, motion that stops the
              scroll, that is the bar we hold our work to. We use every tool,
              even the machine, but treat it as a spark, never the finish line.
              Strategy first, craft always.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col gap-4 sm:gap-6">
              <VideoTile
                src={galaxies}
                alt="galaxies colliding"
                rotate={-2}
                className="h-52 sm:h-64"
              />
              <VideoTile
                src={fishes}
                alt="fish drifting through water"
                rotate={1.5}
                className="h-40 sm:h-48"
              />
            </div>
            <div className="flex flex-col gap-4 pt-8 sm:gap-6 sm:pt-14">
              <VideoTile
                src={flowers}
                alt="flowers blooming"
                rotate={1.5}
                className="h-40 sm:h-48"
              />
              <VideoTile
                src={her}
                alt="a quiet cinematic portrait"
                rotate={-1.5}
                className="h-52 sm:h-64"
              />
            </div>
          </div>
        </div>

        <Marquee />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mt-12 sm:mt-16"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#CFFF04] px-8 py-4 text-base font-semibold text-[#1C1C1C] transition-transform duration-300 hover:scale-[1.03]"
          >
            Contact us
            <ArrowUpRight
              size={18}
              strokeWidth={2.5}
              className="text-[#FF2E91] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}