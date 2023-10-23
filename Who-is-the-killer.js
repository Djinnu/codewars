function killer(suspectInfo, dead) {
    for(const key in suspectInfo) {
      if(dead.every(x => suspectInfo[key].includes(x)))
        return key
    }
}