var gulp       = require('gulp')
var browserify = require('gulp-browserify')

module.exports = function () {

  return gulp.src(['src/app/app.js'])
    .pipe(browserify({
      transform: ['reactify'],
      insertGlobals: true,
      debug: true
    }))
    .on('error', function (err) {
      console.error(err);
    })
    .pipe(gulp.dest('./build'));

};