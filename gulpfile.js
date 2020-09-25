var gulp = require ('gulp');
var sass = require ('gulp-sass');
var browserSync = require('browser-sync').create();

function style(){
    //1. Locate scss file
    return gulp.src('app/scss/**/*.scss')
    //2. pass the file through sass compiler
    .pipe(sass())
    //3. save the compiled CSS
    .pipe(gulp.dest('app/css'))
    //4. stream changes to all browsers
    .pipe(browserSync.stream());
}

//watcher for changes
function watch(){
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch('app/scss/**/*.scss', style);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;
