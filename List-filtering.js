//my solution:
function filter_list(l) {
    return l.filter(x => Number.isInteger(x))
}

//another option: return l.filter(v => typeof v == "number")