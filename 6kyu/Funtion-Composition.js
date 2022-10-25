function compose(f,g) {
    return function(...arguments) {
      return f(g(...arguments))
    }
}

//params f and g are functions which are passed in eachother. Function g takes in any amount of given arguments(...spread operator) and later
//that function is passed into function f.