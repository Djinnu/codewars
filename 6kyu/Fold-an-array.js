//not my solution but found it super clever:
function foldArray(a, n) {
    const r = [], c = a.slice();
    while (c.length) r.push(c.pop() + (c.shift() || 0));
    return n - 1 ? foldArray(r, n - 1) : r;
}