<?php

namespace App\Http\Controllers\Home\Front;

use App\DataType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function show()
    {
        return view('home.front.show');
    }
}
