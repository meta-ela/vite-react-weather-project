import {useState, useEffect} from 'react';

/* import CityList from './CityList'; */
import MainWeather from '../mainWeather/MainWeather';
/* import SearchAndLocalization from './SearchAndLocalization';
import TodayAndForecast from './TodayAndForecast'; */

function Container() {
    return (
        <div className="app">
            <MainWeather></MainWeather>
        </div>
    );
}

export default Container;