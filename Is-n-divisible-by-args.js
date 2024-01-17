function isDivisible(){
    const args = Array.from(arguments)
    for(let i = 1; i < args.length; i++) {
      if(args[0] % args[i] !== 0) {
        return false
      }
    }
    
    return true
}