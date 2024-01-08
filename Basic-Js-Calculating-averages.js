var Calculator = {
    average: function() {
     let arr = Object.values(arguments)
     return arr.reduce((acc, c) => acc + c, 0) / arr.length || 0
    }
};