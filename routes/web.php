<?php

Route::group(['namespace' => 'Home'], function () {
    Route::get('/', 'Front\HomeController@show')->name('home');
});

Route::get('admin/dashboard', 'Dashboard\Admin\DashboardController@index');

Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {

    Route::group(['prefix' => 'menus', 'as' => 'menu.', 'namespace' => 'Menu\Admin'], function () {
        Route::get('/', 'MenuController@index')->name('index');
    });

    Route::group(['prefix' => 'data-types', 'as' => 'data.type.', 'namespace' => 'DataType\Admin'], function () {
        Route::post('/', 'DataTypeController@index')->name('index');
    });

    Route::group(['prefix' => 'tables', 'as' => 'tableNames.', 'namespace' => 'Table\Admin'], function () {
        Route::post('/', 'TableController@index')->name('index');

        Route::group(['prefix' => 'fields', 'as' => 'field.', 'namespace' => 'Field'], function () {
            Route::post('/', 'FieldController@index')->name('index');
        });

    });

    Route::group(['prefix' => 'modules', 'as' => 'module', 'namespace' => 'Module\Admin'], function () {
        Route::post('/', 'ModuleController@store')->name('store');
    });

    Route::get('{path?}', 'Home\Admin\HomeController@show')->where('path', '.*')->name('react.home');

});