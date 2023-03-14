//my solution:
function isLockNessMonster(s) {
    if(s.includes("tree fiddy")) {
      return true
    } else if(s.includes("3.50")) {
      return true
    } else if(s.includes("three fifty")) {
      return true
    } else {
      return false
    }
}

//another option:
const isLockNessMonster = (s) => /tree fiddy|three fifty|3.50/.test(s);