function rgb(r, g, b){
    let arr = [r, g, b]
    let mapArr = arr.map(x => {
        if(x > 255) {
            return 'FF'
        } else if ( x < 0 ) {
            return '00'
        } else {
            return x.toString(16).padStart(2, '0').toUpperCase()
        }
    })
    return mapArr.join('')
}