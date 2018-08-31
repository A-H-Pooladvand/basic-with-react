<?php

namespace App\Http\Library\Generator;

use App;
use File;
use Illuminate\Http\Request;
use App\Http\Library\Helpers\ModuleHelper;
use App\Http\Library\Database\DatabaseTemplate;

class Database
{
    protected $helper;

    protected $request;

    public function __construct()
    {
        $this->helper = new ModuleHelper;

        $this->request = App::make(Request::class);
    }

    /**
     * Handles database migration file for module.
     */
    public function handle()
    {
        $this->createMigrationFile(new DatabaseTemplate($this->request));
    }

    /**
     * Creates migration file and puts the content inside it.
     *
     * @param DatabaseTemplate $databaseTemplate
     * @return $this
     */
    private function createMigrationFile(DatabaseTemplate $databaseTemplate)
    {
        File::put($this->migrationPath(), $databaseTemplate->get());

        return $this;
    }

    /**
     * Sets migration path and migration file name.
     *
     * @return string
     */
    private function migrationPath()
    {
        return database_path('/migrations/' . $this->helper->migrationTimeFormat() . 'create_' . $this->helper->snakePlural($this->request['title']) . '_table.php');
    }
}