// Triangle type

function triangleType(...sides){
  const tri = {
    notTriangle: 0,
    acute: 1,
    right: 2,
    obtuse: 3
  }
  sides = sides.sort((a, b) => a - b);
  if (sides[0] + sides[1] <= sides[2]) {
    return tri["notTriangle"];
  }
  if (+Math.hypot(sides[0], sides[1]).toFixed(5) === sides[2]) {
    return tri["right"]
  }
  if (+Math.hypot(sides[0], sides[1]).toFixed(5) > sides[2]) {
    return tri["acute"]
  }
  if (+Math.hypot(sides[0], sides[1]).toFixed(5) < sides[2]) {
    return tri["obtuse"]
  }
}
 
console.log(triangleType(7,3,2))  // 0; // Not triangle
console.log(triangleType(2,4,6))  // 0; // Not triangle
console.log(triangleType(8,5,7))  // 1; // Acute
console.log(triangleType(3,4,5))  // 2; // Right
console.log(triangleType(7,12,8)) // 3; // Obtuse
