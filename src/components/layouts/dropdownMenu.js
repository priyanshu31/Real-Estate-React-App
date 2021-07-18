import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { tagLine } from '../../actions/index'

const DropdownMenu = (props) => {

    const dispatch = useDispatch()

    return (
        <Fragment>
            <div className="dropdown userdropdown">
                <ul className="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                  {props.name}
                </ul>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {
                        props.menu.map((item, index) => 
                            <Link key={index} to="/" className="dropdown-item" onClick={ () => dispatch(tagLine(item)) }>{ item }</Link>
                        )
                    }
                    
                </div>
            </div>

        </Fragment>
    )
}

export default DropdownMenu
