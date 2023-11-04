function cubeOdd(arr) {
    return arr.every(x => typeof x === 'number') ? arr.reduce((acc, c) => c % 2 !== 0 ? Math.pow(c, 3) + acc : 0 + acc, 0) : undefined
}