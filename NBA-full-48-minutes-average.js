function pointsPer48(ppg, mpg) {
  let result = (48/mpg * ppg).toFixed(1)
  return +result || 0
}