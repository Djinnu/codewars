function greetDevelopers(list) {
    list.forEach(x => x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`)
    return list
}