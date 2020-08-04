const { src, dest, parallel, watch, series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function browser() {
    browserSync.init({
        server: {
            baseDir: "./source/"
        },
        notify: false,
    })
}

function watchFiles() {
    watch("./source/sass/**/*.scss", css);
    watch("./source/*.html").on('change', browserSync.reload);
}

function css() {
    return src("./source/sass/style.scss")
        .pipe(sass())
        .pipe(dest("./source/css"))
        .pipe(browserSync.stream());
}

exports.css = css;
exports.default = series(
    series(css), 
    parallel(browser, watchFiles)
);