var gulp = require('gulp'),
    gulp_babel = require('gulp-babel'),
    gulp_connect = require('gulp-connect');

var outputDir = 'builds/development/';

var jsSources = 'builds/development/';

gulp.task('js', function()
{
    gulp.src(jsSources)
        .pipe(gulp_babel({presets: ["es2015"]}))
        .pipe(gulp.dest(outputDir + 'public'));
});

gulp.task('connect', function()
{
    gulp_connect.server
    ({
        root: outputDir,
        livereload: true
    });
});

gulp.task('default', ['connect']);