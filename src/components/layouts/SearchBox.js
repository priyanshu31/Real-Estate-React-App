import React from 'react'

const SearchBox = () => {
    return (
        <div className="search-group">
            <div className="input-group mb-3">

                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Location</span>
                </div>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Property Type</span>
                </div>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Budget</span>
                </div>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />

                <button type="button" className="btn btn-success" style={{textDecoration: "none", color: "whitesmoke", padding: "0.25rem 1rem"}}>Search</button>

            </div>
        </div>
    )
}

export default SearchBox
