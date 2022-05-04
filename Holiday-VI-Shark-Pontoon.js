//my first solution:
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
      return sharkDistance / (sharkSpeed / 2) > pontoonDistance / youSpeed ? 'Alive!' : 'Shark Bait!'
    } else {
      return sharkDistance / sharkSpeed > pontoonDistance / youSpeed ? 'Alive!' : 'Shark Bait!'
    }
}


/* better solution:   
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
} */