function findOutlier(integers){
    let arrX = integers.filter(x => x % 2 === 0)
    let arrY = integers.filter(x => !arrX.includes(x))
    return arrX.length < arrY.length ? arrX[0] : arrY[0]
}