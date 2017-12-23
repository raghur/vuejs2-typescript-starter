import 'isomorphic-fetch' // Allow ie11 to use fetch
import './static/site.css'
import 'bootstrap'
import Vue from 'vue'
import './hooks' // This must be imported before any component
import Directives from './directives'

Vue.use(Directives)

/* tslint:disable-next-line:no-unused-expression */
new Vue({
    el: '#app-root',
    template: '<app/>',
    store: require('./store').default,
    router: require('./router').default,
    render: h => h(require('./components/app/app.vue').default)
})
