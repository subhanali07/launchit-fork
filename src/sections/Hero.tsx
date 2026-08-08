import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "../utils";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#1b1b1b] px-4 pt-5">
      <nav className="relative z-20 mb-4 flex h-8 items-center justify-between sm:mb-5">
        <div className="flex flex-1 justify-center">
          <div className="flex translate-x-5 items-center gap-2 text-[#5D00FF] sm:translate-x-7">
            <span className="h-px w-32 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-72" />
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
        </div>
      </nav>

      <div className="relative flex flex-1 flex-col rounded-t-[34px] bg-[#CFFF04] px-6 pb-10 pt-14 text-black sm:px-9 sm:pb-14">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-black/50 sm:text-sm"
          >
            creative agency
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className={`${FONT} mt-5 select-none text-[clamp(3.5rem,19vw,17rem)] font-black leading-[0.85] tracking-[-0.07em] text-[#1b1b1b]`}
          >
            launchit.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
            className="mt-7 max-w-sm text-base font-medium leading-relaxed text-black/70 sm:text-lg"
          >
            Creating your brand presence from web to social media.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
            className="group mt-10 flex items-center gap-2 rounded-full border border-black px-5 py-2.5 text-base font-medium transition-colors hover:bg-black hover:text-[#CFFF04] sm:text-lg"
          >
            <ArrowUpRight
              className="text-[#FF2E91] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              size={18}
              strokeWidth={2}
            />
            book mine
          </motion.a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
