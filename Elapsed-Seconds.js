function elapsedSeconds(startDate, endDate){
    return (new Date(endDate).getTime() - new Date(startDate).getTime()) / 1000
}

//better

function elapsedSeconds(startDate, endDate){
    return (endDate - startDate) / 1000
}