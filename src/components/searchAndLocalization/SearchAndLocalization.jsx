/* attenzione proprio css */
import {useState} from 'react';


function SearchAndLocalization(props) {
    const onInputsChange= (e) => {
        props.setCity(e.target.value);
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        props.onHandleSubmit();
        props.setCity("");
    }

    return (
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={onInputsChange} value={props.city}/>
            </form>
        </div>
    );
}

export default SearchAndLocalization;