import Sunny from '../img/sunny.png';
import Cloudy from '../img/cloudy.png';
import Drizzle from '../img/drizzle.svg';
import Fog from '../img/fog.png';
import Rain from '../img/drizzle.svg';
import Snow from '../img/snow.png';
import Storm from '../img/storm.png';

export const mapImage = (id) => {
    switch (true) {
        case id >= 200 && id <= 232:
            return Storm;
        case id >= 300 && id <= 321:
            return Drizzle;
        case id >= 500 && id <= 531:
            return Rain;
        case id >= 600 && id <= 622:
            return Snow;
        case id >= 701 && id <= 781:
            return Fog;
        case id >= 801 && id <= 804:
            return Cloudy;
        case id === 800:
            return Sunny;
        default:
            return Sunny;
    }
};