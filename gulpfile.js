var gulp = require('gulp')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')

const paths = {
  templates: 'src/**/*.html'
}

gulp.task('copy-html', function () {
  return gulp.src(paths.templates)
    .pipe(gulp.dest("lib"))
})

gulp.task('ts', function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("lib"))
})

gulp.task('watch-ts', function () {
  return gulp
    .watch('src/**/*.ts', ['ts'])
})

gulp.task('watch-html', function () {
  return gulp
    .watch(paths.templates, ['copy-html'])
})

gulp.task('default', ['watch-ts', 'watch-html'], function () {
})
