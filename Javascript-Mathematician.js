function calculate(...outer) {
    return (...inner) => [...outer, ...inner].reduce((acc, c) => acc + c, 0)
}