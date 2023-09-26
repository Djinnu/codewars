function hasUniqueChars(str) {
    let array = str.split("")
    return array.every(x => array.indexOf(x) === array.lastIndexOf(x))
}