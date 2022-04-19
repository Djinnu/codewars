function magNumber(info){
    let weapon = info[0]
    let bulletCount = info[1] * 3
    switch(weapon) {
      case "PT92":
        return Math.ceil(bulletCount / 17)
        break;
      case "M4A1":
        return Math.ceil(bulletCount / 30)
        break;
      case "M16A2":
        return Math.ceil(bulletCount / 30)
        break;
      case "PSG1":
        return Math.ceil(bulletCount / 5)
        break;
    }
  }