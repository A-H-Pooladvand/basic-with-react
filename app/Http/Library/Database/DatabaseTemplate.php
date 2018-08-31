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

class Create' . ucwords($this->request['title']) . 'Table extends Migration
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
            ' . $this->setDatabaseColumns() . '
            $table->timestamps();
            
            ' . $this->setDatabaseForeignKeys() . '
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
    private function setDatabaseColumns()
    {
        $columns = '';

        $fieldOptions = $this->request['fields_options'];

        // $table->string('title', 100);
        foreach ($this->request['fields'] as $index => $field) {
            $columns .=
                '$table->' . $this->request['data_types'][$index] . '(\'' . $field . '\'' . (isset($fieldOptions[$index]) ? ', ' . $fieldOptions[$index] : null) . ');' . $this->skipEndNewLine($index, $this->request['fields']) . "\t\t\t";
        }

        return $columns;
    }

    /**
     * Setup foreign keys.
     *
     * @return string
     */
    private function setDatabaseForeignKeys()
    {
        $foreignKeys = '';

        foreach ($this->request['tables'] as $index => $table) {

            if ( ! $table) {
                continue;
            }

            $foreignKeys .= '$table->foreign(\'' . $this->request['fields'][$index] . '\')->references(\'id\')->on(\'' . $table . '\')->onUpdate(\'cascade\')->onDelete(\'cascade\');' . $this->skipEndNewLine($index, array_filter($this->request['tables'])) . "\t\t\t";
        }

        return $foreignKeys;
    }

    /**
     * Skip inserting new line if we are at last loop which means
     * loop $index + 1 is equal to count of fields.
     *
     * @param int $index
     * @param array $countableArray
     * @return string
     */
    private function skipEndNewLine(int $index, array $countableArray)
    {
        return $index + 1 >= count($countableArray) ? "" : "\n";
    }
}