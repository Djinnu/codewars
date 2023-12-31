function smaller(nums) {
    return nums.map((x, i, arr) => {
      let newArr = nums.slice(i+1)
      let count = 0
      newArr.forEach(z => {
        if(z < x) {
          count++
        } 
      })
      return count
    })
}