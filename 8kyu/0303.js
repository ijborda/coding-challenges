// Circular Objects #1 - Running around in circles

function Circle() {
    this.value = "Hello World"
    this.self = this
}
let circular = new Circle