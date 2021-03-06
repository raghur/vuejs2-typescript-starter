import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store'
Vue.use(VueRouter);
const routes = [
    { path: '/', component: require('./components/home/home.vue') },
    { path: '/counter', component: require('./components/counter/counter.vue') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue') },
    { path: '/app2', component: require('./components/apps/app2.vue') },
    { path: '/app3', component: require('./components/apps/app3.vue'), 
        props: {
            'simple': true,
            'headerText': `this is a trival example of using Vuex for centralized state storage. However, in this case, the state isn't
        shared - so we could have done the same thing with a data function.`
        } },
    { path: '/app4', component: require('./components/apps/app4.vue') },
    { path: '/slots', component: () => import(/* webpackChunkName: "comps" */ './components/apps/slot-main.vue') },
    { path: '/example5', component: () => import(/* webpackChunkName: "comps" */ './components/apps/example5.vue')},
    { path: '/Vuex', component: require("./components/apps/vuex.vue")  },
    { path: "/login", component: require("./components/apps/login.vue")},
    { path: "/pageauth", component: require("./components/apps/pageauth.vue")},
    { path: "/protected", component: require("./components/apps/protected.vue")},
    { path: "/route-meta", component: require("./components/apps/protected.vue"), meta: {requiresAuth: true}}
];
let router = new VueRouter({ mode: 'history', routes: routes })
new Vue({
    el: '#app-root',
    store: store,
    router: router,
    render: h => h(require('./components/app/app.vue'))
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next({
                path: "/login",
                query: {
                    from: to.fullPath
                }
            });
        } else {
            next()
        }
    } else {
        next()
    }
});