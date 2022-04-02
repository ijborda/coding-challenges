// Training JS #10: loop statement --for

function pickIt(arr){
    var even = []
    var odd = []
    for (let i = 0; i < arr.length; i++) {
      arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i])
    }
    return [odd, even];
}