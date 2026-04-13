"use client";

import { useMemo, useState } from "react";
import { people } from "@/data/people";
import { PersonCategory } from "@/types";

const categories: Array<PersonCategory | "All"> = [
  "All",
  "Faculty & Staff",
  "Graduate Students",
  "Postdocs",
  "Alumni"
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
        Meet the Mazin Lab team spanning faculty leadership, graduate researchers, postdoctoral scholars, and alumni.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === category
                ? "border-cyan-300 bg-cyan-400/15 text-cyan-200"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-slate-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((person) => (
          <article key={person.id} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 text-center">
            <img
              src={person.image}
              alt={person.name}
              className="mx-auto h-28 w-28 rounded-full border border-slate-700 object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-white">{person.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{person.role}</p>
            <a href={`mailto:${person.email}`} className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200">
              {person.email}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
