import './static/site.css'
import 'bootstrap'
import Vue from 'vue'
import './hooks' // This must be imported before any component
import router from './router'
import store from './store'
import directives from './directives'

Vue.use(directives)

/* tslint:disable-next-line:no-unused-expression */
new Vue({
    el: '#app-root',
    template: '<app/>',
    store,
    router,
    render: h => h(require('./components/app/app.vue'))
})
