const glob = require('glob-all');
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const PurgecssPlugin = require('purgecss-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Tailwind PurgeCSS Extractor
 |--------------------------------------------------------------------------
 |
 | Custom PurgeCSS extractor for Tailwind CSS that allows special characters
 | in class names.
 |
 | https://github.com/FullHuman/purgecss#extractor
 */
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your OctoberCMS Theme. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('assets/src/js/app.js', 'assets/build/js/app.js');

mix
    .sass('assets/src/sass/app.sass', 'assets/build/css/app.css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    });

// Purge
if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new PurgecssPlugin({
                // Specify the locations of any files you want to scan for class names.
                paths: glob.sync([
                    path.join(__dirname, "content/**/*.*"),
                    path.join(__dirname, "layouts/**/*.*"),
                    path.join(__dirname, "pages/**/*.*"),
                    path.join(__dirname, "partials/**/*.*")
                ]),
                extractors: [
                    {
                        extractor: TailwindExtractor,

                        // Specify the file extensions to include when scanning for class names.
                        extensions: ["html", "htm", "md", "js", "php", "vue"]
                    }
                ],
                whitelistPatternsChildren: []
            })
        ]
    });
}
