"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const instrumentMenu = [
  { label: "ARCONS", href: "/instruments/arcons" },
  { label: "DARKNESS", href: "/instruments/darkness" },
  { label: "MEC", href: "/instruments/mec" },
  { label: "XKID", href: "/instruments/xkid" },
  { label: "MEC Prime", href: "/instruments/mec-prime" },
  { label: "MOMOS", href: "/instruments/momos" }
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
        ? "border-slate-800 bg-slate-950/95 backdrop-blur"
        : "border-transparent bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-lg font-extrabold tracking-[0.2em] text-white">
          QUANTUM SENSORS LAB
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="/">
            Home
          </Link>
          <Link className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="/facilities">
            Facilities
          </Link>
          <Link
            className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800"
            href="/history-gallery"
          >
            History & Gallery
          </Link>

          <div className="group relative">
            <button className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800">Instruments</button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="min-w-52 rounded-lg border border-slate-800 bg-slate-900 p-2">
                {instrumentMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="/people">
            People
          </Link>

          <Link className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="/news">
            News
          </Link>
          <Link className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="/projects">
            Projects
          </Link>
          <Link className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="/publications">
            Publications
          </Link>
          <Link className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="/seminars">
            Seminars
          </Link>
          <Link className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="/press">
            Press
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-md border border-slate-700 px-3 py-2 text-slate-200 lg:hidden"
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 pb-5 pt-3 lg:hidden">
          <div className="grid gap-1">
            <Link onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800" href="/">Home</Link>
            <Link onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800" href="/facilities">Facilities</Link>
            <Link onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800" href="/history-gallery">History & Gallery</Link>
            <Link onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800" href="/instruments">Instruments</Link>
            {instrumentMenu.map((item) => (
              <Link key={item.label} onClick={() => setMobileOpen(false)} className="ml-3 rounded-md px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800" href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800" href="/people">People</Link>
            <Link onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800" href="/news">News</Link>
            <Link onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800" href="/projects">Projects</Link>
            <Link onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800" href="/publications">Publications</Link>
            <Link onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800" href="/seminars">Seminars</Link>
            <Link onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800" href="/press">Press</Link>
          </div>
        </div>
      )}
    </header>
  );
}
