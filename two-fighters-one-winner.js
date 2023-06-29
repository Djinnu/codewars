function declareWinner(fighter1, fighter2, firstAttacker) {
    let fighter1Turns = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    let fighter2Turns = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    
    return fighter1Turns < fighter2Turns ? fighter1.name : fighter2Turns < fighter1Turns ? fighter2.name : firstAttacker
}