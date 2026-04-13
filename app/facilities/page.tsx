import { facilities } from "@/data/facilities";

export default function FacilitiesPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[250px_1fr] md:px-6">
      <aside className="top-28 h-fit rounded-xl border border-slate-800 bg-slate-900/70 p-4 md:sticky">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Facility Rooms</h2>
        <nav className="space-y-2">
          {facilities.map((room) => (
            <a
              key={room.id}
              href={`#${room.id}`}
              className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              {room.title}
            </a>
          ))}
        </nav>
      </aside>

      <div className="space-y-10">
        <header>
          <h1 className="text-3xl font-bold text-white md:text-5xl">Facilities</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Our Block 9 and Broida Hall aligned infrastructure supports full instrument lifecycles: concept,
            fabrication, cryogenic integration, electronics validation, and on-sky deployment readiness.
          </p>
        </header>
        {facilities.map((room) => (
          <section key={room.id} id={room.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <img src={room.image} alt={room.title} className="h-auto w-full rounded-lg border border-slate-800" />
            <h2 className="mt-5 text-2xl font-semibold text-white">{room.title}</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{room.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
