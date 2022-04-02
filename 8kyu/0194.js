// Tip Calculator

function calculateTip(amount, rating) {
    console.log(amount, rating)
    let tipPercent = {
      terrible: 0,
      poor: 0.05,
      good: 0.10,
      great: 0.15,
      excellent: 0.20
    }[rating.toLowerCase()]
    return tipPercent === undefined ? "Rating not recognised" : Math.ceil(tipPercent * amount) 
}