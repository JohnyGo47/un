import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-bold text-white md:text-5xl">Projects</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Ongoing Quantum Sensors Lab initiatives connecting instrumentation, astrophysics, bioimaging, and quantum technology.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
            <img src={project.image} alt={project.title} className="h-auto w-full rounded-lg border border-slate-800" />
            <h2 className="mt-4 text-2xl font-semibold text-white">{project.title}</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
