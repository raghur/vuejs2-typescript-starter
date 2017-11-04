<template>
    <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>

        <table v-if="forecastStatus.received" class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                 <tr v-for="item in forecasts" :key="item.summary">
                    <td>{{ item.dateFormatted }}</td>
                    <td>{{ item.temperatureC }}</td>
                    <td>{{ item.temperatureF }}</td>
                    <td>{{ item.summary }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr><td colspan="4">Total Count: {{countForecasts}}</td></tr>
                <tr><td colspan="4">Time spent: {{requestTimeSpent}}</td></tr>
            </tfoot>
        </table>
        
        <p v-if="forecastStatus.loading"><em>Loading...</em></p>
        <div v-if="forecastStatus.failed">
            <h3>Oops, seems like there is something wrong</h3>
            <p>reason: {{failedReason}}</p>
        </div>
    </div>
</template>

<script src="./fetchdata.ts"></script>
