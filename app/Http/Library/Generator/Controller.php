<?php

namespace App\Http\Library\Generator;

use App;
use Illuminate\Http\Request;

class Controller
{
    protected $request;

    public function __construct()
    {
        $this->request = App::make(Request::class);
    }

    public function handle()
    {
//        return $this->request->toArray();

    }
}
