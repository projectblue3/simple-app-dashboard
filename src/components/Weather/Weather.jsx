import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fiveDay } from './testdata';

const Weather = (props) => {
    const [forcast, setForcast] = useState(fiveDay);

    function finishForcast() {
        const fourDays = [];
        for (let i = 1; i < 5; i++) {
            fourDays.push(
                <div id={`day${i + 1}`} key={i}>
                    <div className="weather-date">{forcast.DailyForecasts[i].Date.slice(0, 10)}</div>
                    <div className="weather-detail">{forcast.DailyForecasts[i].Day.IconPhrase}</div>
                    <div className="weather-temps">
                        <div className="high">
                            <p>High:</p>
                            {forcast.DailyForecasts[i].Temperature.Maximum.Value}
                            {forcast.DailyForecasts[i].Temperature.Maximum.Unit}
                        </div>
                        <div className="low">
                            <p>Low:</p>
                            {forcast.DailyForecasts[i].Temperature.Minimum.Value}
                            {forcast.DailyForecasts[i].Temperature.Minimum.Unit}
                        </div>
                    </div>
                </div>
            );
        }
        return fourDays;
    }

    return (
        <div id="weather">
            <a href={forcast.Headline.Link} target="blank">
                <div id="day1">
                    <div className="weather-location">Orlando, FL</div>
                    <div className="weather-date"> {forcast.Headline.EffectiveDate.slice(0, 10)} </div>
                    <div className="weather-detail">{forcast.Headline.Text}</div>
                    <div className="weather-temps">
                        <div className="high">
                            <p>High:</p>
                            {forcast.DailyForecasts[0].Temperature.Maximum.Value}
                            {forcast.DailyForecasts[0].Temperature.Maximum.Unit}
                        </div>
                        <div className="low">
                            <p>Low:</p>
                            {forcast.DailyForecasts[0].Temperature.Minimum.Value}
                            {forcast.DailyForecasts[0].Temperature.Minimum.Unit}
                        </div>
                    </div>
                </div>

                {finishForcast()}
            </a>
        </div>
    );
};

export default Weather;
