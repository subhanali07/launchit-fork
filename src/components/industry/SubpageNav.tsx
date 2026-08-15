import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

export function SubpageNav() {
  return (
    <nav className="flex h-20 items-center justify-between px-6 sm:px-10">
      <Link
        to="/"
        aria-label="Launchit home"
        className={`${FONT} text-2xl font-black tracking-tight text-(--lime-text)`}
      >
        launchit.
      </Link>
      <div className="mr-14 flex items-center gap-3 sm:mr-16">
        <Link
          to="/services"
          className="hidden items-center gap-2 rounded-full border border-(--border-strong) px-5 py-2.5 text-base font-medium transition-colors hover:bg-(--text) hover:text-(--page) sm:flex"
        >
          <ArrowUpRight size={16} />
          services
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-2 rounded-full border border-(--border-strong) px-5 py-2.5 text-base font-medium transition-colors hover:bg-(--text) hover:text-(--page)"
        >
          <ArrowUpRight size={16} />
          start a project
        </Link>
      </div>
    </nav>
  );
}
