function capitalize(s,arr){
    return s.split("").map((x, i) => arr.includes(i) ? x.toUpperCase() : x).join("")
};