import React from "react";
import './weather.css';
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";

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
    return (
        <div className="Weather">

            <form >
                <div className="row">
                    <div className="col-10 d-flex justify-content-center">
                        <input type="search" placeholder="Enter a city" className="form-control" />
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <button type="submit">Search</button>
                    </div>
                </div>
            </form>

            <div className="row weather-data">
                <div className="col-sm-6 ">
                    <h1>Oaxaca, Mexico</h1>
                    <ul>
                        <li>
                            Monday, 2 Oct 13:45
                        </li>
                        <li>Humidity: 60%</li>
                        <li>Wind: 9.23 km/h</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-5 d-flex justify-content-end">
                            <ReactAnimatedWeather
                                icon={icons[2]}
                                color="white"
                                size={120}
                                animate={false}
                            />
                        </div>
                        <div className="col-sm-7 ">
                            <h2>23°C</h2>
                            <h3>Clear Sky</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Forecast />
        </div>
    )
}