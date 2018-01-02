(function (r) {
    "use strict";
    var scss = r("gulp-scss");
    var gulp = r("gulp");
    const sourcemaps = require('gulp-sourcemaps');
    const babel = require('gulp-babel');
    const concat = require('gulp-concat');
    const swig = require('gulp-swig');

    gulp.task('babel', () =>
        gulp.src('src/es/**/*.js')
                .pipe(sourcemaps.init())
                .pipe(babel({
                    presets: ['env']
                }))
                // .pipe(concat('all.js'))
                // .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest("dist/js")));
    
    gulp.task("scss", function () {
        gulp.src("src/scss/**/*.scss")
            .pipe(scss())
            .pipe(gulp.dest("dist/css"));
    });

    gulp.task('swig', function() {
        gulp.src('src/html/**/*.html')
          .pipe(swig({defaults: { cache: false }}))
          .pipe(gulp.dest('./dist/'))
    });

    gulp.task('dev',['babel','scss','swig']);
    gulp.task('watch',function(){
        gulp.watch(['src/es/**/*.js'],['babel']);
        gulp.watch('src/scss/**/*.scss',['scss']);
        gulp.watch('src/html/**/*.html',['swig']);
    });
    gulp.task("default", ["babel","scss",'swig','dev','watch']);
}(require));