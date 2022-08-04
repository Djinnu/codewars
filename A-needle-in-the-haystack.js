//my solution:
function findNeedle(haystack) {
    for(let i = 0; i < haystack.length; i++) {
      if(haystack[i] === 'needle') {
        return `found the needle at position ${i}`
      }
    }
}

//better solution:
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}