//my solution:
class Ship {
    constructor(draft, crew) {
      this.draft = draft;
      this.crew = crew;
    }
   
    isWorthIt() {
      return this.draft - this.crew *  1.5 > 20
    }
}

//another way:
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}
   
Ship.prototype.isWorthIt = function(){
   return this.draft-(this.crew*1.5) > 20;
}