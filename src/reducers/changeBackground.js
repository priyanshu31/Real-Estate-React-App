import building from '../images/BuildingConstruction.jpg'
import rent from '../images/Rent.jpg'
import plot from '../images/Plot.jpg'
import commercial from '../images/Commercial.jpg'

const intialBackgroundImage = building;

const changeBackground = (state = intialBackgroundImage, action) => {

    switch (action.type) {
        case "BUY": return intialBackgroundImage;
        case "RENT": return rent;
        case "PLOT": return plot
        case "COMMERCIAL": return commercial
        default: return state;
    }

}

export default changeBackground