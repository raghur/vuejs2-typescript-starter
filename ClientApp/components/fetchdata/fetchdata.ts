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
        try {
            await Forecast.dispatchRequestForecastData(this.$store)
        } catch (e) {
            this.failedReason = e
        }
        this.timeSpent = (Date.now() - rt)
    }

    loading () {
        Forecast.commitForecastStatusLoading(this.$store)
    }

    failed () {
        Forecast.commitForecastStatusFailed(this.$store)
    }

 }
