import Vue from 'vue'
import Vuex from 'vuex'
import { store as forecastStore, ForecastState } from './modules/forecast'
// import { store as reportStore, ReportState } from './report/reportStore'
// import { store as appStore, AppState } from './app/appStore'
// import { store as filterStore, FilterState } from './filter/filterStore'
// import { store as favorStore, FavorState } from './favor/favorStore'

Vue.use(Vuex)

// Root state of the store
export interface State {
    forecast: ForecastState
}

const createStore = () => new Vuex.Store<State>({
    modules: {
        forecast: forecastStore
    }
})

export const store = createStore()
export default store
