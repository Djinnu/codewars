var filterString = function(value) {
    return Number(value.match(/\d/g).join(""))
}