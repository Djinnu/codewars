//my first solution:
class Dinglemouse{
    constructor( firstName, lastName ){
      this.firstName = firstName
      this.lastName = lastName
    }
    
    getFullName(){
      if(this.firstName && this.lastName) {
         return this.firstName+" "+this.lastName
      } else if (this.firstName && !this.lastName) {
        return this.firstName
      } else if (!this.firstName && this.lastName) {
        return this.lastName
      } else {
        return ''
      }
    }
}
//better solution:
class Dinglemouse{

    constructor( firstName, lastName ){
      this._firstName=firstName;
      this._lastName=lastName;
    }
    
    getFullName(){
      return `${this._firstName} ${this._lastName}`.trim();
    }
    
}