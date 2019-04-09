const gulp = require("gulp")
const sass = require("gulp-sass")
const watchSass = require("gulp-watch-sass")
 
gulp.task("sass:watch", () => watchSass([
  "./**/*.{scss,css}",
  "!./libs/**/*"
])
  .pipe(sass())
  .pipe(gulp.dest("./css")));

gulp.task("default", () => {

});