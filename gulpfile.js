var gulp = require('gulp'),
    gulp_connect = require('gulp-connect'),
    gulp_run = require('gulp-run'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

var outputDir = 'builds/development/';

var jsDir = 'process/js/';

gulp.task('js', function()
{
    // gulp.src(jsDir + 'index.js')
    //     .pipe(gulp_babel({presets: ["es2015", "react"]}))
    //     .pipe(gulp_browserify())
    //     .pipe(gulp.dest(outputDir + 'assets/js'))
    //     .pipe(gulp_connect.reload());

    // Encountering a lot of problems with the require
    // TypeError: fs.readFileSync...
    // browserify(jsDir + 'main.js')
    //     .transform('babelify')
    //     .bundle()
    //     .pipe(source('main.js'))
    //     .pipe(gulp.dest(outputDir));
    
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

gulp.task('serve', function()
{
    gulp_run('electron builds/development/main.js').exec();
});

gulp.task('default', ['watch', 'js', 'serve']);