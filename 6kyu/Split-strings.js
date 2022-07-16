//my first solution:
function solution(str){
    let arr
    let solutionArr = []
    if(str.length % 2 !== 0) {
        str = str.replace(/\w$/, str.charAt(str.length-1) + '_')
        
    } 
    arr = str.split('')
    
    while(arr.length) {
        solutionArr.push(arr.splice(0, 2).join(''))
    }

    return solutionArr
}

//better solution:
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}