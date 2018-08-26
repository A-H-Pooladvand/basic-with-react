<?php
/** Created by Amirhossein Pooladvand */

namespace App\Http\Library\Database;

use App\Http\Library\Helpers\ModuleHelper;
use File;
use Illuminate\Http\Request;

class DatabaseTemplate
{
    protected $moduleName;

    protected $helper;

    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;

        $this->helper = new ModuleHelper;
    }

    public function get()
    {
        return '
        <?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Create' . $this->helper->snakePlural($this->request['title']) . 'Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(\'' . $this->helper->snakePlural($this->request['title']) . '\', function (Blueprint $table) {
            $table->increments(\'id\');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(\'' . $this->helper->snakePlural($this->request['title']) . '\');
    }
}

        ';
    }
}