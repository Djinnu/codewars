//my first solution:
function Dog (breed) {
    this.breed = breed;
}
  
var snoopy = new Dog("Beagle");
  
snoopy.bark = function() {
    return "Woof";
};
  
var scoobydoo = new Dog("Great Dane");
  scoobydoo.bark = function() {
    return "Woof"
}
//better one:
class Dog {
    constructor(breed) {
        this.breed = breed;
    }
    
    bark() {
        return "Woof";
    }
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");  