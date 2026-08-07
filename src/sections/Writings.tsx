import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { data, EASE } from "../utils";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const TAG_STYLES: Record<string, string> = {
  Blog: "bg-[#CFFF04] text-[#1b1b1b]",
  "Case Study": "bg-[#FF2E91] text-white",
};

export default function Writings() {
  return (
    <section id="writings" className="w-full bg-[#1b1b1b] px-6 py-16 sm:px-14 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mb-10 sm:mb-14"
      >
        <div className="flex items-center gap-2 text-[#CFFF04]">
          <span className="h-px w-32 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-72" />
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </div>
        <h2
          className={`${FONT} mt-8 font-black tracking-tight text-white leading-none text-4xl sm:text-6xl`}
        >
          writings <span className="text-[#5D00FF]">&amp; stories</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-[2px] bg-white/10 md:grid-cols-2 lg:grid-cols-3">
        {data.writings.map((writing, i) => (
          <motion.article
            key={writing.slug}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.1 }}
            className="group flex flex-col bg-[#1C1C1C] p-8 transition-colors duration-300 hover:bg-[#242424] sm:p-10"
          >
            <div className="flex items-center justify-between gap-4">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${TAG_STYLES[writing.tag]}`}
              >
                {writing.tag}
              </span>
              <span className="text-xs font-medium text-white/40">{writing.date}</span>
            </div>

            <h3
              className={`${FONT} mt-8 text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#CFFF04] sm:text-2xl`}
            >
              {writing.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-[15px]">
              {writing.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between pt-8">
              <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                {writing.read}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-[#CFFF04] group-hover:bg-[#CFFF04] group-hover:text-[#1b1b1b]">
                <ArrowUpRight size={18} strokeWidth={2} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
