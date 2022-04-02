// Simple validation of a username with regex

function validateUsr(username) {
    return /^[a-z_0-9]{4,16}$/.test(username) 
}