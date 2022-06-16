// New Cashier Does Not Know About Space or Shift

function getOrder(input) {
  const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
  orders = menu.reduce((acc, a) => {
    // Determine how many orders for each menu item
    let regex = new RegExp(`(${a.toLowerCase()})`, "g")
    let orderNum = ((input.match(regex)) || []).length
    // Append orders of current menu item to orders array
    acc.push(...Array.from(new Array(orderNum), _ => a))
    return acc
  }, [])
  return orders.join(' ')
}

// Test
console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"));
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"));
// "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");