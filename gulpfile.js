var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatJs', function() {
	// ensure the module is registered first, then everything else
	// no collisions will be had
	gulp.src(['./js/module.js', './js/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./assets'));
});

// run concatJs once, then set up watcher
gulp.task('dev', ['concatJs'], function() {
	gulp.watch('./js/**/*.js', ['concatJs']);
});
