<?php

namespace App\Http\Controllers\User\Admin;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index()
    {
        return User::get();
    }

    public function store(Request $request)
    {
        $user = $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'mobile' => 'required',
            'username' => 'required',
            'password' => 'required',
        ]);

        User::create($user);

        return 'It\'s done !';
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
