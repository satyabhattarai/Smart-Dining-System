<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menu', function (Blueprint $table) {
            $table->timestamps();
            $table->string('menu_unique_id', 6)->primary();
            $table->text('description')->nullable();
            $table->decimal('price', 8, 2);
            $table->string('name');
            $table->string('image')->nullable();
            $table->string('alt')->nullable();
            $table->integer('waiting_time')->nullable(); //in minutes
            $table->text('ingredients')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu');
    }
};
