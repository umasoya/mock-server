const fs   = require('fs');
const gulp = require('gulp');
const ejs  = require('gulp-ejs');
const sass = require('gulp-sass');

gulp.task('ejs', () => {
    const json = JSON.parse(fs.readFileSync('./json/config.json'));
    gulp.src('ejs/**/*.ejs')
        .pipe(ejs(json, {}, {"ext": ".html"}))
        .pipe(gulp.dest('public'))
});

gulp.task('sass', () => {
    gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('ejs/**/*.ejs', ['ejs']);
});

gulp.task('default', ['ejs', 'sass']);
