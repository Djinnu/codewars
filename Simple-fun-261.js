function whoseMove(lastPlayer, win) {
    if(lastPlayer === 'black') {
      if(win) {
        return 'black'
      } else {
        return 'white'
      }
    } else {
      if(win) {
        return 'white'
      } else {
        return 'black'
      }
    }
}
//better solution
function whoseMove(lastPlayer, win) {
    const opp = lastPlayer === 'black' ? 'white' : 'black';
    return  win ? lastPlayer : opp;
}