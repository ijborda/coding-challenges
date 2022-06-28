// function nextBigger(number){
//   let numArr = number.toString().split('')
//   if (numArr.join('') === number.toString().split('').sort((a, b) => +b - +a).join('')) {
//     return -1;
//   }
//   numArr.reverse().every((a, i, arr) => {
//     if (a > arr[i + 1]) {
//       if (i === arr.length - 2) {
//         let last = arr[arr.length - 1]
//         numArr.pop();
//         numArr.unshift(last);
//       } else {
//         arr[i] = arr[i + 1];
//         arr[i + 1] = a;
//       }
//       return false;
//     } else {
//       return true;
//     }
//   })
//   return +numArr.reverse().join('');
// }

// console.log(nextBigger(12)); // 21
// console.log(nextBigger(513)); // 531
// console.log(nextBigger(2017)); // 2071
// console.log(nextBigger(790)); // 907
// console.log(nextBigger(111)); // -1

