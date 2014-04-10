var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify')
    gutil = require('gulp-util');

var paths = {
  styles: ['css/normalize.css','css/main.scss','css/syntax.css'],
  scripts: []
};

gulp.task('styles', function () {
  gulp.src(paths.styles)
    .pipe(concat('app.scss'))
    .pipe(sass().on('error', gutil.beep))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('css/'))
    .pipe(rename('app.min.css'))
    .pipe(sass({style: 'compressed'}))
    .pipe(gulp.dest('css/'))
    .pipe(notify({ message: 'Styles task complete.' }));
});

// gulp.task('scripts', function() {
//   // Minify and concat JS
//   gulp.src(paths.scripts)
//     .pipe(gulp.dest('js/'))
//     .pipe(rename('app.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('js/'))
//     .pipe(notify({ message: 'Scripts task complete.' }));
// });

gulp.task('gmaps', function() {
  // Minify and concat JS
  gulp.src('js/gMaps/jquery.gMaps.js')
    .pipe(rename('jquery.gMaps.min.js'))
    .pipe(uglify({ preserveComments: 'some' }))
    .pipe(gulp.dest('js/gMaps/'))
    .pipe(notify({ message: 'gMaps task complete.' }));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('css/*.scss', ['styles']);
  gulp.watch('js/gMaps/jquery.gMaps.js', ['gmaps']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['styles','gmaps']);
