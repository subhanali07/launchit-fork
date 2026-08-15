import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { EASE } from "../utils";

import heroWebDev from "../assets/hero-webdev.jpg";
import heroEcommerce from "../assets/hero-ecommerce.jpg";
import heroSeo from "../assets/hero-seo.jpg";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const AUTOPLAY_MS = 4000;

const SLIDES = [
  {
    title: "Custom Website Development",
    accent: "for your business.",
    description:
      "We design and build fast, modern, mobile-first websites that get your business found and win you clients.",
    href: "/services#web-development",
    cta: "explore web development",
    image: heroWebDev,
  },
  {
    title: "E-commerce Stores",
    accent: "that actually sell.",
    description:
      "Online stores with smooth checkouts, secure payments and a backend built to scale as you grow.",
    href: "/services#e-commerce",
    cta: "explore e-commerce",
    image: heroEcommerce,
  },
  {
    title: "SEO & Social Media",
    accent: "management.",
    description:
      "Rank on Google and stay top-of-mind on social, we grow your reach beyond just your website.",
    href: "/services#seo",
    cta: "explore services",
    image: heroSeo,
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timer);
  }, [paused, index]);

  const slide = SLIDES[index];

  return (
    <section id="hero" className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black">
      {SLIDES.map((s, i) => (
        <img
          key={s.href}
          src={s.image}
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      <div className="relative z-10 flex w-full flex-1 flex-col px-4 pt-3">
        <div
          className="relative flex flex-1 flex-col overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-black sm:left-6 sm:flex sm:h-12 sm:w-12"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-black sm:right-6 sm:flex sm:h-12 sm:w-12"
        >
          <ArrowRight size={20} />
        </button>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-14 pt-2 text-center sm:px-12 sm:pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex max-w-4xl flex-col items-center"
            >
              <h1
                className={`${FONT} mt-5 max-w-5xl text-[clamp(2.2rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[-0.06em] text-white`}
              >
                <Link to={slide.href}>
                  {slide.title}{" "}
                </Link>
                <span className="text-[#FF2E91]">{slide.accent}</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-white/85 sm:text-xl"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
              >
                <a
                  href="#contact"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#CFFF04] px-5 py-2.5 text-base font-bold text-[#1C1C1C] sm:text-lg"
                >
                  <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-[#1C1C1C] transition-[height] duration-300 ease-out group-hover:h-full" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Get a free quote
                  </span>
                  <ArrowUpRight
                    className="relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    size={18}
                    strokeWidth={2.5}
                  />
                </a>
                <Link
                  to={slide.href}
                  className="group flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10 sm:text-lg"
                >
                  <ArrowUpRight
                    className="text-(--lime-text) transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    size={18}
                    strokeWidth={2}
                  />
                  {slide.cta}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-[#CFFF04]" : "w-2 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
