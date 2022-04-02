// Calculate Price Excluding VAT

function excludingVatPrice(price){
    return price || price === 0 ? +(price / 1.15).toFixed(2) : -1
}