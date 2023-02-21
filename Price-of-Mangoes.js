function mango(quantity, price){
  let totalPrice = quantity * price
  let saved = Math.floor(quantity / 3) * price
 
  return totalPrice - saved
}

//or

function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
}