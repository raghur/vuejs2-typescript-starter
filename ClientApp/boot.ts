import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store'
Vue.use(VueRouter);
const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') },
    { path: '/app2', component: require('./components/apps/app2.vue.html') },
    { path: '/app3', component: require('./components/apps/app3.vue.html'), 
        props: {
            'simple': true,
            'headerText': `this is a trival example of using Vuex for centralized state storage. However, in this case, the state isn't
        shared - so we could have done the same thing with a data function.`
        } },
    { path: '/app4', component: require('./components/apps/app4.vue.html') },
    { path: '/slots', component: () => require.ensure(['./components/apps/slot-main.vue.html'], ()=> require('./components/apps/slot-main.vue.html'), "comps") },
    { path: '/example5', component: () => require.ensure(['./components/apps/example5.vue.html'], ()=> require('./components/apps/example5.vue.html'), "comps") },
    { path: '/Vuex', component: require("./components/apps/vuex.vue.html")  }
];

new Vue({
    el: '#app-root',
    store: store,
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
