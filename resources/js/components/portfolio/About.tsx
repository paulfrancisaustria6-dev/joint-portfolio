
export default function About() {
    return (
        <section
            id="about"
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="scroll-mt-20 border-y border-slate-200 bg-white/70 px-5 py-20 sm:px-8 sm:py-28 dark:border-slate-800 dark:bg-slate-900/40"
        >
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
                        About Us —
                    </p>

                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                        A Quick
                        <span className="text-sky-600 dark:text-sky-400">
                            {' '}Introduction.
                        </span>
                    </h2>

                    <div className="mt-6 h-1 w-16 rounded-full bg-sky-500"></div>
                </div>

                <div>
                    <p className="text-lg leading-8 text-slate-700 sm:text-xl dark:text-slate-200">
                        We are Information Technology students interested in
                        software development and digital design.
                    </p>

                    <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                        We enjoy learning how technology works and using that
                        knowledge to create useful digital solutions. Through
                        academic activities and personal projects, we continue
                        to develop our programming, design, and problem-solving
                        skills.
                    </p>

                    <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                        Our goal is to become capable developers who build
                        reliable applications with thoughtful design and a
                        positive user experience.
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-sky-300 dark:border-slate-800 dark:bg-slate-950">
                            <span className="text-2xl text-sky-600 dark:text-sky-400">⌘</span>
                            <h3 className="mt-4 font-bold">Problem Solver</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Finding practical ways to solve challenges.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-sky-300 dark:border-slate-800 dark:bg-slate-950">
                            <span className="text-2xl text-sky-600 dark:text-sky-400">↗</span>
                            <h3 className="mt-4 font-bold">Always Learning</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Improving through practice and curiosity.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-sky-300 dark:border-slate-800 dark:bg-slate-950">
                            <span className="text-2xl text-sky-600 dark:text-sky-400">◎</span>
                            <h3 className="mt-4 font-bold">Team Player</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                Valuing collaboration and communication.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
