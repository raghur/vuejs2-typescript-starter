
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
        "todo-item": () => require.ensure(
                                    ["./todo-item.vue.html"],
                                    () => require("./todo-item.vue.html"),
                                    "comps")
    }
}