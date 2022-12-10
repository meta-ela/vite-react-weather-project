import './hourlyForecast.css';

import { API_KEY } from '../../api';
import { useState, useEffect } from 'react';

function HourlyForecast(props) {
    const [dataHourlyForecast, setDataHourlyForecast] = useState({});
    const [error, setError] = useState(null);
    const [forecastLoaded, setForecastLoaded] = useState(false);

    /* console.log(props.data.coord.lat + ' dati coord '); */
    useEffect(() => {
        if (props.loaded) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${API_KEY}&units=metric`,)
                .then((response) => {
                    const res = response.json();
                    return res
                })
                .then((res) => {
                    setDataHourlyForecast(res);
                    setForecastLoaded(true);
                })
        }

    }, [props.coord])

    const renderComponent = ()=> {
        if((props.loaded == false) && (forecastLoaded == false)) {
            return ""
        } else if ((props.loaded == true) && (forecastLoaded == true)) {
            return (<div>
                <div>
                    <div>{props.tempNow}</div>
                    <div>now</div>
                </div>
                {
                    dataHourlyForecast.list.map((data) => {
                        const date = new Date(Date.parse(data.dt_txt))
                        const todaysDate = new Date()
        
                        if((date.getDate() == todaysDate.getDate()) && (date.getMonth() == todaysDate.getMonth())) {
                            return <div key={data.dt_txt}>
                                <div>{Math.round(data.main.temp)}</div>
                                <div>{date.getHours()}</div>
                            </div>
                        }
                        
                    })
                }</div>)
            
        }
    }

    return (
        <div className="hourlyForecast debugBorder">
            {renderComponent()}
        </div>
    )
}
export default HourlyForecast;