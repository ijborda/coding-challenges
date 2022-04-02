// Color Ghost

var Ghost = function() {
    let r = Math.random()
    this.color = r < 0.25 ? "white" :
                 r < 0.50 ? "yellow" :
                 r < 0.75 ? "purple" : "red"
};