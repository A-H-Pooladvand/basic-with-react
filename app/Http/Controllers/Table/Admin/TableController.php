<?php

namespace App\Http\Controllers\Table\Admin;

use DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TableController extends Controller
{
    public function index()
    {
        $tables = DB::select('SHOW TABLES');

        $tables = array_map(function ($table) {
            return $table->Tables_in_basic_with_react;
        }, $tables);

        return $tables;
    }
}
