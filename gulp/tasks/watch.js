var gulp = require('gulp');
var path = require('path');

module.exports = function () {

  var lr = require('tiny-lr')();

      lr.listen(35729, function () {
        console.log('Livereload server listening on 35729');
      });

  gulp.watch(['./build/**/*'], function (event) {
    lr.changed({
      body: {
        files: path.relative(__dirname, event.path)
      }
    });
  });

  gulp.watch(['src/app/**/*.js'], ['browserify']);
  //gulp.watch(['src/style/**/*.styl'], ['stylus']);

};
