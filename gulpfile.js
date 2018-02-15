var gulp = require("gulp");
var sass = require("gulp-sass");
var bs = require("browser-sync").create();
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

gulp.task("browser-sync", ["sass"], function() {
  bs.init({
    server: {
      baseDir: "./dist"
    }
  });
});



gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(minify({
        ext:{
            min:'.js'
        },
        exclude: ['tasks'],
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
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("watch", ["browser-sync", "sass", "minify", "compress"], function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
  gulp.watch("./html/*.html", ["minify"]);
  gulp.watch("js/*.js", ["compress"]);
  gulp.watch("*.html").on("change", bs.reload);
  gulp.watch("*.scss").on("change", bs.reload);
  gulp.watch("*.js").on("change", bs.reload);
});
