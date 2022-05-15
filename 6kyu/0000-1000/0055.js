// String array duplicates

function dup(s) {
    return s.map(w => w.replace(/([a-z])\1+/g, '$1'))
};

// Test
let x = dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])
console.log(x) // ['codewars','picaniny','hubububo']