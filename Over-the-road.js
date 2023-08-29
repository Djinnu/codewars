function overTheRoad(address, n){
    let endNumber = n * 2
    let addressIncrease = address > 1 ? address - 1 : 0
    return endNumber - addressIncrease
}