var gulp = require('gulp'),
    gulp_connect = require('gulp-connect'),
    gulp_babel = require('gulp-babel'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

var outputDir = 'builds/development/';

var jsDir = 'process/js/';

// Main js render bundle
gulp.task('js', function()
{
    // gulp.src(jsDir + 'index.js')
    //     .pipe(gulp_babel({presets: ["es2015", "react"]}))
    //     .pipe(gulp_browserify())
    //     .pipe(gulp.dest(outputDir + 'assets/js'))
    //     .pipe(gulp_connect.reload());

    browserify(jsDir + 'main.js')
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(outputDir));
    
    browserify(jsDir + 'render.js')
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('render.js'))
        .pipe(gulp.dest(outputDir + 'assets/js'));
});

gulp.task('watch', function()
{
    gulp.watch(jsDir + '**/*', ['js']);
});

gulp.task('connect', function()
{
    gulp_connect.server
    ({
        root: outputDir,
        livereload: true
    });
});

gulp.task('default', ['js','connect', 'watch']);