const intialTagline = "Buy your Dream House";

const changeTagline = (state = intialTagline, action) => {

    switch (action.type) {
        case "BUY": return state;
        case "RENT": return "Rent a Property";
        case "PLOT": return "Search upon the variaty of Plot we are having"
        case "COMMERCIAL": return "We have a lot of option for your property"
        default: return state;
    }

}

export default changeTagline