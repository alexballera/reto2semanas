import gulp from 'gulp'
require('require-dir')('./tasks')

/* Instalar las siguientes dependencias:

sudo npm i -D babel-preset-latest babelify browser-sync browserify
del gulp gulp-autoprefixer gulp-cache gulp-cssnano gulp-gh-pages
gulp-htmlmin gulp-imagemin gulp-inject gulp-notify gulp-plumber
gulp-rename gulp-sass gulp-sass-glob gulp-uglify gulp-uncss
imagemin-jpegtran imagemin-optipng imagemin-pngquant imagemin-svgo
jquery require-dir vinyl-buffer vinyl-source-stream

*/
// Build
gulp.task('build', ['copy'], () => {
  gulp.start('build:html', 'styles', 'build:scripts', 'build:images', 'inject')
})

// Default
gulp.task('default', ['clean'], () => {
  gulp.start('serve', 'watch', 'build')
})
