import Vuex from 'vuex'
import Vue from 'vue';
import  * as MUTATIONS from './mutation-types'

interface todo {
    text:string
}
Vue.use(Vuex);
export {MUTATIONS}
export default new Vuex.Store({
    state: {
        todos: [
            {text: "item 1"},
            {text: "item 2"},
            {text: "item 3"}
        ],
        active: <todo|null> null
    },

    getters: {
        todos: state => state.todos,
        hasActive: state => state.active!=null
    },
    mutations: {
        [MUTATIONS.SETACTIVE](state, todo) {
            state.active =  todo
        },
        [MUTATIONS.UPDATETODO](state, text) {
            state.active!.text = text
            state.active = null;
        }
    }
})