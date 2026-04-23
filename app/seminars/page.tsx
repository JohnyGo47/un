import Image from "next/image";
import { seminars } from "@/data/seminars";

export default function SeminarsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
            <h1 className="text-3xl font-bold text-white md:text-5xl">Seminars & Conferences</h1>

            <div className="mt-16 space-y-12">
                {seminars.map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-16">
                        {/* Left: Date & Time */}
                        <div className="flex w-full shrink-0 flex-col gap-1 text-center md:w-32 md:text-left">
                            <p className="text-xl font-bold text-white">{item.date}</p>
                            <p className="text-sm text-slate-400">{item.time}</p>
                        </div>

                        {/* Middle: Speaker Photo */}
                        <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-4 border-slate-800 bg-slate-900 shadow-xl">
                            <Image
                                src={item.image}
                                alt={item.speaker}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Right: Details */}
                        <div className="flex-1 space-y-4 text-center md:text-left">
                            <div>
                                <h2 className="text-2xl font-bold text-white md:text-3xl">{item.speaker}</h2>
                                <p className="mt-1 text-lg text-cyan-400 font-medium">{item.role}</p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-lg font-bold text-white">
                                    Topic: <span className="text-slate-200 font-semibold">{item.topic}</span>
                                </p>
                                <div className="max-w-3xl text-slate-400 leading-relaxed space-y-4">
                                    <p>{item.description}</p>
                                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium md:justify-start">
                                        <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                                            Platform: {item.location}
                                        </span>
                                        <span className="rounded-full bg-cyan-900/40 border border-cyan-800 px-3 py-1 text-cyan-300">
                                            Registration: {item.registration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
