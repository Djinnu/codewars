class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age);
      this.legs = 0;
      this.species = "shark";
      this.status = status;
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age);
      this.legs = 4;
      this.species = "cat";
      this.status = status;
    }
    
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age);
      this.legs = 4;
      this.species = "dog"
      this.master = master;
      this.status = status;
    }
    
    greetMaster() {
      return `Hello ${this.master}`
    }
  }

//or

class Shark extends Animal {
    constructor(name, age, status, legs = 0, species = "shark") {
      super(name, age, legs, species, status);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status, legs = 4, species = "cat") {
      super(name, age, legs, species, status);
    }
    
    introduce() {
      return super.introduce() + '  Meow meow!';
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master, legs = 4, species = "dog") {
      super(name, age, legs, species, status);
      this.master = master;
    }
    
    greetMaster() {
      return `Hello ${this.master}`;
    }
}