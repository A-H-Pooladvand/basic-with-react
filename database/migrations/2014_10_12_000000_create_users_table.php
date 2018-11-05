<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    const TABLE_NAME = 'users';

    public function up()
    {
        Schema::create(static::TABLE_NAME, function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('is_active')->nullable();
            $table->string('first_name', 100)->nullable();
            $table->string('last_name', 100)->nullable();
            $table->string('email', 100)->unique();
            $table->string('mobile', 100)->nullable();
            $table->string('username', 100)->nullable();
            $table->string('image', 100)->nullable();
            $table->string('password', 150);
            $table->softDeletes();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists(static::TABLE_NAME);
    }
}
