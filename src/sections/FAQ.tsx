import { motion } from "framer-motion";
import { data, EASE } from "../utils";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

export default function FAQ() {
  const total = data.faqs.length;

  return (
    <section
      id="faqs"
      className="w-full bg-(--surface) px-4 py-10 sm:px-8 sm:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="rounded-[2.5rem] sm:rounded-[3rem] bg-[#FF2E91] px-6 py-8 sm:px-14 sm:py-12"
      >
        <div className="border-b border-black/20 pb-4 mb-12 sm:mb-20 flex items-center justify-between">
          <span className="font-num text-xs font-medium text-black/70">
            [ 01 / {String(total).padStart(2, "0")} ]
          </span>
          <span className="text-xs font-bold tracking-widest text-black/70 uppercase">
            FAQ
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">
          <h2
            className={`${FONT} font-black tracking-tight leading-[1.1] text-5xl sm:text-6xl md:text-7xl self-center mt-6 lg:mt-0`}
          >
            <span className="block text-[#1C1C1C]">
              You've got
              <br />
              questions.
            </span>
            <span className="block text-white mt-12 sm:mt-16">
              We've got
              <br />
              answers.
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {data.faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
              >
                <span className="inline-block bg-[#1C1C1C] text-(--lime-text) font-num text-xs font-bold px-2.5 py-1 rounded-sm mb-4">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <h3
                  className={`${FONT} text-xl sm:text-2xl font-bold text-black leading-snug mb-3`}
                >
                  {faq.question}
                </h3>
                <p className="text-lg leading-relaxed text-black/85 max-w-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}