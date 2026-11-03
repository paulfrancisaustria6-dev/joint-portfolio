
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('partner', 50);
            $table->string('title', 150);
            $table->text('description');
            $table->string('category', 100);
            $table->json('technologies');
            $table->string('image')->nullable();
            $table->string('project_url')->nullable();
            $table->string('repository_url')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
