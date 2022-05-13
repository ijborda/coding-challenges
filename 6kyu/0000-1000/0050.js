// If you can read this...

let NATO = { a: 'Alfa',
             n: 'November',
             b: 'Bravo',
             o: 'Oscar',
             c: 'Charlie',
             p: 'Papa',
             d: 'Delta',
             q: 'Quebec',
             e: 'Echo',
             r: 'Romeo',
             f: 'Foxtrot',
             s: 'Sierra',
             g: 'Golf',
             t: 'Tango',
             h: 'Hotel',
             u: 'Uniform',
             i: 'India',
             v: 'Victor',
             j: 'Juliett',
             w: 'Whiskey',
             k: 'Kilo',
             x: 'Xray',
             l: 'Lima',
             y: 'Yankee',
             m: 'Mike',
             z: 'Zulu' }

function to_nato(words) {
    return words.replace(/([^\w ])/g, ' $1')
                .split('')
                .filter(a => !/\s/.test(a))
                .map(a => NATO[a.toLowerCase()] || a)
                .join(' ')
}

// Test
let x = to_nato('If you can read')
console.log(x) // "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"

let y = to_nato('go for it!')
console.log(y) // "Golf Oscar Foxtrot Oscar Romeo India Tango !"