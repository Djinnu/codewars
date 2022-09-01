//my first solution without regex:
String.prototype.camelCase=function(){
    return this.split(' ').map(x => x.split('').map((x,i) => i === 0 ? x.toUpperCase() : x).join('')).join('')
}

//other option without regex:
String.prototype.camelCase=function(){
    return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
}
