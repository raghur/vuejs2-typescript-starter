import Vuex from 'vuex'
import Vue from 'vue';
interface todo {
    text:string
}
Vue.use(Vuex);
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
        setActive(state, todo) {
            state.active =  todo
        },
        updateTodo(state, text) {
            state.active!.text = text
            state.active = null;
        }
    }
})