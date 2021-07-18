import React, { Fragment } from 'react'
import SearchBox from './SearchBox'
import PropertyCard from './propertyCard'

const Home = () => {
    return (
        <Fragment>

           <div className="container" style={{textAlign: "center", margin: "7rem"}}>
               <h2>Tagline</h2>
               <SearchBox />
           </div>

            <h2 class="my-3 mx-3">Top Picks for You</h2>

            <div class="container-fluid row">
                <PropertyCard />
            </div>

        </Fragment>
    )
}

export default Home
