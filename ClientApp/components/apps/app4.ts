import  Vue  from 'vue';

export default Vue.component('app4', {
    data: () => {
        return {
            todos: [
                {
                    id: 0,
                    text: "item 4"
                },
                {
                    id: 1,
                    text: "item 5"
                },
                {
                    id: 2,
                    text: "item 6"
                }
            ],
            active: null
        }
    },
    components: {
        "todo-item": () => new Promise((resolve, reject) => require(["./todo-item.vue.html"], resolve))
    }
});