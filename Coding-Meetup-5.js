function countLanguages(list) {
    let lanObj = {}
    list.forEach(x => lanObj[x.language] ? lanObj[x.language]++ : lanObj[x.language] = 1)
    
    return lanObj
}