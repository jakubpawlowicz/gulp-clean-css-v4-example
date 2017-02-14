var path = require('path');

var gulp = require('gulp');
var useref = require('gulp-useref');
var cleanCSS = require('gulp-clean-css');
var gulpif = require('gulp-if');
var uncache = require('gulp-uncache');

var sourceDir = path.resolve('src');
var targetDir = path.resolve('public');

gulp.task('lib-resources', function () {
  return gulp.src(['src/lib/**/*', '!src/lib/**/*.css'], { base: sourceDir })
    .pipe(gulp.dest(targetDir));
});

gulp.task('build', ['lib-resources'], function () {
  process.chdir(sourceDir);

  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulpif('*.css', cleanCSS({ rebaseTo: sourceDir })))
    .pipe(uncache())
    .pipe(gulp.dest(targetDir));
});
