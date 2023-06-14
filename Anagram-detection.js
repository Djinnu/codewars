const isAnagram = function(test, original) {
    let newTest = test.toLowerCase().split("").sort().join("")
    let newOriginal = original.toLowerCase().split("").sort().join("")
   
    return newTest === newOriginal
};