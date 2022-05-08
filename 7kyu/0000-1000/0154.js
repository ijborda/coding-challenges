// Complementary DNA

function DNAStrand(dna){
    return dna.split('').map(a => a === 'A' ? 'T' : 
                                  a === 'T' ? 'A' :
                                  a === 'C' ? 'G' : 'C').join('')
}

// Test
let x = DNAStrand("ATTGC")
console.log(x) //   TAACG