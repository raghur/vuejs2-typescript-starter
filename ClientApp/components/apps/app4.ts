import Vue from 'vue';
import todo from './todo-item.vue.html';
export default Vue.component('app4', {
    data: function() {
        return {
            todos: [
                {id: 0,
                    text: "item 4"},
                {id: 1,
                    text: "item 5"},
                {id: 2,
                    text: "item 6"}
            ],
            active: null
        }
    },
    components: {
        "todo-item": todo
    }
});