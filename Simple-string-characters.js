function solve(s){
    let upperCase = 0
    let lowerCase = 0
    let nums = 0
    let special = 0
    s.split('').forEach(x => {
        if (x.match(/[a-z]/g)) {
            lowerCase += 1
        } else if (x.match(/[A-Z]/g)) {
            upperCase += 1
        } else if (x.match(/[0-9]/g)) {
            nums += 1
        } else {
            special += 1
        }
    })
    return [upperCase, lowerCase, nums, special]
}