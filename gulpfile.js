'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    spritesmith  = require('gulp.spritesmith'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: {
        css: '',
        img: 'build/img/',
        icons: 'build/img/icons',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/**/*.js',
        sass: 'assets/scss/style.scss',
        img: 'src/img/**/*.*',
        //video: 'src/video/**/*.*',
        svg: 'src/svg/*.svg',
        icons: 'src/img/icons/*.png',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        sass: 'assets/scss/**/*.*',
        img: 'src/img/**/*.*'
        //video: 'src/video/**/*.*',
    },
    clean: './build'
};

//server
gulp.task('server', function () {
    connect.server({
        livereload: true
    });
});


//sass
gulp.task('sass:build', function () {
    return gulp.src(path.src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.build.css));
});


gulp.task('watch', function(){
    watch([path.watch.sass], function(event, cb) {
        gulp.start('sass:build');
    });
});


gulp.task('default', ['sass:build', 'server', 'watch']);