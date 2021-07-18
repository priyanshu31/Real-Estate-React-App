import React from 'react'
import { Link } from 'react-router-dom'

const propertyCard = (props) => {
    return (
        <div className="card" style={{width: "18rem", margin: "1rem 0.5rem", padding: "1rem 0.5rem"}}>
            <img src={props.detials.image} alt="" className="card-img-top" />
            <div className="card-body" style={{margin: "0.5rem 0rem"}}>
                <h5 className="card-title">{props.detials.title}</h5>
                <p className="card-text">{props.detials.description}</p>
                <Link to="/" className="btn btn-primary">Explore...</Link>
            </div>
        </div>
    )
}

export default propertyCard
