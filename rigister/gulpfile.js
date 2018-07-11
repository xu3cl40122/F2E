var gulp = require('gulp')
var stylus = require('gulp-stylus');

gulp.task('styl', function () {
    return gulp.src('*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('*.styl', ['styl']);
});