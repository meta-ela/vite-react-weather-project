import './searchAndLocalization.css';

function SearchAndLocalization(props) {
    const onInputsChange= (e) => {
        props.setCity(e.target.value);
        /* console.log('logging on input change'); */
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        props.onHandleSubmit();
        props.setCity("");
        /* console.log('logging on handle submit'); */
    }

    return (
        <div className="searchBar debugBorder">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={onInputsChange} value={props.city}/>
            </form>
        </div>
    );
}

export default SearchAndLocalization;