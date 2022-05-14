function movie(card, ticket, perc) {
    let count = 0
    while(Math.ceil(card) >= ticket * count) {
      count++
      card += ticket * Math.pow(perc, count)
    }
    return count
}