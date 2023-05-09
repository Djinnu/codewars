function ensureQuestion(s) {
    return s.charAt(s.length-1) === "?" ? s : s + '?'
}

//or:
const ensureQuestion = s => s.endsWith('?') ? s : s+'?'