module.exports = function(config) {
  return config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'www/js/vendor.js',
      'www/js/app.js',
      'app/**/*.test.js'
    ],
    exclude: [],
    preprocessors: {
      'www/js/app.js': ['coverage']
    },
    coverageReporter: {
      type: 'text-summary'
    },
    reporters: ['progress', 'junit', 'html', 'coverage'],
    junitReporter: {
      outputDir: 'reports/',
      suite: ''
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autowatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
