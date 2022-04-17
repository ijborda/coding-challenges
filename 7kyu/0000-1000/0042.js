// Fun with lists: indexOf

function indexOf(head, value) {
    let i = 0
    let loc = -1
    let goIn = true
    if (head === null) return loc
    while (goIn) {
        if (head.data === value) return i
        i += 1
        if (head.next === null) {
            goIn = false
        } else {
            head = head.next
        }
    }
    return loc
}

// Test
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
let x = indexOf(listFromArray([1, 2, 3, 3]), 3)
console.log(x) // 2