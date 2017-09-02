// requires all tests in `project/unit/*.spec.js`
const tests = require.context('./unit', true, /\.spec\.ts$/);
tests.keys().forEach(tests);

// requires all components in `ClientApp/**/*.js|ts|vue`
const components = require.context('../ClientApp/', true, /\.(ts|vue)$/);

components.keys().forEach(components);