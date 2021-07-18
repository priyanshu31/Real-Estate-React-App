import React, { useState, useEffect } from 'react'

const SearchBox = () => {

    let [location, setLocation] = useState('');
    let [propertyType, setPropertyType] = useState('');
    let [budget, setBudget] = useState(5)

    let updateLocation = element => setLocation(element.target.value);
    let updatePropertyType = element => setPropertyType(element.target.value);

    return (
        <div className="search-group">
            <div className="input-group mb-3">

                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Location</span>
                </div>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={location} onChange={ updateLocation } />
                
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Property Type</span>
                </div>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={propertyType} onChange={ updatePropertyType } />
                
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Budget</span>
                </div>
                <input type="number" className="form-control" id="basic-url" aria-describedby="basic-addon3" />

                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3" value={budget}>in Lacs</span>
                </div>

                <button type="button" className="btn btn-success" style={{textDecoration: "none", color: "whitesmoke", padding: "0.25rem 1rem"}}>Search</button>

            </div>
        </div>
    )
}

export default SearchBox
