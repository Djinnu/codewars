//my solution:
function hello(name) {
    if(!name) {
      return "Hello, World!"
    }   
    
    let newName = name.split('').map((x,i) => i === 0 ? x.toUpperCase() : x.toLowerCase()).join('')
    return `Hello, ${newName}!`
}

//other option:
function hello(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
      return "Hello, World!";
    }
}