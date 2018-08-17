<?php
Route::group(['namespace' => 'Home'], function () {
    Route::get('admin', 'Admin\HomeController@show');
    Route::get('/', 'Front\HomeController@show');
});

Route::get('admin/dashboard', 'Dashboard\Admin\DashboardController@index');