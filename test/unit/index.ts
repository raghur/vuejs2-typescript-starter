import Vue from 'vue'
import 'es6-promise/auto'

Vue.config.productionTip = false

// Polyfill fn.bind() for PhantomJS
/* tslint:disable:no-var-require */
Function.prototype.bind = require('function-bind')

// requires all tests in `project/unit/*.spec.js`
const tests = require.context('./specs', true, /\.spec\.ts$/)
tests.keys().forEach(tests)

// requires all components in `ClientApp/**/*.js|ts|vue`
const components = require.context('../../ClientApp/', true, /\.(ts|vue)$/)
components.keys().forEach(components)
