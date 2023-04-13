function uniTotal (string) {
    return string.split("").map(x => x.charCodeAt()).reduce((acc, c) => acc + c, 0)
}