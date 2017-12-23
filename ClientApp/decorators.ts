import { createDecorator } from 'vue-class-component'
import { mapGetters } from 'vuex'
import { store } from './store'

export const Getter = (fn: Function, propertyPath?: string): PropertyDecorator => {
    return createDecorator((options, key) => {
        options.computed = (!options.computed) ? {} : options.computed
        options.computed[key] = {
            set: undefined,
            get: () => {
                // pass the root store into the function
                if (propertyPath) {
                    let subValue = fn(store)
                    for (const pKey of propertyPath.split('.')) {
                        subValue = subValue[pKey]
                    }
                    return subValue
                }
                return fn(store)
            }
        }
    })
}
