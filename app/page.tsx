import Link from "next/link";
import Image from "next/image";
import { news } from "@/data/news";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/home/Home_Photo_No.2.jpg"
          alt="Quantum Sensors Lab Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Quantum Sensors Lab
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            The universe has always been quantum. <br className="hidden md:block" />
            Now we can finally measure it
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-100 md:text-xl">
            We develop cryogenic measurement platforms for exploring 2D materials, superconducting device physics, and
            biochip integration. Working at millikelvin temperatures in our CryoLab, we push the boundaries of what
            detectors and quantum sensors can achieve.
          </p>
        </div>
      </section>

      {/* 2. Lab Facts Section */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/home/Home_Photo_No.3.jpg"
                alt="Lab Environment"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white md:text-4xl">Lab at a Glance</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="border-l-2 border-cyan-500 pl-6">
                  <p className="text-sm uppercase tracking-wider text-slate-400">Founded</p>
                  <p className="mt-1 text-2xl font-bold text-white">2017</p>
                </div>
                <div className="border-l-2 border-cyan-500 pl-6">
                  <p className="text-sm uppercase tracking-wider text-slate-400">Lab Size</p>
                  <p className="mt-1 text-2xl font-bold text-white">37 People</p>
                </div>
                <div className="border-l-2 border-cyan-500 pl-6">
                  <p className="text-sm uppercase tracking-wider text-slate-400">Main Research Partner</p>
                  <p className="mt-1 text-xl font-bold text-white leading-tight">Lawrence Berkeley National Lab</p>
                </div>
                <div className="border-l-2 border-cyan-500 pl-6">
                  <p className="text-sm uppercase tracking-wider text-slate-400">Founded By</p>
                  <p className="mt-1 text-xl font-bold text-white">George F. Smoot III</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Research Events Section */}
      <section className="bg-slate-900/50 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Research Events</h2>
              <p className="mt-4 text-slate-400">Latest updates and seminar highlights from our lab.</p>
            </div>
            <Link
              href="/seminar"
              className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium"
            >
              View More Seminars <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, 6).map((item) => (
              <article key={item.id} className="group relative rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:border-slate-700">
                <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider">{item.date}</p>
                <h3 className="mt-4 text-xl font-bold text-white group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-slate-400 leading-relaxed">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link
              href="/seminar"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-6 py-3 text-cyan-400 font-medium"
            >
              View More Seminars <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Study at ECL Section */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-4xl">Study at ECL</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Science Without Boundaries",
                desc: "CryoLab - part of the Energetic Cosmos Laboratory at Nazarbayev University - breaks down traditional barriers between astrophysics, quantum materials, and bioimaging. Our shared cryogenic infrastructure and collaborative environment attract talent from around the world to explore science at the edge of what is possible."
              },
              {
                title: "PhD and Research Internship Program",
                desc: "CryoLab offers an individualized, cross-disciplinary PhD program that funds students for up to 4 years. The Research Internship Program provides financial and travel support for 2 to 6 months of hands-on experience in cryogenic instrumentation and quantum sensing at Nazarbayev University."
              },
              {
                title: "Student Life",
                desc: "Joining CryoLab means more than world-class research. Nazarbayev University sits in Astana - one of the world's most dynamic and fast-growing capital cities - offering a unique blend of cultural experiences, modern infrastructure, and an international community that makes life outside the lab just as rewarding."
              }
            ].map((card, idx) => (
              <div key={idx} className="flex flex-col overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/home/Home_Photo_No.4.jpg"
                    alt={card.title}
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed flex-grow">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interested in Joining Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Interested in Joining the Lab?</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            We welcome inquiries from prospective graduate students, postdoctoral researchers, and potential collaborators.
            Reach out to Professor Alexander Tikhonov directly.
          </p>
          <a
            href="mailto:atikhonov@nu.edu.kz"
            className="mt-8 inline-block rounded-lg bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 transition hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            Email Professor Alexander
          </a>
        </div>
      </section>

      {/* 6. Contact & Directions Section */}
      <section className="bg-slate-950 py-24 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Contact & Directions</h2>
              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500">Office</h3>
                  <p className="mt-2 text-xl text-slate-300">7e.537 (7 Block), Nazarbayev University</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500">Lab</h3>
                  <p className="mt-2 text-xl text-slate-300">ПЭ026 (C4), Nazarbayev University</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800">
              <Image
                src="/home/Home_Photo_No.1.jpg"
                alt="Lab Location"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-slate-400 text-sm">Nazarbayev University Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

