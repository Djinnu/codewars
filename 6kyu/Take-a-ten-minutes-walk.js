//My first simple solution:
function isValidWalk(walk) {
    let nCount = 0
    let sCount = 0
    let wCount = 0
    let eCount = 0

    for(let i = 0; i < walk.length; i++) {
        if(walk[i] === 'n') {
            nCount++
        } else if(walk[i] === 's') {
            sCount++
        } else if(walk[i] === 'w') {
            wCount++
        } else {
            eCount++
        }
    }

    if(walk.length === 10 && nCount === sCount && wCount === eCount) {
        return true
    } else {
        return false
    }
}

//more compact solution:
function isValidWalk(walk) {
    var res = {n:0, w:0, s:0, e:0};
    walk.forEach((c) => res[c]++);
    return walk.length === 10 && res.n == res.s && res.e == res.w;
}