import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Connect from "../sections/Connect";
import { Footer } from "../sections/Footer";

const FONT = "font-[Arial_Rounded_MT_Bold,Arial,sans-serif]";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-(--page) text-(--text)">
      <nav className="flex h-20 items-center justify-between px-6 sm:px-10">
        <Link
          to="/"
          aria-label="Launchit home"
          className={`${FONT} text-2xl font-black tracking-tight text-[#CFFF04]`}
        >
          launchit.
        </Link>
        <Link
          to="/"
          className="mr-14 flex items-center gap-2 rounded-full border border-(--border-strong) px-5 py-2.5 text-sm font-medium transition-colors hover:bg-(--text) hover:text-(--page) sm:mr-16"
        >
          <ArrowUpRight size={16} />
          back home
        </Link>
      </nav>

      <Connect />
      <Footer />
    </div>
  );
}
