/* attenzione proprio css */
import "./mainWeather.css"

function MainWeather(props) {

    const getTodaysDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    return (
        <div className="mainWeather container py-4">
            {!props.loaded ? "" :
                <div>
                    <h2>
                        {props.data.name}
                    </h2>
                    <div>
                        {getTodaysDate()}
                    </div>
                    <div>
                        {props.data.weather[0].main}
                    </div>
                    <div>
                        {Math.round(props.data.main.temp)}° C
                    </div>
                </div>}
        </div>
    );
}

export default MainWeather;