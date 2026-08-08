import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { data, EASE } from "../utils";

import portfolioSite from "../assets/portfolio-site.mp4";
import ecommerceSite from "../assets/ecommerce-site.mp4";
import resumeBuilder from "../assets/resume-builder.mp4";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const VIDEOS: Record<string, { src: string }> = {
  Portfolio: { src: portfolioSite },
  Stationary: { src: ecommerceSite },
  "Naqsh Resume": { src: resumeBuilder },
};

function ProjectMedia({
  title,
  video,
}: {
  title: string;
  video: { src: string };
}) {
  return (
    <div className="flex h-56 w-full items-center justify-center overflow-hidden bg-black sm:h-64">
      <video
        src={video.src}
        aria-label={title}
        className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
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
            className="group flex flex-col"
          >
            <div className="relative overflow-hidden rounded-[24px]">
              <ProjectMedia title={project.title} video={VIDEOS[project.title]} />
              {project.tags && (
                <div className="pointer-events-none absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
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
                className={`${FONT} text-lg font-bold text-white sm:text-xl`}
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