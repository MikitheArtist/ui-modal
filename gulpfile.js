"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const debug = require("gulp-debug");
const gulpIf = require("gulp-if");
const del = require("del");
const browserSync = require('browser-sync').create();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";

gulp.task("styles", function (){
  return gulp.src("frontend/styles/style.scss")
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest("public"));
});

gulp.task("clean", function(){
  return del("public");
});

gulp.task("assets", function() {
  return gulp.src("frontend/assets/**")
     .pipe(gulp.dest("public"));

});

gulp.task("build", gulp.series(
    "clean", 
     gulp.parallel("styles", "assets"))
);

gulp.task('serve', function () {
  browserSync.init({
    server: './public',
    port: 8080
  });

  browserSync.watch('./**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
  "build",'serve'
));

