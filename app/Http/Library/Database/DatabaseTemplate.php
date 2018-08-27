<?php
/** Created by Amirhossein Pooladvand */

namespace App\Http\Library\Database;

use Illuminate\Http\Request;
use App\Http\Library\Helpers\ModuleHelper;

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
        return '<?php

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
            ' . $this->getDatabaseFields() . '
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
}';
    }

    /**
     * Prepares database fields to append in database.
     *
     * @return string
     */
    private function getDatabaseFields()
    {
        $fields = '';

        foreach ($this->request['fields'] as $index => $field) {
            $fields .=
                '$table->' .
                $this->request['data_types'][$index] .
                '(\'' . $field . '\', ' . $this->request['fields_options'][$index] . ');' .
                $this->skipEndNewLine($index) .
                "\t\t\t";
        }

        return $fields;
    }

    /**
     * Skip inserting new line if we are at last loop which means
     * loop $index + 1 is equal to count of fields.
     *
     * @param int $index
     * @param int $length
     * @return string
     */
    private function skipEndNewLine(int $index)
    {
        return $index + 1 === count($this->request['fields']) ? "" : "\n";
    }
}