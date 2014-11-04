// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon', 'chai-sinon'],
      
    // list of files / patterns to load in the browser
    files: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/angular/angular.js',
            './node_modules/ng-midway-tester/src/ngMidwayTester.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-route/angular-route.js',
            './node_modules/angular-sanitize/angular-sanitize.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './node_modules/toastr/toastr.js',
            './node_modules/moment/moment.js',
            './bower_components/extras.angular.plus/ngplus-overlay.js',
            './src/test/unit/lib/bindPolyfill.js',

            './src/client/js/app.module.js',
            './src/client/js/**/*.module.js',
            './src/client/js/**/*.js',

            /* MOCHA */
            './src/client/test/unit/lib/specHelper.js',
            './src/client/test/unit/lib/mockData.js',

            './src/client/test/unit/basics/**/*.src.js',
            './src/client/test/unit/basics/**/*.spec.js',

            // all specs ... comment out during early test training
            //'./src/client/test/unit/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
            // Excluding midway tests for now; comment this line out when you want to run them
            './src/client/test/unit/midway/**/*.spec.js',
            './src/client/js/**/*.spaghetti.js'
    ],

    proxies: {
        '/': 'http://localhost:8888/'
    },

    plugins: [
      'karma-chai',
      'karma-chai-sinon',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-firefox-launcher',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-sinon'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/client/js/**/*.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    coverageReporter: {
        type: 'lcov',
        dir: 'test/coverage'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
