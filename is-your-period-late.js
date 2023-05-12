function periodIsLate(last, today, cycleLength) {
    var oneDay = 1000 * 60 * 60 * 24;
    var difference = ( today.getTime() - last.getTime())/oneDay;

    if(difference > cycleLength){
        return true;
    }
    return false;
}