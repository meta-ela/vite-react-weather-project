import "./mainWeather.css";
import "../../css/index.css";


import {mapImage} from '../../utilities/WeatherUtil';

function MainWeather(props) {

    /* const getTodaysDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        return today;
    } */

    const getTodaysDateAsString = () => {
        return new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});
    }

    return (
        <div className="mainWeather position-relative">
            {!props.loaded ? "" :
                <div className="weatherContainer boxRadiusAndShadow">
                    <h3>
                        {props.data.name}
                    </h3>
                    <div className="fw-bold">
                        {getTodaysDateAsString()}
                    </div>
                    <div>
                        {props.data.weather[0].main}
                    </div>
                    <div className="tempContainer gap-3 backColorGradient">
                        {Math.round(props.data.main.temp)}°
                        <img className='w-50' src={mapImage(props.data.weather[0].id)} alt="" />
                    </div>
                </div>}
        </div>
    );
}

export default MainWeather;