//solution i first had in mind, but fucked up with:
function toCamelCase(str){
    let regex = /\_\w/g
    return str.replace(regex, (w)=> w.charAt(1).toUpperCase())
}

//my first completed solution:
function toCamelCase(str){
    let regex = /\_|\-/
    let arr = str.split(regex)
    let mapArr = arr.map((x,i,arr) => {
        if(x !== arr[0]) {
            return x.replace(x[0], x[0].toUpperCase())
        } else {
            return x
        }
    })
    
    return mapArr.join('')
}