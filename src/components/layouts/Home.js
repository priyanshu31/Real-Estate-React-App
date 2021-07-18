import React, { Fragment } from 'react'
import SearchBox from './SearchBox'
import PropertyCard from './propertyCard'
import building from '../../images/BuildingConstruction.jpg'

const Home = () => {
    return (
        <Fragment>

           <div className="container-fluid bg-image">
               <div style={{textAlign: "center"}}>
                    <h2 style={{margin: "2rem 0rem"}}>Tagline</h2>
                    <SearchBox />
               </div>
           </div>

            <h2 style={{margin: "3rem"}}>Top Picks for You</h2>

            <div className="container row" style={{margin: "2rem"}}>
                <PropertyCard />
            </div>

        </Fragment>
    )
}

export default Home
