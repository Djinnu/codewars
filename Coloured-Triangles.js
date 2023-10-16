function triangle(row) {
    let colors = ['R', 'G', 'B']
    
    while(row.length > 1) {
      let newRow = ''
      for(let i = 0; i < row.length-1; i++) {
        if(row[i] === row[i+1]) {
          newRow += row[i]
        } else {
          let combinedColor = row[i] + row[i+1]
          newRow += colors.find(x => !combinedColor.includes(x))
        }
      }
      row = newRow
    }
    
    return row
}