'use strict';

import fs          from 'fs';
import gulp        from 'gulp';
import ejs         from 'gulp-ejs';
import sass        from 'gulp-sass';
import browserSync from 'browser-sync';

/*** consts ***/
const path = {
    publicDir: 'public/',
    jsonFile: 'json/config.json',

    ejs: {src: 'ejs/**/*.ejs', dest: 'public/'},
    sass: {src: 'scss/**/*.scss', dest: 'public/css/'}
};

const ejsOptions = {
    "ext": ".html"
};

const sassOptions = {
    outputStyle: 'expanded'
};


/*** tasks ***/
gulp.task('ejs', () => {
    const json = JSON.parse(fs.readFileSync(path.jsonFile));
    gulp.src(path.ejs.src)
        .pipe(ejs(json, {}, ejsOptions))
        .pipe(gulp.dest(path.ejs.dest))
});

gulp.task('sass', () => {
    gulp.src(path.sass.src)
        .pipe(sass(sassOptions))
        .pipe(gulp.dest(path.sass.dest));
});

gulp.task('watch', ['browserSync-init'], () => {
    gulp.watch(path.sass.src, ['sass', 'reload']);
    gulp.watch(path.ejs.src, ['ejs', 'reload']);
});

gulp.task('browserSync-init', () => {
    browserSync.init({
        server: {
            baseDir: path.publicDir
        }
    });
});

gulp.task('reload', () => {
    browserSync.reload();
});

gulp.task('default', ['ejs', 'sass']);
