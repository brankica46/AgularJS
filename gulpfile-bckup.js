//MODULI-PLUGINOVI...
var gulp = require('gulp');

//Modul-plugin za minifikaciju koda - gulp-uglify
var uglify = require('gulp-uglify');

//Modul za osvezavanje stranice
var livereload = require('gulp-livereload');

//Modul za konkatenaciju
var concat = require('gulp-concat');

//Modul za minifikaciju CSS-a
var minifyCss = require('gulp-minify-css');

//Modul za autoprefikser
var autoprefikser = require('gulp-autoprefixer');

//Modul za greske
var plumber = require('gulp-plumber');

//Modul za SASS
var sass = require('gulp-sass');

//Modul za source maps
var sourcemaps = require('gulp-sourcemaps');

//Modul za brisanje fajlova i foldera
var del = require('del');


//PATHOVI
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var CSS_PATH = 'public/css/**/*.css';
var DIST_PATH = 'public/dist';

//task stilovi
// gulp.task('styles',function(){
//     console.log('starting styles task');
//     return gulp.src(['public/css/reset.css',CSS_PATH])
//                .pipe(plumber(function(err){
//                    console.log('Styles Task Error');
//                    console.log(err);
//                    this.emit('end');
//                }))
//                .pipe(autoprefikser({
//                    browsers:['last 2 versions','ie 8']
//                }))
//                .pipe(concat('styles.css'))
//                .pipe(minifyCss())
//                .pipe(gulp.dest(DIST_PATH))
//                .pipe(livereload());
// });

//task sass
gulp.task('styles',function(){
    console.log('starting styles task');
    return gulp.src('public/scss/styles.scss')
        .pipe(plumber(function(err){
            console.log('Styles Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefikser({
            browsers:['last 2 versions','ie 8']
        }))
        //.pipe(concat('styles.css'))
        //.pipe(minifyCss())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

//task scripts
gulp.task('scripts',function(){
    console.log('starting scripts task');
    return gulp.src('public/scripts/*.js')
        .pipe(plumber(function (err) {
            console.log('Scripts task error: ');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/dist'))
        .pipe(livereload());
});

//default task
gulp.task('default',function(){
    console.log('starting default task');
});

//gulp watch
gulp.task('watch',['clean'],function(){
    console.log('starting watch task');
    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH,['scripts']);
    //gulp.watch(CSS_PATH,['styles']);
    gulp.watch('public/scss/**/*.scss',['styles']);
});

gulp.task('clean',function(){
    return del.sync([
        DIST_PATH
    ])
});