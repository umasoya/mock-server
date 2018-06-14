var gulp = require('gulp');
var ejs = require('gulp-ejs');

gulp.task('ejs', function() {
    gulp.src('ejs/**/*.ejs')
    .pipe(ejs({},{},{"ext": ".html"}))
    .pipe(gulp.dest('public'))
});
