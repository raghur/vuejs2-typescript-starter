
export default {
    data: () => ({
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
    }),

    components: {
        "todo-item": () => import(/* webpackChunkName: "comps" */ "./todo-item.vue")
    }
}