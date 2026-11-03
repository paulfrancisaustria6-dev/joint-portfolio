import { useState } from 'react';
import { useForm } from '@inertiajs/react';

type ProjectData = {
    id?: number;
    partner: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    image?: string | null;
    project_url?: string | null;
    repository_url?: string | null;
};

export default function ProjectForm({ project }: { project?: ProjectData }) {
    const [technologyInput, setTechnologyInput] = useState(
        project?.technologies?.join(', ') ?? '',
    );

    const form = useForm({
        partner: project?.partner ?? 'Paul',
        title: project?.title ?? '',
        description: project?.description ?? '',
        category: project?.category ?? '',
        technologies: project?.technologies ?? [],
        image: null as File | null,
        project_url: project?.project_url ?? '',
        repository_url: project?.repository_url ?? '',
    });

    const submit = (event: React.FormEvent) => {
        event.preventDefault();

        form.transform((data) => ({
            ...data,
            technologies: technologyInput
                .split(',')
                .map((item) => item.trim())
                .filter(Boolean),
        }));

        if (project) {
            form.post(`/projects/${project.id}?_method=PUT`, {
                forceFormData: true,
            });
        } else {
            form.post('/projects', { forceFormData: true });
        }
    };

    const fieldClass =
        'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100';

    return (
        <form onSubmit={submit} className="space-y-5">
            <div>
                <label className="mb-2 block text-sm font-semibold">Partner</label>
                <select
                    className={fieldClass}
                    value={form.data.partner}
                    onChange={(e) => form.setData('partner', e.target.value)}
                >
                    <option value="Paul">Paul</option>
                    <option value="Dave">Dave</option>
                </select>
                <p className="text-sm text-red-600">{form.errors.partner}</p>
            </div>

            {(['title', 'category', 'project_url', 'repository_url'] as const).map(
                (name) => (
                    <div key={name}>
                        <label className="mb-2 block text-sm font-semibold">
                            {name === 'project_url'
                                ? 'Project URL'
                                : name === 'repository_url'
                                  ? 'Repository URL'
                                  : name === 'title'
                                    ? 'Project Title'
                                    : 'Category'}
                        </label>
                        <input
                            className={fieldClass}
                            value={form.data[name] ?? ''}
                            onChange={(e) => form.setData(name, e.target.value)}
                        />
                        <p className="text-sm text-red-600">{form.errors[name]}</p>
                    </div>
                ),
            )}

            <div>
                <label className="mb-2 block text-sm font-semibold">Description</label>
                <textarea
                    className={fieldClass}
                    rows={4}
                    value={form.data.description}
                    onChange={(e) => form.setData('description', e.target.value)}
                />
                <p className="text-sm text-red-600">{form.errors.description}</p>
            </div>

            <div>
                <label className="mb-2 block text-sm font-semibold">
                    Technologies (separate with commas)
                </label>
                <input
                    className={fieldClass}
                    placeholder="HTML, CSS, JavaScript"
                    value={technologyInput}
                    onChange={(e) => setTechnologyInput(e.target.value)}
                />
                <p className="text-sm text-red-600">{form.errors.technologies}</p>
            </div>

            <div>
                <label className="mb-2 block text-sm font-semibold">Project Image</label>
                <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    className={fieldClass}
                    onChange={(e) =>
                        form.setData('image', e.target.files?.[0] ?? null)
                    }
                />
                <p className="text-sm text-red-600">{form.errors.image}</p>
            </div>

            <button
                type="submit"
                disabled={form.processing}
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50"
            >
                {form.processing
                    ? 'Saving...'
                    : project
                      ? 'Update Project'
                      : 'Save Project'}
            </button>
        </form>
    );
}