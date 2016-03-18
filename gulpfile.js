var gulp = require('gulp');
var watch = require('gulp-watch');
// unused imports
var fs = require('fs');
var path = require('path');
var del = require('del');
var lazypipe = require('lazypipe');
var gutil = require('gutil');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var spritesmith = require('gulp.spritesmith');
var browserSync = require('browser-sync').create();
var replace = require('gulp-replace');
var plumber = require('gulp-plumber');
var progeny = require('gulp-progeny');
var runSequence = require('run-sequence');
var cached = require('gulp-cached');
var str2base64 = require('gulp-css-str2base64');
var file2base64 = require('gulp-css-file2base64');
var count = require('gulp-count');
var nconf = require('nconf');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');

var glob = 'src/**/*.txt';

gulp.task('dosmth', function(){
  return gulp.src(glob)
    .pipe(gulp.dest('dest/'));
});

gulp.task('default', function() {
  watch(glob, function(){
    gulp.start('dosmth');
  });
});
