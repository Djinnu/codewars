//fist solution:
function derive(coefficient,exponent) {
    let calcValue = coefficient * exponent
    
    return `${calcValue.toString()}x^${(exponent-1).toString()}`
}

//better one:
function derive(coefficient,exponent) {
    return `${coefficient*exponent}x^${exponent-1}`
}