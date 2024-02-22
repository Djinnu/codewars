function removeRotten(bagOfFruits) {
    return bagOfFruits ? bagOfFruits.map(x => {
      x = x.toLowerCase()
      return x.replace('rotten', "")
    }) : []
}