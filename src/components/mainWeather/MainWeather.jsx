import { API_KEY } from '../../api';
import { useState, useEffect } from 'react';

function MainWeather() {
    const [city, setCity] = useState("Bologna");

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((response) => console.log(response.json()));

        console.log('hello');
    }, [city]);

    return (
        <div className="mainWeather">

        </div>
    );
}

export default MainWeather;