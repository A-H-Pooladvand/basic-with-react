<?php

namespace App\Http\Library\Helpers;

class ModuleHelper
{
    public function migrationTimeFormat(): string
    {
        return now()->format('Y_m_d_His_');
    }

    public function snakePlural(string $title): string
    {
        return snake_case(
            str_plural($title)
        );
    }
}