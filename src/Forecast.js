import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import './forecast.css'

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

export default function Forecast() {
    return (
        <div className="Forecast">
            <div className="row d-flex justify-content-center">

                <div className="col">
                    <span className="weekday">Mon</span>
                    <ReactAnimatedWeather
                        icon={icons[2]}
                        color="white"
                        size={70}
                        animate={true}
                    /><span className="weekday">14° 12°</span>
                </div>

                <div className="col">
                    <span className="weekday">Mon</span>

                    <ReactAnimatedWeather
                        icon={icons[2]}
                        color="white"
                        size={70}
                        animate={true}

                    />
                    <span className="weekday">14° 12°</span>
                </div>
                <div className="col">
                    <span className="weekday">Mon</span>
                    <ReactAnimatedWeather
                        icon={icons[2]}
                        color="white"
                        size={70}
                        animate={true}
                    /><span className="weekday">14° 12°</span>
                </div>
                <div className="col">
                    <span className="weekday">Mon</span>
                    <ReactAnimatedWeather
                        icon={icons[2]}
                        color="white"
                        size={70}
                        animate={true}
                    /><span className="weekday">14° 12°</span>
                </div>
                <div className="col">
                    <span className="weekday">Mon</span>
                    <ReactAnimatedWeather
                        icon={icons[2]}
                        color="white"
                        size={70}
                        animate={true}
                    /><span className="weekday">14° 12°</span>
                </div>

            </div>

        </div>
    )
}