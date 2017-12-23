import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import * as Forecast from '../../store/modules/forecast'
import { Getter } from '../../decorators'

@Component
export default class FetchDataComponent extends Vue {
    timeSpent: number = 0
    failedReason: string = ''

    @Getter(Forecast.getForecastData)
    forecasts: Forecast.WeatherForecast[]

    @Getter(Forecast.getCountForecastData)
    countForecasts: number

    @Getter(Forecast.getForecastStatus)
    forecastStatus: Forecast.RequestStatus

    get requestTimeSpent (): string {
        return `${this.timeSpent}ms`
    }

    mounted () {
        this.reload()
    }

    beforeDestroy () {
        this.clear()
    }

    clear () {
        Forecast.commitClear(this.$store)
    }

    async reload () {
        let rt = Date.now()
        const result = await await Forecast.dispatchRequestForecastData(this.$store)
        if (result) {
            this.timeSpent = (Date.now() - rt)
        } else {
            this.failedReason = 'Could not get data from remote server'
        }
    }

    loading () {
        Forecast.commitForecastStatusDidStarted(this.$store)
    }

    failed () {
        Forecast.commitForecastStatusDidFailed(this.$store)
        this.failedReason = ':) you just set failed'
    }

 }
