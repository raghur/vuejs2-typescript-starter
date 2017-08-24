import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') },
    { path: '/app2', component: require('./components/apps/app2.vue.html') },
    { path: '/app3', component: require('./components/apps/app3.vue.html') },
    { path: '/app4', component: require('./components/apps/app4.vue.html') },
    { path: '/slots', component: require('./components/apps/slot-main.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
