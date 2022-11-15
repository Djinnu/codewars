//my solution:
function twiceAsOld(dadYearsOld, sonYearsOld) {
    if(dadYearsOld / 2 > sonYearsOld) return dadYearsOld - sonYearsOld * 2
    else if(dadYearsOld / 2 < sonYearsOld) return sonYearsOld - (dadYearsOld - sonYearsOld)
    else return 0
}
//better solution:
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}