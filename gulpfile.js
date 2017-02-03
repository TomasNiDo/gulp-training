var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync').create();

gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('uglify', function() {
	gulp.src('src/js/*.js')
		.pipe(concat('ppap.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['uglify']);
});

gulp.task('default', ['browser-sync', 'uglify', 'watch']);