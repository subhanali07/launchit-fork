import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { EASE, cn } from "../utils";

type Consent = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
};

type Category = {
  key: keyof Consent;
  title: string;
  desc: string;
  locked?: boolean;
};

const STORAGE_KEY = "launchit-consent-v1";
const OPEN_EVENT = "launchit:open-cookie-consent";

const ALL_ON: Consent = {
  necessary: true,
  analytics: true,
  functional: true,
  marketing: true,
};

const ESSENTIAL_ONLY: Consent = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

const CATEGORIES: Category[] = [
  {
    key: "necessary",
    title: "Essential",
    desc: "Required for the site to function properly. Always active.",
    locked: true,
  },
  {
    key: "functional",
    title: "Preferences",
    desc: "Remembers your choices so we can personalize your experience.",
  },
  {
    key: "analytics",
    title: "Analytics",
    desc: "Helps us understand how visitors use the site so we can improve it.",
  },
  {
    key: "marketing",
    title: "Marketing",
    desc: "Powers relevant content and campaigns across the web.",
  },
];

function readStored(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    if (typeof parsed !== "object" || parsed === null) return null;
    return {
      necessary: parsed.necessary !== false,
      analytics: Boolean(parsed.analytics),
      functional: Boolean(parsed.functional),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

function persist(consent: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

function Toggle({
  checked,
  disabled = false,
  label,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  label: string;
  onChange: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300",
        checked ? "bg-[#CFFF04]" : "bg-(--border-strong)",
        disabled && "cursor-not-allowed",
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 rounded-full transition-all duration-300",
          checked ? "translate-x-[24px] bg-[#1C1C1C]" : "translate-x-0.5 bg-white",
        )}
      />
    </button>
  );
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [consent, setConsent] = useState<Consent | null>(null);
  const [draft, setDraft] = useState<Consent>(ESSENTIAL_ONLY);

  useEffect(() => {
    const stored = readStored();
    setConsent(stored);
    setShowBanner(!stored);
  }, []);

  useEffect(() => {
    const onOpen = () => {
      setDraft(readStored() ?? consent ?? ESSENTIAL_ONLY);
      setShowBanner(false);
      setModalOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, [consent]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [modalOpen]);

  const save = useCallback((next: Consent) => {
    persist(next);
    setConsent(next);
    setShowBanner(false);
    setModalOpen(false);
  }, []);

  const openPreferences = useCallback(() => {
    setDraft(readStored() ?? consent ?? ESSENTIAL_ONLY);
    setShowBanner(false);
    setModalOpen(true);
  }, [consent]);

  const acceptAll = () => save(ALL_ON);
  const declineAll = () => save(ESSENTIAL_ONLY);
  const confirmChoices = () => save({ ...draft, necessary: true });

  const updateDraft = (key: keyof Consent) => (next: boolean) =>
    setDraft((d) => ({ ...d, [key]: next }));

  return (
    <>
      <AnimatePresence>
        {showBanner && !modalOpen && (
          <motion.div
            role="region"
            aria-label="Cookie consent"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-x-3 bottom-3 z-[80] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:left-auto sm:w-[26rem]"
          >
            <div className="rounded-[1.75rem] bg-(--surface) p-6 text-(--text) shadow-2xl ring-1 ring-(--border)">
              <div className="flex items-center gap-2 text-(--lime-text)">
                <Cookie size={18} strokeWidth={2} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Cookies
                </span>
              </div>
              <p className="mt-3 text-base leading-relaxed text-(--text-soft)">
                We use cookies to improve your experience and understand how the
                site is used. You're in control, choose what you allow.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-full bg-[#CFFF04] px-5 py-2.5 text-base font-semibold text-[#1C1C1C] transition-transform duration-300 hover:scale-[1.03]"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={declineAll}
                    className="rounded-full border border-(--border-strong) px-5 py-2.5 text-base font-semibold text-(--text) transition-colors duration-300 hover:border-(--border-strong)"
                >
                  Decline
                </button>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="px-3 py-2.5 text-base font-medium text-(--text-muted) transition-colors duration-300 hover:text-(--text)"
                >
                  Manage preferences
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[90] flex items-end justify-center p-3 sm:items-center sm:p-6"
          >
            <button
              type="button"
              aria-label="Close cookie preferences"
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-preferences-title"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-(--surface) text-(--text) ring-1 ring-(--border)"
            >
              <div className="flex items-start justify-between gap-4 border-b border-(--border) p-6 sm:p-8">
                <div>
                  <h2
                    id="cookie-preferences-title"
                    className="font-[Arial_Rounded_MT_Bold,Arial,sans-serif] text-2xl font-black tracking-tight sm:text-3xl"
                  >
                    Cookie preferences
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-(--text-muted)">
                    Manage how we use cookies. Your choices are saved on this
                    device and can be changed any time from the footer.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setModalOpen(false)}
                  className="rounded-full p-2 text-(--text-faint) transition-colors duration-300 hover:bg-(--border) hover:text-(--text)"
                >
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              <div className="divide-y divide-(--border)">
                {CATEGORIES.map((category) => (
                  <div
                    key={category.key}
                    className="flex items-center justify-between gap-6 px-6 py-5 sm:px-8"
                  >
                    <div>
                      <p className="text-lg font-semibold">
                        {category.title}
                        {category.locked && (
                          <span className="ml-2 text-[11px] font-bold uppercase tracking-wider text-(--lime-text)">
                            Always on
                          </span>
                        )}
                      </p>
                      <p className="mt-1 max-w-xs text-base leading-relaxed text-(--text-muted)">
                        {category.desc}
                      </p>
                    </div>
                    <Toggle
                      checked={draft[category.key]}
                      disabled={category.locked}
                      label={`${category.title} cookies`}
                      onChange={updateDraft(category.key)}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-(--border) bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <button
                  type="button"
                  onClick={declineAll}
                  className="text-base font-medium text-(--text-muted) transition-colors duration-300 hover:text-(--text)"
                >
                  Decline all
                </button>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={acceptAll}
                  className="rounded-full border border-(--border-strong) px-5 py-2.5 text-base font-semibold text-(--text) transition-colors duration-300 hover:border-(--border-strong)"
                  >
                    Accept all
                  </button>
                  <button
                    type="button"
                    onClick={confirmChoices}
                    className="rounded-full bg-[#CFFF04] px-5 py-2.5 text-base font-semibold text-[#1C1C1C] transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Confirm choices
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
