// my first solution:
String.prototype.toJadenCase = function () {
    return this.split(' ').map(x => x.replace(x[0], x[0].toUpperCase())).join(' ')
};


/* another option : return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" "); */