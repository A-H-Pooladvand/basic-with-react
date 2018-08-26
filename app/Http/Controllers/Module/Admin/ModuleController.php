<?php

namespace App\Http\Controllers\Module\Admin;

use App\Http\Library\Helpers\ModuleHelper;
use File;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Library\Database\DatabaseTemplate;

class ModuleController extends Controller
{
    protected $helper;

    public function __construct(ModuleHelper $moduleHelper)
    {
        $this->helper = $moduleHelper;
    }

    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        $databaseContent = (new DatabaseTemplate($request))->get();

        $path = database_path('/migrations/' . $this->helper->migrationTimeFormat() . 'create_' . $this->helper->snakePlural($request['title']) . '_table.php');

        File::put($path, $databaseContent);
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
