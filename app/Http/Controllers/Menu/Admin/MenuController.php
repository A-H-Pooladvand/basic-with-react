<?php

namespace App\Http\Controllers\Menu\Admin;

use App\Menu;
use Cache;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Collection;

class MenuController extends Controller
{
    protected $parents;

    protected $subMenus;

    protected $menus;

    public function __construct()
    {
        $this->parents = new Collection();

        $this->subMenus = new Collection();

        $this->menus = new Collection();
    }

    public function index()
    {
        return Cache::remember('_admin_menus_', 60, function () {
            return Menu::with('children')->where([
                'type' => 'admin',
                'parent_id' => null
            ])->get();
        });
    }
}
