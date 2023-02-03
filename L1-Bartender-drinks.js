function getDrinkByProfession(param){
    let obj = {
      "jabroni": "Patron Tequila",
      "school counselor": "Anything with Alcohol",
      "programmer": "Hipster Craft Beer",
      "bike gang member": "Moonshine",
      "politician": "Your tax dollars",
      "rapper": "Cristal",
    }
    
    let str = param.toLowerCase()
    
    return obj[str] ? obj[str] : "Beer"
}