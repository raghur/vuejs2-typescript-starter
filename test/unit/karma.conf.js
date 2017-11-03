var path = require('path')
let env = {
    test: 1
}

function isDebug (arg) {
    return arg === '--debug'
}
if (process.argv.some(isDebug)) {
    console.log('Is Debugging', true)
    env.debugging = 1
}
var webpackConfig = require('../../webpack.config')(env)

module.exports = function (config) {
    config.set({
        // To run in additional browsers:
        // 1. install corresponding karma launcher
        // http://karma-runner.github.io/0.13/config/browsers.html
        // 2. add it to the `browsers` array below.
        browsers: ['jsdom'],
        frameworks: [
            'mocha', 'sinon-chai', 'phantomjs-shim'
        ],
        reporters: [
            'spec', 'coverage-istanbul'
        ],
        files: [
            '../../wwwroot/dist/vendor.js', {
                pattern: '../../wwwroot/dist/*.map',
                included: false,
                served: true
            },
            '../../node_modules/babel-polyfill/dist/polyfill.js',
            'index.ts'
        ],
        preprocessors: {
            'index.ts': ['webpack', 'sourcemap']
        },
        plugins: [
            // Launchers
            'karma-phantomjs-launcher',
            'karma-jsdom-launcher',

            // Test Libraries
            'karma-mocha',
            'karma-sinon-chai',

            // Preprocessors
            'karma-webpack',
            'karma-sourcemap-loader',

            // Reporters
            'karma-spec-reporter',
            'karma-coverage-istanbul-reporter',

            // Shim
            'karma-phantomjs-shim'
        ],
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        coverageIstanbulReporter: {
            reports: [
                'html', 'text-summary'
            ],
            dir: path.join(__dirname, 'coverage'),
            fixWebpackSourcePaths: true
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        }
    })
}
