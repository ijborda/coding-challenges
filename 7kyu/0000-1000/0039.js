// Fun with lists: length

function length(head) {
    let length = 0
    if (head === null) return length
    while (head.next !== null) {
        length += 1
        head = head.next
    }
    return length + 1
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
let x = length(null)
console.log(x)