import { Head, Link, router, usePage } from '@inertiajs/react';

type Project = {
    id: number;
    partner: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    image: string | null;
};

type PageProps = {
    projects: Project[];
    flash?: {
        success?: string;
    };
};

export default function Index({ projects }: { projects: Project[] }) {
    const { flash } = usePage().props as unknown as PageProps;

    const deleteProject = (id: number) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            router.delete(`/projects/${id}`);
        }
    };

    return (
        <>
            <Head title="Manage Projects" />
            <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold">Manage Projects</h1>
                            <p className="mt-2 text-slate-500">
                                Add, edit, and manage portfolio projects.
                            </p>
                        </div>

                        <Link
                            href="/projects/create"
                            className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
                        >
                            + Add Project
                        </Link>
                    </div>

                    {flash?.success && (
                        <div className="mb-6 rounded-xl bg-green-100 p-4 text-green-800">
                            {flash.success}
                        </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                            >
                                {project.image && (
                                    <img
                                        src={`/storage/${project.image}`}
                                        alt={project.title}
                                        className="h-48 w-full object-cover"
                                    />
                                )}

                                <div className="p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                                        {project.partner} · {project.category}
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold">
                                        {project.title}
                                    </h2>

                                    <p className="mt-2 text-sm text-slate-600">
                                        {project.description}
                                    </p>

                                    <p className="mt-3 text-xs text-slate-500">
                                        {project.technologies?.join(', ')}
                                    </p>

                                    <div className="mt-5 flex gap-3">
                                        <Link
                                            href={`/projects/${project.id}/edit`}
                                            className="rounded-lg bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => deleteProject(project.id)}
                                            className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {projects.length === 0 && (
                        <p className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
                            No projects have been added yet.
                        </p>
                    )}
                </div>
            </main>
        </>
    );
}