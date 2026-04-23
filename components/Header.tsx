"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const instrumentMenu = [
  { label: "ARCONS", href: "/instruments/arcons" },
  { label: "DARKNESS", href: "/instruments/darkness" },
  { label: "MEC", href: "/instruments/mec" },
  { label: "XKID", href: "/instruments/xkid" },
  { label: "MEC Prime", href: "/instruments/mec-prime" },
  { label: "MOMOS", href: "/instruments/momos" }
];

const labMenu = [
  { label: "Facilities", href: "/facilities" },
  { label: "History & Gallery", href: "/history-gallery" },
  { label: "People", href: "/people" }
];

const researchMenu = [
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Seminars", href: "/seminars" }
];

const newsMenu = [
  { label: "Latest News", href: "/news" },
  { label: "Press", href: "/press" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${scrolled
        ? "border-slate-800 bg-slate-950/95 backdrop-blur-md h-16"
        : "border-transparent bg-transparent h-20"
        }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-[0.2em] text-white group-hover:text-cyan-400 transition-colors">
            QUANTUM SENSORS LAB
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          <NavDropdown label="Lab" items={labMenu} />
          <NavDropdown label="Instruments" items={instrumentMenu} />
          <NavDropdown label="Research" items={researchMenu} />
          <NavDropdown label="News" items={newsMenu} />
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-200 transition-colors hover:bg-slate-900 active:scale-95 lg:hidden"
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950 lg:hidden shadow-2xl"
          >
            <div className="mx-auto max-w-7xl px-4 pb-8 pt-4">
              <div className="grid gap-6 sm:grid-cols-2">
                <MobileGroup label="Lab" items={labMenu} close={() => setMobileOpen(false)} />
                <MobileGroup label="Instruments" items={instrumentMenu} close={() => setMobileOpen(false)} />
                <MobileGroup label="Research" items={researchMenu} close={() => setMobileOpen(false)} />
                <MobileGroup label="News" items={newsMenu} close={() => setMobileOpen(false)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <div className="group relative py-2">
      <button className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800/50 hover:text-white">
        {label}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="min-w-[180px] overflow-hidden rounded-xl border border-slate-800 bg-slate-900/90 p-1.5 backdrop-blur-xl shadow-2xl">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-lg px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({ label, items, close }: { label: string; items: { label: string; href: string }[]; close: () => void }) {
  return (
    <div className="space-y-3">
      <p className="px-3 text-xs font-bold uppercase tracking-widest text-cyan-500/70">{label}</p>
      <div className="grid gap-1">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={close}
            className="flex items-center rounded-lg px-3 py-2.5 text-slate-200 transition-colors hover:bg-slate-800 active:bg-slate-700"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
