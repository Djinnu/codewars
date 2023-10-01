//my first solution:
function vaporcode(string) {
    return string.replaceAll(" ", "").split("").map(x => x.toUpperCase()+ "  ").join("").trim() 
}

//better solution:
function vaporcode(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}