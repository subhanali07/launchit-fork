import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { data } from "../utils";
import Connect from "../sections/Connect";
import { Footer } from "../sections/Footer";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

const TAG_STYLES: Record<string, string> = {
  Blog: "bg-[#CFFF04] text-[#1b1b1b]",
  "Case Study": "bg-[#FF2E91] text-white",
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = data.writings.find((w) => w.slug === slug);

  if (!post) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen w-full bg-(--page) text-(--text)">
      <nav className="flex h-20 items-center justify-between px-6 sm:px-10">
        <Link
          to="/"
          aria-label="Launchit home"
          className={`${FONT} text-2xl font-black tracking-tight text-(--lime-text)`}
        >
          launchit.
        </Link>
        <Link
          to="/#writings"
          className="mr-14 flex items-center gap-2 rounded-full border border-(--border-strong) px-5 py-2.5 text-base font-medium transition-colors hover:bg-(--text) hover:text-(--page) sm:mr-16"
        >
          <ArrowUpRight size={16} />
          all writings
        </Link>
      </nav>

      <article className="mx-auto max-w-3xl px-6 pb-20 sm:px-10 md:px-0">
        <header className="pt-10 sm:pt-16">
          <div className="flex items-center gap-4">
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${TAG_STYLES[post.tag]}`}
            >
              {post.tag}
            </span>
            <span className="text-xs font-medium text-(--text-faint)">
              {post.date} · {post.read}
            </span>
          </div>
          <h1
            className={`${FONT} mt-6 text-[clamp(2rem,6vw,4rem)] font-black leading-[1.02] tracking-[-0.03em]`}
          >
            {post.title}
          </h1>
        </header>

        <img
          src={post.image}
          alt={post.title}
          className="mt-10 aspect-video w-full rounded-[24px] object-cover"
        />

        <div className="mt-12 space-y-12">
          {post.body.map((section) => (
            <section key={section.heading}>
              <h2
                className={`${FONT} text-2xl font-black tracking-tight sm:text-3xl`}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-lg leading-relaxed text-(--text-muted) sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-5 border-t border-(--border) pt-10">
          <Link
            to="/#writings"
            className={`${FONT} inline-flex items-center gap-2 text-xl font-black text-(--lime-text) transition-transform duration-300 hover:-translate-y-0.5`}
          >
            back to writings
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-[#CFFF04] px-7 py-3.5 text-base font-semibold text-[#1b1b1b] transition-transform duration-300 hover:scale-[1.03]"
          >
            start a project with us
          </Link>
        </div>
      </article>

      <Connect />
      <Footer />
    </div>
  );
}
