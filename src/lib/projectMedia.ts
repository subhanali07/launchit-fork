import portfolioSite from "../assets/portfolio-site.mp4";
import ecommerceSite from "../assets/ecommerce-site.mp4";
import resume from "../assets/resume.mp4";
import magurilife from "../assets/magurilife.mp4";
import subhan from "../assets/subhan.mp4";
import portfolioPoster from "../assets/portfolio-poster.webp";
import ecommercePoster from "../assets/ecommerce-poster.webp";
import resumePoster from "../assets/resume-poster.webp";
import magurilifePoster from "../assets/magurilife-poster.webp";
import subhanPoster from "../assets/subhan-poster.webp";

export const PROJECT_VIDEOS: Record<string, { src: string; poster: string }> = {
  portfolio: { src: portfolioSite, poster: portfolioPoster },
  stationary: { src: ecommerceSite, poster: ecommercePoster },
  "naqsh-resume": { src: resume, poster: resumePoster },
  "meguri-life": { src: magurilife, poster: magurilifePoster },
  "subhan-portfolio": { src: subhan, poster: subhanPoster },
};
