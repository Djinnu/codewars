function bouncingBall(h,  bounce,  window) {
    if(bounce >= 1 || window >= h || h < 0 || bounce < 0) {
     return -1
   }
   
   let result = -1 // bacause the last bounce won't reach the window
  
   while(h > window) {
     h = h * bounce
     result += 2 // because the ball will pass the window when it falls and when it bounces back
   }
   return result
}