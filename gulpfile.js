var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat');



gulp.task('minifyJs', function (done) {
    gulp.src([
      'wwwroot/js/*.js',
      'wwwroot/js/article/*.js',
      'wwwroot/js/newsitem/*.js',
      'wwwroot/js/homepage/*.js',
      'wwwroot/js/network/*.js'
    ])
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('./wwwroot/lib/_app'))


});

gulp.task('copyImg', function (done) {
    gulp.src([
        'wwwroot/img/*.png'
    ])
    .pipe(gulp.dest('./wwwroot/lib/img/'))
});

gulp.task('minifyCss', function (done) {
    gulp.src([
        'wwwroot/css/*.css'
    ])
    .pipe(cleanCSS())
    .pipe(concatCSS('bundle.css'))
    .pipe(gulp.dest('./wwwroot/lib/_app'))
});