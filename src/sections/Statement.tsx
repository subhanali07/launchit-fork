import { motion } from "framer-motion";
import { EASE } from "../utils";

function Statement() {
  return (
    <section id="statement" className="w-full bg-[#1b1b1b] px-4 text-white">
      <div className="rounded-b-[34px] bg-[#CFFF04] px-10 pb-20 pt-16 sm:px-9 sm:pb-28 sm:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="select-none text-center font-[Arial_Rounded_MT_Bold,Arial,sans-serif] text-[clamp(2.8rem,9vw,8rem)] font-black leading-[0.95] tracking-[-0.07em]"
        >
          <span className="text-[#1C1C1C]">your brand,</span>{" "}
          <span className="text-[#5D00FF]">launched</span>{" "}
          <span className="text-[#FF2E91]">into orbit.</span>{" "}
          <span className="text-white">✦</span>
        </motion.p>
      </div>
    </section>
  );
}
export default Statement;
