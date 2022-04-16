// makeBackronym

let dict = {
    A: 'awesome',
    B: 'beautiful',
    C: 'confident',
    D: 'disturbing',
    E: 'eager',
    F: 'fantastic',
    G: 'gregarious',
    H: 'hippy',
    I: 'ingestable',
    J: 'joke',
    K: 'klingon',
    L: 'literal',
    M: 'mustache',
    N: 'newtonian',
    O: 'oscillating',
    P: 'perfect',
    Q: 'queen',
    R: 'rant',
    S: 'stylish',
    T: 'turn',
    U: 'underlying',
    V: 'volcano',
    W: 'weird',
    X: 'xylophone',
    Y: 'yogic',
    Z: 'zero'
}
var makeBackronym = function(string){
    return string.replace(/\w/g, char => dict[char.toUpperCase()] + " ").trim();
};

// Test
let x = makeBackronym('lkj')
console.log(x)