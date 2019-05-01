const gulp = require('gulp');
const sass = require('gulp-sass');

/** task para SASS */
gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

/** task para watch */
gulp.task('sass:watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});

/** task default */
gulp.task('default', ['sass', 'sass:watch']);