function searchNames( logins ){
    return logins.filter(x => x[0].endsWith("_"))
}