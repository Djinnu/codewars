var number = function(busStops){
    let pplOnBus = 0
    busStops.forEach(x => pplOnBus += x[0] - x[1])
    return pplOnBus
}

//another option:
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);