import { getStoreAccessors } from 'vuex-typescript'
import State from '../state'
import { ActionContext, Store } from 'vuex'

/* ---------------------------------------------------------------- */
// Declaration
//
// Declare your interface and type in this section
/* ---------------------------------------------------------------- */

export interface WeatherForecast {
    dateFormatted: string
    temperatureC: number
    temperatureF: number
    summary: string
}

export interface RequestStatus {
    loading: boolean,
    failed: boolean,
    received: boolean
}

export interface ForecastState {
    // Define properties
    forecastStatus: RequestStatus
    forecastData: WeatherForecast[]
}

type ForecastContext = ActionContext<ForecastState, State>

/* ---------------------------------------------------------------- */
// State
//
// The state of the store. Define your state in this section.
/* ---------------------------------------------------------------- */

const defaultForecastStatus = {
    loading: false,
    failed: false,
    received: false
}

const state: ForecastState = {
    // Define properties
    forecastStatus: {
        ...defaultForecastStatus
    },
    forecastData: []
}

/* ---------------------------------------------------------------- */
// Mutations
//
// The only way to change the state of the store by commiting
// mutations. Define your mutations in this section
/* ---------------------------------------------------------------- */

const mutations = {
    setClear (state: ForecastState) {
        state.forecastStatus = {
           ...defaultForecastStatus
        }
        state.forecastData = []
    },
    setReceivedForecastData (state: ForecastState, forecastData: WeatherForecast[]) {
        state.forecastStatus = {
            ...defaultForecastStatus,
            received: true
        }
        // set forecast data
        state.forecastData = forecastData
    },
    setForecastStatusLoading (state: ForecastState) {
        state.forecastStatus = {
            ...defaultForecastStatus,
            loading: true
        }
        // reset forecast data when try to reload data
        state.forecastData = []
    },
    setForecastStatusFailed (state: ForecastState) {
        state.forecastStatus = {
            ...defaultForecastStatus,
            failed: true
        }
        // reset forecast data when try to reload data
        state.forecastData = []
    }
}

/* ---------------------------------------------------------------- */
// Getters
//
// Sometimes we may need to compute derived state based on store state,
// for example filtering through a list of items and counting them.
// Define your getters in this section
/* ---------------------------------------------------------------- */

const getters = {
    getForecastData (state: ForecastState): WeatherForecast[] {
        return state.forecastData
    },
    getForecastStatus (state: ForecastState): RequestStatus {
        return state.forecastStatus
    },
    getCountForecastData (state: ForecastState): number {
        return state.forecastData.length
    }
}

/* ---------------------------------------------------------------- */
// Actions
//
// define all the actions with this section, action will perform when
// a dispatch signal is sent.
/* ---------------------------------------------------------------- */

const actions = {
    resetForecastData (context: ForecastContext) {
        commitClear(context)
    },
    requestForecastData (context: ForecastContext) {
        return new Promise((resolve, reject) => {
            commitForecastStatusLoading(context)
            // loading api to received data
            fetch('api/SampleData/WeatherForecasts')
                .then(response => response.json() as Promise<WeatherForecast[]>)
                    .then(data => {
                        commitReceivedForecastData(context, data)
                        // tell someone this dispatch action is resolved
                        resolve()
                    })
                .catch((reason) => {
                    // tell someone this dispatch action is rejected
                    commitForecastStatusFailed(context)
                    reject(reason)
                })
        })
    }
}

/* ---------------------------------------------------------------- */
// Store Constructor
//
// Compose state, getters, actions and mutations as a store
/* ---------------------------------------------------------------- */

export const store = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default store

/* ---------------------------------------------------------------- */
// Shorhand for access the store
//
// Define a shorthand to access actions, getters or mutations
// in the store.
/* ---------------------------------------------------------------- */

// Get the accessor to specified store
// The namespace must be equal to the name in the root store
const { commit, read, dispatch } = getStoreAccessors<ForecastState, State>('forecast')

/* ---------------------------------------------------------------- */

// Mutations shorthand
// export const commitSomething = commit(mutations.do_something)

// write your code here
export const commitClear = commit(mutations.setClear)
export const commitForecastStatusFailed = commit(mutations.setForecastStatusFailed)
export const commitForecastStatusLoading = commit(mutations.setForecastStatusLoading)
export const commitReceivedForecastData = commit(mutations.setReceivedForecastData)

/* ---------------------------------------------------------------- */

// Getters shorthand
// export const getSomething = read(getters.getSomethingInStore)

// write your code here
export const getForecastData = read(getters.getForecastData)
export const getForecastStatus = read(getters.getForecastStatus)
export const getCountForecastData = read(getters.getCountForecastData)

/* ---------------------------------------------------------------- */

// Actions shorthand
// export const dispatchSomething = dispatch(actions.doSomething)

// write your code here
export const dispatchRequestForecastData = dispatch(actions.requestForecastData)

/* ---------------------------------------------------------------- */
