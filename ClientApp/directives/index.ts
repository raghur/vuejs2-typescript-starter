// create a install plugin for registering directive for Vue
export default {
    install: (Vue) => {
        Vue.directive('focus', require('./focus').default)
    }
}
