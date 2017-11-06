// decorators.js
import { createDecorator } from 'vue-class-component'
import { mapGetters } from 'vuex'
import { store } from './store'

export const Getter = (fn: Function): PropertyDecorator => {
    return createDecorator((options, key) => {
        // component options should be passed to the callback
        // and update for the options object affect the component
        options.computed[key] = {
            set: undefined,
            get: () => {
                // pass the root store into the function
                return fn(store)
            }
        }
    })
}
