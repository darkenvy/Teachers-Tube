// See bottom for usage nodes

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    minify = require('gulp-minifier'),
    tscConfig = require('./tsconfig.json');

var appSrc = 'builds/development/',
    tsSrc = 'process/typescript/';

// Updates changed to HTML to webserver
gulp.task('html', function() {
  gulp.src(appSrc + '**/*.html');
});

// Updates changed to CSS (not sass) to webserver
gulp.task('css', function() {
  gulp.src(appSrc + '**/*.css');
});

gulp.task('sass', function() {
  return gulp
    .src(tsSrc + '../sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(appSrc + 'css/'));
});

gulp.task('minify', function() {
  return gulp
    .src(appSrc + '**/*')
    .pipe(minify({
      minify: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest(appSrc + '../deploy/'));
});

gulp.task('copylibs', function() {
  return gulp
    .src([
      // 'node_modules/@angular',
      'node_modules/@angular/common/bundles/common.umd.js',
      'node_modules/@angular/core/bundles/core.umd.js',
      'node_modules/@angular/compiler/bundles/compiler.umd.js',
      'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/ng2-youtube-player/bundles/ng2-youtube-player.js'
    ])
    .pipe(gulp.dest(appSrc + 'js/lib/nodemodules'));
});

gulp.task('typescript', function () {
  return gulp
    .src(tsSrc + '**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(appSrc + 'js/'));
});

gulp.task('watch', function() {
  gulp.watch(tsSrc + '**/*.ts', ['typescript']);
  gulp.watch(appSrc + 'css/*.css', ['css']);
  gulp.watch(tsSrc + '../sass/*.scss', ['sass']);
  gulp.watch(appSrc + '**/*.html', ['html']);
});

gulp.task('minify-watch', function() {
  gulp.watch(appSrc + '**/*', ['minify']);
})

gulp.task('webserver', function() {
  gulp.src(appSrc)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('minify-webserver', function() {
  gulp.src(appSrc + '../deploy/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});


// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Task one is regular development
// Task two is for testing deployment with minification (much slower)
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

gulp.task('default', ['sass', 'typescript', 'watch', 'webserver']);
// gulp.task('default', ['sass', 'copylibs', 'typescript', 'watch', 'minify-watch', 'minify-webserver']);
