var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    //prefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-clean-css'),
    //cp = require('child_process'),
    //hygienist = require('hygienist-middleware'),
    //browserSync = require('browser-sync'),
    bourbon = require('bourbon').includePaths,
    neat = require('bourbon-neat').includePaths;


// Recompile SASS
gulp.task('sass', function () {
  return gulp.src('theme/sass/main.sass')
    .pipe(sass({
      includePaths: [bourbon, neat]
    }).on('error', sass.logError))
    .pipe(rename('main.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('app/css'));
});

// Watch Task
gulp.task('watch', function() {
  gulp.watch('theme/sass/**', ['sass']);
  //gulp.watch(['*.html', 'theme/includes/*.html', 'theme/layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['watch']);
