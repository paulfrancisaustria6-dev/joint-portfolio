import { Head, Link } from '@inertiajs/react';
import ProjectForm from '@/components/ProjectForm';

type Project = {
    id: number;
    partner: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    image: string | null;
    project_url: string | null;
    repository_url: string | null;
};

export default function Edit({ project }: { project: Project }) {
    return (
        <>
            <Head title="Edit Project" />
            <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
                <div className="mx-auto max-w-3xl">
                    <Link href="/projects" className="text-sky-600">
                        ← Back to Projects
                    </Link>
                    <h1 className="mb-2 mt-6 text-3xl font-bold">Edit Project</h1>
                    <p className="mb-8 text-slate-500">Update the project details below.</p>
                    <ProjectForm project={project} />
                </div>
            </main>
        </>
    );
}