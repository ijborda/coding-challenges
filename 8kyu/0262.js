// ASCII Total

function uniTotal (string) {
    return string.split("").reduce( (sum, a) => sum + a.charCodeAt(), 0 )
}