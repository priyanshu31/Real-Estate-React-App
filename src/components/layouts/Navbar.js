import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import DropdownMenu from './dropdownMenu.js'

const Navbar = (props) => {

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">React Properties</Link>

                    <div style={{display: "flex"}}>
                        <Link to="/" style={{textDecoration: "none", color: "whitesmoke", padding: "0.25rem 1rem"}}>Login</Link>
                        <button type="button" className="btn btn-info" style={{textDecoration: "none", color: "whitesmoke", padding: "0.25rem 1rem"}}>Post Property</button>
                    </div>

                    <div style={{display: "flex", paddingRight: "2rem"}}>
                        <DropdownMenu name="Services" menu={ props.services }/>
                        <DropdownMenu name="Location" menu={ props.locations }/>
                    </div>

                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
