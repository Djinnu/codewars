function maxDiff(list) {
    let max = Math.max(...list)
    let min = Math.min(...list)
  
    return list.length < 2 ? 0 : max-min
};