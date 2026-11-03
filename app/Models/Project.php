<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'partner',
        'title',
        'description',
        'category',
        'year',
        'technologies',
        'image',
        'project_url',
        'repository_url',
    ];

    protected function casts(): array
    {
        return [
            'technologies' => 'array',
        ];
    }
}