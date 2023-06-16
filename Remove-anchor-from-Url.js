function removeUrlAnchor(url){
    let index = url.indexOf("#")
   
    return index !== -1 ? url.slice(0, index) : url
}