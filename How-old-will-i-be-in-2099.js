function  calculateAge(birthYear, year) {
  let age = year - birthYear
  
  if(age === 0) {
    return "You were born this very year!"
  } else if(age < 0) {
    return Math.abs(age) > 1 ? `You will be born in ${Math.abs(age)} years.` : `You will be born in ${Math.abs(age)} year.`
  } else {
    return age > 1 ? `You are ${age} years old.` : `You are ${age} year old.`
  }
}