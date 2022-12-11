import './localization.css';
import '../../css/index.css';

function Localization() {

    return (
        <div>
            <h4 className='mb-3'>Localization</h4>
            <div className='localizationCont boxRadiusAndShadow backColorGradient'>
                <div>
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <button className='btnLocalization'>
                    Add Localization
                </button>
            </div>
        </div>
    )
}

export default Localization;