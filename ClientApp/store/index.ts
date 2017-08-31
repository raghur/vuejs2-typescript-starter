import Vuex from 'vuex'
import Vue from 'vue';
import  * as MUTATIONS from './mutation-types'
import LoginRequest from '../components/apps/loginrequest'

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
        isAdding: false,
        loggedinUser: ""

    },

    getters: {
        todos: state => state.todos,
        hasActive: state => state.active!=null,
        isAdding: state => state.isAdding,
        isLoggedIn: state => state.loggedinUser != "",
        loggedInUser: state => state.loggedinUser
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
        },
        login(state, user) {
            state.loggedinUser = user
        },
        logout(state) {
            state.loggedinUser = ""
        }
    },
    actions: {
        login(context, payload:LoginRequest) {
            return new Promise((resolve, reject) => {
                console.log(payload)
                setTimeout(function() {
                    if (payload.username != "bad") {
                        resolve()
                        context.commit("login", payload.username);
                    } else {
                        reject("bad credentials - can't login")
                    }
               }, 1000);
            });
        },
        logout(context) {
            context.commit("logout")
        }
    }
})