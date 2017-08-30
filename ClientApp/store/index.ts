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
        active: <todo|null> null,
        isAdding: false

    },

    getters: {
        todos: state => state.todos,
        hasActive: state => state.active!=null,
        isAdding: state => state.isAdding
    },
    mutations: {
        [MUTATIONS.SETACTIVE](state, todo) {
            state.active =  todo
            state.isAdding = false
        },
        [MUTATIONS.UPDATETODO](state, text) {
            if (!state.isAdding) {
                state.active!.text = text
                state.active = null;
            } else {
                state.todos = state.todos.concat({text: text})
                state.active = null;
                state.isAdding = false;
            }
        },
        [MUTATIONS.ADDTODO](state, text) {
            state.active = {text: "Enter your text"}
            state.isAdding = true;
        }
    }
})