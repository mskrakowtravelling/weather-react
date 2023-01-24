import React, { useState } from "react";
import './weather.css';
import ReactAnimatedWeather from 'react-animated-weather';
import Forecast from "./Forecast";
import axios from "axios";

const icons = [
    `CLEAR_DAY`,
    `CLEAR_NIGHT`,
    `PARTLY_CLOUDY_DAY`,
    `PARTLY_CLOUDY_NIGHT`,
    `CLOUDY`,
    `RAIN`,
    `SLEET`,
    `SNOW`,
    `WIND`,
    `FOG`
];

export default function Weather() {

    function showWeather(response) {
        alert(response.data.main.temp)
    }

    const appKey = "8a5a5cc90e2c01a958e2254f16f6442f";
    let units = "metric";
    let city = "Madrid"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${appKey}`;
    axios.get(url).then(showWeather);




    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-10 d-flex justify-content-center">
                        <input type="search" placeholder="Enter a city" className="form-control" />
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <button type="submit" >Search</button>
                    </div>
                </div>
            </form>

            <div className="row weatherData">
                <div className="col-md-6 mainWeatherInfo">
                    <div>
                        <h1>Oaxaca, Mexico</h1>
                        <ul>
                            <li>
                                <h2>Monday, 2 Oct 13:45</h2>
                            </li>
                            <li><h2>Humidity: 60%</h2></li>
                            <li><h2>Wind: 9.23 km/h</h2></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="row">
                        <div className="col-sm-6 weatherIcon">
                            <div>
                                <ReactAnimatedWeather
                                    icon={icons[2]}
                                    color="black"
                                    size={120}
                                    animate={true}
                                />
                            </div>
                        </div>
                        <div className="col-sm-6 weatherInfo">
                            <div>
                                <h2 className="mainTemperature">23<sup>°C</sup></h2>
                                <h3 className="mainTemperature">Clear Sky</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Forecast />
        </div>
    )
}