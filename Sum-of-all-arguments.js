function sum() {
    return [...arguments].reduce((acc, c) => acc + c, 0)
}