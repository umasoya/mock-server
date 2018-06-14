var gulp = require('gulp');
var ejs  = require('gulp-ejs');
var fs   = require('fs');

gulp.task('ejs', function() {
    var json = JSON.parse(fs.readFileSync('./json/config.json'));
    gulp.src('ejs/**/*.ejs')
    .pipe(ejs(json, {}, {"ext": ".html"}))
    .pipe(gulp.dest('public'))
});
