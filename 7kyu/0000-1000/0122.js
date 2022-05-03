// Computer problem series #1: Fill the Hard Disk Drive

function save(sizes, hd) {
    let count = 0
    sizes.forEach(file => {
        if (file <= hd) count += 1
        hd -= file 
    })
    return count
}

// Test
let x = save([4, 8, 15, 16, 23, 42], 108)
console.log(x) // 6