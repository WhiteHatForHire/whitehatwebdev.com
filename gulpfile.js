var gulp = require("gulp");
var sass = require("gulp-sass");
var bs = require("browser-sync").create();
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task("browser-sync", ["sass"], function() {
  bs.init({
    server: {
      baseDir: "./dist"
    }
  });
});


gulp.task('compress', function() {
  return gulp.src('./js/*.js')
    .pipe(minify({
        ext:{
          src:'-debug.js',
          min:'.js'
        },
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('minify', function() {
  return gulp.src('./html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(bs.reload({ stream: true }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("watch", ["browser-sync", "sass", "minify", "compress"], function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
  gulp.watch("./html/*.html", ["minify"]);
  gulp.watch("js/*.js", ["compress"]);
  gulp.watch("./html/*.html").on("change", bs.reload);
  gulp.watch("./sass/*.scss").on("change", bs.reload);
  gulp.watch("./js/*.js").on("change", bs.reload);
});
