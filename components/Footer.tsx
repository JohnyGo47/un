import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">About</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Mazin Lab. Pushing the limits of astronomical observation and advanced detector technology.
            </p>
            <a
              className="mt-4 inline-block text-sm font-medium text-cyan-300 hover:text-cyan-200"
              href="https://nu.edu.kz"
              target="_blank"
              rel="noreferrer"
            >
              Nazarbayev University →
            </a>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/facilities" className="hover:text-white">Facilities</Link></li>
              <li><Link href="/instruments" className="hover:text-white">Instruments</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/news" className="hover:text-white">News</Link></li>
              <li><Link href="/press" className="hover:text-white">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact Info</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Office: Block 9, SEDS</li>
              <li>Lab: Block 9, Advanced Physics Lab</li>
              <li>Phone: +7 (7172) 70 66 88</li>
              <li>
                Email:{" "}
                <a href="mailto:info@nu.edu.kz" className="hover:text-white">
                  info@nu.edu.kz
                </a>
              </li>
              <li>Address: 53 Kabanbay Batyr Ave, Astana 010000, Kazakhstan</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white">
              YouTube
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
          </div>
          <p>© 2026 Mazin Lab, Nazarbayev University. All rights reserved.</p>
          <span className="w-fit rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
            Built with Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
