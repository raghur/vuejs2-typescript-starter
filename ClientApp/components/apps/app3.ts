import Vue from 'vue'
interface Todo {
    text: string,
}
export default Vue.component('app3', {
    props: ['simple', 'headerText'],
    computed: {
        todos: function (this: Vue) { return this.$store.getters.todos },
        hasActive: function (this: Vue) { return this.$store.getters.hasActive }
    },
    methods: {
        setActive (this: Vue, todo: Todo) {
            console.log('in edit', todo)
            this.$store.commit('setActive', todo)
        }
    }
})
