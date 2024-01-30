function matrixAddition(a, b){
    return a.map((x, i) => x.map((z, j) => z + b[i][j]))
}