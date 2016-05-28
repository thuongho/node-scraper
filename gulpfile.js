var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function(){
  nodemon({
    script: 'cheerio_ex.js',
    ext: 'js',
    ignore: [
      './node_modules/**',
      './downloads/**'
    ]
  })
  .on('restart', function(){
    console.log('Restarting...');
  });
});