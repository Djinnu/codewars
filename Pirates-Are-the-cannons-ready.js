const cannonsReady = (gunners) => {
    const objValues = Object.values(gunners)
    if(objValues.includes('nay')) return "Shiver me timbers!"
    return "Fire!"
}