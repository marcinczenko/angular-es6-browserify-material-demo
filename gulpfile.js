var gulp = require('gulp');
var browserify = require('browserify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var path = require('path');
var mold = require('mold-source-map');
var exorcist = require('exorcist');
var mkdirp = require('mkdirp');

var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./app/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/stylesheets'));
});
 
gulp.task('build', function() {
  var entryFile = './app/js/angular-es6-browserify-demo.js';
  var mapfile = path.join(__dirname, 'dist/index.js.map');

  mkdirp.sync('dist');

  var bundler = browserify({
    extensions: ['.js', '.es6.js', '.jsx'],    
    debug: true
  });

  bundler
    .add(entryFile)
    .transform('babelify')
    .transform({add: true, single_quotes: true}, 'browserify-ngannotate')
    .transform('browserify-css', {rootDir: '.', minify: true, autoInject: true })
    .transform({global: true}, 'uglifyify')

  var stream = bundler.bundle();
  stream.on('error', function (err) { console.error(err.toString()) });

  stream
    .pipe(mold.transformSourcesRelativeTo('./'))
    .pipe(exorcist(mapfile))
    .pipe(source(entryFile))    
    .pipe(rename('index.js'))    
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch(['./app/js/**/*'], ['build']);
});

gulp.task('default', ['sass', 'build']);
