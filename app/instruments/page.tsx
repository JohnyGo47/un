"use client";

import { useMemo, useState } from "react";
import InstrumentCard from "@/components/InstrumentCard";
import { instruments } from "@/data/instruments";
import { InstrumentStatus } from "@/types";

const filters: Array<InstrumentStatus | "All"> = ["All", "Active", "Legacy", "Upcoming"];

export default function InstrumentsPage() {
  const [filter, setFilter] = useState<InstrumentStatus | "All">("All");

  const filtered = useMemo(
    () => (filter === "All" ? instruments : instruments.filter((item) => item.status === filter)),
    [filter]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-bold text-white md:text-5xl">Instruments</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Full catalog of Quantum Sensors Lab instruments with status-aware filtering across active systems, legacy deployments,
        and upcoming platforms.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {filters.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${filter === value
                ? "border-cyan-300 bg-cyan-400/15 text-cyan-200"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-slate-100"
              }`}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((instrument) => (
          <InstrumentCard key={instrument.slug} instrument={instrument} />
        ))}
      </div>
    </div>
  );
}
