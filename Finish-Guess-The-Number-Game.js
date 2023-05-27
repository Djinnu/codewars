class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
   guess(n) {
      if (!this.lives) {
        throw 'already dead'
      } else if (n === this.number) {
        return true
      } else if (n !== this.number) {
        this.lives--;
        return false;
      }
    }
}