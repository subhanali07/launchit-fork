import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "../utils";

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

      <div className="relative mt-8 flex flex-1 flex-col rounded-t-[34px] bg-[#CFFF04] px-6 pb-10 pt-16 text-black sm:px-9 sm:pb-14 sm:pt-14 md:px-[5.5%] md:pt-12">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="mt-10 select-none text-center font-[Arial_Rounded_MT_Bold,Arial,sans-serif] text-[clamp(3rem,19vw,17rem)] font-black leading-[0.85] tracking-[-0.085em] text-[#1b1b1b]"
        >
          launchit.
        </motion.h1>

        <div className="mx-auto mt-8 grid w-full max-w-[920px] flex-1 grid-cols-1 content-start items-center gap-6 sm:mt-5 sm:grid-cols-[1fr_auto] md:mt-3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
            className="flex max-w-[650px] flex-wrap items-center gap-x-4 gap-y-3"
          >
            <p className="max-w-[450px] text-sm font-medium leading-[1.45] sm:text-base md:text-lg lg:text-xl">
              Creating your brand presence from web to social media.
            </p>
            <button
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-full border border-black px-5 py-2.5 text-base font-medium transition-colors hover:bg-black hover:text-[#CFFF04] sm:text-lg"
            >
              <ArrowUpRight className="text-[#FF2E91]" size={18} strokeWidth={2} />
              book mine
            </button>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
            className="text-left text-xl font-extrabold uppercase leading-[1.15] sm:text-2xl"
          >
            Creative
            <br />
            Agency
          </motion.span>
        </div>
      </div>
    </section>
  );
}
export default Hero;
