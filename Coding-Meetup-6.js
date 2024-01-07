function isSameLanguage(list) {
    let lan = list[0].language
    
    return list.every(x => x.language === lan)
}