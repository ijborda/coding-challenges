// Smallest unused ID

function nextId(ids){
    return Array.from( new Array(ids.length + 1).keys() ).find( num => !ids.includes(num) )
}