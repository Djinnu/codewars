function removeEveryOther(arr){
  console.log(arr.filter((x,i) => i % 2 === 0)) 
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
