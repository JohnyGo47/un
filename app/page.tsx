"use client";

import Link from "next/link";
import Image from "next/image";
import { news } from "@/data/news";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col z-10"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400"
            >
              Quantum Sensors Lab
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl"
            >
              The universe has always been quantum. <br className="hidden md:block" />
              Now we can finally measure it
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-100 md:text-xl"
            >
              We develop cryogenic measurement platforms for exploring 2D materials, superconducting device physics, and
              biochip integration. Working at millikelvin temperatures in our CryoLab, we push the boundaries of what
              detectors and quantum sensors can achieve.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Lab Facts Section */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl group"
            >
              <Image
                src="/home/Home_Photo_No.3.jpg"
                alt="Lab Environment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white md:text-4xl">Lab at a Glance</motion.h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { label: "Founded", value: "2017" },
                  { label: "Lab Size", value: "37 People" },
                  { label: "Main Research Partner", value: "Lawrence Berkeley National Lab", sub: true },
                  { label: "Founded By", value: "George F. Smoot III" }
                ].map((stat, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="border-l-2 border-cyan-500 pl-6 group">
                    <p className="text-sm uppercase tracking-wider text-slate-400 group-hover:text-cyan-400 transition-colors">{stat.label}</p>
                    <p className={`mt-1 font-bold text-white ${stat.sub ? 'text-xl leading-tight' : 'text-2xl'}`}>{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Research Events Section */}
      <section className="bg-slate-900/50 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Research Events</h2>
              <p className="mt-4 text-slate-400">Latest updates and seminar highlights from our lab.</p>
            </div>
            <Link
              href="/seminar"
              className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium group"
            >
              View More Seminars <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {news.slice(0, 6).map((item) => (
              <motion.article
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all hover:border-cyan-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-cyan-500/10"
              >
                <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider">{item.date}</p>
                <h3 className="mt-4 text-xl font-bold text-white group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-slate-400 leading-relaxed">
                  {item.excerpt}
                </p>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-10 md:hidden">
            <Link
              href="/seminar"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-6 py-3 text-cyan-400 font-medium active:scale-95 transition-transform"
            >
              View More Seminars &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Study at ECL Section */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center text-3xl font-bold text-white md:text-4xl"
          >
            Study at ECL
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-3"
          >
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
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex flex-col overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 group hover:border-slate-600 transition-colors"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="/home/Home_Photo_No.4.jpg"
                    alt={card.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{card.title}</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed flex-grow group-hover:text-slate-300 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Interested in Joining Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative mx-auto max-w-4xl px-4 text-center md:px-6"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">Interested in Joining the Lab?</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            We welcome inquiries from prospective graduate students, postdoctoral researchers, and potential collaborators.
            Reach out to Professor Alexander Tikhonov directly.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:atikhonov@nu.edu.kz"
            className="mt-8 inline-block rounded-lg bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 transition-shadow hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            Email Professor Alexander
          </motion.a>
        </motion.div>
      </section>

      {/* 6. Contact & Directions Section */}
      <section className="bg-slate-950 py-24 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white">Contact & Directions</motion.h2>
              <div className="mt-10 space-y-8">
                <motion.div variants={fadeUp} className="group cursor-default">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500 group-hover:text-cyan-400 transition-colors">Office</h3>
                  <p className="mt-2 text-xl text-slate-300">7e.537 (7 Block), Nazarbayev University</p>
                </motion.div>
                <motion.div variants={fadeUp} className="group cursor-default">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500 group-hover:text-cyan-400 transition-colors">Lab</h3>
                  <p className="mt-2 text-xl text-slate-300">ПЭ026 (C4), Nazarbayev University</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 group"
            >
              <Image
                src="/home/Home_Photo_No.1.jpg"
                alt="Lab Location"
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white font-medium text-sm px-4 py-2 bg-slate-950/50 backdrop-blur-sm rounded-full">Nazarbayev University Campus</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
