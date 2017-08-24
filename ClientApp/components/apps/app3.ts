import Vue from 'vue';
export default Vue.component('app3', {
    data: function() {
        return {
            todos: [
                {text: "item 1"},
                {text: "item 2"},
                {text: "item 3"}
            ]
        }
    }
});