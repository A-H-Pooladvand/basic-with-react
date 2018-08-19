<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    public $timestamps = false;

    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id');
    }
}
