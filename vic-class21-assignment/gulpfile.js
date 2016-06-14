'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');

var files = ['*.js', './app/*.js'];

const paths = {
  js:__dirname + '/app/client.js',
  html:__dirname + '/app/index.html',
  css:__dirname + '/app/cows.css'
};

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('copy', () => {
  gulp.src(paths.html)
  .pipe(gulp.dest('./build'));
});

gulp.task('copy', () => {
  gulp.src(paths.css)
  .pipe(gulp.dest('./build'));
});

gulp.task('bundle', () => {
  gulp.src(paths.js)
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('build', ['copy', 'bundle']);

gulp.watch(files, ['lint', 'copy', 'build']);
