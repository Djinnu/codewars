//my solution:
class Cat extends Animal {
    constructor(name) {
      super(name)
    }
    speak() {
      return `${this.name} meows.`
    }
}

//other option:
class Cat extends Animal {
    speak() {
      return `${this.name} meows.`;
    }
}