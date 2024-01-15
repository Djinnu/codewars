function solution(fullText, searchText){
    const regexp = new RegExp(searchText, 'g')
    
    return fullText.match(regexp)?.length || 0
}