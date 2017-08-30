<template>
    <div >
        <app3 :simple="false" headerText="This is a more complicated example. We manage a list of todos - stored in 
        Vuex. Clicking edit sets the active property which is shared between the editor and the list view. The 
        list also disables Edit action when something is being edited.
        The other interesting approach is to edit an active text without it being reactive fully - basically so that
        user can cancel the edit at any time. This is done by copying the active item text into a local state variable."/>

        <todo-editor v-if="hasActive"/>
    </div>

</template>

<script>
import Vue from 'vue'
import app3 from './app3.vue'
import todoeditor from './todo-editor.vue'
export default {
    components: {
        'todo-editor': todoeditor
    },
    computed: {
        hasActive: function(this:Vue) {
            return this.$store.getters.hasActive
        }
    }
}

</script>