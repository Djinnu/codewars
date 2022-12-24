function warnTheSheep(queue) {
    let wolfPlace = queue.length - queue.indexOf("wolf")
    return queue.indexOf("wolf") === queue.length - 1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${wolfPlace-1}! You are about to be eaten by a wolf!`
}