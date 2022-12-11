import "./mainWeather.css";
import "../../css/index.css";

function MainWeather(props) {

    const getTodaysDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    return (
        <div className="mainWeather">
            {!props.loaded ? "" :
                <div className="weatherContainer boxRadiusAndShadow">
                    <h3>
                        {props.data.name}
                    </h3>
                    <div className="fw-bold">
                        {getTodaysDate()}
                    </div>
                    <div>
                        {props.data.weather[0].main}
                    </div>
                    <div className="tempContainer backColorGradient">
                        {Math.round(props.data.main.temp)}°
                    </div>
                </div>}
        </div>
    );
}

export default MainWeather;