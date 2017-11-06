import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import forecastStore from './modules/forecast'

Vue.use(Vuex)

const createStore = () => new Vuex.Store<State>({
    modules: {
        forecast: forecastStore
    }
})

export const store = createStore()
export default store
