
import { useState } from 'react';

type Project = {
    id: number;
    partner: 'Paul' | 'Dave';
    image: string | null;
    category: string;
    title: string;
    description: string;
    technologies: string[];
    project_url?: string | null;
};

type Filter = 'All' | 'Paul' | 'Dave';

export default function Projects({ projects }: { projects: Project[] }) {
    const [activePartner, setActivePartner] = useState<Filter>('All');

    const filteredProjects = projects.filter(
        (project) =>
            activePartner === 'All' ||
            project.partner === activePartner,
    );

    const filterClass = (filter: Filter) =>
        `rounded-full px-6 py-3 text-sm font-semibold transition ${
            activePartner === filter
                ? 'bg-slate-950 text-white dark:bg-sky-400 dark:text-slate-950'
                : 'border border-slate-300 bg-white text-slate-600 hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300'
        }`;

    return (
        <section
            id="projects"
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="scroll-mt-20 border-y border-slate-200 bg-white/70 px-5 py-20 sm:px-8 sm:py-28 dark:border-slate-800 dark:bg-slate-900/40"
        >
            <div className="mx-auto max-w-7xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
                    Projects —
                </p>

                <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Selected
                        <span className="text-sky-600 dark:text-sky-400">
                            {' '}Projects.
                        </span>
                    </h2>

                    <p className="max-w-md leading-7 text-slate-600 dark:text-slate-300">
                        A collection of academic and personal projects that
                        reflect our learning, creativity, and technical growth.
                    </p>
                </div>

                {/* PROJECT FILTER */}
                <div className="mb-10 flex flex-wrap gap-3">
                    <button
                        type="button"
                        onClick={() => setActivePartner('All')}
                        aria-pressed={activePartner === 'All'}
                        className={filterClass('All')}
                    >
                        All Projects
                    </button>

                    <button
                        type="button"
                        onClick={() => setActivePartner('Paul')}
                        aria-pressed={activePartner === 'Paul'}
                        className={filterClass('Paul')}
                    >
                        Paul's Projects
                    </button>

                    <button
                        type="button"
                        onClick={() => setActivePartner('Dave')}
                        aria-pressed={activePartner === 'Dave'}
                        className={filterClass('Dave')}
                    >
                        Dave's Projects
                    </button>
                </div>

                {/* PROJECT CARDS */}
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <article
                            key={project.id}
                            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
                        >
                            <div className="overflow-hidden bg-sky-50 dark:bg-slate-900">
                                {project.image && (
                                    <img
                                        src={`/storage/${project.image}`}
                                        alt={project.title}
                                        className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                )}
                            </div>

                            <div className="p-6">
                                {/* PROJECT OWNER */}
                                <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                                    {project.partner}'s Project
                                </span>

                                {/* PROJECT CATEGORY */}
                                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-sky-700 dark:text-sky-300">
                                    {project.category}
                                </p>

                                <h3 className="mt-3 text-xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                                    {project.description}
                                </p>

                                {/* TECHNOLOGIES */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies?.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700 dark:bg-sky-950 dark:text-sky-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* PROJECT LINK */}
                                <a
                                    href={project.project_url || '#contact'}
                                    target={project.project_url ? '_blank' : undefined}
                                    rel={project.project_url ? 'noopener noreferrer' : undefined}
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:gap-3 dark:text-sky-300"
                                >
                                    Ask About Project
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* EMPTY STATE */}
                {filteredProjects.length === 0 && (
                    <p className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500 dark:border-slate-700">
                        No projects added yet.
                    </p>
                )}
            </div>
        </section>
    );
}
