var gulp = require('./gulp')([
	'browserify',
	//'stylus',
	'watch',
	'serve'
]);

gulp.task('build', ['browserify']);
gulp.task('default', ['build', 'watch', 'serve']);
