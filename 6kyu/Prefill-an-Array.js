// cw solution: 
function prefill(n, v) {
    if (typeof(n) == 'boolean' || isNaN(Number(n)) || (n % 1) != 0 || Number(n) < 0) throw new TypeError(`${n} is invalid`)
    
    let array = new Array(Number(n));
    
    return array.fill(v);
}