//my first solution:
function howManydays(month){
    switch (month){
      case 6:
        return 30;
      case 9:
        return 30;
      case 11:
        return 30;
      case 4:
        return 30;
      case 2:
        return 28;
      default:
        return 31
    }
}

//better one:
function howManydays(month){
    switch ( month ){
      case 2 : return 28
      case 4: case 6: case 9: case 11: return 30
      default: return 31
    }
}