//first solution:
function duckDuckGoose(players, goose) {
  if(goose > players.length) return players[(goose-1) % players.length].name
  return players[goose-1].name
}

//better one:
function duckDuckGoose(players, goose) {
    return players[(goose-1)%players.length].name
}