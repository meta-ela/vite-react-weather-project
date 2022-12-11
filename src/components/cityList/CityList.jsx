import './cityList.css';
import '../../css/index.css';

function CityList() {
    return (
        <div className="cityList h-100">
            <div className="row h-100 flex-column">
                <div className="col  mb-2">
                    <div className='btnContainerAddCity bg-secondary'>
                        <button className='btnAddCity'>+ Aggiungi città</button>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className='boxCity boxRadiusAndShadow'>
                        London
                    </div>
                </div>
                <div className="col">
                    <div className='boxCity boxRadiusAndShadow'>
                        Rome
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CityList;