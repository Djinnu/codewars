function converter (mpg) {
  let val = mpg / 4.54609188 * 1.609344
  return Number(val.toFixed(2))
}