function datingRange(age){
    let minAge = age <= 14 ? Math.floor(age - 0.10 * age) : Math.floor(age/2 + 7)
    let maxAge = age <= 14 ? Math.floor(age + 0.10 * age) : Math.floor((age-7) * 2)
    
    return `${minAge}-${maxAge}`
}