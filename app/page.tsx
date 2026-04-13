import Link from "next/link";
import { instruments } from "@/data/instruments";
import { news } from "@/data/news";
import InstrumentCard from "@/components/InstrumentCard";

const previewOrder = ["ARCONS", "DARKNESS", "MEC", "XKID", "MOMOS", "MEC Prime"];

export default function HomePage() {
  const previewInstruments = previewOrder
    .map((name) => instruments.find((item) => item.name === name))
    .filter((item): item is (typeof instruments)[number] => Boolean(item));

  return (
    <div>
      <section className="relative border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.18),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-cyan-300">
            Mazin Lab · Nazarbayev University
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Detecting New Worlds, One Photon at a Time
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            We design and deploy advanced superconducting sensors and instruments for Astronomy, Bioimaging, and
            Quantum Information. Our cameras and spectrographs operate at temperatures just above absolute zero,
            enabling science that is impossible with conventional detectors.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/instruments"
              className="rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Our Instruments
            </Link>
            <Link
              href="/facilities"
              className="rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400 hover:bg-slate-900"
            >
              View Our Facilities
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Active & Legacy Instruments</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {previewInstruments.map((instrument) => (
            <InstrumentCard key={instrument.slug} instrument={instrument} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Latest News Preview</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {news.slice(0, 3).map((item) => (
              <article key={item.id} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm font-medium text-cyan-300">{item.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              </article>
            ))}
          </div>
          <Link href="/news" className="mt-6 inline-block text-sm font-medium text-cyan-300 hover:text-cyan-200">
            Read all news -&gt;
          </Link>
        </div>
      </section>
    </div>
  );
}
