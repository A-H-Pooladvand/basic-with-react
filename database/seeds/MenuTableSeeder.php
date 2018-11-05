<?php

use App\Menu;
use Illuminate\Database\Seeder;

class MenuTableSeeder extends Seeder
{
    /**
     * The menu model instance.
     *
     * @var Menu $parent
     */
    private $parent;

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $adminItems = $this->adminItems();

        $this->iterateThroughMenus($adminItems);
    }

    private function iterateThroughMenus(array $menus)
    {
        foreach ($menus as $menu) {
            $this->make($menu);

            if (isset($menu['sub'])) {
                $this->iterateThroughMenus($menu['sub']);
            }
        }
    }

    private function make(array $menu)
    {
        $parent = Menu::create([
            'title' => $menu['title'],
            'path' => $menu['path'] ?? '#',
            'icon' => $menu['icon'] ?? null,
            'type' => 'admin',
            'permission' => $menu['permission'],
            'parent_id' => isset($menu['path']) ? $this->parent->id : null
        ]);

        if (isset($menu['sub'])) {
            $this->parent = $parent;
        }
    }

    private function adminItems()
    {
        $prefix = '/admin/';

        return [
            [
                'title' => 'داشبورد',
                'icon' => 'fas fa-home',
                'permission' => 'admin',
                'sub' => [
                    [
                        'title' => 'پنل مدیریت',
                        'path' => $prefix,
                        'permission' => 'admin-dashboard',
                    ]
                ]
            ],
            [
                'title' => 'کاربران',
                'icon' => 'far fa-user',
                'permission' => 'user',
                'sub' => [
                    [
                        'title' => 'افزودن کاربر',
                        'path' => $prefix . 'users/create',
                        'permission' => 'user-create',
                    ],
                    [
                        'title' => 'لیست کاربران',
                        'path' => $prefix . 'users',
                        'permission' => 'user-index',
                    ],
                    [
                        'title' => 'افزودن نقش',
                        'path' => $prefix . 'roles/create',
                        'permission' => 'role-create',
                    ],
                    [
                        'title' => 'لیست نقش ها',
                        'path' => $prefix . 'roles',
                        'permission' => 'role-index',
                    ],
                ]
            ],
            [
                'title' => 'ماژول',
                'icon' => 'fab fa-drupal',
                'permission' => 'module',
                'sub' => [
                    [
                        'title' => 'افزودن ماژول',
                        'path' => $prefix . 'modules/create',
                        'permission' => 'module-create'
                    ],
                    [
                        'title' => 'لیست کاربران',
                        'path' => $prefix . 'modules',
                        'permission' => 'module-index'
                    ]
                ]
            ],
        ];
    }
}
