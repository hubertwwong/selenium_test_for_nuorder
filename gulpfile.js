// gulpfile.js
const gulp = require('gulp');
const selenium = require('selenium-standalone');

// test task to see if chrome works.
gulp.task('test', () => {
  console.log('It works!');
});

// install selenium standalone
gulp.task('selenium-install', function (done) {
  selenium.install({
    baseURL: 'https://selenium-release.storage.googleapis.com',
    drivers: {
      chrome: {
        // check for more recent versions of chrome driver here:
        // https://chromedriver.storage.googleapis.com/index.html
        version: '2.33',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      }
    },
    logger: function(msg) {
      // So you can see the installation progress
      console.log(msg);
    }
  }, done);
});