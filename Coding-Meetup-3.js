function isRubyComing(list) {
    let newList = list.map(x => Object.values(x)).flat()
    return newList.includes('Ruby')
}

//better option:
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
}