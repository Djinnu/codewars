function greet(name){  
    if(name === "Johnny")
      return "Hello, my love!";
    return "Hello, " + name + "!";
}

//or with terniary operator
function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}