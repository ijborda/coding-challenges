// Meeting

function meeting(s) {
    return s.split(';')
            .map(a => a.split(':'))
            .sort((a, b) => {
                    if (a[1].toLowerCase() === b[1].toLowerCase()) {
                        return a[0].localeCompare(b[0])
                    } else {
                        return a[1].localeCompare(b[1])
                    }
                })
            .map(a => `(${a[1]}, ${a[0]})`.toUpperCase())
            .join('')
}

// Test
let x = meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn")
console.log(x) // "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"