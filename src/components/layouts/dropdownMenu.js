import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const dropdownMenu = (props) => {
    return (
        <Fragment>
            <div className="dropdown userdropdown">
                <ul className="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                  {props.name}
                </ul>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {
                        props.menu.map((item, index) => 
                            <Link key={index} to="/" className="dropdown-item">{ item }</Link>
                        )
                    }
                    
                </div>
            </div>

        </Fragment>
    )
}

export default dropdownMenu
