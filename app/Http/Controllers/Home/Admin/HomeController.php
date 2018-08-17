<?php

namespace App\Http\Controllers\Home\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function show()
    {
        return view('home.admin.show');
    }
}
