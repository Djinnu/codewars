function reverseNumber(n) {
  let reversedNum = n >= 0 ? Number(n.toString().split("").reverse().join("")) : Number("-" + (Math.abs(n).toString().split("").reverse().join("")))
  
  return reversedNum
}