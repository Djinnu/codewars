//my solution:
function isValidIP(str) {
    let regex = /^([1-9]?[0-9]|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.([1-9]?[0-9]|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.([1-9]?[0-9]|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.([1-9]?[0-9]|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/
    
    return regex.test(str)
}

//other solution that might work:
function isValidIP(str) {
    var p = str.split('.');
    return p.length == 4 && p.every(function(s) {
      return /^\d+$/.test(s) && s >= 0 && s <= 255;
    });
}