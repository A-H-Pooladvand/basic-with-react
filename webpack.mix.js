let mix = require('laravel-mix');

mix.react('resources/assets/admin/js/index.js', 'public/assets/admin.js')
    .sass('resources/assets/admin/scss/_init.scss', 'public/assets/admin.css').options({
    processCssUrls: false
}).copyDirectory('node_modules/vazir-font/dist', 'public/assets')
    .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/assets/webfonts');
