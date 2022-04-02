// Transportation on vacation

function rentalCarCost(d) {
    return 40 * d - ( d >= 7 ? 50 :
                      d >= 3 ? 20 : 0)
}