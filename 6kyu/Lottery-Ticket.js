//my solution:
function bingo(ticket, win){
    let winCount = 0
    
    ticket.forEach(x => {
      for(let i = 0; i < x[0].length; i++) {
        if(x[0].charCodeAt(i) === x[1]) {
          winCount++
          break
        }
      }  
    })
    
    return winCount >= win ? "Winner!" : "Loser!"
}
//better one:
function bingo(ticket, win){
    var count = 0;
    
    ticket.forEach(game => {
      if (game[0].includes(String.fromCharCode(game[1]))) {
        count++;
      }
    });
    
    return (count >= win) ? "Winner!" : "Loser!";
  }