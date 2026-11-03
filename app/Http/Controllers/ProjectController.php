<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Projects/Index', [
            'projects' => Project::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'partner' => ['required', Rule::in(['Paul', 'Dave'])],
            'title' => [
                'required', 'string', 'min:3', 'max:150',
                Rule::unique('projects')->where('partner', $request->partner),
            ],
            'description' => ['required', 'string', 'min:20'],
            'category' => ['required', 'string', 'max:100'],
            'year' => ['required', 'integer', 'digits:4', 'min:1900', 'max:2100'],
            'technologies' => ['required', 'array', 'min:1'],
            'technologies.*' => ['required', 'string', 'max:50'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'project_url' => ['nullable', 'url', 'max:2048'],
            'repository_url' => ['nullable', 'url', 'max:2048'],
        ], [
            'image.max' => 'The project image must not exceed 2 MB.',
            'technologies.required' => 'Please add at least one technology.',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')
                ->store('projects', 'public');
        }

        Project::create($validated);

        return redirect()->route('projects.index')
            ->with('success', 'Project created successfully.');
    }

    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', [
            'project' => $project,
        ]);
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'partner' => ['required', Rule::in(['Paul', 'Dave'])],
            'title' => [
                'required', 'string', 'min:3', 'max:150',
                Rule::unique('projects')
                    ->where('partner', $request->partner)
                    ->ignore($project->id),
            ],
            'description' => ['required', 'string', 'min:20'],
            'category' => ['required', 'string', 'max:100'],
            'year' => ['required', 'integer', 'digits:4', 'min:1900', 'max:2100'],
            'technologies' => ['required', 'array', 'min:1'],
            'technologies.*' => ['required', 'string', 'max:50'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'project_url' => ['nullable', 'url', 'max:2048'],
            'repository_url' => ['nullable', 'url', 'max:2048'],
        ], [
            'image.max' => 'The project image must not exceed 2 MB.',
            'technologies.required' => 'Please add at least one technology.',
        ]);

        if ($request->hasFile('image')) {
            if ($project->image) {
                Storage::disk('public')->delete($project->image);
            }

            $validated['image'] = $request->file('image')
                ->store('projects', 'public');
        } else {
            unset($validated['image']);
        }

        $project->update($validated);

        return redirect()->route('projects.index')
            ->with('success', 'Project updated successfully.');
    }

    public function destroy(Project $project)
    {
        if ($project->image) {
            Storage::disk('public')->delete($project->image);
        }

        $project->delete();

        return redirect()->route('projects.index')
            ->with('success', 'Project deleted successfully.');
    }
}