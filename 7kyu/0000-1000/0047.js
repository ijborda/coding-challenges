// What a "Classy" Song

class Song {
    constructor(title, artist) {
      this.title = title
      this.artist = artist
      this.listeners = []
    }
    
    howMany(arr) {
      let count = 0;
      arr.forEach(aud => {
        if( !this.listeners.includes(aud.toLowerCase()) ) {
            this.listeners.push(aud.toLowerCase())
            count += 1
        }
      })
      return count
    }
}

// Test
let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
let x = mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn'])
console.log(x) // 5
let y = mountMoose.howMany(['JoHn', 'Luke', 'AmAndA'])
console.log(y) // 2
let z = mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus'])
console.log(z) // 2
let a = mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE'])
console.log(a) // 1