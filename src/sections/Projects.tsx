import { motion } from "framer-motion";
import { ArrowUpRight, ImagePlus } from "lucide-react";
import { data, EASE } from "../utils";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

function ProjectImage({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={title}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
    );
  }
  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 border-2 border-dashed border-white/10 bg-gradient-to-br from-[#242424] to-[#1b1b1b] px-6 text-center">
      <ImagePlus size={30} strokeWidth={1.5} className="text-white/25" />
      <p className={`${FONT} text-lg font-bold text-white/30`}>{title}</p>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
        project image
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[#1C1C1C] px-6 py-16 sm:px-14 sm:py-24">
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
        <h2 className={`${FONT} mt-8 font-black tracking-tight text-white leading-none text-4xl sm:text-6xl`}>
          our <span className="text-[#FF2E91]">work</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.12 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-[24px]">
              <ProjectImage title={project.title} src={project.src} />
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#CFFF04] text-[#1b1b1b] shadow-lg transition-transform duration-300 hover:scale-110"
                >
                  <ArrowUpRight size={20} strokeWidth={2} />
                </a>
              )}
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3
                className={`${FONT} text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#CFFF04] sm:text-xl`}
              >
                {project.title}
              </h3>
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                {project.year}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-[#CFFF04]">{project.category}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
