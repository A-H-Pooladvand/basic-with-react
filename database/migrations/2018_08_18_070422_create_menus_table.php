<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    const TABLE_NAME = 'menus';

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(self::TABLE_NAME, function (Blueprint $table) {
            $table->smallIncrements('id');
            $table->unsignedSmallInteger('parent_id')->nullable();
            $table->string('title', 191)->index();
            $table->string('path', 300)->default('#');
            $table->string('icon', 50)->nullable();
            $table->string('permission', 50);
            $table->enum('type', ['admin', 'front', 'panel']);

            $table->foreign('parent_id')->references('id')->on(static::TABLE_NAME)->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(self::TABLE_NAME);
    }
}
