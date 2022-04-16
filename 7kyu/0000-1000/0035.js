// Fun with lists: lastIndexOf

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
function listFromArray(array) {
    if (!array) return null;
    var head = new Node(array[0]);
    var prev = head;
    for (var i = 1; i < array.length; i++) {
      var curr = new Node(array[i]);
      prev.next = curr;
      prev = curr;
    }
    return head;
}
function lastIndexOf(head, value) {
    let ans = -1
    let i = 0
    let goIn = true
    if (head === null) goIn = false
    while (goIn) {
        if (head.data === value) ans = i
        i += 1
        if (head.next === null) goIn = false
        head = head.next
    }
    return ans;
}

// Test
let x = lastIndexOf(null, 17)
console.log(x)