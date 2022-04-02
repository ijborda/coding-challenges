// Fuel Calculator

function fuelPrice(litres, pricePerLitre) {
    let price = litres >= 10 ? pricePerLitre - 0.25 : 
                litres >=  8 ? pricePerLitre - 0.20 :
                litres >=  6 ? pricePerLitre - 0.15 :
                litres >=  4 ? pricePerLitre - 0.10 :
                litres >=  2 ? pricePerLitre - 0.05 : pricePerLitre
    return +(litres * price).toFixed(2)
}