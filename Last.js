function last(list){

    var last_argument = arguments[arguments.length-1];
    var last_element =  last_argument[last_argument.length - 1] || last_argument;
  
    return last_element
}