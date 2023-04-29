import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fiveDay } from './testdata';
import './weather.css';

const Weather = (props) => {
    const [forcast, setForcast] = useState(fiveDay);

    function finishForcast() {
        const fourDays = [];
        for (let i = 1; i < 5; i++) {
            fourDays.push(
                <div id={`day${i + 1}`} className="next-day" key={i}>
                    <div className="weather-date">
                        <h4>{forcast.DailyForecasts[i].Date.slice(5, 10)}</h4>
                    </div>
                    <div className="weather-detail">
                        <div className="weather-note">{forcast.DailyForecasts[i].Day.IconPhrase}</div>
                        <div className="weather-temps">
                            <div className="high">
                                {forcast.DailyForecasts[i].Temperature.Maximum.Value}
                                {forcast.DailyForecasts[i].Temperature.Maximum.Unit}
                            </div>
                            <div className="low">
                                {forcast.DailyForecasts[i].Temperature.Minimum.Value}
                                {forcast.DailyForecasts[i].Temperature.Minimum.Unit}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return fourDays;
    }

    return (
        <div id="weather" className="widget">
            {/* <a href={forcast.Headline.Link} target="blank"> */}
            <h2 className="widget-name">Weather</h2>
            <div id="day1" className="current-day">
                <div className="weather-location">
                    <h3>Orlando,FL</h3>
                </div>
                <div className="weather-div">
                    <div className="weather-date">
                        <h4>Today</h4>
                    </div>
                    <div className="weather-detail">
                        <div className="weather-note">{forcast.Headline.Text}</div>
                        <div className="weather-temps">
                            <div className="high">
                                {forcast.DailyForecasts[0].Temperature.Maximum.Value}
                                {forcast.DailyForecasts[0].Temperature.Maximum.Unit}
                            </div>
                            <div className="low">
                                {forcast.DailyForecasts[0].Temperature.Minimum.Value}
                                {forcast.DailyForecasts[0].Temperature.Minimum.Unit}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="next-days">{finishForcast()}</div>

            {/* </a> */}
        </div>
    );
};

export default Weather;
