import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import * as Forecast from '../../store/modules/forecast'

@Component
export default class FetchDataComponent extends Vue {

    timeSpent: number = 0
    failedReason: string = ''

    get forecasts (): Forecast.WeatherForecast[] {
        return Forecast.getForecastData(this.$store)
    }

    get countForecasts (): number {
        return Forecast.getCountForecastData(this.$store)
    }

    get forecastStatus (): Forecast.RequestStatus {
        return Forecast.getForecastStatus(this.$store)
    }

    get requestTimeSpent (): string {
        return `${this.timeSpent}ms`
    }

    mounted () {
        // Forecast
        let rt = Date.now()
        Forecast.dispatchRequestForecastData(this.$store)
            .then(() => {
                this.timeSpent = (Date.now() - rt)
            })
            .catch((reason) => {
                this.failedReason = reason
            })
    }
}
