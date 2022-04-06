// Finish Guess the Number Game

class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if (this.lives <= 0) {
        throw new Error('No more lives')
      } else if (n === this.number) {
        return true
      } else {
        this.lives -= 1 
        return false;
      }
    }
}