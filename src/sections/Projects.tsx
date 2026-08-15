import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { data, EASE } from "../utils";
import { LazyVideo } from "../components/LazyVideo";
import { PROJECT_VIDEOS } from "../lib/projectMedia";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const VIDEOS = PROJECT_VIDEOS;

const FEATURED_SLUGS = ["naqsh-resume", "meguri-life", "paper-palace", "stationary"];

function ProjectMedia({
  title,
  video,
}: {
  title: string;
  video: { src: string; poster: string };
}) {
  return (
    <div className="flex h-56 w-full items-center justify-center overflow-hidden bg-black sm:h-64">
      <LazyVideo
        src={video.src}
        poster={video.poster}
        alt={title}
        className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-(--surface) px-6 pt-12 pb-16 sm:px-14 sm:pt-16 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mb-10 sm:mb-14"
      >
        <div className="flex items-center gap-2 text-(--lime-text)">
          <span className="h-px w-32 bg-gradient-to-r from-[#8da42a] via-[#5D00FF] to-[#FF2E91] sm:w-72" />
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </div>
        <h2 className={`${FONT} mt-8 font-black tracking-tight text-(--text) leading-none text-4xl sm:text-6xl`}>
          more <span className="text-(--pink-text)">projects</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6">
        {data.projects
          .filter((project) => !FEATURED_SLUGS.includes(project.slug))
          .map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.12 }}
            className="group flex w-full flex-col sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="relative overflow-hidden rounded-[24px]">
              <ProjectMedia title={project.title} video={VIDEOS[project.slug]} />
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
                className={`${FONT} text-lg font-bold text-(--text) sm:text-xl`}
              >
                {project.title}
              </h3>
              <span className="text-xs font-bold uppercase tracking-widest text-(--text-faint)">
                {project.year}
              </span>
            </div>
            <p className="mt-1 text-base font-medium text-(--lime-text)">{project.category}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}