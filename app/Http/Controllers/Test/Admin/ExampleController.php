<?php

namespace App\Http\Controllers\Test\Admin;

use App\Module;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ExampleController extends Controller
{
    public function index()
    {
        return Module::get();
    }

    public function store(Request $request)
    {
        Module::create([

        ]);
    }

    public function show($id)
    {
        return Module::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        Module::findOrFail($id)->update([

        ]);
    }

    public function destroy($id)
    {
        Module::findOrFail($id)->delete();
    }
}
