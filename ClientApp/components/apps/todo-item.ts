import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TodoItem extends Vue {
    @Prop()
    todo: any

    @Prop()
    active: any

    setActive (e: any) {
        this.$emit('update:active', this.todo)
    }
    get isActive () {
        return this.active && this.todo.id === this.active.id
    }
}
