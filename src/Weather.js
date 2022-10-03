import React from "react";
import axios from "axios";

export default function Weather() {
    function showWeather(response) {
        let temperature = response.data.main.temp;
        alert(temperature);
    }

    let appKey = "8a5a5cc90e2c01a958e2254f16f6442f";
    let units = "metric";
    let city = "Madrid"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=${units}`;
    axios.get(url).then(showWeather);


    return (
        <div>
            <h2>Weather in Paris is </h2>
        </div>
    )
};