<?php

namespace App\Http\Controllers\DataType\Admin;

use Cache;
use App\DataType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DataTypeController extends Controller
{
    public function index()
    {
        return Cache::remember('_data_types_index_', 1440, function () {
            return DataType::get();
        });
    }
}
