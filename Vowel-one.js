function vowelOne(s){
    return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
}