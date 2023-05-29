function describeAge(age) {
    let s="You're a(n)"
    return age<13?`${s} kid`:age<18?`${s} teenager`:age<65?`${s} adult`:`${s} elderly`
}

//better:
function describeAge(age) {
    return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}