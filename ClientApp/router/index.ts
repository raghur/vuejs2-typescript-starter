import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: require('../components/home/home.vue') },
        { path: '/counter', component: require('../components/counter/counter.vue') },
        { path: '/fetchdata', component: require('../components/fetchdata/fetchdata.vue') }
    ],
    mode: 'history'
})
