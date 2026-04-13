"use client";

import { useState } from "react";

type TimelineEntry = {
  year: string;
  title: string;
  text: string;
};

const timeline: TimelineEntry[] = [
  {
    year: "2010",
    title: "Lab Founded",
    text: "Mazin Lab was established to advance superconducting detector platforms for astronomy and precision photon science."
  },
  {
    year: "2014",
    title: "Major Funding Milestone",
    text: "New federal support from NSF and NASA accelerated large-format MKID camera development and cryogenic instrumentation programs."
  },
  {
    year: "2016",
    title: "ARCONS Deployment",
    text: "ARCONS delivered key on-sky demonstrations of high-time-resolution spectroscopy and photon-counting science operations."
  },
  {
    year: "2019",
    title: "DARKNESS and MEC Expansion",
    text: "High-contrast imaging instruments entered advanced operations for exoplanet science and wavefront control experiments."
  },
  {
    year: "2024",
    title: "Next-Generation Instrument Pipeline",
    text: "XKID, MOMOS, and MEC Prime programs advanced toward integration testing and upcoming deployment windows."
  }
];

const images = [
  "https://placehold.co/800x1200/0f172a/e2e8f0?text=Cryostat+Bay",
  "https://placehold.co/1000x700/111827/e5e7eb?text=Detector+Array+Test",
  "https://placehold.co/900x1200/1e293b/f8fafc?text=Optics+Alignment",
  "https://placehold.co/1000x760/0b1120/e2e8f0?text=Cleanroom+Work",
  "https://placehold.co/900x1250/172554/e2e8f0?text=Electronics+Rack",
  "https://placehold.co/1000x720/1f2937/f1f5f9?text=Observatory+Integration"
];

export default function HistoryGalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <h1 className="text-3xl font-bold text-white md:text-5xl">History & Gallery</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Mazin Lab history spans foundational MKID demonstrations, major funding growth, and deployment of world-leading
          photon-counting instruments.
        </p>

        <div className="relative mt-10 border-l border-slate-700 pl-7">
          {timeline.map((entry) => (
            <article key={`${entry.year}-${entry.title}`} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border border-cyan-300 bg-slate-950" />
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{entry.year}</p>
              <h2 className="mt-1 text-xl font-semibold text-white">{entry.title}</h2>
              <p className="mt-2 text-slate-300">{entry.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Gallery</h2>
          <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {images.map((src) => (
              <button
                type="button"
                key={src}
                className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
                onClick={() => setActiveImage(src)}
              >
                <img src={src} alt="Mazin Lab gallery photo" className="h-auto w-full" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-slate-700 bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-3 top-3 rounded-full border border-slate-600 bg-slate-900 px-3 py-1 text-sm text-slate-100"
            >
              Close
            </button>
            <img src={activeImage} alt="Expanded Mazin Lab gallery photo" className="max-h-[90vh] w-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
