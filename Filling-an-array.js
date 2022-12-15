//option 1
const arr = n => Array.from({length: n}, (_, i) => i);
//option 2
arr = n => n ? [...Array(n).keys()] : [];
//my first solution:
const arr = N => {
    let arr = []
    for(let i = 0; i < N; i++) {
      arr.push(i)
    }
    return arr
};