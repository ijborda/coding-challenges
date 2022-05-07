// Split Strings

function solution(str){
    return str.length % 2 ? (str.match(/../g) || []).concat([str[str.length - 1] + '_']) : str.match(/../g) || []
}

// Test
let x = solution("abcdef")
console.log(x) // ["ab", "cd", "ef"]