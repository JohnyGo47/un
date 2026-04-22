"use client";

import { useMemo, useState } from "react";
import { publications } from "@/data/publications";

const years = ["All", 2025, 2024, 2023, 2022, 2021, 2020, "Older"];

export default function PublicationsPage() {
    const [search, setSearch] = useState("");
    const [activeYear, setActiveYear] = useState<number | string>("All");

    const filtered = useMemo(() => {
        return publications.filter((pub) => {
            const matchesSearch =
                pub.title.toLowerCase().includes(search.toLowerCase()) ||
                pub.authors.toLowerCase().includes(search.toLowerCase()) ||
                pub.journal.toLowerCase().includes(search.toLowerCase());

            const matchesYear =
                activeYear === "All" ||
                (activeYear === "Older" ? pub.year < 2020 : pub.year === activeYear);

            return matchesSearch && matchesYear;
        });
    }, [search, activeYear]);

    return (
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
            <h1 className="text-3xl font-bold text-white md:text-5xl">Journal Publications</h1>

            <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative max-w-md flex-1">
                    <input
                        type="text"
                        placeholder="Search by title, author, or keyword..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 py-3 pl-4 pr-10 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${activeYear === year
                                    ? "border-cyan-300 bg-cyan-400/10 text-cyan-200"
                                    : "border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-12 space-y-6">
                {filtered.length > 0 ? (
                    filtered.map((pub) => (
                        <article key={pub.id} className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-slate-700 hover:bg-slate-900/60">
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">
                                        {pub.title}
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-300 font-medium">{pub.authors}</p>
                                    <p className="mt-1 text-xs text-slate-500 italic">
                                        {pub.journal} {pub.volume && `, Vol. ${pub.volume}`} {pub.number && `, No. ${pub.number}`} ({pub.date})
                                    </p>
                                    {pub.doi && (
                                        <p className="mt-3 text-xs text-slate-400">
                                            DOI: <span className="text-slate-500">{pub.doi}</span>
                                        </p>
                                    )}
                                </div>

                                {pub.pdfUrl && (
                                    <a
                                        href={pub.pdfUrl}
                                        target="_blank"
                                        className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-white transition hover:bg-cyan-600"
                                    >
                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 16l-5-5h3V4h4v7h3l-5 5zM5 18h14v2H5z" />
                                        </svg>
                                        PDF
                                    </a>
                                )}
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="rounded-2xl border border-dashed border-slate-800 py-20 text-center">
                        <p className="text-slate-500">No publications found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
