<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Cache::flush();
//         $this->call(UsersTableSeeder::class);
         $this->call(MenuTableSeeder::class);
         $this->call(DataTypeTableSeeder::class);
    }
}
