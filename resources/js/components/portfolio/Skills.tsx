
export default function Skills() {
    return (
        <section
            id="skills"
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
        >
            <div className="mx-auto max-w-7xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
                    Skills —
                </p>

                <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Tools &amp;
                        <span className="text-sky-600 dark:text-sky-400">
                            Technologies.
                        </span>
                    </h2>

                    <p className="max-w-md leading-7 text-slate-600 dark:text-slate-300">
                        Technologies and tools we have explored through
                        coursework, practice, and personal projects.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

                    {/* To change a skill image, replace the img src URL. */}
                    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="grid h-16 w-16 place-items-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                alt="HTML logo"
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="mt-5 font-bold">HTML</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Web page structure
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="grid h-16 w-16 place-items-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                alt="CSS logo"
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="mt-5 font-bold">CSS &amp; Tailwind</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Responsive styling
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="grid h-16 w-16 place-items-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                alt="JavaScript logo"
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="mt-5 font-bold">JavaScript</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Interactive functionality
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="grid h-16 w-16 place-items-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                                alt="PHP logo"
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="mt-5 font-bold">PHP</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Server-side development
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="grid h-16 w-16 place-items-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                alt="MySQL logo"
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="mt-5 font-bold">MySQL</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Database management
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="grid h-16 w-16 place-items-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                                alt="Flutter logo"
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="mt-5 font-bold">Flutter</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Mobile applications
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="grid h-16 w-16 place-items-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                                alt="Figma logo"
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="mt-5 font-bold">Figma</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            UI design and wireframes
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="grid h-16 w-16 place-items-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                alt="Visual Studio Code logo"
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="mt-5 font-bold">VS Code</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Code editor
                        </p>
                    </article>

                </div>
            </div>
        </section>
    );
}
