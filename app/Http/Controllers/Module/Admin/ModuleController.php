<?php

namespace App\Http\Controllers\Module\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ModuleController extends Controller
{
    protected $classNames = [];

    public function __construct()
    {
        $this->classNames = $this->setClassNames();
    }

    public function index()
    {
        //
    }

    public function store()
    {
        foreach ($this->classNames as $className) {
            $class = new $className;

            $class->handle();
        }
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

    private function setClassNames()
    {
        return [
            \App\Http\Library\Generator\Database::class,
            \App\Http\Library\Generator\Controller::class
        ];
    }
}
