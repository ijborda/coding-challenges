// Remove All The Marked Elements of a List

Array.prototype.remove_ = function(arr, rem){
    return arr.filter( a => !rem.includes(a))
}

// Test
l = new Array()
integer_list = [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8]
values_list  = [1, 3, 4, 2]
let x = l.remove_(integer_list, values_list)
console.log(x) // [5, 6 ,7 ,8])