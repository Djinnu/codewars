function longest(s1, s2) {
    let set = new Set(s1+s2)
    return Array.from(set).sort().join('')
}