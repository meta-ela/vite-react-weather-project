import './periodForecast.css';
import Sunny from '../../img/sunny.png';
import Cloudy from '../../img/cloudy.png';

function PeriodForecast(props) {

    return (
        <div className="periodForecast h-100">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item " role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                        This Week
                    </button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">This Month</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <div className="row">
                        <div className="col">
                            <div className='card'>
                                <h6>Monday</h6>
                                <div className='fw-bold fs-3 py-3'>10°</div>
                                <div>
                                    <img className='weatherImage' src={Sunny} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        <div className='card'>
                                <h6>Tuesday</h6>
                                <div className='fw-bold fs-3 py-3'>10°</div>
                                <div>
                                    <img className='weatherImage' src={Cloudy} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        <div className='card'>
                                <h6>Wednesday</h6>
                                <div className='fw-bold fs-3 py-3'>10°</div>
                                <div>
                                    <img className='weatherImage' src={Sunny} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center fw-bold fs-3'>. . . </div>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    <div className="card">
                        {!props.loaded ? "" : <div className="row">
                            <div className="col-4">
                                
                                <div className='text-start py-2 fw-light'>Wind speed: <br /> {Math.round(props.data.wind.speed)} Km</div>
                            </div>
                            <div className="col-8">
                                <div className='text-start fw-bold fs-3'>{Math.round(props.data.main.temp)} °</div>
                                <div className='text-start fw-light'>feels like: {Math.round(props.data.main.feels_like)} °</div>
                                <div className='text-start fw-light py-3'>The high will be {Math.round(props.data.main.temp_max)}°C, the low will be {Math.round(props.data.main.temp_min)}°C </div>
                                <div className='text-start fw-light'>humidity: {Math.round(props.data.main.humidity)} %</div>
                            </div>
                        </div> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeriodForecast;