// Price of Mangoes

function mango(quantity, price){
    return ( 2 * Math.floor(quantity / 3) + (quantity % 3) ) * price
}