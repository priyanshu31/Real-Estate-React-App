import React from 'react'
import { Link } from 'react-router-dom'
import building from '../../images/BuildingConstruction.jpg'

const propertyCard = () => {
    return (
        <div className="card" style={{width: "18rem", margin: "1rem 0.5rem", padding: "1rem 0.5rem"}}>
            <img src={building} alt="" className="card-img-top" />
            <div className="card-body" style={{margin: "0.5rem 0rem"}}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )
}

export default propertyCard
