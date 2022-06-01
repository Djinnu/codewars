function getMiddle(s) {
    let index = s.length / 2
    return s.length % 2 === 0 ? s.charAt(index-1)+s.charAt(index) : s.charAt(index)
}