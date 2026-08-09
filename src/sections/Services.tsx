import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  LayoutTemplate,
  TrendingUp,
  ShoppingBag,
  Share2,
  Briefcase,
  Rocket,
} from "lucide-react";
import { EASE } from "../utils";

const TILES = [
  { title: "Web Development", Icon: LayoutTemplate, bg: "#1C1C1C", text: "#FFFFFF" },
  { title: "SEO", Icon: TrendingUp, bg: "#CFFF04", text: "#1C1C1C" },
  { title: "E-commerce", Icon: ShoppingBag, bg: "#1C1C1C", text: "#FFFFFF" },
  { title: "Social Media Marketing", Icon: Share2, bg: "#FF2E91", text: "#FFFFFF" },
  { title: "Portfolio Sites", Icon: Briefcase, bg: "#1C1C1C", text: "#FFFFFF" },
  { title: "SaaS", Icon: Rocket, bg: "#5D00FF", text: "#FFFFFF" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-(--surface) w-full px-6 py-16 sm:px-14 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mb-10 sm:mb-14"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#CFFF04]">
              <span className="h-px w-32 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-72" />
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
            <h2 className="mt-8 font-[Arial_Rounded_MT_Bold,Arial,sans-serif] font-black tracking-tight text-(--text) leading-none text-4xl sm:text-6xl">
              what we <span className="text-[#CFFF04]">do</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#CFFF04] px-7 py-4 text-sm font-semibold text-[#1C1C1C] transition-transform duration-300 hover:scale-[1.03] sm:text-[15px]"
          >
            all services
            <ArrowUpRight
              size={16}
              strokeWidth={2.5}
              className="text-[#FF2E91] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[2px] bg-(--border)">
        {TILES.map((tile, i) => {
          const { Icon } = tile;
          return (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.1 }}
            >
              <Link
                to="/services"
                className="group flex flex-col items-center justify-center gap-5 aspect-square sm:aspect-[4/3] transition-transform duration-300 hover:scale-[0.98]"
                style={{ backgroundColor: tile.bg }}
              >
                <Icon
                  size={40}
                  strokeWidth={1.5}
                  style={{ color: tile.text }}
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
                <span
                  className="font-bold text-base sm:text-lg text-center px-4"
                  style={{ color: tile.text }}
                >
                  {tile.title}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}