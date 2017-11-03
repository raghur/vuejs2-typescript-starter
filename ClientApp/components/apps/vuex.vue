<template>
    <div >
        <h3>Vuex example</h3>
        <p>
        This is a more complicated example. We manage a list of todos - stored in
        Vuex. Clicking edit sets the active property which is shared between the editor and the list view. The 
        list also disables Edit action when something is being edited.
        The other interesting approach is to edit an active text without it being reactive fully - basically so that
        user can cancel the edit at any time. This is done by copying the active item text into a local state variable.
        </p>
        <app3 :simple="false" />
        <button @click="newItem" v-if="!hasActive" >Add Item</button>

        <todo-editor v-if="hasActive"/>
        
    </div>

</template>

<script>
import app3 from './app3.vue'
import todoEditor from './todo-editor.vue'
import { MUTATIONS } from '../../store'
export default {
    components: {
        todoEditor,
        app3
    },
    computed: {
        hasActive: function () {
            return this.$store.getters.hasActive || this.$store.getters.isAdding
        }
    },
    methods: {
        newItem () {
            this.$store.commit(MUTATIONS.ADDTODO)
        }
    }
}
</script>