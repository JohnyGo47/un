import Link from "next/link";
import { Instrument } from "@/types";

type InstrumentCardProps = {
  instrument: Instrument;
};

const statusStyles: Record<Instrument["status"], string> = {
  Active: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
  Legacy: "bg-slate-500/20 text-slate-200 border-slate-400/40",
  Upcoming: "bg-sky-500/20 text-sky-300 border-sky-400/40"
};

export default function InstrumentCard({ instrument }: InstrumentCardProps) {
  return (
    <Link
      href={`/instruments/${instrument.slug}`}
      className="group rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-slate-600 hover:bg-slate-900"
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <span
          className={`rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[instrument.status]}`}
        >
          {instrument.status}
        </span>
        <span className="text-xs text-slate-400">View details →</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{instrument.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{instrument.shortDescription}</p>
      <p className="mt-4 text-sm font-medium text-slate-200">{instrument.specs}</p>
    </Link>
  );
}
