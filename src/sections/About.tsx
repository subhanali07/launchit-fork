import { useState } from "react";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "../utils";

import galaxies from "../assets/galaxies-colliding.mp4";
import galaxiesPoster from "../assets/galaxies-poster.jpg";
import fishes from "../assets/fishes.mp4";
import fishesPoster from "../assets/fishes-poster.jpg";
import flowers from "../assets/flowers.mp4";
import flowersPoster from "../assets/flowers-poster.jpg";
import her from "../assets/her.mp4";
import herPoster from "../assets/her-poster.jpg";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const ACCENTS = ["#FF2E91", "#5D00FF", "#CFFF04"];

const MARQUEE_WORDS = ["CRAFT", "TASTE", "DETAIL", "OBSESSION", "MOTION"];

function VideoTile({
  src,
  poster,
  alt,
  rotate,
  className,
}: {
  src: string;
  poster?: string;
  alt: string;
  rotate: number;
  className: string;
}) {
  return (
    <div
      className={`${className} overflow-hidden rounded-[20px] border border-(--border) bg-black`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <video
        src={src}
        poster={poster}
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
    <div className="mt-8 overflow-hidden border-y border-(--border) py-4 sm:mt-10 sm:py-5">
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
            <div className="flex items-center gap-2 text-[#CFFF04]">
              <span className="h-[3px] w-20 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-32" />
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
            <span className="mt-6 text-xs font-bold uppercase tracking-widest text-[#5D00FF]">
              about us
            </span>
            <h3
              className={`${FONT} mt-3 max-w-xl text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl`}
            >
              <span className="text-(--text)">in the age of ai slop,</span>
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
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-(--text-muted) sm:text-base">
              We are a team of three, built on a simple belief: in an era of
              forgettable AI slop, craft still wins.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-(--text-muted) sm:text-base">
              Every site we build is fast, secure and made to convert. We
              deliver solutions through close collaboration, tailored to each
              client's requirements.
            </p>
            <blockquote
              className={`${FONT} mt-8 border-l-4 border-[#CFFF04] pl-4 text-xl font-black leading-snug text-(--text) sm:text-2xl`}
            >
              "Art is not what you see, but what you make others see."
              <span className="mt-2 block text-sm font-bold normal-case tracking-wide text-[#CFFF04]">
                Edgar Degas
              </span>
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col gap-4 sm:gap-6">
              <VideoTile
                src={galaxies}
                poster={galaxiesPoster}
                alt="galaxies colliding"
                rotate={-2}
                className="h-52 sm:h-64"
              />
              <VideoTile
                src={fishes}
                poster={fishesPoster}
                alt="fish drifting through water"
                rotate={1.5}
                className="h-40 sm:h-48"
              />
            </div>
            <div className="flex flex-col gap-4 pt-8 sm:gap-6 sm:pt-14">
              <VideoTile
                src={flowers}
                poster={flowersPoster}
                alt="flowers blooming"
                rotate={1.5}
                className="h-40 sm:h-48"
              />
              <VideoTile
                src={her}
                poster={herPoster}
                alt="a quiet cinematic portrait"
                rotate={-1.5}
                className="h-52 sm:h-64"
              />
            </div>
          </div>
        </div>

        <Marquee />

        
      </motion.div>
    </section>
  );
}