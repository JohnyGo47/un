import { press } from "@/data/press";

export default function PressPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-bold text-white md:text-5xl">Press</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Selected external media coverage featuring Quantum Sensors Lab technology, scientific programs, and deployment outcomes.
      </p>

      <div className="mt-8 space-y-3">
        {press.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-slate-600"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{item.publisher}</p>
              <h2 className="mt-1 truncate text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-1 text-sm text-slate-400">{item.date}</p>
            </div>
            <span className="shrink-0 text-slate-300">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
