//My first forced solution:
function formatDuration (seconds) {
    const years = Math.floor(seconds / (3600 * 24 * 365)),
          days = Math.floor(seconds % (3600 * 24 * 365) / (3600 * 24)),
          hours = Math.floor(seconds % (3600 * 24) / 3600),
          minutes = Math.floor((seconds %  3600) / 60),
          sec = Math.floor(seconds % 60)
    
    
    let yDisplay = years > 0 ? years + (years === 1 ? " year, " : " years, ") : ""
    let dDisplay = days > 0 ? days + (days === 1 ? " day, " : " days, ") : ""
    let hDisplay = hours > 0 ? hours + (hours === 1 ? " hour, " : " hours, ") : ""
    let mDisplay = minutes > 0 ? minutes + (minutes === 1 ? " minute" : " minutes") : ""
    let sDisplay = sec > 0 ? sec + (sec === 1 ? " second" : " seconds") : ""
    
    let arr = [yDisplay, dDisplay, hDisplay, mDisplay, sDisplay].filter(x => x !== "")
    
    if(arr.length > 1) {
      arr.splice(arr.length - 1, 0, ' and ')
      arr[arr.length - 3] = arr[arr.length - 3].replace(',', "").trim()
      return arr.join('').endsWith(',') ? arr.join('').replace(',', "").trim() : arr.join('')
    } else if(arr.length === 0) {
      return 'now'
    } else {
      return (yDisplay + dDisplay + hDisplay + mDisplay + sDisplay).replace(',', "").trim()
    }
}


//better solution:
function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}