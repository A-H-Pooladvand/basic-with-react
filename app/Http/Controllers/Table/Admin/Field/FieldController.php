<?php

namespace App\Http\Controllers\Table\Admin\Field;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Schema;

class FieldController extends Controller
{
    public function index(Request $request)
    {
        return Schema::getColumnListing($request['tableName']);
    }
}
