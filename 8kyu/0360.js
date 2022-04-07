// Triple Trouble

function tripleTrouble(one, two, three){
    return [...one].reduce((accum, _, i) => accum += one[i] + two[i] + three[i], '')
}