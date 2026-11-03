
import { useState } from 'react';

const partnerImages = [
    {
        src: '/Img/profile.jpg',
        alt: 'Paul Francis Austria',
        name: 'Paul Francis Austria',
    },
    {
        src: '/Img/dave.jpg',
        alt: 'Dave',
        name: 'Christopher Dave Martin',
    },
];

export default function Home() {
    const [activeImage, setActiveImage] = useState(0);

    const previousImage = () => {
        setActiveImage((current) =>
            current === 0 ? partnerImages.length - 1 : current - 1
        );
    };

    const nextImage = () => {
        setActiveImage((current) =>
            current === partnerImages.length - 1 ? 0 : current + 1
        );
    };

    return (
        <section
            id="home"
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="relative scroll-mt-24 overflow-hidden px-5 pb-24 pt-36 sm:px-8 sm:pt-40 lg:pb-32"
        >
            <div className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/20"></div>
            <div className="pointer-events-none absolute -bottom-20 -left-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl dark:bg-sky-900/10"></div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <div>
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sky-700 dark:border-sky-900 dark:bg-slate-900 dark:text-sky-300">
                        <span className="h-2 w-2 rounded-full bg-sky-500"></span>
                        IT Students · Aspiring Developers
                    </div>

                    <p className="mb-3 text-lg text-slate-600 dark:text-slate-300">
                        Welcome to
                    </p>

                    <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                        WebDevs
                        <span className="text-sky-600 dark:text-sky-400">.</span>
                    </h1>

                    <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Aspiring developers passionate about creating clean,
                        functional, and user-friendly digital experiences.
                    </p>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 dark:text-slate-400">
                        We enjoy exploring technology, solving problems, and
                        transforming ideas into practical web and mobile
                        applications.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-600 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
                        >
                            View Our Projects <span aria-hidden="true">↘</span>
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold transition hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:bg-slate-900"
                        >
                            Get in Touch <span aria-hidden="true">↗</span>
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
                        <span>⌖ Manaoag - Laoac, Pangasinan</span>
                        <span>✳ Always learning</span>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-sky-200 dark:border-sky-900"></div>

                    <div className="relative rounded-[1.75rem] border border-white bg-white p-3 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900">
                        <img
                            src={partnerImages[activeImage].src}
                            alt={partnerImages[activeImage].alt}
                            className="h-[360px] w-full rounded-2xl object-cover sm:h-[460px]"
                        />

                        {/* Previous image */}
                        <button
                            type="button"
                            onClick={previousImage}
                            aria-label="Previous partner photo"
                            className="absolute left-5 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl text-slate-900 shadow-lg transition hover:bg-sky-100"
                        >
                            ←
                        </button>

                        {/* Next image */}
                        <button
                            type="button"
                            onClick={nextImage}
                            aria-label="Next partner photo"
                            className="absolute right-5 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl text-slate-900 shadow-lg transition hover:bg-sky-100"
                        >
                            →
                        </button>

                        <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/90">
                            <p className="text-xs font-semibold uppercase tracking-widest text-sky-700 dark:text-sky-300">
                                Our Philosophy
                            </p>
                            <p className="mt-2 text-sm font-semibold sm:text-base">
                                Learn continuously. Build thoughtfully. Improve daily.
                            </p>
                        </div>
                    </div>

                    <div className="absolute -right-2 top-10 rounded-2xl border border-sky-100 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:-right-8">
                        <span className="text-2xl text-sky-500">✦</span>
                        <p className="mt-1 text-xs font-bold">
                            {partnerImages[activeImage].name}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
