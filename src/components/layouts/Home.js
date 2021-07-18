import React, { Fragment } from 'react'
import SearchBox from './SearchBox'
import PropertyCard from './propertyCard'
import { useSelector } from 'react-redux'
import building from '../../images/BuildingConstruction.jpg'
import rent from '../../images/Rent.jpg'
import plot from '../../images/Plot.jpg'
import commercial from '../../images/Commercial.jpg'

const Home = () => {

    const taglineState = useSelector((state) => state.changeTagline)

    let propertyCardDetials = [
        {
            image: building,
            title: "Buy",
            description: "Buy Something"
        },
        {
            image: rent,
            title: "Rent",
            description: "Rent Something"
        },
        {
            image: plot,
            title: "Plot",
            description: "We have a lot of plots for you"
        },
        {
            image: commercial,
            title: "Commercial",
            description: "Have a look for properties for your business"
        },
    ]

    return (
        <Fragment>

           <div className="container-fluid bg-image">
               <div style={{textAlign: "center"}}>
                    <h2 style={{margin: "2rem 0rem"}}>{taglineState}</h2>
                    <SearchBox />
               </div>
           </div>

            <h2 style={{margin: "3rem"}}>Top Picks for You</h2>

            <div className="container-fluid row" style={{margin: "2rem", width: "auto", justifyContent: "center"}}>
                
                {
                    propertyCardDetials.map((detials, index) => 
                        <PropertyCard key={ index } detials = { detials } />
                    )
                }

            </div>

        </Fragment>
    )
}

export default Home
