function circleArea(radius) {
    if(radius <= 0) throw new Error("Error!")
    return Math.PI * radius ** 2 
}