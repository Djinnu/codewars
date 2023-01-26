//my  first attempt with bad regex:
function validateUsr(username) {
    let res = /^([a-z]|\d|\_){4,16}$/.test(username) 
    return res
}

//better one
function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
}