var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var bytediff = require('gulp-bytediff');
var webserver = require('gulp-webserver');

gulp.task('ctrlMinifyAndConcat',function(){
    console.log('starting ctrlMinifyAndConcat task');
    return gulp.src('scripts/*/*.js')
        .pipe(plumber(function (err) {
            console.log('Scripts task error: ');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('index.js'))
        .pipe(ngAnnotate({add: true}))
        .pipe(bytediff.start())
        .pipe(uglify({mangle: true}))
        .pipe(bytediff.stop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('deploy', gulp.series('ctrlMinifyAndConcat', 'webserver'));

// https://www.npmjs.com/package/gulp-open
// na ovoj adresi ima i resenje da se pokrene bilo koji
// browser sam sa gulp naredbom...
// ali, to nema veze...