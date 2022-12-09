import { API_KEY } from '../../api';
import {useState, useEffect} from 'react';

/* import CityList from './CityList'; */
import MainWeather from '../mainWeather/MainWeather';
import SearchAndLocalization from '../searchAndLocalization/SearchAndLocalization';
import HourlyForecast from '../hourlyForecast/HourlyForecast';
import PeriodForecast from '../periodForecast/PeriodForecast';

function Container() {
    const [city, setCity] = useState("Bologna");
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [coord, setCoord] = useState({});


    useEffect(() => {
        getCityWeather();
    }, []);
    
    const getCityWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=it`)
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Inserisci una città valida");
                }
                const res = response.json();
                return res 
            })
            .then(res => {
                setData(res)
                setCoord({lat: res.coord.lat, lon: res.coord.lon})
                setLoaded(true);
            })
            .catch((err) => {
                setCity("");
                alert(err);
            });
    }

    return (
        <div className="app">
            <MainWeather 
            data={data}
            loaded={loaded}
            ></MainWeather>

            <SearchAndLocalization 
            onHandleSubmit={getCityWeather}
            city={city}
            setCity={setCity}
            ></SearchAndLocalization>

            <HourlyForecast
            coord={coord}
            loaded={loaded}
            ></HourlyForecast>

            <PeriodForecast
            coord={coord}
            loaded={loaded}
            ></PeriodForecast>
        </div>
    );
}

export default Container;