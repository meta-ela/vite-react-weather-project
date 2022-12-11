import './cityList.css';
import '../../css/index.css';

function CityList() {
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
                <div className="col mb-3">
                    <div className='boxCity boxRadiusAndShadow boxCity1'>
                        London
                    </div>
                </div>
                <div className="col">
                    <div className='boxCity boxRadiusAndShadow boxCity2'>
                        Rome
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CityList;