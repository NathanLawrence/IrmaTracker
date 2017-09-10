var gulp = require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass'),
	shell = require('gulp-shell'),
	webserver = require('gulp-webserver'),
	flatten = require('gulp-flatten'),
	babel = require('gulp-babel')
    uglify = require('gulp-uglify'),
	path = require('path');

gulp.task('test', function(){
	gutil.log('This is a test.');
});

gulp.task('sass', function(){
	gulp.src('./django-project/static/components/sass/*.scss')
		.pipe(compass({
			project: path.join(__dirname, 'components'),
			css: 'css',
			sass: 'sass',
			require: ['susy']
		}))
		.pipe(flatten())
		.pipe(gulp.dest('./django-project/static/css'));
});

gulp.task('img', function(){
	return gulp.src('django-project/static/components/img/*')
	.pipe(gulp.dest('django-project/static/build/img'));
});

gulp.task('js', function(){
	return gulp.src('./django-project/static/components/js/**/*.js')
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		// .pipe(uglify())
	.pipe(gulp.dest('./django-project/static/js'));
});

gulp.task('fonts', function(){
	return gulp.src('django-project/static/components/components/fonts/*')
	.pipe(gulp.dest('build/fonts'));
});

gulp.task('html', function(){
	return gulp.src('components/**/*.html')
	.pipe(gulp.dest('build'));
});

gulp.task('build', ['img', 'js', 'html', 'sass']);

gulp.task('watch',function(){
	gutil.log('Gulp will say that this task has finished, but don\'t believe its dirty lies.');
	gutil.log('Hit \^c to actually exit watch mode.');
	gulp.watch('**/*.js',['js']);
	gulp.watch('**/*.html',['html']);
	gulp.watch('**/*.jpg',['img']);
    gulp.watch('**/*.scss',['sass']);
});

gulp.task('serve',['build'], function(){
	gutil.log('Gulp will say that this task has finished, but don\'t believe its dirty lies.');
	gutil.log('Hit \^c to actually exit watch mode.');
	gulp.src('build')
		.pipe(webserver({
			livereload: true,
			directorylisting: true,
			open: true
		}))
	gulp.watch('**/*.js',['js']);
	gulp.watch('**/*.html',['html']);
	gulp.watch('**/*.jpg',['img']);
    gulp.watch('**/*.scss',['sass']);
});