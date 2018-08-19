<?php

namespace Tests\Unit;

use App\Menu;
use Illuminate\Support\Collection;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    /** @test */
    public function visit_admin_panel()
    {
        $response = $this->call('GET', route('admin.home'), []);

        $this->assertEquals(200, $response->getStatusCode());
    }

    /** @test */
    public function validate_menu_items()
    {
        $response = $this->call('GET', route('admin.menu.index'), []);

        $this->assertInstanceOf(Collection::class, $response->getOriginalContent());
        $this->assertInstanceOf(Menu::class, $response->getOriginalContent()[0]);
    }
}