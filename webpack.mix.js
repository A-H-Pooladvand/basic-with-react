let mix = require('laravel-mix');

mix.react('resources/assets/admin/js/index.js', 'public')
    .sass('resources/assets/admin/scss/_init.scss', 'public');