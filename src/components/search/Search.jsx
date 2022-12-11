import './search.css';
import '../../css/index.css';

function Search(props) {
    const onInputsChange = (e) => {
        props.setCity(e.target.value);
        /* console.log('logging on input change'); */
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onHandleSubmit();
        props.setCity("");
        /* console.log('logging on handle submit'); */
    }

    return (
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <div>
                    <h4 className='mb-3'>Search</h4>
                    <div className='d-flex position-relative'>
                        <input className='boxRadiusAndShadow inputSearch' type="text" onChange={onInputsChange} value={props.city} />
                        <button className='btnSearch backColorGradient' type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Search;