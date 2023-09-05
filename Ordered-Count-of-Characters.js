const orderedCount = function (text) {
    return Array.from(new Set(text)).map(x => [x, text.match(new RegExp(x, 'g')).length])
}