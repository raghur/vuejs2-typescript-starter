const path = require('path')
let env = {test: 1}
var webpackConfig = require('./webpack.config')(env)

module.exports = function (config) {
  config.set({
    // To run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage-istanbul'],
    files: [
        'wwwroot/dist/vendor.js',
        'node_modules/babel-polyfill/dist/polyfill.js',
        'test/index.js', 
        ],
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap']
    },
    plugins: [
        // Launchers
        'karma-phantomjs-launcher',

        // Test Libraries
        'karma-mocha',
        'karma-sinon-chai',

        // Preprocessors
        'karma-webpack',
        'karma-sourcemap-loader',

        // Reporters
        'karma-spec-reporter',
        'karma-coverage-istanbul-reporter'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageIstanbulReporter: {
        reports: ['html', 'text-summary'],
        dir: path.join(__dirname, 'coverage'),
        fixWebpackSourcePaths: true
    }
  })
}
