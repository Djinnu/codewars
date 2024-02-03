function streetFighterSelection(fighters, position, moves){
    let row = position[0]
    let column = position[1]
    let currentChar = fighters[row][column]
    let output = []
    
    for(let i = 0; i < moves.length; i++) {
      if(row === 0 && moves[i] === 'up') {
        output.push(currentChar)
      } else if(row === 1 && moves[i] === 'down') {
        output.push(currentChar)
      } else if(row === 1 && moves[i] === 'up') {
        row = 0
        currentChar = fighters[row][column%6]
        output.push(currentChar)
      } else if(row === 0 && moves[i] === 'down') {
        row = 1
        currentChar = fighters[row][column%6]
        output.push(currentChar)
      } else if(moves[i] === 'right') {
        column += 1
        currentChar = fighters[row][column%6]
        output.push(currentChar)
      } else if(moves[i] === 'left') {
        column -= 1
        if(column < 0) {
          column = 5
        }
        currentChar = fighters[row][column%6]
        output.push(currentChar)
      }
    }
    return output;
}