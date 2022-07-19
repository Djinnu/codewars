//my first solution:
function findEvenIndex(arr) {
    let sumLeft = 0
    let reduceRight = arr.slice(1, arr.lenght).reduce((acc, c) => acc + c, 0)
    
    if(reduceRight === 0) {
      return 0
    }

    for(let i = 0; i < arr.length; i++) {
        sumLeft += arr[i]
        reduceRight = arr.slice(i+2, arr.lenght).reduce((acc, c) => acc + c, 0)
        if(sumLeft === reduceRight) {
            return i+1
        }
    }

    return -1  
}

//better solution:
function findEvenIndex(arr){
    const sum = arr => arr.reduce((acc,cur)=> (acc+cur) ,0)
    return arr.findIndex((val,idx) => sum(arr.slice(0,idx)) === sum(arr.slice(idx+1)))
}