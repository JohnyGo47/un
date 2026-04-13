import { notFound } from "next/navigation";
import { instruments } from "@/data/instruments";

type InstrumentPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return instruments.map((instrument) => ({ slug: instrument.slug }));
}

export default function InstrumentDetailsPage({ params }: InstrumentPageProps) {
  const instrument = instruments.find((item) => item.slug === params.slug);

  if (!instrument) {
    notFound();
  }

  return (
    <div>
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <img
            src={instrument.heroImage}
            alt={`${instrument.name} hero`}
            className="h-auto w-full rounded-2xl border border-slate-800"
          />
          <h1 className="mt-6 text-3xl font-bold text-white md:text-5xl">{instrument.name}</h1>
          <p className="mt-3 max-w-3xl text-slate-300">{instrument.shortDescription}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[280px_1fr] md:px-6">
        <aside className="h-fit rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Facts</h2>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-slate-400">Pixel Count</dt>
              <dd className="mt-1 text-slate-100">{instrument.pixelCount}</dd>
            </div>
            <div>
              <dt className="text-slate-400">Wavelength Range</dt>
              <dd className="mt-1 text-slate-100">{instrument.wavelengthRange}</dd>
            </div>
            <div>
              <dt className="text-slate-400">Telescope Location</dt>
              <dd className="mt-1 text-slate-100">{instrument.telescopeLocation}</dd>
            </div>
          </dl>
        </aside>

        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-semibold text-white">Technical Documentation</h2>
          <div className="mt-4 space-y-4 text-slate-300">
            {instrument.technicalDocumentation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
