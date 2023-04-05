function getStatus(isBusy) {
    var msg = isBusy ? "busy" : "available";
    
    return Hash = {
      "status": msg
    }
}