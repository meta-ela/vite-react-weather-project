import { API_KEY } from '../../api';
import { useState, useEffect } from 'react';

import './container.css';

import CityList from '../cityList/CityList';
import MainWeather from '../mainWeather/MainWeather';
import SearchAndLocalization from '../searchAndLocalization/SearchAndLocalization';
import HourlyForecast from '../hourlyForecast/HourlyForecast';
import PeriodForecast from '../periodForecast/PeriodForecast';

import cloud from '../../img/cloud-prova.jpg';

function Container() {
    const [city, setCity] = useState("Bologna");
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [coord, setCoord] = useState({});
    const [tempNow, setTempNow] = useState(null);
    /* console.log(data); */

    useEffect(() => {
        /* console.log('logging use effect container') */
        getCityWeather();
    }, []);

    const getCityWeather = () => {
        /* console.log('logging in getCityWeather') */
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=it`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Inserisci una città valida");
                }
                const res = response.json();
                return res
            })
            .then(res => {
                setData(res);
                setCoord({ lat: res.coord.lat, lon: res.coord.lon });
                setTempNow(Math.round(res.main.temp))
                setLoaded(true);
            })
            .catch((err) => {
                setCity("");
                alert(err);
            });
    }

    return (
        <div className="app container position-relative">
            <div className="row mb-4">
                <div className="col-8">
                    <MainWeather
                        data={data}
                        loaded={loaded}
                    ></MainWeather>
                </div>
                <div className="col-4">
                    <CityList></CityList>
                </div>
            </div>

            <div className="row">
                <div className="col-8">
                    <HourlyForecast
                        coord={coord}
                        loaded={loaded}
                        tempNow={tempNow}
                    ></HourlyForecast>

                    {/* <PeriodForecast
                        coord={coord}
                        loaded={loaded}
                    ></PeriodForecast> */}
                </div>
                <div className="col-4">
                    <SearchAndLocalization
                        onHandleSubmit={getCityWeather}
                        city={city}
                        setCity={setCity}
                    ></SearchAndLocalization>
                </div>
            </div>
        </div>
    );
}

export default Container;