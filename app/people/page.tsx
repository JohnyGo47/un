"use client";

import { useMemo, useState } from "react";
import { people } from "@/data/people";
import { PersonCategory } from "@/types";

const categories: Array<PersonCategory | "All"> = [
  "All",
  "Principal Investigator",
  "Research Staff",
  "PhD Students",
  "Master Students",
  "Undergraduate Students",
  "Alumni",
  "Collaborators"
];

export default function PeoplePage() {
  const [active, setActive] = useState<PersonCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? people : people.filter((person) => person.category === active)),
    [active]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-bold text-white md:text-5xl">People</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Meet the Quantum Sensors Lab team spanning faculty leadership, research staff, students, and alumni.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active === category
              ? "border-cyan-300 bg-cyan-400/15 text-cyan-200"
              : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-slate-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((person) => (
          <article
            key={person.id}
            className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:border-slate-700 hover:bg-slate-900/60"
          >
            <div className="relative mb-6 flex justify-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-2xl ring-2 ring-slate-800 ring-offset-4 ring-offset-slate-950 transition-all group-hover:ring-cyan-500/50">
                <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="mb-4 text-center">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-500 uppercase tracking-wider">{person.role}</p>
              {person.degree && <p className="mt-1 text-xs text-slate-400">{person.degree}</p>}
            </div>

            <div className="flex-grow space-y-4">
              {person.bio && (
                <p className="text-sm leading-relaxed text-slate-400 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {person.bio}
                </p>
              )}

              {(person.internships && person.internships.length > 0) && (
                <div className="pt-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Internships</h4>
                  <ul className="space-y-1 text-xs text-slate-400">
                    {person.internships.map((internship, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-cyan-600 shrink-0">•</span>
                        {internship}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
              <a
                href={`mailto:${person.email}`}
                className="text-xs font-medium text-slate-400 transition hover:text-cyan-400"
              >
                {person.email}
              </a>
              {person.socials?.linkedin && (
                <a
                  href={person.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-800 p-2 text-slate-400 transition hover:bg-cyan-500/20 hover:text-cyan-400"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
