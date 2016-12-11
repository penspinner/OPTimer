var gulp = require('gulp'),
    gulp_babel = require('gulp-babel'),
    gulp_browserify = require('gulp-browserify'),
    gulp_connect = require('gulp-connect');

var outputDir = 'builds/development/';

var jsDir = 'src/js/';

gulp.task('js', function()
{
    gulp.src(jsDir + 'index.js')
        .pipe(gulp_babel({presets: ["es2015", "react"]}))
        .pipe(gulp_browserify())
        .pipe(gulp.dest(outputDir + 'assets/js'));
});

gulp.task('watch', function()
{
    gulp.watch(jsSources, ['js']);
});

gulp.task('connect', function()
{
    gulp_connect.server
    ({
        root: outputDir,
        livereload: true
    });
});

gulp.task('default', ['js','connect']);