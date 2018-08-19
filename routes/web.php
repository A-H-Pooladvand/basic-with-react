<?php

Route::group(['namespace' => 'Home'], function () {
    Route::get('/', 'Front\HomeController@show')->name('home');
});

Route::get('admin/dashboard', 'Dashboard\Admin\DashboardController@index');


Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {

    Route::group(['prefix' => 'menus', 'as' => 'menu.', 'namespace' => 'Menu\Admin'], function () {
        Route::get('/', 'MenuController@index')->name('index');
    });

//    Route::group(['prefix' => 'modules', 'as' => 'module.', 'namespace' => 'Module\Admin'], function () {
//    });

    Route::get('{path?}', 'Home\Admin\HomeController@show')->where('path', '.*')->name('react.home');

});