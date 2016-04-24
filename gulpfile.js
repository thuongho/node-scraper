var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function(){
  nodemon({
    script: 'indeed_ex.js',
    ext: 'js',
    ignore: ['./node_modules/**']
  })
  .on('restart', function(){
    console.log('Restarting...');
  });
});