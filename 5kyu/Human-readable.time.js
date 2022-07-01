function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds - (hours * 3600)) / 60)
    let sec = seconds - (hours * 3600) - (minutes * 60)

    if(hours.toString().length < 2) {
        hours = '0' + hours
    }

    if(minutes.toString().length < 2) {
        minutes = '0' + minutes
    }

    if(sec.toString().length < 2) {
        sec = '0' + sec
    }


    return `${hours}:${minutes}:${sec}`  
}