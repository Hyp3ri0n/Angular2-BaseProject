/********************************************/
/*                                          */
/*                  GulpFile                */
/*                                          */
/*       Author : Hyp3ri0n                  */
/*       Date   : 20/01/2017                */
/*                                          */
/********************************************/

var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var tsProject = tsc.createProject('tsconfig.json');
var tslint = require('gulp-tslint');
var sass = require('gulp-sass');


/**
 * Remove dist directory.
 */
gulp.task('clean', function(cb) {
    return del(['dist'], cb);
});

/**
 * Copy all resources that are not TypeScript or CSS files into dist directory.
 */
gulp.task('resources', function() {
    return gulp.src(['src/**/*', '!src/app/**/*.ts', '!**/*.css', '!**/*.scss'])
    	.pipe(gulp.dest('dist'));
});

/**
 * Copy all "*.scss" after compiling them.
 */
gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

/**
 * Copy all ".css" files and minify them.
 */
gulp.task('style', ['sass'],  function() {
    return gulp.src('src/**/*.css')
    	.pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

/**
 * Lint all TypeScript files.
 */
gulp.task('tslint', function() {
    return gulp.src('src/**/*.ts')
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and uglify them.
 */
gulp.task('compile', ['tslint'], function() {
    var tsResult = gulp.src('src/app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
    	.pipe(sourcemaps.write(".", {sourceRoot: '/src'}))
        .pipe(gulp.dest('dist/app/'));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function() {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**/*.js',
            'zone.js/dist/**',
            '@angular/**/bundles/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("dist/assets/vendors/libs/"));
});

/**
 * Watch for changes in TypeScript, HTML and style files.
 */
gulp.task('watch', function () {
    gulp.watch(['src/**/*.ts'], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(['src/**/*.html'], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(['src/**/*.css', 'src/**/*.scss'], ['style']).on('change', function (e) {
        console.log('Style file ' + e.path + ' has been changed. Updating.');
    });
});

/**
 * Build the project.
 */
gulp.task('build', ['resources', 'style', 'compile', 'libs'], function() {
    console.log('Project built.');
});


/**
 * Launch watchers.
 */
gulp.task('default', ['resources', 'style', 'compile', 'libs', 'watch'], function() {
    console.log('Watchers launched ...');
});