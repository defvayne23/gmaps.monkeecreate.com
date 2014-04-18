var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    size = require('gulp-size'),
    gutil = require('gulp-util');

var paths = {
  styles: ['css/normalize.css','css/main.scss','css/syntax.css'],
  scripts: ['js/init.js']
};

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(concat('app.scss'))
    .pipe(sass().on('error', gutil.beep))
    .pipe(rename('app.css'))
    .pipe(size())
    .pipe(gulp.dest('css/'))
    .pipe(rename('app.min.css'))
    .pipe(sass({style: 'compressed'}))
    .pipe(size())
    .pipe(gulp.dest('css/'))
    .pipe(notify({ message: 'Styles task complete.' }));
});

gulp.task('lint', function () {
  return gulp.src(paths.scripts)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', ['lint'], function() {
  return gulp.src(paths.scripts)
    .pipe(rename('app.js'))
    .pipe(size())
    .pipe(gulp.dest('js/'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest('js/'))
    .pipe(notify({ message: 'Scripts task complete.' }));
});

gulp.task('watch', function() {
  gulp.watch('css/*.scss', ['styles']);
  gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts']);
