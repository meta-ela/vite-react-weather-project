import './cityList.css';
import '../../css/index.css';

import { API_KEY } from '../../api';
import { useState, useEffect } from 'react';

import { mapImage } from '../../utilities/WeatherUtil';

function CityList() {
    const [firstCityLoaded, setFirstCityLoaded] = useState(false);
    const [secondCityLoaded, setSecondCityLoaded] = useState(false);
    const [firstCityData, setFirstCityData] = useState({});
    const [secondCityData, setSecondCityData] = useState({});

    const getTodaysDateAsString = () => {
        return new Date().toLocaleDateString('en-us', { weekday:"long", day:"numeric", month:"long" });
    }

    useEffect(() => {
        /* console.log('logging use effect container') */
        getCityWeather("London", setFirstCityLoaded, setFirstCityData);
        getCityWeather("Torino", setSecondCityLoaded, setSecondCityData);
    }, []);
    
    const getCityWeather = (city, setLoaded, setData) => {
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
                setLoaded(true);
                /* console.log("city list"); */
                /* console.log(res) */
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="cityList h-100">
            <div className="row h-100 flex-column">
                <div className="col  mb-3">
                    <div className='btnContainerAddCity'>
                        <button className='btnAddCity'>
                            <i className="fa-regular fa-square-plus me-2"></i>
                            Aggiungi città
                        </button>
                    </div>
                </div>
                {!firstCityLoaded ? "" : <div className="col mb-3">
                    <div className='boxCity boxRadiusAndShadow boxCity1'>
                        <div className='row'>
                            <div className='col'>
                                <h4 className='text-white'>{firstCityData.name}</h4>
                                <div className='cityDay'>
                                    {getTodaysDateAsString()}
                                </div>
                            </div>
                            <div className='col'>
                                <img className='weatherImage' src={mapImage(firstCityData.weather[0].id)} alt="" />
                            </div>
                            <div className='col'>
                                <div className='cityTemp'>
                                    {Math.round(firstCityData.main.temp)}°
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                {!secondCityLoaded ? "" : <div className="col">
                    <div className='boxCity boxRadiusAndShadow boxCity2'>
                    <div className='row'>
                            <div className='col'>
                                <h4 className='text-white'>{secondCityData.name}</h4>
                                <div className='cityDay'>
                                    {getTodaysDateAsString()}
                                </div>
                            </div>
                            <div className='col'>
                                <img className='weatherImage' src={mapImage(secondCityData.weather[0].id)} alt="" />
                            </div>
                            <div className='col'>
                                <div className='cityTemp'>
                                    {Math.round(secondCityData.main.temp)}°
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default CityList;