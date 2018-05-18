const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');
const imagemin = require('gulp-imagemin');

// 建立服务器并启用livereload
gulp.task('connect', () => {
    connect.server({
        root: 'dest',
        port: 8888,
        livereload: true
    })
});
// html文档流
gulp.task('html', () => {
    gulp.src('./src/*.html')
    .pipe(gulp.dest('./dest'))
    .pipe(connect.reload());
});
//css文档流
gulp.task('css', () => {
    gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./dest/css'))
    .pipe(connect.reload());
});
// sass文档流
gulp.task('sass', () => {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dest/css'));
});
// js压缩
gulp.task('compress', function (cb) {
    pump([
          gulp.src(['./src/libs/*.js']),
          uglify(),
          gulp.dest('./dest/libs'),
      ],
      [
          gulp.src(['./src/module/*.js']),
          uglify(),
          gulp.dest('./dest/module'),
      ],function () {
          connect.reload()
      });
   

});
// img压缩
gulp.task('imagemin', () => 
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dest/img'))
        .pipe(connect.reload())
);
// html watch
gulp.task('watch', () => {
    gulp.watch(['./src/*.html'], ['html']),
    gulp.watch(['./src/css/*.css'], ['css']),
    gulp.watch(['./src/img/*'], ['imagemin']),
    gulp.watch(['./src/**/*.js'], ['compress'])

});
// sass watch
gulp.task('sass:watch', () => {
    gulp.watch('./src/sass/**/*.scss', ['sass'])
});
// default 命令
gulp.task('default', ['connect', 'watch', 'sass:watch', 'imagemin','compress']);







