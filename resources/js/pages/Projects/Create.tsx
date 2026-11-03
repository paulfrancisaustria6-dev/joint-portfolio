import { Head, Link } from '@inertiajs/react';
import ProjectForm from '@/components/ProjectForm';

export default function Create() {
    return (
        <>
            <Head title="Add Project" />
            <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
                <div className="mx-auto max-w-3xl">
                    <Link href="/projects" className="text-sky-600">
                        ← Back to Projects
                    </Link>
                    <h1 className="mb-2 mt-6 text-3xl font-bold">Add New Project</h1>
                    <p className="mb-8 text-slate-500">Enter the project details below.</p>
                    <ProjectForm />
                </div>
            </main>
        </>
    );
}