import { API_KEY } from '../../api';
import { useState, useEffect } from 'react';

import './container.css';

import CityList from '../cityList/CityList';
import MainWeather from '../mainWeather/MainWeather';
import Search from '../search/Search';
import Localization from '../localization/Localization';
import HourlyForecast from '../hourlyForecast/HourlyForecast';
import PeriodForecast from '../periodForecast/PeriodForecast';

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
        <div className="app container">
            <div className="row gy-5 h-100">
                <div className="col-lg-8">
                    <MainWeather
                        data={data}
                        loaded={loaded}
                    ></MainWeather>
                </div>

                <div className="col-lg-4">
                    <CityList></CityList>
                </div>

                <div className="col-lg-2">
                    <HourlyForecast
                        coord={coord}
                        loaded={loaded}
                        tempNow={tempNow}
                    ></HourlyForecast>
                </div>

                <div className="col-lg-6">
                    <PeriodForecast
                        data={data}
                        loaded={loaded}
                    ></PeriodForecast>
                </div>

                <div className="col-lg-4">
                    <div className="row gy-4 flex-column h-100">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-12">
                            <Search
                                onHandleSubmit={getCityWeather}
                                city={city}
                                setCity={setCity}
                            ></Search>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-12">
                            <Localization></Localization>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;