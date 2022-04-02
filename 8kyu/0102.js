// Thinkful - Logic Drills: Traffic light

function updateLight(current) {
    return {
      green: "yellow",
      yellow: "red",
      red: "green"
    }[current]
}