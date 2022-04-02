// Count the Monkeys!

function monkeyCount(n) {
    return Array.from(new Array(n), (_, i) => 1 + i)
}