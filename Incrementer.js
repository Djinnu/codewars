function incrementer(nums) { 
    return nums.map((x, i) => x = (x+i+1) % 10)
}