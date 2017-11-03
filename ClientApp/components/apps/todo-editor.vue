<template>
    <div>
        <textarea v-model="text"></textarea><br/>
        <button @click="save">Save</button>
        <button @click="cancel">Cancel</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import {MUTATIONS} from '../../store'

@Component
export default class TodoEditor extends Vue {
    text: string = this.$store.state.active.text

    save () {
        this.$store.commit(MUTATIONS.UPDATETODO, this.text)
    }

    cancel () {
        this.$store.commit(MUTATIONS.SETACTIVE, null)
    }
}
</script>