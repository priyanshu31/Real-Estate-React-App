export const tagLine = (type) => {
    
    console.log(type)

    switch (type) {
        case "Buy": return { type: "BUY"};
        case "Rent": return { type: "RENT"};
        case "Plot": return { type: "PLOT"};
        case "Commercial": return { type: "COMMERCIAL"};
        default: return { type: "BUY" }
    }
    
}