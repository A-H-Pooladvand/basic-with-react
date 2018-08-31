<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modules', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();


            /*$tableNames->bigIncrements('id');
            $tableNames->bigInteger('votes');
            $tableNames->binary('data');
            $tableNames->boolean('confirmed');
            $tableNames->char('name', 100);
            $tableNames->date('created_at');
            $tableNames->dateTime('created_at');
            $tableNames->dateTimeTz('created_at');
            $tableNames->decimal('amount', 8, 2);
            $tableNames->double('amount', 8, 2);
            $tableNames->enum('level', ['easy', 'hard']);
            $tableNames->float('amount', 8, 2);
            $tableNames->geometry('positions');
            $tableNames->geometryCollection('positions');
            $tableNames->increments('id');
            $tableNames->integer('votes');
            $tableNames->ipAddress('visitor');
            $tableNames->json('options');
            $tableNames->jsonb('options');
            $tableNames->lineString('positions');
            $tableNames->longText('description');
            $tableNames->macAddress('device');
            $tableNames->mediumIncrements('id');
            $tableNames->mediumInteger('votes');
            $tableNames->mediumText('description');
            $tableNames->morphs('taggable');
            $tableNames->multiLineString('positions');
            $tableNames->multiPoint('positions');
            $tableNames->multiPolygon('positions');
            $tableNames->nullableMorphs('taggable');
            $tableNames->nullableTimestamps();
            $tableNames->point('position');
            $tableNames->polygon('positions');
            $tableNames->rememberToken();
            $tableNames->smallIncrements('id');
            $tableNames->smallInteger('votes');
            $tableNames->softDeletes();
            $tableNames->softDeletesTz();
            $tableNames->string('name', 100);
            $tableNames->text('description');
            $tableNames->time('sunrise');
            $tableNames->timeTz('sunrise');
            $tableNames->timestamp('added_on');
            $tableNames->timestampTz('added_on');
            $tableNames->timestamps();
            $tableNames->timestampsTz();
            $tableNames->tinyIncrements('id');
            $tableNames->tinyInteger('votes');
            $tableNames->unsignedBigInteger('votes');
            $tableNames->unsignedDecimal('amount', 8, 2);
            $tableNames->unsignedInteger('votes');
            $tableNames->unsignedMediumInteger('votes');
            $tableNames->unsignedSmallInteger('votes');
            $tableNames->unsignedTinyInteger('votes');
            $tableNames->uuid('id');
            $tableNames->year('birth_year');*/

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('modules');
    }
}
