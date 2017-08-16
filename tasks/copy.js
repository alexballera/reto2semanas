import gulp from 'gulp'

gulp.task('copy', () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
  gulp.src(['./src/bower_components/**'])
    .pipe(gulp.dest('./build/bower_components'))
  gulp.src('./src/styles/fonts/fonts-mfizz/**/*.*')
    .pipe(gulp.dest('./public/styles/fonts/fonts-mfizz'))
    .pipe(gulp.dest('./build/styles/fonts/fonts-mfizz'))
  gulp.src('./src/styles/fonts/flexslider/**/*.*')
    .pipe(gulp.dest('./public/styles/fonts/flexslider'))
    .pipe(gulp.dest('./build/styles/fonts/flexslider'))
  gulp.src('./src/styles/fonts/fonts/**/*.*') // Comentar si se va a usar el cdnjs
    .pipe(gulp.dest('./public/styles/fonts/fonts')) // Comentar si se va a usar el cdnjs
    .pipe(gulp.dest('./build/styles/fonts/fonts'))
  gulp.src([
    './src/scripts/vendors/**'
  ]).pipe(gulp.dest('./public/scripts/vendors'))
  gulp.src([
    './src/scripts/lib/**'
  ]).pipe(gulp.dest('./public/scripts/lib'))
  gulp.src([
    './src/*.txt',
    './src/sitemap.*',
    './src/404.html',
    './src/*.php',
    './src/*.xml',
    './src/.htaccess'
  ]).pipe(gulp.dest('./public'))
})
