function cookie(x){
    switch(typeof x) {
        case 'string':
          return "Who ate the last cookie? It was Zach!"
        case 'number':
          return "Who ate the last cookie? It was Monica!"
        default:
          return "Who ate the last cookie? It was the dog!"
    }
}