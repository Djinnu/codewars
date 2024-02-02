//my solution:

function abbreviate(string) {
    return string.split(', ').map(x => {
      if(x.length <= 3) {
        return x
      } else if(x.includes('-')) {
        return x.split('-').map(z => {
          if(z.length <= 3) {
            return z
          } else {
            return z.replace(/[a-zA-Z]{4,}/g, (z) => z[0] + (z.length - 2) + z[z.length-1]) 
          }
        }).join('-')
      } else {
        return x.replace(/[a-zA-Z]{4,}/g, (x) => x[0] + (x.length - 2) + x[x.length-1]) 
      }
    }).join(', ')
}

//better one:
function abbreviate(string) {
    return string.replace(/\w{4,}/g, function(word) {
      return word[0] + (word.length - 2) + word.slice(-1);
    });
}