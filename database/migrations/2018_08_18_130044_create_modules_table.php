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


            /*$table->bigIncrements('id');
            $table->bigInteger('votes');
            $table->binary('data');
            $table->boolean('confirmed');
            $table->char('name', 100);
            $table->date('created_at');
            $table->dateTime('created_at');
            $table->dateTimeTz('created_at');
            $table->decimal('amount', 8, 2);
            $table->double('amount', 8, 2);
            $table->enum('level', ['easy', 'hard']);
            $table->float('amount', 8, 2);
            $table->geometry('positions');
            $table->geometryCollection('positions');
            $table->increments('id');
            $table->integer('votes');
            $table->ipAddress('visitor');
            $table->json('options');
            $table->jsonb('options');
            $table->lineString('positions');
            $table->longText('description');
            $table->macAddress('device');
            $table->mediumIncrements('id');
            $table->mediumInteger('votes');
            $table->mediumText('description');
            $table->morphs('taggable');
            $table->multiLineString('positions');
            $table->multiPoint('positions');
            $table->multiPolygon('positions');
            $table->nullableMorphs('taggable');
            $table->nullableTimestamps();
            $table->point('position');
            $table->polygon('positions');
            $table->rememberToken();
            $table->smallIncrements('id');
            $table->smallInteger('votes');
            $table->softDeletes();
            $table->softDeletesTz();
            $table->string('name', 100);
            $table->text('description');
            $table->time('sunrise');
            $table->timeTz('sunrise');
            $table->timestamp('added_on');
            $table->timestampTz('added_on');
            $table->timestamps();
            $table->timestampsTz();
            $table->tinyIncrements('id');
            $table->tinyInteger('votes');
            $table->unsignedBigInteger('votes');
            $table->unsignedDecimal('amount', 8, 2);
            $table->unsignedInteger('votes');
            $table->unsignedMediumInteger('votes');
            $table->unsignedSmallInteger('votes');
            $table->unsignedTinyInteger('votes');
            $table->uuid('id');
            $table->year('birth_year');*/

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
