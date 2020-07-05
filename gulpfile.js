'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create();

const paths = {
    styles: {
        src: 'app/scss/style.scss',
        dest: 'app'
    }
}

const style = () => {
    return (
        gulp
            .src(paths.styles.src)
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(browserSync.stream())
    )
}

const reload = () => {
    browserSync.reload();
}

const watch = () => {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
    gulp.watch('app/scss/**.scss', style)
    gulp.watch(['app/**.html', 'scss/**.scss'], reload)
}

exports.watch = watch;