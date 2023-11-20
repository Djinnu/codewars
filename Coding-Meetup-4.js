function getFirstPython(list) {
    let found = list.find(x => x.language === "Python") 
    return found ? `${found.firstName}, ${found.country}` : 'There will be no Python developers'  
}