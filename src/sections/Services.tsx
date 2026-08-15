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

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const TILES = [
  {
    title: "Web Development",
    Icon: LayoutTemplate,
    bg: "#1C1C1C",
    text: "#FFFFFF",
    href: "/services#web-development",
    points: [
      "Custom, mobile-first builds",
      "Fast loading & SEO-ready",
      "Built to convert visitors",
    ],
  },
  {
    title: "SEO",
    Icon: TrendingUp,
    bg: "#CFFF04",
    text: "#1C1C1C",
    href: "/services#seo",
    points: [
      "On-page & technical SEO",
      "Keyword & content strategy",
      "Rankings you can track",
    ],
  },
  {
    title: "E-commerce",
    Icon: ShoppingBag,
    bg: "#1C1C1C",
    text: "#FFFFFF",
    href: "/services#e-commerce",
    points: [
      "Secure checkout & payments",
      "Product & inventory management",
      "Built to scale with sales",
    ],
  },
  {
    title: "Social Media Marketing",
    Icon: Share2,
    bg: "#FF2E91",
    text: "#FFFFFF",
    href: "/services#social-media",
    points: [
      "Content & brand voice",
      "Cross-platform scheduling",
      "Growth you can measure",
    ],
  },
  {
    title: "Portfolio Sites",
    Icon: Briefcase,
    bg: "#1C1C1C",
    text: "#FFFFFF",
    href: "/services#portfolio-sites",
    points: [
      "Design-led personal sites",
      "Case studies & galleries",
      "Easy to update yourself",
    ],
  },
  {
    title: "SaaS",
    Icon: Rocket,
    bg: "#5D00FF",
    text: "#FFFFFF",
    href: "/services#saas",
    points: [
      "Landing pages & dashboards",
      "Auth, billing & integrations",
      "Built to scale from day one",
    ],
  },
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
            <div className="flex items-center gap-2 text-(--lime-text)">
              <span className="h-px w-32 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-72" />
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
            <h2 className="mt-8 font-[Arial_Rounded_MT_Bold,Arial,sans-serif] font-black tracking-tight text-(--text) leading-none text-4xl sm:text-6xl">
              what we <span className="text-(--lime-text)">do</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#CFFF04] px-7 py-4 text-base font-semibold text-[#1C1C1C] transition-transform duration-300 hover:scale-[1.03] sm:text-lg"
          >
            all services
            <ArrowUpRight
              size={16}
              strokeWidth={2.5}
              className="text-(--pink-text) transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-[2px] bg-(--border) md:grid-cols-3">
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
                to={tile.href}
                className="group flex min-h-[320px] flex-col p-7 transition-transform duration-300 hover:scale-[0.98]"
                style={{ backgroundColor: tile.bg }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Icon
                      size={40}
                      strokeWidth={1.5}
                      style={{ color: tile.text }}
                      className="shrink-0"
                    />
                    <h3
                      className={`${FONT} text-lg font-black leading-tight tracking-tight`}
                      style={{ color: tile.text }}
                    >
                      {tile.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={24}
                    strokeWidth={2}
                    style={{ color: tile.text }}
                    className="shrink-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <ul className="mt-10 space-y-2.5">
                  {tile.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-base font-medium leading-snug"
                      style={{ color: tile.text, opacity: 0.85 }}
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: tile.text, opacity: 0.9 }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}